# @datafire/docusign

Client library for DocuSign

## Installation and Usage
```bash
npm install --save datafire @datafire/docusign
```

```js
let datafire = require('datafire');
let docusign = require('@datafire/docusign').create();

docusign.LoginInformation_GetLoginInformation({}).then(data => {
  console.log(data);
})
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

#### Parameters
*This action has no parameters*

### ServiceInformation_GetResourceInformation
Retrieves the base resources available for the DocuSign REST APIs.

You do not need an integrator key to view the REST API versions and resources.

Example: https://demo.docusign.net/restapi/v2 lists all of the base resources available in version 2 of the REST API on the DocuSign Demo system.

To view descriptions and samples of the service operations for all versions, remove the version number and add /help to the URL.

Example: https://demo.docusign.net/restapi/help lists the REST API operations on the DocuSign Demo system with XML and JSON request and response samples.


```js
docusign.ServiceInformation_GetResourceInformation(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* preview_billing_plan (string) - When set to **true**, creates the account using a preview billing plan.
* newAccountDefinition (object)

### Accounts_GetProvisioning
Retrieves the account provisioning information for the account.


```js
docusign.Accounts_GetProvisioning(null, context)
```

#### Parameters
*This action has no parameters*

### Accounts_DeleteAccount
This closes the specified account. You must be an account admin to close your account. Once closed, an account must be reopened by DocuSign.


```js
docusign.Accounts_DeleteAccount({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Accounts_GetAccount
Retrieves the account information for the specified account.

**Response**
The `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API. 


```js
docusign.Accounts_GetAccount({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include_account_settings (string) - When set to **true**, includes the account settings for the account in the response.

### BillingCharges_GetAccountBillingCharges
Retrieves the list of recurring and usage charges for the account. This can be used to determine the charge structure and usage of charge plan items. 

Privileges required: account administrator 


```js
docusign.BillingCharges_GetAccountBillingCharges({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include_charges (string) - Specifies which billing charges to return.

### BillingInvoices_GetBillingInvoices
Retrieves a list of invoices for the account. If the from date or to date queries are not specified, the response returns invoices for the last 365 days.

Privileges required: account administrator 


```js
docusign.BillingInvoices_GetBillingInvoices({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* from_date (string) - Specifies the date/time of the earliest invoice in the account to retrieve.
* to_date (string) - Specifies the date/time of the latest invoice in the account to retrieve.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* invoiceId (string) **required**

### BillingInvoices_GetBillingInvoicesPastDue
Returns a list past due invoices for the account and notes if payment can be made through the REST API. 

Privileges Required: account administrator


```js
docusign.BillingInvoices_GetBillingInvoicesPastDue({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### BillingPayments_GetPaymentList
Retrieves a list containing information about one or more payments. If the from date or to date queries are not used, the response returns payment information for the last 365 days. 

Privileges required: account administrator 


```js
docusign.BillingPayments_GetPaymentList({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* from_date (string) - Specifies the date/time of the earliest payment in the account to retrieve.
* to_date (string) - Specifies the date/time of the latest payment in the account to retrieve.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* billingPaymentRequest (object)

### BillingPayments_GetPayment
Retrieves the information for a specified payment. 

Privileges required: account administrator 


```js
docusign.BillingPayments_GetPayment({
  "accountId": "",
  "paymentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* paymentId (string) **required**

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include_credit_card_information (string) - When set to **true**, excludes credit card information from the response.
* include_metadata (string) - When set to **true**, the `canUpgrade` and `renewalStatus` properities are included the response and an array of `supportedCountries` property is added to the `billingAddress` information. 
* include_successor_plans (string) - When set to **true**, excludes successor information from the response.

### BillingPlan_PutBillingPlan
Updates the billing plan information, billing address, and credit card information for the specified account.


```js
docusign.BillingPlan_PutBillingPlan({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* preview_billing_plan (string) - When set to **true**, updates the account using a preview billing plan.
* billingPlanInformation (object)

### BillingPlan_GetCreditCardInfo
Get metadata for a given credit card.


```js
docusign.BillingPlan_GetCreditCardInfo({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### PurchasedEnvelopes_PutPurchasedEnvelopes
Reserved: At this time, this endpoint is limited to DocuSign internal use only. Completes the purchase of envelopes for your account. The actual purchase is done as part of an internal workflow interaction with an envelope vendor.


```js
docusign.PurchasedEnvelopes_PutPurchasedEnvelopes({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* purchasedEnvelopesInformation (object)

### Brands_DeleteBrands
Deletes one or more brand profiles from an account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`) must be set to **true** to use this call.


```js
docusign.Brands_DeleteBrands({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandsRequest (object)

### Brands_GetBrands
Retrieves the list of brand profiles associated with the account and the default brand profiles. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`)  must be set to **true** for the account to use this call.


```js
docusign.Brands_GetBrands({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* exclude_distributor_brand (string) - When set to **true**, excludes distributor brand information from the response set.
* include_logos (string) - When set to **true**, returns the logos associated with the brand.

### Brands_PostBrands
Creates one or more brand profile files for the account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSig`) must be set to **true** for the account to use this call.

An error is returned if `brandId` property for a brand profile is already set for the account. To upload a new version of an existing brand profile, you must delete the profile and then upload the newer version.

When brand profile files are being uploaded, they must be combined into one zip file and the `Content-Type` must be `application/zip`.


```js
docusign.Brands_PostBrands({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brand (object)

### Brand_DeleteBrand
Removes a brand.


```js
docusign.Brand_DeleteBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.

### Brand_GetBrand
Get information for a specific brand.


```js
docusign.Brand_GetBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* include_external_references (string)
* include_logos (string)

### Brand_PutBrand
Updates an existing brand.


```js
docusign.Brand_PutBrand({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* brand (object)

### BrandExport_GetBrandExportFile
Export a specific brand.


```js
docusign.BrandExport_GetBrandExportFile({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.

### BrandLogo_DeleteBrandLogo
Delete one branding logo.


```js
docusign.BrandLogo_DeleteBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* logoType (string) **required** - One of **Primary**, **Secondary** or **Email**.

### BrandLogo_GetBrandLogo
Obtains the specified image for a brand.


```js
docusign.BrandLogo_GetBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* logoType (string) **required** - One of **Primary**, **Secondary** or **Email**.

### BrandLogo_PutBrandLogo
Put one branding logo.


```js
docusign.BrandLogo_PutBrandLogo({
  "accountId": "",
  "brandId": "",
  "logoType": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* logoType (string) **required** - One of **Primary**, **Secondary** or **Email**.

### BrandResources_GetBrandResourcesList
Returns the specified account's list of branding resources (metadata).


```js
docusign.BrandResources_GetBrandResourcesList({
  "accountId": "",
  "brandId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.

### BrandResources_GetBrandResources
Returns the specified branding resource file.


```js
docusign.BrandResources_GetBrandResources({
  "accountId": "",
  "brandId": "",
  "resourceContentType": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* resourceContentType (string) **required**
* langcode (string)
* return_master (string)

### BrandResources_PutBrandResources
Uploads a branding resource file.


```js
docusign.BrandResources_PutBrandResources({
  "accountId": "",
  "brandId": "",
  "resourceContentType": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* brandId (string) **required** - The unique identifier of a brand.
* resourceContentType (string) **required**

### BulkEnvelopes_GetEnvelopesBulk
Retrieves status information about all the bulk recipient batches. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. The response includes general information about each bulk recipient batch. 

The response returns information about the envelopes sent with bulk recipient batches, including the `batchId` property, which can be used to retrieve a more detailed status of individual bulk recipient batches.


```js
docusign.BulkEnvelopes_GetEnvelopesBulk({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* count (string) - The number of results to return. This can be 1 to 20.
* include (string) - Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include="failed,queued") 
* start_position (string) - The position of the bulk envelope items in the response. This is used for repeated calls, when the number of bulk envelopes returned is too large for one return. The default value is 0.

### BulkEnvelopes_GetBulkEnvelopesBatchId
Retrieves the status information of a single bulk recipient batch. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. 


```js
docusign.BulkEnvelopes_GetBulkEnvelopesBatchId({
  "accountId": "",
  "batchId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* batchId (string) **required**
* count (string) - Specifies the number of entries to return.
* include (string) - Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include="failed,queued") 
* start_position (string) - Specifies the location in the list of envelopes from which to start.

### CaptiveRecipients_DeleteCaptiveRecipientsPart
Deletes the signature for one or more captive recipient records; it is primarily used for testing. This provides a way to reset the signature associated with a client user ID so that a new signature can be created the next time the client user ID is used.


```js
docusign.CaptiveRecipients_DeleteCaptiveRecipientsPart({
  "accountId": "",
  "recipientPart": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientPart (string) **required**
* captiveRecipientInformation (object)

### ChunkedUploads_PostChunkedUploads
Initiate a new ChunkedUpload.


```js
docusign.ChunkedUploads_PostChunkedUploads({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* chunkedUploadRequest (object)

### ChunkedUploads_DeleteChunkedUpload
Delete an existing ChunkedUpload.


```js
docusign.ChunkedUploads_DeleteChunkedUpload({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* chunkedUploadId (string) **required**

### ChunkedUploads_GetChunkedUpload
Retrieves the current metadata of a ChunkedUpload.


```js
docusign.ChunkedUploads_GetChunkedUpload({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* chunkedUploadId (string) **required**
* include (string) - A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

### ChunkedUploads_PutChunkedUploads
Integrity-Check and Commit a ChunkedUpload, readying it for use elsewhere.


```js
docusign.ChunkedUploads_PutChunkedUploads({
  "accountId": "",
  "chunkedUploadId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* chunkedUploadId (string) **required**
* action (string)

### ChunkedUploads_PutChunkedUploadPart
Add a chunk, a chunk 'part', to an existing ChunkedUpload.


```js
docusign.ChunkedUploads_PutChunkedUploadPart({
  "accountId": "",
  "chunkedUploadId": "",
  "chunkedUploadPartSeq": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* chunkedUploadId (string) **required**
* chunkedUploadPartSeq (string) **required**
* chunkedUploadRequest (object)

### Connect_GetConnectConfigs
Retrieves all the DocuSign Custom Connect definitions for the specified account.

###### Note: Connect must be enabled for your account to use this function. This does not retrieve information for Connect configurations for Box, eOriginal, or Salesforce.


```js
docusign.Connect_GetConnectConfigs({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Connect_PostConnectConfiguration
Creates a DocuSign Custom Connect definition for your account. DocuSign Connect enables the sending of real-time data updates to external applications. These updates are generated by user transactions as the envelope progresses through actions to completion. The Connect Service provides updated information about the status of these transactions and returns updates that include the actual content of document form fields. Be aware that, these updates might or might not include the document itself. For more information about Connect, see the [ML:DocuSign Connect Service Guide].

###### Note: Connect must be enabled for your account to use this function. This cannot be used to set up Connect configurations for Salesforce or eOriginal.


```js
docusign.Connect_PostConnectConfiguration({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* ConnectConfigurations (object) - Connect configurations

### Connect_PutConnectConfiguration
Updates the specified DocuSign Connect configuration in your account.

###### Note: Connect must be enabled for your account to use this function. This cannot be used to update Connect configurations for Box, eOriginal, or Salesforce.


```js
docusign.Connect_PutConnectConfiguration({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* ConnectConfigurations (object) - Connect configurations

### ConnectPublish_PutConnectRetry
Republishes Connect information for the  specified set of envelopes. The primary use is to republish Connect post failures by including envelope IDs for the envelopes that failed to post in the request. The list of envelope IDs that failed to post correctly can be retrieved by calling to [ML:GetConnectLog] retrieve the failure log.


```js
docusign.ConnectPublish_PutConnectRetry({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* connectFailureFilter (object)

### ConnectPublish_PutConnectRetryByEnvelope
Republishes Connect information for the specified envelope.


```js
docusign.ConnectPublish_PutConnectRetryByEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### ConnectFailures_GetConnectLogs
Retrieves the Connect Failure Log information. It can be used to determine which envelopes failed to post, so a republish request can be created.


```js
docusign.ConnectFailures_GetConnectLogs({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* from_date (string) - Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
* to_date (string) - End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

### ConnectFailures_DeleteConnectFailureLog
Deletes the Connect failure log information for the specified entry.


```js
docusign.ConnectFailures_DeleteConnectFailureLog({
  "accountId": "",
  "failureId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* failureId (string) **required** - The ID of the failed connect log entry.

### ConnectLog_DeleteConnectLogs
Retrieves a list of connect log entries for your account.

###### Note: The `enableLog` property in the Connect configuration must be set to **true** to enable logging. If logging is not enabled, then no log entries are recorded.


```js
docusign.ConnectLog_DeleteConnectLogs({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### ConnectLog_GetConnectLogs
Retrieves a list of connect log entries for your account.

###### Note: The `enableLog` setting in the Connect configuration must be set to true to enable logging. If logging is not enabled, then no log entries are recorded. 


```js
docusign.ConnectLog_GetConnectLogs({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* from_date (string) - Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
* to_date (string) - End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

### ConnectLog_DeleteConnectLog
Deletes a specified entry from the Connect Log.



```js
docusign.ConnectLog_DeleteConnectLog({
  "accountId": "",
  "logId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* logId (string) **required** - The ID of the connect log entry

### ConnectLog_GetConnectLog
Retrieves the specified Connect log entry for your account.

###### Note: The `enableLog` setting in the Connect configuration must be set to true to enable logging. If logging is not enabled, then no log entries are recorded. 


```js
docusign.ConnectLog_GetConnectLog({
  "accountId": "",
  "logId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* logId (string) **required** - The ID of the connect log entry
* additional_info (string) - When true, the connectDebugLog information is included in the response.

### Connect_DeleteConnectConfig
Deletes the specified DocuSign Connect configuration.

###### Note: Connect must be enabled for your account to use this function.

 



```js
docusign.Connect_DeleteConnectConfig({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* connectId (string) **required** - The ID of the custom Connect configuration being accessed.

### Connect_GetConnectConfig
Retrieves the information for the specified DocuSign Connect configuration.

###### Note: Connect must be enabled for your account to use this function.



```js
docusign.Connect_GetConnectConfig({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* connectId (string) **required** - The ID of the custom Connect configuration being accessed.

### Connect_GetConnectUsers
Returns users from the configured Connect service.


```js
docusign.Connect_GetConnectUsers({
  "accountId": "",
  "connectId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* connectId (string) **required** - The ID of the custom Connect configuration being accessed.
* count (string) - Optional. Number of items to return.
* email_substring (string) - Filters the returned user records by the email address or a sub-string of email address.
* list_included_users (string)
* start_position (string) - The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.
* status (string) - Filters the results by user status.
* user_name_substring (string) - Filters the user records returned by the user name or a sub-string of user name.

### ConsumerDisclosure_GetConsumerDisclosure
Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account. You can use an optional query string to set the language for the disclosure.


```js
docusign.ConsumerDisclosure_GetConsumerDisclosure({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* langCode (string) - Specifies the language used in the response. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).

### ConsumerDisclosure_GetConsumerDisclosureLangCode
Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, for the requested envelope recipient. This might be different than the current account disclosure depending on account settings, such as branding, and when the account disclosure was last updated. An optional query string can be included to return the language for the disclosure.  


```js
docusign.ConsumerDisclosure_GetConsumerDisclosureLangCode({
  "accountId": "",
  "langCode": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* langCode (string) **required** - The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.

### ConsumerDisclosure_PutConsumerDisclosure
Update Consumer Disclosure.


```js
docusign.ConsumerDisclosure_PutConsumerDisclosure({
  "accountId": "",
  "langCode": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* langCode (string) **required** - The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.
* include_metadata (string) - Reserved for DocuSign.
* EnvelopeConsumerDisclosures (object) - Envelope consumer disclosures

### Contacts_DeleteContacts
Delete contacts associated with an account for the DocuSign service.


```js
docusign.Contacts_DeleteContacts({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* contactModRequest (object)

### Contacts_PostContacts
Imports multiple new contacts into the contacts collection from CSV, JSON, or XML (based on content type).


```js
docusign.Contacts_PostContacts({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* contactModRequest (object)

### Contacts_PutContacts
Replaces contacts associated with an account for the DocuSign service.


```js
docusign.Contacts_PutContacts({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* contactModRequest (object)

### Contacts_DeleteContactWithId
Replaces a particular contact associated with an account for the DocuSign service.


```js
docusign.Contacts_DeleteContactWithId({
  "accountId": "",
  "contactId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* contactId (string) **required** - The unique identifier of a person in the contacts address book.

### Contacts_GetContactById
Gets a particular contact associated with the user's account.


```js
docusign.Contacts_GetContactById({
  "accountId": "",
  "contactId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* contactId (string) **required** - The unique identifier of a person in the contacts address book.
* cloud_provider (string)

### AccountCustomFields_GetAccountCustomFields
Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.


```js
docusign.AccountCustomFields_GetAccountCustomFields({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### AccountCustomFields_PostAccountCustomFields
Creates an acount custom field.


```js
docusign.AccountCustomFields_PostAccountCustomFields({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* apply_to_templates (string)
* customField (object)

### AccountCustomFields_DeleteAccountCustomFields
Delete an existing account custom field.


```js
docusign.AccountCustomFields_DeleteAccountCustomFields({
  "accountId": "",
  "customFieldId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* customFieldId (string) **required**
* apply_to_templates (string)

### AccountCustomFields_PutAccountCustomFields
Updates an existing account custom field.


```js
docusign.AccountCustomFields_PutAccountCustomFields({
  "accountId": "",
  "customFieldId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* customFieldId (string) **required**
* apply_to_templates (string)
* customField (object)

### EMortgage_PostTransactions
Starts a new eMortgage Transaction


```js
docusign.EMortgage_PostTransactions({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* EMortgageTransactions (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* ac_status (string) - Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
* block (string) - Reserved for DocuSign.
* count (string) - Optional. Number of items to return.
* custom_field (string) - Optional. Specifies a envelope custom field name and value searched for in the envelopes. Format: `custom_envelope_field_name=desired_value`
* email (string) - Limit results to envelopes
* envelope_ids (string) - Comma separated list of `envelopeId` values.
* exclude (string) - Reserved for DocuSign.
* folder_ids (string) - Reserved for DocuSign.
* folder_types (string) - Reserved for DocuSign.
* from_date (string) - Specifies the date and time
* from_to_status (string) - The status value checked for in the `from_date` to `to_date` time period. 
* include (string) - Reserved for DocuSign.
* include_purge_information (string)
* intersecting_folder_ids (string) - Reserved for DocuSign.
* order (string) - Reserved for DocuSign.
* order_by (string) - Reserved for DocuSign.
* powerformids (string) - Reserved for DocuSign.
* search_text (string) - Reserved for DocuSign.
* start_position (string) - Reserved for DocuSign.
* status (string) - A comma-separated list of current envelope statuses to included in the response. Possible values are:
* to_date (string) - Specifies the date and time
* transaction_ids (string) - A comma-separated list of envelope transaction IDs.
* user_filter (string) - Reserved for DocuSign.
* user_id (string) - Reserved for DocuSign.
* user_name (string) - Limit results to envelopes

### Envelopes_PostEnvelopes
Creates and sends an envelope or creates a draft envelope.
Envelopes are fundamental resources in the DocuSign platform
and are used in a variety of ways.

With this method you can:

* Create and send an envelope
  with documents, recipients, and tabs.
* Create and send an envelope from a template.
* Create and send an envelope from
  a combination of documents and templates.
* Create a draft envelope.

There are many ways to use envelopes.
You can create and send an envelope
with a single API request,
or you can use several API requests
to create, populate, and send envelopes.

When you use this method
to create and send an envelope
in a single request,
the following parameters are required:

| Parameter      | Description |
| :--------      | :---------- |
| `status`       | Set to `sent` to send the envelope to recipients.<br>Set to `created` (or don't set at all) to save the envelope as a draft. |
| `emailSubject` | The subject of the email used to send the envelope. |
| `documents`    | The documents to be signed. |
| `recipients`   | The email addresses of the envelope recipients. |

If you are creating an envelope
to be sent later,
save it as a draft
by either setting `status`
to `created` or leaving it unset.
For instance, you can create a draft envelope
with documents only.
Using additional API requests,
you can add the recipients
and send the envelope
in subsequent API requests.



## Feature Availability

Not all DocuSign features are available to all accounts.
Use DocuSign Admin to check and enable feature availability.
You can also check feature availability via the web application.
For example, if the web application allows you to send an envelope with SMS authentication,
then you can use the same feature through the API.

## Sending Envelopes

Documents can be included
with the Envelopes:create method,
or a template can include documents.
Documents can be added by using
a multipart/form request
or by using the `documentBase64` property of the [`document` object][documentDef].

### Adding Documents to Requests

There are two ways to add documents to your envelopes:

1. Use the `documents` property of the envelope definition.
2. Send this request as a multipart/form-data `POST`
   with documents added through additional request parts.

Using the `documents` property is the simpler option,
but the request may be quite large
due to the base64 encoding.
This example shows how to add a document
using this method.

```json
{
  "status": "sent",
  "emailSubject": "Example of one recipient, type signer",
  "documents": [{
    "documentId": "1",
    "name": "contract.pdf",
    "documentBase64": "base64 document bytes...",
  }],
  "recipients": {
    "signers": [{
      "name": "Lisa Simpson",
      "email": "lisa@email.com",
      "recipientId": "1",
      "routingOrder": "1",
      "tabs": {
        "signHereTabs": [{
          "xPosition": "150",
          "yPosition": "200",
          "documentId": "1",
          "pageNumber": "1"
        }],
      }
    }]
  }
}
```

If you are using a multipart/form-data `POST` request,
you do not have to base64 encode your documents.
You place the envelope definition in one part
and the document bytes in another:

```
--AAA
Content-Type: application/json
Content-Disposition: form-data

<ENVELOPE DEFINITION GOES HERE>
--AAA
Content-Type:application/pdf
Content-Disposition: file; filename="contract.pdf"; documentid=1

<DOCUMENT BYTES GO HERE>
--AAA--
```

### Using Supplemental Documents

Supplemental documents are supporting materials
such as disclosures and other informational documents
that need to accompany a document sent for signature.
These supplemental documents are available to the signer
to view and acknowledge,
without making the envelope too large or confusing for signers.

Supplemental documents use the following properties in the
[`document` object][documentDef].

| Name                  | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeInDownload     | Boolean | When set to **true**, the document is included in the combined document download. The default value is **true**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| display               | String  | This string sets the display and behavior properties of the document during signing. The possible values are:<br>`<ul><li><p><code>modal</code><br>The document is shown as a supplement action strip and can be viewed, downloaded, or printed in a modal window. This is the recommended value for supplemental documents.</p></li><li><p><code>download</code><br>The document is shown as a supplement action strip and can be viewed, downloaded, or printed in a new browser window.</p></li><li><p><code>inline</code><br>This value is not used with supplemental documents, but is the default value for all other documents. The document is shown in the normal signing window.</li></ul> |
| signerMustAcknowledge | String  | Sets how the signer interacts with the supplemental document. The possible values are:<br><ul><li><p><code>no_interaction</code><br>No recipient action is required.</p></li><li><p><code>view</code><br>The recipient is required to view the document.</p></li><li><p><code>accept</code><br>The recipient is required to accept the document by selecting accept during signing, but is not required to view the document.</p></li><li><p><code>view_accept</code><br>The recipient is required to view and accept the document.</p></li></ul>                                                                                                                                                    |


[viewtab]: /esign/restapi/Envelopes/EnvelopeRecipientTabs/#view-tab

The [View][viewtab] and Approve tabs
are used to set the interactions
for individual recipients.
The View tab includes a `required` property
that requires the recipient to view the supplemental document.
If the View tab `required` property is not set,
the recipient can, but is not required to,
view the supplemental document.

To use the View and Approve tabs for
supplemental documents,
the document `display` property
must be set to `modal` or `download`.

The actions that the recipient must take
depend on the value
of the `signerMustAcknowledge` document property
and
whether the signer is assigned
View or Approve tabs
on the document.

To set the interactions for individual recipients,
set the `signerMustAcknowledge` property
to `no_interaction`,
then add View and Approve tabs
on the appropriate document for the recipient.


The action that a signer must take
depends on the value of the
`signerMustAcknowledge` document property,
whether the signer has an Approve tab,
and the value of the
`required` property of the View tab.
The following table
shows the actions a recipient must take
for different combinations
of these tabs and properties.



| Document `signerMustAcknowledge`property  | Approve Tab | View Tab `required` property  | Recipient is required to ...  |
| :----                                     | :----       | :----                         | :----                         |
| no_interaction                            | No          |  --                           |  Take no action               |
| no_interaction                            | No          |  false                        |  Take no action               |
| no_interaction                            | No          |  true                         |  View                         |
| no_interaction                            | Yes         |  false                        |  Accept                       |
| no_interaction                            | Yes         |  true                         |  View and Accept              |
| view                                      | No          |  --                           |  View                         |
| view                                      | Yes         |  --                           |  View and Accept              |
| accept                                    | --          |  false                        |  Accept                       |
| accept                                    | --          |  true                         |  View and Accept              |
| view_accept                               | --          |  --                           |  View and Accept              |




### Recipient Types

An [`envelopeDefinition` object][envelopeDef] is used as the method's body.
Envelope recipients can be defined in the envelope or in templates.
The `envelopeDefinition` object's `recipients` property
is an [`EnvelopeRecipients` resource object][envelopeRecipientsDef].
It includes arrays of the seven types of recipients defined by DocuSign:

| Recipient type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Agents][agentDef]                  | An agent recipient can add name and email information for recipients that appear after the agent in routing order.                                                                                                                                                                                                                                                                                                                                                                                  |
| [Carbon Copies][ccDef]              | Carbon copy recipients get a copy of the envelope but don't need to sign, initial, date or add information to any of the documents. This type of recipient can be used in any routing order. Carbon copy recipients receive their copy of the envelope when the envelope reaches the recipient's order in the process flow and when the envelope is completed.                                                                                                                                      |
| [Certified Deliveries][certfiedDef] | Certified delivery recipients must receive the completed documents for the envelope to be completed. However, they don't need to sign, initial, date or add information to any of the documents.                                                                                                                                                                                                                                                                                                    |
| [Editors][editorDef]                | Editors have the same management and access rights for the envelope as the sender. They can make changes to the envelope as if they were using the Advanced Correct feature. This recipient can add name and email information, add or change the routing order and set authentication options for the remaining recipients. Additionally, this recipient can edit signature/initial tabs and data fields for the remaining recipients. The recipient must have a DocuSign account to be an editor. |
| [In-Person Signers][inPersonDef]    | An in-person recipient is a DocuSign user, acting as a Signing Host, who is in the same physical location as the signer.                                                                                                                                                                                                                                                                                                                                                                            |
| [Intermediaries][intermediaryDef]   | An intermediary is a recipient who can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order, unless subsequent agents, editors or intermediaries are added.                                                                                                                                                                                                                                                                  |
| [Signers][signerDef]                | A signer is a recipient who must sign, initial, date, or add data to form fields on the documents in the envelope.                                                                                                                                                                                                                                                                                                                                                                                  |


Additional information about the different types of recipients
is available from the [`EnvelopeRecipients` resource page][envelopeRecipientsRes]
and from the Developer Center [Recipients][devecenterrecipients] topic.



### Tabs

Tabs (also referred to as tags and fields in the web application),
can be defined in the `envelopeDefinition`,
in templates, by transforming PDF Form Fields,
or by using Composite Templates (see below).

The `inPersonSigner`, and `signer` recipient objects
include a `tabs` property.
It is an [`EnvelopeRecipientTabs` resource object][envRecipientTabsDef]
that includes arrays of the different tab types available.
See the [`EnvelopeRecipientTabs` resource][envRecipientTabsRes] for more information.


## Using Templates

Envelopes use specific people or groups as recipients.
Templates can specify a role, eg `account_manager.`
When a template is used in an envelope,
the roles must be replaced with specific people or groups.

When you create an envelope using a `templateId`,
the different recipient type objects
within the [`EnvelopeRecipients` property][envelopeRecipientsDef]
are used to assign recipients to the template's roles via the `roleName` property.
The recipient objects can also override settings
that were specified in the template,
and set values for tab fields that were defined in the template.

### Message Lock

When a template is added or applied to an envelope,
and the template has a locked email subject and message,
that subject and message are used for the envelope
and cannot be changed
even if another locked template
is subsequently added or applied to the envelope.
The `messageLock` property is used to lock the email subject and message.

If an email subject or message is entered
before adding or applying a template with `messageLock` set to **true**,
the email subject and message is overwritten
with the locked email subject and message from the template.

## Envelope Status

The status of sent envelopes
can be determined through the DocuSign webhook system
or by polling.
Webhooks are highly recommended:
they provide your application with the quickest updates when an envelope's
status changes.
DocuSign limits polling to once every 15 minutes or less
frequently.
See [API Rules and Limits][apirules] for more information and examples.


When a webhook is used,
DocuSign calls your application via the URL you provide, with a notification XML message.

See the
[Webhook recipe](https://www.docusign.com/developer-center/recipes/webhook-status)
for examples and live demos of using webhooks.

## Webhook Options

The two webhook options,
`eventNotification` and Connect,
use the same notification mechanism and message formats.
Use `eventNotification` to create a webhook
for a specific envelope sent via the API.
Connect webhooks can be used
for any envelope sent from an account,
from any user, from any client.
The [Connect guide][connectGuide] discusses the webhook notification message format.

### eventNotification Webhooks

The Envelopes:create method
includes an optional [`eventNotification` object][eventNotificationDef] property
that adds a webhook to the envelope.
`eventNotification` webhooks are available for all DocuSign accounts with API access.

### Connect Webhooks

Connect can be used to create a webhook
for all envelopes sent by all users in an account,
either through the API or through other DocuSign clients (web, mobile, etc).
Connect configurations are independent of specific envelopes.
A Connect configuration includes a filter
that may be used to limit the webhook to specific users, envelope statuses, etc.

You can create and manage Connect configurations with
the [ConnectConfigurations resource][connectConfigurationsRes].
Configurations can also be created and managed from DocuSign Admin
accessed by selecting **Go to Admin** from the menu
next to your picture on the DocuSign web app.
See the **Connect** topic in the **Integrations** section of DocuSign Admin.
For repeatability, and to minimize support questions,
creating Connect configurations via the API is recommended, especially for ISVs.

Connect is available for some DocuSign account types.
Please contact DocuSign Sales for more information.

## Composite Templates

The Composite Templates feature,
like [compositing in film production](https://en.wikipedia.org/wiki/Compositing),
enables you to overlay
document,
recipient,
and tab definitions
from multiple sources,
including PDF Form Field definitions,
templates defined on the server,
and more.

Each Composite Template consists of optional elements: server templates,
inline templates, PDF Metadata templates, and documents.

* The Composite Template ID is an optional element used to identify the
  composite template. It is used as a reference when adding document
  object information via a multipart HTTP message. If used, the document
  content-disposition must include the `compositeTemplateId` to which the
  document should be added. If `compositeTemplateId` is not specified in
  the content-disposition, the document is applied based on the
  `documentId` only. If no document object is specified, the composite
  template inherits the first document.

* Server Templates are server-side templates stored on the DocuSign
  platform. If supplied, they are overlaid into the envelope in the order
  of their Sequence value.

* Inline Templates provide a container to add documents, recipients,
  tabs, and custom fields. If inline templates are supplied, they are
  overlaid into the envelope in the order of their Sequence value.

* Document objects are optional structures that provide a container to
  pass in a document or form. If this object is not included, the
  composite template inherits the *first* document it finds from a server
  template or inline template, starting with the lowest sequence value.

PDF Form objects are only transformed from the document object. DocuSign
does not derive PDF form properties from server templates or inline
templates. To instruct DocuSign to transform fields from the PDF form,
set `transformPdfFields` to **true** for the document.

See [PDF Form Field Transformation](#pdf-form-field-transformation)
for more information about process.

* PDF Metadata Templates provide a container to embed design-time
  template information into a PDF document. DocuSign uses this information
  when processing the Envelope. This convention allows the document to
  carry the signing instructions with it, so that less information needs
  to be provided at run-time through an inline template or synchronized
  with an external structure like a server template. PDF Metadata
  templates are stored in the Metadata layer of a PDF in accordance with
  Acrobat's XMP specification. DocuSign will only find PDF Metadata
  templates inside documents passed in the Document object (see below). If
  supplied, the PDF metadata template will be overlaid into the envelope
  in the order of its Sequence value.

### Compositing the Definitions

Each Composite Template adds a new document and templates overlay into
the envelope. For each Composite Template these rules are applied:

* Templates are overlaid in the order of their Sequence value.
* If Document is not passed into the Composite Template's `document`
  field, the *first* template's document (based on the template's Sequence
  value) is used.
* Last in wins in all cases except for the document (i.e. envelope
  information, recipient information, secure field information). There is
  no special casing.

For example, if you want higher security on a tab,
then that needs to be specified in a later template (by sequence number)
than where the tab is included.
If you want higher security on a role recipient,
then it needs to be in a later template
than where that role recipient is specified.

* Recipient matching is based on Recipient Role and Routing Order. If
  there are matches, the recipient information is merged together. A final
  pass is done on all Composite Templates, after all template overlays
  have been applied, to collapse recipients with the same email, username
  and routing order. This prevents having the same recipients at the same
  routing order.

* If you specify in a template that a recipient is locked, once that
  recipient is overlaid the recipient attributes can no longer be changed.
  The only items that can be changed for the recipient in this case are
  the email, username, access code and IDCheckInformationInput.

* Tab matching is based on Tab Labels, Tab Types and Documents. If a Tab
  Label matches but the Document is not supplied, the Tab is overlaid for
  all the Documents.

For example, if you have a simple inline template with only one tab in
it with a label and a value, the Signature, Initial, Company, Envelope
ID, User Name tabs will only be matched and collapsed if they fall in
the exact same X and Y locations.

* `roleName` and `tabLabel` matching is case sensitive.

* The `defaultRecipient` property enables you to specify which recipient
  the tabs generated from a PDF form are mapped to. You can also set PDF
  form generated tabs to a recipient other than the default recipient by
  specifying the mapping of the tab label that is created to one of the
  template recipients.

* You can use `tabLabel` wild carding to map a series of tabs from the PDF
  form. To use this you must end a tab label with "\*" and then the system
  matches tabs that start with the label.

* If no `defaultRecipient` is specified, tabs must be explicitly mapped
  to recipients in order to be generated from the form. Unmapped form
  objects will not be generated into their DocuSign equivalents. (In the
  case of Signature/Initials, the tabs will be disregarded entirely; in
  the case of pdf text fields, the field data will be flattened on the
  Envelope document, but there will not be a corresponding DocuSign data
  tab.)

### Including the Document Content for Composite Templates

Document content can be supplied inline, using the `documentBase64` or
can be included in a multipart HTTP message. If a multipart message is
used and there are multiple Composite Templates, the document
content-disposition can include the `compositeTemplateId` to which the
document should be added. Using the `compositeTemplateId` sets which
documents are associated with particular composite templates. An example
of this usage is:

```
--5cd3320a-5aac-4453-b3a4-cbb52a4cba5d
Content-Type: application/pdf
Content-Disposition: file; filename="eula.pdf"; documentId=1; compositeTemplateId="1"
Content-Transfer-Encoding: base64
```

### PDF Form Field Transformation

Only the following PDF Form FieldTypes are transformed to DocuSign
tabs:

* CheckBox
* DateTime
* ListBox
* Numeric
* Password
* Radio
* Signature,
* Text

Field Properties that are transformed:

* Read Only
* Required
* Max Length
* Positions
* Initial Data

When transforming a PDF Form Digital Signature Field, the following rules apply.
Any other PDF Form Digital Signature Field will be transformed to a DocuSign Signature tab


| If the PDF Field Name contains                              | Then the DocuSign tab will be |
| :---------------------------------------------------------- | :---------------------------- |
| DocuSignSignHere or<br> eSignSignHere                       | Signature                     |
| DocuSignSignHereOptional or<br> eSignSignHereOptional       | Optional Signature            |
| DocuSignInitialHere or<br> eSignInitialHere                 | Initials                      |
| DocuSignInitialHereOptional or<br> eSignInitialHereOptional | Optional Initials             |


When transforming PDF Form Text Fields, the following rules apply.
Any other PDF Form Text Field will be transformed to a DocuSign data (text) tab.


| If the PDF Field Name contains                                        | Then the DocuSign tab will be |
| :-------------------------------------------------------------------- | :---------------------------- |
| DocuSignSignHere or<br> eSignSignHere                                 | Signature                     |
| DocuSignSignHereOptional or<br> eSignSignHereOptional                 | Optional Signature            |
| DocuSignInitialHere or<br> eSignInitialHere                           | Initials                      |
| DocuSignInitialHereOptional or<br> eSignInitialHereOptional           | Optional Initials             |
| DocuSignEnvelopeID or<br> eSignEnvelopeID                             | EnvelopeID                    |
| DocuSignCompany or<br> eSignCompany                                   | Company                       |
| DocuSignDateSigned or<br> eSignDateSigned                             | Date Signed                   |
| DocuSignTitle or<br> eSignTitle                                       | Title                         |
| DocuSignFullName or<br> eSignFullName                                 | Full Name                     |
| DocuSignSignerAttachmentOptional or<br> eSignSignerAttachmentOptional | Optional Signer Attachment    |


PDF Form Field Names that include `DocuSignIgnoreTransform`
or `eSignIgnoreTransform` will not be transformed.

PDF Form Date fields that include `DocuSignDateSigned` or `eSignDateSigned`
will be transformed
to Date Signed fields.

## Template Email Subject Merge Fields

This feature enables you to insert recipient name and email address
merge fields into the email subject line when creating or sending from a
template.

The merge fields, based on the recipient's `roleName`, are added to the
`emailSubject` when the template is created or when the template is used
to create an envelope. After a template sender adds the name and email
information for the recipient and sends the envelope, the recipient
information is automatically merged into the appropriate fields in the
email subject line.

Both the sender and the recipients will see the information in the email
subject line for any emails associated with the template. This provides
an easy way for senders to organize their envelope emails without having
to open an envelope to check the recipient.

If merging the recipient information into the subject line causes the
subject line to exceed 100 characters, then any characters over the 100
character limit are not included in the subject line. For cases where
the recipient name or email is expected to be long, you should consider
placing the merge field at the start of the email subject.

* To add a recipient's name in the subject line add the following text
  in the `emailSubject` when creating the template or when sending an
  envelope from a template:

   `[[<roleName>_UserName]]`

   Example:

   `"emailSubject":"[[Signer 1_UserName]], Please sign this NDA"`

* To add a recipient's email address in the subject line add the
  following text in the emailSubject when creating the template or when
  sending an envelope from a template:

   `[[<roleName>_Email]]`

   Example:

   `"emailSubject":"[[Signer 1_Email]], Please sign this NDA"`

In both cases `<roleName>` is the recipient's `roleName` in the template.

For cases where another recipient (such as an Agent, Editor, or
Intermediary recipient) is entering the name and email information for
the recipient included in the email subject, then
`[[<roleName>_UserName]]` or `[[<roleName>_Email]]` is shown in the
email subject.

## Branding an Envelope

The following rules are used to determine the `brandId` used in an envelope:

* If a `brandId` is specified in the envelope or template
  and that `brandId` is available to the account,
  that brand is used in the envelope.
* If more than one template is used in an envelope,
  and more than one `brandId` is specified,
  the first `brandId` specified is used throughout the envelope.
* In cases where no brand is specified,
  and the sender belongs to a group:
  - If there is only one brand associated with the group,
    then that brand is used in the envelope.
  - Otherwise, the account's default signing brand is used.
* For envelopes that do not meet any of the previous criteria,
  the account's default signing brand is used for the envelope.


## BCC Email Address Feature

The BCC Email address feature
is designed to provide a copy
of all email communications for external archiving purposes.
DocuSign recommends that envelopes sent using the BCC for Email Archive feature,
including the BCC Email Override option,
include additional signer authentication options.

Do **not** use this feature
to send a copy of the envelope
to a recipient who does not need to sign.
Use a Carbon Copy or Certified Delivery Recipient type instead.

## Merge Recipient Roles for Draft Envelopes

When an envelope with multiple templates is sent,
the recipients from the templates are merged according to the template roles,
and empty recipients are removed.
When creating an envelope with multiple templates,
but not sending it (keeping it in a created state),
duplicate recipients are not merged,
which could leave duplicate recipients in the envelope.

To prevent this,
the query parameter `merge_roles_on_draft`
should be added when posting a draft envelope (`status` is `created`)
with multiple templates.
Doing this will merge template roles and remove empty recipients.


DocuSign recommends that the `merge_roles_on_draft` query
parameter be used any time you are creating an envelope with
multiple templates and keeping it in draft (`status` is `created`) status.


[agentDef]:                 #/definitions/agent
[apirules]:                 /esign/guide/appendix/resource_limits.html#api-rules-and-limits
[ccDef]:                     #/definitions/carbonCopy
[certfiedDef]:               #/definitions/certifiedDelivery
[connectConfigurationsRes]: /esign/restapi/Connect/ConnectConfigurations/
[connectGuide]:             https://www.docusign.com/supportdocs/pdf/connect-guide.pdf
[devecenterrecipients]:     https://www.docusign.com/developer-center/explore/features/recipients
[documentDef]:               #/definitions/document
[editorDef]:                 #/definitions/editor
[envelopeDef]:               #/definitions/envelopeDefinition
[envelopeRecipientsDef]:     #/definitions/EnvelopeRecipients
[envelopeRecipientsRes]:    /esign/restapi/Envelopes/EnvelopeRecipients/
[envRecipientTabsDef]:       #/definitions/EnvelopeRecipientTabs
[envRecipientTabsRes]:      /esign/restapi/Envelopes/EnvelopeRecipientTabs/
[eventNotificationDef]:      #/definitions/eventNotification
[inPersonDef]:               #/definitions/inPersonSigner
[intermediaryDef]:           #/definitions/intermediary
[signerDef]:                 #/definitions/signer



```js
docusign.Envelopes_PostEnvelopes({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* cdse_mode (string) - Reserved for DocuSign.
* completed_documents_only (string) - Reserved for DocuSign.
* merge_roles_on_draft (string) - When set to **true**, template roles will be merged, and empty recipients will be removed. This parameter applies when you create a draft envelope with multiple templates. (To create a draft envelope, the `status` field is set to `created`.)
* envelopeDefinition (object)

### Envelopes_PutStatus
Retrieves the envelope status for the specified envelopes.


```js
docusign.Envelopes_PutStatus({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* email (string) - Reserved for DocuSign.
* from_date (string) - The date/time setting that specifies when the request begins checking for status changes for envelopes in the account.
* start_position (string) - Reserved for DocuSign.
* to_date (string) - Optional date/time setting
* envelopeIdsRequest (object)

### Envelopes_GetEnvelope
Retrieves the overall status for the specified envelope.


```js
docusign.Envelopes_GetEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* advanced_update (string) - When true, envelope information can be added or modified.
* include (string) - Reserved for DocuSign.

### Envelopes_PutEnvelope
The Put Envelopes endpoint provides the following functionality:

* Sends the specified single draft envelope.
Add {"status":"sent"} to the request body to send the envelope.

* Voids the specified in-process envelope.
Add {"status":"voided", "voidedReason":"The reason for voiding the envelope"} to the request body to void the envelope.

* Replaces the current email subject and message for a draft envelope.
Add {"emailSubject":"subject",  "emailBlurb":"message"}  to the request body to modify the subject and message.

* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.
Add {"purgeState":"purge type"} to the request body.

*Additional information on purging documents*

The purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).

###### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. 
###### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. 
###### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.

When the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.

If `purgeState="documents_queued"` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= "documents_and_metadata_queued"` is used in the request, then the documents, attachments, and tabs are deleted.


```js
docusign.Envelopes_PutEnvelope({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* advanced_update (string) - When set to **true**, allows the caller to update recipients, tabs, custom fields, notification, email settings and other envelope attributes.
* resend_envelope (string) - When set to **true**, sends the specified envelope again.
* Envelopes (object) - Envelope creation, management

### Attachments_DeleteAttachments
Delete one or more attachments from a DRAFT envelope.


```js
docusign.Attachments_DeleteAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* envelopeAttachmentsRequest (object)

### Attachments_GetAttachments
Returns a list of attachments associated with the specified envelope


```js
docusign.Attachments_GetAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Attachments_PutAttachments
Add one or more attachments to a DRAFT or IN-PROCESS envelope.


```js
docusign.Attachments_PutAttachments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* envelopeAttachmentsRequest (object)

### Attachments_GetAttachment
Retrieves an attachment from the envelope.


```js
docusign.Attachments_GetAttachment({
  "accountId": "",
  "attachmentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* attachmentId (string) **required**
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Attachments_PutAttachment
Add an attachment to a DRAFT or IN-PROCESS envelope.


```js
docusign.Attachments_PutAttachment({
  "accountId": "",
  "attachmentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* attachmentId (string) **required**
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* attachment (object) - Contains information about an attachment.

### AuditEvents_GetAuditEvents
Gets the envelope audit events for the specified envelope.


```js
docusign.AuditEvents_GetAuditEvents({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### CustomFields_DeleteCustomFields
Deletes envelope custom fields for draft and in-process envelopes.


```js
docusign.CustomFields_DeleteCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeCustomFields (object) - Envelope custom fields

### CustomFields_GetCustomFields
Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.


```js
docusign.CustomFields_GetCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### CustomFields_PostCustomFields
Updates the envelope custom fields for draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.


```js
docusign.CustomFields_PostCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeCustomFields (object) - Envelope custom fields

### CustomFields_PutCustomFields
Updates the envelope custom fields in draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.



```js
docusign.CustomFields_PutCustomFields({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeCustomFields (object) - Envelope custom fields

### Documents_DeleteDocuments
Deletes one or more documents from an existing draft envelope.


```js
docusign.Documents_DeleteDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* envelopeDefinition (object)

### Documents_GetDocuments
Retrieves a list of documents associated with the specified envelope.


```js
docusign.Documents_GetDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* include_metadata (string) - Reserved for DocuSign.

### Documents_PutDocuments
Adds one or more documents to an existing envelope document.


```js
docusign.Documents_PutDocuments({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* apply_document_fields (string) - When **true**, document fields
* envelopeDefinition (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* certificate (string) - When set to **false**, the envelope signing certificate is removed from the download.
* encoding (string)
* encrypt (string) - When set to **true**, the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. The documents can be decrypted with the KeyManager Decrypt Document API.
* language (string) - Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). 
* recipient_id (string)
* show_changes (string) - When set to **true**, any changed fields for the returned PDF are highlighted in yellow and optional signatures or initials outlined in red. 
* watermark (string) - When set to **true**, the account has the watermark feature enabled, and the envelope is not complete, the watermark for the account is added to the PDF documents. This option can remove the watermark. 

### Documents_PutDocument
Adds a document to an existing draft envelope.


```js
docusign.Documents_PutDocument({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* apply_document_fields (string) - When **true**, document fields

### DocumentFields_DeleteDocumentFields
Deletes custom document fields from an existing envelope document.


```js
docusign.DocumentFields_DeleteDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeDocumentFields (object) - Envelope document fields

### DocumentFields_GetDocumentFields
Retrieves the custom document field information from an existing envelope document.


```js
docusign.DocumentFields_GetDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### DocumentFields_PostDocumentFields
Creates custom document fields in an existing envelope document.


```js
docusign.DocumentFields_PostDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeDocumentFields (object) - Envelope document fields

### DocumentFields_PutDocumentFields
Updates existing custom document fields in an existing envelope document.


```js
docusign.DocumentFields_PutDocumentFields({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeDocumentFields (object) - Envelope document fields

### Pages_GetPageImages
Returns document page image(s) based on input.


```js
docusign.Pages_GetPageImages({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* count (string) - The maximum number of results to be returned by this request.
* dpi (string) - Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
* max_height (string) - Sets the maximum height (in pixels) of the returned image.
* max_width (string) - Sets the maximum width (in pixels) of the returned image.
* nocache (string)
* show_changes (string)
* start_position (string) - The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* pageNumber (string) **required** - The page number being accessed.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* pageNumber (string) **required** - The page number being accessed.
* dpi (string) - Sets the dpi for the image.
* max_height (string) - Sets the maximum height for the page image in pixels. The dpi is recalculated based on this setting.
* max_width (string) - Sets the maximum width for the page image in pixels. The dpi is recalculated based on this setting.
* show_changes (string)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* pageNumber (string) **required** - The page number being accessed.
* pageRequest (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* pageNumber (string) **required** - The page number being accessed.

### Tabs_GetDocumentTabs
Returns tabs on the document.


```js
docusign.Tabs_GetDocumentTabs({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* page_numbers (string)

### Templates_GetDocumentTemplates
Retrieves the templates associated with a document in the specified envelope.


```js
docusign.Templates_GetDocumentTemplates({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* include (string) - A comma-separated list

### Templates_PostDocumentTemplates
Adds templates to a document in the specified envelope.


```js
docusign.Templates_PostDocumentTemplates({
  "accountId": "",
  "documentId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* documentTemplateList (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* templateId (string) **required** - The ID of the template being accessed.

### EmailSettings_DeleteEmailSettings
Deletes all existing email override settings for the envelope. If you want to delete an individual email override setting, use the PUT and set the value to an empty string. Note that deleting email settings will only affect email communications that occur after the deletion and the normal account email settings are used for future email communications.


```js
docusign.EmailSettings_DeleteEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### EmailSettings_GetEmailSettings
Retrieves the email override settings for the specified envelope.


```js
docusign.EmailSettings_GetEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### EmailSettings_PostEmailSettings
Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.

### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.


```js
docusign.EmailSettings_PostEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeEmailSettings (object) - Envelope email settings

### EmailSettings_PutEmailSettings
Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.

This can also be used to delete an individual email override setting by using an empty string for the value to be deleted.


```js
docusign.EmailSettings_PutEmailSettings({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeEmailSettings (object) - Envelope email settings

### FormData_GetFormData
Returns envelope form data for an existing envelope.


```js
docusign.FormData_GetFormData({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Lock_DeleteEnvelopeLock
Deletes the lock from the specified envelope. The `X-DocuSign-Edit` header must be included in the request.


```js
docusign.Lock_DeleteEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Lock_GetEnvelopeLock
Retrieves general information about the envelope lock.

If the call is made by the locked by user and the request has the same integrator key as original, then the `X-DocuSign-Edit` header and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.


```js
docusign.Lock_GetEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Lock_PostEnvelopeLock
Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.

###### Note: Users must have envelope locking capability enabled to use this function (userSetting `canLockEnvelopes` must be  set to true for the user).


```js
docusign.Lock_PostEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* lockRequest (object)

### Lock_PutEnvelopeLock
Updates the lock duration time or update the `lockedByApp` property information for the specified envelope. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.


```js
docusign.Lock_PutEnvelopeLock({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* lockRequest (object)

### Notification_GetEnvelopesEnvelopeIdNotification
Retrieves the envelope notification, reminders and expirations, information for an existing envelope.


```js
docusign.Notification_GetEnvelopesEnvelopeIdNotification({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 

### Notification_PutEnvelopesEnvelopeIdNotification
Sets envelope notification (Reminders/Expirations) structure for an existing envelope.


```js
docusign.Notification_PutEnvelopesEnvelopeIdNotification({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* envelopeNotificationRequest (object)

### Recipients_DeleteRecipients
Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.

If the envelope is `In Process`, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.


```js
docusign.Recipients_DeleteRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeRecipients (object) - Envelope recipients

### Recipients_GetRecipients
Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. 

The `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.


```js
docusign.Recipients_GetRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* include_anchor_tab_locations (string) -  When set to **true** and `include_tabs` is set to **true**, all tabs with anchor tab properties are included in the response. 
* include_extended (string) -  When set to **true**, the extended properties are included in the response. 
* include_metadata (string) - Reserved for DocuSign.
* include_tabs (string) - When set to **true**, the tab information associated with the recipient is included in the response.

### Recipients_PostRecipients
Adds one or more recipients to an envelope.

For an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient's routing order is before or the same as the envelope's next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.


```js
docusign.Recipients_PostRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* resend_envelope (string) - When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
* EnvelopeRecipients (object) - Envelope recipients

### Recipients_PutRecipients
Updates recipients in a draft envelope or corrects recipient information for an in process envelope. 

For draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.

Once an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.

If you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).


```js
docusign.Recipients_PutRecipients({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* resend_envelope (string) - When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
* EnvelopeRecipients (object) - Envelope recipients

### Recipients_PutRecipientsDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutRecipientsDocumentVisibility({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* EnvelopeDocumentVisibility (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

### Recipients_GetBulkRecipients
Retrieves the bulk recipient file information from an envelope that has a bulk recipient.


```js
docusign.Recipients_GetBulkRecipients({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* include_tabs (string) - If **true**
* start_position (string) - Reserved for DocuSign.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* bulkRecipientsRequest (object)

### ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId
Retrieves the Electronic Record and Signature Disclosure, with html formatting, associated with the account. You can use an optional query string to set the language for the disclosure.


```js
docusign.ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* langCode (string)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* langCode (string) **required** - The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to "browser" to automatically detect the browser language being used by the viewer and display the disclosure in that language.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* langCode_query (string)

### Recipients_GetRecipientDocumentVisibility
Returns document visibility for the recipients


```js
docusign.Recipients_GetRecipientDocumentVisibility({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

### Recipients_PutRecipientDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutRecipientDocumentVisibility({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* EnvelopeDocumentVisibility (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* include_chrome (string) - The added line and identifier around the initial image. Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

### Recipients_GetRecipientSignature
Retrieves signature information for a signer or sign-in-person recipient.


```js
docusign.Recipients_GetRecipientSignature({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* include_chrome (string) - When set to **true**, indicates the chromed version of the signature image should be retrieved.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.

### Recipients_DeleteRecipientTabs
Deletes one or more tabs associated with a recipient in a draft envelope.


```js
docusign.Recipients_DeleteRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* EnvelopeRecipientTabs (object) - Envelope tabs

### Recipients_GetRecipientTabs
Retrieves information about the tabs associated with a recipient in a draft envelope.


```js
docusign.Recipients_GetRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* include_anchor_tab_locations (string) - When set to **true**, all tabs with anchor tab properties are included in the response. 
* include_metadata (string) - Reserved for DocuSign.

### Recipients_PostRecipientTabs
Adds one or more tabs for a recipient.


```js
docusign.Recipients_PostRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* EnvelopeRecipientTabs (object) - Envelope tabs

### Recipients_PutRecipientTabs
Updates one or more tabs for a recipient in a draft envelope.


```js
docusign.Recipients_PutRecipientTabs({
  "accountId": "",
  "envelopeId": "",
  "recipientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* EnvelopeRecipientTabs (object) - Envelope tabs

### Templates_GetEnvelopeTemplates
This returns a list of the server-side templates, their name and ID, used in an envelope.



```js
docusign.Templates_GetEnvelopeTemplates({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* include (string) - The possible values are:  matching_applied - This returns template matching information for the template.

### Templates_PostEnvelopeTemplates
Adds templates to the specified envelope.


```js
docusign.Templates_PostEnvelopeTemplates({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* documentTemplateList (object)

### Views_PostEnvelopeCorrectView
Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 


```js
docusign.Views_PostEnvelopeCorrectView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* correctViewRequest (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* returnUrlRequest (object) - The request body for the EnvelopeViews: createSender method.

### Views_PostEnvelopeRecipientView
Returns a URL that enables you to embed the recipient view of the DocuSign UI in your applications. If the recipient is a signer, then the view will provide the signing ceremony.

###### Note: Please redirect the client to the URL. iFrames should not be used, especially if the recipient may be using a mobile or tablet. 

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* recipientViewRequest (object)

### Views_PostEnvelopeSenderView
Returns a URL that enables you to embed the sender view of the DocuSign UI in your applications. 

The returned URL can only be redirected to immediately after it is generated. It can only be used once.
Therefore, request the URL immediately before you redirect your user to it.

For the best user experience, don't use an iFrame. For iOS devices DocuSign recommends using a WebView.

Multiple solutions are available for maintaining your
client state. See the "Maintaining State" section of the [Embedded Signing introduction.](../../../../guide/usage/embedded_signing.html#maintaining-state)

After the user has completed the sending view, their browser is redirected to the `returnUrl` you supplied.

By default, if the envelope already contains one or more documents, DocuSign will initially show the document tagging view when you redirect to the URL. 

To start with the envelope's recipients and documents view instead, examine the URL in the method's response. 
Then change the query parameter from `send=1` to `send=0` to start with the recipients/documents view.


```js
docusign.Views_PostEnvelopeSenderView({
  "accountId": "",
  "envelopeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* envelopeId (string) **required** - The envelope's GUID. Eg 93be49ab-afa0-4adf-933c-f752070d71ec 
* returnUrlRequest (object) - The request body for the EnvelopeViews: createSender method.

### Folders_GetFolders
Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the `template` query string parameter.


```js
docusign.Folders_GetFolders({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include (string) - Reserved for DocuSign.
* include_items (string)
* start_position (string) - Reserved for DocuSign.
* template (string) - Specifies the items that are returned. Valid values are: 
* user_filter (string) - Reserved for DocuSign.

### Folders_GetFolderItems
Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.


```js
docusign.Folders_GetFolderItems({
  "accountId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* from_date (string) -  Only return items on or after this date. If no value is provided, the default search is the previous 30 days. 
* include_items (string)
* owner_email (string) -  The email of the folder owner. 
* owner_name (string) -  The name of the folder owner. 
* search_text (string) -  The search text used to search the items of the envelope. The search looks at recipient names and emails, envelope custom fields, sender name, and subject. 
* start_position (string) - The position of the folder items to return. This is used for repeated calls, when the number of envelopes returned is too much for one return (calls return 100 envelopes at a time). The default value is 0.
* status (string) - The current status of the envelope. If no value is provided, the default search is all/any status.
* to_date (string) - Only return items up to this date. If no value is provided, the default search is to the current date.

### Folders_PutFolderById
Moves an envelope from its current folder to the specified folder.

###### Note: You can use this endpoint to delete envelopes by specifying `recyclebin` in the `folderId` parameter of the endpoint. Placing an in process envelope (envelope status of `sent` or `delivered`) in the recycle bin voids the envelope. You can also use this endpoint to delete templates by specifying a template ID instead of an envelope ID in the 'envelopeIds' property and specifying `recyclebin` in the `folderId` parameter. 


```js
docusign.Folders_PutFolderById({
  "accountId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* foldersRequest (object)

### Groups_DeleteGroups
Deletes an existing user group.


```js
docusign.Groups_DeleteGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* Groups (object) - Group information

### Groups_GetGroups
Retrieves information about groups associated with the account.


```js
docusign.Groups_GetGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* count (string) - Number of records to return. The number must be greater than 1 and less than or equal to 100.
* group_name (string) - Filters the groups returned by the group name or a sub-string of group name.
* group_type (string)
* search_text (string)
* start_position (string) - Starting value for the list.

### Groups_PostGroups
Creates one or more groups for the account.

Groups can be used to help manage users by associating users with a group. You can associate a group with a Permission Profile, which sets the user permissions for users in that group without having to set the `userSettings` property for each user. You are not required to set Permission Profiles for a group, but it makes it easier to manage user permissions for a large number of users. You can also use groups with template sharing to limit user access to templates.


```js
docusign.Groups_PostGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* Groups (object) - Group information

### Groups_PutGroups
Updates the group name and modifies, or sets, the permission profile for the group.


```js
docusign.Groups_PutGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* Groups (object) - Group information

### Brands_DeleteGroupBrands
Deletes brand information from the requested group.


```js
docusign.Brands_DeleteGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.
* brandsRequest (object)

### Brands_GetGroupBrands
Retrieves information about the brands associated with the requested group.


```js
docusign.Brands_GetGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.

### Brands_PutGroupBrands
Adds group brand ID information to a group.


```js
docusign.Brands_PutGroupBrands({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.
* brandsRequest (object)

### Groups_DeleteGroupUsers
Deletes one or more users from a group.



```js
docusign.Groups_DeleteGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.
* userInfoList (object)

### Groups_GetGroupUsers
Retrieves a list of users in a group.


```js
docusign.Groups_GetGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.
* count (string) - Number of records to return. The number must be greater than 1 and less than or equal to 100. 
* start_position (string) - Starting value for the list.

### Groups_PutGroupUsers
Adds one or more users to an existing group.


```js
docusign.Groups_PutGroupUsers({
  "accountId": "",
  "groupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* groupId (string) **required** - The ID of the group being accessed.
* userInfoList (object)

### PaymentGatewayAccounts_GetAllPaymentGatewayAccounts
List payment gateway account information


```js
docusign.PaymentGatewayAccounts_GetAllPaymentGatewayAccounts({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### PermissionProfiles_GetPermissionProfiles
Retrieves a list of Permission Profiles. Permission Profiles are a standard set of user permissions that you can apply to individual users or users in a Group. This makes it easier to manage user permissions for a large number of users, without having to change permissions on a user-by-user basis.

Currently, Permission Profiles can only be created and modified in the DocuSign console.


```js
docusign.PermissionProfiles_GetPermissionProfiles({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include (string) - Reserved for DocuSign.

### PermissionProfiles_PostPermissionProfiles
Creates a new permission profile in the specified account.


```js
docusign.PermissionProfiles_PostPermissionProfiles({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* include (string) - A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
* AccountPermissionProfiles (object)

### PermissionProfiles_DeletePermissionProfiles
Deletes a permissions profile within the specified account.


```js
docusign.PermissionProfiles_DeletePermissionProfiles({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* permissionProfileId (string) **required**

### PermissionProfiles_GetPermissionProfile
Returns a permissions profile in the specified account.


```js
docusign.PermissionProfiles_GetPermissionProfile({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* permissionProfileId (string) **required**
* include (string) - A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

### PermissionProfiles_PutPermissionProfiles
Updates a permission profile within the specified account.


```js
docusign.PermissionProfiles_PutPermissionProfiles({
  "accountId": "",
  "permissionProfileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* permissionProfileId (string) **required**
* include (string) - A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
* AccountPermissionProfiles (object)

### PowerForms_DeletePowerFormsList
Deletes one or more PowerForms


```js
docusign.PowerForms_DeletePowerFormsList({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* powerFormsRequest (object)

### PowerForms_GetPowerFormsList
Returns the list of PowerForms available to the user.


```js
docusign.PowerForms_GetPowerFormsList({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* from_date (string) - Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
* order (string) - An optional value that sets the direction order used to sort the item list. 
* order_by (string) - An optional value that sets the file attribute used to sort the item list. 
* to_date (string) - End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

### PowerForms_PostPowerForm
Creates a new PowerForm.


```js
docusign.PowerForms_PostPowerForm({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* PowerForms (object)

### PowerForms_GetPowerFormsSenders
Returns the list of PowerForms available to the user.


```js
docusign.PowerForms_GetPowerFormsSenders({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* start_position (string) - The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

### PowerForms_DeletePowerForm
Delete a PowerForm.


```js
docusign.PowerForms_DeletePowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* powerFormId (string) **required**

### PowerForms_GetPowerForm
Returns a single PowerForm.


```js
docusign.PowerForms_GetPowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* powerFormId (string) **required**

### PowerForms_PutPowerForm
Creates a new PowerForm.


```js
docusign.PowerForms_PutPowerForm({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* powerFormId (string) **required**
* PowerForms (object)

### PowerForms_GetPowerFormFormData
Returns the form data associated with the usage of a PowerForm.


```js
docusign.PowerForms_GetPowerFormFormData({
  "accountId": "",
  "powerFormId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* powerFormId (string) **required**
* from_date (string) - Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
* to_date (string) - End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.

### RecipientNames_GetRecipientNames
Retrieves a list of recipients in the specified account that are associated with a email address supplied in the query string.


```js
docusign.RecipientNames_GetRecipientNames({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* email (string) - The email address for the user

### SearchFolders_GetSearchFolderContents
Retrieves a list of envelopes that match the criteria specified in the query.

If the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.


```js
docusign.SearchFolders_GetSearchFolderContents({
  "accountId": "",
  "searchFolderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* searchFolderId (string) **required** - Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.
* all (string) - Specifies that all envelopes that match the criteria are returned.
* count (string) - Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
* from_date (string) - Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
* include_recipients (string) - When set to **true**, the recipient information is returned in the response.
* order (string) - Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order.
* order_by (string) - Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`.
* start_position (string) - Specifies the the starting location in the result set of the items that are returned.
* to_date (string) - Specifies the end of the date range to return.

### Settings_GetSettings
Retrieves the account settings information for the specified account.


```js
docusign.Settings_GetSettings({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Settings_PutSettings
Updates the account settings for the specified account.


```js
docusign.Settings_PutSettings({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* accountSettingsInformation (object) - Contains account settings information.

### ENoteConfiguration_DeleteENoteConfiguration
Deletes configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_DeleteENoteConfiguration({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### ENoteConfiguration_GetENoteConfiguration
Returns the configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_GetENoteConfiguration({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### ENoteConfiguration_PutENoteConfiguration
Updates configuration information for the eNote eOriginal integration.


```js
docusign.ENoteConfiguration_PutENoteConfiguration({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* ENoteConfigurations (object)

### AccountPasswordRules_GetAccountPasswordRules
Get the password rules


```js
docusign.AccountPasswordRules_GetAccountPasswordRules({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### AccountPasswordRules_PutAccountPasswordRules
Update the password rules


```js
docusign.AccountPasswordRules_PutAccountPasswordRules({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* AccountPasswordRules (object)

### TabSettings_GetTabSettings
Returns tab settings list for specified account


```js
docusign.TabSettings_GetTabSettings({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### TabSettings_PutSettings
Modifies tab settings for specified account


```js
docusign.TabSettings_PutSettings({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* AccountTabSettings (object)

### SharedAccess_GetSharedAccess
Reserved: Retrieves shared item status for one or more users and types of items.

Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared=shared_from.


```js
docusign.SharedAccess_GetSharedAccess({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* count (string) - Specifies maximum number of results included in the response. If no value is specified, this defaults to 1000.
* envelopes_not_shared_user_status (string)
* folder_ids (string) - A comma separated list of folder ID GUIDs.
* item_type (string) - Reserved:
* search_text (string) - This can be used to filter user names in the response. The wild-card '*' (asterisk) can be used around the string.
* shared (string) - Reserved:
* start_position (string) - Reserved:
* user_ids (string) - Reserved:

### SharedAccess_PutSharedAccess
Reserved: Sets the shared access information for one or more users.


```js
docusign.SharedAccess_PutSharedAccess({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* item_type (string)
* user_ids (string)
* accountSharedAccess (object) - Contains shared access information.

### AccountSignatureProviders_GetSignatureProviders
Returns Account available signature providers for specified account.


```js
docusign.AccountSignatureProviders_GetSignatureProviders({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### SigningGroups_DeleteSigningGroups
Deletes one or more signing groups in the specified account.


```js
docusign.SigningGroups_DeleteSigningGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupInformation (object)

### SigningGroups_GetSigningGroups
Retrieves a list of all signing groups in the specified account.


```js
docusign.SigningGroups_GetSigningGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* group_type (string)
* include_users (string) - When set to **true**, the response includes the signing group members. 

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupInformation (object)

### SigningGroups_PutSigningGroups
Updates the name of one or more existing signing groups. 


```js
docusign.SigningGroups_PutSigningGroups({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupInformation (object)

### SigningGroups_GetSigningGroup
Retrieves information, including group member information, for the specified signing group. 


```js
docusign.SigningGroups_GetSigningGroup({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupId (string) **required**

### SigningGroups_PutSigningGroup
Updates signing group name and member information. You can also add new members to the signing group. A signing group can have a maximum of 50 members. 


```js
docusign.SigningGroups_PutSigningGroup({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupId (string) **required**
* SigningGroups (object) - Signing groups

### SigningGroups_DeleteSigningGroupUsers
Deletes  one or more members from the specified signing group. 


```js
docusign.SigningGroups_DeleteSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupId (string) **required**
* SigningGroupUsers (object) - Signing groups' users

### SigningGroups_GetSigningGroupUsers
Retrieves the list of members in the specified Signing Group.


```js
docusign.SigningGroups_GetSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupId (string) **required**

### SigningGroups_PutSigningGroupUsers
Adds one or more new members to a signing group. A signing group can have a maximum of 50 members. 


```js
docusign.SigningGroups_PutSigningGroupUsers({
  "accountId": "",
  "signingGroupId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signingGroupId (string) **required**
* SigningGroupUsers (object) - Signing groups' users

### SupportedLanguages_GetSupportedLanguages
List supported languages for the recipient language setting


```js
docusign.SupportedLanguages_GetSupportedLanguages({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Tabs_GetTabDefinitions
Retrieves a list of all tabs associated with the account.


```js
docusign.Tabs_GetTabDefinitions({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* custom_tab_only (string) - When set to **true**, only custom tabs are returned in the response. 

### Tabs_PostTabDefinitions
Creates a tab with pre-defined properties, such as a text tab with a certain font type and validation pattern. Users can access the custom tabs when sending documents through the DocuSign web application.

Custom tabs can be created for approve, checkbox, company, date, date signed, decline, email, email address, envelope ID, first name, formula, full name, initial here, last name, list, note, number, radio, sign here, signer attachment, SSN, text, title, and zip tabs.


```js
docusign.Tabs_PostTabDefinitions({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* CustomTabs (object) - Custom tabs

### Tab_DeleteCustomTab
Deletes the custom from the specified account.


```js
docusign.Tab_DeleteCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* customTabId (string) **required**

### Tab_GetCustomTab
Retrieves information about the requested custom tab on the specified account.


```js
docusign.Tab_GetCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* customTabId (string) **required**

### Tab_PutCustomTab
Updates the information in a custom tab for the specified account.


```js
docusign.Tab_PutCustomTab({
  "accountId": "",
  "customTabId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* customTabId (string) **required**
* CustomTabs (object) - Custom tabs

### Templates_GetTemplates
Retrieves the list of templates for the specified account. The request can be limited to a specific folder.


```js
docusign.Templates_GetTemplates({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* count (string) - Number of records to return in the cache.
* folder (string) - The query value can be a folder name or folder ID. The response will only return templates in the specified folder.
* folder_ids (string) - A comma separated list of folder ID GUIDs.
* folder_types (string)
* from_date (string) - Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
* include (string) - A comma-separated list
* order (string) - Sets the direction order used to sort the list. Valid values are: -asc = ascending sort order (a to z)  -desc = descending sort order (z to a)
* order_by (string) - Sets the file attribute used to sort the list. Valid values are:  -name: template name  -modified: date/time template was last modified.  -used: date/time the template was last used.
* search_text (string) - The search text used to search the names of templates.
* shared (string)
* shared_by_me (string) - If true, the response only includes templates shared by the user. If false, the response only returns template not shared by the user. If not specified, the response is not affected.
* start_position (string) - The starting index for the first template shown in the response. This must be greater than or equal to 0 (zero).
* to_date (string) - End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.
* used_from_date (string) - Start of the search date range. Only returns templates used or edited on or after this date/time. If no value is specified, there is no limit on the earliest date used.
* used_to_date (string) - End of the search date range. Only returns templates used or edited up to this date/time. If no value is provided, this defaults to the current date.
* user_filter (string) - Sets if the templates shown in the response Valid values are:  -owned_by_me: only shows templates the user owns.  -shared_with_me: only shows templates that are shared with the user.  -all: shows all templates owned or shared with the user.
* user_id (string)

### Templates_PostTemplates
Creates a template definition using a multipart request.

### Template Email Subject Merge Fields

Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.

The merge fields, based on the recipient's role name, are added to the `emailSubject` property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.

Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.
###### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* Templates (object) - Template management

### Templates_GetTemplate
Retrieves the definition of the specified template.


```js
docusign.Templates_GetTemplate({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* include (string) - A comma-separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.

### Templates_PutTemplate
Updates an existing template.


```js
docusign.Templates_PutTemplate({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* Templates (object) - Template management

### CustomFields_DeleteTemplateCustomFields
Deletes envelope custom fields in a template.


```js
docusign.CustomFields_DeleteTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templateCustomFields (object)

### CustomFields_GetTemplateCustomFields
Retrieves the custom document field information from an existing template.


```js
docusign.CustomFields_GetTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.

### CustomFields_PostTemplateCustomFields
Creates custom document fields in an existing template document.


```js
docusign.CustomFields_PostTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templateCustomFields (object)

### CustomFields_PutTemplateCustomFields
Updates the custom fields in a template.

Each custom field used in a template must have a unique name.


```js
docusign.CustomFields_PutTemplateCustomFields({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templateCustomFields (object)

### Documents_DeleteTemplateDocuments
Deletes one or more documents from an existing template.


```js
docusign.Documents_DeleteTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* envelopeDefinition (object)

### Documents_GetTemplateDocuments
Retrieves a list of documents associated with the specified template.


```js
docusign.Documents_GetTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.

### Documents_PutTemplateDocuments
Adds one or more documents to an existing template document.


```js
docusign.Documents_PutTemplateDocuments({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* apply_document_fields (string) - When **true**, document fields
* envelopeDefinition (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* encrypt (string)
* show_changes (string)

### Documents_PutTemplateDocument
Adds the specified document to an existing template document.


```js
docusign.Documents_PutTemplateDocument({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* apply_document_fields (string) - When **true**, document fields
* is_envelope_definition (string)
* envelopeDefinition (object)

### DocumentFields_DeleteTemplateDocumentFields
Deletes custom document fields from an existing template document.


```js
docusign.DocumentFields_DeleteTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* TemplateDocumentFields (object) - Template document fields

### DocumentFields_GetTemplateDocumentFields
Retrieves the custom document fields for an existing template document.


```js
docusign.DocumentFields_GetTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.

### DocumentFields_PostTemplateDocumentFields
Creates custom document fields in an existing template document.


```js
docusign.DocumentFields_PostTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* TemplateDocumentFields (object) - Template document fields

### DocumentFields_PutTemplateDocumentFields
Updates existing custom document fields in an existing template document.


```js
docusign.DocumentFields_PutTemplateDocumentFields({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* TemplateDocumentFields (object) - Template document fields

### Pages_GetTemplatePageImages
Returns document page image(s) based on input.


```js
docusign.Pages_GetTemplatePageImages({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* count (string) - The maximum number of results to be returned by this request.
* dpi (string) - Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
* max_height (string) - Sets the maximum height (in pixels) of the returned image.
* max_width (string) - Sets the maximum width (in pixels) of the returned image.
* nocache (string)
* show_changes (string)
* start_position (string) - The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* pageNumber (string) **required** - The page number being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* pageRequest (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* pageNumber (string) **required** - The page number being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* dpi (string) - Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
* max_height (string) - Sets the maximum height (in pixels) of the returned image.
* max_width (string) - Sets the maximum width (in pixels) of the returned image.
* show_changes (string)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* pageNumber (string) **required** - The page number being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* pageRequest (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* pageNumber (string) **required** - The page number being accessed.
* templateId (string) **required** - The ID of the template being accessed.

### Tabs_GetTemplateDocumentTabs
Returns tabs on the document.


```js
docusign.Tabs_GetTemplateDocumentTabs({
  "accountId": "",
  "documentId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* documentId (string) **required** - The ID of the document being accessed.
* templateId (string) **required** - The ID of the template being accessed.
* page_numbers (string)

### Lock_DeleteTemplateLock
Deletes the lock from the specified template. The `X-DocuSign-Edit` header must be included in the request.


```js
docusign.Lock_DeleteTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* lockRequest (object)

### Lock_GetTemplateLock
Retrieves general information about the template lock.

If the call is made by the user who has the lock and the request has the same integrator key as original, then the `X-DocuSign-Edit` header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.


```js
docusign.Lock_GetTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.

### Lock_PostTemplateLock
Locks the specified template, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the template.

###### Note: Users must have envelope locking capability enabled to use this function (the userSetting property `canLockEnvelopes` must be set to **true** for the user).


```js
docusign.Lock_PostTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* lockRequest (object)

### Lock_PutTemplateLock
Updates the lock duration time or update the `lockedByApp` property information for the specified template. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.


```js
docusign.Lock_PutTemplateLock({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* lockRequest (object)

### Notification_GetTemplatesTemplateIdNotification
Retrieves the envelope notification, reminders and expirations, information for an existing template.


```js
docusign.Notification_GetTemplatesTemplateIdNotification({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.

### Notification_PutTemplatesTemplateIdNotification
Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.


```js
docusign.Notification_PutTemplatesTemplateIdNotification({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templateNotificationRequest (object)

### Recipients_DeleteTemplateRecipients
Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.


```js
docusign.Recipients_DeleteTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templateRecipients (object)

### Recipients_GetTemplateRecipients
Retrieves the information for all recipients in the specified template.


```js
docusign.Recipients_GetTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* include_anchor_tab_locations (string) -  When set to **true** and `include_tabs` is set to **true**, all tabs with anchor tab properties are included in the response. 
* include_extended (string) -  When set to **true**, the extended properties are included in the response. 
* include_tabs (string) - When set to **true**, the tab information associated with the recipient is included in the response.

### Recipients_PostTemplateRecipients
Adds one or more recipients to a template.


```js
docusign.Recipients_PostTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* resend_envelope (string) - When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
* templateRecipients (object)

### Recipients_PutTemplateRecipients
Updates recipients in a template. 

You can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.


```js
docusign.Recipients_PutTemplateRecipients({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* resend_envelope (string) - When set to **true**, resends the   envelope if the new recipient's routing order is before or the same as the envelope's next recipient.
* templateRecipients (object)

### Recipients_PutTemplateRecipientsDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutTemplateRecipientsDocumentVisibility({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* TemplateDocumentVisibility (object)

### Recipients_DeleteTemplateRecipient
Deletes the specified recipient file from the specified template.


```js
docusign.Recipients_DeleteTemplateRecipient({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* templateRecipients (object)

### Recipients_DeleteTemplateBulkRecipientsFile
Deletes the bulk recipient list on a template.


```js
docusign.Recipients_DeleteTemplateBulkRecipientsFile({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.

### Recipients_GetTemplateBulkRecipients
Retrieves the bulk recipient file information from a template that has a bulk recipient.


```js
docusign.Recipients_GetTemplateBulkRecipients({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* include_tabs (string) - When set to **true**, the tab information associated with the recipient is included in the response.
* start_position (string) - Reserved for DocuSign.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* bulkRecipientsRequest (object)

### Recipients_GetTemplateRecipientDocumentVisibility
Returns document visibility for the recipients


```js
docusign.Recipients_GetTemplateRecipientDocumentVisibility({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.

### Recipients_PutTemplateRecipientDocumentVisibility
Updates document visibility for the recipients


```js
docusign.Recipients_PutTemplateRecipientDocumentVisibility({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* TemplateDocumentVisibility (object)

### Recipients_DeleteTemplateRecipientTabs
Deletes one or more tabs associated with a recipient in a template.


```js
docusign.Recipients_DeleteTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* templateTabs (object)

### Recipients_GetTemplateRecipientTabs
Gets the tabs information for a signer or sign-in-person recipient in a template.


```js
docusign.Recipients_GetTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* include_anchor_tab_locations (string) - When set to **true**, all tabs with anchor tab properties are included in the response. 
* include_metadata (string) - Reserved for DocuSign.

### Recipients_PostTemplateRecipientTabs
Adds one or more tabs for a recipient.


```js
docusign.Recipients_PostTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* templateTabs (object)

### Recipients_PutTemplateRecipientTabs
Updates one or more tabs for a recipient in a template.


```js
docusign.Recipients_PutTemplateRecipientTabs({
  "accountId": "",
  "recipientId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* recipientId (string) **required** - The `recipientId` used when the envelope or template was created.
* templateId (string) **required** - The ID of the template being accessed.
* templateTabs (object)

### Views_PostTemplateEditView
Provides a URL to start an edit view of the Template UI


```js
docusign.Views_PostTemplateEditView({
  "accountId": "",
  "templateId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* returnUrlRequest (object) - The request body for the EnvelopeViews: createSender method.

### Templates_DeleteTemplatePart
Removes a member group's sharing permissions for a specified template.


```js
docusign.Templates_DeleteTemplatePart({
  "accountId": "",
  "templateId": "",
  "templatePart": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templatePart (string) **required** - Currently, the only defined part is **groups**.
* Groups (object) - Group information

### Templates_PutTemplatePart
Shares a template with the specified members group.


```js
docusign.Templates_PutTemplatePart({
  "accountId": "",
  "templateId": "",
  "templatePart": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* templateId (string) **required** - The ID of the template being accessed.
* templatePart (string) **required** - Currently, the only defined part is **groups**.
* Groups (object) - Group information

### UnsupportedFileTypes_GetUnsupportedFileTypes
Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.


```js
docusign.UnsupportedFileTypes_GetUnsupportedFileTypes({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Users_DeleteUsers
This closes one or more user records in the account. Users are never deleted from an account, but closing a user prevents them from using account functions.

The response returns whether the API execution was successful (200 - OK) or  if it failed. The response contains a user structure similar to the request and includes the user changes. If an error occurred during the DELETE operation for any of the users, the response for that user contains an `errorDetails` node with `errorCode` and `message` properties.


```js
docusign.Users_DeleteUsers({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userInfoList (object)

### Users_GetUsers
Retrieves the list of users for the specified account.

The response returns the list of users for the account along with the information about the result set. If the `additional_info` query was added to the endpoint and set to **true**, the full user information is returned for each user


```js
docusign.Users_GetUsers({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* additional_info (string) - When set to **true**, the full list of user information is returned for each user in the account.
* count (string) - Number of records to return. The number must be greater than 0 and less than or equal to 100. 
* email (string)
* email_substring (string) - Filters the returned user records by the email address or a sub-string of email address.
* group_id (string) - Filters user records returned by one or more group Id's.
* include_usersettings_for_csv (string)
* login_status (string)
* not_group_id (string)
* start_position (string) - Starting value for the list. 
* status (string) - Filters the results by user status.
* user_name_substring (string) - Filters the user records returned by the user name or a sub-string of user name.

### Users_PostUsers
Adds new users to your account. Set the `userSettings` property in the request to specify the actions the users can perform on the account.


```js
docusign.Users_PostUsers({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* newUsersDefinition (object)

### Users_PutUsers
Change one or more user in the specified account.


```js
docusign.Users_PutUsers({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userInformationList (object)

### User_GetUser
Retrieves the user information for the specified user. 

To return additional user information that details the last login date, login status, and the user's password expiration date, set the optional `additional_info` query string parameter to **true**.


```js
docusign.User_GetUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* additional_info (string) - When set to **true**, the full list of user information is returned for each user in the account.
* email (string)

### User_PutUser
Updates the specified user information.


```js
docusign.User_PutUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* Users (object) - User management

### CloudStorage_DeleteCloudStorageProviders
Deletes the user authentication information for one or more cloud storage providers. The next time the user tries to access the cloud storage provider, they must pass normal authentication.


```js
docusign.CloudStorage_DeleteCloudStorageProviders({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* CloudStorageProviders (object) - Cloud storage providers

### CloudStorage_GetCloudStorageProviders
Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.



```js
docusign.CloudStorage_GetCloudStorageProviders({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* redirectUrl (string) -  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.

### CloudStorage_PostCloudStorage
Configures the redirect URL information  for one or more cloud storage providers for the specified user. The redirect URL is added to the authentication URL to complete the return route.


```js
docusign.CloudStorage_PostCloudStorage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* CloudStorageProviders (object) - Cloud storage providers

### CloudStorage_DeleteCloudStorage
Deletes the user authentication information for the specified cloud storage provider. The next time the user tries to access the cloud storage provider, they must pass normal authentication for this cloud storage provider.


```js
docusign.CloudStorage_DeleteCloudStorage({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* serviceId (string) **required** - The ID of the service to access. 
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### CloudStorage_GetCloudStorage
Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.


```js
docusign.CloudStorage_GetCloudStorage({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* serviceId (string) **required** - The ID of the service to access. 
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* redirectUrl (string) -  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.

### CloudStorageFolder_GetCloudStorageFolderAll
Retrieves a list of all the items in a specified folder from the specified cloud storage provider. 


```js
docusign.CloudStorageFolder_GetCloudStorageFolderAll({
  "accountId": "",
  "serviceId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* serviceId (string) **required** - The ID of the service to access. 
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* cloud_storage_folder_path (string) - A comma separated list of folder IDs included in the request. 
* count (string) - An optional value that sets how many items are included in the response. 
* order (string) - An optional value that sets the direction order used to sort the item list. 
* order_by (string) - An optional value that sets the file attribute used to sort the item list. 
* search_text (string)
* start_position (string) - Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* serviceId (string) **required** - The ID of the service to access. 
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* cloud_storage_folder_path (string)
* count (string) - An optional value that sets how many items are included in the response. 
* order (string) - An optional value that sets the direction order used to sort the item list. 
* order_by (string) - An optional value that sets the file attribute used to sort the item list. 
* search_text (string)
* start_position (string) - Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* UserCustomSettings (object) - Users' custom settings

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* UserCustomSettings (object) - Users' custom settings

### UserProfile_GetProfile
Retrieves the user profile information, the privacy settings and personal information (address, phone number, etc.) for the specified user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.


```js
docusign.UserProfile_GetProfile({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserProfile_PutProfile
Updates the user's detail information, profile information, privacy settings, and personal information in the user ID card.

You can also change a user's name by changing the information in the `userDetails` property. When changing a user's name, you can either change the information in the `userName` property OR change the information in `firstName`, `middleName`, `lastName, suffixName`, and `title` properties. Changes to `firstName`, `middleName`, `lastName`, `suffixName`, and `title` properties take precedence over changes to the `userName` property.


```js
docusign.UserProfile_PutProfile({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* UserProfiles (object) - Users' profiles

### UserProfileImage_DeleteUserProfileImage
Deletes the user profile image from the  specified user's profile.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.


```js
docusign.UserProfileImage_DeleteUserProfileImage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* encoding (string)

### UserProfileImage_PutUserProfileImage
Updates the user profile image by uploading an image to the user profile.

The supported image formats are: gif, png, jpeg, and bmp. The file must be less than 200K. For best viewing results, DocuSign recommends that the image is no more than 79 pixels wide and high.


```js
docusign.UserProfileImage_PutUserProfileImage({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserSettings_GetUserSettings
Retrieves a list of the account settings and email notification information for the specified user.

The response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].


```js
docusign.UserSettings_GetUserSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserSettings_PutUserSettings
Updates the account settings list and email notification types for the specified user.


```js
docusign.UserSettings_PutUserSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* userSettingsInformation (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* stamp_type (string)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* userSignaturesInformation (object)

### UserSignatures_PutUserSignature
Adds/updates a user signature.


```js
docusign.UserSignatures_PutUserSignature({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* userSignaturesInformation (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserSignatures_PutUserSignatureById
Creates, or updates, the signature font and initials for the specified user. When creating a signature, you use this resource to create the signature name and then add the signature and initials images into the signature.

###### Note: This will also create a default signature for the user when one does not exist.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".


```js
docusign.UserSignatures_PutUserSignatureById({
  "accountId": "",
  "signatureId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* close_existing_signature (string) - When set to **true**, closes the current signature.
* userSignatureDefinition (object)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* imageType (string) **required** - One of **signature_image** or **initials_image**.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* imageType (string) **required** - One of **signature_image** or **initials_image**.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* include_chrome (string)

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* imageType (string) **required** - One of **signature_image** or **initials_image**.
* signatureId (string) **required** - The ID of the signature being accessed.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserSocialLogin_DeleteUserSocialLogin
Deletes a social account from a use's account.


```js
docusign.UserSocialLogin_DeleteUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* UserSocialAccountLogins (object) - Users' social account logins

### UserSocialLogin_GetUserSocialLogin
Retrieves a list of social accounts linked to a user's account.


```js
docusign.UserSocialLogin_GetUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.

### UserSocialLogin_PutUserSocialLogin
Adds a new social account to a user's account.


```js
docusign.UserSocialLogin_PutUserSocialLogin({
  "accountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* userId (string) **required** - The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
* UserSocialAccountLogins (object) - Users' social account logins

### Views_PostAccountConsoleView
Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.


```js
docusign.Views_PostAccountConsoleView({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* consoleViewRequest (object)

### Watermark_GetWatermark
Get watermark information.


```js
docusign.Watermark_GetWatermark({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Watermark_PutWatermark
Update watermark information.


```js
docusign.Watermark_PutWatermark({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* AccountWatermarks (object)

### WatermarkPreview_PutWatermarkPreview
Get watermark preview.


```js
docusign.WatermarkPreview_PutWatermarkPreview({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* AccountWatermarks (object)

### Workspace_GetWorkspaces
Gets information about the Workspaces that have been created.


```js
docusign.Workspace_GetWorkspaces({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.

### Workspace_PostWorkspace
Creates a new workspace.


```js
docusign.Workspace_PostWorkspace({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* Workspaces (object)

### Workspace_DeleteWorkspace
Deletes an existing workspace (logically).


```js
docusign.Workspace_DeleteWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* workspaceId (string) **required** - Specifies the workspace ID GUID.

### Workspace_GetWorkspace
Retrives properties about a workspace given a unique workspaceId. 


```js
docusign.Workspace_GetWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* workspaceId (string) **required** - Specifies the workspace ID GUID.

### Workspace_PutWorkspace
Updates information about a specific workspace.


```js
docusign.Workspace_PutWorkspace({
  "accountId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* workspaceId (string) **required** - Specifies the workspace ID GUID.
* Workspaces (object)

### WorkspaceFolder_DeleteWorkspaceItems
Deletes workspace one or more specific files/folders from the given folder or root.


```js
docusign.WorkspaceFolder_DeleteWorkspaceItems({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.
* workspaceItemList (object) - Provides properties that describe the items contained in a workspace.

### WorkspaceFolder_GetWorkspaceFolder
Retrieves workspace folder contents, which can include sub folders and files.


```js
docusign.WorkspaceFolder_GetWorkspaceFolder({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.
* count (string) - The maximum number of results to be returned by this request.
* include_files (string) - When set to **true**, file information is returned in the response along with folder information. The default is **false**.
* include_sub_folders (string) - When set to **true**, information about the sub-folders of the current folder is returned. The default is **false**.
* include_thumbnails (string) - When set to **true**, thumbnails are returned as part of the response.  The default is **false**.
* include_user_detail (string) - Set to **true** to return extended details about the user. The default is **false**.
* start_position (string) - The position within the total result set from which to start returning values.
* workspace_user_id (string) - If set, then the results are filtered to those associated with the specified userId.

### WorkspaceFile_PostWorkspaceFiles
Creates a workspace file.


```js
docusign.WorkspaceFile_PostWorkspaceFiles({
  "accountId": "",
  "folderId": "",
  "workspaceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* fileId (string) **required** - Specifies the room file ID GUID.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.
* is_download (string) - When set to **true**, the Content-Disposition header is set in the response. The value of the header provides the filename of the file. Default is **false**.
* pdf_version (string) - When set to **true** the file returned as a PDF.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* fileId (string) **required** - Specifies the room file ID GUID.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.

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

#### Parameters
* accountId (string) **required** - The external account number (int) or account ID Guid.
* fileId (string) **required** - Specifies the room file ID GUID.
* folderId (string) **required** - The ID of the folder being accessed.
* workspaceId (string) **required** - Specifies the workspace ID GUID.
* count (string) - The maximum number of results to be returned by this request.
* dpi (string) - Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
* max_height (string) - Sets the maximum height (in pixels) of the returned image.
* max_width (string) - Sets the maximum width (in pixels) of the returned image.
* start_position (string) - The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.

### BillingPlans_GetBillingPlans
Retrieves a list of the billing plans associated with a distributor.


```js
docusign.BillingPlans_GetBillingPlans(null, context)
```

#### Parameters
*This action has no parameters*

### BillingPlans_GetBillingPlan
Retrieves the billing plan details for the specified billing plan ID.


```js
docusign.BillingPlans_GetBillingPlan({
  "billingPlanId": ""
}, context)
```

#### Parameters
* billingPlanId (string) **required** - The ID of the billing plan being accessed.

### PasswordRules_GetPasswordRules
Get membership account password rules


```js
docusign.PasswordRules_GetPasswordRules(null, context)
```

#### Parameters
*This action has no parameters*

### APIRequestLog_DeleteRequestLogs
Deletes the request log files.


```js
docusign.APIRequestLog_DeleteRequestLogs(null, context)
```

#### Parameters
*This action has no parameters*

### APIRequestLog_GetRequestLogs
Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.

If the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.

If the Accept header is set to `application/json` or `application/xml`, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below. 


```js
docusign.APIRequestLog_GetRequestLogs({}, context)
```

#### Parameters
* encoding (string)

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

#### Parameters
* requestLogId (string) **required**

### APIRequestLog_GetRequestLogSettings
Retrieves the current API request logging setting for the user and remaining log entries.

**Response**
The response includes the current API request logging setting for the user, along with the maximum log entries and remaining log entries.


```js
docusign.APIRequestLog_GetRequestLogSettings(null, context)
```

#### Parameters
*This action has no parameters*

### APIRequestLog_PutRequestLogSettings
Enables or disables API request logging for troubleshooting.

When enabled (`apiRequestLogging` is set to true), REST API requests and responses for the user are added to a log. A log can have up to 50 requests/responses and the current number of log entries can be determined by getting the settings. Logging is automatically disabled when the log limit of 50 is reached.

You can call [ML:GetRequestLog] or [ML:GetRequestLogs] to download the log files (individually or as a zip file). Call [ML:DeleteRequestLogs] to clear the log by deleting current entries.

Private information, such as passwords and integrator key information, which is normally located in the call header is omitted from the request/response log.

###### Note: API request logging only captures requests from the authenticated user. Any call that does not authenticate the user and resolve a userId isn't logged. Meaning that login_information, NewAccounts, or other distributor-credential calls are not logged.



```js
docusign.APIRequestLog_PutRequestLogSettings({}, context)
```

#### Parameters
* RequestLogs (object) - Request logs

### LoginInformation_GetLoginInformation
Retrieves account information for the authenticated user. Since the API is sessionless, this method does not actually log you in. 
Instead, the method returns information about the account or accounts that the authenticated user has access to.

###### Important: This method must only be used for the [Legacy Header Authentication][legacyheader] flow. Use the [`AccountServer: userInfo` method](../../../../guide/authentication/userinfo.html) for the OAuth2 Authentiction Code and Implicit Grant flows.

Each account has a `baseUrl` property, returned in the response.
Use this `baseUrl` in all future API calls as the base of the request URL.

For each account, the `baseUrl` property includes the DocuSign server, the API version, and the `accountId` property.

It is not uncommon for an authenticated user to have access to more than one account (and more than one `baseUrl`). Depending on your integration's use case, your integration may choose to:

* Use the account whose `isDefault` field is `true`.
* List the available accounts and ask the user to choose one.
* Enable the system administrator to set the account that should be used by your integration.

If this method returns successfully, then you also know that the user has successfully authenticated with the DocuSign Signature platform.


[legacyheader]: ../../../../guide/authentication/legacy_auth.html
[userinfo]: ../../../../guide/authentication/userinfo.html
[authcode]: ../../../../guide/authentication/oa2_auth_code.md
[implicit]: ../../../../guide/authentication/oa2_implicit.md



```js
docusign.LoginInformation_GetLoginInformation({}, context)
```

#### Parameters
* api_password (string) - Reserved for DocuSign.
* embed_account_id_guid (string)
* include_account_id_guid (string) - When set to **true**, shows the account ID GUID in the response.
* login_settings (string) - Determines whether login settings are returned in the response.

### LoginInformation_PutLoginInformation
Updates the password for a specified user.


```js
docusign.LoginInformation_PutLoginInformation({
  "loginPart": ""
}, context)
```

#### Parameters
* loginPart (string) **required** - Currently, only the value **password** is supported.
* userPasswordInformation (object)

### OAuth2_PostRevoke
**Deprecated**

Revokes an OAuth2 authorization server token. After the revocation is complete, a caller must re-authenticate to restore access.



```js
docusign.OAuth2_PostRevoke(null, context)
```

#### Parameters
*This action has no parameters*

### OAuth2_PostToken
**Deprecated**

Creates an OAuth2 authorization server token endpoint.



```js
docusign.OAuth2_PostToken(null, context)
```

#### Parameters
*This action has no parameters*

