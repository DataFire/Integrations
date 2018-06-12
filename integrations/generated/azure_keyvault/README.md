# @datafire/azure_keyvault

Client library for KeyVaultClient

## Installation and Usage
```bash
npm install --save @datafire/azure_keyvault
```
```js
let azure_keyvault = require('@datafire/azure_keyvault').create();

azure_keyvault.GetCertificates({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The key vault client performs cryptographic key operations and vault operations against the Key Vault service.

## Actions

### GetCertificates
The GetCertificates operation returns the set of certificates resources in the specified key vault. This operation requires the certificates/list permission.


```js
azure_keyvault.GetCertificates({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateListResult](#certificatelistresult)

### DeleteCertificateContacts
Deletes the certificate contacts for a specified key vault certificate. This operation requires the certificates/managecontacts permission.


```js
azure_keyvault.DeleteCertificateContacts({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [Contacts](#contacts)

### GetCertificateContacts
The GetCertificateContacts operation returns the set of certificate contact resources in the specified key vault. This operation requires the certificates/managecontacts permission.


```js
azure_keyvault.GetCertificateContacts({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [Contacts](#contacts)

### SetCertificateContacts
Sets the certificate contacts for the specified key vault. This operation requires the certificates/managecontacts permission.


```js
azure_keyvault.SetCertificateContacts({
  "contacts": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * contacts **required** [Contacts](#contacts)
  * api-version **required** `string`: Client API version.

#### Output
* output [Contacts](#contacts)

### GetCertificateIssuers
The GetCertificateIssuers operation returns the set of certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.


```js
azure_keyvault.GetCertificateIssuers({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateIssuerListResult](#certificateissuerlistresult)

### DeleteCertificateIssuer
The DeleteCertificateIssuer operation permanently removes the specified certificate issuer from the vault. This operation requires the certificates/manageissuers/deleteissuers permission.


```js
azure_keyvault.DeleteCertificateIssuer({
  "issuer-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * issuer-name **required** `string`: The name of the issuer.
  * api-version **required** `string`: Client API version.

#### Output
* output [IssuerBundle](#issuerbundle)

### GetCertificateIssuer
The GetCertificateIssuer operation returns the specified certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.


```js
azure_keyvault.GetCertificateIssuer({
  "issuer-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * issuer-name **required** `string`: The name of the issuer.
  * api-version **required** `string`: Client API version.

#### Output
* output [IssuerBundle](#issuerbundle)

### UpdateCertificateIssuer
The UpdateCertificateIssuer operation performs an update on the specified certificate issuer entity. This operation requires the certificates/setissuers permission.


```js
azure_keyvault.UpdateCertificateIssuer({
  "issuer-name": "",
  "parameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * issuer-name **required** `string`: The name of the issuer.
  * parameter **required** [CertificateIssuerUpdateParameters](#certificateissuerupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [IssuerBundle](#issuerbundle)

### SetCertificateIssuer
The SetCertificateIssuer operation adds or updates the specified certificate issuer. This operation requires the certificates/setissuers permission.


```js
azure_keyvault.SetCertificateIssuer({
  "issuer-name": "",
  "parameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * issuer-name **required** `string`: The name of the issuer.
  * parameter **required** [CertificateIssuerSetParameters](#certificateissuersetparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [IssuerBundle](#issuerbundle)

### DeleteCertificate
Deletes all versions of a certificate object along with its associated policy. Delete certificate cannot be used to remove individual versions of a certificate object. This operation requires the certificates/delete permission.


```js
azure_keyvault.DeleteCertificate({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedCertificateBundle](#deletedcertificatebundle)

### CreateCertificate
If this is the first version, the certificate resource is created. This operation requires the certificates/create permission.


```js
azure_keyvault.CreateCertificate({
  "certificate-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * parameters **required** [CertificateCreateParameters](#certificatecreateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateOperation](#certificateoperation)

### ImportCertificate
Imports an existing valid certificate, containing a private key, into Azure Key Vault. The certificate to be imported can be in either PFX or PEM format. If the certificate is in PEM format the PEM file must contain the key as well as x509 certificates. This operation requires the certificates/import permission.


```js
azure_keyvault.ImportCertificate({
  "certificate-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * parameters **required** [CertificateImportParameters](#certificateimportparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateBundle](#certificatebundle)

### DeleteCertificateOperation
Deletes the creation operation for a specified certificate that is in the process of being created. The certificate is no longer created. This operation requires the certificates/update permission.


```js
azure_keyvault.DeleteCertificateOperation({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateOperation](#certificateoperation)

### GetCertificateOperation
Gets the creation operation associated with a specified certificate. This operation requires the certificates/get permission.


```js
azure_keyvault.GetCertificateOperation({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateOperation](#certificateoperation)

### UpdateCertificateOperation
Updates a certificate creation operation that is already in progress. This operation requires the certificates/update permission.


```js
azure_keyvault.UpdateCertificateOperation({
  "certificate-name": "",
  "certificateOperation": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * certificateOperation **required** [CertificateOperationUpdateParameter](#certificateoperationupdateparameter)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateOperation](#certificateoperation)

### MergeCertificate
The MergeCertificate operation performs the merging of a certificate or certificate chain with a key pair currently available in the service. This operation requires the certificates/create permission.


```js
azure_keyvault.MergeCertificate({
  "certificate-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * parameters **required** [CertificateMergeParameters](#certificatemergeparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateBundle](#certificatebundle)

### GetCertificatePolicy
The GetCertificatePolicy operation returns the specified certificate policy resources in the specified key vault. This operation requires the certificates/get permission.


```js
azure_keyvault.GetCertificatePolicy({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate in a given key vault.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificatePolicy](#certificatepolicy)

### UpdateCertificatePolicy
Set specified members in the certificate policy. Leave others as null. This operation requires the certificates/update permission.


```js
azure_keyvault.UpdateCertificatePolicy({
  "certificate-name": "",
  "certificatePolicy": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate in the given vault.
  * certificatePolicy **required** [CertificatePolicy](#certificatepolicy)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificatePolicy](#certificatepolicy)

### GetCertificateVersions
The GetCertificateVersions operation returns the versions of a certificate in the specified key vault. This operation requires the certificates/list permission.


```js
azure_keyvault.GetCertificateVersions({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate.
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateListResult](#certificatelistresult)

### GetCertificate
Gets information about a specific certificate. This operation requires the certificates/get permission.


```js
azure_keyvault.GetCertificate({
  "certificate-name": "",
  "certificate-version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate in the given vault.
  * certificate-version **required** `string`: The version of the certificate.
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateBundle](#certificatebundle)

### UpdateCertificate
The UpdateCertificate operation applies the specified update on the given certificate; the only elements updated are the certificate's attributes. This operation requires the certificates/update permission.


```js
azure_keyvault.UpdateCertificate({
  "certificate-name": "",
  "certificate-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate in the given key vault.
  * certificate-version **required** `string`: The version of the certificate.
  * parameters **required** [CertificateUpdateParameters](#certificateupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateBundle](#certificatebundle)

### GetDeletedCertificates
The GetDeletedCertificates operation retrieves the certificates in the current vault which are in a deleted state and ready for recovery or purging. This operation includes deletion-specific information. This operation requires the certificates/get/list permission. This operation can only be enabled on soft-delete enabled vaults.


```js
azure_keyvault.GetDeletedCertificates({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedCertificateListResult](#deletedcertificatelistresult)

### PurgeDeletedCertificate
The PurgeDeletedCertificate operation performs an irreversible deletion of the specified certificate, without possibility for recovery. The operation is not available if the recovery level does not specify 'Purgeable'. This operation requires the certificate/purge permission.


```js
azure_keyvault.PurgeDeletedCertificate({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GetDeletedCertificate
The GetDeletedCertificate operation retrieves the deleted certificate information plus its attributes, such as retention interval, scheduled permanent deletion and the current deletion recovery level. This operation requires the certificates/get permission.


```js
azure_keyvault.GetDeletedCertificate({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the certificate
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedCertificateBundle](#deletedcertificatebundle)

### RecoverDeletedCertificate
The RecoverDeletedCertificate operation performs the reversal of the Delete operation. The operation is applicable in vaults enabled for soft-delete, and must be issued during the retention interval (available in the deleted certificate's attributes). This operation requires the certificates/recover permission.


```js
azure_keyvault.RecoverDeletedCertificate({
  "certificate-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate-name **required** `string`: The name of the deleted certificate
  * api-version **required** `string`: Client API version.

#### Output
* output [CertificateBundle](#certificatebundle)

### GetDeletedKeys
Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a deleted key. This operation includes deletion-specific information. The Get Deleted Keys operation is applicable for vaults enabled for soft-delete. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/list permission.


```js
azure_keyvault.GetDeletedKeys({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedKeyListResult](#deletedkeylistresult)

### PurgeDeletedKey
The Purge Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/purge permission.


```js
azure_keyvault.PurgeDeletedKey({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GetDeletedKey
The Get Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/get permission. 


```js
azure_keyvault.GetDeletedKey({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedKeyBundle](#deletedkeybundle)

### RecoverDeletedKey
The Recover Deleted Key operation is applicable for deleted keys in soft-delete enabled vaults. It recovers the deleted key back to its latest version under /keys. An attempt to recover an non-deleted key will return an error. Consider this the inverse of the delete operation on soft-delete enabled vaults. This operation requires the keys/recover permission.


```js
azure_keyvault.RecoverDeletedKey({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the deleted key.
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### GetDeletedSecrets
The Get Deleted Secrets operation returns the secrets that have been deleted for a vault enabled for soft-delete. This operation requires the secrets/list permission.


```js
azure_keyvault.GetDeletedSecrets({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSecretListResult](#deletedsecretlistresult)

### PurgeDeletedSecret
The purge deleted secret operation removes the secret permanently, without the possibility of recovery. This operation can only be enabled on a soft-delete enabled vault. This operation requires the secrets/purge permission.


```js
azure_keyvault.PurgeDeletedSecret({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GetDeletedSecret
The Get Deleted Secret operation returns the specified deleted secret along with its attributes. This operation requires the secrets/get permission.


```js
azure_keyvault.GetDeletedSecret({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSecretBundle](#deletedsecretbundle)

### RecoverDeletedSecret
Recovers the deleted secret in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the secrets/recover permission.


```js
azure_keyvault.RecoverDeletedSecret({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the deleted secret.
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretBundle](#secretbundle)

### GetDeletedStorageAccounts
The Get Deleted Storage Accounts operation returns the storage accounts that have been deleted for a vault enabled for soft-delete. This operation requires the storage/list permission.


```js
azure_keyvault.GetDeletedStorageAccounts({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedStorageListResult](#deletedstoragelistresult)

### PurgeDeletedStorgeAccount
The purge deleted storage account operation removes the secret permanently, without the possibility of recovery. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/purge permission.


```js
azure_keyvault.PurgeDeletedStorgeAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GetDeletedStorageAccount
The Get Deleted Storage Account operation returns the specified deleted storage account along with its attributes. This operation requires the storage/get permission.


```js
azure_keyvault.GetDeletedStorageAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedStorageBundle](#deletedstoragebundle)

### RecoverDeletedStorageAccount
Recovers the deleted storage account in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.


```js
azure_keyvault.RecoverDeletedStorageAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### GetDeletedSasDefinitions
The Get Deleted Sas Definitions operation returns the SAS definitions that have been deleted for a vault enabled for soft-delete. This operation requires the storage/listsas permission.


```js
azure_keyvault.GetDeletedSasDefinitions({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSasDefinitionListResult](#deletedsasdefinitionlistresult)

### GetDeletedSasDefinition
The Get Deleted SAS Definition operation returns the specified deleted SAS definition along with its attributes. This operation requires the storage/getsas permission.


```js
azure_keyvault.GetDeletedSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSasDefinitionBundle](#deletedsasdefinitionbundle)

### RecoverDeletedSasDefinition
Recovers the deleted SAS definition for the specified storage account. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.


```js
azure_keyvault.RecoverDeletedSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * api-version **required** `string`: Client API version.

#### Output
* output [SasDefinitionBundle](#sasdefinitionbundle)

### GetKeys
Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a stored key. The LIST operation is applicable to all key types, however only the base key identifier, attributes, and tags are provided in the response. Individual versions of a key are not listed in the response. This operation requires the keys/list permission.


```js
azure_keyvault.GetKeys({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyListResult](#keylistresult)

### RestoreKey
Imports a previously backed up key into Azure Key Vault, restoring the key, its key identifier, attributes and access control policies. The RESTORE operation may be used to import a previously backed up key. Individual versions of a key cannot be restored. The key is restored in its entirety with the same key name as it had when it was backed up. If the key name is not available in the target Key Vault, the RESTORE operation will be rejected. While the key name is retained during restore, the final key identifier will change if the key is restored to a different vault. Restore will restore all versions and preserve version identifiers. The RESTORE operation is subject to security constraints: The target Key Vault must be owned by the same Microsoft Azure Subscription as the source Key Vault The user must have RESTORE permission in the target Key Vault. This operation requires the keys/restore permission.


```js
azure_keyvault.RestoreKey({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [KeyRestoreParameters](#keyrestoreparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### DeleteKey
The delete key operation cannot be used to remove individual versions of a key. This operation removes the cryptographic material associated with the key, which means the key is not usable for Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations. This operation requires the keys/delete permission.


```js
azure_keyvault.DeleteKey({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key to delete.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedKeyBundle](#deletedkeybundle)

### ImportKey
The import key operation may be used to import any key type into an Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. This operation requires the keys/import permission.


```js
azure_keyvault.ImportKey({
  "key-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: Name for the imported key.
  * parameters **required** [KeyImportParameters](#keyimportparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### BackupKey
The Key Backup operation exports a key from Azure Key Vault in a protected form. Note that this operation does NOT return key material in a form that can be used outside the Azure Key Vault system, the returned key material is either protected to a Azure Key Vault HSM or to Azure Key Vault itself. The intent of this operation is to allow a client to GENERATE a key in one Azure Key Vault instance, BACKUP the key, and then RESTORE it into another Azure Key Vault instance. The BACKUP operation may be used to export, in protected form, any key type from Azure Key Vault. Individual versions of a key cannot be backed up. BACKUP / RESTORE can be performed within geographical boundaries only; meaning that a BACKUP from one geographical area cannot be restored to another geographical area. For example, a backup from the US geographical area cannot be restored in an EU geographical area. This operation requires the key/backup permission.


```js
azure_keyvault.BackupKey({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * api-version **required** `string`: Client API version.

#### Output
* output [BackupKeyResult](#backupkeyresult)

### CreateKey
The create key operation can be used to create any key type in Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. It requires the keys/create permission.


```js
azure_keyvault.CreateKey({
  "key-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name for the new key. The system will generate the version name for the new key.
  * parameters **required** [KeyCreateParameters](#keycreateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### GetKeyVersions
The full key identifier, attributes, and tags are provided in the response. This operation requires the keys/list permission.


```js
azure_keyvault.GetKeyVersions({
  "key-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyListResult](#keylistresult)

### GetKey
The get key operation is applicable to all key types. If the requested key is symmetric, then no key material is released in the response. This operation requires the keys/get permission.


```js
azure_keyvault.GetKey({
  "key-name": "",
  "key-version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key to get.
  * key-version **required** `string`: Adding the version parameter retrieves a specific version of a key.
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### UpdateKey
In order to perform this operation, the key must already exist in the Key Vault. Note: The cryptographic material of a key itself cannot be changed. This operation requires the keys/update permission.


```js
azure_keyvault.UpdateKey({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of key to update.
  * key-version **required** `string`: The version of the key to update.
  * parameters **required** [KeyUpdateParameters](#keyupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyBundle](#keybundle)

### decrypt
The DECRYPT operation decrypts a well-formed block of ciphertext using the target encryption key and specified algorithm. This operation is the reverse of the ENCRYPT operation; only a single block of data may be decrypted, the size of this block is dependent on the target key and the algorithm to be used. The DECRYPT operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/decrypt permission.


```js
azure_keyvault.decrypt({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeyOperationsParameters](#keyoperationsparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyOperationResult](#keyoperationresult)

### encrypt
The ENCRYPT operation encrypts an arbitrary sequence of bytes using an encryption key that is stored in Azure Key Vault. Note that the ENCRYPT operation only supports a single block of data, the size of which is dependent on the target key and the encryption algorithm to be used. The ENCRYPT operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/encypt permission.


```js
azure_keyvault.encrypt({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeyOperationsParameters](#keyoperationsparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyOperationResult](#keyoperationresult)

### sign
The SIGN operation is applicable to asymmetric and symmetric keys stored in Azure Key Vault since this operation uses the private portion of the key. This operation requires the keys/sign permission.


```js
azure_keyvault.sign({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeySignParameters](#keysignparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyOperationResult](#keyoperationresult)

### unwrapKey
The UNWRAP operation supports decryption of a symmetric key using the target key encryption key. This operation is the reverse of the WRAP operation. The UNWRAP operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/unwrapKey permission.


```js
azure_keyvault.unwrapKey({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeyOperationsParameters](#keyoperationsparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyOperationResult](#keyoperationresult)

### verify
The VERIFY operation is applicable to symmetric keys stored in Azure Key Vault. VERIFY is not strictly necessary for asymmetric keys stored in Azure Key Vault since signature verification can be performed using the public portion of the key but this operation is supported as a convenience for callers that only have a key-reference and not the public portion of the key. This operation requires the keys/verify permission.


```js
azure_keyvault.verify({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeyVerifyParameters](#keyverifyparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyVerifyResult](#keyverifyresult)

### wrapKey
The WRAP operation supports encryption of a symmetric key using a key encryption key that has previously been stored in an Azure Key Vault. The WRAP operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using the public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/wrapKey permission.


```js
azure_keyvault.wrapKey({
  "key-name": "",
  "key-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * key-name **required** `string`: The name of the key.
  * key-version **required** `string`: The version of the key.
  * parameters **required** [KeyOperationsParameters](#keyoperationsparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [KeyOperationResult](#keyoperationresult)

### GetSecrets
The Get Secrets operation is applicable to the entire vault. However, only the base secret identifier and its attributes are provided in the response. Individual secret versions are not listed in the response. This operation requires the secrets/list permission.


```js
azure_keyvault.GetSecrets({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified, the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretListResult](#secretlistresult)

### RestoreSecret
Restores a backed up secret, and all its versions, to a vault. This operation requires the secrets/restore permission.


```js
azure_keyvault.RestoreSecret({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [SecretRestoreParameters](#secretrestoreparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretBundle](#secretbundle)

### DeleteSecret
The DELETE operation applies to any secret stored in Azure Key Vault. DELETE cannot be applied to an individual version of a secret. This operation requires the secrets/delete permission.


```js
azure_keyvault.DeleteSecret({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSecretBundle](#deletedsecretbundle)

### SetSecret
 The SET operation adds a secret to the Azure Key Vault. If the named secret already exists, Azure Key Vault creates a new version of that secret. This operation requires the secrets/set permission.


```js
azure_keyvault.SetSecret({
  "secret-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * parameters **required** [SecretSetParameters](#secretsetparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretBundle](#secretbundle)

### BackupSecret
Requests that a backup of the specified secret be downloaded to the client. All versions of the secret will be downloaded. This operation requires the secrets/backup permission.


```js
azure_keyvault.BackupSecret({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * api-version **required** `string`: Client API version.

#### Output
* output [BackupSecretResult](#backupsecretresult)

### GetSecretVersions
The full secret identifier and attributes are provided in the response. No values are returned for the secrets. This operations requires the secrets/list permission.


```js
azure_keyvault.GetSecretVersions({
  "secret-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * maxresults `integer`: Maximum number of results to return in a page. If not specified, the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretListResult](#secretlistresult)

### GetSecret
The GET operation is applicable to any secret stored in Azure Key Vault. This operation requires the secrets/get permission.


```js
azure_keyvault.GetSecret({
  "secret-name": "",
  "secret-version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * secret-version **required** `string`: The version of the secret.
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretBundle](#secretbundle)

### UpdateSecret
The UPDATE operation changes specified attributes of an existing stored secret. Attributes that are not specified in the request are left unchanged. The value of a secret itself cannot be changed. This operation requires the secrets/set permission.


```js
azure_keyvault.UpdateSecret({
  "secret-name": "",
  "secret-version": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * secret-name **required** `string`: The name of the secret.
  * secret-version **required** `string`: The version of the secret.
  * parameters **required** [SecretUpdateParameters](#secretupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretBundle](#secretbundle)

### GetStorageAccounts
List storage accounts managed by the specified key vault. This operation requires the storage/list permission.


```js
azure_keyvault.GetStorageAccounts({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageListResult](#storagelistresult)

### RestoreStorageAccount
Restores a backed up storage account to a vault. This operation requires the storage/restore permission.


```js
azure_keyvault.RestoreStorageAccount({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [StorageRestoreParameters](#storagerestoreparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### DeleteStorageAccount
Deletes a storage account. This operation requires the storage/delete permission.


```js
azure_keyvault.DeleteStorageAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedStorageBundle](#deletedstoragebundle)

### GetStorageAccount
Gets information about a specified storage account. This operation requires the storage/get permission.


```js
azure_keyvault.GetStorageAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### UpdateStorageAccount
Updates the specified attributes associated with the given storage account. This operation requires the storage/set/update permission.


```js
azure_keyvault.UpdateStorageAccount({
  "storage-account-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * parameters **required** [StorageAccountUpdateParameters](#storageaccountupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### SetStorageAccount
Creates or updates a new storage account. This operation requires the storage/set permission.


```js
azure_keyvault.SetStorageAccount({
  "storage-account-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * parameters **required** [StorageAccountCreateParameters](#storageaccountcreateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### BackupStorageAccount
Requests that a backup of the specified storage account be downloaded to the client. This operation requires the storage/backup permission.


```js
azure_keyvault.BackupStorageAccount({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * api-version **required** `string`: Client API version.

#### Output
* output [BackupStorageResult](#backupstorageresult)

### RegenerateStorageAccountKey
Regenerates the specified key value for the given storage account. This operation requires the storage/regeneratekey permission.


```js
azure_keyvault.RegenerateStorageAccountKey({
  "storage-account-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * parameters **required** [StorageAccountRegenerteKeyParameters](#storageaccountregenertekeyparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [StorageBundle](#storagebundle)

### GetSasDefinitions
List storage SAS definitions for the given storage account. This operation requires the storage/listsas permission.


```js
azure_keyvault.GetSasDefinitions({
  "storage-account-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * maxresults `integer`: Maximum number of results to return in a page. If not specified the service will return up to 25 results.
  * api-version **required** `string`: Client API version.

#### Output
* output [SasDefinitionListResult](#sasdefinitionlistresult)

### DeleteSasDefinition
Deletes a SAS definition from a specified storage account. This operation requires the storage/deletesas permission.


```js
azure_keyvault.DeleteSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * api-version **required** `string`: Client API version.

#### Output
* output [DeletedSasDefinitionBundle](#deletedsasdefinitionbundle)

### GetSasDefinition
Gets information about a SAS definition for the specified storage account. This operation requires the storage/getsas permission.


```js
azure_keyvault.GetSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * api-version **required** `string`: Client API version.

#### Output
* output [SasDefinitionBundle](#sasdefinitionbundle)

### UpdateSasDefinition
Updates the specified attributes associated with the given SAS definition. This operation requires the storage/setsas permission.


```js
azure_keyvault.UpdateSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * parameters **required** [SasDefinitionUpdateParameters](#sasdefinitionupdateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [SasDefinitionBundle](#sasdefinitionbundle)

### SetSasDefinition
Creates or updates a new SAS definition for the specified storage account. This operation requires the storage/setsas permission.


```js
azure_keyvault.SetSasDefinition({
  "storage-account-name": "",
  "sas-definition-name": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * storage-account-name **required** `string`: The name of the storage account.
  * sas-definition-name **required** `string`: The name of the SAS definition.
  * parameters **required** [SasDefinitionCreateParameters](#sasdefinitioncreateparameters)
  * api-version **required** `string`: Client API version.

#### Output
* output [SasDefinitionBundle](#sasdefinitionbundle)



## Definitions

### Action
* Action `object`: The action that will be executed.
  * action_type `string` (values: EmailContacts, AutoRenew): The type of the action.

### AdministratorDetails
* AdministratorDetails `object`: Details of the organization administrator of the certificate issuer.
  * email `string`: Email addresss.
  * first_name `string`: First name.
  * last_name `string`: Last name.
  * phone `string`: Phone number.

### Attributes
* Attributes `object`: The object attributes managed by the KeyVault service.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in UTC.
  * nbf `integer`: Not before date in UTC.
  * updated `integer`: Last updated time in UTC.

### BackupKeyResult
* BackupKeyResult `object`: The backup key result, containing the backup blob.
  * value `string`: The backup blob containing the backed up key.

### BackupSecretResult
* BackupSecretResult `object`: The backup secret result, containing the backup blob.
  * value `string`: The backup blob containing the backed up secret.

### BackupStorageResult
* BackupStorageResult `object`: The backup storage result, containing the backup blob.
  * value `string`: The backup blob containing the backed up storage account.

### CertificateAttributes
* CertificateAttributes `object`: The certificate management attributes.
  * recoveryLevel `string` (values: Purgeable, Recoverable+Purgeable, Recoverable, Recoverable+ProtectedSubscription): Reflects the deletion recovery level currently in effect for certificates in the current vault. If it contains 'Purgeable', the certificate can be permanently deleted by a privileged user; otherwise, only the system can purge the certificate, at the end of the retention interval.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in UTC.
  * nbf `integer`: Not before date in UTC.
  * updated `integer`: Last updated time in UTC.

### CertificateBundle
* CertificateBundle `object`: A certificate bundle consists of a certificate (X509) plus its attributes.
  * attributes [CertificateAttributes](#certificateattributes)
  * cer `string`: CER contents of x509 certificate.
  * contentType `string`: The content type of the secret.
  * id `string`: The certificate id.
  * kid `string`: The key id.
  * policy [CertificatePolicy](#certificatepolicy)
  * sid `string`: The secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs
  * x5t `string`: Thumbprint of the certificate.

### CertificateCreateParameters
* CertificateCreateParameters `object`: The certificate create parameters.
  * attributes [CertificateAttributes](#certificateattributes)
  * policy [CertificatePolicy](#certificatepolicy)
  * tags `object`: Application specific metadata in the form of key-value pairs.

### CertificateImportParameters
* CertificateImportParameters `object`: The certificate import parameters.
  * attributes [CertificateAttributes](#certificateattributes)
  * policy [CertificatePolicy](#certificatepolicy)
  * pwd `string`: If the private key in base64EncodedCertificate is encrypted, the password used for encryption.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * value **required** `string`: Base64 encoded representation of the certificate object to import. This certificate needs to contain the private key.

### CertificateIssuerItem
* CertificateIssuerItem `object`: The certificate issuer item containing certificate issuer metadata.
  * id `string`: Certificate Identifier.
  * provider `string`: The issuer provider.

### CertificateIssuerListResult
* CertificateIssuerListResult `object`: The certificate issuer list result.
  * nextLink `string`: The URL to get the next set of certificate issuers.
  * value `array`: A response message containing a list of certificate issuers in the key vault along with a link to the next page of certificate issuers.
    * items [CertificateIssuerItem](#certificateissueritem)

### CertificateIssuerSetParameters
* CertificateIssuerSetParameters `object`: The certificate issuer set parameters.
  * attributes [IssuerAttributes](#issuerattributes)
  * credentials [IssuerCredentials](#issuercredentials)
  * org_details [OrganizationDetails](#organizationdetails)
  * provider **required** `string`: The issuer provider.

### CertificateIssuerUpdateParameters
* CertificateIssuerUpdateParameters `object`: The certificate issuer update parameters.
  * attributes [IssuerAttributes](#issuerattributes)
  * credentials [IssuerCredentials](#issuercredentials)
  * org_details [OrganizationDetails](#organizationdetails)
  * provider `string`: The issuer provider.

### CertificateItem
* CertificateItem `object`: The certificate item containing certificate metadata.
  * attributes [CertificateAttributes](#certificateattributes)
  * id `string`: Certificate identifier.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * x5t `string`: Thumbprint of the certificate.

### CertificateListResult
* CertificateListResult `object`: The certificate list result.
  * nextLink `string`: The URL to get the next set of certificates.
  * value `array`: A response message containing a list of certificates in the key vault along with a link to the next page of certificates.
    * items [CertificateItem](#certificateitem)

### CertificateMergeParameters
* CertificateMergeParameters `object`: The certificate merge parameters
  * attributes [CertificateAttributes](#certificateattributes)
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * x5c **required** `array`: The certificate or the certificate chain to merge.
    * items `string`

### CertificateOperation
* CertificateOperation `object`: A certificate operation is returned in case of asynchronous requests.
  * cancellation_requested `boolean`: Indicates if cancellation was requested on the certificate operation.
  * csr `string`: The certificate signing request (CSR) that is being used in the certificate operation.
  * error [Error](#error)
  * id `string`: The certificate id.
  * issuer [IssuerParameters](#issuerparameters)
  * request_id `string`: Identifier for the certificate operation.
  * status `string`: Status of the certificate operation.
  * status_details `string`: The status details of the certificate operation.
  * target `string`: Location which contains the result of the certificate operation.

### CertificateOperationUpdateParameter
* CertificateOperationUpdateParameter `object`: The certificate operation update parameters.
  * cancellation_requested **required** `boolean`: Indicates if cancellation was requested on the certificate operation.

### CertificatePolicy
* CertificatePolicy `object`: Management policy for a certificate.
  * attributes [CertificateAttributes](#certificateattributes)
  * id `string`: The certificate id.
  * issuer [IssuerParameters](#issuerparameters)
  * key_props [KeyProperties](#keyproperties)
  * lifetime_actions `array`: Actions that will be performed by Key Vault over the lifetime of a certificate.
    * items [LifetimeAction](#lifetimeaction)
  * secret_props [SecretProperties](#secretproperties)
  * x509_props [X509CertificateProperties](#x509certificateproperties)

### CertificateUpdateParameters
* CertificateUpdateParameters `object`: The certificate update parameters.
  * attributes [CertificateAttributes](#certificateattributes)
  * policy [CertificatePolicy](#certificatepolicy)
  * tags `object`: Application specific metadata in the form of key-value pairs.

### Contact
* Contact `object`: The contact information for the vault certificates.
  * email `string`: Email addresss.
  * name `string`: Name.
  * phone `string`: Phone number.

### Contacts
* Contacts `object`: The contacts for the vault certificates.
  * contacts `array`: The contact list for the vault certificates.
    * items [Contact](#contact)
  * id `string`: Identifier for the contacts collection.

### DeletedCertificateBundle
* DeletedCertificateBundle `object`: A Deleted Certificate consisting of its previous id, attributes and its tags, as well as information on when it will be purged.
  * deletedDate `integer`: The time when the certificate was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted certificate.
  * scheduledPurgeDate `integer`: The time when the certificate is scheduled to be purged, in UTC
  * attributes [CertificateAttributes](#certificateattributes)
  * cer `string`: CER contents of x509 certificate.
  * contentType `string`: The content type of the secret.
  * id `string`: The certificate id.
  * kid `string`: The key id.
  * policy [CertificatePolicy](#certificatepolicy)
  * sid `string`: The secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs
  * x5t `string`: Thumbprint of the certificate.

### DeletedCertificateItem
* DeletedCertificateItem `object`: The deleted certificate item containing metadata about the deleted certificate.
  * deletedDate `integer`: The time when the certificate was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted certificate.
  * scheduledPurgeDate `integer`: The time when the certificate is scheduled to be purged, in UTC
  * attributes [CertificateAttributes](#certificateattributes)
  * id `string`: Certificate identifier.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * x5t `string`: Thumbprint of the certificate.

### DeletedCertificateListResult
* DeletedCertificateListResult `object`: A list of certificates that have been deleted in this vault.
  * nextLink `string`: The URL to get the next set of deleted certificates.
  * value `array`: A response message containing a list of deleted certificates in the vault along with a link to the next page of deleted certificates
    * items [DeletedCertificateItem](#deletedcertificateitem)

### DeletedKeyBundle
* DeletedKeyBundle `object`: A DeletedKeyBundle consisting of a WebKey plus its Attributes and deletion info
  * deletedDate `integer`: The time when the key was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted key.
  * scheduledPurgeDate `integer`: The time when the key is scheduled to be purged, in UTC
  * attributes [KeyAttributes](#keyattributes)
  * key [JsonWebKey](#jsonwebkey)
  * managed `boolean`: True if the key's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### DeletedKeyItem
* DeletedKeyItem `object`: The deleted key item containing the deleted key metadata and information about deletion.
  * deletedDate `integer`: The time when the key was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted key.
  * scheduledPurgeDate `integer`: The time when the key is scheduled to be purged, in UTC
  * attributes [KeyAttributes](#keyattributes)
  * kid `string`: Key identifier.
  * managed `boolean`: True if the key's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### DeletedKeyListResult
* DeletedKeyListResult `object`: A list of keys that have been deleted in this vault.
  * nextLink `string`: The URL to get the next set of deleted keys.
  * value `array`: A response message containing a list of deleted keys in the vault along with a link to the next page of deleted keys
    * items [DeletedKeyItem](#deletedkeyitem)

### DeletedSasDefinitionBundle
* DeletedSasDefinitionBundle `object`: A deleted SAS definition bundle consisting of its previous id, attributes and its tags, as well as information on when it will be purged.
  * deletedDate `integer`: The time when the SAS definition was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted SAS definition.
  * scheduledPurgeDate `integer`: The time when the SAS definition is scheduled to be purged, in UTC
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * id `string`: The SAS definition id.
  * sasType `string` (values: account, service): The type of SAS token the SAS definition will create.
  * sid `string`: Storage account SAS definition secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs
  * templateUri `string`: The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template.
  * validityPeriod `string`: The validity period of SAS tokens created according to the SAS definition.

### DeletedSasDefinitionItem
* DeletedSasDefinitionItem `object`: The deleted SAS definition item containing metadata about the deleted SAS definition.
  * deletedDate `integer`: The time when the SAS definition was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted SAS definition.
  * scheduledPurgeDate `integer`: The time when the SAS definition is scheduled to be purged, in UTC
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * id `string`: The storage SAS identifier.
  * sid `string`: The storage account SAS definition secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### DeletedSasDefinitionListResult
* DeletedSasDefinitionListResult `object`: The deleted SAS definition list result
  * nextLink `string`: The URL to get the next set of deleted SAS definitions.
  * value `array`: A response message containing a list of the deleted SAS definitions in the vault along with a link to the next page of deleted sas definitions
    * items [DeletedSasDefinitionItem](#deletedsasdefinitionitem)

### DeletedSecretBundle
* DeletedSecretBundle `object`: A Deleted Secret consisting of its previous id, attributes and its tags, as well as information on when it will be purged.
  * deletedDate `integer`: The time when the secret was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted secret.
  * scheduledPurgeDate `integer`: The time when the secret is scheduled to be purged, in UTC
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: The content type of the secret.
  * id `string`: The secret id.
  * kid `string`: If this is a secret backing a KV certificate, then this field specifies the corresponding key backing the KV certificate.
  * managed `boolean`: True if the secret's lifetime is managed by key vault. If this is a secret backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * value `string`: The secret value.

### DeletedSecretItem
* DeletedSecretItem `object`: The deleted secret item containing metadata about the deleted secret.
  * deletedDate `integer`: The time when the secret was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted secret.
  * scheduledPurgeDate `integer`: The time when the secret is scheduled to be purged, in UTC
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: Type of the secret value such as a password.
  * id `string`: Secret identifier.
  * managed `boolean`: True if the secret's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### DeletedSecretListResult
* DeletedSecretListResult `object`: The deleted secret list result
  * nextLink `string`: The URL to get the next set of deleted secrets.
  * value `array`: A response message containing a list of the deleted secrets in the vault along with a link to the next page of deleted secrets
    * items [DeletedSecretItem](#deletedsecretitem)

### DeletedStorageAccountItem
* DeletedStorageAccountItem `object`: The deleted storage account item containing metadata about the deleted storage account.
  * deletedDate `integer`: The time when the storage account was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted storage account.
  * scheduledPurgeDate `integer`: The time when the storage account is scheduled to be purged, in UTC
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * id `string`: Storage identifier.
  * resourceId `string`: Storage account resource Id.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### DeletedStorageBundle
* DeletedStorageBundle `object`: A deleted storage account bundle consisting of its previous id, attributes and its tags, as well as information on when it will be purged.
  * deletedDate `integer`: The time when the storage account was deleted, in UTC
  * recoveryId `string`: The url of the recovery object, used to identify and recover the deleted storage account.
  * scheduledPurgeDate `integer`: The time when the storage account is scheduled to be purged, in UTC
  * activeKeyName `string`: The current active storage account key name.
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * autoRegenerateKey `boolean`: whether keyvault should manage the storage account for the user.
  * id `string`: The storage account id.
  * regenerationPeriod `string`: The key regeneration time duration specified in ISO-8601 format.
  * resourceId `string`: The storage account resource id.
  * tags `object`: Application specific metadata in the form of key-value pairs

### DeletedStorageListResult
* DeletedStorageListResult `object`: The deleted storage account list result
  * nextLink `string`: The URL to get the next set of deleted storage accounts.
  * value `array`: A response message containing a list of the deleted storage accounts in the vault along with a link to the next page of deleted storage accounts
    * items [DeletedStorageAccountItem](#deletedstorageaccountitem)

### Error
* Error `object`: The key vault server error.
  * code `string`: The error code.
  * innererror [Error](#error)
  * message `string`: The error message.

### IssuerAttributes
* IssuerAttributes `object`: The attributes of an issuer managed by the Key Vault service.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: Determines whether the issuer is enabled.
  * updated `integer`: Last updated time in UTC.

### IssuerBundle
* IssuerBundle `object`: The issuer for Key Vault certificate.
  * attributes [IssuerAttributes](#issuerattributes)
  * credentials [IssuerCredentials](#issuercredentials)
  * id `string`: Identifier for the issuer object.
  * org_details [OrganizationDetails](#organizationdetails)
  * provider `string`: The issuer provider.

### IssuerCredentials
* IssuerCredentials `object`: The credentials to be used for the certificate issuer.
  * account_id `string`: The user name/account name/account id.
  * pwd `string`: The password/secret/account key.

### IssuerParameters
* IssuerParameters `object`: Parameters for the issuer of the X509 component of a certificate.
  * cty `string`: Type of certificate to be requested from the issuer provider.
  * name `string`: Name of the referenced issuer object or reserved names; for example, 'Self' or 'Unknown'.

### JsonWebKey
* JsonWebKey `object`: As of http://tools.ietf.org/html/draft-ietf-jose-json-web-key-18
  * crv `string` (values: P-256, P-384, P-521, SECP256K1): Elliptic curve name. For valid values, see JsonWebKeyCurveName.
  * d `string`: RSA private exponent, or the D component of an EC private key.
  * dp `string`: RSA private key parameter.
  * dq `string`: RSA private key parameter.
  * e `string`: RSA public exponent.
  * k `string`: Symmetric key.
  * key_hsm `string`: HSM Token, used with 'Bring Your Own Key'.
  * key_ops `array`
    * items `string`: Supported key operations.
  * kid `string`: Key identifier.
  * kty `string` (values: EC, EC-HSM, RSA, RSA-HSM, oct): JsonWebKey key type (kty).
  * n `string`: RSA modulus.
  * p `string`: RSA secret prime.
  * q `string`: RSA secret prime, with p < q.
  * qi `string`: RSA private key parameter.
  * x `string`: X component of an EC public key.
  * y `string`: Y component of an EC public key.

### KeyAttributes
* KeyAttributes `object`: The attributes of a key managed by the key vault service.
  * recoveryLevel `string` (values: Purgeable, Recoverable+Purgeable, Recoverable, Recoverable+ProtectedSubscription): Reflects the deletion recovery level currently in effect for keys in the current vault. If it contains 'Purgeable' the key can be permanently deleted by a privileged user; otherwise, only the system can purge the key, at the end of the retention interval.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in UTC.
  * nbf `integer`: Not before date in UTC.
  * updated `integer`: Last updated time in UTC.

### KeyBundle
* KeyBundle `object`: A KeyBundle consisting of a WebKey plus its attributes.
  * attributes [KeyAttributes](#keyattributes)
  * key [JsonWebKey](#jsonwebkey)
  * managed `boolean`: True if the key's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### KeyCreateParameters
* KeyCreateParameters `object`: The key create parameters.
  * attributes [KeyAttributes](#keyattributes)
  * crv `string` (values: P-256, P-384, P-521, SECP256K1): Elliptic curve name. For valid values, see JsonWebKeyCurveName.
  * key_ops `array`
    * items `string` (values: encrypt, decrypt, sign, verify, wrapKey, unwrapKey): JSON web key operations. For more information, see JsonWebKeyOperation.
  * key_size `integer`: The key size in bytes. For example, 1024 or 2048.
  * kty **required** `string` (values: EC, EC-HSM, RSA, RSA-HSM, oct): The type of key to create. For valid values, see JsonWebKeyType.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### KeyImportParameters
* KeyImportParameters `object`: The key import parameters.
  * Hsm `boolean`: Whether to import as a hardware key (HSM) or software key.
  * attributes [KeyAttributes](#keyattributes)
  * key **required** [JsonWebKey](#jsonwebkey)
  * tags `object`: Application specific metadata in the form of key-value pairs.

### KeyItem
* KeyItem `object`: The key item containing key metadata.
  * attributes [KeyAttributes](#keyattributes)
  * kid `string`: Key identifier.
  * managed `boolean`: True if the key's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### KeyListResult
* KeyListResult `object`: The key list result.
  * nextLink `string`: The URL to get the next set of keys.
  * value `array`: A response message containing a list of keys in the key vault along with a link to the next page of keys.
    * items [KeyItem](#keyitem)

### KeyOperationResult
* KeyOperationResult `object`: The key operation result.
  * kid `string`: Key identifier
  * value `string`

### KeyOperationsParameters
* KeyOperationsParameters `object`: The key operations parameters.
  * alg **required** `string` (values: RSA-OAEP, RSA-OAEP-256, RSA1_5): algorithm identifier
  * value **required** `string`

### KeyProperties
* KeyProperties `object`: Properties of the key pair backing a certificate.
  * exportable `boolean`: Indicates if the private key can be exported.
  * key_size `integer`: The key size in bytes. For example;  1024 or 2048.
  * kty `string`: The key type.
  * reuse_key `boolean`: Indicates if the same key pair will be used on certificate renewal.

### KeyRestoreParameters
* KeyRestoreParameters `object`: The key restore parameters.
  * value **required** `string`: The backup blob associated with a key bundle.

### KeySignParameters
* KeySignParameters `object`: The key operations parameters.
  * alg **required** `string` (values: PS256, PS384, PS512, RS256, RS384, RS512, RSNULL, ES256, ES384, ES512, ECDSA256): The signing/verification algorithm identifier. For more information on possible algorithm types, see JsonWebKeySignatureAlgorithm.
  * value **required** `string`

### KeyUpdateParameters
* KeyUpdateParameters `object`: The key update parameters.
  * attributes [KeyAttributes](#keyattributes)
  * key_ops `array`: Json web key operations. For more information on possible key operations, see JsonWebKeyOperation.
    * items `string` (values: encrypt, decrypt, sign, verify, wrapKey, unwrapKey)
  * tags `object`: Application specific metadata in the form of key-value pairs.

### KeyVaultError
* KeyVaultError `object`: The key vault error exception.
  * error [Error](#error)

### KeyVerifyParameters
* KeyVerifyParameters `object`: The key verify parameters.
  * alg **required** `string` (values: PS256, PS384, PS512, RS256, RS384, RS512, RSNULL, ES256, ES384, ES512, ECDSA256): The signing/verification algorithm. For more information on possible algorithm types, see JsonWebKeySignatureAlgorithm.
  * digest **required** `string`: The digest used for signing.
  * value **required** `string`: The signature to be verified.

### KeyVerifyResult
* KeyVerifyResult `object`: The key verify result.
  * value `boolean`: True if the signature is verified, otherwise false.

### LifetimeAction
* LifetimeAction `object`: Action and its trigger that will be performed by Key Vault over the lifetime of a certificate.
  * action [Action](#action)
  * trigger [Trigger](#trigger)

### OrganizationDetails
* OrganizationDetails `object`: Details of the organization of the certificate issuer.
  * admin_details `array`: Details of the organization administrator.
    * items [AdministratorDetails](#administratordetails)
  * id `string`: Id of the organization.

### PendingCertificateSigningRequestResult
* PendingCertificateSigningRequestResult `object`: The pending certificate signing request result.
  * value `string`: The pending certificate signing request as Base64 encoded string.

### SasDefinitionAttributes
* SasDefinitionAttributes `object`: The SAS definition management attributes.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: the enabled state of the object.
  * recoveryLevel `string` (values: Purgeable, Recoverable+Purgeable, Recoverable, Recoverable+ProtectedSubscription): Reflects the deletion recovery level currently in effect for SAS definitions in the current vault. If it contains 'Purgeable' the SAS definition can be permanently deleted by a privileged user; otherwise, only the system can purge the SAS definition, at the end of the retention interval.
  * updated `integer`: Last updated time in UTC.

### SasDefinitionBundle
* SasDefinitionBundle `object`: A SAS definition bundle consists of key vault SAS definition details plus its attributes.
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * id `string`: The SAS definition id.
  * sasType `string` (values: account, service): The type of SAS token the SAS definition will create.
  * sid `string`: Storage account SAS definition secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs
  * templateUri `string`: The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template.
  * validityPeriod `string`: The validity period of SAS tokens created according to the SAS definition.

### SasDefinitionCreateParameters
* SasDefinitionCreateParameters `object`: The SAS definition create parameters.
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * sasType **required** `string` (values: account, service): The type of SAS token the SAS definition will create.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * templateUri **required** `string`: The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template.
  * validityPeriod **required** `string`: The validity period of SAS tokens created according to the SAS definition.

### SasDefinitionItem
* SasDefinitionItem `object`: The SAS definition item containing storage SAS definition metadata.
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * id `string`: The storage SAS identifier.
  * sid `string`: The storage account SAS definition secret id.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### SasDefinitionListResult
* SasDefinitionListResult `object`: The storage account SAS definition list result.
  * nextLink `string`: The URL to get the next set of SAS defintions.
  * value `array`: A response message containing a list of SAS definitions along with a link to the next page of SAS definitions.
    * items [SasDefinitionItem](#sasdefinitionitem)

### SasDefinitionUpdateParameters
* SasDefinitionUpdateParameters `object`: The SAS definition update parameters.
  * attributes [SasDefinitionAttributes](#sasdefinitionattributes)
  * sasType `string` (values: account, service): The type of SAS token the SAS definition will create.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * templateUri `string`: The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template.
  * validityPeriod `string`: The validity period of SAS tokens created according to the SAS definition.

### SecretAttributes
* SecretAttributes `object`: The secret management attributes.
  * recoveryLevel `string` (values: Purgeable, Recoverable+Purgeable, Recoverable, Recoverable+ProtectedSubscription): Reflects the deletion recovery level currently in effect for secrets in the current vault. If it contains 'Purgeable', the secret can be permanently deleted by a privileged user; otherwise, only the system can purge the secret, at the end of the retention interval.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: Determines whether the object is enabled.
  * exp `integer`: Expiry date in UTC.
  * nbf `integer`: Not before date in UTC.
  * updated `integer`: Last updated time in UTC.

### SecretBundle
* SecretBundle `object`: A secret consisting of a value, id and its attributes.
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: The content type of the secret.
  * id `string`: The secret id.
  * kid `string`: If this is a secret backing a KV certificate, then this field specifies the corresponding key backing the KV certificate.
  * managed `boolean`: True if the secret's lifetime is managed by key vault. If this is a secret backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * value `string`: The secret value.

### SecretItem
* SecretItem `object`: The secret item containing secret metadata.
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: Type of the secret value such as a password.
  * id `string`: Secret identifier.
  * managed `boolean`: True if the secret's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### SecretListResult
* SecretListResult `object`: The secret list result.
  * nextLink `string`: The URL to get the next set of secrets.
  * value `array`: A response message containing a list of secrets in the key vault along with a link to the next page of secrets.
    * items [SecretItem](#secretitem)

### SecretProperties
* SecretProperties `object`: Properties of the key backing a certificate.
  * contentType `string`: The media type (MIME type).

### SecretRestoreParameters
* SecretRestoreParameters `object`: The secret restore parameters.
  * value **required** `string`: The backup blob associated with a secret bundle.

### SecretSetParameters
* SecretSetParameters `object`: The secret set parameters.
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: Type of the secret value such as a password.
  * tags `object`: Application specific metadata in the form of key-value pairs.
  * value **required** `string`: The value of the secret.

### SecretUpdateParameters
* SecretUpdateParameters `object`: The secret update parameters.
  * attributes [SecretAttributes](#secretattributes)
  * contentType `string`: Type of the secret value such as a password.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### StorageAccountAttributes
* StorageAccountAttributes `object`: The storage account management attributes.
  * created `integer`: Creation time in UTC.
  * enabled `boolean`: the enabled state of the object.
  * recoveryLevel `string` (values: Purgeable, Recoverable+Purgeable, Recoverable, Recoverable+ProtectedSubscription): Reflects the deletion recovery level currently in effect for storage accounts in the current vault. If it contains 'Purgeable' the storage account can be permanently deleted by a privileged user; otherwise, only the system can purge the storage account, at the end of the retention interval.
  * updated `integer`: Last updated time in UTC.

### StorageAccountCreateParameters
* StorageAccountCreateParameters `object`: The storage account create parameters.
  * activeKeyName **required** `string`: Current active storage account key name.
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * autoRegenerateKey **required** `boolean`: whether keyvault should manage the storage account for the user.
  * regenerationPeriod `string`: The key regeneration time duration specified in ISO-8601 format.
  * resourceId **required** `string`: Storage account resource id.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### StorageAccountItem
* StorageAccountItem `object`: The storage account item containing storage account metadata.
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * id `string`: Storage identifier.
  * resourceId `string`: Storage account resource Id.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### StorageAccountRegenerteKeyParameters
* StorageAccountRegenerteKeyParameters `object`: The storage account key regenerate parameters.
  * keyName **required** `string`: The storage account key name.

### StorageAccountUpdateParameters
* StorageAccountUpdateParameters `object`: The storage account update parameters.
  * activeKeyName `string`: The current active storage account key name.
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * autoRegenerateKey `boolean`: whether keyvault should manage the storage account for the user.
  * regenerationPeriod `string`: The key regeneration time duration specified in ISO-8601 format.
  * tags `object`: Application specific metadata in the form of key-value pairs.

### StorageBundle
* StorageBundle `object`: A Storage account bundle consists of key vault storage account details plus its attributes.
  * activeKeyName `string`: The current active storage account key name.
  * attributes [StorageAccountAttributes](#storageaccountattributes)
  * autoRegenerateKey `boolean`: whether keyvault should manage the storage account for the user.
  * id `string`: The storage account id.
  * regenerationPeriod `string`: The key regeneration time duration specified in ISO-8601 format.
  * resourceId `string`: The storage account resource id.
  * tags `object`: Application specific metadata in the form of key-value pairs

### StorageListResult
* StorageListResult `object`: The storage accounts list result.
  * nextLink `string`: The URL to get the next set of storage accounts.
  * value `array`: A response message containing a list of storage accounts in the key vault along with a link to the next page of storage accounts.
    * items [StorageAccountItem](#storageaccountitem)

### StorageRestoreParameters
* StorageRestoreParameters `object`: The secret restore parameters.
  * value **required** `string`: The backup blob associated with a storage account.

### SubjectAlternativeNames
* SubjectAlternativeNames `object`: The subject alternate names of a X509 object.
  * dns_names `array`: Domain names.
    * items `string`
  * emails `array`: Email addresses.
    * items `string`
  * upns `array`: User principal names.
    * items `string`

### Trigger
* Trigger `object`: A condition to be satisfied for an action to be executed.
  * days_before_expiry `integer`: Days before expiry to attempt renewal. Value should be between 1 and validity_in_months multiplied by 27. If validity_in_months is 36, then value should be between 1 and 972 (36 * 27).
  * lifetime_percentage `integer`: Percentage of lifetime at which to trigger. Value should be between 1 and 99.

### X509CertificateProperties
* X509CertificateProperties `object`: Properties of the X509 component of a certificate.
  * ekus `array`: The enhanced key usage.
    * items `string`
  * key_usage `array`: List of key usages.
    * items `string` (values: digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign, encipherOnly, decipherOnly)
  * sans [SubjectAlternativeNames](#subjectalternativenames)
  * subject `string`: The subject name. Should be a valid X509 distinguished Name.
  * validity_months `integer`: The duration that the ceritifcate is valid in months.


