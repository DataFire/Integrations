# @datafire/docusign

Client library for DocuSign

## Installation and Usage
```bash
npm install --save @datafire/docusign
```
```js
let docusign = require('@datafire/docusign').create();

.then(data => {
  console.log(data);
});
```

## Description

The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.

## Actions

### ServiceInformation_GetServiceInformation
Retrieves the available REST API versions.

DocuSign Production system: https://www.docusign.net/restapi/service_information
DocuSign Demo system: https://demo.docusign.net/restapi/service_information

You do not need an integrator key to view the REST API versions and resources.


```js
docusign.ServiceInformation_GetServiceInformation(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Services](#services)

### ServiceInformation_GetResourceInformation
Retrieves the base resources available for the DocuSign REST APIs.

You do not need an integrator key to view the REST API versions and resources.

Example: https://demo.docusign.net/restapi/v2 lists all of the base resources available in version 2 of the REST API on the DocuSign Demo system.

To view descriptions and samples of the service operations for all versions, remove the version number and add /help to the URL.

Example: https://demo.docusign.net/restapi/help lists the REST API operations on the DocuSign Demo system with XML and JSON request and response samples.


```js
docusign.ServiceInformation_GetResourceInformation(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Resources](#resources)

### Accounts_PostAccounts
Creates new DocuSign accounts.
You can use this method to create
a single account
or up to 100 accounts at a time.

When creating a single account,
the body of the request is a
[`newAccountDefinition`][newAccountDefinition]
object.

If the request succeeds.
it returns a
201 (Created) code.
The response returns the new account ID, password and the default user
information for each newly created account.


When creating multiple accounts,
the body of the request is a
`newAccountRequests`
object,
which contains one or more 
[`newAccountDefinition`][newAccountDefinition]
objects.
You can create up to 100 new accounts
at a time this way.

The body for a multi-account
creation request
looks like this in JSON:

```
{
  "newAccountRequests": [
    {
      "accountName": "accountone",
      . . .
    },
    {
      "accountName": "accounttwo",
      . . .
    }
  ]
}
```

A multi-account request
looks like this in XML:

```
<newAccountsDefinition xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.docusign.com/restapi">
  <newAccountRequests>
    <newAccountDefinition>
      . . .
    </newAccountDefinition>
    <newAccountDefinition>
      . . .
    </newAccountDefinition>
  </newAccountRequests>
</newAccountsDefinition>
```

A multi-account creation request
may succeed (report a 201 code)
even if some accounts could not be created.
In this case, the `errorDetails` property
in the response contains specific information
about the failure.


### Account Settings

The `accountSettings` property
is a [name/value][nameValue]
list that can contain the following settings:

| Name                                               | Type    | Authorization Required                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| :------------------------------------------------- | :------ | :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| adoptSigConfig                                     | Boolean | Admin                                                       | When **true**, the Signature Adoption Configuration page is available to account administrators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| allowAccessCodeFormat                              | Boolean | Admin                                                       | When **true**, the Access Code Format page is available to account administrators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| allowAccountManagementGranular                     | Boolean | Admin                                                       | When **true**, the Delegated Administration functionality is available to account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| allowBulkSend                                      | Boolean | Admin                                                       | When **true**, the account can set if the bulk send feature can be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| allowCDWithdraw                                    | Boolean | Admin                                                       | When **true**, signers can withdraw their consent to use electronic signatures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |  
| allowConnectSendFinishLater                        | Boolean | Reserved                                                    | Reserved for DocuSign.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| allowDataDownload                                  | Boolean | Admin                                                       | When **true**, the account can download envelope data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| allowEnvelopeCorrect                               | Boolean | Admin                                                       | When **true**, the account allows in process envelopes to be corrected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| allowEnvelopePublishReporting                      | Boolean | Admin                                                       | When **true**, the account can access the Envelope Publish section in Classic DocuSign Experience Account Administration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| allowExpressSignerCertificate                      | Boolean | Admin                                                       | When **true**, senders are allowed to use the DocuSign Express digital signatures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| allowExternalSignaturePad                          | Boolean | Admin                                                       | When **true**, an external signature pad can be used for signing. The signature pad type is set by the externalSignaturePadType property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| allowInPerson                                      | Boolean | SysAdmin                                                    | When **true**, the account allows In Person Signing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| allowMarkup                                        | Boolean | Admin                                                       | When **true**, the document markup feature is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| allowMemberTimezone                                | Boolean | Admin                                                       | When **true**, account users can set their own time zones.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| allowMergeFields                                   | Boolean | Admin                                                       | When **true**, the account can use merge fields in conjunction with DocuSign for Salesforce.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| allowMultipleSignerAttachments                     | Boolean | Admin                                                       | When **true**, multiple signer attachments are allowed for an envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| allowOfflineSigning                                | Boolean | Admin                                                       | When **true**, the account can use Offline Signing and envelopes signed using offline signing on mobile devices are synchronized with this account. This option and the inSessionEnabled option must both be enabled (**true**) for a caller to use offline signing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| allowOpenTrustSignerCertificate                    | Boolean | Admin                                                       | When **true**, senders are allowed to use the OpenTrust digital signatures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| allowPaymentProcessing                             | Boolean | Admin                                                       | When **true**, the account can access the Payment Processing set up page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| allowPersonalSignerCertificate                     | Boolean | Admin                                                       | When **true**, the account can specify that signers must use personal signer certificates during signing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| allowPrivateSigningGroups                          | Boolean | SysAdmin Read Only                                          | Reserved for DocuSign. This currently returns false in a response. This setting is only shown in the response when listing account settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| allowReminders                                     | Boolean | Admin                                                       | When **true**, the reminder and expiration functionality is available when sending envelops.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| allowSafeBioPharmaSignerCertificate                | Boolean | Admin                                                       | When **true**, senders are allowed to use the SAFE BioPharma digital signatures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| allowSharedTabs                                    | Boolean | Admin                                                       | When **true**, the account allows users to share custom tabs (fields). <br>   This setting is only shown when getting account settings. It cannot be modified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| allowSignDocumentFromHomePage                      | Boolean | Admin                                                       | When **true**, the Sign a Document Now button is available on the Home tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| allowSignatureStamps                               | Boolean | Reserved                                                    | Reserved for DocuSign.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| allowSignerReassign                                | Boolean | Admin                                                       | When **true**, the account allows signers to reassign an envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| allowSignerReassignOverride                        | Boolean | Admin                                                       | When **true**, the sender has the option override the default account setting for reassigning recipients.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| allowSigningGroups                                 | Boolean | SysAdmin Read Only                                          | When **true**, the account can use signing groups. This setting is only shown in the response when listing account settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| allowTabOrder                                      | Boolean | Admin                                                       | When **true**, the Tab Order field is available for use when creating tabs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| allowWorkspaceComments                             | Boolean | Reserved                                                    | Reserved for DocuSign.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| allowWorkspaceCreate                               | Boolean | Admin                                                       | When **true**, account users can create DocuSign Rooms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| attachCompletedEnvelope                            | Boolean | SysAdmin                                                    | When **true**, envelope documents are included as a PDF file attachment for signing completed emails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| authenticationCheck                                | String  | Admin                                                       | Sets when authentication checks are applied for recipient envelope access. This setting only applies to the following ID checks: <ul> <li>Phone Authentication</li> <li>SMS Authentication</li> <li>Knowledge-Based ID</li> </ul> This setting takes one of the following options: <ul> <li><p><code>initial_access</code>: The authentication check always applies the first time a recipient accesses the documents. Recipients are not asked to authenticate again when they access the documents from the same browser on the same device. If the recipient attempts to access the documents from a different browser or a different device, the recipient must pass authentication again. Once authenticated, that recipient is not challenged again on the new device or browser. The ability for a recipient to skip authentication for documents is limited to documents sent from the same sending account.</p></li> <li><p><code>each_access</code>: Authentication checks apply every time a recipient attempts to access the envelope. However, you can configure the Authentication Expiration setting to allow recipients to skip authentication when they have recently passed authentication by setting a variable timeframe.</p></li> </ul> |  
| autoNavRule                                        | String  | Admin                                                       | The auto-navigation rule for the account. Enumeration values are: <ul> <li><code>off</li></code> <li><code>required_fields</li></code> <li><code>required_and_blank_fields</li></code> <li><code>all_fields</li></code> <li><code>page_then_required_fields</li></code> <li><code>page_then_required_and_blank_fields</li></code> <li><code>page_then_all_fields</li></code> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| bulkSend                                           | Boolean | Admin                                                       | When **true**, the account allows bulk sending of envelopes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| canSelfBrandSend                                   | Boolean | SysAdmin                                                    | When **true**, account administrators can self-brand their sending console through the DocuSign Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| canSelfBrandSign                                   | Boolean | SysAdmin                                                    | When **true**, account administrators can self-brand their signing console through the DocuSign Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| conditionalFieldsEnabled                           | Boolean | Admin                                                       | When **true**, conditional fields can be used by the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| consumerDisclosureFrequency                        | enum    | Admin                                                       | Possible values are: <ul> <li> <code>once</code>: Per account, the supplemental document is displayed once only per userId. </li> <li> <code>always</code>: Per envelope, the supplemental document is displayed once only per userId. </li> <li> <code>each_access</code>: - Per envelope, the supplemental document is displayed once only per recipientId. </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| dataFieldRegexEnabled                              | Boolean | Admin                                                       | When **true**, the Regex field is available for tabs with that property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| dataFieldSizeEnabled                               | Boolean | Admin                                                       | When **true**, the maximum number of characters field is available for tabs with that property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |  
| dataPopulationScope                                | String  | Admin                                                       | Specifies how data is shared for tabs with the same tabLabel. There are two possible values: <ul> <li> <code>document</code>: Tabs in a document with the same label populate with the same data. </li> <li> <code>envelope</code>: Tabs in all documents in the envelope with the same label populate with the same data. </li> </ul> This setting applies to the following tab types: <ul> <li> Check box </li> <li> Company </li> <li> Data Field </li> <li> Dropdown List </li> <li> Full Name </li> <li> Formula </li> <li> Note </li> <li> Title </li> </ul> Changing this setting affects envelopes that have been sent but not completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| disableMobilePushNotifications                     | Boolean | Admin                                                       | When **true**, mobile push notifications are disabled on the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| disableMobileSending                               | Boolean | Admin                                                       | When **true**, sending from mobile applications is disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| disableMultipleSessions                            | Boolean | Admin                                                       | When **true**, account users cannot be logged into multiple sessions at once.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| disableUploadSignature                             | Boolean | Admin                                                       | When **true**, signers cannot use the upload signature/initials image option when signing a document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| documentConversionRestrictions                     | String  | Admin                                                       | Sets the account document upload restriction for non-account administrators. There are three possible values: <ul> <li> <code>no_restrictions</code> : there are no restrictions on the type of documents that can be uploaded. </li> <li> <code>allow_pdf_only</code> : only: non-administrators can only upload PDF files. </li> <li> <code>no_upload</code> : Non-administrators cannot upload files. </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| enableAutoNav                                      | Boolean | SysAdmin  or EnableAutoNavByDSAdmin is set                  | When **true**, the auto-navigation is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| enableCalculatedFields                             | Boolean | Admin & AllowExpression is set                              | When **true**, this account can use the Calculated Fields feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| enableDSPro                                        | Boolean | SysAdmin                                                    | When **true**, this account can send and manage envelopes from the DocuSign Desktop Client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| enableEnvelopeStampingByAccountAdmin               | Boolean | SysAdmin or account has EnableEnvelopeStampingByDSAdmin set | When **true**, senders for this account can choose to have the envelope ID stamped in the document margins.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| enablePaymentProcessing                            | Boolean | Admin & AllowPaymentProcessing is set.                      | When **true**, Payment Processing is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| enablePowerForm                                    | Boolean | SysAdmin                                                    | When **true**, PowerForm access is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| enablePowerFormDirect                              | Boolean | Admin                                                       | When **true**, direct PowerForms are enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| enableRecipientDomainValidation                    | Boolean | Admin                                                       | When **true**, validation on recipient email domains for DocuSign Access feature is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| enableRequireSignOnPaper                           | Boolean | Admin                                                       | When **true**, the account can use the requireSignOnPaper option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| enableReservedDomain                               | Boolean | SysAdmin                                                    | When **true**, an account administrator can reserve web domain and users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| enableSMSAuthentication                            | Boolean | Admin                                                       | When **true**, the account can use SMS authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| enableSendToAgent                                  | Boolean | SysAdmin                                                    | When **true**, this account can use the Agent Recipient Type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| enableSendToIntermediary                           | Boolean | Admin & AllowSendToIntermediary is set                      | When **true**, this account can use the Intermediary Recipient Type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| enableSendToManage                                 | Boolean | Admin                                                       | When **true**, this account can use the Editor Recipient Type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| enableSequentialSigningAPI                         | Boolean | SysAdmin                                                    | When **true**, the account can define the routing order of recipients for envelopes sent using the DocuSign API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| enableSequentialSigningUI                          | Boolean | SysAdmin                                                    | When **true**, the account can define the routing order of recipients for envelopes sent using the DocuSign console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| enableSignOnPaper                                  | Boolean | Admin                                                       | When **true**, a user can allow signers to use the sign on paper option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| enableSignOnPaperOverride                          | Boolean | Admin                                                       | When **true**, a user can override the default account setting for the sign on paper option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| enableSignerAttachments                            | Boolean | Admin                                                       | When **true**, a user can request attachments from a signer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| enableTransactionPoint                             | Boolean | SysAdmin                                                    | When **true**, Transaction Point is enabled for this account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| enableVaulting                                     | Boolean | SysAdmin                                                    | When **true**, this account can use electronic vaulting for documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| enableWorkspaces                                   | Boolean | Admin                                                       | When **true**, DocuSign Rooms is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| envelopeIntegrationAllowed                         | String  | SysAdmin                                                    | Shows the envelope integration rule for the account. <br> Enumeration values are: NotAllowed, Full, IntegrationSendOnly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| envelopeIntegrationEnabled                         | Boolean | Admin & EnvelopeIntegrationAllowed is set                   | When **true**, envelope integration is enabled for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |  
| envelopeStamplingDefaultValue                      | Boolean | (GET only)                                                  | When **true**, envelopes sent by this account automatically have the envelope ID stamped in the margins, unless the sender selects not to have them stamped.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| externalSignaturePadType                           | String  | Admin                                                       | Sets the type of signature pad that can be used. Possible values are: <ul> <li> <code>none</code> </li> <li> <code>topaz</code> </li> <li> <code>e_padv9</code> </li> <li> <code>e_pad_integrisign</code> </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| faxOutEnabled                                      | Boolean | Admin                                                       | When **true**, the account can use the fax out feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| idCheckExpire                                      | String  | Admin                                                       | Indicates when a user's authentication expires. Possible values are: <ul> <li> <code>always</code> </li> <li> <code>never</code> </li> <li> <code>variable</code>: Use the value in <code>idCheckExpireDays</code> </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| idCheckExpireDays                                  | Integer | Admin                                                       | The number of days before a user's authentication expires.  Valid only if the `IDCheckExpire` value is Variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| idCheckRequired                                    | String  | Admin                                                       | Indicates if authentication is required by envelope signers. Possible values are: <ul> <li> <code>always</code> </li> <li> <code>never</code> </li> <li> <code>optional</code>: Authentication is determined by the sender. </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| inPersonIDCheckQuestion                            | String  | Admin                                                       | The default question used by the In Person signing host for an In Person signing session.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| inSessionEnabled                                   | Boolean | Admin                                                       | When **true**, the account can use In Session (embedded) and offline signing. This option and the allowOfflineSigning option must both be enabled (**true**) for a caller to use offline signing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| inSessionSuppressEmails                            | Boolean | Admin                                                       | When **true**, emails are not sent to the embedded recipients on an envelope for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| maximumSigningGroups                               | String  | SysAdmin Read Only                                          | The maximum number of signing groups an account can have. The default value for this is 50. This setting is only shown in the response when listing account settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| maximumUsersPerSigningGroup                        | String  | SysAdmin Read Only                                          | The maximum number of members in a signing group. The default value for this is 50. This setting is only shown in the response when listing account settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| mobileSessionTimeout                               | String  | Admin                                                       | Sets the amount of idle activity time, in minutes, before a mobile user is automatically logged off of the system. If the setting is 0, then DocuSign mobile application users are never automatically logged off the system. The minimum setting is 1 minute and the maximum setting is 120 minutes. <br> This setting only applies to the DocuSign for iOS v2.8.2 or later mobile app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| phoneAuthRecipientMayProvidePhoneNumber            | Boolean | Admin                                                       | When **true**, senders can select to allow the recipient to provide a phone number for the Phone Authentication process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| pkiSignDownloadedPDFDocs                           | String  | Admin                                                       | The policy for adding a digital certificate to downloaded, printed and emailed documents. Possible values are: <ul> <li> <code>no_sign</code> </li> <li> <code>no_sign_allow_user_override</code> </li> <li> <code>yes_sign</code> </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| recipientsCanSignOffline                           | Boolean | Admin                                                       | When **true**, envelopes signed using offline signing on mobile devices are synchronized with this account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| requireDeclineReason                               | Boolean | Admin                                                       | When **true**, recipients that decline to sign an envelope must provide a reason.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| requireSignerCertificateType                       | String  | Admin                                                       | Sets which Digital Signature certificate is required when sending envelopes. There are three possible values: <ul> <li> <code>none</code>: a Digital Signature certificate is not required. </li> <li> <code>docusign_express</code>: signers must use a DocuSign Express certificate. </li> <li> <code>docusign_personal</code>: signers must use a DocuSign personal certificate. </li> <li> <code>open_trust</code>: signers must use an OpenTrust certificate. </li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| rsaVeridAccountName                                | String  | Admin                                                       | The RSA account name.<br> Modifying this value might inadvertently disrupt your ID Check capability. Ensure you have the correct value before changing this.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| rsaVeridPassword                                   | String  | Admin                                                       | The password used with the RSA account.<br>Modifying this value might inadvertently disrupt your ID Check capability. Ensure you have the correct value before changing this.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| rsaVeridRuleset                                    | String  | Admin                                                       | The RSA rule set used with the account. <br>Modifying this value might inadvertently disrupt your ID Check capability. Ensure you have the correct value before changing this.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
| rsaVeridUserId                                     | String  | Admin                                                       | The user ID for the RSA account. <br>Modifying this value might inadvertently disrupt your ID Check capability. Ensure you have the correct value before changing this.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |  
| savingCustomTabsEnabled                            | Boolean | Admin                                                       | When **true**, account users can save custom tabs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| selfSignedRecipientEmailDocument                   | String  | Admin                                                       | Sets how self-signed documents are presented to the email recipients. Possible values are: <ul> <li><code>include_pdf</code>: A PDF of the completed document is attached to the email</li> <li><code>include_link</code>: A secure link to the self-signed documents is included in the email.</li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| selfSignedRecipientEmailDocumentRights             | Boolean | Admin                                                       | When **true**, account administrators can set the selfSignedRecipientEmailDocument option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| selfSignedRecipientEmailDocumentUserOverride       | Boolean | Admin                                                       | When **true** the selfSignedRecipientEmailDocument userSetting can be set for an individual user.  The userSetting will override the account setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| selfSignedRecipientEmailDocumentUserOverrideRights | Boolean | Admin                                                       | When **true**, account administrators can set the selfSignedRecipientEmailDocumentOverride option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| sendToCertifiedDeliveryEnabled                     | Boolean | Admin                                                       | When **true**, the Certified Deliveries Recipient type can be used by the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| senderMustAuthenticateSigning                      | Boolean | Admin                                                       | When **true**, a sender that is also a recipient of an envelope must follow the authentication requirements for the envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| sessionTimeout                                     | Integer | Admin                                                       | The amount of idle activity time, in minutes, before a user is automatically logged out of the system. The minimum setting is 20 minutes and the maximum setting is 120 minutes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| setRecipEmailLang                                  | Boolean | Admin                                                       | When **true**, senders can set the email languages for each recipient.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| setRecipSignLang                                   | Boolean | Admin                                                       | When **true**, senders can set the signing language used for each recipient.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| sharedCustomTabsEnabled                            | Boolean | Admin                                                       | When **true**, saved custom tabs can be shared with account users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| signDateFormat                                     | String  | Admin                                                       | The date/time format applied to Date Signed fields for the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  
| signTimeShowAmPm                                   | Boolean | Admin                                                       | When **true**, AM or PM is shown as part of the time for signDateFormat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| signerAttachCertificateToEnvelopePDF               | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, the Certificate of Completion is included in the envelope documents PDF when it is downloaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| signerAttachConcat                                 | Boolean | Admin                                                       | When **true**, signer attachments are added to the parent document that the attachment tab is located on, instead of the default behavior that creates a new document in the envelope for every signer attachment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| signerCanCreateAccount                             | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, the signer without a DocuSign account can create a DocuSign account after signing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |  
| signerCanSignOnMobile                              | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, signers can use the DocuSign mobile signing user interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| signerInSessionUseEnvelopeCompleteEmail            | Boolean | Admin                                                       | When **true**, an envelope complete email is sent to an In Session (embedded) or offline signer after DocuSign processes the envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| signerLoginRequirements                            | String  | Admin                                                       | Sets the Login requirements for the signer. There are four options: <ul> <li> <code>login_not_required</code>: The signer is not required to log on to the system. </li> <li> <code>login_required_if_account_holder</code>: If the signer has a DocuSign account, they must log on to sign the document. </li> <li> <code>login_required_per_session</code>: The sender cannot send an envelope to anyone who does not have a DocuSign account. </li> <li> <code>login_required_per_envelope</code>: The sender cannot send an envelope to anyone who does not have a DocuSign account and the signer must log on the system for each envelope they will sign. </li> </ul> If you use Direct PowerForms or captive/embedded signers, the "Account required" settings are bypassed for those signers. If your workflow requires that the signer have an account, you should not use those methods.                                                                                                                                                                                                                                                                                                                                                           |  
| signerMustHaveAccount                              | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, senders can only send an envelope to a recipient that has a DocuSign account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| signerMustLoginToSign                              | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, an envelope signer must log in to the DocuSign console to sign an envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| signerShowSecureFieldInitialValues                 | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, the initial value of all SecureFields is written to the document when sent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| tabDataLabelEnabled                                | Boolean | Admin                                                       | When **true**, senders can change the default tabLabel for tabs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| tabLockingEnabled                                  | Boolean | Admin                                                       | When **true**, the locked option is available for tabs with that property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| tabTextFormattingEnabled                           | Boolean | Admin                                                       | When **true**, the formatting options (font type, font size, font color, bold, italic, and underline) are available for tabs with those properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  
| universalSignatureOptIn                            | Boolean | Reserved                                                    | Reserved for DocuSign.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| universalSignatureOptOut                           | Boolean | Reserved                                                    | Reserved for DocuSign.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| useAccountLevelEmail                               | Boolean | AccountAdmin & account is selected in AccountSigningSettings| When **true**, the content of notification emails is determined at the account level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  
| useConsumerDisclosure                              | Boolean | Admin                                                       | When **true**, the account  can use supplemental documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  
| usesAPI                                            | Boolean | SysAdmin                                                    | When **true**, the account can use the DocuSign API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  





[newAccountDefinition]: #/definitions/newAccountDefinition
[nameValue]: #/definitions/nameValue



```js
docusign.Accounts_PostAccounts({}, context)
```

#### Input
* input `object`
  * preview_billing_plan `string`: When set to **true**, creates the account using a preview billing plan.
  * newAccountDefinition [newAccountDefinition](#newaccountdefinition)

#### Output
* output [newAccountSummary](#newaccountsummary)

### Accounts_GetProvisioning
Retrieves the account provisioning information for the account.


```js
docusign.Accounts_GetProvisioning(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [provisioningInformation](#provisioninginformation)

### Accounts_DeleteAccount
This closes the specified account. You must be an account admin to close your account. Once closed, an account must be reopened by DocuSign.


```js
docusign.Accounts_DeleteAccount({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
*Output schema unknown*

### Accounts_GetAccount
Retrieves the account information for the specified account.

**Response**
The `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API. 


```js
docusign.Accounts_GetAccount({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include_account_settings `string`: When set to **true**, includes the account settings for the account in the response.

#### Output
* output [Accounts](#accounts)

### BillingCharges_GetAccountBillingCharges
Retrieves the list of recurring and usage charges for the account. This can be used to determine the charge structure and usage of charge plan items. 

Privileges required: account administrator 


```js
docusign.BillingCharges_GetAccountBillingCharges({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include_charges `string`: Specifies which billing charges to return.

#### Output
* output [billingChargeResponse](#billingchargeresponse)

### BillingInvoices_GetBillingInvoices
Retrieves a list of invoices for the account. If the from date or to date queries are not specified, the response returns invoices for the last 365 days.

Privileges required: account administrator 


```js
docusign.BillingInvoices_GetBillingInvoices({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * from_date `string`: Specifies the date/time of the earliest invoice in the account to retrieve.
  * to_date `string`: Specifies the date/time of the latest invoice in the account to retrieve.

#### Output
* output [billingInvoicesResponse](#billinginvoicesresponse)

### BillingInvoices_GetBillingInvoice
Retrieves the specified invoice. 

###### Note: If the `pdfAvailable` property in the response is set to *true*, you can download a PDF version of the invoice. To download the PDF, make the call again and change the value of the `Accept` property in the header to `Accept: application/pdf`.

Privileges required: account administrator

The response returns a list of charges and information about the charges. Quantities are usually shown as 'unlimited' or an integer. Amounts are shown in the currency set for the account.

**Response**
The following table provides a description of the different `chargeName` property values. The information will grow as more chargeable items are added to the system.

| chargeName | Description |
| --- | --- |
| id_check | ID Check Charge |
| in_person_signing | In Person Signing charge |
| envelopes Included | Sent Envelopes for the account |
| age_verify | Age verification check |
| ofac | OFAC Check |
| id_confirm | ID confirmation check |
| student_authentication | STAN PIN authentication check |
| wet_sign_fax | Pages for returning signed documents by fax |
| attachment_fax | Pages for returning attachments by fax |
| phone_authentication | Phone authentication charge |
| powerforms | PowerForm envelopes sent |
| signer_payments | Payment processing charge |
| outbound_fax | Send by fax charge |
| bulk_recipient_envelopes | Bulk Recipient Envelopes sent |
| sms_authentications | SMS authentication charge |
| saml_authentications | SAML authentication charge |
| express_signer_certificate | DocuSign Express Certificate charge |
| personal_signer_certificate | Personal Signer Certificate charge |
| safe_certificate | SAFE BioPharma Signer Certificate charge |
| seats | Included active seats charge |
| open_trust_certificate | OpenTrust Signer Certificate charge | 


```js
docusign.BillingInvoices_GetBillingInvoice({
  "accountId": "",
  "invoiceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * invoiceId **required** `string`

#### Output
* output [Invoices](#invoices)

### BillingInvoices_GetBillingInvoicesPastDue
Returns a list past due invoices for the account and notes if payment can be made through the REST API. 

Privileges Required: account administrator


```js
docusign.BillingInvoices_GetBillingInvoicesPastDue({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [billingInvoicesSummary](#billinginvoicessummary)

### BillingPayments_GetPaymentList
Retrieves a list containing information about one or more payments. If the from date or to date queries are not used, the response returns payment information for the last 365 days. 

Privileges required: account administrator 


```js
docusign.BillingPayments_GetPaymentList({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * from_date `string`: Specifies the date/time of the earliest payment in the account to retrieve.
  * to_date `string`: Specifies the date/time of the latest payment in the account to retrieve.

#### Output
* output [billingPaymentsResponse](#billingpaymentsresponse)

### BillingPayments_PostPayment
Posts a payment to a past due invoice. 

###### Note: This can only be used if the `paymentAllowed` value for a past due invoice is true. This can be determined calling [ML:GetBillingInvoicesPastDue].

The response returns information for a single payment, if a payment ID was used in the endpoint, or a list of payments. If the from date or to date queries or payment ID are not used, the response returns payment information for the last 365 days. If the request was for a single payment ID, the `nextUri` and `previousUri` properties are not returned.

Privileges required: account administrator


```js
docusign.BillingPayments_PostPayment({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * billingPaymentRequest [billingPaymentRequest](#billingpaymentrequest)

#### Output
* output [billingPaymentResponse](#billingpaymentresponse)

### BillingPayments_GetPayment
Retrieves the information for a specified payment. 

Privileges required: account administrator 


```js
docusign.BillingPayments_GetPayment({
  "accountId": "",
  "paymentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * paymentId **required** `string`

#### Output
* output [Payments](#payments)

### BillingPlan_GetBillingPlan
Retrieves the billing plan information for the specified account, including the current billing plan, successor plans, billing address, and billing credit card.

By default the successor plan and credit card information is included in the response. This information can be excluded from the response by adding the appropriate optional query string with the `setting` set to **false**. 

Response

The response returns the billing plan information, including the currency code, for the plan. The `billingPlan` and `succesorPlans` property values are the same as those shown in the [ML:Get Billing Plan Details] reference. the `billingAddress` and `creditCardInformation` property values are the same as those shown in the [ML:Update Billing Plan] reference.

###### Note: When credit card number information is shown, a mask is applied to the response so that only the last 4 digits of the card number are visible. 


```js
docusign.BillingPlan_GetBillingPlan({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include_credit_card_information `string`: When set to **true**, payment information including credit card information will show in the return.
  * include_metadata `string`: When set to **true**, the `canUpgrade` and `renewalStatus` properities are included the response and an array of `supportedCountries` property is added to the `billingAddress` information. 
  * include_successor_plans `string`: When set to **true**, excludes successor information from the response.

#### Output
* output [BillingPlans](#billingplans)

### BillingPlan_PutBillingPlan
Updates the billing plan information, billing address, and credit card information for the specified account.


```js
docusign.BillingPlan_PutBillingPlan({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * preview_billing_plan `string`: When set to **true**, updates the account using a preview billing plan.
  * billingPlanInformation [billingPlanInformation](#billingplaninformation)

#### Output
* output [billingPlanUpdateResponse](#billingplanupdateresponse)

### BillingPlan_GetCreditCardInfo
Get metadata for a given credit card.


```js
docusign.BillingPlan_GetCreditCardInfo({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [creditCardInformation](#creditcardinformation)

### PurchasedEnvelopes_PutPurchasedEnvelopes
Reserved: At this time, this endpoint is limited to DocuSign internal use only. Completes the purchase of envelopes for your account. The actual purchase is done as part of an internal workflow interaction with an envelope vendor.


```js
docusign.PurchasedEnvelopes_PutPurchasedEnvelopes({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * purchasedEnvelopesInformation [purchasedEnvelopesInformation](#purchasedenvelopesinformation)

#### Output
*Output schema unknown*

### Brands_DeleteBrands
Deletes one or more brand profiles from an account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`) must be set to **true** to use this call.


```js
docusign.Brands_DeleteBrands({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandsRequest [brandsRequest](#brandsrequest)

#### Output
* output [AccountBrands](#accountbrands)

### Brands_GetBrands
Retrieves the list of brand profiles associated with the account and the default brand profiles. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`)  must be set to **true** for the account to use this call.


```js
docusign.Brands_GetBrands({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * exclude_distributor_brand `string`: When set to **true**, excludes distributor brand information from the response set.
  * include_logos `string`: When set to **true**, returns the logos associated with the brand.

#### Output
* output [AccountBrands](#accountbrands)

### Brands_PostBrands
Creates one or more brand profile files for the account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSig`) must be set to **true** for the account to use this call.

An error is returned if `brandId` property for a brand profile is already set for the account. To upload a new version of an existing brand profile, you must delete the profile and then upload the newer version.

When brand profile files are being uploaded, they must be combined into one zip file and the `Content-Type` must be `application/zip`.


```js
docusign.Brands_PostBrands({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brand [brand](#brand)

#### Output
* output [AccountBrands](#accountbrands)

### Brand_DeleteBrand
Removes a brand.


```js
docusign.Brand_DeleteBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.

#### Output
*Output schema unknown*

### Brand_GetBrand
Get information for a specific brand.


```js
docusign.Brand_GetBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * include_external_references `string`
  * include_logos `string`

#### Output
* output [brand](#brand)

### Brand_PutBrand
Updates an existing brand.


```js
docusign.Brand_PutBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * brand [brand](#brand)

#### Output
* output [brand](#brand)

### BrandExport_GetBrandExportFile
Export a specific brand.


```js
docusign.BrandExport_GetBrandExportFile({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.

#### Output
*Output schema unknown*

### BrandLogo_DeleteBrandLogo
Delete one branding logo.


```js
docusign.BrandLogo_DeleteBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * logoType **required** `string`: One of **Primary**, **Secondary** or **Email**.

#### Output
*Output schema unknown*

### BrandLogo_GetBrandLogo
Obtains the specified image for a brand.


```js
docusign.BrandLogo_GetBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * logoType **required** `string`: One of **Primary**, **Secondary** or **Email**.

#### Output
* output `file`

### BrandLogo_PutBrandLogo
Put one branding logo.


```js
docusign.BrandLogo_PutBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": "",
  "logoFileBytes": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * logoType **required** `string`: One of **Primary**, **Secondary** or **Email**.
  * logoFileBytes **required** `string`

#### Output
*Output schema unknown*

### BrandResources_GetBrandResourcesList
Returns the specified account's list of branding resources (metadata).


```js
docusign.BrandResources_GetBrandResourcesList({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.

#### Output
* output [brandResourcesList](#brandresourceslist)

### BrandResources_GetBrandResources
Returns the specified branding resource file.


```js
docusign.BrandResources_GetBrandResources({
  "accountId": "",
  "brandId": "",
  "resourceContentType": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * resourceContentType **required** `string`
  * langcode `string`
  * return_master `string`

#### Output
*Output schema unknown*

### BrandResources_PutBrandResources
Uploads a branding resource file.


```js
docusign.BrandResources_PutBrandResources({
  "accountId": "",
  "brandId": "",
  "resourceContentType": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * brandId **required** `string`: The unique identifier of a brand.
  * resourceContentType **required** `string`

#### Output
* output [brandResources](#brandresources)

### BulkEnvelopes_GetEnvelopesBulk
Retrieves status information about all the bulk recipient batches. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. The response includes general information about each bulk recipient batch. 

The response returns information about the envelopes sent with bulk recipient batches, including the `batchId` property, which can be used to retrieve a more detailed status of individual bulk recipient batches.


```js
docusign.BulkEnvelopes_GetEnvelopesBulk({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * count `string`: The number of results to return. This can be 1 to 20.
  * include `string`: Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include="failed,queued") 
  * start_position `string`: The position of the bulk envelope items in the response. This is used for repeated calls, when the number of bulk envelopes returned is too large for one return. The default value is 0.

#### Output
* output [BulkEnvelopes](#bulkenvelopes)

### BulkEnvelopes_GetBulkEnvelopesBatchId
Retrieves the status information of a single bulk recipient batch. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. 


```js
docusign.BulkEnvelopes_GetBulkEnvelopesBatchId({
  "accountId": "",
  "batchId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * batchId **required** `string`
  * count `string`: Specifies the number of entries to return.
  * include `string`: Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include="failed,queued") 
  * start_position `string`: Specifies the location in the list of envelopes from which to start.

#### Output
* output [bulkEnvelopeStatus](#bulkenvelopestatus)

### CaptiveRecipients_DeleteCaptiveRecipientsPart
Deletes the signature for one or more captive recipient records; it is primarily used for testing. This provides a way to reset the signature associated with a client user ID so that a new signature can be created the next time the client user ID is used.


```js
docusign.CaptiveRecipients_DeleteCaptiveRecipientsPart({
  "accountId": "",
  "recipientPart": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientPart **required** `string`: Signature is the only supported value. 
  * captiveRecipientInformation [captiveRecipientInformation](#captiverecipientinformation)

#### Output
* output [captiveRecipientInformation](#captiverecipientinformation)

### ChunkedUploads_PostChunkedUploads
Initiate a new ChunkedUpload.


```js
docusign.ChunkedUploads_PostChunkedUploads({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * chunkedUploadRequest [chunkedUploadRequest](#chunkeduploadrequest)

#### Output
* output [ChunkedUploads](#chunkeduploads)

### ChunkedUploads_DeleteChunkedUpload
Delete an existing ChunkedUpload.


```js
docusign.ChunkedUploads_DeleteChunkedUpload({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * chunkedUploadId **required** `string`

#### Output
* output [ChunkedUploads](#chunkeduploads)

### ChunkedUploads_GetChunkedUpload
Retrieves the current metadata of a ChunkedUpload.


```js
docusign.ChunkedUploads_GetChunkedUpload({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * chunkedUploadId **required** `string`
  * include `string`: A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

#### Output
* output [ChunkedUploads](#chunkeduploads)

### ChunkedUploads_PutChunkedUploads
Integrity-Check and Commit a ChunkedUpload, readying it for use elsewhere.


```js
docusign.ChunkedUploads_PutChunkedUploads({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * chunkedUploadId **required** `string`
  * action `string`

#### Output
* output [ChunkedUploads](#chunkeduploads)

### ChunkedUploads_PutChunkedUploadPart
Add a chunk, a chunk 'part', to an existing ChunkedUpload.


```js
docusign.ChunkedUploads_PutChunkedUploadPart({
  "accountId": "",
  "chunkedUploadId": "",
  "chunkedUploadPartSeq": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * chunkedUploadId **required** `string`
  * chunkedUploadPartSeq **required** `string`
  * chunkedUploadRequest [chunkedUploadRequest](#chunkeduploadrequest)

#### Output
* output [ChunkedUploads](#chunkeduploads)

### Connect_GetConnectConfigs
Retrieves all the DocuSign Custom Connect definitions for the specified account.

###### Note: Connect must be enabled for your account to use this function. This does not retrieve information for Connect configurations for Box, eOriginal, or Salesforce.


```js
docusign.Connect_GetConnectConfigs({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [connectConfigResults](#connectconfigresults)

### Connect_PostConnectConfiguration
Creates a DocuSign Custom Connect definition for your account. DocuSign Connect enables the sending of real-time data updates to external applications. These updates are generated by user transactions as the envelope progresses through actions to completion. The Connect Service provides updated information about the status of these transactions and returns updates that include the actual content of document form fields. Be aware that, these updates might or might not include the document itself. For more information about Connect, see the [ML:DocuSign Connect Service Guide].

###### Note: Connect must be enabled for your account to use this function. This cannot be used to set up Connect configurations for Salesforce or eOriginal.


```js
docusign.Connect_PostConnectConfiguration({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * ConnectConfigurations [ConnectConfigurations](#connectconfigurations)

#### Output
* output [ConnectConfigurations](#connectconfigurations)

### Connect_PutConnectConfiguration
Updates the specified DocuSign Connect configuration in your account.

###### Note: Connect must be enabled for your account to use this function. This cannot be used to update Connect configurations for Box, eOriginal, or Salesforce.


```js
docusign.Connect_PutConnectConfiguration({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * ConnectConfigurations [ConnectConfigurations](#connectconfigurations)

#### Output
* output [ConnectConfigurations](#connectconfigurations)

### ConnectPublish_PutConnectRetry
Republishes Connect information for the  specified set of envelopes. The primary use is to republish Connect post failures by including envelope IDs for the envelopes that failed to post in the request. The list of envelope IDs that failed to post correctly can be retrieved by calling to [ML:GetConnectLog] retrieve the failure log.


```js
docusign.ConnectPublish_PutConnectRetry({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * connectFailureFilter [connectFailureFilter](#connectfailurefilter)

#### Output
* output [connectFailureResults](#connectfailureresults)

### ConnectPublish_PutConnectRetryByEnvelope
Republishes Connect information for the specified envelope.


```js
docusign.ConnectPublish_PutConnectRetryByEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [connectFailureResults](#connectfailureresults)

### ConnectFailures_GetConnectLogs
Retrieves the Connect Failure Log information. It can be used to determine which envelopes failed to post, so a republish request can be created.


```js
docusign.ConnectFailures_GetConnectLogs({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * from_date `string`: Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
  * to_date `string`: End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

#### Output
* output [ConnectEvents](#connectevents)

### ConnectFailures_DeleteConnectFailureLog
Deletes the Connect failure log information for the specified entry.


```js
docusign.ConnectFailures_DeleteConnectFailureLog({
  "accountId": "",
  "failureId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * failureId **required** `string`: The ID of the failed connect log entry.

#### Output
*Output schema unknown*

### ConnectLog_DeleteConnectLogs
Retrieves a list of connect log entries for your account.

###### Note: The `enableLog` property in the Connect configuration must be set to **true** to enable logging. If logging is not enabled, then no log entries are recorded.


```js
docusign.ConnectLog_DeleteConnectLogs({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
*Output schema unknown*

### ConnectLog_GetConnectLogs
Retrieves a list of connect log entries for your account.

###### Note: The `enableLog` setting in the Connect configuration must be set to true to enable logging. If logging is not enabled, then no log entries are recorded. 


```js
docusign.ConnectLog_GetConnectLogs({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * from_date `string`: Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
  * to_date `string`: End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

#### Output
* output [ConnectEvents](#connectevents)

### ConnectLog_DeleteConnectLog
Deletes a specified entry from the Connect Log.



```js
docusign.ConnectLog_DeleteConnectLog({
  "accountId": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * logId **required** `string`: The ID of the connect log entry

#### Output
*Output schema unknown*

### ConnectLog_GetConnectLog
Retrieves the specified Connect log entry for your account.

###### Note: The `enableLog` setting in the Connect configuration must be set to true to enable logging. If logging is not enabled, then no log entries are recorded. 


```js
docusign.ConnectLog_GetConnectLog({
  "accountId": "",
  "logId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * logId **required** `string`: The ID of the connect log entry
  * additional_info `string`: When true, the connectDebugLog information is included in the response.

#### Output
* output [connectLog](#connectlog)

### Connect_DeleteConnectConfig
Deletes the specified DocuSign Connect configuration.

###### Note: Connect must be enabled for your account to use this function.



```js
docusign.Connect_DeleteConnectConfig({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * connectId **required** `string`: The ID of the custom Connect configuration being accessed.

#### Output
*Output schema unknown*

### Connect_GetConnectConfig
Retrieves the information for the specified DocuSign Connect configuration.

###### Note: Connect must be enabled for your account to use this function.



```js
docusign.Connect_GetConnectConfig({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * connectId **required** `string`: The ID of the custom Connect configuration being accessed.

#### Output
* output [connectConfigResults](#connectconfigresults)

### Connect_GetConnectUsers
Returns users from the configured Connect service.


```js
docusign.Connect_GetConnectUsers({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * connectId **required** `string`: The ID of the custom Connect configuration being accessed.
  * count `string`: Optional. Number of items to return.
  * email_substring `string`: Filters the returned user records by the email address or a sub-string of email address.
  * list_included_users `string`
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.
  * status `string`: Filters the results by user status.
  * user_name_substring `string`: Filters the user records returned by the user name or a sub-string of user name.

#### Output
* output [integratedUserInfoList](#integrateduserinfolist)

### ConsumerDisclosure_GetConsumerDisclosure
Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account. You can use an optional query string to set the language for the disclosure.


```js
docusign.ConsumerDisclosure_GetConsumerDisclosure({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * langCode `string`: Specifies the language used in the response. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).

#### Output
* output [AccountConsumerDisclosures](#accountconsumerdisclosures)

### ConsumerDisclosure_GetConsumerDisclosureLangCode
Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, for the requested envelope recipient. This might be different than the current account disclosure depending on account settings, such as branding, and when the account disclosure was last updated. An optional query string can be included to return the language for the disclosure.  


```js
docusign.ConsumerDisclosure_GetConsumerDisclosureLangCode({
  "accountId": "",
  "langCode": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * langCode **required** `string`: The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.

#### Output
* output [AccountConsumerDisclosures](#accountconsumerdisclosures)

### ConsumerDisclosure_PutConsumerDisclosure
Update Consumer Disclosure.


```js
docusign.ConsumerDisclosure_PutConsumerDisclosure({
  "accountId": "",
  "langCode": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * langCode **required** `string`: The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.
  * include_metadata `string`: Reserved for DocuSign.
  * EnvelopeConsumerDisclosures [EnvelopeConsumerDisclosures](#envelopeconsumerdisclosures)

#### Output
* output [EnvelopeConsumerDisclosures](#envelopeconsumerdisclosures)

### Contacts_DeleteContacts
Delete contacts associated with an account for the DocuSign service.


```js
docusign.Contacts_DeleteContacts({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * contactModRequest [contactModRequest](#contactmodrequest)

#### Output
* output [contactUpdateResponse](#contactupdateresponse)

### Contacts_PostContacts
Imports multiple new contacts into the contacts collection from CSV, JSON, or XML (based on content type).


```js
docusign.Contacts_PostContacts({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * contactModRequest [contactModRequest](#contactmodrequest)

#### Output
* output [contactUpdateResponse](#contactupdateresponse)

### Contacts_PutContacts
Replaces contacts associated with an account for the DocuSign service.


```js
docusign.Contacts_PutContacts({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * contactModRequest [contactModRequest](#contactmodrequest)

#### Output
* output [contactUpdateResponse](#contactupdateresponse)

### Contacts_DeleteContactWithId
Replaces a particular contact associated with an account for the DocuSign service.


```js
docusign.Contacts_DeleteContactWithId({
  "accountId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * contactId **required** `string`: The unique identifier of a person in the contacts address book.

#### Output
* output [contactUpdateResponse](#contactupdateresponse)

### Contacts_GetContactById
Gets a particular contact associated with the user's account.


```js
docusign.Contacts_GetContactById({
  "accountId": "",
  "contactId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * contactId **required** `string`: The unique identifier of a person in the contacts address book.

#### Output
* output [contactGetResponse](#contactgetresponse)

### AccountCustomFields_GetAccountCustomFields
Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.


```js
docusign.AccountCustomFields_GetAccountCustomFields({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountCustomFields](#accountcustomfields)

### AccountCustomFields_PostAccountCustomFields
Creates an acount custom field.


```js
docusign.AccountCustomFields_PostAccountCustomFields({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * apply_to_templates `string`
  * customField [customField](#customfield)

#### Output
* output [AccountCustomFields](#accountcustomfields)

### AccountCustomFields_DeleteAccountCustomFields
Delete an existing account custom field.


```js
docusign.AccountCustomFields_DeleteAccountCustomFields({
  "accountId": "",
  "customFieldId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * customFieldId **required** `string`
  * apply_to_templates `string`

#### Output
*Output schema unknown*

### AccountCustomFields_PutAccountCustomFields
Updates an existing account custom field.


```js
docusign.AccountCustomFields_PutAccountCustomFields({
  "accountId": "",
  "customFieldId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * customFieldId **required** `string`
  * apply_to_templates `string`
  * customField [customField](#customfield)

#### Output
* output [AccountCustomFields](#accountcustomfields)

### Envelopes_GetEnvelopes
Retrieves a list of envelopes that match your request. 
A large set of optional filters let you filter
by date,
by envelope ID,
or by status codes.

Your request must include one or more of the following parameters:

* `from_date`
* `envelope_ids`
* `transaction_ids`


Getting envelope status using `transaction_ids` is useful
for offline signing situations where it can be used
determine if an envelope was created or not. It can be used
for the cases where a network connection was lost, before
the envelope status could be returned.

To avoid unnecessary database queries, the DocuSign
signature platform first checks requests to ensure that the
filter set supplied does not result in a zero-size response
before querying the database. 

For example, for a request with a `from_to_status` of
`delivered` and a current `status` of `created,sent`,
DocuSign will always return an empty list. 
This is because the request translates to: find the
envelopes that were delivered between the `from_date` and
`to_date` dates that have a current status of `created` or
`sent`. Since an envelope that has been delivered can
never have a status of `created` or `sent`, a zero-size
response would be generated. 
In this case, DocuSign does not query the database
and returns an empty list immediately.


The following table shows the valid current envelope
statuses (`status` parameter) for the different status
qualifiers (`from_to_status` parameter) in the request. If
the status and status qualifiers in the API request do not
contain any of the values shown in the Valid Current
Statuses column, then an empty list is returned.

Client applications should check that the statuses (`status`
parameter) they are requesting make sense for a given
`from_to_status` parameter value.

| Status Qualifier<br>(`from_to_status`) | Effective Status Qualifier | Valid Current Statuses                                                      |  
| :------------------------------------- | :------------------------- | :-------------------------------------------------------------------------- |  
| any (changed)                          | StatusChanged              | any, created, sent, delivered, signed, completed, declined, voided, deleted |  
| created                                | Created                    | any, created, sent, delivered, signed, completed, declined, voided, deleted |  
| sent                                   | Sent                       | any, sent, delivered, signed, completed, declined, voided, deleted          |  
| delivered                              | StatusChanged              | any, delivered, signed, completed, declined, voided, deleted                |  
| signed                                 | StatusChanged              | any, signed, completed, declined, voided, deleted                           |  
| completed                              | Completed                  | any, completed, declined, voided, deleted                                   |  
| declined                               | StatusChanged              | any, declined, voided, deleted                                              |  
| timedout<br>always return zero results | StatusChanged              | any, voided, deleted                                                        |  
| voided                                 | Voided                     | any, voided, deleted                                                        |  
| deleted                                | StatusChanged              | any, deleted                                                                |  

## Extraneous results

In some cases, a request for a specific envelope status will
include envelopes with additional statuses. For example, in
a request with a `from_date` of 2017-01-01, a `to_date` of
2017-01-07 and the status qualifier (`from_to_status`) set
to `delivered`, the response set might contain envelopes
that were created during that time period, but not delivered
during the time period. As a workaround, check the envelope
status values in the result set as needed. 



```js
docusign.Envelopes_GetEnvelopes({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * ac_status `string`: Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
  * block `string`: Reserved for DocuSign.
  * count `string`: Optional. Number of items to return. Currently there is no implicit maximum limit of the number of items that can be returned.
  * custom_field `string`: Optional. Specifies a envelope custom field name and value searched for in the envelopes. Format: `custom_envelope_field_name=desired_value`
  * email `string`: Limit results to envelopes
  * envelope_ids `string`: Comma separated list of `envelopeId` values.
  * from_date `string`: Specifies the date and time
  * from_to_status `string`: The status value checked for in the `from_date` to `to_date` time period. 
  * start_position `string`: This value is supported and currently has no implicit maximum items.
  * status `string`: A comma-separated list of current envelope statuses to included in the response. Possible values are:
  * to_date `string`: Specifies the date and time
  * transaction_ids `string`: A comma-separated list of envelope transaction IDs.
  * user_name `string`: Limit results to envelopes

#### Output
* output [envelopesInformation](#envelopesinformation)

### Envelopes_PostEnvelopes
Creates and sends an envelope or creates a draft envelope.
Envelopes are fundamental resources in the DocuSign platform.

With this method you can:

* Create and send an envelope
  with [documents][], [recipients][], and [tabs][].
* Create and send an envelope from a template.
* Create and send an envelope from
  a combination of documents and templates.
* Create a draft envelope.


When you use this method
to create and send an envelope
in a single request,
the following parameters in the request body (an [`envelopeDefinition`][envelopeDefinition]) are required:

| Parameter      | Description |
| :--------      | :---------- |
| `status`       | Set to `sent` to send the envelope to recipients.<br>Set to `created` (or don't set at all) to save the envelope as a draft. |
| `emailSubject` | The subject of the email used to send the envelope. |
| `documents`    | The [documents][] to be signed. |
| `recipients`   | The email addresses of the envelope [recipients][]. |


There are many ways to use envelopes.
You can create and send an envelope
with a single API request,
or you can use several API requests
to create, populate, and send envelopes.


| See…                     | To learn about…                                                                                                                    |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [Envelopes][envelopes]   | Envelopes, [adding documents][addingdocs], [tracking][], [locking][], [deleting][], [templates][]                                  |
| [Documents][documents]   | Documents, [attachments][], [supplemental documents][supdocs], [authoritative copies][authcopies], [purging][]                     |
| [Recipients][recipients] | Recipients, [recipient types][reciptypes], [recipient status][recipstatus]                                                         |
| [Tabs][tabs]             | Tabs, [tab types][tabtypes], [anchoring tabs][tabanchor], [auto-populating tabs][tabauto],  [custom tabs][tabcustom], [payments][] |


[addingdocs]:           https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes#adding-documents-to-an-envelope
[attachments]:          https://developers.docusign.com/esign-rest-api/guides/concepts/documents#attachments
[authcopies]:           https://developers.docusign.com/esign-rest-api/guides/concepts/documents#authoritative-copies
[conoverview]:          https://developers.docusign.com/esign-rest-api/guides/concepts/overview
[deleting]:             https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes#deleting-envelopes
[documents]:            https://developers.docusign.com/esign-rest-api/guides/concepts/documents
[envelopeDefinition]:   https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/create#envelopeDefinition
[envelopes]:            https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes
[locking]:              https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes#locking-envelopes
[payments]:             https://developers.docusign.com/esign-rest-api/guides/concepts/tabs#requesting-payments
[purging]:              https://developers.docusign.com/esign-rest-api/guides/concepts/documents#purging-documents
[recipients]:           https://developers.docusign.com/esign-rest-api/guides/concepts/recipients
[recipstatus]:          https://developers.docusign.com/esign-rest-api/guides/concepts/recipients#recipient-status
[reciptypes]:           https://developers.docusign.com/esign-rest-api/guides/concepts/recipients#recipient-types
[supdocs]:              https://developers.docusign.com/esign-rest-api/guides/concepts/documents#supplemental-documents
[tabanchor]:            https://developers.docusign.com/esign-rest-api/guides/concepts/tabs#anchoring-tabs
[tabauto]:              https://developers.docusign.com/esign-rest-api/guides/concepts/tabs#automatically-populating-tabs
[tabcustom]:            https://developers.docusign.com/esign-rest-api/guides/concepts/tabs#using-custom-tabs-in-envelopes-and-templates
[tabs]:                 https://developers.docusign.com/esign-rest-api/guides/concepts/tabs
[tabtypes]:             https://developers.docusign.com/esign-rest-api/guides/concepts/tabs#tab-types
[templates]:            https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes#working-with-templates
[tracking]:             https://developers.docusign.com/esign-rest-api/guides/concepts/envelopes#tracking-envelope-status



```js
docusign.Envelopes_PostEnvelopes({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * cdse_mode `string`: Reserved for DocuSign.
  * change_routing_order `string`: When true, users can define the routing order of recipients while sending documents for signature.
  * completed_documents_only `string`: Reserved for DocuSign.
  * merge_roles_on_draft `string`: When set to **true**, template roles will be merged, and empty recipients will be removed. This parameter applies when you create a draft envelope with multiple templates. (To create a draft envelope, the `status` field is set to `created`.)
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [envelopeSummary](#envelopesummary)

### Envelopes_PutStatus
Retrieves the envelope status for the specified envelopes.


```js
docusign.Envelopes_PutStatus({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * ac_status `string`: Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
  * block `string`: Reserved for DocuSign.
  * count `string`: The maximum number of results to be returned by this request.
  * email `string`: Reserved for DocuSign.
  * envelope_ids `string`: Comma separated list of `envelopeId` values.
  * from_date `string`: The date/time setting that specifies when the request begins checking for status changes for envelopes in the account. This is required unless parameters `envelope_ids` and/or `transaction_Ids` are set. 
  * from_to_status `string`: The status value checked for in the `from_date` to `to_date` time period. 
  * start_position `string`: Reserved for DocuSign.
  * status `string`: Item status. <!-- TODO -->
  * to_date `string`: Optional date/time setting
  * transaction_ids `string`: A comma-separated list of envelope transaction IDs.
  * user_name `string`: Limit results to envelopes
  * envelopeIdsRequest [envelopeIdsRequest](#envelopeidsrequest)

#### Output
* output [envelopesInformation](#envelopesinformation)

### Envelopes_GetEnvelope
Retrieves the overall status for the specified envelope. To get the status of a list of envelopes, use [Envelope: listStatusChanges ](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/)


```js
docusign.Envelopes_GetEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * advanced_update `string`: When true, envelope information can be added or modified.
  * include `string`: Reserved for DocuSign.

#### Output
* output [Envelopes](#envelopes)

### Envelopes_PutEnvelope
This method lets you make changes to an envelope.
You can use it to:

* Send a draft envelope
* Void an in-process envelope
* Modify a draft envelope
* Purge documents and envelope metadata from the DocuSign platform


<div class="highlight highlight-info">
<p markdown="1">

Although the request body for this method
is a complete envelope definition,
you only need to provide
properties that
you're updating. 

</p>
</div>


## Sending a Draft Envelope

To send a draft envelope, include this in the request body:

```json
{
  "status": "sent"
}
```


## Voiding an In-Process Envelope

To void an in-process envelope, include this in the request body:

```json
{
  "status": "voided",
  "voidedReason": "The reason for voiding the envelope"
}
```

## Modifying Envelope Email Information

To change the email subject and message of a draft envelope,
include this in the request body:

```json
{
  "emailSubject": "new email subject",
  "emailBlurb": "new email message"
}
```

## Purging Documents from DocuSign


To place only the documents
in the purge queue,
leaving any
corresponding attachments 
and tabs in the DocuSign platform,
set the `purgeState` property
to `documents_queued`.


```json
{
  "purgeState": "documents_queued"
}
```

To place documents,
attachments,
and tabs
in the purge queue,
set the `purgeState` property
to `documents_and_metadata_queued`.

```json
{
  "purgeState": "documents_and_metadata_queued"
}
```


You can purge documents
only from completed envelopes
that are not marked as the authoritative copy.
The user requesting the purge
must have permission to purge documents
and
must be the sender or be acting on behalf of the sender.



When the purge request is initiated
the items to be purged
are placed in the purge queue
for deletion in 14 days.
The sender
and
all recipients with DocuSign accounts
associated with the envelope
get an email notification
the the documents will be deleted in 14 days.
The notification contains a link
to the documents.
A second email notification
is sent 7 days later.
At the end of the 14-day period
the documents are deleted from the system.
Recipients without DocuSign accounts
do not receive email notifications.


If your account has a Document Retention policy,
envelope documents
are automatically placed
in the purge queue,
and notification emails are sent
at the end of the retention period.
Setting a Document Retention policy is the same as setting a
schedule for purging documents.



```js
docusign.Envelopes_PutEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * advanced_update `string`: When set to **true**, allows the caller to update recipients, tabs, custom fields, notification, email settings and other envelope attributes.
  * resend_envelope `string`: When set to **true**, sends the specified envelope again.
  * Envelopes [Envelopes](#envelopes)

#### Output
* output [envelopeUpdateSummary](#envelopeupdatesummary)

### Attachments_DeleteAttachments
Delete one or more attachments from a DRAFT envelope.


```js
docusign.Attachments_DeleteAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeAttachmentsRequest [envelopeAttachmentsRequest](#envelopeattachmentsrequest)

#### Output
* output [envelopeAttachmentsResult](#envelopeattachmentsresult)

### Attachments_GetAttachments
Returns a list of attachments associated with the specified envelope


```js
docusign.Attachments_GetAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [envelopeAttachmentsResult](#envelopeattachmentsresult)

### Attachments_PutAttachments
Supported attachment formats include: .asp, .bmp, .csv, .doc, .docm, .docx, .dot, .dotm, .dotx, .gif, .htm, .html, .jpeg, .jpg, .msg, .pdf, .png, .pot, .potx, .pps, .ppt, .pptm, .pptx, .ps, .rtf, .tif, .tiff, .txt, .wpd, .xls, .xlsm, .xlsx, .xml, and .xps. For more information on supported file formats please see [Supported File Formats](https://support.docusign.com/guides/ndse-user-guide-supported-file-formats).


```js
docusign.Attachments_PutAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeAttachmentsRequest [envelopeAttachmentsRequest](#envelopeattachmentsrequest)

#### Output
* output [envelopeAttachmentsResult](#envelopeattachmentsresult)

### Attachments_GetAttachment
Retrieves an attachment from the envelope.


```js
docusign.Attachments_GetAttachment({
  "accountId": "",
  "attachmentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * attachmentId **required** `string`
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
*Output schema unknown*

### Attachments_PutAttachment
Add an attachment to a DRAFT or IN-PROCESS envelope.


```js
docusign.Attachments_PutAttachment({
  "accountId": "",
  "attachmentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * attachmentId **required** `string`
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * attachment [attachment](#attachment)

#### Output
* output [envelopeAttachmentsResult](#envelopeattachmentsresult)

### AuditEvents_GetAuditEvents
Gets the envelope audit events for the specified envelope.


```js
docusign.AuditEvents_GetAuditEvents({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [envelopeAuditEventResponse](#envelopeauditeventresponse)

### Comments_GetCommentsTranscript



```js
docusign.Comments_GetCommentsTranscript({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * encoding `string`

#### Output
* output `file`

### CustomFields_DeleteCustomFields
Deletes envelope custom fields for draft and in-process envelopes.


```js
docusign.CustomFields_DeleteCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeCustomFields [EnvelopeCustomFields](#envelopecustomfields)

#### Output
* output [EnvelopeCustomFields](#envelopecustomfields)

### CustomFields_GetCustomFields
Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.


```js
docusign.CustomFields_GetCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [customFieldsEnvelope](#customfieldsenvelope)

### CustomFields_PostCustomFields
Updates the envelope custom fields for draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.


```js
docusign.CustomFields_PostCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeCustomFields [EnvelopeCustomFields](#envelopecustomfields)

#### Output
* output [EnvelopeCustomFields](#envelopecustomfields)

### CustomFields_PutCustomFields
Updates the envelope custom fields in draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.



```js
docusign.CustomFields_PutCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeCustomFields [EnvelopeCustomFields](#envelopecustomfields)

#### Output
* output [EnvelopeCustomFields](#envelopecustomfields)

### Documents_DeleteDocuments
Deletes one or more documents from an existing envelope that has not yet been completed.

To delete a document, use only the relevant parts of the [`envelopeDefinition`](#envelopeDefinition).
For example, this request body specifies that you want to delete the document whose `documentId` is "1".


```text
{
  "documents": [
    {
      "documentId": "1"
    }
  ]
}
```

The envelope status must be one of:

- `created`
- `sent`
- `delivered`





```js
docusign.Documents_DeleteDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [EnvelopeDocuments](#envelopedocuments)

### Documents_GetDocuments
Retrieves a list of documents associated with the specified envelope.


```js
docusign.Documents_GetDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeDocuments](#envelopedocuments)

### Documents_PutDocuments
Adds one or more documents to an existing envelope document.
<p>**Note**: When adding or modifying documents for an in-process envelope, DocuSign recommends locking the envelope prior to making any changes.


```js
docusign.Documents_PutDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * apply_document_fields `string`: When **true**, document fields
  * persist_tabs `string`
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [EnvelopeDocuments](#envelopedocuments)

### Documents_GetDocument
Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.

The `{documentID}` parameter takes two special values:

| Value      | Description |
| :---       | :--- |
| `combined` | Retrieve a PDF that contains the combined content of all documents and the certificate. |
| `archive`  | Retrieve a ZIP archive that contains all of the PDF documents, the certificate, and any .WAV files used for voice authentication. |



```js
docusign.Documents_GetDocument({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * certificate `string`: When set to **false**, the envelope signing certificate is removed from the download.
  * encoding `string`
  * encrypt `string`: When set to **true**, the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. The documents can be decrypted with the KeyManager Decrypt Document API.
  * language `string`: Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). 
  * recipient_id `string`
  * show_changes `string`: When set to **true**, any changed fields for the returned PDF are highlighted in yellow and optional signatures or initials outlined in red. 
  * watermark `string`: When set to **true**, the account has the watermark feature enabled, and the envelope is not complete, the watermark for the account is added to the PDF documents. This option can remove the watermark. 

#### Output
* output `file`

### Documents_PutDocument
Adds a document to an existing draft envelope.
<p>**Note**: When adding or modifying documents for an in-process envelope, DocuSign recommends locking the envelope prior to making any changes.


```js
docusign.Documents_PutDocument({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * apply_document_fields `string`: When **true**, document fields

#### Output
*Output schema unknown*

### DocumentFields_DeleteDocumentFields
Deletes custom document fields from an existing envelope document.


```js
docusign.DocumentFields_DeleteDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeDocumentFields [EnvelopeDocumentFields](#envelopedocumentfields)

#### Output
* output [EnvelopeDocumentFields](#envelopedocumentfields)

### DocumentFields_GetDocumentFields
Retrieves the custom document field information from an existing envelope document.


```js
docusign.DocumentFields_GetDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeDocumentFields](#envelopedocumentfields)

### DocumentFields_PostDocumentFields
Creates custom document fields in an existing envelope document.


```js
docusign.DocumentFields_PostDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeDocumentFields [EnvelopeDocumentFields](#envelopedocumentfields)

#### Output
* output [EnvelopeDocumentFields](#envelopedocumentfields)

### DocumentFields_PutDocumentFields
Updates existing custom document fields in an existing envelope document.


```js
docusign.DocumentFields_PutDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeDocumentFields [EnvelopeDocumentFields](#envelopedocumentfields)

#### Output
* output [EnvelopeDocumentFields](#envelopedocumentfields)

### ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions



```js
docusign.ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeDocumentHtmlDefinitions](#envelopedocumenthtmldefinitions)

### Pages_GetPageImages
Returns document page image(s) based on input.


```js
docusign.Pages_GetPageImages({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * count `string`: The maximum number of results to be returned by this request.
  * dpi `string`: Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
  * max_height `string`: Sets the maximum height (in pixels) of the returned image.
  * max_width `string`: Sets the maximum width (in pixels) of the returned image.
  * nocache `string`
  * show_changes `string`
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

#### Output
* output [pageImages](#pageimages)

### Pages_DeletePage
Deletes a page from a document in an envelope based on the page number.


```js
docusign.Pages_DeletePage({
  "accountId": "",
  "documentId": "",
  "envelopeId": "",
  "pageNumber": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * pageNumber **required** `string`: The page number being accessed.

#### Output
*Output schema unknown*

### Pages_GetPageImage
Retrieves a page image for display from the specified envelope.


```js
docusign.Pages_GetPageImage({
  "accountId": "",
  "documentId": "",
  "envelopeId": "",
  "pageNumber": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * pageNumber **required** `string`: The page number being accessed.
  * dpi `string`: Sets the dpi for the image.
  * max_height `string`: Sets the maximum height for the page image in pixels. The dpi is recalculated based on this setting.
  * max_width `string`: Sets the maximum width for the page image in pixels. The dpi is recalculated based on this setting.
  * show_changes `string`

#### Output
* output `file`

### Pages_PutPageImage
Rotates page image from an envelope for display. The page image can be rotated to the left or right.


```js
docusign.Pages_PutPageImage({
  "accountId": "",
  "documentId": "",
  "envelopeId": "",
  "pageNumber": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * pageNumber **required** `string`: The page number being accessed.
  * pageRequest [pageRequest](#pagerequest)

#### Output
*Output schema unknown*

### Tabs_GetPageTabs
Returns tabs on the specified page.


```js
docusign.Tabs_GetPageTabs({
  "accountId": "",
  "documentId": "",
  "envelopeId": "",
  "pageNumber": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * pageNumber **required** `string`: The page number being accessed.

#### Output
* output [EnvelopeDocumentTabs](#envelopedocumenttabs)

### ResponsiveHtml_PostDocumentResponsiveHtmlPreview



```js
docusign.ResponsiveHtml_PostDocumentResponsiveHtmlPreview({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * documentHtmlDefinition [documentHtmlDefinition](#documenthtmldefinition)

#### Output
* output [DocumentResponsiveHtmlPreview](#documentresponsivehtmlpreview)

### Tabs_GetDocumentTabs
Returns tabs on the document.


```js
docusign.Tabs_GetDocumentTabs({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * page_numbers `string`

#### Output
* output [EnvelopeDocumentTabs](#envelopedocumenttabs)

### Templates_GetDocumentTemplates
Retrieves the templates associated with a document in the specified envelope.


```js
docusign.Templates_GetDocumentTemplates({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * include `string`: A comma-separated list

#### Output
* output [EnvelopeTemplates](#envelopetemplates)

### Templates_PostDocumentTemplates
Adds templates to a document in the specified envelope.


```js
docusign.Templates_PostDocumentTemplates({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * documentTemplateList [documentTemplateList](#documenttemplatelist)

#### Output
* output [documentTemplateList](#documenttemplatelist)

### Templates_DeleteDocumentTemplates
Deletes the specified template from a document in an existing envelope.


```js
docusign.Templates_DeleteDocumentTemplates({
  "accountId": "",
  "documentId": "",
  "envelopeId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
*Output schema unknown*

### EmailSettings_DeleteEmailSettings
Deletes all existing email override settings for the envelope. If you want to delete an individual email override setting, use the PUT and set the value to an empty string. Note that deleting email settings will only affect email communications that occur after the deletion and the normal account email settings are used for future email communications.


```js
docusign.EmailSettings_DeleteEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeEmailSettings](#envelopeemailsettings)

### EmailSettings_GetEmailSettings
Retrieves the email override settings for the specified envelope.


```js
docusign.EmailSettings_GetEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeEmailSettings](#envelopeemailsettings)

### EmailSettings_PostEmailSettings
Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.

### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.


```js
docusign.EmailSettings_PostEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeEmailSettings [EnvelopeEmailSettings](#envelopeemailsettings)

#### Output
* output [EnvelopeEmailSettings](#envelopeemailsettings)

### EmailSettings_PutEmailSettings
Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.

This can also be used to delete an individual email override setting by using an empty string for the value to be deleted.


```js
docusign.EmailSettings_PutEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeEmailSettings [EnvelopeEmailSettings](#envelopeemailsettings)

#### Output
* output [EnvelopeEmailSettings](#envelopeemailsettings)

### FormData_GetFormData
Returns envelope form data for an existing envelope.


```js
docusign.FormData_GetFormData({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeFormData](#envelopeformdata)

### ResponsiveHtml_GetEnvelopeHtmlDefinitions



```js
docusign.ResponsiveHtml_GetEnvelopeHtmlDefinitions({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeDocumentHtmlDefinitions](#envelopedocumenthtmldefinitions)

### Lock_DeleteEnvelopeLock
Deletes the lock from the specified envelope. The `X-DocuSign-Edit` header must be included in the request.


```js
docusign.Lock_DeleteEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeLocks](#envelopelocks)

### Lock_GetEnvelopeLock
Retrieves general information about the envelope lock.

If the call is made by the locked by user and the request has the same integrator key as original, then the `X-DocuSign-Edit` header and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.


```js
docusign.Lock_GetEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [EnvelopeLocks](#envelopelocks)

### Lock_PostEnvelopeLock
Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.

###### Note: Users must have envelope locking capability enabled to use this function (userSetting `canLockEnvelopes` must be  set to true for the user).


```js
docusign.Lock_PostEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * lockRequest [lockRequest](#lockrequest)

#### Output
* output [EnvelopeLocks](#envelopelocks)

### Lock_PutEnvelopeLock
Updates the lock duration time or update the `lockedByApp` property information for the specified envelope. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.


```js
docusign.Lock_PutEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * lockRequest [lockRequest](#lockrequest)

#### Output
* output [EnvelopeLocks](#envelopelocks)

### Notification_GetEnvelopesEnvelopeIdNotification
Retrieves the envelope notification, reminders and expirations, information for an existing envelope.


```js
docusign.Notification_GetEnvelopesEnvelopeIdNotification({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

#### Output
* output [notification](#notification)

### Notification_PutEnvelopesEnvelopeIdNotification
Sets envelope notification (Reminders/Expirations) structure for an existing envelope.


```js
docusign.Notification_PutEnvelopesEnvelopeIdNotification({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeNotificationRequest [envelopeNotificationRequest](#envelopenotificationrequest)

#### Output
* output [notification](#notification)

### Recipients_DeleteRecipients
Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.

If the envelope is `In Process`, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.


```js
docusign.Recipients_DeleteRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeRecipients [EnvelopeRecipients](#enveloperecipients)

#### Output
* output [EnvelopeRecipients](#enveloperecipients)

### Recipients_GetRecipients
Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. This method can also be used to retrieve the tab values.

The `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.


```js
docusign.Recipients_GetRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * include_anchor_tab_locations `string`:  When set to **true** and `include_tabs` value is set to **true**, all tabs with anchor tab properties are included in the response. 
  * include_extended `string`:  When set to **true**, the extended properties are included in the response. 
  * include_tabs `string`: When set to **true**, the tab information associated with the recipient is included in the response.

#### Output
* output [EnvelopeRecipients](#enveloperecipients)

### Recipients_PostRecipients
Adds one or more recipients to an envelope.

For an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient's routing order is before or the same as the envelope's next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.


```js
docusign.Recipients_PostRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * resend_envelope `string`: When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
  * EnvelopeRecipients [EnvelopeRecipients](#enveloperecipients)

#### Output
* output [EnvelopeRecipients](#enveloperecipients)

### Recipients_PutRecipients
Updates recipients in a draft envelope or corrects recipient information for an in process envelope. 

For draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.

Once an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `signingGroupId`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.

If you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).


```js
docusign.Recipients_PutRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * offline_signing `string`
  * resend_envelope `string`: When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
  * EnvelopeRecipients [EnvelopeRecipients](#enveloperecipients)

#### Output
* output [recipientsUpdateSummary](#recipientsupdatesummary)

### Recipients_PutRecipientsDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutRecipientsDocumentVisibility({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * EnvelopeDocumentVisibility [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

#### Output
* output [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

### Recipients_DeleteRecipient
Deletes a recipient from a `draft` or `sent` envelope.

If the envelope is "In Process" (has been sent and is not completed or voided), recipients that have completed their actions cannot be deleted.


```js
docusign.Recipients_DeleteRecipient({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
* output [EnvelopeRecipients](#enveloperecipients)

### Recipients_DeleteBulkRecipientsFile
Deletes the bulk recipient file from an envelope. This cannot be used if the envelope has been sent.

After using this, the `bulkRecipientsUri` property is not returned in subsequent GET calls for the envelope, but the recipient will remain as a bulk recipient.


```js
docusign.Recipients_DeleteBulkRecipientsFile({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
* output [bulkRecipientsUpdateResponse](#bulkrecipientsupdateresponse)

### Recipients_GetBulkRecipients
Retrieves the bulk recipient file information from an envelope that has a bulk recipient.


```js
docusign.Recipients_GetBulkRecipients({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * include_tabs `string`: If **true**
  * start_position `string`: Reserved for DocuSign.

#### Output
* output [EnvelopeBulkRecipients](#envelopebulkrecipients)

### Recipients_PutBulkRecipients
Updates the bulk recipients in a draft envelope using a file upload. The Content-Type supported for uploading a bulk recipient file is CSV (text/csv).

The REST API does not support modifying individual rows or values in the bulk recipients file. It only allows the entire file to be added or replaced with a new file.


```js
docusign.Recipients_PutBulkRecipients({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * bulkRecipientsRequest [bulkRecipientsRequest](#bulkrecipientsrequest)

#### Output
* output [bulkRecipientsSummaryResponse](#bulkrecipientssummaryresponse)

### ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId
Retrieves the Electronic Record and Signature Disclosure, with html formatting, associated with the account. You can use an optional query string to set the language for the disclosure.


```js
docusign.ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * langCode `string`

#### Output
* output [EnvelopeConsumerDisclosures](#envelopeconsumerdisclosures)

### ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode
Reserved: Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account.


```js
docusign.ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode({
  "accountId": "",
  "envelopeId": "",
  "langCode": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * langCode **required** `string`: The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * langCode_query `string`

#### Output
* output [EnvelopeConsumerDisclosures](#envelopeconsumerdisclosures)

### Recipients_GetRecipientDocumentVisibility
Returns document visibility for the recipients


```js
docusign.Recipients_GetRecipientDocumentVisibility({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
* output [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

### Recipients_PutRecipientDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutRecipientDocumentVisibility({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * EnvelopeDocumentVisibility [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

#### Output
* output [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

### Recipients_GetRecipientInitialsImage
Retrieves the initials image for the specified user. The image is returned in the same format as it was uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId specified in the endpoint must match the authenticated user's user id and the user must be a member of the account.

The `signatureIdOrName` paramter accepts signature ID or signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly URL encode. If you use the user name, it is likely that the name includes spaces and you might need to URL encode the name before using it in the endpoint. 

For example: "Bob Smith" to "Bob%20Smith"

Older envelopes might only contain chromed images. If getting the non-chromed image fails, try getting the chromed image.


```js
docusign.Recipients_GetRecipientInitialsImage({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * include_chrome `string`: The added line and identifier around the initial image. Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.

#### Output
* output `file`

### Recipients_PutRecipientInitialsImage
Updates the initials image for a signer that does not have a DocuSign account. The supported image formats for this file are: gif, png, jpeg, and bmp. The file size must be less than 200K.

For the Authentication/Authorization for this call, the credentials must match the sender of the envelope, the recipient must be an accountless signer or in person signer. The account must have the `CanSendEnvelope` property set to **true** and the `ExpressSendOnly` property in `SendingUser` structure must be set to **false**.


```js
docusign.Recipients_PutRecipientInitialsImage({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
*Output schema unknown*

### Recipients_GetRecipientSignature
Retrieves signature information for a signer or sign-in-person recipient.


```js
docusign.Recipients_GetRecipientSignature({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
* output [UserSignatures](#usersignatures)

### Recipients_GetRecipientSignatureImage
Retrieves the specified user signature image. The image is returned in the same format as uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureIdOrName` parameter accepts signature ID or signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that don't properly URL encode. If you use the user name, it is likely that the name includes spaces and you might need to URL encode the name before using it in the endpoint. 

For example: "Bob Smith" to "Bob%20Smith"

Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.


```js
docusign.Recipients_GetRecipientSignatureImage({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * include_chrome `string`: When set to **true**, indicates the chromed version of the signature image should be retrieved.

#### Output
* output `file`

### Recipients_PutRecipientSignatureImage
Updates the signature image for an accountless signer. The supported image formats for this file are: gif, png, jpeg, and bmp. The file size must be less than 200K.

For the Authentication/Authorization for this call, the credentials must match the sender of the envelope, the recipient must be an accountless signer or in person signer. The account must have the `CanSendEnvelope` property set to **true** and the `ExpressSendOnly` property in `SendingUser` structure must be set to **false**.


```js
docusign.Recipients_PutRecipientSignatureImage({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.

#### Output
*Output schema unknown*

### Recipients_DeleteRecipientTabs
Deletes one or more tabs associated with a recipient in a draft envelope.


```js
docusign.Recipients_DeleteRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * EnvelopeRecipientTabs [EnvelopeRecipientTabs](#enveloperecipienttabs)

#### Output
* output [EnvelopeRecipientTabs](#enveloperecipienttabs)

### Recipients_GetRecipientTabs
Retrieves information about the tabs associated with a recipient. You can make a single API call to get all the tab values and information from a given, completed envelope in addition to draft ones.  Tab values can be retrieved by using the [EnvelopeRecipients:list method](https://developers.docusign.com/esign-rest-api/reference/Envelopes/EnvelopeRecipients/list/) with query parameter include_tabs set to "true".


```js
docusign.Recipients_GetRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * include_anchor_tab_locations `string`: When set to **true**, all tabs with anchor tab properties are included in the response. 
  * include_metadata `string`: Reserved for DocuSign.

#### Output
* output [EnvelopeRecipientTabs](#enveloperecipienttabs)

### Recipients_PostRecipientTabs
Adds one or more tabs for a recipient.


```js
docusign.Recipients_PostRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * EnvelopeRecipientTabs [EnvelopeRecipientTabs](#enveloperecipienttabs)

#### Output
* output [EnvelopeRecipientTabs](#enveloperecipienttabs)

### Recipients_PutRecipientTabs
Updates one or more tabs for a recipient in a draft envelope. 
**Note**: The Update method can be used if the envelope is not yet complete. To update an existing tab, the request body must include the `tabId`.


```js
docusign.Recipients_PutRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * EnvelopeRecipientTabs [EnvelopeRecipientTabs](#enveloperecipienttabs)

#### Output
* output [EnvelopeRecipientTabs](#enveloperecipienttabs)

### ResponsiveHtml_PostResponsiveHtmlPreview



```js
docusign.ResponsiveHtml_PostResponsiveHtmlPreview({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * documentHtmlDefinition [documentHtmlDefinition](#documenthtmldefinition)

#### Output
* output [DocumentResponsiveHtmlPreview](#documentresponsivehtmlpreview)

### Templates_GetEnvelopeTemplates
This returns a list of the server-side templates, their name and ID, used in an envelope.



```js
docusign.Templates_GetEnvelopeTemplates({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * include `string`: The possible values are:  matching_applied - This returns template matching information for the template.

#### Output
* output [EnvelopeTemplates](#envelopetemplates)

### Templates_PostEnvelopeTemplates
Adds templates to the specified envelope.


```js
docusign.Templates_PostEnvelopeTemplates({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * documentTemplateList [documentTemplateList](#documenttemplatelist)

#### Output
* output [documentTemplateList](#documenttemplatelist)

### Views_PostEnvelopeCorrectView
Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 


```js
docusign.Views_PostEnvelopeCorrectView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * correctViewRequest [correctViewRequest](#correctviewrequest)

#### Output
* output [EnvelopeViews](#envelopeviews)

### Views_PostEnvelopeEditView
Returns a URL that allows you to embed the edit view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign editing view. 

Upon sending completion, the user is returned to the return URL provided by the API application.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 


```js
docusign.Views_PostEnvelopeEditView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * returnUrlRequest [returnUrlRequest](#returnurlrequest)

#### Output
* output [EnvelopeViews](#envelopeviews)

### Views_PostEnvelopeRecipientView
Returns a URL that enables you to embed the recipient view of the DocuSign UI in your applications. If the recipient is a signer, then the view will provide the signing ceremony.

###### Note: Please redirect the client to the URL. iFrames should not be used, especially if the recipient is using a mobile or tablet. 

This method is only used with envelopes in the `sent` status.

Your application is responsible for authenticating the identity of the recipient or signer when you use this method. Use the parameters `assertionId`, `authenticationInstant`, `authenticationMethod`, `clientUserId`, and `securityDomain` to record information on how the recipient was authenticated. At a minimum, `authenticationMethod` and `clientUserId` are required. The information that you provide is included in the envelope's certificate of completion.

## The event status parameter
After the signer completes or ends the signing ceremony, DocuSign will redirect the user's browser back to your app via the `returnUrl` that you supply. DocuSIgn appends an `event` query parameter to the URL with the outcome of the signing ceremony. Your app should use the event parameter to determine the next step for the envelope. Don't fetch the envelope's status via Envelopes: get or a similar method; that could break the DocuSign rule against polling.

## The URL is time-limited
The URL returned by this method is valid for one use. It must be used/displayed within a couple of minutes after being generated. Once the recipient is redirected to the recipient view, they must interact with the DocuSign system periodically or their session will time out.

Because the URL is time-limited, it should not be stored or sent via email. Immediately redirect the user's browser to the URL after you receive it.

If you want to invite someone to an embedded signing session via email, the email invitation's URL must be to your application. When invoked, your app should request a recipientView URL from DocuSign and then redirect the signer to that URL.

## Maintaining State
After the recipient completes the recipient view (or signing ceremony), they are redirected to your application. Your application can recover state information about the transaction by storing information in a cookie, or by including query parameters in the `returnUrl` field. Eg, `https://myapp.eg.com/docusign_return?myState=12345` When the user is redirected to your app, the `event` query parameter will be appended. In this example, prevent spoofing by not using a guessable value as the state value.


```js
docusign.Views_PostEnvelopeRecipientView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientViewRequest [recipientViewRequest](#recipientviewrequest)

#### Output
* output [EnvelopeViews](#envelopeviews)

### Views_PostEnvelopeSenderView
Returns a URL that enables you to embed the sender view of the DocuSign UI in your applications.

The returned URL can only be redirected to immediately after it is generated. It can only be used once.
Therefore, request the URL immediately before you redirect your user to it.

For the best user experience, don't use an iFrame. For iOS devices DocuSign recommends using a WebView.

Multiple solutions are available for maintaining your
client state. See the **Maintaining State** section of the [Embedded Signing introduction.](https://developers.docusign.com/esign-rest-api/guides/embedded-signing)

After the user has completed the sending view, the browser is redirected to the `returnUrl` supplied.

By default, if the envelope already contains one or more documents, DocuSign will initially show the document tagging view when you redirect to the URL. 

To start with the envelope's recipients and documents view instead, examine the URL in the method's response. 
Then change the query parameter from `send=1` to `send=0` to start with the recipients/documents view.

<blockquote>
<p><b>Information Security notice:</b> This method provides full access to the sender's user account.
When you use this view, the sender has full access to the user account. If the sender user account has administrative privileges, then this method also provides administrator access.</p>

<p>If your use case needs to enable a sender to update a draft envelope before it is sent, then either:</p>

<ul>
<li>Configure each sender to have their own individual user account to use this API method.</li>
<li>Enhance your API integration so that this method is not needed. Your integration can create the tabs, recipients and other envelope settings as needed.</li>
</ul>
</blockquote>



```js
docusign.Views_PostEnvelopeSenderView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * returnUrlRequest [returnUrlRequest](#returnurlrequest)

#### Output
* output [EnvelopeViews](#envelopeviews)

### Views_PostEnvelopeRecipientSharedView



```js
docusign.Views_PostEnvelopeRecipientSharedView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * envelopeId **required** `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipientViewRequest [recipientViewRequest](#recipientviewrequest)

#### Output
* output [TemplateViews](#templateviews)

### Folders_GetFolders
Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the `template` query string parameter.


```js
docusign.Folders_GetFolders({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include `string`: Reserved for DocuSign.
  * start_position `string`: Reserved for DocuSign.
  * template `string`: Specifies the items that are returned. Valid values are: 
  * user_filter `string`: Reserved for DocuSign.

#### Output
* output [Folders](#folders)

### Folders_GetFolderItems
Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.


```js
docusign.Folders_GetFolderItems({
  "accountId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * from_date `string`:  Only return items on or after this date. If no value is provided, the default search is the previous 30 days. 
  * owner_email `string`:  The email of the folder owner. 
  * owner_name `string`:  The name of the folder owner. 
  * search_text `string`:  The search text used to search the items of the envelope. The search looks at recipient names and emails, envelope custom fields, sender name, and subject. 
  * start_position `string`: The position of the folder items to return. This is used for repeated calls, when the number of envelopes returned is too much for one return (calls return 100 envelopes at a time). The default value is 0.
  * status `string`: A comma-separated list of current envelope statuses to included in the response. Possible values are:
  * to_date `string`: Only return items up to this date. If no value is provided, the default search is to the current date.

#### Output
* output [folderItemsResponse](#folderitemsresponse)

### Folders_PutFolderById
Moves an envelope from its current folder to the specified folder.

###### Note: You can use this endpoint to delete envelopes by specifying `recyclebin` in the `folderId` parameter of the endpoint. Placing an in process envelope (envelope status of `sent` or `delivered`) in the recycle bin voids the envelope. You can also use this endpoint to delete templates by specifying a template ID instead of an envelope ID in the 'envelopeIds' property and specifying `recyclebin` in the `folderId` parameter. 


```js
docusign.Folders_PutFolderById({
  "accountId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * foldersRequest [foldersRequest](#foldersrequest)

#### Output
* output [Folders](#folders)

### Groups_DeleteGroups
Deletes an existing user group.


```js
docusign.Groups_DeleteGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * Groups [Groups](#groups)

#### Output
* output [Groups](#groups)

### Groups_GetGroups
Retrieves information about groups associated with the account.


```js
docusign.Groups_GetGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * count `string`: Number of records to return. The number must be greater than 1 and less than or equal to 100.
  * group_type `string`
  * search_text `string`
  * start_position `string`: Starting value for the list.

#### Output
* output [Groups](#groups)

### Groups_PostGroups
Creates one or more groups for the account.

Groups can be used to help manage users by associating users with a group. You can associate a group with a Permission Profile, which sets the user permissions for users in that group without having to set the `userSettings` property for each user. You are not required to set Permission Profiles for a group, but it makes it easier to manage user permissions for a large number of users. You can also use groups with template sharing to limit user access to templates.


```js
docusign.Groups_PostGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * Groups [Groups](#groups)

#### Output
* output [Groups](#groups)

### Groups_PutGroups
Updates the group name and modifies, or sets, the permission profile for the group.


```js
docusign.Groups_PutGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * Groups [Groups](#groups)

#### Output
* output [Groups](#groups)

### Brands_DeleteGroupBrands
Deletes brand information from the requested group.


```js
docusign.Brands_DeleteGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.
  * brandsRequest [brandsRequest](#brandsrequest)

#### Output
* output [GroupBrands](#groupbrands)

### Brands_GetGroupBrands
Retrieves information about the brands associated with the requested group.


```js
docusign.Brands_GetGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.

#### Output
* output [GroupBrands](#groupbrands)

### Brands_PutGroupBrands
Adds group brand ID information to a group.


```js
docusign.Brands_PutGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.
  * brandsRequest [brandsRequest](#brandsrequest)

#### Output
* output [GroupBrands](#groupbrands)

### Groups_DeleteGroupUsers
Deletes one or more users from a group.



```js
docusign.Groups_DeleteGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.
  * userInfoList [userInfoList](#userinfolist)

#### Output
* output [GroupUsers](#groupusers)

### Groups_GetGroupUsers
Retrieves a list of users in a group.


```js
docusign.Groups_GetGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.
  * count `string`: Number of records to return. The number must be greater than 1 and less than or equal to 100. 
  * start_position `string`: Starting value for the list.

#### Output
* output [GroupUsers](#groupusers)

### Groups_PutGroupUsers
Adds one or more users to an existing group.


```js
docusign.Groups_PutGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * groupId **required** `string`: The ID of the group being accessed.
  * userInfoList [userInfoList](#userinfolist)

#### Output
* output [GroupUsers](#groupusers)

### AccountIdentityVerification_GetAccountIdentityVerification



```js
docusign.AccountIdentityVerification_GetAccountIdentityVerification({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [IdentityVerifications](#identityverifications)

### PaymentGatewayAccounts_GetAllPaymentGatewayAccounts
List payment gateway account information


```js
docusign.PaymentGatewayAccounts_GetAllPaymentGatewayAccounts({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [paymentGatewayAccountsInfo](#paymentgatewayaccountsinfo)

### PermissionProfiles_GetPermissionProfiles
Retrieves a list of Permission Profiles. Permission Profiles are a standard set of user permissions that you can apply to individual users or users in a Group. This makes it easier to manage user permissions for a large number of users, without having to change permissions on a user-by-user basis.

Currently, Permission Profiles can only be created and modified in the DocuSign console.


```js
docusign.PermissionProfiles_GetPermissionProfiles({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include `string`: Reserved for DocuSign.

#### Output
* output [permissionProfileInformation](#permissionprofileinformation)

### PermissionProfiles_PostPermissionProfiles
Creates a new permission profile in the specified account.


```js
docusign.PermissionProfiles_PostPermissionProfiles({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * include `string`: A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
  * AccountPermissionProfiles [AccountPermissionProfiles](#accountpermissionprofiles)

#### Output
* output [AccountPermissionProfiles](#accountpermissionprofiles)

### PermissionProfiles_DeletePermissionProfiles
Deletes a permissions profile within the specified account.


```js
docusign.PermissionProfiles_DeletePermissionProfiles({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * permissionProfileId **required** `string`

#### Output
*Output schema unknown*

### PermissionProfiles_GetPermissionProfile
Returns a permissions profile in the specified account.


```js
docusign.PermissionProfiles_GetPermissionProfile({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * permissionProfileId **required** `string`
  * include `string`: A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

#### Output
* output [AccountPermissionProfiles](#accountpermissionprofiles)

### PermissionProfiles_PutPermissionProfiles
Updates a permission profile within the specified account.


```js
docusign.PermissionProfiles_PutPermissionProfiles({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * permissionProfileId **required** `string`
  * include `string`: A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
  * AccountPermissionProfiles [AccountPermissionProfiles](#accountpermissionprofiles)

#### Output
* output [AccountPermissionProfiles](#accountpermissionprofiles)

### PowerForms_DeletePowerFormsList
Deletes one or more PowerForms


```js
docusign.PowerForms_DeletePowerFormsList({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * powerFormsRequest [powerFormsRequest](#powerformsrequest)

#### Output
* output [powerFormsResponse](#powerformsresponse)

### PowerForms_GetPowerFormsList
Returns the list of PowerForms available to the user.


```js
docusign.PowerForms_GetPowerFormsList({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * from_date `string`: Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * order_by `string`: An optional value that sets the file attribute used to sort the item list. 
  * to_date `string`: End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

#### Output
* output [powerFormsResponse](#powerformsresponse)

### PowerForms_PostPowerForm
Creates a new PowerForm.


```js
docusign.PowerForms_PostPowerForm({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * PowerForms [PowerForms](#powerforms)

#### Output
* output [PowerForms](#powerforms)

### PowerForms_GetPowerFormsSenders
Returns the list of PowerForms available to the user.


```js
docusign.PowerForms_GetPowerFormsSenders({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

#### Output
* output [powerFormSendersResponse](#powerformsendersresponse)

### PowerForms_DeletePowerForm
Delete a PowerForm.


```js
docusign.PowerForms_DeletePowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * powerFormId **required** `string`

#### Output
*Output schema unknown*

### PowerForms_GetPowerForm
Returns a single PowerForm.


```js
docusign.PowerForms_GetPowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * powerFormId **required** `string`

#### Output
* output [PowerForms](#powerforms)

### PowerForms_PutPowerForm
Creates a new PowerForm.


```js
docusign.PowerForms_PutPowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * powerFormId **required** `string`
  * PowerForms [PowerForms](#powerforms)

#### Output
* output [PowerForms](#powerforms)

### PowerForms_GetPowerFormFormData
Returns the form data associated with the usage of a PowerForm.


```js
docusign.PowerForms_GetPowerFormFormData({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * powerFormId **required** `string`
  * data_layout `string`
  * from_date `string`: Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
  * to_date `string`: End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

#### Output
* output [powerFormsFormDataResponse](#powerformsformdataresponse)

### RecipientNames_GetRecipientNames
Retrieves a list of recipients in the specified account that are associated with a email address supplied in the query string.


```js
docusign.RecipientNames_GetRecipientNames({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * email `string`: The email address for the user

#### Output
* output [recipientNamesResponse](#recipientnamesresponse)

### AccountSignatureProviders_GetSealProviders



```js
docusign.AccountSignatureProviders_GetSealProviders({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountSealProviders](#accountsealproviders)

### SearchFolders_GetSearchFolderContents
Retrieves a list of envelopes that match the criteria specified in the query.

If the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.


```js
docusign.SearchFolders_GetSearchFolderContents({
  "accountId": "",
  "searchFolderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * searchFolderId **required** `string`: Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.
  * all `string`: Specifies that all envelopes that match the criteria are returned.
  * count `string`: Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
  * from_date `string`: Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
  * include_recipients `string`: When set to **true**, the recipient information is returned in the response.
  * order `string`: Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order.
  * order_by `string`: Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`.
  * start_position `string`: Specifies the the starting location in the result set of the items that are returned.
  * to_date `string`: Specifies the end of the date range to return.

#### Output
* output [folderItemResponse](#folderitemresponse)

### Settings_GetSettings
Retrieves the account settings information for the specified account.


```js
docusign.Settings_GetSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [accountSettingsInformation](#accountsettingsinformation)

### Settings_PutSettings
Updates the account settings for the specified account.


```js
docusign.Settings_PutSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * accountSettingsInformation [accountSettingsInformation](#accountsettingsinformation)

#### Output
*Output schema unknown*

### ENoteConfiguration_DeleteENoteConfiguration
Deletes configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_DeleteENoteConfiguration({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
*Output schema unknown*

### ENoteConfiguration_GetENoteConfiguration
Returns the configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_GetENoteConfiguration({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [ENoteConfigurations](#enoteconfigurations)

### ENoteConfiguration_PutENoteConfiguration
Updates configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_PutENoteConfiguration({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * ENoteConfigurations [ENoteConfigurations](#enoteconfigurations)

#### Output
* output [ENoteConfigurations](#enoteconfigurations)

### AccountPasswordRules_GetAccountPasswordRules
Get the password rules


```js
docusign.AccountPasswordRules_GetAccountPasswordRules({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountPasswordRules](#accountpasswordrules)

### AccountPasswordRules_PutAccountPasswordRules
Update the password rules


```js
docusign.AccountPasswordRules_PutAccountPasswordRules({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * AccountPasswordRules [AccountPasswordRules](#accountpasswordrules)

#### Output
* output [AccountPasswordRules](#accountpasswordrules)

### TabSettings_GetTabSettings
Returns tab settings list for specified account


```js
docusign.TabSettings_GetTabSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountTabSettings](#accounttabsettings)

### TabSettings_PutSettings
Modifies tab settings for specified account


```js
docusign.TabSettings_PutSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * AccountTabSettings [AccountTabSettings](#accounttabsettings)

#### Output
* output [AccountTabSettings](#accounttabsettings)

### SharedAccess_GetSharedAccess
Retrieves shared item status for one or more users and types of items.

Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the `shared` to `shared_from`.


```js
docusign.SharedAccess_GetSharedAccess({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * count `string`: Specifies maximum number of results included in the response. If no value is specified, this defaults to 1000.
  * envelopes_not_shared_user_status `string`
  * folder_ids `string`: A comma separated list of folder IDs  for which the shared item
  * item_type `string`: Specifies the type of shared item being requested. The possible values are:
  * search_text `string`: This can be used to filter user names in the response. The wild-card '*' (asterisk) can be used around the string.
  * shared `string`: A comma-separated list of sharing filters that specifies which users appear in the response. 
  * start_position `string`: If the number of responses is greater than `count`, the number of responses to skip. Typically this value is a multiple of `count`. Default: 0.
  * user_ids `string`: A comma-separated list of user IDs for whom the shared item information is being requested.

#### Output
* output [accountSharedAccess](#accountsharedaccess)

### SharedAccess_PutSharedAccess
This sets the shared access status for one or more users or templates.

When setting user shared access, only users with account administration privileges can set shared access status for envelopes.

When setting template shared access, only users who own a template and have sharing permission or with account administration privileges can set shared access for templates.

Changes to the shared items status are not additive. The change always replaces the current status.

To change template shared access the query parameter `item_type` =  `templates` must be added to the request. When this is set, the user and envelopes properties are not required.




```js
docusign.SharedAccess_PutSharedAccess({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * item_type `string`: Specifies the type of shared item being requested. The possible values are:
  * user_ids `string`: A comma-separated list of user IDs whose shared item information is being set.
  * accountSharedAccess [accountSharedAccess](#accountsharedaccess)

#### Output
* output [accountSharedAccess](#accountsharedaccess)

### AccountSignatureProviders_GetSignatureProviders
Returns Account available signature providers for specified account.


```js
docusign.AccountSignatureProviders_GetSignatureProviders({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountSignatureProviders](#accountsignatureproviders)

### SigningGroups_DeleteSigningGroups
Deletes one or more signing groups in the specified account.


```js
docusign.SigningGroups_DeleteSigningGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupInformation [signingGroupInformation](#signinggroupinformation)

#### Output
* output [signingGroupInformation](#signinggroupinformation)

### SigningGroups_GetSigningGroups
Retrieves a list of all signing groups in the specified account.


```js
docusign.SigningGroups_GetSigningGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * group_type `string`
  * include_users `string`: When set to **true**, the response includes the signing group members. 

#### Output
* output [signingGroupInformation](#signinggroupinformation)

### SigningGroups_PostSigningGroups
Creates one or more signing groups. 

Multiple signing groups can be created in one call. Only users with account administrator privileges can create signing groups. 

An account can have a maximum of 50 signing groups. Each signing group can have a maximum of 50 group members.
 
Signing groups can be used by any account user.


```js
docusign.SigningGroups_PostSigningGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupInformation [signingGroupInformation](#signinggroupinformation)

#### Output
* output [signingGroupInformation](#signinggroupinformation)

### SigningGroups_PutSigningGroups
Updates the name of one or more existing signing groups. 


```js
docusign.SigningGroups_PutSigningGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupInformation [signingGroupInformation](#signinggroupinformation)

#### Output
* output [signingGroupInformation](#signinggroupinformation)

### SigningGroups_GetSigningGroup
Retrieves information, including group member information, for the specified signing group. 


```js
docusign.SigningGroups_GetSigningGroup({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupId **required** `string`

#### Output
* output [SigningGroups](#signinggroups)

### SigningGroups_PutSigningGroup
Updates signing group name and member information. You can also add new members to the signing group. A signing group can have a maximum of 50 members. 


```js
docusign.SigningGroups_PutSigningGroup({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupId **required** `string`
  * SigningGroups [SigningGroups](#signinggroups)

#### Output
* output [SigningGroups](#signinggroups)

### SigningGroups_DeleteSigningGroupUsers
Deletes  one or more members from the specified signing group. 


```js
docusign.SigningGroups_DeleteSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupId **required** `string`
  * SigningGroupUsers [SigningGroupUsers](#signinggroupusers)

#### Output
* output [SigningGroupUsers](#signinggroupusers)

### SigningGroups_GetSigningGroupUsers
Retrieves the list of members in the specified Signing Group.


```js
docusign.SigningGroups_GetSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupId **required** `string`

#### Output
* output [SigningGroupUsers](#signinggroupusers)

### SigningGroups_PutSigningGroupUsers
Adds one or more new members to a signing group. A signing group can have a maximum of 50 members. 


```js
docusign.SigningGroups_PutSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signingGroupId **required** `string`
  * SigningGroupUsers [SigningGroupUsers](#signinggroupusers)

#### Output
* output [SigningGroupUsers](#signinggroupusers)

### SupportedLanguages_GetSupportedLanguages
List supported languages for the recipient language setting


```js
docusign.SupportedLanguages_GetSupportedLanguages({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [supportedLanguages](#supportedlanguages)

### Tabs_GetTabDefinitions
Retrieves a list of all tabs associated with the account.


```js
docusign.Tabs_GetTabDefinitions({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * custom_tab_only `string`: When set to **true**, only custom tabs are returned in the response. 

#### Output
* output [tabMetadataList](#tabmetadatalist)

### Tabs_PostTabDefinitions
Creates a tab with pre-defined properties, such as a text tab with a certain font type and validation pattern. Users can access the custom tabs when sending documents through the DocuSign web application.

Custom tabs can be created for approve, checkbox, company, date, date signed, decline, email, email address, envelope ID, first name, formula, full name, initial here, last name, list, note, number, radio, sign here, signer attachment, SSN, text, title, and zip tabs.


```js
docusign.Tabs_PostTabDefinitions({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * CustomTabs [CustomTabs](#customtabs)

#### Output
* output [CustomTabs](#customtabs)

### Tab_DeleteCustomTab
Deletes the custom from the specified account.


```js
docusign.Tab_DeleteCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * customTabId **required** `string`

#### Output
*Output schema unknown*

### Tab_GetCustomTab
Retrieves information about the requested custom tab on the specified account.


```js
docusign.Tab_GetCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * customTabId **required** `string`

#### Output
* output [CustomTabs](#customtabs)

### Tab_PutCustomTab
Updates the information in a custom tab for the specified account.


```js
docusign.Tab_PutCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * customTabId **required** `string`
  * CustomTabs [CustomTabs](#customtabs)

#### Output
* output [CustomTabs](#customtabs)

### Templates_GetTemplates
Retrieves the list of templates for the specified account. The request can be limited to a specific folder.


```js
docusign.Templates_GetTemplates({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * count `string`: Number of records to return in the cache.
  * folder `string`: The query value can be a folder name or folder ID. The response will only return templates in the specified folder.
  * folder_ids `string`: A comma separated list of folder ID GUIDs.
  * from_date `string`: Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
  * include `string`: A comma-separated list
  * modified_from_date `string`
  * modified_to_date `string`
  * order `string`: Sets the direction order used to sort the list. Valid values are: -asc = ascending sort order (a to z)  -desc = descending sort order (z to a)
  * order_by `string`: Sets the file attribute used to sort the list. Valid values are:  -name: template name  -modified: date/time template was last modified.  -used: date/time the template was last used.
  * search_text `string`: The search text used to search the names of templates.
  * shared_by_me `string`: If true, the response only includes templates shared by the user. If false, the response only returns template not shared by the user. If not specified, the response is not affected.
  * start_position `string`: The starting index for the first template shown in the response. This must be greater than or equal to 0 (zero).
  * to_date `string`: End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.
  * used_from_date `string`: Start of the search date range. Only returns templates used or edited on or after this date/time. If no value is specified, there is no limit on the earliest date used.
  * used_to_date `string`: End of the search date range. Only returns templates used or edited up to this date/time. If no value is provided, this defaults to the current date.
  * user_filter `string`: Sets if the templates shown in the response Valid values are:  -owned_by_me: only shows templates the user owns.  -shared_with_me: only shows templates that are shared with the user.  -all: shows all templates owned or shared with the user.
  * user_id `string`

#### Output
* output [envelopeTemplateResults](#envelopetemplateresults)

### Templates_PostTemplates
Creates a template definition using a multipart request.

### Template Email Subject Merge Fields

Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.

The merge fields, based on the recipient's role name, are added to the `emailSubject` property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.

Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.


###### If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.

To add a recipient's name in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

`[[<roleName>_UserName]]`

Example:

`"emailSubject":"[[Signer 1_UserName]], Please sign this NDA",`

To add a recipient's email address in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

`[[<roleName>_Email]]`

Example:

`"emailSubject":"[[Signer 1_Email]], Please sign this NDA",`


In both cases the <roleName> is the recipient's contents of the `roleName` property in the template.

For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then `[[<roleName>_UserName]]` or `[[<roleName>_Email]]` is shown in the email subject.


```js
docusign.Templates_PostTemplates({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * Templates [Templates](#templates)

#### Output
* output [templateSummary](#templatesummary)

### Templates_GetTemplate
Retrieves the definition of the specified template.


```js
docusign.Templates_GetTemplate({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * include `string`: A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

#### Output
* output [Templates](#templates)

### Templates_PutTemplate
Updates an existing template.


```js
docusign.Templates_PutTemplate({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * Templates [Templates](#templates)

#### Output
* output [templateUpdateSummary](#templateupdatesummary)

### CustomFields_DeleteTemplateCustomFields
Deletes envelope custom fields in a template.


```js
docusign.CustomFields_DeleteTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateCustomFields [templateCustomFields](#templatecustomfields)

#### Output
* output [TemplateCustomFields](#templatecustomfields)

### CustomFields_GetTemplateCustomFields
Retrieves the custom document field information from an existing template.


```js
docusign.CustomFields_GetTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [TemplateCustomFields](#templatecustomfields)

### CustomFields_PostTemplateCustomFields
Creates custom document fields in an existing template document.


```js
docusign.CustomFields_PostTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateCustomFields [templateCustomFields](#templatecustomfields)

#### Output
* output [TemplateCustomFields](#templatecustomfields)

### CustomFields_PutTemplateCustomFields
Updates the custom fields in a template.

Each custom field used in a template must have a unique name.


```js
docusign.CustomFields_PutTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateCustomFields [templateCustomFields](#templatecustomfields)

#### Output
* output [TemplateCustomFields](#templatecustomfields)

### Documents_DeleteTemplateDocuments
Deletes one or more documents from an existing template.


```js
docusign.Documents_DeleteTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [TemplateDocuments](#templatedocuments)

### Documents_GetTemplateDocuments
Retrieves a list of documents associated with the specified template.


```js
docusign.Documents_GetTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [TemplateDocuments](#templatedocuments)

### Documents_PutTemplateDocuments
Adds one or more documents to an existing template document.


```js
docusign.Documents_PutTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * apply_document_fields `string`: When **true**, document fields
  * persist_tabs `string`
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [TemplateDocuments](#templatedocuments)

### Documents_GetTemplateDocument
Retrieves one or more PDF documents from the specified template.

You can specify the ID of the document to retrieve or can specify `combined` to retrieve all documents in the template as one pdf.


```js
docusign.Documents_GetTemplateDocument({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * encrypt `string`
  * show_changes `string`

#### Output
* output `file`

### Documents_PutTemplateDocument
Adds the specified document to an existing template document.


```js
docusign.Documents_PutTemplateDocument({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * apply_document_fields `string`: When **true**, document fields
  * is_envelope_definition `string`
  * envelopeDefinition [envelopeDefinition](#envelopedefinition)

#### Output
* output [envelopeDocument](#envelopedocument)

### DocumentFields_DeleteTemplateDocumentFields
Deletes custom document fields from an existing template document.


```js
docusign.DocumentFields_DeleteTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * TemplateDocumentFields [TemplateDocumentFields](#templatedocumentfields)

#### Output
* output [TemplateDocumentFields](#templatedocumentfields)

### DocumentFields_GetTemplateDocumentFields
Retrieves the custom document fields for an existing template document.


```js
docusign.DocumentFields_GetTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [TemplateDocumentFields](#templatedocumentfields)

### DocumentFields_PostTemplateDocumentFields
Creates custom document fields in an existing template document.


```js
docusign.DocumentFields_PostTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * TemplateDocumentFields [TemplateDocumentFields](#templatedocumentfields)

#### Output
* output [TemplateDocumentFields](#templatedocumentfields)

### DocumentFields_PutTemplateDocumentFields
Updates existing custom document fields in an existing template document.


```js
docusign.DocumentFields_PutTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * TemplateDocumentFields [TemplateDocumentFields](#templatedocumentfields)

#### Output
* output [TemplateDocumentFields](#templatedocumentfields)

### ResponsiveHtml_GetTemplateDocumentHtmlDefinitions



```js
docusign.ResponsiveHtml_GetTemplateDocumentHtmlDefinitions({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [EnvelopeDocumentHtmlDefinitions](#envelopedocumenthtmldefinitions)

### Pages_GetTemplatePageImages
Returns document page image(s) based on input.


```js
docusign.Pages_GetTemplatePageImages({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * count `string`: The maximum number of results to be returned by this request.
  * dpi `string`: Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
  * max_height `string`: Sets the maximum height (in pixels) of the returned image.
  * max_width `string`: Sets the maximum width (in pixels) of the returned image.
  * nocache `string`
  * show_changes `string`
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

#### Output
* output [pageImages](#pageimages)

### Pages_DeleteTemplatePage
Deletes a page from a document in a template based on the page number.


```js
docusign.Pages_DeleteTemplatePage({
  "accountId": "",
  "documentId": "",
  "pageNumber": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * pageNumber **required** `string`: The page number being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * pageRequest [pageRequest](#pagerequest)

#### Output
*Output schema unknown*

### Pages_GetTemplatePageImage
Retrieves a page image for display from the specified template.


```js
docusign.Pages_GetTemplatePageImage({
  "accountId": "",
  "documentId": "",
  "pageNumber": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * pageNumber **required** `string`: The page number being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * dpi `string`: Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
  * max_height `string`: Sets the maximum height (in pixels) of the returned image.
  * max_width `string`: Sets the maximum width (in pixels) of the returned image.
  * show_changes `string`

#### Output
* output `file`

### Pages_PutTemplatePageImage
Rotates page image from a template for display. The page image can be rotated to the left or right.


```js
docusign.Pages_PutTemplatePageImage({
  "accountId": "",
  "documentId": "",
  "pageNumber": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * pageNumber **required** `string`: The page number being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * pageRequest [pageRequest](#pagerequest)

#### Output
*Output schema unknown*

### Tabs_GetTemplatePageTabs
Returns tabs on the specified page.


```js
docusign.Tabs_GetTemplatePageTabs({
  "accountId": "",
  "documentId": "",
  "pageNumber": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * pageNumber **required** `string`: The page number being accessed.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [TemplateDocumentTabs](#templatedocumenttabs)

### ResponsiveHtml_PostTemplateDocumentResponsiveHtmlPreview



```js
docusign.ResponsiveHtml_PostTemplateDocumentResponsiveHtmlPreview({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * documentHtmlDefinition [documentHtmlDefinition](#documenthtmldefinition)

#### Output
* output [DocumentResponsiveHtmlPreview](#documentresponsivehtmlpreview)

### Tabs_GetTemplateDocumentTabs
Returns tabs on the document.


```js
docusign.Tabs_GetTemplateDocumentTabs({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * documentId **required** `string`: The ID of the document being accessed.
  * templateId **required** `string`: The ID of the template being accessed.
  * page_numbers `string`

#### Output
* output [TemplateDocumentTabs](#templatedocumenttabs)

### ResponsiveHtml_GetTemplateHtmlDefinitions



```js
docusign.ResponsiveHtml_GetTemplateHtmlDefinitions({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [EnvelopeDocumentHtmlDefinitions](#envelopedocumenthtmldefinitions)

### Lock_DeleteTemplateLock
Deletes the lock from the specified template. The `X-DocuSign-Edit` header must be included in the request.


```js
docusign.Lock_DeleteTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * lockRequest [lockRequest](#lockrequest)

#### Output
* output [TemplateLocks](#templatelocks)

### Lock_GetTemplateLock
Retrieves general information about the template lock.

If the call is made by the user who has the lock and the request has the same integrator key as original, then the `X-DocuSign-Edit` header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.


```js
docusign.Lock_GetTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [TemplateLocks](#templatelocks)

### Lock_PostTemplateLock
Locks the specified template, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the template.

###### Note: Users must have envelope locking capability enabled to use this function (the userSetting property `canLockEnvelopes` must be set to **true** for the user).


```js
docusign.Lock_PostTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * lockRequest [lockRequest](#lockrequest)

#### Output
* output [TemplateLocks](#templatelocks)

### Lock_PutTemplateLock
Updates the lock duration time or update the `lockedByApp` property information for the specified template. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.


```js
docusign.Lock_PutTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * lockRequest [lockRequest](#lockrequest)

#### Output
* output [TemplateLocks](#templatelocks)

### Notification_GetTemplatesTemplateIdNotification
Retrieves the envelope notification, reminders and expirations, information for an existing template.


```js
docusign.Notification_GetTemplatesTemplateIdNotification({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [notification](#notification)

### Notification_PutTemplatesTemplateIdNotification
Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.


```js
docusign.Notification_PutTemplatesTemplateIdNotification({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateNotificationRequest [templateNotificationRequest](#templatenotificationrequest)

#### Output
* output [notification](#notification)

### Recipients_DeleteTemplateRecipients
Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.


```js
docusign.Recipients_DeleteTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateRecipients [templateRecipients](#templaterecipients)

#### Output
* output [TemplateRecipients](#templaterecipients)

### Recipients_GetTemplateRecipients
Retrieves the information for all recipients in the specified template.


```js
docusign.Recipients_GetTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * include_anchor_tab_locations `string`:  When set to **true** and `include_tabs` is set to **true**, all tabs with anchor tab properties are included in the response. 
  * include_extended `string`:  When set to **true**, the extended properties are included in the response. 
  * include_tabs `string`: When set to **true**, the tab information associated with the recipient is included in the response.

#### Output
* output [TemplateRecipients](#templaterecipients)

### Recipients_PostTemplateRecipients
Adds one or more recipients to a template.


```js
docusign.Recipients_PostTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * resend_envelope `string`: When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
  * templateRecipients [templateRecipients](#templaterecipients)

#### Output
* output [TemplateRecipients](#templaterecipients)

### Recipients_PutTemplateRecipients
Updates recipients in a template. 

You can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.


```js
docusign.Recipients_PutTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * resend_envelope `string`: When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
  * templateRecipients [templateRecipients](#templaterecipients)

#### Output
* output [recipientsUpdateSummary](#recipientsupdatesummary)

### Recipients_PutTemplateRecipientsDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutTemplateRecipientsDocumentVisibility({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * TemplateDocumentVisibility [TemplateDocumentVisibility](#templatedocumentvisibility)

#### Output
* output [TemplateDocumentVisibility](#templatedocumentvisibility)

### Recipients_DeleteTemplateRecipient
Deletes the specified recipient file from the specified template.


```js
docusign.Recipients_DeleteTemplateRecipient({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateRecipients [templateRecipients](#templaterecipients)

#### Output
* output [TemplateRecipients](#templaterecipients)

### Recipients_DeleteTemplateBulkRecipientsFile
Deletes the bulk recipient list on a template.


```js
docusign.Recipients_DeleteTemplateBulkRecipientsFile({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [bulkRecipientsUpdateResponse](#bulkrecipientsupdateresponse)

### Recipients_GetTemplateBulkRecipients
Retrieves the bulk recipient file information from a template that has a bulk recipient.


```js
docusign.Recipients_GetTemplateBulkRecipients({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * include_tabs `string`: When set to **true**, the tab information associated with the recipient is included in the response.
  * start_position `string`: Reserved for DocuSign.

#### Output
* output [TemplateBulkRecipients](#templatebulkrecipients)

### Recipients_PutTemplateBulkRecipients
Updates the bulk recipients in a template using a file upload. The Content-Type supported for uploading a bulk recipient file is CSV (text/csv).

The REST API does not support modifying individual rows or values in the bulk recipients file. It only allows the entire file to be added or replaced with a new file.


```js
docusign.Recipients_PutTemplateBulkRecipients({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * bulkRecipientsRequest [bulkRecipientsRequest](#bulkrecipientsrequest)

#### Output
* output [bulkRecipientsSummaryResponse](#bulkrecipientssummaryresponse)

### Recipients_GetTemplateRecipientDocumentVisibility
Returns document visibility for the recipients


```js
docusign.Recipients_GetTemplateRecipientDocumentVisibility({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.

#### Output
* output [EnvelopeDocumentVisibility](#envelopedocumentvisibility)

### Recipients_PutTemplateRecipientDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutTemplateRecipientDocumentVisibility({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * TemplateDocumentVisibility [TemplateDocumentVisibility](#templatedocumentvisibility)

#### Output
* output [TemplateDocumentVisibility](#templatedocumentvisibility)

### Recipients_DeleteTemplateRecipientTabs
Deletes one or more tabs associated with a recipient in a template.


```js
docusign.Recipients_DeleteTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateTabs [templateTabs](#templatetabs)

#### Output
* output [TemplateRecipientTabs](#templaterecipienttabs)

### Recipients_GetTemplateRecipientTabs
Gets the tabs information for a signer or sign-in-person recipient in a template.


```js
docusign.Recipients_GetTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * include_anchor_tab_locations `string`: When set to **true**, all tabs with anchor tab properties are included in the response. 
  * include_metadata `string`: Reserved for DocuSign.

#### Output
* output [TemplateRecipientTabs](#templaterecipienttabs)

### Recipients_PostTemplateRecipientTabs
Adds one or more tabs for a recipient.


```js
docusign.Recipients_PostTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateTabs [templateTabs](#templatetabs)

#### Output
* output [TemplateRecipientTabs](#templaterecipienttabs)

### Recipients_PutTemplateRecipientTabs
Updates one or more tabs for a recipient in a template.


```js
docusign.Recipients_PutTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * recipientId **required** `string`: The `recipientId` used when the envelope or template was created.
  * templateId **required** `string`: The ID of the template being accessed.
  * templateTabs [templateTabs](#templatetabs)

#### Output
* output [TemplateRecipientTabs](#templaterecipienttabs)

### ResponsiveHtml_PostTemplateResponsiveHtmlPreview



```js
docusign.ResponsiveHtml_PostTemplateResponsiveHtmlPreview({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * documentHtmlDefinition [documentHtmlDefinition](#documenthtmldefinition)

#### Output
* output [DocumentResponsiveHtmlPreview](#documentresponsivehtmlpreview)

### Views_PostTemplateEditView
Provides a URL to start an edit view of the Template UI


```js
docusign.Views_PostTemplateEditView({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * returnUrlRequest [returnUrlRequest](#returnurlrequest)

#### Output
* output [TemplateViews](#templateviews)

### Templates_DeleteTemplatePart
Removes a member group's sharing permissions for a specified template.


```js
docusign.Templates_DeleteTemplatePart({
  "accountId": "",
  "templateId": "",
  "templatePart": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templatePart **required** `string`: Currently, the only defined part is **groups**.
  * Groups [Groups](#groups)

#### Output
* output [Groups](#groups)

### Templates_PutTemplatePart
Shares a template with the specified members group.


```js
docusign.Templates_PutTemplatePart({
  "accountId": "",
  "templateId": "",
  "templatePart": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * templateId **required** `string`: The ID of the template being accessed.
  * templatePart **required** `string`: Currently, the only defined part is **groups**.
  * Groups [Groups](#groups)

#### Output
* output [Groups](#groups)

### UnsupportedFileTypes_GetUnsupportedFileTypes
Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.


```js
docusign.UnsupportedFileTypes_GetUnsupportedFileTypes({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [fileTypeList](#filetypelist)

### Users_DeleteUsers
This closes one or more user records in the account. Users are never deleted from an account, but closing a user prevents them from using account functions.

The response returns whether the API execution was successful (200 - OK) or  if it failed. The response contains a user structure similar to the request and includes the user changes. If an error occurred during the DELETE operation for any of the users, the response for that user contains an `errorDetails` node with `errorCode` and `message` properties.


```js
docusign.Users_DeleteUsers({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * delete `string`
  * userInfoList [userInfoList](#userinfolist)

#### Output
* output [GroupUsers](#groupusers)

### Users_GetUsers
Retrieves the list of users for the specified account.

The response returns the list of users for the account along with the information about the result set. If the `additional_info` query was added to the endpoint and set to **true**, the full user information is returned for each user


```js
docusign.Users_GetUsers({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * additional_info `string`: When set to **true**, the full list of user information is returned for each user in the account.
  * count `string`: Number of records to return. The number must be greater than 0 and less than or equal to 100. 
  * email `string`
  * email_substring `string`: Filters the returned user records by the email address or a sub-string of email address.
  * group_id `string`: Filters user records returned by one or more group Id's.
  * login_status `string`
  * not_group_id `string`
  * start_position `string`: Starting value for the list. 
  * status `string`: Filters the user records by account status. One of:
  * user_name_substring `string`: Filters the user records returned by the user name or a sub-string of user name.

#### Output
* output [userInformationList](#userinformationlist)

### Users_PostUsers
Adds new users to an account.

The body of this request
is an array
of [`Users`][usersobject] objects.
For each new user,
you must provide at least
the `userName`
and
an `email`.

The
[`userSettings` property](#user-settings)
is a [name/value][nameValue]
list that specifies the actions users can
perform.
In the example below,
Tal Mason
will be able to send envelopes,
and the activation email
will be in French
because the `locale`
is set to `fr`.


```
POST /restapi/v2/accounts/{accountId}/users
Content-Type: application/json
```
```
{
  "newUsers": [
    {
      "userName": "Claire Horace",
      "email": "claire@example.com.com"
    },
    {
      "userName": "Tal Mason",
      "email": "tal@example.com.com",
      "userSettings": [
        {
          "name": "canSendEnvelope",
          "value": "true"
        },
        {
          "name": "locale",
          "value": "fr"
        }
      ]
    }
  ]
}
```


A successful response
is a
`newUsers` array
with information about
the newly created users.
If there was problem creating a user,
that entry will contain
an `errorDetails` property
that describes what went wrong.

```json
{
  "newUsers": [
    {
      "userId": "e064a4fc-c0da-c0c0-95fa-8bac87ede98a",
      "uri": "/users/e064a4fc-c0da-c0c0-95fa-8bac87ede98a",
      "email": "claire@example.com",
      "userName": "Claire Horace",
      "createdDateTime": "0001-01-01T08:00:00.0000000Z",
      "errorDetails": {
        "errorCode": "USER_ALREADY_EXISTS_IN_ACCOUNT",
        "message": "Username and email combination already exists for this account."
      }
    },
    {
      "userId": "a0e6c64b-feed-cafe-9af0-805ff3c8cffd",
      "uri": "/users/a0e6c64b-feed-cafe-9af0-805ff3c8cffd",
      "email": "tal@example.com",
      "userName": "Tal Mason",
      "userStatus": "ActivationSent",
      "createdDateTime": "2017-09-15T05:54:36.1265683Z"
    }
  ]
}
```


### User Settings

User settings
specify the capabilities
a newly created user will have.


| Name                             | Value   | Authorization Requried                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------------------- | :------ | :------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowBulkRecipients              | Boolean | Admin                                                          | When **true**, this user can use the bulk send functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| allowRecipientLanguageSelection  | Boolean | Admin                                                          | When **true**, this user can set the language used in the standard email format for a recipient when creating an envelope.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| allowSendOnBehalfOf              | Boolean | Admin                                                          | When **true**, this user can send envelopes 'on behalf of' other users through the API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| apiAccountWideAccess             | Boolean | Admin                                                          | When **true**, this user can send and manage envelopes for the entire account using the DocuSign API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| canEditSharedAddressBook         | String  | Admin                                                          | Sets the address book usage and management rights for the user. Possible values: <ul> <li><code>none</code></li> <li><code>use_only_shared</code></li> <li><code>use_private_and_shared</code></li> <li><code>share</code></li> </ul>                                                                                                                                                                                                                                                                                                                                                   |
| canManageAccount                 | Boolean | Admin &amp; not setting for self                               | When **true**, this user can manage account settings, manage user settings, add users, and remove users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| canManageTemplates               | String  | Admin &amp; not setting for self                               | Sets the template usage and management rights for the user. Possible values: <ul> <li><code>none</code></li> <li><code>use</code></li> <li><code>create</code></li> <li><code>share</code></li> </ul>                                                                                                                                                                                                                                                                                                                                                                                   |
| canSendAPIRequests               | Boolean | Admin &amp; [account setting][accountsettings] `usesAPI` is set| Only needed if integrator key is not used. When **true**, this user can send and manage envelopes using the DocuSign API.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| canSendEnvelope                  | Boolean | Admin &amp; not setting for self                               | When **true**, this user can send envelopes though the DocuSign Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| enableDSPro                      | Boolean | SysAdmin                                                       | When **true**, this user can send and manage envelopes from the DocuSign Desktop Client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| enableSequentialSigningAPI       | Boolean | SysAdmin                                                       | When **true**, this user can define the routing order of recipients for envelopes sent using the DocuSign API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| enableSequentialSigningUI        | Boolean | SysAdmin                                                       | When **true**, this user can define the routing order of recipients while sending documents for signature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| enableSignerAttachments          | Boolean | Admin                                                          | When **true**, this user can add requests for attachments from signers while sending documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| enableSignOnPaperOverride        | Boolean | Admin                                                          | When **true**, this user can override the account setting that determines if signers may sign their documents on paper as an option to signing electronically.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| enableTransactionPoint           | Boolean | SysAdmin                                                       | When **true**, this user can select an envelope from their member console and upload the envelope documents to TransactionPoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| enableVaulting                   | Boolean | Admin                                                          | When **true**, this user can use electronic vaulting for documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| locale                           | String  | Admin                                                          | Sets the default language for the user. The supported languages are: <ul> <li>Chinese Simplified: <code>zh_CN</code></li> <li>Chinese Traditional: <code>zh_TW</code></li> <li>Dutch: <code>nl</code></li> <li>English US: <code>en</code></li> <li>French: <code>fr</code></li> <li>German: <code>de</code></li> <li>Italian: <code>it</code></li> <li>Japanese: <code>ja</code></li> <li>Korean: <code>ko</code></li> <li>Portuguese: <code>pt</code></li> <li>Portuguese (Brazil): <code>pt_BR</code></li> <li>Russian: <code>ru</code></li> <li>Spanish: <code>es</code></li> </ul> |
| powerFormAdmin                   | Boolean | Admin                                                          | When **true**, this user can create, manage and download the PowerForms documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| powerFormUser                    | Boolean | Admin                                                          | When **true**, this user can view and download PowerForms documents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| selfSignedRecipientEmailDocument | String  | Admin                                                          | Sets how self-signed documents are presented to the email recipients. This can only be changed if the <code>selfSignedRecipientEmailDocumentUserOverride</code> <a href="https://developers.docusign.com/esign-rest-api/reference/Accounts/Accounts/create/#account-settings">account setting</a> is <strong>true</strong>. This setting overrides the account setting. Possibe values are: <ul> <li><code>include_pdf</code>: A PDF of the completed document is attached to the email.</li> <li><code>include_link</code>: A secure link to the self-signed documents is included in the email.</li> </ul>                      |
| vaultingMode                     | String  | Admin                                                          | Sets the electronic vaulting mode for the user. Possible values: <ul> <li><code>none</code></li> <li><code>estored</code></li> <li><code>electronic_original</code></li> </ul>                                                                                                                                                                                                                                                                                                                                                                                                          |

[accountsettings]:  https://developers.docusign.com/esign-rest-api/reference/Accounts/Accounts/create/#account-settings
[nameValue]:        #/definitions/nameValue
[usersobject]:      #/definitions/Users



```js
docusign.Users_PostUsers({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * newUsersDefinition [newUsersDefinition](#newusersdefinition)

#### Output
* output [newUsersSummary](#newuserssummary)

### Users_PutUsers
Change one or more user in the specified account.


```js
docusign.Users_PutUsers({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userInformationList [userInformationList](#userinformationlist)

#### Output
* output [userInformationList](#userinformationlist)

### User_GetUser
Retrieves the user information for the specified user. 

To return additional user information that details the last login date, login status, and the user's password expiration date, set the optional `additional_info` query string parameter to **true**.


```js
docusign.User_GetUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * additional_info `string`: When set to **true**, the full list of user information is returned for each user in the account.
  * email `string`

#### Output
* output [Users](#users)

### User_PutUser
Updates the specified user information.


```js
docusign.User_PutUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * Users [Users](#users)

#### Output
* output [Users](#users)

### CloudStorage_DeleteCloudStorageProviders
Deletes the user authentication information for one or more cloud storage providers. The next time the user tries to access the cloud storage provider, they must pass normal authentication.


```js
docusign.CloudStorage_DeleteCloudStorageProviders({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * CloudStorageProviders [CloudStorageProviders](#cloudstorageproviders)

#### Output
* output [CloudStorageProviders](#cloudstorageproviders)

### CloudStorage_GetCloudStorageProviders
Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.



```js
docusign.CloudStorage_GetCloudStorageProviders({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * redirectUrl `string`:  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.

#### Output
* output [CloudStorageProviders](#cloudstorageproviders)

### CloudStorage_PostCloudStorage
Configures the redirect URL information  for one or more cloud storage providers for the specified user. The redirect URL is added to the authentication URL to complete the return route.


```js
docusign.CloudStorage_PostCloudStorage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * CloudStorageProviders [CloudStorageProviders](#cloudstorageproviders)

#### Output
* output [CloudStorageProviders](#cloudstorageproviders)

### CloudStorage_DeleteCloudStorage
Deletes the user authentication information for the specified cloud storage provider. The next time the user tries to access the cloud storage provider, they must pass normal authentication for this cloud storage provider.


```js
docusign.CloudStorage_DeleteCloudStorage({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * serviceId **required** `string`: The ID of the service to access. 
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [CloudStorageProviders](#cloudstorageproviders)

### CloudStorage_GetCloudStorage
Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.


```js
docusign.CloudStorage_GetCloudStorage({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * serviceId **required** `string`: The ID of the service to access. 
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * redirectUrl `string`:  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.

#### Output
* output [CloudStorageProviders](#cloudstorageproviders)

### CloudStorageFolder_GetCloudStorageFolderAll
Retrieves a list of all the items in a specified folder from the specified cloud storage provider. 


```js
docusign.CloudStorageFolder_GetCloudStorageFolderAll({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * serviceId **required** `string`: The ID of the service to access. 
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * cloud_storage_folder_path `string`: A comma separated list of folder IDs included in the request. 
  * count `string`: An optional value that sets how many items are included in the response. 
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * order_by `string`: An optional value that sets the file attribute used to sort the item list. 
  * search_text `string`
  * start_position `string`: Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  

#### Output
* output [CloudStorage](#cloudstorage)

### CloudStorageFolder_GetCloudStorageFolder
Retrieves a list of all the items in all  the folders associated with the user from the specified cloud storage provider. You can limit the scope of the returned items by providing a comma separated list of folder IDs in the request.


```js
docusign.CloudStorageFolder_GetCloudStorageFolder({
  "accountId": "",
  "folderId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * serviceId **required** `string`: The ID of the service to access. 
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * cloud_storage_folder_path `string`
  * count `string`: An optional value that sets how many items are included in the response. 
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * order_by `string`: An optional value that sets the file attribute used to sort the item list. 
  * search_text `string`
  * start_position `string`: Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  

#### Output
* output [CloudStorage](#cloudstorage)

### UserCustomSettings_DeleteCustomSettings
Deletes the specified custom user settings for a single user.

###Deleting Grouped Custom User Settings###

If the custom user settings you want to delete are grouped, you must include the following information in the header, after Content-Type, in the request:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings.

If the extra header information is not included, only the custom user settings that were added without a group are deleted.


```js
docusign.UserCustomSettings_DeleteCustomSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * UserCustomSettings [UserCustomSettings](#usercustomsettings)

#### Output
* output [UserCustomSettings](#usercustomsettings)

### UserCustomSettings_GetCustomSettings
Retrieves a list of custom user settings for a single user.

Custom settings provide a flexible way to store and retrieve custom user information that can be used in your own system.

###### Note: Custom user settings are not the same as user account settings.

###Getting Grouped Custom User Settings###

If the custom user settings you want to retrieve are grouped, you must include the following information in the header, after Content-Type, in the request:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings.

If the extra header information is not included, only the custom user settings that were added without a group are retrieved.


```js
docusign.UserCustomSettings_GetCustomSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [UserCustomSettings](#usercustomsettings)

### UserCustomSettings_PutCustomSettings
Adds or updates custom user settings for the specified user.

###### Note: Custom user settings are not the same as user account settings.

Custom settings provide a flexible way to store and retrieve custom user information that you can use in your own system.

**Important**: There is a limit on the size for all the custom user settings for a single user. The limit is 4,000 characters, which includes the XML and JSON structure for the settings.

### Grouping Custom User Settings ###

You can group custom user settings when adding them. Grouping allows you to retrieve settings that are in a specific group, instead of retrieving all the user custom settings.

To group custom user settings, add the following information in the header, after Content-Type:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings. Grouping is shown in the Example Request Body below.

When getting or deleting grouped custom user settings, you must include the extra header information.

Grouping custom user settings is not required and if the extra header information is not included, the custom user settings are added normally and can be retrieved or deleted without including the additional header.


```js
docusign.UserCustomSettings_PutCustomSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * UserCustomSettings [UserCustomSettings](#usercustomsettings)

#### Output
* output [UserCustomSettings](#usercustomsettings)

### UserProfile_GetProfile
Retrieves the user profile information, the privacy settings and personal information (address, phone number, etc.) for the specified user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.


```js
docusign.UserProfile_GetProfile({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [UserProfiles](#userprofiles)

### UserProfile_PutProfile
Updates the user's detail information, profile information, privacy settings, and personal information in the user ID card.

You can also change a user's name by changing the information in the `userDetails` property. When changing a user's name, you can either change the information in the `userName` property OR change the information in `firstName`, `middleName`, `lastName, suffixName`, and `title` properties. Changes to `firstName`, `middleName`, `lastName`, `suffixName`, and `title` properties take precedence over changes to the `userName` property.


```js
docusign.UserProfile_PutProfile({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * UserProfiles [UserProfiles](#userprofiles)

#### Output
*Output schema unknown*

### UserProfileImage_DeleteUserProfileImage
Deletes the user profile image from the  specified user's profile.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.


```js
docusign.UserProfileImage_DeleteUserProfileImage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
*Output schema unknown*

### UserProfileImage_GetUserProfileImage
Retrieves the user profile picture for the specified user. The image is returned in the same format as uploaded.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.

If successful, the response returns a 200 - OK and the user profile image.


```js
docusign.UserProfileImage_GetUserProfileImage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * encoding `string`

#### Output
* output `file`

### UserProfileImage_PutUserProfileImage
Updates the user profile image by uploading an image to the user profile.

The supported image formats are: gif, png, jpeg, and bmp. The file must be less than 200K. For best viewing results, DocuSign recommends that the image is no more than 79 pixels wide and high.


```js
docusign.UserProfileImage_PutUserProfileImage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
*Output schema unknown*

### UserSettings_GetUserSettings
Retrieves a list of the account settings and email notification information for the specified user.

The response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].


```js
docusign.UserSettings_GetUserSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [userSettingsInformation](#usersettingsinformation)

### UserSettings_PutUserSettings
Updates the account settings list and email notification types for the specified user.


```js
docusign.UserSettings_PutUserSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userSettingsInformation [userSettingsInformation](#usersettingsinformation)

#### Output
*Output schema unknown*

### UserSignatures_GetUserSignatures
Retrieves the signature definitions for the specified user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_GetUserSignatures({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * stamp_type `string`

#### Output
* output [userSignaturesInformation](#usersignaturesinformation)

### UserSignatures_PostUserSignatures
Adds a user signature image and/or user initials image to the specified user. 

The userId property specified in the endpoint must match the authenticated user's userId and the user must be a member of the account.

The rules and processes associated with this are:

* If Content-Type is set to application/json, then the default behavior for creating a default signature image, based on the name and a DocuSign font, is used.
* If Content-Type is set to multipart/form-data, then the request must contain a first part with the user signature information, followed by parts that contain the images.

For each Image part, the Content-Disposition header has a "filename" value that is used to map to the `signatureName` and/or `signatureInitials` properties in the JSON to the image. 

For example: 
`Content-Disposition: file; filename="Ron Test20121127083900"`

If no matching image (by filename value) is found, then the image is not set. One, both, or neither of the signature and initials images can be set with this call.

The Content-Transfer-Encoding: base64 header, set in the header for the part containing the image, can be set to indicate that the images are formatted as base64 instead of as binary.

If successful, 200-OK is returned, and a JSON structure containing the signature information is provided, note that the signatureId can change with each API POST, PUT, or DELETE since the changes to the signature structure cause the current signature to be closed, and a new signature record to be created.


```js
docusign.UserSignatures_PostUserSignatures({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userSignaturesInformation [userSignaturesInformation](#usersignaturesinformation)

#### Output
* output [userSignaturesInformation](#usersignaturesinformation)

### UserSignatures_PutUserSignature
Adds/updates a user signature.


```js
docusign.UserSignatures_PutUserSignature({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userSignaturesInformation [userSignaturesInformation](#usersignaturesinformation)

#### Output
* output [userSignaturesInformation](#usersignaturesinformation)

### UserSignatures_DeleteUserSignature
Removes the signature information for the user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_DeleteUserSignature({
  "accountId": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
*Output schema unknown*

### UserSignatures_GetUserSignature
Retrieves the structure of a single signature with a known signature name.

The userId specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_GetUserSignature({
  "accountId": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [UserSignatures](#usersignatures)

### UserSignatures_PutUserSignatureById
Creates, or updates, the signature font and initials for the specified user. When creating a signature, you use this resource to create the signature name and then add the signature and initials images into the signature.

###### Note: This will also create a default signature for the user when one does not exist.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_PutUserSignatureById({
  "accountId": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * close_existing_signature `string`: When set to **true**, closes the current signature.
  * userSignatureDefinition [userSignatureDefinition](#usersignaturedefinition)

#### Output
* output [UserSignatures](#usersignatures)

### UserSignatures_DeleteUserSignatureImage
Deletes the specified initials image or signature image for the specified user.

The function deletes one or the other of the image types, to delete both the initials image and signature image you must call the endpoint twice.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_DeleteUserSignatureImage({
  "accountId": "",
  "imageType": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * imageType **required** `string`: One of **signature_image** or **initials_image**.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [UserSignatures](#usersignatures)

### UserSignatures_GetUserSignatureImage
Retrieves the specified initials image or signature image for the specified user. The image is returned in the same format as uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".

###### Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.


```js
docusign.UserSignatures_GetUserSignatureImage({
  "accountId": "",
  "imageType": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * imageType **required** `string`: One of **signature_image** or **initials_image**.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * include_chrome `string`

#### Output
* output `file`

### UserSignatures_PutUserSignatureImage
Updates the user signature image or user initials image for the specified user. The supported image formats for this file are: gif, png, jpeg, and bmp. The file must be less than 200K.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".



```js
docusign.UserSignatures_PutUserSignatureImage({
  "accountId": "",
  "imageType": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * imageType **required** `string`: One of **signature_image** or **initials_image**.
  * signatureId **required** `string`: The ID of the signature being accessed.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [UserSignatures](#usersignatures)

### UserSocialLogin_DeleteUserSocialLogin
Deletes a social account from a use's account.


```js
docusign.UserSocialLogin_DeleteUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * UserSocialAccountLogins [UserSocialAccountLogins](#usersocialaccountlogins)

#### Output
*Output schema unknown*

### UserSocialLogin_GetUserSocialLogin
Retrieves a list of social accounts linked to a user's account.


```js
docusign.UserSocialLogin_GetUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

#### Output
* output [userSocialIdResult](#usersocialidresult)

### UserSocialLogin_PutUserSocialLogin
Adds a new social account to a user's account.


```js
docusign.UserSocialLogin_PutUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * userId **required** `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * UserSocialAccountLogins [UserSocialAccountLogins](#usersocialaccountlogins)

#### Output
*Output schema unknown*

### Views_PostAccountConsoleView
Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.


```js
docusign.Views_PostAccountConsoleView({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * consoleViewRequest [consoleViewRequest](#consoleviewrequest)

#### Output
* output [EnvelopeViews](#envelopeviews)

### Watermark_GetWatermark
Get watermark information.


```js
docusign.Watermark_GetWatermark({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [AccountWatermarks](#accountwatermarks)

### Watermark_PutWatermark
Update watermark information.


```js
docusign.Watermark_PutWatermark({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * AccountWatermarks [AccountWatermarks](#accountwatermarks)

#### Output
* output [AccountWatermarks](#accountwatermarks)

### WatermarkPreview_PutWatermarkPreview
Get watermark preview.


```js
docusign.WatermarkPreview_PutWatermarkPreview({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * AccountWatermarks [AccountWatermarks](#accountwatermarks)

#### Output
* output [AccountWatermarks](#accountwatermarks)

### Workspace_GetWorkspaces
Gets information about the Workspaces that have been created.


```js
docusign.Workspace_GetWorkspaces({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.

#### Output
* output [workspaceList](#workspacelist)

### Workspace_PostWorkspace
Creates a new workspace.


```js
docusign.Workspace_PostWorkspace({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * Workspaces [Workspaces](#workspaces)

#### Output
* output [Workspaces](#workspaces)

### Workspace_DeleteWorkspace
Deletes an existing workspace (logically).


```js
docusign.Workspace_DeleteWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.

#### Output
* output [Workspaces](#workspaces)

### Workspace_GetWorkspace
Retrives properties about a workspace given a unique workspaceId. 


```js
docusign.Workspace_GetWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.

#### Output
* output [Workspaces](#workspaces)

### Workspace_PutWorkspace
Updates information about a specific workspace.


```js
docusign.Workspace_PutWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.
  * Workspaces [Workspaces](#workspaces)

#### Output
* output [Workspaces](#workspaces)

### WorkspaceFolder_DeleteWorkspaceItems
Deletes workspace one or more specific files/folders from the given folder or root.


```js
docusign.WorkspaceFolder_DeleteWorkspaceItems({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.
  * workspaceItemList [workspaceItemList](#workspaceitemlist)

#### Output
*Output schema unknown*

### WorkspaceFolder_GetWorkspaceFolder
Retrieves workspace folder contents, which can include sub folders and files.


```js
docusign.WorkspaceFolder_GetWorkspaceFolder({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.
  * count `string`: The maximum number of results to be returned by this request.
  * include_files `string`: When set to **true**, file information is returned in the response along with folder information. The default is **false**.
  * include_sub_folders `string`: When set to **true**, information about the sub-folders of the current folder is returned. The default is **false**.
  * include_thumbnails `string`: When set to **true**, thumbnails are returned as part of the response.  The default is **false**.
  * include_user_detail `string`: Set to **true** to return extended details about the user. The default is **false**.
  * start_position `string`: The position within the total result set from which to start returning values.
  * workspace_user_id `string`: If set, then the results are filtered to those associated with the specified userId.

#### Output
* output [workspaceFolderContents](#workspacefoldercontents)

### WorkspaceFile_PostWorkspaceFiles
Creates a workspace file.


```js
docusign.WorkspaceFile_PostWorkspaceFiles({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.

#### Output
* output [WorkspaceItems](#workspaceitems)

### WorkspaceFile_GetWorkspaceFile
Retrieves a workspace file (the binary).


```js
docusign.WorkspaceFile_GetWorkspaceFile({
  "accountId": "",
  "fileId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * fileId **required** `string`: Specifies the room file ID GUID.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.
  * is_download `string`: When set to **true**, the Content-Disposition header is set in the response. The value of the header provides the filename of the file. Default is **false**.
  * pdf_version `string`: When set to **true** the file returned as a PDF.

#### Output
*Output schema unknown*

### WorkspaceFile_PutWorkspaceFile
Updates workspace item metadata for one or more specific files/folders.


```js
docusign.WorkspaceFile_PutWorkspaceFile({
  "accountId": "",
  "fileId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * fileId **required** `string`: Specifies the room file ID GUID.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.

#### Output
* output [WorkspaceItems](#workspaceitems)

### WorkspaceFilePages_GetWorkspaceFilePages
Retrieves a workspace file as rasterized pages.


```js
docusign.WorkspaceFilePages_GetWorkspaceFilePages({
  "accountId": "",
  "fileId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The external account number (int) or account ID Guid.
  * fileId **required** `string`: Specifies the room file ID GUID.
  * folderId **required** `string`: The ID of the folder being accessed.
  * workspaceId **required** `string`: Specifies the workspace ID GUID.
  * count `string`: The maximum number of results to be returned by this request.
  * dpi `string`: Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
  * max_height `string`: Sets the maximum height (in pixels) of the returned image.
  * max_width `string`: Sets the maximum width (in pixels) of the returned image.
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

#### Output
* output [pageImages](#pageimages)

### BillingPlans_GetBillingPlans
Retrieves a list of the billing plans associated with a distributor.


```js
docusign.BillingPlans_GetBillingPlans(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [billingPlansResponse](#billingplansresponse)

### BillingPlans_GetBillingPlan
Retrieves the billing plan details for the specified billing plan ID.


```js
docusign.BillingPlans_GetBillingPlan({
  "billingPlanId": ""
}, context)
```

#### Input
* input `object`
  * billingPlanId **required** `string`: The ID of the billing plan being accessed.

#### Output
* output [billingPlanResponse](#billingplanresponse)

### NotaryJournals_GetNotaryJournals



```js
docusign.NotaryJournals_GetNotaryJournals({}, context)
```

#### Input
* input `object`
  * count `string`: The maximum number of results to be returned by this request.
  * search_text `string`
  * start_position `string`: The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

#### Output
* output [notaryJournalList](#notaryjournallist)

### PasswordRules_GetPasswordRules
Get membership account password rules


```js
docusign.PasswordRules_GetPasswordRules(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [userPasswordRules](#userpasswordrules)

### APIRequestLog_DeleteRequestLogs
Deletes the request log files.


```js
docusign.APIRequestLog_DeleteRequestLogs(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### APIRequestLog_GetRequestLogs
Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.

If the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.

If the Accept header is set to `application/json` or `application/xml`, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below. 


```js
docusign.APIRequestLog_GetRequestLogs({}, context)
```

#### Input
* input `object`
  * encoding `string`

#### Output
* output [apiRequestLogsResult](#apirequestlogsresult)

### APIRequestLog_GetRequestLog
Retrieves information for a single log entry.

**Request**
The `requestLogfId` property can be retrieved by getting the list of log entries. The Content-Transfer-Encoding header can be set to base64 to retrieve the API request/response as base 64 string. Otherwise the bytes of the request/response are returned.

**Response**
If the Content-Transfer-Encoding header was set to base64, the log is returned as a base64 string.


```js
docusign.APIRequestLog_GetRequestLog({
  "requestLogId": ""
}, context)
```

#### Input
* input `object`
  * requestLogId **required** `string`

#### Output
* output `file`

### APIRequestLog_GetRequestLogSettings
Retrieves the current API request logging setting for the user and remaining log entries.

**Response**
The response includes the current API request logging setting for the user, along with the maximum log entries and remaining log entries.


```js
docusign.APIRequestLog_GetRequestLogSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RequestLogs](#requestlogs)

### APIRequestLog_PutRequestLogSettings
Enables or disables API request logging for troubleshooting.

When enabled (`apiRequestLogging` is set to true), REST API requests and responses for the user are added to a log. A log can have up to 50 requests/responses and the current number of log entries can be determined by getting the settings. Logging is automatically disabled when the log limit of 50 is reached.

You can call [ML:GetRequestLog] or [ML:GetRequestLogs] to download the log files (individually or as a zip file). Call [ML:DeleteRequestLogs] to clear the log by deleting current entries.

Private information, such as passwords and integrator key information, which is normally located in the call header is omitted from the request/response log.

###### Note: API request logging only captures requests from the authenticated user. Any call that does not authenticate the user and resolve a userId isn't logged. Meaning that login_information, NewAccounts, or other distributor-credential calls are not logged.



```js
docusign.APIRequestLog_PutRequestLogSettings({}, context)
```

#### Input
* input `object`
  * RequestLogs [RequestLogs](#requestlogs)

#### Output
* output [RequestLogs](#requestlogs)

### LoginInformation_GetLoginInformation
Retrieves account information for the authenticated user. Since the API is sessionless, this method does not actually log you in.
Instead, the method returns information about the account or accounts that the authenticated user has access to.

###### Important: This method must only be used for the [Legacy Header Authentication](https://developers.docusign.com/esign-rest-api/guides/authentication/legacy) flow. Use the [`AccountServer: userInfo` method](https://developers.docusign.com/esign-rest-api/guides/authentication/user-info-endpoints) for the OAuth2 Authentication Code and [Implicit Grant flows](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-implicit).

Each account has a `baseUrl` property, returned in the response.
Use this `baseUrl` in all future API calls as the base of the request URL.

For each account, the `baseUrl` property includes the DocuSign server, the API version, and the `accountId` property.

It is not uncommon for an authenticated user to have access to more than one account (and more than one `baseUrl`). Depending on your integration's use case, your integration may choose to:

* Use the account whose `isDefault` field is `true`.
* List the available accounts and ask the user to choose one.
* Enable the system administrator to set the account that should be used by your integration.

If this method returns successfully, then you also know that the user has successfully authenticated with the DocuSign Signature platform.

For more information on Authentication Login, please see our [REST API Authentication Guides](https://developers.docusign.com/esign-rest-api/guides/authentication).

###### Note: Certain reference items maybe out of date and the latest information is available in the new Authentication Guides.



```js
docusign.LoginInformation_GetLoginInformation({}, context)
```

#### Input
* input `object`
  * api_password `string`: Reserved for DocuSign.
  * embed_account_id_guid `string`
  * include_account_id_guid `string`: When set to **true**, shows the account ID GUID in the response.
  * login_settings `string`: Determines whether login settings are returned in the response.

#### Output
* output [Authentication](#authentication)

### LoginInformation_PutLoginInformation
Updates the password for a specified user.


```js
docusign.LoginInformation_PutLoginInformation({
  "loginPart": ""
}, context)
```

#### Input
* input `object`
  * loginPart **required** `string`: Currently, only the value **password** is supported.
  * userPasswordInformation [userPasswordInformation](#userpasswordinformation)

#### Output
*Output schema unknown*

### OAuth2_PostRevoke
**Deprecated**

**Note:**  This information is provided for legacy reference only. Please see our supported forms of authentication referenced below and use our [REST API Authentication Guides](https://developers.docusign.com/esign-rest-api/guides/authentication) for more information.<p>
Revokes an OAuth2 authorization server token. After the revocation is complete, a caller must re-authenticate to restore access.



```js
docusign.OAuth2_PostRevoke(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### OAuth2_PostToken
**Deprecated**

**Note:**  This information is provided for legacy reference only. Please see our supported forms of authentication referenced below and use our [REST API Authentication Guides](https://developers.docusign.com/esign-rest-api/guides/authentication) for more information.<p>
Creates an OAuth2 authorization server token endpoint. For more information about OAuth 2.0 please see [OAuth2.0](https://oauth.net/2/).



```js
docusign.OAuth2_PostToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [oauthAccess](#oauthaccess)



## Definitions

### AccountBrands
* AccountBrands `object`: Brand management for accounts
  * brands `array`: The list of brands.
    * items [brand](#brand)
  * recipientBrandIdDefault `string`: The brand seen by envelope recipients when a brand is not explicitly set.
  * senderBrandIdDefault `string`: The brand seen by envelope senders when a brand is not explicitly set.

### AccountConsumerDisclosures
* AccountConsumerDisclosures `object`: Account consumer disclosures
  * accountEsignId `string`: A GUID identifying the account associated with the consumer disclosure
  * allowCDWithdraw `string`: Indicates whether the customer can withdraw their acceptance of the consumer disclosure.
  * allowCDWithdrawMetadata [settingsMetadata](#settingsmetadata)
  * changeEmail `string`
  * changeEmailOther `string`
  * companyName `string`: The name of the company associated with the consumer disclosure.
  * companyPhone `string`: The phone number of the company associated with the consumer disclosure.
  * copyCostPerPage `string`
  * copyFeeCollectionMethod `string`: Specifies the fee collection method for cases in which the customer requires paper copies of the document.
  * copyRequestEmail `string`
  * custom `string`
  * enableEsign `string`
  * esignAgreement `string`: The Electronic Record and Signature Disclosure text. The disclosure text includes the html formatting.
  * esignText `string`
  * languageCode `string`
  * mustAgreeToEsign `string`
  * pdfId `string`: **Deprecated**
  * useBrand `string`
  * useConsumerDisclosureWithinAccount `string`
  * useConsumerDisclosureWithinAccountMetadata [settingsMetadata](#settingsmetadata)
  * withdrawAddressLine1 `string`: Contains the first address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawAddressLine2 `string`: Contains the second address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawByEmail `string`: Indicates whether the customer can withdraw consent by email.
  * withdrawByMail `string`: Indicates whether the customer can withdraw consent by postal mail.
  * withdrawByPhone `string`: Indicates whether the customer can withdraw consent by phone.
  * withdrawCity `string`: Contains the city of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawConsequences `string`: Indicates the consequences of withdrawing consent.
  * withdrawEmail `string`: Contains the email address to which a customer can send a consent withdrawal notification.
  * withdrawOther `string`: Indicates other information need to withdraw consent.
  * withdrawPhone `string`: Contains the phone number which a customer can call to register consent withdrawal notification.
  * withdrawPostalCode `string`: Contains the postal code of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawState `string`: Contains the state of the postal address to which a customer can send a consent withdrawal notification.

### AccountCustomFields
* AccountCustomFields `object`: Custom Fields
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### AccountPasswordRules
* AccountPasswordRules `object`
  * expirePassword `string`
  * expirePasswordDays `string`
  * expirePasswordDaysMetadata [accountPasswordExpirePasswordDays](#accountpasswordexpirepassworddays)
  * lockoutDurationMinutes `string`
  * lockoutDurationMinutesMetadata [accountPasswordLockoutDurationMinutes](#accountpasswordlockoutdurationminutes)
  * lockoutDurationType `string`
  * lockoutDurationTypeMetadata [accountPasswordLockoutDurationType](#accountpasswordlockoutdurationtype)
  * minimumPasswordAgeDays `string`
  * minimumPasswordAgeDaysMetadata [accountPasswordMinimumPasswordAgeDays](#accountpasswordminimumpasswordagedays)
  * minimumPasswordLength `string`
  * minimumPasswordLengthMetadata [accountMinimumPasswordLength](#accountminimumpasswordlength)
  * passwordIncludeDigit `string`
  * passwordIncludeDigitOrSpecialCharacter `string`
  * passwordIncludeLowerCase `string`
  * passwordIncludeSpecialCharacter `string`
  * passwordIncludeUpperCase `string`
  * passwordStrengthType `string`
  * passwordStrengthTypeMetadata [accountPasswordStrengthType](#accountpasswordstrengthtype)
  * questionsRequired `string`
  * questionsRequiredMetadata [accountPasswordQuestionsRequired](#accountpasswordquestionsrequired)

### AccountPermissionProfiles
* AccountPermissionProfiles `object`
  * modifiedByUsername `string`
  * modifiedDateTime `string`
  * permissionProfileId `string`
  * permissionProfileName `string`
  * settings [accountRoleSettings](#accountrolesettings)
  * userCount `string`
  * users `array`
    * items [Users](#users)

### AccountSealProviders
* AccountSealProviders `object`
  * seals `array`
    * items [sealIdentifier](#sealidentifier)

### AccountSignatureProviders
* AccountSignatureProviders `object`: Account SBS Signature Providers
  * signatureProviders `array`
    * items [accountSignatureProvider](#accountsignatureprovider)

### AccountTabSettings
* AccountTabSettings `object`
  * allowTabOrder `string`
  * allowTabOrderMetadata [settingsMetadata](#settingsmetadata)
  * approveDeclineTabsEnabled `string`
  * approveDeclineTabsMetadata [settingsMetadata](#settingsmetadata)
  * calculatedFieldsEnabled `string`
  * calculatedFieldsMetadata [settingsMetadata](#settingsmetadata)
  * checkboxTabsEnabled `string`
  * checkboxTabsMetadata [settingsMetadata](#settingsmetadata)
  * dataFieldRegexEnabled `string`
  * dataFieldRegexMetadata [settingsMetadata](#settingsmetadata)
  * dataFieldSizeEnabled `string`
  * dataFieldSizeMetadata [settingsMetadata](#settingsmetadata)
  * firstLastEmailTabsEnabled `string`
  * firstLastEmailTabsMetadata [settingsMetadata](#settingsmetadata)
  * listTabsEnabled `string`
  * listTabsMetadata [settingsMetadata](#settingsmetadata)
  * noteTabsEnabled `string`
  * noteTabsMetadata [settingsMetadata](#settingsmetadata)
  * radioTabsEnabled `string`
  * radioTabsMetadata [settingsMetadata](#settingsmetadata)
  * savingCustomTabsEnabled `string`
  * savingCustomTabsMetadata [settingsMetadata](#settingsmetadata)
  * senderToChangeTabAssignmentsEnabled `string`
  * senderToChangeTabAssignmentsMetadata [settingsMetadata](#settingsmetadata)
  * sharedCustomTabsEnabled `string`
  * sharedCustomTabsMetadata [settingsMetadata](#settingsmetadata)
  * tabDataLabelEnabled `string`
  * tabDataLabelMetadata [settingsMetadata](#settingsmetadata)
  * tabLocationEnabled `string`
  * tabLocationMetadata [settingsMetadata](#settingsmetadata)
  * tabLockingEnabled `string`
  * tabLockingMetadata [settingsMetadata](#settingsmetadata)
  * tabScaleEnabled `string`
  * tabScaleMetadata [settingsMetadata](#settingsmetadata)
  * tabTextFormattingEnabled `string`
  * tabTextFormattingMetadata [settingsMetadata](#settingsmetadata)
  * textTabsEnabled `string`
  * textTabsMetadata [settingsMetadata](#settingsmetadata)

### AccountWatermarks
* AccountWatermarks `object`
  * displayAngle `string`
  * enabled `string`
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * id `string`
  * imageBase64 `string`
  * transparency `string`
  * watermarkText `string`

### Accounts
* Accounts `object`: Account management
  * accountIdGuid `string`: The GUID associated with the account ID.
  * accountName `string`: The name of the current account.
  * allowTransactionRooms `string`: When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
  * billingPeriodDaysRemaining `string`: Reserved: TBD
  * billingPeriodEndDate `string`: Reserved: TBD
  * billingPeriodEnvelopesAllowed `string`: Reserved: TBD
  * billingPeriodEnvelopesSent `string`: Reserved: TBD
  * billingPeriodStartDate `string`: Reserved: TBD
  * billingProfile `string`: Reserved: TBD
  * canCancelRenewal `string`: Reserved: TBD
  * canUpgrade `string`: When set to **true**, specifies that you can upgrade the account through the API.
  * connectPermission `string`
  * createdDate `string`
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * currentPlanId `string`: Identifies the plan that was used create this account.
  * distributorCode `string`: The code that identifies the billing plan groups and plans for the new account.
  * docuSignLandingUrl `string`
  * envelopeSendingBlocked `string`
  * envelopeUnitPrice `string`
  * externalAccountId `string`
  * forgottenPasswordQuestionsCount `string`:  A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
  * isDowngrade `string`
  * paymentMethod `string`
  * planClassification `string`: Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
  * planEndDate `string`: The date that the current plan will end.
  * planName `string`: The name of the Billing Plan.
  * planStartDate `string`: The date that the Account started using the current plan.
  * seatsAllowed `string`
  * seatsInUse `string`
  * status21CFRPart11 `string`
  * suspensionDate `string`
  * suspensionStatus `string`

### Authentication
* Authentication `object`: Authentication and login
  * apiPassword `string`: Contains a token that can be used for authentication in API calls instead of using the user name and password. Only returned if the `api_password=true` query string is added to the URL.
  * loginAccounts `array`: The list of accounts that authenticating user is a member of.
    * items [loginAccount](#loginaccount)

### BillingPlans
* BillingPlans `object`: Billing plans
  * billingAddress [accountAddress](#accountaddress)
  * billingAddressIsCreditCardAddress `string`: When set to **true**, the credit card address information is the same as that returned as the billing address. If false, then the billing address is considered a billing contact address, and the credit card address can be different.
  * billingPlan [accountBillingPlan](#accountbillingplan)
  * creditCardInformation [creditCardInformation](#creditcardinformation)
  * paymentProcessorInformation [paymentProcessorInformation](#paymentprocessorinformation)
  * referralInformation [referralInformation](#referralinformation)
  * successorPlans `array`
    * items [billingPlan](#billingplan)

### BulkEnvelopes
* BulkEnvelopes `object`: Bulk envelopes
  * bulkEnvelopeStatuses `array`: Reserved: TBD
    * items [bulkEnvelopeStatus](#bulkenvelopestatus)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### ChunkedUploads
* ChunkedUploads `object`: Chunked Uploads resource 
  * checksum `string`
  * chunkedUploadId `string`
  * chunkedUploadParts `array`
    * items [chunkedUploadPart](#chunkeduploadpart)
  * chunkedUploadUri `string`
  * committed `string`
  * expirationDateTime `string`
  * maxChunkedUploadParts `string`
  * maxTotalSize `string`
  * totalSize `string`

### CloudStorage
* CloudStorage `object`: Cloud storage
  * endPosition `string`: The last position in the result set. 
  * errorDetails [externalDocServiceErrorDetails](#externaldocserviceerrordetails)
  * id `string`
  * items `array`
    * items [externalFile](#externalfile)
  * name `string`
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### CloudStorageProviders
* CloudStorageProviders `object`: Cloud storage providers
  * storageProviders `array`: An Array containing the storage providers associated with the user.
    * items [cloudStorageProvider](#cloudstorageprovider)

### ConnectConfigurations
* ConnectConfigurations `object`: Connect configurations
  * allUsers `string`: When set to **true**, the tracked envelope and recipient events for all users, including users that are added a later time, are sent through Connect.
  * allowEnvelopePublish `string`: When set to **true**, data is sent to the urlToPublishTo web address. This option can be set to false to stop sending data while maintaining the Connect configuration information.
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * connectId `string`:  Read only: the DocuSign generated ID for the Connect configuration.  
  * enableLog `string`: This turns Connect logging on or off. When set to **true**, logging is turned on.
  * envelopeEvents `string`: A comma separated list of Envelope related events that are tracked through Connect. The possible event values are: Sent, Delivered, Completed, Declined, and Voided.
  * includeCertSoapHeader `string`
  * includeCertificateOfCompletion `string`: When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes. 
  * includeDocumentFields `string`: When set to **true**, the Document Fields associated with the envelope's documents are included in the notification messages. Document Fields are optional custom name-value pairs added to documents using the API. 
  * includeDocuments `string`: When set to **true**, Connect will send the PDF document along with the update XML.
  * includeEnvelopeVoidReason `string`: When set to **true**, Connect will include the voidedReason for voided envelopes.
  * includeSenderAccountasCustomField `string`: When set to **true**, Connect will include the sender account as Custom Field in the data.
  * includeTimeZoneInformation `string`: When set to **true**, Connect will include the envelope time zone information.
  * name `string`: The name of the Connect configuration. The name helps identify the configuration in the list.
  * recipientEvents `string`: A comma separated list of *Recipient* related events that will trigger a notification to your webhook Connect listener. The possible event values are: Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
  * requiresAcknowledgement `string`: #### When set to **true**, and SIM mode is activated:
  * signMessageWithX509Certificate `string`: When set to **true**, Mutual TLS will be enabled for notifications. Mutual TLS must be initiated by the listener (the customer's web server) during the TLS handshake protocol. 
  * soapNamespace `string`: The namespace of the SOAP interface.
  * urlToPublishTo `string`: The endpoint to which webhook notification messages are sent via an HTTPS POST request. The url must start with https. The customer's web server must use an SSL/TLS certificate whose CA is in the Microsoft list of trusted CAs. Self-signed certificates are not ok. Free certificates from Let's Encrypt can be used.
  * useSoapInterface `string`: When set to **true**, indicates that the `urlToPublishTo` property contains a SOAP endpoint.
  * userIds `string`: A comma separated list of userIds. This sets the users associated with the tracked envelope and recipient events. When a tracked event occurs for a set user, the a notification message is sent to your Connect listener. 

### ConnectEvents
* ConnectEvents `object`: Connect event logging
  * failures `array`: An array of containing failure information from the Connect failure log.
    * items [connectLog](#connectlog)
  * logs `array`: A complex type containing Connect log information. It is divided into two sections, one for regular logs and one for Connect failures. 
    * items [connectLog](#connectlog)
  * totalRecords `string`: Record count.
  * type `string`: Type of the user. Valid values: type_owner, type_participant.

### Contacts
* Contacts `object`
  * contactId `string`: The unique identifier of a person in the contacts address book.
  * contactPhoneNumbers `array`
    * items [contactPhoneNumber](#contactphonenumber)
  * contactUri `string`
  * emails `array`
    * items `string`
  * errorDetails [errorDetails](#errordetails)
  * name `string`
  * organization `string`
  * shared `string`: When set to **true**, this custom tab is shared.
  * signingGroup `string`
  * signingGroupName `string`: The display name for the signing group. 

### CustomTabs
* CustomTabs `object`: Custom tabs
  * anchor `string`: An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * createdByDisplayName `string`: The user name of the DocuSign user who created this object.
  * createdByUserId `string`: The userId of the DocuSign user who created this object.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * editable `string`: When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `string`: Height of the tab in pixels.
  * includedInEmail `string`: When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
  * initialValue `string`: The original value of the tab.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * items `array`: If the tab is a list, this represents the values that are possible for the tab.
    * items `string`
  * lastModified `string`: The UTC DateTime this object was last modified. This is in ISO8601 format.
  * lastModifiedByDisplayName `string`: The User Name of the DocuSign user who last modified this object.
  * lastModifiedByUserId `string`: The userId of the DocuSign user who last modified this object.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maximumLength `string`: The maximum number of entry characters supported by the custom tab.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * paymentItemCode `string`
  * paymentItemDescription `string`
  * paymentItemName `string`
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * scaleValue `string`
  * selected `string`: When set to **true**, the radio button is selected.
  * shared `string`: When set to **true**, this custom tab is shared.
  * stampType `string`
  * stampTypeMetadata [propertyMetadata](#propertymetadata)
  * tabLabel `string`: The label string associated with the tab.
  * type `string`: The type of this tab. Values are:
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * width `string`: Width of the tab in pixels.

### DocumentResponsiveHtmlPreview
* DocumentResponsiveHtmlPreview `object`
  * htmlDefinitions `array`
    * items `string`

### ENoteConfigurations
* ENoteConfigurations `object`
  * connectConfigured `string`
  * eNoteConfigured `string`
  * organization `string`
  * password `string`
  * userName `string`

### EnvelopeAttachments
* EnvelopeAttachments `object`
  * accessControl `string`
  * attachmentId `string`
  * attachmentType `string`
  * errorDetails [errorDetails](#errordetails)
  * label `string`
  * name `string`

### EnvelopeBulkRecipients
* EnvelopeBulkRecipients `object`: Envelope bulk recipients
  * bulkRecipients `array`: A complex type containing information about the bulk recipients in the response.
    * items [bulkRecipient](#bulkrecipient)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### EnvelopeConsumerDisclosures
* EnvelopeConsumerDisclosures `object`: Envelope consumer disclosures
  * accountEsignId `string`: A GUID identifying the account associated with the consumer disclosure
  * allowCDWithdraw `string`: Indicates whether the customer can withdraw their acceptance of the consumer disclosure.
  * allowCDWithdrawMetadata [settingsMetadata](#settingsmetadata)
  * changeEmail `string`
  * changeEmailOther `string`
  * companyName `string`: The name of the company associated with the consumer disclosure.
  * companyPhone `string`: The phone number of the company associated with the consumer disclosure.
  * copyCostPerPage `string`
  * copyFeeCollectionMethod `string`: Specifies the fee collection method for cases in which the customer requires paper copies of the document.
  * copyRequestEmail `string`
  * custom `string`
  * enableEsign `string`
  * esignAgreement `string`: The Electronic Record and Signature Disclosure text. The disclosure text includes the html formatting.
  * esignText `string`
  * languageCode `string`
  * mustAgreeToEsign `string`
  * pdfId `string`: **Deprecated**
  * useBrand `string`
  * useConsumerDisclosureWithinAccount `string`
  * useConsumerDisclosureWithinAccountMetadata [settingsMetadata](#settingsmetadata)
  * withdrawAddressLine1 `string`: Contains the first address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawAddressLine2 `string`: Contains the second address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawByEmail `string`: Indicates whether the customer can withdraw consent by email.
  * withdrawByMail `string`: Indicates whether the customer can withdraw consent by postal mail.
  * withdrawByPhone `string`: Indicates whether the customer can withdraw consent by phone.
  * withdrawCity `string`: Contains the city of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawConsequences `string`: Indicates the consequences of withdrawing consent.
  * withdrawEmail `string`: Contains the email address to which a customer can send a consent withdrawal notification.
  * withdrawOther `string`: Indicates other information need to withdraw consent.
  * withdrawPhone `string`: Contains the phone number which a customer can call to register consent withdrawal notification.
  * withdrawPostalCode `string`: Contains the postal code of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawState `string`: Contains the state of the postal address to which a customer can send a consent withdrawal notification.

### EnvelopeCustomFields
* EnvelopeCustomFields `object`: Envelope custom fields
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### EnvelopeDocumentFields
* EnvelopeDocumentFields `object`: Envelope document fields
  * documentFields `array`: The array of name/value custom data strings to be added to a document. Custom document field information is returned in the status, but otherwise is not used by DocuSign. The array contains the elements: 
    * items [nameValue](#namevalue)

### EnvelopeDocumentHtmlDefinitions
* EnvelopeDocumentHtmlDefinitions `object`
  * htmlDefinitions `array`
    * items [documentHtmlDefinitionOriginal](#documenthtmldefinitionoriginal)

### EnvelopeDocumentTabs
* EnvelopeDocumentTabs `object`: Envelope Document Tabs resource 
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### EnvelopeDocumentVisibility
* EnvelopeDocumentVisibility `object`
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)

### EnvelopeDocuments
* EnvelopeDocuments `object`: Envelope documents
  * envelopeDocuments `array`
    * items [envelopeDocument](#envelopedocument)
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.

### EnvelopeEmailSettings
* EnvelopeEmailSettings `object`: Envelope email settings
  * bccEmailAddresses `array`: A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
    * items [bccEmailAddress](#bccemailaddress)
  * replyEmailAddressOverride `string`
  * replyEmailNameOverride `string`

### EnvelopeFormData
* EnvelopeFormData `object`
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * formData `array`
    * items [nameValue](#namevalue)
  * recipientFormData `array`
    * items [recipientFormData](#recipientformdata)
  * sentDateTime `string`: The date and time the envelope was sent.
  * status `string`: Indicates the envelope status. Valid values are:

### EnvelopeHtmlDefinitions
* EnvelopeHtmlDefinitions `object`
  * htmlDefinitions `array`
    * items [documentHtmlDefinitionOriginal](#documenthtmldefinitionoriginal)

### EnvelopeLocks
* EnvelopeLocks `object`: Envelope locks
  * errorDetails [errorDetails](#errordetails)
  * lockDurationInSeconds `string`: Sets the time, in seconds, until the lock expires when there is no activity on the envelope.
  * lockToken `string`: A unique identifier provided to the owner of the envelope lock.   Used to prove ownership of the lock.
  * lockType `string`: The type of envelope lock.  Currently "edit" is the only supported type.
  * lockedByApp `string`: Specifies the friendly name of  the application that is locking the envelope.
  * lockedByUser [userInfo](#userinfo)
  * lockedUntilDateTime `string`: The datetime until the envelope lock expires.
  * useScratchPad `string`: Reserved for future use.

### EnvelopeRecipientTabs
* EnvelopeRecipientTabs `object`: All of the tabs associated with a recipient. Each property is a list of a type of tab.
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### EnvelopeRecipients
* EnvelopeRecipients `object`: Envelope recipients
  * agents `array`: A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
    * items [agent](#agent)
  * carbonCopies `array`: A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
    * items [carbonCopy](#carboncopy)
  * certifiedDeliveries `array`: A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
    * items [certifiedDelivery](#certifieddelivery)
  * currentRoutingOrder `string`
  * editors `array`: A complex type defining the management and access rights of a recipient assigned assigned as an editor on the document.
    * items [editor](#editor)
  * errorDetails [errorDetails](#errordetails)
  * inPersonSigners `array`: Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
    * items [inPersonSigner](#inpersonsigner)
  * intermediaries `array`: Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
    * items [intermediary](#intermediary)
  * recipientCount `string`: The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:
  * seals `array`
    * items [sealSign](#sealsign)
  * signers `array`: A complex type containing information about the Signer recipient.
    * items [signer](#signer)

### EnvelopeTemplates
* EnvelopeTemplates `object`: Envelope templates
  * templates `array`
    * items [templateSummary](#templatesummary)

### EnvelopeViews
* EnvelopeViews `object`: Embedding Envelope views
  * url `string`: The view URL to be navigated to.

### Envelopes
* Envelopes `object`: Envelope creation, management
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: The unique identifier of a brand.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`: This is the same as the email body. If specified it is included in email body for all envelope recipients.
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * purgeState `string`: Shows the current purge state for the envelope. The possible values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Indicates the envelope status. Valid values are: 
  * statusChangedDateTime `string`: The data and time the status changed.
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### Folders
* Folders `object`: Folder management
  * folders `array`: A collection of folder objects returned in a response.
    * items [folder](#folder)

### GroupBrands
* GroupBrands `object`: Brand management for groups
  * brands `array`: The list of brands.
    * items [brand](#brand)
  * recipientBrandIdDefault `string`: The brand seen by envelope recipients when a brand is not explicitly set.
  * senderBrandIdDefault `string`: The brand seen by envelope senders when a brand is not explicitly set.

### GroupUsers
* GroupUsers `object`: Groups' users
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * users `array`
    * items [userInfo](#userinfo)

### Groups
* Groups `object`: Group information
  * endPosition `string`: The last position in the result set. 
  * groups `array`: A collection group objects containing information about the groups returned.
    * items [group](#group)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### IdentityVerifications
* IdentityVerifications `object`
  * identityVerification `array`
    * items [accountIdentityVerificationWorkflow](#accountidentityverificationworkflow)

### Invoices
* Invoices `object`: Invoices
  * amount `string`: Reserved: TBD
  * balance `string`: Reserved: TBD
  * dueDate `string`: Reserved: TBD
  * invoiceId `string`: Reserved: TBD
  * invoiceItems `array`: Reserved: TBD
    * items [billingInvoiceItem](#billinginvoiceitem)
  * invoiceNumber `string`: Reserved: TBD
  * invoiceUri `string`: Contains a URI for an endpoint that you can use to retrieve invoice information.
  * nonTaxableAmount `string`
  * pdfAvailable `string`
  * taxableAmount `string`

### NotaryJournals
* NotaryJournals `object`
  * createdDate `string`
  * documentName `string`
  * jurisdiction [jurisdiction](#jurisdiction)
  * notaryJournalId `string`
  * notaryJournalMetaData [notaryJournalMetaData](#notaryjournalmetadata)
  * signerName `string`: The in-person signer's full legal name.

### PaymentGatewayAccounts
* PaymentGatewayAccounts `object`: Information about a connected payment gateway account.
  * displayName `string`: A user-defined name for a connected gateway account.
  * paymentGateway `string`: Payment gateway used by the connected gateway account.
  * paymentGatewayAccountId `string`: A GUID that identifies the payment gateway account. For a human-readable version use `displayName`.
  * paymentGatewayDisplayName `string`: Display name of the payment gateway used by the connected gateway account.

### Payments
* Payments `object`: Payments
  * amount `string`: Reserved: TBD
  * description `string`: A sender-defined description of the line item.
  * paymentDate `string`
  * paymentId `string`
  * paymentNumber `string`: When set to **true**, a PDF version of the invoice is available. 

### PowerFormData
* PowerFormData `object`
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * recipients `array`: An array of powerform recipients.
    * items [powerFormFormDataRecipient](#powerformformdatarecipient)

### PowerForms
* PowerForms `object`
  * createdBy `string`
  * createdDateTime `string`: Indicates the date and time the item was created.
  * emailBody `string`: Specifies the email body of the message sent to the recipient. 
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * envelopes `array`
    * items [Envelopes](#envelopes)
  * errorDetails [errorDetails](#errordetails)
  * instructions `string`
  * isActive `string`
  * lastUsed `string`
  * limitUseInterval `string`
  * limitUseIntervalEnabled `string`
  * limitUseIntervalUnits `string`
  * maxUseEnabled `string`
  * name `string`
  * powerFormId `string`
  * powerFormUrl `string`
  * recipients `array`: An array of powerform recipients.
    * items [powerFormRecipient](#powerformrecipient)
  * senderName `string`
  * senderUserId `string`
  * signingMode `string`
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * templateName `string`
  * timesUsed `string`
  * uri `string`
  * usesRemaining `string`

### RequestLogs
* RequestLogs `object`: Request logs
  * apiRequestLogMaxEntries `string`: Specifies the maximum number of API requests to log.
  * apiRequestLogRemainingEntries `string`: Indicates the remaining number of API requests that can be logged.
  * apiRequestLogging `string`:  When set to **true**, enables API request logging for the user. 

### Resources
* Resources `object`: API resource information
  * resources `array`
    * items [nameValue](#namevalue)

### ResponsiveHtmlPreview
* ResponsiveHtmlPreview `object`
  * htmlDefinitions `array`
    * items `string`

### Services
* Services `object`: API service information
  * buildBranch `string`: Reserved: TBD
  * buildBranchDeployedDateTime `string`: Reserved: TBD
  * buildSHA `string`: Reserved: TBD
  * buildVersion `string`: Reserved: TBD
  * linkedSites `array`
    * items `string`
  * serviceVersions `array`
    * items [serviceVersion](#serviceversion)

### SigningGroupUsers
* SigningGroupUsers `object`: Signing groups' users
  * users `array`
    * items [signingGroupUser](#signinggroupuser)

### SigningGroups
* SigningGroups `object`: Signing groups
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdBy `string`
  * errorDetails [errorDetails](#errordetails)
  * groupEmail `string`
  * groupName `string`: The name of the group. The search_text provided in the call automatically performs a wild card search on group_name.
  * groupType `string`: The group type.
  * modified `string`
  * modifiedBy `string`
  * signingGroupId `string`: When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
  * users `array`
    * items [signingGroupUser](#signinggroupuser)

### TemplateBulkRecipients
* TemplateBulkRecipients `object`: Template bulk recipients
  * bulkRecipients `array`: A complex type containing information about the bulk recipients in the response.
    * items [bulkRecipient](#bulkrecipient)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### TemplateCustomFields
* TemplateCustomFields `object`: Template custom fields
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### TemplateDocumentFields
* TemplateDocumentFields `object`: Template document fields
  * documentFields `array`: The array of name/value custom data strings to be added to a document. Custom document field information is returned in the status, but otherwise is not used by DocuSign. The array contains the elements: 
    * items [nameValue](#namevalue)

### TemplateDocumentHtmlDefinitions
* TemplateDocumentHtmlDefinitions `object`
  * htmlDefinitions `array`
    * items [documentHtmlDefinitionOriginal](#documenthtmldefinitionoriginal)

### TemplateDocumentResponsiveHtmlPreview
* TemplateDocumentResponsiveHtmlPreview `object`
  * htmlDefinitions `array`
    * items `string`

### TemplateDocumentTabs
* TemplateDocumentTabs `object`
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### TemplateDocumentVisibility
* TemplateDocumentVisibility `object`
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)

### TemplateDocuments
* TemplateDocuments `object`: Template documents
  * templateDocuments `array`
    * items [envelopeDocument](#envelopedocument)
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 

### TemplateHtmlDefinitions
* TemplateHtmlDefinitions `object`
  * htmlDefinitions `array`
    * items [documentHtmlDefinitionOriginal](#documenthtmldefinitionoriginal)

### TemplateLocks
* TemplateLocks `object`: Template locks
  * errorDetails [errorDetails](#errordetails)
  * lockDurationInSeconds `string`: Sets the time, in seconds, until the lock expires when there is no activity on the envelope.
  * lockToken `string`: A unique identifier provided to the owner of the envelope lock.   Used to prove ownership of the lock.
  * lockType `string`: The type of envelope lock.  Currently "edit" is the only supported type.
  * lockedByApp `string`: Specifies the friendly name of  the application that is locking the envelope.
  * lockedByUser [userInfo](#userinfo)
  * lockedUntilDateTime `string`: The datetime until the envelope lock expires.
  * useScratchPad `string`: Reserved for future use.

### TemplateRecipientTabs
* TemplateRecipientTabs `object`: Template tabs
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### TemplateRecipients
* TemplateRecipients `object`: Template recipients
  * agents `array`: A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
    * items [agent](#agent)
  * carbonCopies `array`: A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
    * items [carbonCopy](#carboncopy)
  * certifiedDeliveries `array`: A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
    * items [certifiedDelivery](#certifieddelivery)
  * currentRoutingOrder `string`
  * editors `array`: A complex type defining the management and access rights of a recipient assigned assigned as an editor on the document.
    * items [editor](#editor)
  * errorDetails [errorDetails](#errordetails)
  * inPersonSigners `array`: Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
    * items [inPersonSigner](#inpersonsigner)
  * intermediaries `array`: Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
    * items [intermediary](#intermediary)
  * recipientCount `string`: The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:
  * seals `array`: Specifies one or more electronic seals to apply on documents. For more information on Electronic Seals , see https://support.docusign.com/en/guides/ndse-user-guide-apply-electronic-seals
    * items [sealSign](#sealsign)
  * signers `array`: A complex type containing information about the Signer recipient.
    * items [signer](#signer)

### TemplateResponsiveHtmlPreview
* TemplateResponsiveHtmlPreview `object`
  * htmlDefinitions `array`
    * items `string`

### TemplateViews
* TemplateViews `object`: Embedding template views
  * url `string`: The view URL to be navigated to.

### Templates
* Templates `object`: Template management
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: The unique identifier of a brand.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [document](#document)
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeTemplateDefinition [envelopeTemplateDefinition](#envelopetemplatedefinition)
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * purgeState `string`: Shows the current purge state for the envelope. The possible values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Indicates the envelope status. Valid values are:
  * statusChangedDateTime `string`: The data and time the status changed.
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### UserCustomSettings
* UserCustomSettings `object`: Users' custom settings
  * customSettings `array`: The name/value pair information for the user custom setting.
    * items [nameValue](#namevalue)

### UserProfiles
* UserProfiles `object`: Users' profiles
  * address [addressInformation_v2](#addressinformation_v2)
  * authenticationMethods `array`: These properties cannot be modified in the PUT. 
    * items [authenticationMethod](#authenticationmethod)
  * companyName `string`: The name of the user's Company.
  * displayOrganizationInfo `string`:  When set to **true**, the user's company and title information are shown on the ID card. 
  * displayPersonalInfo `string`: When set to **true**, the user's Address and Phone number are shown on the ID card.
  * displayProfile `string`: When set to **true**, the user's ID card can be viewed from signed documents and envelope history.
  * displayUsageHistory `string`: When set to **true**, the user's usage information is shown on the ID card.
  * profileImageUri `string`
  * title `string`: The user's job title.
  * usageHistory [usageHistory](#usagehistory)
  * userDetails [Users](#users)
  * userProfileLastModifiedDate `string`: The date-time when the user's profile was last modified.

### UserSignatures
* UserSignatures `object`: Users' signatures
  * adoptedDateTime `string`: The date and time the user adopted their signature.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * dateStampProperties [dateStampProperties](#datestampproperties)
  * errorDetails [errorDetails](#errordetails)
  * externalID `string`
  * imageType `string`: One of **signature_image** or **initials_image**.
  * initials150ImageId `string`
  * initialsImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the initials image.
  * isDefault `string`
  * phoneticName `string`
  * signature150ImageId `string`
  * signatureFont `string`: The font type for the signature, if the signature is not drawn. The supported font types are:
  * signatureId `string`: Specifies the signature ID associated with the signature name. You can use the signature ID in the URI in place of the signature name, and the value stored in the `signatureName` property in the body is used. This allows the use of special characters (such as "&", "<", ">") in a the signature name. Note that with each update to signatures, the returned signature ID might change, so the caller will need to trigger off the signature name to get the new signature ID.
  * signatureImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the signature image.
  * signatureInitials `string`:  The initials associated with the signature.
  * signatureName `string`: Specifies the user signature name.
  * signatureType `string`
  * stampFormat `string`
  * stampImageUri `string`
  * stampSizeMM `string`
  * stampType `string`

### UserSocialAccountLogins
* UserSocialAccountLogins `object`: Users' social account logins
  * email `string`: The users email address.
  * errorDetails [errorDetails](#errordetails)
  * provider `string`: The social account provider (Facebook, Yahoo, etc.)
  * socialId `string`: The ID provided by the Socal Account.
  * userName `string`: The full user name for the account.

### Users
* Users `object`: User management
  * accountManagementGranular [userAccountManagementGranularInformation](#useraccountmanagementgranularinformation)
  * activationAccessCode `string`: The activation code the new user must enter when activating their account.
  * countryCode `string`
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customSettings `array`: The name/value pair information for the user custom setting.
    * items [nameValue](#namevalue)
  * email `string`: The user's email address.
  * enableConnectForUser `string`: Specifies whether the user is enabled for updates from DocuSign Connect. Valid values: true or false.
  * errorDetails [errorDetails](#errordetails)
  * firstName `string`: The user's first name. 
  * forgottenPasswordInfo [forgottenPasswordInformation](#forgottenpasswordinformation)
  * groupList `array`: A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId. 
    * items [group](#group)
  * homeAddress [addressInformation_v2](#addressinformation_v2)
  * initialsImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the initials image.
  * isAdmin `string`: Determines if the feature set is actively set as part of the plan.
  * jobTitle `string`
  * lastLogin `string`: The date-time when the user last logged on to the system.
  * lastName `string`: The user's last name. 
  * loginStatus `string`: Shows the current status of the user's password. Possible values are: 
  * middleName `string`: The user's middle name. 
  * password `string`
  * passwordExpiration `string`: If password expiration is enabled, the date-time when the user's password expires.
  * permissionProfileId `string`
  * permissionProfileName `string`
  * profileImageUri `string`
  * sendActivationEmail `string`
  * sendActivationOnInvalidLogin `string`: When set to **true**, specifies that an additional activation email is sent to the user if they fail a log on before activating their account. 
  * signatureImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the signature image.
  * subscribe `string`
  * suffixName `string`: The suffix for the user's name, such as Jr, IV, PhD, etc.
  * title `string`: Salutation for the user, such as Ms, Dr, Capt., etc.
  * uri `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userName `string`: The user's full name.
  * userProfileLastModifiedDate `string`: The date-time when the user's profile was last modified.
  * userSettings `array`: The collection of settings that 
    * items [nameValue](#namevalue)
  * userStatus `string`: Status of the user's account. One of:
  * userType `string`
  * workAddress [addressInformation_v2](#addressinformation_v2)

### WorkspaceItems
* WorkspaceItems `object`
  * callerAuthorization [workspaceUserAuthorization](#workspaceuserauthorization)
  * contentType `string`
  * created `string`: The UTC DateTime when the workspace item was created.
  * createdById `string`
  * createdByInformation [workspaceUser](#workspaceuser)
  * extension `string`
  * fileSize `string`
  * fileUri `string`
  * id `string`
  * isPublic `string`:  If true, this supersedes need for bit mask permission with workspaceUserAuthorization
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedById `string`: Utc date and time the comment was last updated (can only be done by creator)
  * lastModifiedByInformation [workspaceUser](#workspaceuser)
  * name `string`: A simple string description of the item, such as a file name or a folder name.
  * pageCount `string`
  * parentFolderId `string`: The ID of the parent folder. This is the GUID of the parent folder, or the special value 'root' for the root folder.
  * parentFolderUri `string`
  * type `string`: The type of the workspace item. Valid values are file, folder.
  * uri `string`

### Workspaces
* Workspaces `object`
  * billableAccountId `string`
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdByInformation [workspaceUser](#workspaceuser)
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedByInformation [workspaceUser](#workspaceuser)
  * status `string`: Item status. <!-- TODO -->
  * workspaceBaseUrl `string`: The relative URL that may be used to access the workspace.
  * workspaceDescription `string`: Text describing the purpose of the workspace.
  * workspaceId `string`: The id of the workspace, always populated.
  * workspaceName `string`: The name of the workspace.
  * workspaceUri `string`: The relative URI that may be used to access the workspace.

### accountAddress
* accountAddress `object`: Contains information about an account address.
  * address1 `string`: First Line of the address.
  * address2 `string`: Second Line of the address.
  * city `string`: The city value of the address.
  * country `string`: Specifies the country associated with the address.
  * email `string`
  * fax `string`
  * firstName `string`: The user's first name. 
  * lastName `string`
  * phone `string`
  * postalCode `string`
  * state `string`: The state or province associated with the address.
  * supportedCountries `array`: Contains an array of countries supported by the billing plan.
    * items [country](#country)

### accountBillingPlan
* accountBillingPlan `object`: Contains information about an account billing plan.
  * addOns `array`: Reserved:
    * items [addOn](#addon)
  * canCancelRenewal `string`: Reserved: TBD
  * canUpgrade `string`: When set to **true**, specifies that you can upgrade the account through the API.
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * enableSupport `string`: When set to **true**, then customer support is provided as part of the account plan.
  * includedSeats `string`: The number of seats (users) included.
  * incrementalSeats `string`: Reserved: TBD
  * isDowngrade `string`
  * otherDiscountPercent `string`:  Any other percentage discount for the plan. 
  * paymentCycle `string`
  * paymentMethod `string`:  The payment method used with the plan. The possible values are: CreditCard, PurchaseOrder, Premium, or Freemium. 
  * perSeatPrice `string`
  * planClassification `string`: Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
  * planFeatureSets `array`: A complex type that sets the feature sets for the account. It contains the following information (all string content):
    * items [featureSet](#featureset)
  * planId `string`: The DocuSign Plan ID for the account.
  * planName `string`: The name of the Billing Plan.
  * renewalStatus `string`: The renewal status for the account. The acceptable values are:
  * seatDiscounts `array`:  A complex type that contains any seat discount information.
    * items [seatDiscount](#seatdiscount)
  * supportIncidentFee `string`: The support incident fee charged for each support incident.
  * supportPlanFee `string`: The support plan fee charged for this plan.

### accountBillingPlanResponse
* accountBillingPlanResponse `object`
  * billingAddress [accountAddress](#accountaddress)
  * billingAddressIsCreditCardAddress `string`: When set to **true**, the credit card address information is the same as that returned as the billing address. If false, then the billing address is considered a billing contact address, and the credit card address can be different.
  * billingPlan [accountBillingPlan](#accountbillingplan)
  * creditCardInformation [creditCardInformation](#creditcardinformation)
  * paymentProcessorInformation [paymentProcessorInformation](#paymentprocessorinformation)
  * referralInformation [referralInformation](#referralinformation)
  * successorPlans `array`
    * items [billingPlan](#billingplan)

### accountIdentityVerificationResponse
* accountIdentityVerificationResponse `object`
  * identityVerification `array`
    * items [accountIdentityVerificationWorkflow](#accountidentityverificationworkflow)

### accountIdentityVerificationStep
* accountIdentityVerificationStep `object`
  * name `string`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.

### accountIdentityVerificationWorkflow
* accountIdentityVerificationWorkflow `object`
  * defaultName `string`
  * steps `array`
    * items [accountIdentityVerificationStep](#accountidentityverificationstep)
  * workflowId `string`

### accountInformation
* accountInformation `object`
  * accountIdGuid `string`: The GUID associated with the account ID.
  * accountName `string`: The name of the account that the workspace user belongs to.
  * allowTransactionRooms `string`: When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
  * billingPeriodDaysRemaining `string`: Reserved: TBD
  * billingPeriodEndDate `string`: Reserved: TBD
  * billingPeriodEnvelopesAllowed `string`: Reserved: TBD
  * billingPeriodEnvelopesSent `string`: Reserved: TBD
  * billingPeriodStartDate `string`: Reserved: TBD
  * billingProfile `string`: Reserved: TBD
  * canCancelRenewal `string`: Reserved: TBD
  * canUpgrade `string`: When set to **true**, specifies that you can upgrade the account through the API.
  * connectPermission `string`
  * createdDate `string`
  * currencyCode `string`: Specifies the ISO currency code of the purchase. This is based on the ISO 4217 currency code information.
  * currentPlanId `string`: Identifies the plan that was used create this account.
  * distributorCode `string`: The code that identifies the billing plan groups and plans for the new account.
  * docuSignLandingUrl `string`
  * envelopeSendingBlocked `string`
  * envelopeUnitPrice `string`
  * externalAccountId `string`
  * forgottenPasswordQuestionsCount `string`:  A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
  * isDowngrade `string`
  * paymentMethod `string`
  * planClassification `string`: Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
  * planEndDate `string`: The date that the current plan will end.
  * planName `string`
  * planStartDate `string`: The date that the Account started using the current plan.
  * seatsAllowed `string`
  * seatsInUse `string`
  * status21CFRPart11 `string`
  * suspensionDate `string`
  * suspensionStatus `string`

### accountMinimumPasswordLength
* accountMinimumPasswordLength `object`
  * maximumLength `string`
  * minimumLength `string`

### accountPasswordExpirePasswordDays
* accountPasswordExpirePasswordDays `object`
  * maximumDays `string`
  * minimumDays `string`

### accountPasswordLockoutDurationMinutes
* accountPasswordLockoutDurationMinutes `object`
  * maximumMinutes `string`
  * minimumMinutes `string`

### accountPasswordLockoutDurationType
* accountPasswordLockoutDurationType `object`
  * options `array`
    * items `string`

### accountPasswordMinimumPasswordAgeDays
* accountPasswordMinimumPasswordAgeDays `object`
  * maximumAge `string`
  * minimumAge `string`

### accountPasswordQuestionsRequired
* accountPasswordQuestionsRequired `object`
  * maximumQuestions `string`
  * minimumQuestions `string`

### accountPasswordRules
* accountPasswordRules `object`
  * expirePassword `string`
  * expirePasswordDays `string`
  * expirePasswordDaysMetadata [accountPasswordExpirePasswordDays](#accountpasswordexpirepassworddays)
  * lockoutDurationMinutes `string`
  * lockoutDurationMinutesMetadata [accountPasswordLockoutDurationMinutes](#accountpasswordlockoutdurationminutes)
  * lockoutDurationType `string`
  * lockoutDurationTypeMetadata [accountPasswordLockoutDurationType](#accountpasswordlockoutdurationtype)
  * minimumPasswordAgeDays `string`
  * minimumPasswordAgeDaysMetadata [accountPasswordMinimumPasswordAgeDays](#accountpasswordminimumpasswordagedays)
  * minimumPasswordLength `string`
  * minimumPasswordLengthMetadata [accountMinimumPasswordLength](#accountminimumpasswordlength)
  * passwordIncludeDigit `string`
  * passwordIncludeDigitOrSpecialCharacter `string`
  * passwordIncludeLowerCase `string`
  * passwordIncludeSpecialCharacter `string`
  * passwordIncludeUpperCase `string`
  * passwordStrengthType `string`
  * passwordStrengthTypeMetadata [accountPasswordStrengthType](#accountpasswordstrengthtype)
  * questionsRequired `string`
  * questionsRequiredMetadata [accountPasswordQuestionsRequired](#accountpasswordquestionsrequired)

### accountPasswordStrengthType
* accountPasswordStrengthType `object`
  * options `array`
    * items [accountPasswordStrengthTypeOption](#accountpasswordstrengthtypeoption)

### accountPasswordStrengthTypeOption
* accountPasswordStrengthTypeOption `object`
  * minimumLength `string`
  * name `string`
  * passwordIncludeDigit `string`
  * passwordIncludeDigitOrSpecialCharacter `string`
  * passwordIncludeLowerCase `string`
  * passwordIncludeSpecialCharacter `string`
  * passwordIncludeUpperCase `string`

### accountRoleSettings
* accountRoleSettings `object`
  * allowAccountManagement `string`
  * allowAccountManagementMetadata [settingsMetadata](#settingsmetadata)
  * allowApiAccess `string`
  * allowApiAccessMetadata [settingsMetadata](#settingsmetadata)
  * allowApiAccessToAccount `string`
  * allowApiAccessToAccountMetadata [settingsMetadata](#settingsmetadata)
  * allowApiSendingOnBehalfOfOthers `string`
  * allowApiSendingOnBehalfOfOthersMetadata [settingsMetadata](#settingsmetadata)
  * allowApiSequentialSigning `string`
  * allowApiSequentialSigningMetadata [settingsMetadata](#settingsmetadata)
  * allowBulkSending `string`
  * allowBulkSendingMetadata [settingsMetadata](#settingsmetadata)
  * allowDocuSignDesktopClient `string`
  * allowDocuSignDesktopClientMetadata [settingsMetadata](#settingsmetadata)
  * allowESealRecipients `string`
  * allowESealRecipientsMetadata [settingsMetadata](#settingsmetadata)
  * allowEnvelopeSending `string`
  * allowEnvelopeSendingMetadata [settingsMetadata](#settingsmetadata)
  * allowPowerFormsAdminToAccessAllPowerFormEnvelopes `string`
  * allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata [settingsMetadata](#settingsmetadata)
  * allowSendersToSetRecipientEmailLanguage `string`
  * allowSendersToSetRecipientEmailLanguageMetadata [settingsMetadata](#settingsmetadata)
  * allowSignerAttachments `string`
  * allowSignerAttachmentsMetadata [settingsMetadata](#settingsmetadata)
  * allowSupplementalDocuments `string`
  * allowSupplementalDocumentsMetadata [settingsMetadata](#settingsmetadata)
  * allowTaggingInSendAndCorrect `string`
  * allowTaggingInSendAndCorrectMetadata [settingsMetadata](#settingsmetadata)
  * allowVaulting `string`
  * allowVaultingMetadata [settingsMetadata](#settingsmetadata)
  * allowWetSigningOverride `string`
  * allowWetSigningOverrideMetadata [settingsMetadata](#settingsmetadata)
  * allowedAddressBookAccess `string`
  * allowedAddressBookAccessMetadata [settingsMetadata](#settingsmetadata)
  * allowedTemplateAccess `string`
  * allowedTemplateAccessMetadata [settingsMetadata](#settingsmetadata)
  * allowedToBeEnvelopeTransferRecipient `string`
  * allowedToBeEnvelopeTransferRecipientMetadata [settingsMetadata](#settingsmetadata)
  * canCreateWorkspaces `string`
  * canCreateWorkspacesMetadata [settingsMetadata](#settingsmetadata)
  * disableDocumentUpload `string`
  * disableDocumentUploadMetadata [settingsMetadata](#settingsmetadata)
  * disableOtherActions `string`
  * disableOtherActionsMetadata [settingsMetadata](#settingsmetadata)
  * enableApiRequestLogging `string`
  * enableApiRequestLoggingMetadata [settingsMetadata](#settingsmetadata)
  * enableRecipientViewingNotifications `string`
  * enableRecipientViewingNotificationsMetadata [settingsMetadata](#settingsmetadata)
  * enableSequentialSigningInterface `string`
  * enableSequentialSigningInterfaceMetadata [settingsMetadata](#settingsmetadata)
  * enableTransactionPointIntegration `string`
  * enableTransactionPointIntegrationMetadata [settingsMetadata](#settingsmetadata)
  * powerFormRole `string`
  * powerFormRoleMetadata [settingsMetadata](#settingsmetadata)
  * receiveCompletedSelfSignedDocumentsAsEmailLinks `string`
  * receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata [settingsMetadata](#settingsmetadata)
  * supplementalDocumentsMustAccept `string`
  * supplementalDocumentsMustAcceptMetadata [settingsMetadata](#settingsmetadata)
  * supplementalDocumentsMustRead `string`
  * supplementalDocumentsMustReadMetadata [settingsMetadata](#settingsmetadata)
  * supplementalDocumentsMustView `string`
  * supplementalDocumentsMustViewMetadata [settingsMetadata](#settingsmetadata)
  * useNewDocuSignExperienceInterface `string`
  * useNewDocuSignExperienceInterfaceMetadata [settingsMetadata](#settingsmetadata)
  * useNewSendingInterface `string`
  * useNewSendingInterfaceMetadata [settingsMetadata](#settingsmetadata)
  * vaultingMode `string`
  * vaultingModeMetadata [settingsMetadata](#settingsmetadata)

### accountSeals
* accountSeals `object`
  * seals `array`
    * items [sealIdentifier](#sealidentifier)

### accountSettingsInformation
* accountSettingsInformation `object`: Contains account settings information.
  * accountSettings `array`: The list of
    * items [nameValue](#namevalue)

### accountSharedAccess
* accountSharedAccess `object`: Contains shared access information.
  * accountId `string`: The account ID associated with the envelope.
  * endPosition `string`: The last position in the result set. 
  * errorDetails [errorDetails](#errordetails)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * sharedAccess `array`: A list of shared access information of envelope and templates for the users specified in the request.
    * items [memberSharedItems](#membershareditems)
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### accountSignatureProvider
* accountSignatureProvider `object`
  * isRequired `string`
  * priority `string`
  * signatureProviderDisplayName `string`
  * signatureProviderId `string`
  * signatureProviderName `string`: The name of an Electronic or Standards Based Signature (digital signature) provider for the signer to use. [The current provider list.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
  * signatureProviderOptionsMetadata `array`
    * items [accountSignatureProviderOption](#accountsignatureprovideroption)
  * signatureProviderRequiredOptions `array`
    * items [signatureProviderRequiredOption](#signatureproviderrequiredoption)

### accountSignatureProviderOption
* accountSignatureProviderOption `object`
  * signatureProviderOptionDisplayName `string`
  * signatureProviderOptionId `string`
  * signatureProviderOptionName `string`

### accountSignatureProviders
* accountSignatureProviders `object`
  * signatureProviders `array`
    * items [accountSignatureProvider](#accountsignatureprovider)

### addOn
* addOn `object`: Contains information about add ons.
  * active `string`: Reserved:
  * addOnId `string`: Reserved:
  * id `string`
  * name `string`: Reserved:

### addressInformation
* addressInformation `object`: Contains address information.
  * city `string`: The city associated with the address.
  * country `string`: Specifies the country associated with the address.
  * fax `string`: A Fax number associated with the address if one is available.
  * phone `string`: A phone number associated with the address.
  * state `string`: The state or province associated with the address.
  * street1 `string`: The first line of the address.
  * street2 `string`: The second line of the address (optional).
  * zip `string`: The zip or postal code associated with the address.

### addressInformationInput
* addressInformationInput `object`: Contains address input information.
  * addressInformation [addressInformation](#addressinformation)
  * displayLevelCode `string`: Specifies the display level for the recipient. 
  * receiveInResponse `string`: When set to **true**, the information needs to be returned in the response.

### addressInformation_v2
* addressInformation_v2 `object`
  * address1 `string`: First Line of the address.
  * address2 `string`: Second Line of the address.
  * city `string`
  * country `string`: Specifies the country associated with the address.
  * fax `string`
  * phone `string`
  * postalCode `string`
  * stateOrProvince `string`: The state or province associated with the address.

### agent
* agent `object`: Contains information about agent recipients.
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: Email id of the recipient. Notification of the document to sign is sent to this email id. 
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * lastName `string`
  * name `string`
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### apiRequestLog
* apiRequestLog `object`: Contains API request log information.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * description `string`: A sender-defined description of the line item.
  * requestLogId `string`
  * status `string`: Item status. <!-- TODO -->

### apiRequestLogsResult
* apiRequestLogsResult `object`: Contains information about mutiple API request logs.
  * apiRequestLogs `array`: Reserved: TBD
    * items [apiRequestLog](#apirequestlog)

### appStoreProduct
* appStoreProduct `object`: Contains information about an APP store product.
  * marketPlace `string`
  * productId `string`: The Product ID from the AppStore.

### appStoreReceipt
* appStoreReceipt `object`: Contains information about an APP store receipt.
  * productId `string`: The Product ID from the AppStore.
  * receiptData `string`: Reserved: TBD

### approve
* approve `object`: A tab that allows the recipient to approve documents
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * buttonText `string`:  Specifies the approval text displayed in the tab. 
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `integer`: Height of the tab in pixels.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page.

### attachment
* attachment `object`: Contains information about an attachment.
  * accessControl `string`
  * attachmentId `string`
  * attachmentType `string`: Specifies the type of the attachment for the recipient.
  * data `string`
  * label `string`
  * name `string`
  * remoteUrl `string`

### authenticationMethod
* authenticationMethod `object`: Contains information about the method used for authentication.
  * authenticationType `string`: Indicates the type of authentication. Valid values are: PhoneAuth, STAN, ISCheck, OFAC, AccessCode, AgeVerify, or SSOAuth. 
  * lastProvider `string`: The last provider that authenticated the user. 
  * lastTimestamp `string`:  The data and time the user last used the authentication method. 
  * totalCount `integer`: The number of times the authentication method was used. 

### authenticationStatus
* authenticationStatus `object`: Contains information about the authentication status.
  * accessCodeResult [eventResult](#eventresult)
  * ageVerifyResult [eventResult](#eventresult)
  * anySocialIDResult [eventResult](#eventresult)
  * facebookResult [eventResult](#eventresult)
  * googleResult [eventResult](#eventresult)
  * idLookupResult [eventResult](#eventresult)
  * idQuestionsResult [eventResult](#eventresult)
  * linkedinResult [eventResult](#eventresult)
  * liveIDResult [eventResult](#eventresult)
  * ofacResult [eventResult](#eventresult)
  * openIDResult [eventResult](#eventresult)
  * phoneAuthResult [eventResult](#eventresult)
  * sTANPinResult [eventResult](#eventresult)
  * salesforceResult [eventResult](#eventresult)
  * signatureProviderResult [eventResult](#eventresult)
  * smsAuthResult [eventResult](#eventresult)
  * twitterResult [eventResult](#eventresult)
  * yahooResult [eventResult](#eventresult)

### bccEmailAddress
* bccEmailAddress `object`: Contains information about the BCC email address.
  * bccEmailAddressId `string`: Only users with canManageAccount setting can use this option. An array of up to 5 email addresses the envelope is sent to as a BCC email. 
  * email `string`: Specifies the BCC email address. DocuSign verifies that the email format is correct, but does not verify that the email is active.Using this overrides the BCC for Email Archive information setting for this envelope.

### billingCharge
* billingCharge `object`: Contains information about a billing charge.
  * allowedQuantity `string`: Reserved: TBD
  * blocked `string`: Reserved: TBD
  * chargeName `string`: Provides information on what services the charge item is for.
  * chargeType `string`: Reserved: TBD
  * chargeUnitOfMeasure `string`: Reserved: TBD
  * discounts `array`
    * items [billingDiscount](#billingdiscount)
  * firstEffectiveDate `string`
  * includedQuantity `string`
  * incrementalQuantity `string`: Reserved: TBD
  * lastEffectiveDate `string`
  * prices `array`
    * items [billingPrice](#billingprice)
  * unitPrice `string`: Reserved: TBD
  * usedQuantity `string`

### billingChargeResponse
* billingChargeResponse `object`: Defines a billing charge response object.
  * billingChargeItems `array`: Reserved: TBD
    * items [billingCharge](#billingcharge)

### billingDiscount
* billingDiscount `object`
  * beginQuantity `string`: Reserved: TBD
  * discount `string`
  * endQuantity `string`

### billingInvoice
* billingInvoice `object`
  * amount `string`: The total amount of the purchase.
  * balance `string`: Reserved: TBD
  * dueDate `string`: Reserved: TBD
  * invoiceId `string`
  * invoiceItems `array`: Reserved: TBD
    * items [billingInvoiceItem](#billinginvoiceitem)
  * invoiceNumber `string`: Reserved: TBD
  * invoiceUri `string`: Contains a URI for an endpoint that you can use to retrieve invoice information.
  * nonTaxableAmount `string`
  * pdfAvailable `string`
  * taxableAmount `string`

### billingInvoiceItem
* billingInvoiceItem `object`: Contains information about an item on a billing invoice.
  * chargeAmount `string`: Reserved: TBD
  * chargeName `string`: Reserved: TBD
  * invoiceItemId `string`: Reserved: TBD
  * quantity `string`: The quantity of envelopes to add to the account.
  * unitPrice `string`: Reserved: TBD

### billingInvoicesResponse
* billingInvoicesResponse `object`: Defines a billing invoice response object.
  * billingInvoices `array`: Reserved: TBD
    * items [Invoices](#invoices)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 

### billingInvoicesSummary
* billingInvoicesSummary `object`
  * billingInvoices `array`: Reserved: TBD
    * items [Invoices](#invoices)
  * pastDueBalance `string`
  * paymentAllowed `string`

### billingPayment
* billingPayment `object`: Contains information on a billing plan.
  * amount `string`: Reserved: TBD
  * invoiceId `string`: Reserved: TBD
  * paymentId `string`

### billingPaymentItem
* billingPaymentItem `object`
  * amount `string`: The total amount of the purchase.
  * description `string`: A sender-defined description of the line item.
  * paymentDate `string`
  * paymentId `string`
  * paymentNumber `string`: When set to **true**, a PDF version of the invoice is available. 

### billingPaymentRequest
* billingPaymentRequest `object`
  * paymentAmount `string`: The payment amount for the past due invoices. This value must match the pastDueBalance value retrieved using Get Past Due Invoices.

### billingPaymentResponse
* billingPaymentResponse `object`: Defines an billing payment response object.
  * billingPayments `array`: Reserved: TBD
    * items [billingPayment](#billingpayment)

### billingPaymentsResponse
* billingPaymentsResponse `object`: Defines a billing payments response object.
  * billingPayments `array`: Reserved: TBD
    * items [Payments](#payments)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 

### billingPlan
* billingPlan `object`: Contains information about a billing plan.
  * appStoreProducts `array`: Reserved: TBD
    * items [appStoreProduct](#appstoreproduct)
  * currencyPlanPrices `array`: Contains the currencyCode and currencySymbol for the alternate currency values for envelopeFee, fixedFee, and seatFee that are configured for this plan feature set.
    * items [currencyPlanPrice](#currencyplanprice)
  * enableSupport `string`: When set to **true**, then customer support is provided as part of the account plan.
  * includedSeats `string`: The number of seats (users) included.
  * otherDiscountPercent `string`
  * paymentCycle `string`:  The payment cycle associated with the plan. The possible values are: Monthly or Annually. 
  * paymentMethod `string`
  * perSeatPrice `string`: The per seat price for the plan.
  * planClassification `string`: Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
  * planFeatureSets `array`: A complex type that sets the feature sets for the account.
    * items [featureSet](#featureset)
  * planId `string`: The DocuSign Plan ID for the account.
  * planName `string`: The name of the Billing Plan.
  * seatDiscounts `array`
    * items [seatDiscount](#seatdiscount)
  * supportIncidentFee `string`: The support incident fee charged for each support incident.
  * supportPlanFee `string`: The support plan fee charged for this plan.

### billingPlanInformation
* billingPlanInformation `object`
  * appStoreReceipt [appStoreReceipt](#appstorereceipt)
  * billingAddress [accountAddress](#accountaddress)
  * creditCardInformation [creditCardInformation](#creditcardinformation)
  * downgradeReason `string`
  * enableSupport `string`: When set to **true**, then customer support is provided as part of the account plan.
  * includedSeats `string`: The number of seats (users) included.
  * incrementalSeats `string`: Reserved: TBD
  * paymentProcessorInformation [paymentProcessorInformation](#paymentprocessorinformation)
  * planInformation [planInformation](#planinformation)
  * referralInformation [referralInformation](#referralinformation)
  * renewalStatus `string`
  * saleDiscountAmount `string`: Reserved for DocuSign use only.
  * saleDiscountFixedAmount `string`: Reserved for DocuSign use only.
  * saleDiscountPercent `string`: Reserved for DocuSign use only.
  * saleDiscountPeriods `string`: Reserved for DocuSign use only.
  * saleDiscountSeatPriceOverride `string`: Reserved for DocuSign use only.

### billingPlanPreview
* billingPlanPreview `object`: Contains information about a preview billing plan.
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * invoice [Invoices](#invoices)
  * isProrated `string`
  * subtotalAmount `string`
  * taxAmount `string`
  * totalAmount `string`

### billingPlanResponse
* billingPlanResponse `object`: Defines a billing plan response object.
  * billingPlan [billingPlan](#billingplan)
  * successorPlans `array`
    * items [billingPlan](#billingplan)

### billingPlanUpdateResponse
* billingPlanUpdateResponse `object`: Defines a billing plan update response object.
  * accountPaymentMethod `string`
  * billingPlanPreview [billingPlanPreview](#billingplanpreview)
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * includedSeats `string`: The number of seats (users) included.
  * paymentCycle `string`
  * paymentMethod `string`
  * planId `string`: The DocuSign Plan ID for the account.
  * planName `string`

### billingPlansResponse
* billingPlansResponse `object`: Defines a billing plans response object.
  * billingPlans `array`: Reserved: TBD
    * items [billingPlan](#billingplan)

### billingPrice
* billingPrice `object`
  * beginQuantity `string`: Reserved: TBD
  * endQuantity `string`
  * unitPrice `string`: Reserved: TBD

### brand
* brand `object`
  * brandCompany `string`: The name of the company associated with this brand.
  * brandId `string`: The ID used to identify a specific brand in API calls.
  * brandName `string`: The name of the brand.
  * colors `array`
    * items [nameValue](#namevalue)
  * emailContent `array`
    * items [brandEmailContent](#brandemailcontent)
  * errorDetails [errorDetails](#errordetails)
  * isOverridingCompanyName `string`
  * isSendingDefault `string`
  * isSigningDefault `string`
  * landingPages `array`
    * items [nameValue](#namevalue)
  * links `array`
    * items [brandLink](#brandlink)
  * logos [brandLogos](#brandlogos)
  * resources [brandResourceUrls](#brandresourceurls)

### brandEmailContent
* brandEmailContent `object`
  * content `string`
  * emailContentType `string`
  * emailToLink `string`
  * linkText `string`

### brandLink
* brandLink `object`
  * linkText `string`
  * linkType `string`
  * showLink `string`
  * urlOrMailTo `string`

### brandLogos
* brandLogos `object`
  * email `string`
  * primary `string`
  * secondary `string`

### brandRequest
* brandRequest `object`
  * brandId `string`: The ID of the brand used in API calls

### brandResourceUrls
* brandResourceUrls `object`
  * email `string`
  * sending `string`
  * signing `string`
  * signingCaptive `string`

### brandResources
* brandResources `object`
  * createdByUserInfo [userInfo](#userinfo)
  * createdDate `string`
  * modifiedByUserInfo [userInfo](#userinfo)
  * modifiedDate `string`
  * modifiedTemplates `array`
    * items `string`
  * resourcesContentType `string`
  * resourcesContentUri `string`

### brandResourcesList
* brandResourcesList `object`
  * resourcesContentTypes `array`
    * items [brandResources](#brandresources)

### brandsRequest
* brandsRequest `object`
  * brands `array`: The list of brands.
    * items [brandRequest](#brandrequest)

### brandsResponse
* brandsResponse `object`
  * brands `array`: The list of brands.
    * items [brand](#brand)
  * recipientBrandIdDefault `string`: The brand seen by envelope recipients when a brand is not explicitly set.
  * senderBrandIdDefault `string`: The brand seen by envelope senders when a brand is not explicitly set.

### bulkEnvelope
* bulkEnvelope `object`
  * bulkRecipientRow `string`: Reserved: TBD
  * bulkStatus `string`: Indicates the status of the bulk send operation. Returned values can be:
  * email `string`
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * errorDetails [errorDetails](#errordetails)
  * name `string`
  * submittedDateTime `string`
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.

### bulkEnvelopeStatus
* bulkEnvelopeStatus `object`
  * batchId `string`: Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches.
  * batchSize `string`: The number of items returned in this response.
  * bulkEnvelopes `array`: Reserved: TBD
    * items [bulkEnvelope](#bulkenvelope)
  * bulkEnvelopesBatchUri `string`: Reserved: TBD
  * endPosition `string`: The last position in the result set. 
  * failed `string`: The number of entries with a status of failed. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * queued `string`: The number of entries with a status of queued. 
  * resultSetSize `string`: The number of results returned in this response. 
  * sent `string`: The number of entries with a status of sent.
  * startPosition `string`: Starting position of the current result set.
  * submittedDate `string`
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### bulkEnvelopesResponse
* bulkEnvelopesResponse `object`
  * bulkEnvelopeStatuses `array`: Reserved: TBD
    * items [bulkEnvelopeStatus](#bulkenvelopestatus)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### bulkRecipient
* bulkRecipient `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * email `string`: Specifies the recipient's email address. 
  * errorDetails `array`: Array or errors.
    * items [errorDetails](#errordetails)
  * identification `string`: Specifies the authentication check used for the signer. If blank then no authentication check is required for the signer. Only one value can be used in this field.
  * name `string`: Specifies the recipient's name. 
  * note `string`: A note sent to the recipient in the signing email.
  * phoneNumber `string`: This is only used if the Identification field value is Phone or SMS. The value for this field can be a valid telephone number or, if Phone, usersupplied (SMS authentication cannot use a user supplied number). Parenthesis and dashes can be used in the telephone number.
  * recipientSignatureProviderInfo `array`
    * items [bulkRecipientSignatureProvider](#bulkrecipientsignatureprovider)
  * rowNumber `string`
  * tabLabels `array`: Specifies values used to populate recipient tabs with information. This allows each bulk recipient signer to have different values for their associated tabs. Any number of `tabLabel` columns can be added to the bulk recipient file.
    * items [bulkRecipientTabLabel](#bulkrecipienttablabel)

### bulkRecipientSignatureProvider
* bulkRecipientSignatureProvider `object`
  * name `string`
  * value `string`: Specifies the value of the tab. 

### bulkRecipientTabLabel
* bulkRecipientTabLabel `object`
  * name `string`
  * value `string`: Specifies the value of the tab. 

### bulkRecipientsRequest
* bulkRecipientsRequest `object`
  * bulkRecipients `array`: A complex type containing information about the bulk recipients in the request.
    * items [bulkRecipient](#bulkrecipient)

### bulkRecipientsResponse
* bulkRecipientsResponse `object`
  * bulkRecipients `array`: A complex type containing information about the bulk recipients in the response.
    * items [bulkRecipient](#bulkrecipient)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### bulkRecipientsSummaryResponse
* bulkRecipientsSummaryResponse `object`
  * bulkRecipients `array`: A complex type containing information about the bulk recipients in the response.
    * items [bulkRecipient](#bulkrecipient)
  * bulkRecipientsCount `string`: The number of items returned in this response.
  * bulkRecipientsUri `string`: Contains a URI for an endpoint that allows you to easily retrieve bulk recipient information.
  * errorDetails `array`: Array or errors.
    * items [errorDetails](#errordetails)

### bulkRecipientsUpdateResponse
* bulkRecipientsUpdateResponse `object`
  * signer [signer](#signer)

### captiveRecipient
* captiveRecipient `object`
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * email `string`: Specifies the email address associated with the captive recipient.
  * errorDetails [errorDetails](#errordetails)
  * userName `string`: Specifies the user name associated with the captive recipient.

### captiveRecipientInformation
* captiveRecipientInformation `object`
  * captiveRecipients `array`: A complex type containing information about one or more captive recipients.
    * items [captiveRecipient](#captiverecipient)

### carbonCopy
* carbonCopy `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * agentCanEditEmail `string`
  * agentCanEditName `string`
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: Email id of the recipient. Notification of the document to sign is sent to this email id. 
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * lastName `string`
  * name `string`: legal name of the recipient.
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### certifiedDelivery
* certifiedDelivery `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * agentCanEditEmail `string`
  * agentCanEditName `string`
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * lastName `string`
  * name `string`
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### checkbox
* checkbox `object`: A tab that allows the recipient to select a yes/no (on/off) option.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: This property does not apply to `checkbox` tabs. Check boxes are always optional.
  * selected `string`: When set to **true**, the checkbox is selected.
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### chunkedUploadPart
* chunkedUploadPart `object`
  * sequence `string`
  * size `string`: Reserved: TBD

### chunkedUploadRequest
* chunkedUploadRequest `object`
  * chunkedUploadId `string`
  * data `string`

### chunkedUploadResponse
* chunkedUploadResponse `object`
  * checksum `string`
  * chunkedUploadId `string`
  * chunkedUploadParts `array`
    * items [chunkedUploadPart](#chunkeduploadpart)
  * chunkedUploadUri `string`
  * committed `string`
  * expirationDateTime `string`
  * maxChunkedUploadParts `string`
  * maxTotalSize `string`
  * totalSize `string`

### cloudStorageProvider
* cloudStorageProvider `object`
  * authenticationUrl `string`: The authentication URL used for the cloud storage provider. This information is only included in the response if the user has not passed authentication for the cloud storage provider. If the redirectUrl query string is provided, the returnUrl is appended to the authenticationUrl. 
  * errorDetails [errorDetails](#errordetails)
  * redirectUrl `string`: The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.
  * service `string`: The service name for the cloud storage provider.
  * serviceId `string`: The DocuSign generated ID for the cloud storage provider

### cloudStorageProviders
* cloudStorageProviders `object`
  * storageProviders `array`: An Array containing the storage providers associated with the user.
    * items [cloudStorageProvider](#cloudstorageprovider)

### company
* company `object`: A tab that displays the recipient's company name.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### completeSignHashResponse
* completeSignHashResponse `object`
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [signHashDocument](#signhashdocument)
  * redirectionUrl `string`
  * remainingSignatureRequests `string`

### completeSignRequest
* completeSignRequest `object`
  * correlationId `string`
  * documentUpdateInfos `array`
    * items [documentUpdateInfo](#documentupdateinfo)
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * transactionId `string`: Specifies the Transaction ID from the AppStore.

### compositeTemplate
* compositeTemplate `object`
  * compositeTemplateId `string`: The identify of this composite template. It is used as a reference when adding document object information. If used, the document's `content-disposition` must include the composite template ID to which the document should be added. If a composite template ID is not specified in the content-disposition, the document is applied based on the value of the `documentId` property only. If no document object is specified, the composite template inherits the first document.
  * document [document](#document)
  * inlineTemplates `array`:  Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value.
    * items [inlineTemplate](#inlinetemplate)
  * pdfMetaDataTemplateSequence `string`
  * serverTemplates `array`: 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value
    * items [serverTemplate](#servertemplate)

### connectConfigResults
* connectConfigResults `object`
  * configurations `array`: Array of Connect Configurations
    * items [ConnectConfigurations](#connectconfigurations)
  * totalRecords `string`: Record count.

### connectCustomConfiguration
* connectCustomConfiguration `object`
  * allUsers `string`: When set to **true**, the tracked envelope and recipient events for all users, including users that are added a later time, are sent through Connect.
  * allowEnvelopePublish `string`: When set to **true**, data is sent to the urlToPublishTo web address. This option can be set to false to stop sending data while maintaining the Connect configuration information.
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * connectId `string`: The ID of the custom Connect configuration being accessed.
  * enableLog `string`: This turns Connect logging on or off. When set to **true**, logging is turned on.
  * envelopeEvents `string`: A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property. 
  * includeCertSoapHeader `string`
  * includeCertificateOfCompletion `string`: When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes. 
  * includeDocumentFields `string`: When set to **true**, the Document Fields associated with the envelope's documents are included in the notification messages. Document Fields are optional custom name-value pairs added to documents using the API. 
  * includeDocuments `string`: reserved
  * includeEnvelopeVoidReason `string`: When set to **true**, if the envelope is voided, the Connect Service notification will include the void reason, as entered by the person that voided the envelope. 
  * includeSenderAccountasCustomField `string`: When set to **true**, Connect will include the sender account as Custom Field in the data.
  * includeTimeZoneInformation `string`: When set to **true**, Connect will include the envelope time zone information.
  * name `string`
  * recipientEvents `string`: An array of recipient event statuses that will trigger Connect to send notifications to your webhook listener at the url endpoint specified in the `url` property. 
  * requiresAcknowledgement `string`: #### When set to **true**, and SIM mode is activated:
  * signMessageWithX509Certificate `string`: When set to **true**, Mutual TLS will be enabled for notifications. Mutual TLS must be initiated by the listener (the customer's web server) during the TLS handshake protocol. 
  * soapNamespace `string`: The namespace of the SOAP interface.
  * urlToPublishTo `string`: This is the web address and name of your listener or Retrieving Service endpoint. You need to include HTTPS:// in the web address.
  * useSoapInterface `string`: When set to **true**, the notifications are sent to your endpoint as SOAP requests. 
  * userIds `string`: A comma separated list of userIds. This sets the users associated with the tracked envelope and recipient events. When a tracked event occurs for a set user, the a notification message is sent to your Connect listener. 

### connectDebugLog
* connectDebugLog `object`
  * connectConfig `string`
  * errorDetails [errorDetails](#errordetails)
  * eventDateTime `string`
  * eventDescription `string`
  * payload `string`

### connectFailureFilter
* connectFailureFilter `object`
  * envelopeIds `array`
    * items `string`
  * synchronous `string`

### connectFailureResult
* connectFailureResult `object`
  * configId `string`: Reserved for DocuSign.
  * configUrl `string`: Reserved for DocuSign.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * status `string`: Connection status.
  * statusMessage `string`: Connection status message.

### connectFailureResults
* connectFailureResults `object`
  * retryQueue `array`
    * items [connectFailureResult](#connectfailureresult)

### connectLog
* connectLog `object`
  * accountId `string`: The account ID associated with the envelope.
  * configUrl `string`: The web address of the listener or Retrieving Service end point for Connect.
  * connectDebugLog `array`: A complex element containing information about the Connect configuration, error details, date/time, description and payload.
    * items [connectDebugLog](#connectdebuglog)
  * connectId `string`: The identifier for the Connect configuration that failed. If an account has multiple Connect configurations, this value is used to look up the Connect configuration for the failed post.
  * created `string`: The date and time the entry was created.
  * email `string`: The email that sent the envelope.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * error `string`: The error that caused the Connect post to fail.
  * failureId `string`: The failure log ID for the failure.
  * failureUri `string`: The URI for the failure.
  * lastTry `string`: The date and time the last attempt to post.
  * logId `string`: The Connect log ID for the entry.
  * logUri `string`: The URI for the log item.
  * retryCount `string`: The number of times the Connect post has been retried.
  * retryUri `string`: The UEI to retry to publish the Connect failure.
  * status `string`: The new envelope status for the failed Connect post. The possible values are: Any, Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut, Template, or Processing.
  * subject `string`: The envelope subject.
  * userName `string`: The name of the envelope sender.

### connectLogs
* connectLogs `object`
  * failures `array`: An array of containing failure information from the Connect failure log.
    * items [connectLog](#connectlog)
  * logs `array`: A complex type containing Connect log information. It is divided into two sections, one for regular logs and one for Connect failures. 
    * items [connectLog](#connectlog)
  * totalRecords `string`: Record count.
  * type `string`: Type of the user. Valid values: type_owner, type_participant.

### consoleViewRequest
* consoleViewRequest `object`
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * returnUrl `string`: The URL to be redirected to after the console view session has ended.

### consumerDisclosure
* consumerDisclosure `object`
  * accountEsignId `string`: A GUID identifying the account associated with the consumer disclosure
  * allowCDWithdraw `string`: Indicates whether the customer can withdraw their acceptance of the consumer disclosure.
  * allowCDWithdrawMetadata [settingsMetadata](#settingsmetadata)
  * changeEmail `string`
  * changeEmailOther `string`
  * companyName `string`: The name of the user's Company.
  * companyPhone `string`: The phone number of the company associated with the consumer disclosure.
  * copyCostPerPage `string`
  * copyFeeCollectionMethod `string`: Specifies the fee collection method for cases in which the customer requires paper copies of the document.
  * copyRequestEmail `string`
  * custom `string`
  * enableEsign `string`
  * esignAgreement `string`: The Electronic Record and Signature Disclosure text. The disclosure text includes the html formatting.
  * esignText `string`
  * languageCode `string`
  * mustAgreeToEsign `string`
  * pdfId `string`: **Deprecated**
  * useBrand `string`
  * useConsumerDisclosureWithinAccount `string`
  * useConsumerDisclosureWithinAccountMetadata [settingsMetadata](#settingsmetadata)
  * withdrawAddressLine1 `string`: Contains the first address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawAddressLine2 `string`: Contains the second address line of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawByEmail `string`: Indicates whether the customer can withdraw consent by email.
  * withdrawByMail `string`: Indicates whether the customer can withdraw consent by postal mail.
  * withdrawByPhone `string`: Indicates whether the customer can withdraw consent by phone.
  * withdrawCity `string`: Contains the city of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawConsequences `string`: Indicates the consequences of withdrawing consent.
  * withdrawEmail `string`: Contains the email address to which a customer can send a consent withdrawal notification.
  * withdrawOther `string`: Indicates other information need to withdraw consent.
  * withdrawPhone `string`: Contains the phone number which a customer can call to register consent withdrawal notification.
  * withdrawPostalCode `string`: Contains the postal code of the postal address to which a customer can send a consent withdrawal notification.
  * withdrawState `string`: Contains the state of the postal address to which a customer can send a consent withdrawal notification.

### contact
* contact `object`
  * contactId `string`: The unique identifier of a person in the contacts address book.
  * contactPhoneNumbers `array`
    * items [contactPhoneNumber](#contactphonenumber)
  * contactUri `string`
  * emails `array`
    * items `string`
  * errorDetails [errorDetails](#errordetails)
  * name `string`
  * organization `string`
  * shared `string`
  * signingGroup `string`
  * signingGroupName `string`: The display name for the signing group. 

### contactGetResponse
* contactGetResponse `object`
  * contacts `array`
    * items [Contacts](#contacts)
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### contactModRequest
* contactModRequest `object`
  * contacts `array`
    * items [Contacts](#contacts)

### contactPhoneNumber
* contactPhoneNumber `object`
  * phoneNumber `string`
  * phoneType `string`

### contactUpdateResponse
* contactUpdateResponse `object`
  * contacts `array`
    * items [Contacts](#contacts)

### correctViewRequest
* correctViewRequest `object`
  * returnUrl `string`: The url used after correct/send view session has ended. DocuSign redirects to the url and includes an event parameter that can be used by your app. The event parameters returned are: 
  * suppressNavigation `string`: Specifies whether the window is displayed with or without dressing.

### country
* country `object`
  * isoCode `string`
  * name `string`
  * provinceValidated `string`
  * provinces `array`
    * items [province](#province)

### credential
* credential `object`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * value `string`: Specifies the value of the tab. 

### creditCardInformation
* creditCardInformation `object`
  * address [addressInformation](#addressinformation)
  * cardNumber `string`: The number on the credit card.
  * cardType `string`: The credit card type. Valid values are: visa, mastercard, or amex.
  * expirationMonth `string`: The month that the credit card expires (1-12).
  * expirationYear `string`: The year 4 digit year in which the credit card expires.
  * nameOnCard `string`: The exact name printed on the credit card.

### creditCardTypes
* creditCardTypes `object`
  * cardTypes `array`: An array containing supported credit card types.
    * items `string`

### currencyFeatureSetPrice
* currencyFeatureSetPrice `object`
  * currencyCode `string`: Specifies the alternate ISO currency code for the account. 
  * currencySymbol `string`: Specifies the alternate currency symbol for the account.
  * envelopeFee `string`: An incremental envelope cost for plans with envelope overages (when `isEnabled` is set to **true**.)
  * fixedFee `string`: Specifies a one-time fee associated with the plan (when `isEnabled` is set to **true**.)
  * seatFee `string`: Specifies an incremental seat cost for seat-based plans (when `isEnabled` is set to **true**.)

### currencyPlanPrice
* currencyPlanPrice `object`
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * currencySymbol `string`: Specifies the currency symbol for the account.
  * perSeatPrice `string`
  * supportIncidentFee `string`: The support incident fee charged for each support incident.
  * supportPlanFee `string`: The support plan fee charged for this plan.
  * supportedCardTypes [creditCardTypes](#creditcardtypes)

### customField
* customField `object`
  * customFieldType `string`
  * errorDetails [errorDetails](#errordetails)
  * fieldId `string`: An ID used to specify a custom field.
  * listItems `array`
    * items `string`
  * name `string`
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * show `string`: A boolean indicating if the value should be displayed.  If this value is set to **true**, the custom field is displayed at the top of the certificate of completion. If this value is left blank/ or set to **false**, then it does not appear in the certificate of completion. 
  * value `string`: Specifies the value of the tab. 

### customField_v2
* customField_v2 `object`
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * errorDetails [errorDetails](#errordetails)
  * fieldId `string`: An ID used to specify a custom field.
  * name `string`
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * show `string`: A boolean indicating if the value should be displayed.  If this value is set to **true**, the custom field is displayed at the top of the certificate of completion. If this value is left blank/ or set to **false**, then it does not appear in the certificate of completion. 
  * value `string`: The value of the custom field.

### customFields
* customFields `object`
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### customFieldsEnvelope
* customFieldsEnvelope `object`
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### customSettingsInformation
* customSettingsInformation `object`
  * customSettings `array`: The name/value pair information for the user custom setting.
    * items [nameValue](#namevalue)

### date
* date `object`: A tab that allows the recipient to enter a date. Date tabs
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### dateSigned
* dateSigned `object`: A tab that displays the date that the recipient signed the
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### dateStampProperties
* dateStampProperties `object`
  * dateAreaHeight `string`
  * dateAreaWidth `string`
  * dateAreaX `string`
  * dateAreaY `string`

### decline
* decline `object`: A tab that allows the recipient the option of declining an
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * buttonText `string`:  Specifies the decline text displayed in the tab.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * declineReason `string`: The reason the recipient declined the document.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `integer`: Height of the tab in pixels.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### diagnosticsSettingsInformation
* diagnosticsSettingsInformation `object`
  * apiRequestLogMaxEntries `string`: Specifies the maximum number of API requests to log.
  * apiRequestLogRemainingEntries `string`: Indicates the remaining number of API requests that can be logged.
  * apiRequestLogging `string`:  When set to **true**, enables API request logging for the user. 

### dobInformationInput
* dobInformationInput `object`: Complex type containing:
  * dateOfBirth `string`: Specifies the recipient's date, month, and year of birth.
  * displayLevelCode `string`: Specifies the display level for the recipient. 
  * receiveInResponse `string`: When set to **true**, the information needs to be returned in the response.

### document
* document `object`: A document object.
  * applyAnchorTabs `string`: Reserved for DocuSign
  * authoritativeCopy `boolean`: If **true**, this document is considered an authoritative copy.
  * display `string`: This string sets the display and behavior properties of
  * documentBase64 `string`: The document's bytes. This field can be used to include a base64 version of the document bytes within an envelope definition instead of sending the document using a multi-part HTTP request. The maximum document size is smaller if this field is used due to the overhead of the base64 encoding.
  * documentFields `array`
    * items [nameValue](#namevalue)
  * documentGroup `string`
  * documentId `string`: Specifies the document ID of this document. This value is used by tabs to determine which document they appear in.
  * encryptedWithKeyManager `string`: When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.
  * fileExtension `string`: The file extension type of the document. Non-PDF documents are converted to PDF.
  * fileFormatHint `string`
  * htmlDefinition [documentHtmlDefinition](#documenthtmldefinition)
  * includeInDownload `string`: When set to **true**,
  * matchBoxes `array`: Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template. 
    * items [matchBox](#matchbox)
  * name `string`
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * pages `string`
  * password `string`
  * remoteUrl `string`: The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}]. 
  * signerMustAcknowledge `string`: Sets how the signer interacts with the supplemental document.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * transformPdfFields `string`: When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs. 
  * uri `string`

### documentFieldsInformation
* documentFieldsInformation `object`
  * documentFields `array`
    * items [nameValue](#namevalue)

### documentHtmlCollapsibleDisplaySettings
* documentHtmlCollapsibleDisplaySettings `object`
  * arrowClosed `string`
  * arrowColor `string`
  * arrowLocation `string`
  * arrowOpen `string`
  * arrowSize `string`
  * arrowStyle `string`
  * containerStyle `string`
  * labelStyle `string`
  * onlyArrowIsClickable `boolean`
  * outerLabelAndArrowStyle `string`

### documentHtmlDefinition
* documentHtmlDefinition `object`
  * displayAnchorPrefix `string`
  * displayAnchors `array`
    * items [documentHtmlDisplayAnchor](#documenthtmldisplayanchor)
  * displayOrder `string`
  * displayPageNumber `string`
  * documentGuid `string`
  * documentId `string`: The ID of the document being accessed.
  * headerLabel `string`
  * maxScreenWidth `string`
  * removeEmptyTags `string`
  * showMobileOptimizedToggle `string`
  * source `string`

### documentHtmlDefinitionOriginal
* documentHtmlDefinitionOriginal `object`
  * documentId `string`: The ID of the document being accessed.
  * documentIdGuid `string`
  * htmlDefinition [documentHtmlDefinition](#documenthtmldefinition)

### documentHtmlDefinitionOriginals
* documentHtmlDefinitionOriginals `object`
  * htmlDefinitions `array`
    * items [documentHtmlDefinitionOriginal](#documenthtmldefinitionoriginal)

### documentHtmlDefinitions
* documentHtmlDefinitions `object`
  * htmlDefinitions `array`
    * items `string`

### documentHtmlDisplayAnchor
* documentHtmlDisplayAnchor `object`
  * caseSensitive `boolean`
  * displaySettings [documentHtmlDisplaySettings](#documenthtmldisplaysettings)
  * endAnchor `string`
  * removeEndAnchor `boolean`
  * removeStartAnchor `boolean`
  * startAnchor `string`

### documentHtmlDisplaySettings
* documentHtmlDisplaySettings `object`
  * cellStyle `string`
  * collapsibleSettings [documentHtmlCollapsibleDisplaySettings](#documenthtmlcollapsibledisplaysettings)
  * display `string`: This string sets the display and behavior properties of
  * displayLabel `string`
  * displayOrder `integer`
  * displayPageNumber `integer`
  * hideLabelWhenOpened `boolean`
  * inlineOuterStyle `string`
  * labelWhenOpened `string`
  * scrollToTopWhenOpened `boolean`
  * tableStyle `string`

### documentSecurityStore
* documentSecurityStore `object`
  * certificates `array`
    * items `string`
  * crls `array`
    * items `string`
  * ocsps `array`
    * items `string`

### documentTemplate
* documentTemplate `object`
  * documentEndPage `string`
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * documentStartPage `string`
  * errorDetails [errorDetails](#errordetails)
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign generates an error and the call fails.

### documentTemplateList
* documentTemplateList `object`
  * documentTemplates `array`
    * items [documentTemplate](#documenttemplate)

### documentUpdateInfo
* documentUpdateInfo `object`
  * data `string`
  * documentId `string`: The ID of the document being accessed.
  * documentSecurityStore [documentSecurityStore](#documentsecuritystore)
  * name `string`
  * returnFormat `string`
  * signatureDataInfos `array`
    * items [signatureDataInfo](#signaturedatainfo)
  * timeStampField [timeStampField](#timestampfield)

### documentVisibility
* documentVisibility `object`
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * rights `string`
  * visible `string`

### documentVisibilityList
* documentVisibilityList `object`
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)

### eNoteConfiguration
* eNoteConfiguration `object`
  * connectConfigured `string`
  * eNoteConfigured `string`
  * organization `string`
  * password `string`
  * userName `string`

### editor
* editor `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: Email id of the recipient. Notification of the document to sign is sent to this email id. 
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * lastName `string`
  * name `string`: legal name of the recipient.
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### email
* email `object`: A tab that allows the recipient to enter an email address.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### emailAddress
* emailAddress `object`: A tab that displays the recipient's email as entered in the
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### emailSettings
* emailSettings `object`
  * bccEmailAddresses `array`: A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
    * items [bccEmailAddress](#bccemailaddress)
  * replyEmailAddressOverride `string`
  * replyEmailNameOverride `string`

### envelope
* envelope `object`
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: The unique identifier of a brand.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * purgeState `string`: Shows the current purge state for the envelope. The possible values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Item status. <!-- TODO -->
  * statusChangedDateTime `string`: The data and time the status changed.
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`: Specifies the Transaction ID from the AppStore.
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### envelopeAttachment
* envelopeAttachment `object`
  * accessControl `string`
  * attachmentId `string`
  * attachmentType `string`
  * errorDetails [errorDetails](#errordetails)
  * label `string`
  * name `string`

### envelopeAttachmentsRequest
* envelopeAttachmentsRequest `object`
  * attachments `array`
    * items [attachment](#attachment)

### envelopeAttachmentsResult
* envelopeAttachmentsResult `object`
  * attachments `array`
    * items [EnvelopeAttachments](#envelopeattachments)

### envelopeAuditEvent
* envelopeAuditEvent `object`
  * eventFields `array`
    * items [nameValue](#namevalue)

### envelopeAuditEventResponse
* envelopeAuditEventResponse `object`
  * auditEvents `array`: Reserved: TBD
    * items [envelopeAuditEvent](#envelopeauditevent)

### envelopeDefinition
* envelopeDefinition `object`
  * accessibility `string`: Sets the document reading zones for screen reader applications.  This element can only be used if Document Accessibility is enabled for the account. 
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowRecipientRecursion `string`: When set to **true**, this enables the Recursive Recipients feature and allows a recipient to appear more than once in the routing order.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachments `array`
    * items [attachment](#attachment)
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: This sets the brand profile format used for the envelope. The value in the string is the brandId associated with the profile. Account branding must be enabled for the account to use this option.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * compositeTemplates `array`: A complex type that can be added to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.
    * items [compositeTemplate](#compositetemplate)
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [document](#document)
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`: Optional element. This is the same as the email body. If specified it is included in email body for all envelope recipients. This can be a maximum of 10000 characters
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * eventNotification [eventNotification](#eventnotification)
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * password `string`
  * purgeState `string`: Initiates a purge request. Valid values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Indicates the envelope status. Valid values are:
  * statusChangedDateTime `string`: The data and time the status changed.
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * templateRoles `array`: Specifies the template recipients. Each roleName in the template must have a recipient assigned to it. This is made up by the following elements:
    * items [templateRole](#templaterole)
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### envelopeDocument
* envelopeDocument `object`
  * attachmentTabId `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * availableDocumentTypes `array`
    * items [signatureType](#signaturetype)
  * containsPdfFormFields `string`
  * display `string`: This string sets the display and behavior properties of
  * documentFields `array`
    * items [nameValue](#namevalue)
  * documentGroup `string`
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * includeInDownload `string`: When set to **true**,
  * name `string`
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * pages `string`
  * signerMustAcknowledge `string`: Sets how the signer interacts with the supplemental document.
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * uri `string`

### envelopeDocumentsResult
* envelopeDocumentsResult `object`
  * envelopeDocuments `array`
    * items [envelopeDocument](#envelopedocument)
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### envelopeEvent
* envelopeEvent `object`: For which envelope events should your webhook be called?
  * envelopeEventStatusCode `string`: An envelope status for which your webhook should be called. Values: Draft, Sent, Delivered, Completed, Declined, or Voided.
  * includeDocuments `string`: reserved

### envelopeFormData
* envelopeFormData `object`
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * formData `array`
    * items [nameValue](#namevalue)
  * recipientFormData `array`
    * items [recipientFormData](#recipientformdata)
  * sentDateTime `string`: The date and time the envelope was sent.
  * status `string`: Item status. <!-- TODO -->

### envelopeId
* envelopeId `object`: A tab that displays the envelope ID. Recipients cannot enter
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### envelopeIdsRequest
* envelopeIdsRequest `object`
  * envelopeIds `array`
    * items `string`
  * transactionIds `array`:  A list of transaction Id's used to determining the status of envelopes sent asynchronously. See **transactionId** property on envelopes.
    * items `string`

### envelopeNotificationRequest
* envelopeNotificationRequest `object`
  * expirations [expirations](#expirations)
  * reminders [reminders](#reminders)
  * useAccountDefaults `string`: When set to **true**, the account default notification settings are used for the envelope.

### envelopeSummary
* envelopeSummary `object`
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * status `string`: Indicates the envelope status. Valid values are: 
  * statusDateTime `string`: The DateTime that the envelope changed status (i.e. was created or sent.)
  * uri `string`

### envelopeTemplate
* envelopeTemplate `object`
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: The unique identifier of a brand.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [document](#document)
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeTemplateDefinition [envelopeTemplateDefinition](#envelopetemplatedefinition)
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * purgeState `string`: Shows the current purge state for the envelope. The possible values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Item status. <!-- TODO -->
  * statusChangedDateTime `string`: The data and time the status changed.
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`: Specifies the Transaction ID from the AppStore.
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### envelopeTemplateDefinition
* envelopeTemplateDefinition `object`: A complex element containing the following information:
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * description `string`: A sender-defined description of the line item.
  * folderId `string`: The ID for the folder.
  * folderName `string`:  The name of the folder in which the template is located.
  * folderUri `string`: The URI of the folder.
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedBy [userInfo](#userinfo)
  * name `string`
  * newPassword `string`: The user's new password.
  * owner [userInfo](#userinfo)
  * pageCount `integer`: An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count.
  * parentFolderUri `string`
  * password `string`
  * shared `string`: When set to **true**, this custom tab is shared.
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * uri `string`

### envelopeTemplateResult
* envelopeTemplateResult `object`
  * allowMarkup `string`: When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
  * allowReassign `string`: When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
  * allowViewHistory `string`
  * asynchronous `string`: When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed. 
  * attachmentsUri `string`
  * authoritativeCopy `string`: Specifies whether all documents in this envelope are authoritative copies.
  * authoritativeCopyDefault `string`: The default `authoritativeCopy` setting for documents in this envelope that do not have `authoritativeCopy` set.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * brandId `string`: The unique identifier of a brand.
  * brandLock `string`
  * certificateUri `string`: Retrieves a URI for an endpoint allowing you to easily retrieve certificate information.
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields [AccountCustomFields](#accountcustomfields)
  * customFieldsUri `string`: Contains a URI for an endpoint to retrieve the custom fields.
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * deletedDateTime `string`: Specifies the data and time the item was deleted.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * description `string`: A sender-defined description of the line item.
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [document](#document)
  * documentsCombinedUri `string`
  * documentsUri `string`: Contains a URI for an endpoint that you can use to retrieve the documents.
  * emailBlurb `string`
  * emailSettings [EnvelopeEmailSettings](#envelopeemailsettings)
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * enableWetSign `string`: When set to **true**, the signer is allowed to print the document and sign it on paper.
  * enforceSignerVisibility `string`: When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeIdStamping `string`: When set to **true**, Envelope ID Stamping is enabled.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * folderId `string`: The ID of the folder being accessed.
  * folderName `string`
  * folderUri `string`
  * initialSentDateTime `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * messageLock `string`: When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. 
  * name `string`
  * notification [notification](#notification)
  * notificationUri `string`: Contains a URI for an endpoint that you can use to retrieve the notifications.
  * owner [userInfo](#userinfo)
  * pageCount `integer`
  * parentFolderUri `string`
  * password `string`
  * purgeState `string`: Shows the current purge state for the envelope. The possible values are:
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsLock `string`: When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * sentDateTime `string`: The date and time the envelope was sent.
  * shared `string`: When set to **true**, this custom tab is shared.
  * signerCanSignOnMobile `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
  * status `string`: Indicates the envelope status. Valid values are:
  * statusChangedDateTime `string`: The data and time the status changed.
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * templatesUri `string`: Contains a URI for an endpoint which you can use to retrieve the templates.
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
  * uri `string`
  * useDisclosure `string`: When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. 
  * voidedDateTime `string`: The date and time the envelope or template was voided.
  * voidedReason `string`: The reason the envelope or template was voided.

### envelopeTemplateResults
* envelopeTemplateResults `object`
  * endPosition `string`: The last position in the result set. 
  * envelopeTemplates `array`: The list of requested templates.
    * items [envelopeTemplateResult](#envelopetemplateresult)
  * folders `array`: A collection of folder objects returned in a response.
    * items [folder](#folder)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### envelopeTransactionStatus
* envelopeTransactionStatus `object`
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * errorDetails [errorDetails](#errordetails)
  * status `string`: Indicates the envelope status. Valid values are:
  * transactionId `string`:  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.

### envelopeUpdateSummary
* envelopeUpdateSummary `object`
  * bulkEnvelopeStatus [bulkEnvelopeStatus](#bulkenvelopestatus)
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * errorDetails [errorDetails](#errordetails)
  * listCustomFieldUpdateResults `array`
    * items [listCustomField](#listcustomfield)
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * recipientUpdateResults `array`
    * items [recipientUpdateResponse](#recipientupdateresponse)
  * tabUpdateResults [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * textCustomFieldUpdateResults `array`
    * items [textCustomField](#textcustomfield)

### envelopesInformation
* envelopesInformation `object`: Result set for the Envelopes: listStatusChanges method
  * continuationToken `string`
  * endPosition `string`: The last position in the result set. 
  * envelopeTransactionStatuses `array`: Array of envelope statuses and transaction Ids in the result set.
    * items [envelopeTransactionStatus](#envelopetransactionstatus)
  * envelopes `array`: Set of envelope information
    * items [Envelopes](#envelopes)
  * lastQueriedDateTime `string`
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### errorDetails
* errorDetails `object`: This object describes errors that occur. It is only valid for responses, and ignored in requests.
  * errorCode `string`: An error code associated with the error.
  * message `string`: A short error message.

### eventNotification
* eventNotification `object`: Register a Connect webhook for a specific envelope
  * envelopeEvents `array`: A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property. 
    * items [envelopeEvent](#envelopeevent)
  * includeCertificateOfCompletion `string`: When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes. 
  * includeCertificateWithSoap `string`: When set to **true**, the Connect service will digitally sign the XML data. The signature will be included in the XML message.
  * includeDocumentFields `string`: When set to **true**, the Document Fields associated with the envelope's documents are included in the notification messages. Document Fields are optional custom name-value pairs added to documents using the API. 
  * includeDocuments `string`: When set to **true**, the XML webhook messages will include the envelope's PDF documents. Including the PDF documents will greatly increase the size of the notification messages. Ensure that your listener can handle incoming messages that are 25MB or larger. 
  * includeEnvelopeVoidReason `string`: When set to **true**, if the envelope is voided, the Connect Service notification will include the void reason, as entered by the person that voided the envelope. 
  * includeSenderAccountAsCustomField `string`: When set to **true**, Connect will include the sender account as Custom Field in the data.
  * includeTimeZone `string`: When set to **true**, the envelope's time zone information is included in the webhook messages. 
  * loggingEnabled `string`: When set to **true**, the webhook messages are logged. They can be viewed on the DocuSign Administration Web Tool in the Connect section. Logged messages can also be downloaded via the [ConnectEvents resource](https://developers.docusign.com/esign-rest-api/reference/Connect/ConnectEvents).
  * recipientEvents `array`: An array of recipient event statuses that will trigger Connect to send notifications to your webhook listener at the url endpoint specified in the `url` property. 
    * items [recipientEvent](#recipientevent)
  * requireAcknowledgment `string`: When set to **true**, the DocuSign Connect service checks that the message was received and retries on failures. 
  * signMessageWithX509Cert `string`: When set to **true**, Mutual TLS will be enabled for notifications. Mutual TLS must be initiated by the listener (the customer's web server) during the TLS handshake protocol. 
  * soapNameSpace `string`: The namespace of the SOAP interface.
  * url `string`: The endpoint to which webhook notification messages are sent via an HTTPS POST request. The url must start with https. The customer's web server must use an SSL/TLS certificate whose CA is in the Microsoft list of trusted CAs. Self-signed certificates are not ok. Free certificates from Let's Encrypt can be used.
  * useSoapInterface `string`: When set to **true**, the notifications are sent to your endpoint as SOAP requests. 

### eventResult
* eventResult `object`
  * eventTimestamp `string`
  * failureDescription `string`
  * status `string`: Event status.
  * vendorFailureStatusCode `string`

### expirations
* expirations `object`: A complex element that specifies the expiration settings for the envelope.
  * expireAfter `string`: An integer that sets the number of days the envelope is active.
  * expireEnabled `string`: When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
  * expireWarn `string`: An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.

### externalDocServiceErrorDetails
* externalDocServiceErrorDetails `object`
  * authenticationUrl `string`: Reserved: TBD
  * errorCode `string`
  * message `string`

### externalFile
* externalFile `object`
  * date `string`
  * id `string`
  * img `string`
  * name `string`
  * size `string`: Reserved: TBD
  * supported `string`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * uri `string`

### externalFolder
* externalFolder `object`
  * endPosition `string`: The last position in the result set. 
  * errorDetails [externalDocServiceErrorDetails](#externaldocserviceerrordetails)
  * id `string`
  * items `array`
    * items [externalFile](#externalfile)
  * name `string`
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### featureSet
* featureSet `object`
  * currencyFeatureSetPrices `array`: A complex type that contains alternate currency values that are configured for this plan feature set.
    * items [currencyFeatureSetPrice](#currencyfeaturesetprice)
  * envelopeFee `string`
  * featureSetId `string`: A unique ID for the feature set.
  * fixedFee `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isActive `string`
  * isEnabled `string`: Specifies whether the feature set is actively enabled as part of the plan.
  * name `string`
  * seatFee `string`: An incremental seat cost for seat-based plans. Only valid when isEnabled for the feature set is set to true.

### fileType
* fileType `object`
  * fileExtension `string`
  * mimeType `string`: The mime-type of a file type listed in a fileTypes collection.

### fileTypeList
* fileTypeList `object`
  * fileTypes `array`: A collection of file types.
    * items [fileType](#filetype)

### filter
* filter `object`
  * actionRequired `string`: Action required.
  * expires `string`
  * folderIds `string`
  * fromDateTime `string`
  * isTemplate `string`
  * order `string`: An optional value that sets the direction order used to sort the item list. 
  * orderBy `string`
  * searchTarget `string`
  * searchText `string`
  * status `string`: Filter status.
  * toDateTime `string`: Latest date to filter.

### firstName
* firstName `object`: A tab that displays the recipient's first name. This tab
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### folder
* folder `object`
  * errorDetails [errorDetails](#errordetails)
  * filter [filter](#filter)
  * folderId `string`: The ID of the folder being accessed.
  * folders `array`: A collection of folder objects returned in a response.
    * items [folder](#folder)
  * name `string`
  * ownerEmail `string`
  * ownerUserId `string`
  * ownerUserName `string`
  * parentFolderId `string`
  * parentFolderUri `string`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * uri `string`

### folderItem
* folderItem `object`
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items [customField_v2](#customfield_v2)
  * description `string`: A sender-defined description of the line item.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * name `string`
  * ownerName `string`: Name of the envelope owner.
  * pageCount `integer`
  * password `string`
  * senderEmail `string`
  * senderName `string`: Name of the envelope sender.
  * sentDateTime `string`: The date and time the envelope was sent.
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Item status. <!-- TODO -->
  * subject `string`
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * uri `string`

### folderItemResponse
* folderItemResponse `object`
  * endPosition `string`: The last position in the result set. 
  * folderItems `array`: A list of the envelopes in the specified folder or folders. 
    * items [folderItem_v2](#folderitem_v2)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalRows `string`

### folderItem_v2
* folderItem_v2 `object`
  * completedDateTime `string`: Specifies the date and time this item was completed.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * envelopeUri `string`: Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
  * expireDateTime `string`: The date and time the envelope is set to expire.
  * folderId `string`: The ID of the folder being accessed.
  * folderUri `string`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * isSignatureProviderEnvelope `string`
  * lastModifiedDateTime `string`: The date and time the item was last modified.
  * ownerName `string`
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * recipientsUri `string`: Contains a URI for an endpoint that you can use to retrieve the recipients.
  * senderCompany `string`
  * senderEmail `string`
  * senderName `string`
  * senderUserId `string`
  * sentDateTime `string`: The date and time the envelope was sent.
  * status `string`: Item status. <!-- TODO -->
  * subject `string`

### folderItemsResponse
* folderItemsResponse `object`
  * endPosition `string`: The last position in the result set. 
  * folderItems `array`: A list of the envelopes in the specified folder or folders. 
    * items [folderItem](#folderitem)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### foldersRequest
* foldersRequest `object`
  * envelopeIds `array`
    * items `string`
  * fromFolderId `string`:  The folder ID the envelope is being moved from.

### foldersResponse
* foldersResponse `object`
  * folders `array`: A collection of folder objects returned in a response.
    * items [folder](#folder)

### forgottenPasswordInformation
* forgottenPasswordInformation `object`: A complex element that has up to four Question/Answer pairs for forgotten password information.
  * forgottenPasswordAnswer1 `string`: The answer to the first forgotten password challenge question.
  * forgottenPasswordAnswer2 `string`: The answer to the second forgotten password challenge question.
  * forgottenPasswordAnswer3 `string`: The answer to the third forgotten password challenge question.
  * forgottenPasswordAnswer4 `string`: The answer to the fourth forgotten password challenge question.
  * forgottenPasswordQuestion1 `string`: The first challenge question presented to a user who has forgotten their password.
  * forgottenPasswordQuestion2 `string`: The second challenge question presented to a user who has forgotten their password.
  * forgottenPasswordQuestion3 `string`: The third challenge question presented to a user who has forgotten their password.
  * forgottenPasswordQuestion4 `string`: The fourth challenge question presented to a user who has forgotten their password.

### formulaTab
* formulaTab `object`: The value of a formula tab is calculated
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * formula `string`: Contains the formula
  * hidden `string`: If this is a regular formula (no `paymentDetails` property is present):
  * isPaymentAmount `string`: When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number. 
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * paymentDetails [paymentDetails](#paymentdetails)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * roundDecimalPlaces `string`
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### fullName
* fullName `object`: A tab that displays the recipient's full name.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### group
* group `object`: Information about groups.
  * errorDetails [errorDetails](#errordetails)
  * groupId `string`: The DocuSign group ID for the group.
  * groupName `string`: The name of the group.
  * groupType `string`: The group type.
  * permissionProfileId `string`: The ID of the permission profile associated with the group.
  * users `array`: List of users in the group.
    * items [userInfo](#userinfo)

### groupInformation
* groupInformation `object`
  * endPosition `string`: The last position in the result set. 
  * groups `array`: A collection group objects containing information about the groups returned.
    * items [group](#group)
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### idCheckInformationInput
* idCheckInformationInput `object`: A complex element that contains input information related to a recipient ID check. It can include the following information.
  * addressInformationInput [addressInformationInput](#addressinformationinput)
  * dobInformationInput [dobInformationInput](#dobinformationinput)
  * ssn4InformationInput [ssn4InformationInput](#ssn4informationinput)
  * ssn9InformationInput [ssn9InformationInput](#ssn9informationinput)

### inPersonSigner
* inPersonSigner `object`: An in-person recipient is a DocuSign user,
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * canSignOffline `string`: When set to **true**, specifies that the signer can perform the signing ceremony offline.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * creationReason `string`
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * defaultRecipient `string`: When set to **true**,
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: The signer's email address in an eNotary flow.
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * hostEmail `string`: The email address of the signing host.
  * hostName `string`: The name of the signing host.
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inPersonSigningType `string`: Specifies whether the envelope uses the eNotary feature.
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * name `string`: The signer's full legal name in an eNotary flow.
  * notaryHost [notaryHost](#notaryhost)
  * note `string`: A note sent to the in-person signer in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * recipientSignatureProviders `array`: The default signature provider is the DocuSign Electronic signature system. This parameter is used to specify one or more Standards Based Signature (digital signature) providers for the signer to use. [More information.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
    * items [recipientSignatureProvider](#recipientsignatureprovider)
  * recipientSuppliesTabs `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * requireSignOnPaper `string`: When set to **true**, the signer must print, sign, and upload or fax the signed documents to DocuSign.
  * requireSignerCertificate `string`: By default, DocuSign signers create electronic signatures. This field can be used to require the signer to use a SAFE-BioPharma digital certificate for signing.
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signInEachLocation `string`: When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab (instead of adopting a signature/initial style or only drawing a signature/initial once).
  * signatureInfo [recipientSignatureInformation](#recipientsignatureinformation)
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signerEmail `string`: The in-person signer's email address.
  * signerName `string`: The in-person signer's full legal name.
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### initialHere
* initialHere `object`: A tab that allows the recipient to initial the document. May
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * optional `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * scaleValue `number`:  Sets the size for the InitialHere tab. It can be value from 0.5 to 1.0, where 1.0 represents full size and 0.5 is 50% size.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### inlineTemplate
* inlineTemplate `object`
  * customFields [AccountCustomFields](#accountcustomfields)
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [document](#document)
  * envelope [Envelopes](#envelopes)
  * recipients [EnvelopeRecipients](#enveloperecipients)
  * sequence `string`: Specifies the order in which templates are overlaid.

### integratedUserInfoList
* integratedUserInfoList `object`
  * allUsersSelected `string`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * users `array`
    * items [userInfo](#userinfo)

### intermediary
* intermediary `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: Email id of the recipient. Notification of the document to sign is sent to this email id. 
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * lastName `string`
  * name `string`
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`: When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### jurisdiction
* jurisdiction `object`
  * allowSystemCreatedSeal `string`
  * allowUserUploadedSeal `string`
  * commissionIdInSeal `string`
  * county `string`
  * countyInSeal `string`
  * enabled `string`
  * jurisdictionId `string`
  * name `string`
  * notaryPublicInSeal `string`
  * stateNameInSeal `string`

### lastName
* lastName `object`: A tab that displays the recipient's last name. This tab
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### list
* list `object`: This tab offers a list of options to choose from.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * listItems `array`: The list of values that can be selected by senders. The list values are separated by semi-colons. Example: [one;two;three;four]
    * items [listItem](#listitem)
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * mergeField [mergeField](#mergefield)
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: The value to use when the item is selected.
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### listCustomField
* listCustomField `object`
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * errorDetails [errorDetails](#errordetails)
  * fieldId `string`: An ID used to specify a custom field.
  * listItems `array`
    * items `string`
  * name `string`: The name of the custom field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * show `string`: A boolean indicating if the value should be displayed.  If this value is set to **true**, the custom field is displayed at the top of the certificate of completion. If this value is left blank/ or set to **false**, then it does not appear in the certificate of completion. 
  * value `string`: The value of the custom field.

### listItem
* listItem `object`: One of the selectable items
  * selected `string`: When set to **true**, indicates that this item is the default selection shown to a signer. 
  * text `string`: Specifies the text that is shown in the dropdown list. 
  * value `string`: Specifies the value that is used when the list item is selected.

### lockInformation
* lockInformation `object`
  * errorDetails [errorDetails](#errordetails)
  * lockDurationInSeconds `string`: The number of seconds to lock the envelope for editing.  Must be greater than 0 seconds.
  * lockToken `string`: A unique identifier provided to the owner of the envelope lock.   Used to prove ownership of the lock.
  * lockType `string`: The type of envelope lock.  Currently "edit" is the only supported type.
  * lockedByApp `string`: A friendly name of the application used to lock the envelope.  Will be used in error messages to the user when lock conflicts occur.
  * lockedByUser [userInfo](#userinfo)
  * lockedUntilDateTime `string`: The datetime until the envelope lock expires.
  * useScratchPad `string`: Reserved for future use.

### lockRequest
* lockRequest `object`
  * lockDurationInSeconds `string`: The number of seconds to lock the envelope for editing.  Must be greater than 0 seconds.
  * lockType `string`: The type of envelope lock.  Currently "edit" is the only supported type.
  * lockedByApp `string`: A friendly name of the application used to lock the envelope.  Will be used in error messages to the user when lock conflicts occur.
  * templatePassword `string`
  * useScratchPad `string`: Reserved for future use.

### loginAccount
* loginAccount `object`
  * accountId `string`: The account ID associated with the envelope.
  * accountIdGuid `string`: The GUID associated with the account ID.
  * baseUrl `string`: The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
  * email `string`: The email address for the user.
  * isDefault `string`: This value is true if this is the default account for the user, otherwise false is returned.
  * loginAccountSettings `array`: A list of settings on the acccount that indicate what features are available.
    * items [nameValue](#namevalue)
  * loginUserSettings `array`: A list of user-level settings that indicate what user-specific features are available.
    * items [nameValue](#namevalue)
  * name `string`: The name associated with the account.
  * siteDescription `string`: An optional descirption of the site that hosts the account.
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userName `string`: The name of this user as defined by the account.

### loginInformation
* loginInformation `object`
  * apiPassword `string`: Contains a token that can be used for authentication in API calls instead of using the user name and password.
  * loginAccounts `array`: The list of accounts that authenticating user is a member of.
    * items [loginAccount](#loginaccount)

### matchBox
* matchBox `object`
  * height `integer`: Height of the tab in pixels.
  * pageNumber `integer`: Specifies the page number on which the tab is located.
  * width `integer`: Width of the tab in pixels.
  * xPosition `integer`: This indicates the horizontal offset of the object on the page.
  * yPosition `integer`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### memberGroupSharedItem
* memberGroupSharedItem `object`: Information about items shared among groups.
  * errorDetails [errorDetails](#errordetails)
  * group [group](#group)
  * shared `string`: How the item is shared. One of:

### memberSharedItems
* memberSharedItems `object`: Information about shared items.
  * envelopes `array`: List of information about shared envelopes.
    * items [sharedItem](#shareditem)
  * errorDetails [errorDetails](#errordetails)
  * templates `array`: List of information about shared templates.
    * items [templateSharedItem](#templateshareditem)
  * user [userInfo](#userinfo)

### mergeField
* mergeField `object`: Contains information for transfering values between Salesforce data fields and DocuSign Tabs.
  * allowSenderToEdit `string`: When set to **true**, the sender can modify the value of the custom tab during the sending process.
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * path `string`: Sets the object associated with the custom tab. Currently this is the Salesforce Object.
  * row `string`: Specifies the row number in a Salesforce table that the merge field value corresponds to.
  * writeBack `string`: When wet to true, the information entered in the tab automatically updates the related Salesforce data when an envelope is completed.

### mobileNotifierConfiguration
* mobileNotifierConfiguration `object`
  * deviceId `string`
  * errorDetails [errorDetails](#errordetails)
  * platform `string`: The Platform of the client application

### mobileNotifierConfigurationInformation
* mobileNotifierConfigurationInformation `object`
  * mobileNotifierConfigurations `array`
    * items [mobileNotifierConfiguration](#mobilenotifierconfiguration)

### money
* money `object`: Describes information
  * amountInBaseUnit `string`: The total payment amount
  * currency `string`: The three-letter
  * displayAmount `string`: The payment amount as displayed

### nameValue
* nameValue `object`
  * errorDetails [errorDetails](#errordetails)
  * name `string`: The name or key of a name/value pair.
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * value `string`: The value field of a name/value pair.

### newAccountDefinition
* newAccountDefinition `object`
  * PaymentProcessorInformation [paymentProcessorInformation](#paymentprocessorinformation)
  * accountName `string`: The account name for the new account.
  * accountSettings `array`: The list of
    * items [nameValue](#namevalue)
  * addressInformation [accountAddress](#accountaddress)
  * creditCardInformation [creditCardInformation](#creditcardinformation)
  * distributorCode `string`: The code that identifies the billing plan groups and plans for the new account.
  * distributorPassword `string`: The password for the distributorCode.
  * initialUser [Users](#users)
  * planInformation [planInformation](#planinformation)
  * referralInformation [referralInformation](#referralinformation)
  * socialAccountInformation [UserSocialAccountLogins](#usersocialaccountlogins)

### newAccountSummary
* newAccountSummary `object`
  * accountId `string`: The account ID associated with the envelope.
  * accountIdGuid `string`: The GUID associated with the account ID.
  * accountName `string`: The account name for the new account.
  * apiPassword `string`: Contains a token that can be used for authentication in API calls instead of using the user name and password.
  * baseUrl `string`: The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
  * billingPlanPreview [billingPlanPreview](#billingplanpreview)
  * userId `string`: Specifies the user ID of the new user.

### newUser
* newUser `object`
  * apiPassword `string`: Contains a token that can be used for authentication in API calls instead of using the user name and password.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * email `string`
  * errorDetails [errorDetails](#errordetails)
  * permissionProfileId `string`
  * permissionProfileName `string`
  * uri `string`
  * userId `string`: Specifies the user ID for the new user.
  * userName `string`
  * userStatus `string`: Status of the user's account. One of:

### newUsersDefinition
* newUsersDefinition `object`
  * newUsers `array`
    * items [Users](#users)

### newUsersSummary
* newUsersSummary `object`
  * newUsers `array`
    * items [newUser](#newuser)

### notarize
* notarize `object`: A tab that alerts notary recipients that
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`
  * documentId `string`: The ID of the document being accessed.
  * errorDetails [errorDetails](#errordetails)
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * mergeField [mergeField](#mergefield)
  * pageNumber `string`: The page number being accessed.
  * recipientId `string`: The `recipientId` used when the envelope or template was created.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### notaryHost
* notaryHost `object`: This object is used only when `inPersonSigningType` in the `inPersonSigner` object is `notary`.
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: The notary's email address.
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * faxNumber `string`: Reserved:
  * hostRecipientId `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * name `string`: The notary's full legal name.
  * note `string`: A note sent to the notary in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Indicates the envelope status. Valid values are:
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### notaryJournal
* notaryJournal `object`
  * createdDate `string`
  * documentName `string`
  * jurisdiction [jurisdiction](#jurisdiction)
  * notaryJournalId `string`
  * notaryJournalMetaData [notaryJournalMetaData](#notaryjournalmetadata)
  * signerName `string`: The in-person signer's full legal name.

### notaryJournalCredibleWitness
* notaryJournalCredibleWitness `object`
  * address `string`
  * name `string`
  * signatureImage `string`

### notaryJournalList
* notaryJournalList `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * notaryJournals `array`
    * items [NotaryJournals](#notaryjournals)
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### notaryJournalMetaData
* notaryJournalMetaData `object`
  * comment `string`
  * credibleWitnesses `array`
    * items [notaryJournalCredibleWitness](#notaryjournalcrediblewitness)
  * signatureImage `string`
  * signerIdType `string`

### note
* note `object`: A tab that displays additional information, in the form of a
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `integer`: Height of the tab in pixels.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### notification
* notification `object`: A complex element that specifies the notification options for the envelope. It consists of:
  * expirations [expirations](#expirations)
  * reminders [reminders](#reminders)
  * useAccountDefaults `string`: When set to **true**, the account default notification settings are used for the envelope.

### number
* number `object`: A tab that allows the recipient to enter numbers and decimal
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * formula `string`: Contains the formula
  * isPaymentAmount `string`: When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number. 
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### oauthAccess
* oauthAccess `object`
  * access_token `string`: Access token information.
  * data `array`
    * items [nameValue](#namevalue)
  * expires_in `string`
  * refresh_token `string`
  * scope `string`: Must be set to "api".
  * token_type `string`

### page
* page `object`: Description of a page of a document.
  * dpi `string`: The number of dots per inch used for the page image.
  * errorDetails [errorDetails](#errordetails)
  * height `string`: Height of the tab in pixels.
  * imageBytes `string`
  * mimeType `string`
  * pageId `string`
  * sequence `string`
  * width `string`: Width of the tab in pixels.

### pageImages
* pageImages `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * pages `array`
    * items [page](#page)
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### pageRequest
* pageRequest `object`
  * password `string`
  * rotate `string`: Sets the direction the page image is rotated. The possible settings are: left or right

### paymentDetails
* paymentDetails `object`: When a formula tab
  * allowedPaymentMethods `array`: An array of accepted payment methods:
    * items `string`
  * chargeId `string`: The GUID set by the payment gateway (such as Stripe) that identifies a transaction. The `chargeId` is created when authorizing a payment and must be referenced when completing a payment.
  * currencyCode `string`: Specifies the three-letter
  * gatewayAccountId `string`: A GUID that identifies the payment gateway
  * gatewayDisplayName `string`: Display name of the gateway connected to sender's Docusign account.
  * gatewayName `string`: Name of the gateway connected to sender's DocuSign account.
  * lineItems `array`: A payment formula can have
    * items [paymentLineItem](#paymentlineitem)
  * paymentOption `string`
  * status `string`: This read-only property describes the status of a payment.
  * total [money](#money)

### paymentGatewayAccount
* paymentGatewayAccount `object`
  * displayName `string`
  * paymentGateway `string`: Payment gateway used by the connected gateway account.
  * paymentGatewayAccountId `string`: A GUID that identifies the payment gateway account. For a human-readable version use `displayName`.
  * paymentGatewayDisplayName `string`: Display name of the payment gateway used by the connected gateway account.

### paymentGatewayAccountsInfo
* paymentGatewayAccountsInfo `object`: Holds information about connected payment accounts.
  * paymentGatewayAccounts `array`: A list of payment gateway accounts.
    * items [PaymentGatewayAccounts](#paymentgatewayaccounts)

### paymentLineItem
* paymentLineItem `object`: A line item describes details
  * amountReference `string`: This is a the `tabLabel`
  * description `string`: A sender-defined description of the line item.
  * itemCode `string`: This is the sender-defined
  * name `string`: This is a sender-defined

### paymentProcessorInformation
* paymentProcessorInformation `object`
  * address [addressInformation](#addressinformation)
  * billingAgreementId `string`
  * email `string`

### permissionProfile
* permissionProfile `object`
  * modifiedByUsername `string`
  * modifiedDateTime `string`
  * permissionProfileId `string`
  * permissionProfileName `string`
  * settings [accountRoleSettings](#accountrolesettings)
  * userCount `string`
  * users `array`
    * items [Users](#users)

### permissionProfileInformation
* permissionProfileInformation `object`
  * permissionProfiles `array`: A complex type containing a collection of permission profiles.
    * items [AccountPermissionProfiles](#accountpermissionprofiles)

### planInformation
* planInformation `object`: An object used to identify the features and attributes of the account being created.
  * addOns `array`: Reserved:
    * items [addOn](#addon)
  * currencyCode `string`: Specifies the ISO currency code for the account.
  * freeTrialDaysOverride `string`: Reserved for DocuSign use only.
  * planFeatureSets `array`: A complex type that sets the feature sets for the account.
    * items [featureSet](#featureset)
  * planId `string`: The DocuSign Plan ID for the account.
  * recipientDomains `array`
    * items [recipientDomain](#recipientdomain)

### powerForm
* powerForm `object`
  * createdBy `string`
  * createdDateTime `string`: Indicates the date and time the item was created.
  * emailBody `string`: Specifies the email body of the message sent to the recipient. 
  * emailSubject `string`: Specifies the subject of the email that is sent to all recipients.
  * envelopes `array`
    * items [Envelopes](#envelopes)
  * errorDetails [errorDetails](#errordetails)
  * instructions `string`
  * isActive `string`
  * lastUsed `string`
  * limitUseInterval `string`
  * limitUseIntervalEnabled `string`
  * limitUseIntervalUnits `string`
  * maxUseEnabled `string`
  * name `string`
  * powerFormId `string`
  * powerFormUrl `string`
  * recipients `array`
    * items [powerFormRecipient](#powerformrecipient)
  * senderName `string`
  * senderUserId `string`
  * signingMode `string`
  * templateId `string`: The ID of the template being accessed.
  * templateName `string`
  * timesUsed `string`
  * uri `string`
  * usesRemaining `string`

### powerFormFormDataEnvelope
* powerFormFormDataEnvelope `object`
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * recipients `array`
    * items [powerFormFormDataRecipient](#powerformformdatarecipient)

### powerFormFormDataRecipient
* powerFormFormDataRecipient `object`
  * email `string`
  * formData `array`
    * items [nameValue](#namevalue)
  * name `string`
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.

### powerFormRecipient
* powerFormRecipient `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * accessCodeLocked `string`
  * accessCodeRequired `string`
  * email `string`
  * emailLocked `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckRequired `string`
  * name `string`
  * recipientType `string`
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * templateRequiresIdLookup `string`
  * userNameLocked `string`

### powerFormSendersResponse
* powerFormSendersResponse `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * powerFormSenders `array`
    * items [userInfo](#userinfo)
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### powerFormsFormDataResponse
* powerFormsFormDataResponse `object`
  * envelopes `array`
    * items [PowerFormData](#powerformdata)

### powerFormsRequest
* powerFormsRequest `object`
  * powerForms `array`
    * items [PowerForms](#powerforms)

### powerFormsResponse
* powerFormsResponse `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * powerForms `array`
    * items [PowerForms](#powerforms)
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.

### propertyMetadata
* propertyMetadata `object`
  * options `array`
    * items `string`
  * rights `string`

### province
* province `object`
  * isoCode `string`
  * name `string`

### provisioningInformation
* provisioningInformation `object`
  * defaultConnectionId `string`
  * defaultPlanId `string`
  * distributorCode `string`: The code that identifies the billing plan groups and plans for the new account.
  * distributorPassword `string`: The password for the distributorCode.
  * passwordRuleText `string`
  * planPromotionText `string`
  * purchaseOrderOrPromAllowed `string`

### purchasedEnvelopesInformation
* purchasedEnvelopesInformation `object`
  * amount `string`: The total amount of the purchase.
  * appName `string`: The AppName of the client application.
  * currencyCode `string`: Specifies the ISO currency code of the purchase. This is based on the ISO 4217 currency code information.
  * platform `string`: The Platform of the client application
  * productId `string`: The Product ID from the AppStore.
  * quantity `string`: The quantity of envelopes to add to the account.
  * receiptData `string`: The encrypted Base64 encoded receipt data.
  * storeName `string`: The name of the AppStore.
  * transactionId `string`: Specifies the Transaction ID from the AppStore.

### radio
* radio `object`: One of the selectable radio buttons
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * errorDetails [errorDetails](#errordetails)
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * selected `string`: When set to **true**, the radio button is selected.
  * tabId `string`: The unique identifier for the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * value `string`: Specifies the value of the tab. 
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### radioGroup
* radioGroup `object`: This group tab is used to place radio buttons on a document.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * groupName `string`: The name of the group. The search_text provided in the call automatically performs a wild card search on group_name.
  * radios `array`: Specifies the locations and status for radio buttons that are grouped together.
    * items [radio](#radio)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * shared `string`: When set to **true**, this custom tab is shared.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`

### recipientAttachment
* recipientAttachment `object`
  * attachmentId `string`
  * attachmentType `string`
  * data `string`
  * label `string`
  * name `string`
  * remoteUrl `string`

### recipientDomain
* recipientDomain `object`
  * active `string`
  * domainCode `string`
  * domainName `string`
  * recipientDomainId `string`

### recipientEmailNotification
* recipientEmailNotification `object`
  * emailBody `string`: Not applicable
  * emailSubject `string`: Not applicable
  * supportedLanguage `string`: Specifies the language used to localize Electronic Seals UI texts such as "Sealed by", etc.  

### recipientEvent
* recipientEvent `object`
  * includeDocuments `string`: reserved
  * recipientEventStatusCode `string`: Send a webhook notification for the following recipient statuses: Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.

### recipientFormData
* recipientFormData `object`
  * declinedTime `string`
  * deliveredTime `string`
  * email `string`
  * formData `array`
    * items [nameValue](#namevalue)
  * name `string`
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * sentTime `string`
  * signedTime `string`

### recipientNamesResponse
* recipientNamesResponse `object`
  * multipleUsers `string`: Indicates whether email address is used by more than one user.
  * recipientNames `array`
    * items `string`
  * reservedRecipientEmail `string`

### recipientPhoneAuthentication
* recipientPhoneAuthentication `object`: A complex type that Contains the elements:
  * recipMayProvideNumber `string`: Boolean. When set to **true**, the recipient can supply a phone number their choice.
  * recordVoicePrint `string`: Reserved.
  * senderProvidedNumbers `array`: An Array containing a list of phone numbers the recipient may use for SMS text authentication. 
    * items `string`
  * validateRecipProvidedNumber `string`:  Reserved.

### recipientSAMLAuthentication
* recipientSAMLAuthentication `object`: Contains the name/value pair information for the SAML assertion attributes:
  * samlAssertionAttributes `array`
    * items [samlAssertionAttribute](#samlassertionattribute)

### recipientSMSAuthentication
* recipientSMSAuthentication `object`: Contains the element senderProvidedNumbers which is an Array  of phone numbers the recipient can use for SMS text authentication.
  * senderProvidedNumbers `array`: An Array containing a list of phone numbers the recipient may use for SMS text authentication. 
    * items `string`

### recipientSignatureInformation
* recipientSignatureInformation `object`: Allows the sender to pre-specify the signature name, signature initials and signature font used in the signature stamp for the recipient.
  * fontStyle `string`
  * signatureInitials `string`
  * signatureName `string`: Specifies the user signature name.

### recipientSignatureProvider
* recipientSignatureProvider `object`: An Electronic or Standards Based Signature (digital signature) provider for the signer to use. [More information](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures).
  * sealDocumentsWithTabsOnly `string`: By default, electronic seals apply on all documents in an envelope. If any of the documents has a `signHere` tab, then a visual representation of the electronic seal will show up in the final document. If not, the electronic seal will be visible in the metadata but not in the content of the document.
  * sealName `string`: Indicates the name of the electronic seal to apply on documents.
  * signatureProviderName `string`: The name of an Electronic or Standards Based Signature (digital signature) provider for the signer to use. [The current provider list.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
  * signatureProviderOptions [recipientSignatureProviderOptions](#recipientsignatureprovideroptions)

### recipientSignatureProviderOptions
* recipientSignatureProviderOptions `object`: Option settings for the signature provider. Different providers require or use different options. [The current provider list and the options they require.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
  * cpfNumber `string`: Reserved for DocuSign
  * oneTimePassword `string`: A pre-shared secret that the signer must enter to complete the signing process. Eg last six digits of the signer's government ID or Social Security number. Or a newly created pre-shared secret for the transaction. Note: some signature providers may require an exact (case-sensitive) match if alphabetic characters are included in the field.
  * signerRole `string`: The role or capacity of the signing recipient. Examples: Manager, Approver, etc.
  * sms `string`: The mobile phone number used to send the recipient an access code for the signing ceremony. Format: a string starting with +, then the country code followed by the full mobile phone number without any spaces or special characters. Omit leading zeroes before a city code. Examples: +14155551234, +97235551234, +33505551234.

### recipientUpdateResponse
* recipientUpdateResponse `object`
  * errorDetails [errorDetails](#errordetails)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)

### recipientViewRequest
* recipientViewRequest `object`
  * assertionId `string`: A unique identifier of the authentication event executed by the client application.
  * authenticationInstant `string`: A sender generated value that indicates the date/time that the signer was authenticated.
  * authenticationMethod `string`: Required. Choose a value that most closely matches the technique your application used to authenticate the recipient / signer. 
  * clientUserId `string`: A sender created value. If provided, the recipient is treated as an embedded (captive) recipient or signer.
  * email `string`: Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
  * pingFrequency `string`: Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
  * pingUrl `string`: A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * returnUrl `string`: The URL that the recipient is redirected to
  * securityDomain `string`: The domain in which the user authenticated.
  * userId `string`: Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. 
  * userName `string`: Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient.
  * xFrameOptions `string`
  * xFrameOptionsAllowFromUrl `string`

### recipients
* recipients `object`
  * agents `array`: A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
    * items [agent](#agent)
  * carbonCopies `array`: A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
    * items [carbonCopy](#carboncopy)
  * certifiedDeliveries `array`: A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
    * items [certifiedDelivery](#certifieddelivery)
  * currentRoutingOrder `string`
  * editors `array`
    * items [editor](#editor)
  * errorDetails [errorDetails](#errordetails)
  * inPersonSigners `array`: Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
    * items [inPersonSigner](#inpersonsigner)
  * intermediaries `array`: Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
    * items [intermediary](#intermediary)
  * recipientCount `string`: The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:
  * seals `array`
    * items [sealSign](#sealsign)
  * signers `array`: A complex type containing information about the Signer recipient.
    * items [signer](#signer)

### recipientsUpdateSummary
* recipientsUpdateSummary `object`
  * recipientUpdateResults `array`
    * items [recipientUpdateResponse](#recipientupdateresponse)

### referralInformation
* referralInformation `object`: A complex type that contains the following information for entering referral and discount information. The following items are included in the referral information (all string content): enableSupport, includedSeats, saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, saleDiscountSeatPriceOverride, planStartMonth, referralCode, referrerName, advertisementId, publisherId, shopperId, promoCode, groupMemberId, idType, and industry 
  * advertisementId `string`: A complex type that contains the following information for entering referral and discount information. The following items are included in the referral information (all string content): enableSupport, includedSeats, saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, saleDiscountSeatPriceOverride, planStartMonth, referralCode, referrerName, advertisementId, publisherId, shopperId, promoCode, groupMemberId, idType, and industry.
  * enableSupport `string`: When set to **true**, then customer support is provided as part of the account plan.
  * externalOrgId `string`
  * groupMemberId `string`
  * idType `string`
  * includedSeats `string`: The number of seats (users) included.
  * industry `string`
  * planStartMonth `string`
  * promoCode `string`
  * publisherId `string`
  * referralCode `string`
  * referrerName `string`
  * saleDiscountAmount `string`: Reserved for DocuSign use only.
  * saleDiscountFixedAmount `string`: Reserved for DocuSign use only.
  * saleDiscountPercent `string`: Reserved for DocuSign use only.
  * saleDiscountPeriods `string`: Reserved for DocuSign use only.
  * saleDiscountSeatPriceOverride `string`: Reserved for DocuSign use only.
  * shopperId `string`

### reminders
* reminders `object`: A complex element that specifies reminder settings for the envelope
  * reminderDelay `string`: An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.
  * reminderEnabled `string`: When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
  * reminderFrequency `string`: An interger that sets the interval, in days, between reminder emails.

### resourceInformation
* resourceInformation `object`
  * resources `array`
    * items [nameValue](#namevalue)

### returnUrlRequest
* returnUrlRequest `object`: The request body for the EnvelopeViews: createSender method.
  * returnUrl `string`: Your app's return url that the user will be redirected to after sending the envelope or completing the sending/tagging view. Query parameters `envelopeId` and `event` will be added to the URL. The event parameter values: 

### revision
* revision `object`
  * endData `string`
  * fieldName `string`
  * maxSignatureLength `string`
  * signatureType `string`
  * startData `string`

### samlAssertionAttribute
* samlAssertionAttribute `object`
  * errorDetails [errorDetails](#errordetails)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * value `string`: The value associated with the named SAML assertion attribute

### seal
* seal `object`: Set of information related to the electronic seal used by the Trust Service Provider (TSP).
  * configuration `object`: Electronic seal configuration  properties
  * sealIdentifier `string`: Electronic Seal identifier

### sealIdentifier
* sealIdentifier `object`
  * sealDisplayName `string`
  * sealName `string`

### sealSign
* sealSign `object`: Specifies one or more electronic seals to apply on  documents. 
  * accessCode `string`: Not applicable
  * addAccessCodeToEmail `string`: Not applicable
  * clientUserId `string`: Not applicable
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: Not applicable
  * declinedReason `string`: Not applicable
  * deliveredDateTime `string`: Not applicable
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`: Not applicable
    * items [documentVisibility](#documentvisibility)
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * faxNumber `string`: Reserved:
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * name `string`
  * note `string`: Not applicable
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Not applicable
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: (Required) The `recipientId` used when the envelope or template was created.
  * recipientIdGuid `string`
  * recipientSignatureProviders `array`: (Required) Indicates which electronic seal to apply on documents when creating an envelope.
    * items [recipientSignatureProvider](#recipientsignatureprovider)
  * requireIdLookup `string`: Not applicable
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: (Optional, default: 1) 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: Not applicable
  * signedDateTime `string`: Not applicable
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Item status. <!-- TODO -->
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`: Not applicable
  * userId `string`: Not applicable

### seatDiscount
* seatDiscount `object`
  * beginSeatCount `string`: Reserved: TBD
  * discountPercent `string`
  * endSeatCount `string`: Reserved: TBD

### sender
* sender `object`
  * accountIdGuid `string`: The GUID associated with the account ID.
  * companyName `string`: The name of the user's Company.

### senderEmailNotifications
* senderEmailNotifications `object`
  * changedSigner `string`: When set to **true**, the sender receives notification if the signer changes.
  * commentsOnlyPrivateAndMention `string`
  * commentsReceiveAll `string`
  * deliveryFailed `string`: When set to **true**, the sender receives notification if the delivery of the envelope fails.
  * envelopeComplete `string`: When set to **true**, the user receives notification that the envelope has been completed.
  * offlineSigningFailed `string`: When set to **true**, the user receives notification if the offline signing failed.
  * recipientViewed `string`: When set to **true**, the sender receives notification that the recipient viewed the enveloper.
  * senderEnvelopeDeclined `string`
  * withdrawnConsent `string`: When set to **true**, the user receives notification if consent is withdrawn.

### serverTemplate
* serverTemplate `object`
  * sequence `string`
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 

### serviceInformation
* serviceInformation `object`
  * buildBranch `string`: Reserved: TBD
  * buildBranchDeployedDateTime `string`: Reserved: TBD
  * buildSHA `string`: Reserved: TBD
  * buildVersion `string`: Reserved: TBD
  * linkedSites `array`
    * items `string`
  * serviceVersions `array`
    * items [serviceVersion](#serviceversion)

### serviceVersion
* serviceVersion `object`
  * version `string`: The version of the rest API.
  * versionUrl `string`

### settingsMetadata
* settingsMetadata `object`
  * is21CFRPart11 `string`: When set to **true**, indicates that this module is enabled on the account.
  * options `array`
    * items `string`
  * rights `string`
  * uiHint `string`
  * uiOrder `string`
  * uiType `string`

### sharedItem
* sharedItem `object`: Information about the shared item.
  * errorDetails [errorDetails](#errordetails)
  * shared `string`: How the item is shared. One of:
  * user [userInfo](#userinfo)

### signHashDocument
* signHashDocument `object`
  * data `string`
  * documentId `string`: The ID of the document being accessed.
  * format `string`
  * name `string`
  * remainingSignatures `string`
  * revisions `array`
    * items [revision](#revision)
  * signatureType `string`

### signHashSessionInfoResponse
* signHashSessionInfoResponse `object`
  * documents `array`: Complex element contains the details on the documents in the envelope.
    * items [signHashDocument](#signhashdocument)
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * language `string`: Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). 
  * redirectionUrl `string`
  * remainingSignatureRequests `string`
  * seal [seal](#seal)
  * user [user](#user)

### signHere
* signHere `object`: A tab that allows the recipient to sign a document. May be
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * optional `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * scaleValue `number`
  * stampType `string`
  * stampTypeMetadata [propertyMetadata](#propertymetadata)
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page.

### signSessionInfoRequest
* signSessionInfoRequest `object`
  * certificate `string`: When set to **false**, the envelope signing certificate is removed from the download.
  * returnFormat `string`
  * signingLocation `string`: Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.

### signatureDataInfo
* signatureDataInfo `object`
  * documentSecurityStore [documentSecurityStore](#documentsecuritystore)
  * signatureData `string`
  * signatureFieldName `string`

### signatureProviderRequiredOption
* signatureProviderRequiredOption `object`
  * requiredSignatureProviderOptionIds `array`
    * items `string`
  * signerType `string`

### signatureType
* signatureType `object`
  * isDefault `string`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.

### signer
* signer `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * addAccessCodeToEmail `string`: This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
  * agentCanEditEmail `string`
  * agentCanEditName `string`
  * autoNavigation `string`: Specifies whether auto navigation is set for the recipient.
  * bulkRecipientsUri `string`: Contains a URI for an endpoint that allows you to easily retrieve bulk recipient information.
  * canSignOffline `string`: When set to **true**, specifies that the signer can perform the signing ceremony offline.
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * creationReason `string`
  * customFields `array`: An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
    * items `string`
  * declinedDateTime `string`: The date and time the recipient declined the document.
  * declinedReason `string`: The reason the recipient declined the document.
  * defaultRecipient `string`: When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient.
  * deliveredDateTime `string`: Reserved: For DocuSign use only.
  * deliveryMethod `string`: Reserved: For DocuSign use only.
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)
  * email `string`: Email id of the recipient. Notification of the document to sign is sent to this email id. 
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * emailRecipientPostSigningURL `string`
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * errorDetails [errorDetails](#errordetails)
  * excludedDocuments `array`: Specifies the documents that are not visible to this recipient. Document Visibility must be enabled for the account and the `enforceSignerVisibility` property must be set to **true** for the envelope to use this.
    * items `string`
  * faxNumber `string`: Reserved:
  * firstName `string`: The user's first name. 
  * fullName `string`
  * idCheckConfigurationName `string`: Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account. These names can also be found in the web console sending interface in the Identify list for a recipient. This setting overrides any default authentication setting.
  * idCheckInformationInput [idCheckInformationInput](#idcheckinformationinput)
  * inheritEmailNotificationConfiguration `string`: When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
  * isBulkRecipient `string`: When set to **true**, this signer is a bulk recipient and the recipient information is contained in a bulk recipient file. 
  * lastName `string`
  * name `string`
  * note `string`: A note sent to the recipient in the signing email.
  * phoneAuthentication [recipientPhoneAuthentication](#recipientphoneauthentication)
  * recipientAttachments `array`: Reserved:
    * items [recipientAttachment](#recipientattachment)
  * recipientAuthenticationStatus [authenticationStatus](#authenticationstatus)
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * recipientIdGuid `string`
  * recipientSignatureProviders `array`: The default signature provider is the DocuSign Electronic signature system. This parameter is used to specify one or more Standards Based Signature (digital signature) providers for the signer to use. [More information.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
    * items [recipientSignatureProvider](#recipientsignatureprovider)
  * recipientSuppliesTabs `string`
  * requireIdLookup `string`: When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
  * requireSignOnPaper `string`: When set to **true**, the signer must print, sign, and upload or fax the signed documents to DocuSign.
  * requireSignerCertificate `string`: By default, DocuSign signers create electronic signatures. This field can be used to require the signer to use a SAFE-BioPharma digital certificate for signing.
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * samlAuthentication [recipientSAMLAuthentication](#recipientsamlauthentication)
  * sentDateTime `string`: The date and time the envelope was sent.
  * signInEachLocation `string`: When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab (instead of adopting a signature/initial style or only drawing a signature/initial once).
  * signatureInfo [recipientSignatureInformation](#recipientsignatureinformation)
  * signedDateTime `string`: Reserved: For DocuSign use only. 
  * signingGroupId `string`
  * signingGroupName `string`: The display name for the signing group. 
  * signingGroupUsers `array`: A complex type that contains information about users in the signing group.
    * items [userInfo](#userinfo)
  * smsAuthentication [recipientSMSAuthentication](#recipientsmsauthentication)
  * socialAuthentications `array`:  Lists the social ID type that can be used for recipient authentication.
    * items [socialAuthentication](#socialauthentication)
  * status `string`: Recipient status.
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * totalTabCount `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### signerAttachment
* signerAttachment `object`: A tab that allows the recipient to attach supporting
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * mergeField [mergeField](#mergefield)
  * name `string`
  * optional `string`
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * scaleValue `number`
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### signerEmailNotifications
* signerEmailNotifications `object`: An array of email notifications that specifies the email the user receives when they are a sender. When the specific email notification is set to true, the user receives those types of email notifications from DocuSign. The user inherits the default account sender email notification settings when the user is created.
  * agentNotification `string`: When set to **true**, the user receives agent notification emails.
  * carbonCopyNotification `string`: When set to **true**, the user receives notifications of carbon copy deliveries.
  * certifiedDeliveryNotification `string`: When set to **true**, the user receives notifications of certified deliveries.
  * commentsOnlyPrivateAndMention `string`
  * commentsReceiveAll `string`
  * documentMarkupActivation `string`: When set to **true**, the user receives notification that document markup has been activated.
  * envelopeActivation `string`: When set to **true**, the user receives notification that the envelope has been activated.
  * envelopeComplete `string`: When set to **true**, the user receives notification that the envelope has been completed.
  * envelopeCorrected `string`: When set to **true**, the user receives notification that the envelope has been corrected.
  * envelopeDeclined `string`: When set to **true**, the user receives notification that the envelope has been declined.
  * envelopeVoided `string`: When set to **true**, the user receives notification that the envelope has been voided.
  * faxReceived `string`: Reserved:
  * offlineSigningFailed `string`: When set to **true**, the user receives notification if the offline signing failed.
  * purgeDocuments `string`: When set to **true**, the user receives notification of document purges.
  * reassignedSigner `string`: When set to **true**, the user receives notification that the envelope has been reassigned.
  * whenSigningGroupMember `string`

### signingGroup
* signingGroup `object`
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdBy `string`
  * errorDetails [errorDetails](#errordetails)
  * groupEmail `string`
  * groupName `string`: The name of the group. The search_text provided in the call automatically performs a wild card search on group_name.
  * groupType `string`: The group type.
  * modified `string`
  * modifiedBy `string`
  * signingGroupId `string`
  * users `array`
    * items [signingGroupUser](#signinggroupuser)

### signingGroupInformation
* signingGroupInformation `object`
  * groups `array`: A collection group objects containing information about the groups returned.
    * items [SigningGroups](#signinggroups)

### signingGroupUser
* signingGroupUser `object`
  * email `string`
  * errorDetails [errorDetails](#errordetails)
  * userName `string`: The name of the group member. 

### signingGroupUsers
* signingGroupUsers `object`
  * users `array`
    * items [signingGroupUser](#signinggroupuser)

### socialAccountInformation
* socialAccountInformation `object`
  * email `string`
  * errorDetails [errorDetails](#errordetails)
  * provider `string`: The social account provider (Facebook, Yahoo, etc.)
  * socialId `string`: The ID provided by the Socal Account.
  * userName `string`

### socialAuthentication
* socialAuthentication `object`
  * authentication `string`: Reserved: TBD

### ssn
* ssn `object`: A one-line field that allows the recipient to enter a Social
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### ssn4InformationInput
* ssn4InformationInput `object`
  * displayLevelCode `string`: Specifies the display level for the recipient. 
  * receiveInResponse `string`: When set to **true**, the information needs to be returned in the response.
  * ssn4 `string`: The last four digits of the recipient's Social Security Number (SSN).

### ssn9InformationInput
* ssn9InformationInput `object`
  * displayLevelCode `string`: Specifies the display level for the recipient. 
  * ssn9 `string`:  The recipient's Social Security Number(SSN).

### supportedLanguages
* supportedLanguages `object`
  * languages `array`
    * items [nameValue](#namevalue)

### tabAccountSettings
* tabAccountSettings `object`
  * allowTabOrder `string`
  * allowTabOrderMetadata [settingsMetadata](#settingsmetadata)
  * approveDeclineTabsEnabled `string`
  * approveDeclineTabsMetadata [settingsMetadata](#settingsmetadata)
  * calculatedFieldsEnabled `string`
  * calculatedFieldsMetadata [settingsMetadata](#settingsmetadata)
  * checkboxTabsEnabled `string`
  * checkboxTabsMetadata [settingsMetadata](#settingsmetadata)
  * dataFieldRegexEnabled `string`
  * dataFieldRegexMetadata [settingsMetadata](#settingsmetadata)
  * dataFieldSizeEnabled `string`
  * dataFieldSizeMetadata [settingsMetadata](#settingsmetadata)
  * firstLastEmailTabsEnabled `string`
  * firstLastEmailTabsMetadata [settingsMetadata](#settingsmetadata)
  * listTabsEnabled `string`
  * listTabsMetadata [settingsMetadata](#settingsmetadata)
  * noteTabsEnabled `string`
  * noteTabsMetadata [settingsMetadata](#settingsmetadata)
  * radioTabsEnabled `string`
  * radioTabsMetadata [settingsMetadata](#settingsmetadata)
  * savingCustomTabsEnabled `string`
  * savingCustomTabsMetadata [settingsMetadata](#settingsmetadata)
  * senderToChangeTabAssignmentsEnabled `string`
  * senderToChangeTabAssignmentsMetadata [settingsMetadata](#settingsmetadata)
  * sharedCustomTabsEnabled `string`
  * sharedCustomTabsMetadata [settingsMetadata](#settingsmetadata)
  * tabDataLabelEnabled `string`
  * tabDataLabelMetadata [settingsMetadata](#settingsmetadata)
  * tabLocationEnabled `string`
  * tabLocationMetadata [settingsMetadata](#settingsmetadata)
  * tabLockingEnabled `string`
  * tabLockingMetadata [settingsMetadata](#settingsmetadata)
  * tabScaleEnabled `string`
  * tabScaleMetadata [settingsMetadata](#settingsmetadata)
  * tabTextFormattingEnabled `string`
  * tabTextFormattingMetadata [settingsMetadata](#settingsmetadata)
  * textTabsEnabled `string`
  * textTabsMetadata [settingsMetadata](#settingsmetadata)

### tabMetadata
* tabMetadata `object`
  * anchor `string`: An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * createdByDisplayName `string`: The user name of the DocuSign user who created this object.
  * createdByUserId `string`: The userId of the DocuSign user who created this object.
  * customTabId `string`
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * editable `string`: When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `string`: Height of the tab in pixels.
  * includedInEmail `string`: When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
  * initialValue `string`: The original value of the tab.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * items `array`
    * items `string`
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedByDisplayName `string`: The User Name of the DocuSign user who last modified this object.
  * lastModifiedByUserId `string`: The userId of the DocuSign user who last modified this object.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maximumLength `string`
  * mergeField [mergeField](#mergefield)
  * name `string`
  * paymentItemCode `string`
  * paymentItemDescription `string`
  * paymentItemName `string`
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * scaleValue `string`
  * selected `string`: When set to **true**, the radio button is selected.
  * shared `string`
  * stampType `string`
  * stampTypeMetadata [propertyMetadata](#propertymetadata)
  * tabLabel `string`: The label string associated with the tab.
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * width `string`: Width of the tab in pixels.

### tabMetadataList
* tabMetadataList `object`
  * tabs `array`
    * items [CustomTabs](#customtabs)

### tabs
* tabs `object`
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### templateCustomFields
* templateCustomFields `object`
  * listCustomFields `array`: An array of list custom fields.
    * items [listCustomField](#listcustomfield)
  * textCustomFields `array`: An array of text custom fields.
    * items [textCustomField](#textcustomfield)

### templateDocumentVisibilityList
* templateDocumentVisibilityList `object`
  * documentVisibility `array`
    * items [documentVisibility](#documentvisibility)

### templateDocumentsResult
* templateDocumentsResult `object`
  * templateDocuments `array`
    * items [envelopeDocument](#envelopedocument)
  * templateId `string`: The ID of the template being accessed.

### templateInformation
* templateInformation `object`
  * templates `array`
    * items [templateSummary](#templatesummary)

### templateMatch
* templateMatch `object`
  * documentEndPage `string`
  * documentStartPage `string`
  * matchPercentage `string`

### templateNotificationRequest
* templateNotificationRequest `object`
  * expirations [expirations](#expirations)
  * password `string`
  * reminders [reminders](#reminders)
  * useAccountDefaults `string`: When set to **true**, the account default notification settings are used for the envelope.

### templateRecipients
* templateRecipients `object`
  * agents `array`: A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
    * items [agent](#agent)
  * carbonCopies `array`: A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
    * items [carbonCopy](#carboncopy)
  * certifiedDeliveries `array`: A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
    * items [certifiedDelivery](#certifieddelivery)
  * currentRoutingOrder `string`
  * editors `array`
    * items [editor](#editor)
  * errorDetails [errorDetails](#errordetails)
  * inPersonSigners `array`: Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
    * items [inPersonSigner](#inpersonsigner)
  * intermediaries `array`: Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
    * items [intermediary](#intermediary)
  * recipientCount `string`: The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:
  * seals `array`: Specifies one or more electronic seals to apply on documents. For more information on Electronic Seals , see https://support.docusign.com/en/guides/ndse-user-guide-apply-electronic-seals
    * items [sealSign](#sealsign)
  * signers `array`: A complex type containing information about the Signer recipient.
    * items [signer](#signer)

### templateRole
* templateRole `object`
  * accessCode `string`: If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. 
  * clientUserId `string`: Specifies whether the recipient is embedded or remote. 
  * defaultRecipient `string`: When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient.
  * email `string`: Specifies the email associated with a role name.
  * emailNotification [recipientEmailNotification](#recipientemailnotification)
  * embeddedRecipientStartURL `string`: Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session. 
  * inPersonSignerName `string`: Specifies the full legal name of the signer in person signer template roles.
  * name `string`: Specifies the recipient's name.
  * recipientSignatureProviders `array`: The default signature provider is the DocuSign Electronic signature system. This parameter is used to specify one or more Standards Based Signature (digital signature) providers for the signer to use. [More information.](https://developers.docusign.com/esign-rest-api/guides/standards-based-signatures)
    * items [recipientSignatureProvider](#recipientsignatureprovider)
  * roleName `string`: Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
  * routingOrder `string`: Specifies the routing order of the recipient in the envelope. 
  * signingGroupId `string`
  * tabs [EnvelopeRecipientTabs](#enveloperecipienttabs)

### templateSharedItem
* templateSharedItem `object`: Information about shared templates.
  * errorDetails [errorDetails](#errordetails)
  * owner [userInfo](#userinfo)
  * shared `string`: How the template is shared. One of:
  * sharedGroups `array`: List of groups that share the template.
    * items [memberGroupSharedItem](#membergroupshareditem)
  * sharedUsers `array`: List of users that share the template.
    * items [userSharedItem](#usershareditem)
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * templateName `string`: The name of the shared template.

### templateSummary
* templateSummary `object`
  * applied `string`: Reserved: TBD
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * documentName `string`
  * name `string`
  * templateId `string`: The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
  * templateMatch [templateMatch](#templatematch)
  * uri `string`

### templateTabs
* templateTabs `object`
  * approveTabs `array`: A list of
    * items [approve](#approve)
  * checkboxTabs `array`: A list of
    * items [checkbox](#checkbox)
  * companyTabs `array`: A list of 
    * items [company](#company)
  * dateSignedTabs `array`: A list of 
    * items [dateSigned](#datesigned)
  * dateTabs `array`: A list of 
    * items [date](#date)
  * declineTabs `array`: A list of 
    * items [decline](#decline)
  * emailAddressTabs `array`: A list of 
    * items [emailAddress](#emailaddress)
  * emailTabs `array`: A list of 
    * items [email](#email)
  * envelopeIdTabs `array`: A list of 
    * items [envelopeId](#envelopeid)
  * firstNameTabs `array`: A list of 
    * items [firstName](#firstname)
  * formulaTabs `array`: A list of [Formula tabs][formulaTab].
    * items [formulaTab](#formulatab)
  * fullNameTabs `array`: A list of 
    * items [fullName](#fullname)
  * initialHereTabs `array`: A list of 
    * items [initialHere](#initialhere)
  * lastNameTabs `array`: A list of 
    * items [lastName](#lastname)
  * listTabs `array`: A list of 
    * items [list](#list)
  * notarizeTabs `array`: A list of 
    * items [notarize](#notarize)
  * noteTabs `array`: A list of 
    * items [note](#note)
  * numberTabs `array`: A list of 
    * items [number](#number)
  * radioGroupTabs `array`: A list of 
    * items [radioGroup](#radiogroup)
  * signHereTabs `array`: A list of 
    * items [signHere](#signhere)
  * signerAttachmentTabs `array`: A list of 
    * items [signerAttachment](#signerattachment)
  * ssnTabs `array`: A list of 
    * items [ssn](#ssn)
  * textTabs `array`: A list of 
    * items [text](#text)
  * titleTabs `array`: A list of 
    * items [title](#title)
  * viewTabs `array`: A list of 
    * items [view](#view)
  * zipTabs `array`: A list of 
    * items [zip](#zip)

### templateUpdateSummary
* templateUpdateSummary `object`
  * bulkEnvelopeStatus [bulkEnvelopeStatus](#bulkenvelopestatus)
  * envelopeId `string`: The envelope ID of the envelope status that failed to post.
  * errorDetails [errorDetails](#errordetails)
  * listCustomFieldUpdateResults `array`
    * items [listCustomField](#listcustomfield)
  * lockInformation [EnvelopeLocks](#envelopelocks)
  * recipientUpdateResults `array`
    * items [recipientUpdateResponse](#recipientupdateresponse)
  * tabUpdateResults [EnvelopeRecipientTabs](#enveloperecipienttabs)
  * textCustomFieldUpdateResults `array`
    * items [textCustomField](#textcustomfield)

### text
* text `object`: A tab that allows the recipient to enter any type of text.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * formula `string`: Contains the formula
  * height `integer`: Height of the tab in pixels.
  * isPaymentAmount `string`: When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number. 
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`: Specifies the tool tip text for the tab.
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### textCustomField
* textCustomField `object`
  * configurationType `string`: If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
  * errorDetails [errorDetails](#errordetails)
  * fieldId `string`: An ID used to specify a custom field.
  * name `string`: The name of the custom field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * show `string`: A boolean indicating if the value should be displayed.  If this value is set to **true**, the custom field is displayed at the top of the certificate of completion. If this value is left blank/ or set to **false**, then it does not appear in the certificate of completion. 
  * value `string`: The value of the custom field.

### timeStampField
* timeStampField `object`
  * documentSecurityStore [documentSecurityStore](#documentsecuritystore)
  * maxTimeStampSignatureLength `string`
  * timeStampFieldName `string`

### title
* title `object`: A tab that displays the recipient's title.
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### tspHealthCheckRequest
* tspHealthCheckRequest `object`
  * appVersion `string`
  * description `string`: A sender-defined description of the line item.
  * error `string`: The error that caused the Connect post to fail.
  * status `string`: Item status. <!-- TODO -->
  * statusDescription `array`
    * items [tspHealthCheckStatusDescription](#tsphealthcheckstatusdescription)

### tspHealthCheckStatusDescription
* tspHealthCheckStatusDescription `object`
  * description `string`: A sender-defined description of the line item.
  * error `string`: The error that caused the Connect post to fail.
  * hostname `string`
  * responseSeconds `string`
  * status `string`: Item status. <!-- TODO -->
  * type `string`: Type of the user. Valid values: type_owner, type_participant.

### updateTransactionRequest
* updateTransactionRequest `object`
  * code `string`
  * message `string`
  * state `string`: The state or province associated with the address.

### updateTransactionResponse
* updateTransactionResponse `object`
  * redirectionUrl `string`

### usageHistory
* usageHistory `object`: A complex element consisting of: 
  * lastSentDateTime `string`: The date and time the user last sent an envelope. 
  * lastSignedDateTime `string`: The date and time the user last signed an envelope.
  * sentCount `integer`: The number of envelopes the user has sent. 
  * signedCount `integer`: The number of envelopes the user has signed. 

### user
* user `object`
  * countryCode `string`
  * credentials `array`
    * items [credential](#credential)
  * displayName `string`
  * email `string`

### userAccountManagementGranularInformation
* userAccountManagementGranularInformation `object`: Describes which account management capabilities a user has.
  * canManageAccountSecuritySettings `string`
  * canManageAccountSecuritySettingsMetadata [settingsMetadata](#settingsmetadata)
  * canManageAccountSettings `string`
  * canManageAccountSettingsMetadata [settingsMetadata](#settingsmetadata)
  * canManageAdmins `string`: **True**
  * canManageAdminsMetadata [settingsMetadata](#settingsmetadata)
  * canManageGroups `string`: **True**
  * canManageGroupsMetadata [settingsMetadata](#settingsmetadata)
  * canManageReporting `string`
  * canManageReportingMetadata [settingsMetadata](#settingsmetadata)
  * canManageSharing `string`
  * canManageSharingMetadata [settingsMetadata](#settingsmetadata)
  * canManageSigningGroups `string`
  * canManageSigningGroupsMetadata [settingsMetadata](#settingsmetadata)
  * canManageUsers `string`: **True**
  * canManageUsersMetadata [settingsMetadata](#settingsmetadata)

### userInfo
* userInfo `object`
  * activationAccessCode `string`
  * email `string`
  * errorDetails [errorDetails](#errordetails)
  * loginStatus `string`
  * sendActivationEmail `string`
  * uri `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userName `string`
  * userStatus `string`: Status of the user's account. One of:
  * userType `string`

### userInfoList
* userInfoList `object`
  * users `array`
    * items [userInfo](#userinfo)

### userInfoResponse
* userInfoResponse `object`
  * envelopeId `string`: The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
  * language `string`: Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). 
  * seal [seal](#seal)
  * sender [sender](#sender)
  * user [user](#user)

### userInformation
* userInformation `object`
  * accountManagementGranular [userAccountManagementGranularInformation](#useraccountmanagementgranularinformation)
  * activationAccessCode `string`
  * countryCode `string`
  * createdDateTime `string`: Indicates the date and time the item was created.
  * customSettings `array`: The name/value pair information for the user custom setting.
    * items [nameValue](#namevalue)
  * email `string`
  * enableConnectForUser `string`: Specifies whether the user is enabled for updates from DocuSign Connect. Valid values: true or false.
  * errorDetails [errorDetails](#errordetails)
  * firstName `string`: The user's first name. 
  * forgottenPasswordInfo [forgottenPasswordInformation](#forgottenpasswordinformation)
  * groupList `array`: A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId. 
    * items [group](#group)
  * homeAddress [addressInformation_v2](#addressinformation_v2)
  * initialsImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the initials image.
  * isAdmin `string`: Determines if the feature set is actively set as part of the plan.
  * jobTitle `string`
  * lastLogin `string`: The date-time when the user last logged on to the system.
  * lastName `string`
  * loginStatus `string`
  * middleName `string`: The user's middle name. 
  * password `string`
  * passwordExpiration `string`: If password expiration is enabled, the date-time when the user's password expires.
  * permissionProfileId `string`
  * permissionProfileName `string`
  * profileImageUri `string`
  * sendActivationEmail `string`
  * sendActivationOnInvalidLogin `string`: When set to **true**, specifies that an additional activation email is sent to the user if they fail a log on before activating their account. 
  * signatureImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the signature image.
  * subscribe `string`
  * suffixName `string`: The suffix for the user's name, such as Jr, IV, PhD, etc.
  * title `string`: The title of the user.
  * uri `string`
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userName `string`
  * userProfileLastModifiedDate `string`: The date-time when the user's profile was last modified.
  * userSettings `array`
    * items [nameValue](#namevalue)
  * userStatus `string`: Status of the user's account. One of:
  * userType `string`
  * workAddress [addressInformation_v2](#addressinformation_v2)

### userInformationList
* userInformationList `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * users `array`
    * items [Users](#users)

### userPasswordInformation
* userPasswordInformation `object`
  * currentPassword `string`: The user's current password to be changed.
  * email `string`: The user's email address for the associated account.
  * forgottenPasswordInfo [forgottenPasswordInformation](#forgottenpasswordinformation)
  * newPassword `string`: The user's new password.

### userPasswordRules
* userPasswordRules `object`
  * passwordRules [AccountPasswordRules](#accountpasswordrules)
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### userProfile
* userProfile `object`
  * address [addressInformation_v2](#addressinformation_v2)
  * authenticationMethods `array`: These properties cannot be modified in the PUT. 
    * items [authenticationMethod](#authenticationmethod)
  * companyName `string`: The name of the user's Company.
  * displayOrganizationInfo `string`:  When set to **true**, the user's company and title information are shown on the ID card. 
  * displayPersonalInfo `string`: When set to **true**, the user's Address and Phone number are shown on the ID card.
  * displayProfile `string`: When set to **true**, the user's ID card can be viewed from signed documents and envelope history.
  * displayUsageHistory `string`: When set to **true**, the user's usage information is shown on the ID card.
  * profileImageUri `string`
  * title `string`: The title of the user.
  * usageHistory [usageHistory](#usagehistory)
  * userDetails [Users](#users)
  * userProfileLastModifiedDate `string`: The date-time when the user's profile was last modified.

### userSettingsInformation
* userSettingsInformation `object`
  * accountManagementGranular [userAccountManagementGranularInformation](#useraccountmanagementgranularinformation)
  * senderEmailNotifications [senderEmailNotifications](#senderemailnotifications)
  * signerEmailNotifications [signerEmailNotifications](#signeremailnotifications)
  * userSettings `array`
    * items [nameValue](#namevalue)

### userSharedItem
* userSharedItem `object`: Information about a shared item.
  * errorDetails [errorDetails](#errordetails)
  * shared `string`: How the item is shared. One of:
  * user [userInfo](#userinfo)

### userSignature
* userSignature `object`
  * adoptedDateTime `string`: The date and time the user adopted their signature.
  * createdDateTime `string`: Indicates the date and time the item was created.
  * dateStampProperties [dateStampProperties](#datestampproperties)
  * errorDetails [errorDetails](#errordetails)
  * externalID `string`
  * imageType `string`: One of **signature_image** or **initials_image**.
  * initials150ImageId `string`
  * initialsImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the initials image.
  * isDefault `string`
  * phoneticName `string`
  * signature150ImageId `string`
  * signatureFont `string`
  * signatureId `string`: The ID of the signature being accessed.
  * signatureImageUri `string`: Contains the URI for an endpoint that you can use to retrieve the signature image.
  * signatureInitials `string`
  * signatureName `string`: Specifies the user signature name.
  * signatureType `string`
  * stampFormat `string`
  * stampImageUri `string`
  * stampSizeMM `string`
  * stampType `string`

### userSignatureDefinition
* userSignatureDefinition `object`
  * signatureFont `string`
  * signatureId `string`: Specifies the signature ID associated with the signature name. You can use the signature ID in the URI in place of the signature name, and the value stored in the `signatureName` property in the body is used. This allows the use of special characters (such as "&", "<", ">") in a the signature name. Note that with each update to signatures, the returned signature ID might change, so the caller will need to trigger off the signature name to get the new signature ID.
  * signatureInitials `string`
  * signatureName `string`: Specifies the user signature name.

### userSignaturesInformation
* userSignaturesInformation `object`
  * userSignatures `array`
    * items [UserSignatures](#usersignatures)

### userSocialIdResult
* userSocialIdResult `object`
  * socialAccountInformation `array`: Contains properties that map a DocuSign user to a social account (Facebook, Yahoo, etc.)
    * items [UserSocialAccountLogins](#usersocialaccountlogins)
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.

### usersResponse
* usersResponse `object`
  * endPosition `string`: The last position in the result set. 
  * nextUri `string`: The URI for the next chunk of records based on the search request. It is `null` if this is the last set of results for the search. 
  * previousUri `string`: The URI for the prior chunk of records based on the search request. It is `null` if this is the first set of results for the search. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * users `array`
    * items [userInfo](#userinfo)

### view
* view `object`: This tab is used with the Approve tab to handle
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * buttonText `string`
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * height `integer`: Height of the tab in pixels.
  * italic `string`: When set to **true**, the information in the tab is italic.
  * mergeField [mergeField](#mergefield)
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * requiredRead `string`
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.

### viewUrl
* viewUrl `object`
  * url `string`: The endpoint to which webhook notification messages are sent via an HTTP/S POST request. For the DocuSign production platform, the url must start with https. For the demo platform, either http or https is ok.

### watermark
* watermark `object`
  * displayAngle `string`
  * enabled `string`
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * id `string`
  * imageBase64 `string`
  * transparency `string`
  * watermarkText `string`

### workspace
* workspace `object`
  * billableAccountId `string`
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdByInformation [workspaceUser](#workspaceuser)
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedByInformation [workspaceUser](#workspaceuser)
  * status `string`: Item status. <!-- TODO -->
  * workspaceBaseUrl `string`: The relative URL that may be used to access the workspace.
  * workspaceDescription `string`: Text describing the purpose of the workspace.
  * workspaceId `string`: Specifies the workspace ID GUID.
  * workspaceName `string`: The name of the workspace.
  * workspaceUri `string`: The relative URI that may be used to access the workspace.

### workspaceFolderContents
* workspaceFolderContents `object`: Provides properties that describe the contents of a workspace folder.
  * endPosition `string`: The last position in the result set. 
  * folder [WorkspaceItems](#workspaceitems)
  * items `array`
    * items [WorkspaceItems](#workspaceitems)
  * parentFolders `array`
    * items [WorkspaceItems](#workspaceitems)
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * workspaceId `string`: The id of the workspace, always populated.

### workspaceItem
* workspaceItem `object`
  * callerAuthorization [workspaceUserAuthorization](#workspaceuserauthorization)
  * contentType `string`
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdById `string`
  * createdByInformation [workspaceUser](#workspaceuser)
  * extension `string`
  * fileSize `string`
  * fileUri `string`
  * id `string`
  * isPublic `string`:  If true, this supersedes need for bit mask permission with workspaceUserAuthorization
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedById `string`
  * lastModifiedByInformation [workspaceUser](#workspaceuser)
  * name `string`
  * pageCount `string`
  * parentFolderId `string`
  * parentFolderUri `string`
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * uri `string`

### workspaceItemList
* workspaceItemList `object`: Provides properties that describe the items contained in a workspace.
  * items `array`
    * items [WorkspaceItems](#workspaceitems)

### workspaceList
* workspaceList `object`: Provides properties that describe the workspaces avaialble.
  * endPosition `string`: The last position in the result set. 
  * resultSetSize `string`: The number of results returned in this response. 
  * startPosition `string`: Starting position of the current result set.
  * totalSetSize `string`: The total number of items in the search's result set. It will always be greater than or equal to the value of the `resultSetSize` field.
  * workspaces `array`: A list of workspaces.
    * items [Workspaces](#workspaces)

### workspaceUser
* workspaceUser `object`: A workspaceUser representing the user. This property is only returned in response to user specific GET call. 
  * accountId `string`: The account ID associated with the envelope.
  * accountName `string`: The name of the account that the workspace user belongs to.
  * activeSince `string`
  * created `string`: The UTC DateTime when the workspace user was created.
  * createdById `string`
  * email `string`
  * errorDetails [errorDetails](#errordetails)
  * lastModified `string`: Utc date and time the comment was last updated (can only be done by creator.)
  * lastModifiedById `string`
  * status `string`: Filters the results by user status.
  * type `string`: Type of the user. Valid values: type_owner, type_participant.
  * userId `string`: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. **Note**: For [GET /v2/accounts/{accountId}/envelopes](https://developers.docusign.com/esign-rest-api/reference/Envelopes/Envelopes/listStatusChanges/#envelopesInformation)   `user_id` query parameter is not implemented and should not be used.
  * userName `string`
  * workspaceId `string`: Specifies the workspace ID GUID.
  * workspaceUserBaseUrl `string`: The relative URI that may be used to access a workspace user.
  * workspaceUserId `string`

### workspaceUserAuthorization
* workspaceUserAuthorization `object`: Provides properties that describe user authorization to a workspace.
  * canDelete `string`
  * canMove `string`
  * canTransact `string`
  * canView `string`
  * created `string`: The UTC DateTime when the workspace user authorization was created.
  * createdById `string`
  * errorDetails [errorDetails](#errordetails)
  * modified `string`
  * modifiedById `string`
  * workspaceUserId `string`
  * workspaceUserInformation [workspaceUser](#workspaceuser)

### zip
* zip `object`: A tab that allows the recipient to enter a ZIP code. The ZIP
  * anchorCaseSensitive `string`: Reserved for DocuSign.
  * anchorHorizontalAlignment `string`: Reserved for DocuSign.
  * anchorIgnoreIfNotPresent `string`: When set to **true**, this tab is ignored if anchorString is not found in the document.
  * anchorMatchWholeWord `string`: Reserved for DocuSign.
  * anchorString `string`: Specifies the anchor string.
  * anchorUnits `string`: Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
  * anchorXOffset `string`: Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
  * anchorYOffset `string`: Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
  * bold `string`: When set to **true**, the information in the tab is bold.
  * concealValueOnDocument `string`: When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.
  * conditionalParentLabel `string`: For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
  * conditionalParentValue `string`: For conditional fields, this is the value of the parent tab that controls the tab's visibility.
  * customTabId `string`: The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
  * disableAutoSize `string`: When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
  * documentId `string`: Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
  * errorDetails [errorDetails](#errordetails)
  * font `string`: The font to be used for the tab value. Supported Fonts include:
  * fontColor `string`: The font color used for the information in the tab. Possible values are: 
  * fontSize `string`: The font size used for the information in the tab. Possible values are:
  * italic `string`: When set to **true**, the information in the tab is italic.
  * locked `string`: When set to **true**, the signer cannot change the data of the custom tab.
  * maxLength `integer`: An optional value that describes the maximum length of the property when the property is a string.
  * mergeField [mergeField](#mergefield)
  * name `string`
  * originalValue `string`: The initial value of the tab when it was sent to the recipient. 
  * pageNumber `string`: Specifies the page number on which the tab is located.
  * recipientId `string`: Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
  * requireAll `string`: When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
  * requireInitialOnSharedChange `string`: Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
  * required `string`: When set to **true**, the signer is required to fill out this tab
  * senderRequired `string`: When set to **true**, the sender must populate the tab before an envelope can be sent using the template. 
  * shared `string`: When set to **true**, this custom tab is shared.
  * status `string`: Tab status
  * tabId `string`: The unique identifier for the tab.
  * tabLabel `string`: The label string associated with the tab.
  * tabOrder `string`: A positive integer that sets the order the tab is navigated to during signing.
  * templateLocked `string`: When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
  * templateRequired `string`: When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
  * tooltip `string`
  * underline `string`: When set to **true**, the information in the tab is underlined.
  * useDash4 `string`
  * validationMessage `string`: The message displayed if the custom tab fails input validation (either custom of embedded).
  * validationPattern `string`: A regular expressionn used to validate input for the tab.
  * value `string`: Specifies the value of the tab. 
  * width `integer`: Width of the tab in pixels.
  * xPosition `string`: This indicates the horizontal offset of the object on the page.
  * yPosition `string`: This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.


