# @datafire/mastercard_paymentaccountreferenceinquiryapi

Client library for Payment Account Reference Inquiry API

## Installation and Usage
```bash
npm install --save @datafire/mastercard_paymentaccountreferenceinquiryapi
```
```js
let mastercard_paymentaccountreferenceinquiryapi = require('@datafire/mastercard_paymentaccountreferenceinquiryapi').create();

.then(data => {
  console.log(data);
});
```

## Description

The Payment Account Reference Inquiry API is the unified Mastercard interface for allowing Mastercard Customers involved in payment card acceptance -- whether Merchants, Acquirers, or Digital Activity Customers (DACs) -- to enquire the PAR Vault for getting the PAR, when providing an Account Primary Account Number (PAN) linked to a digitized PAN.

## Actions

### par.paymentaccountreference.1.0.getPaymentAccountReference.post
The API performs a PAR query into the PAR Vault with the supplied PAN. When a PAR is returned from the PAR vault the API will encrypt it using the wrapped encryption method with the 
Mastercard Customer?s Encryption Public Key and include it in the API response.



```js
mastercard_paymentaccountreferenceinquiryapi.par.paymentaccountreference.1.0.getPaymentAccountReference.post({}, context)
```

#### Input
* input `object`
  * getPaymentAccountReferenceRequestSchema [getPaymentAccountReferenceRequestSchema](#getpaymentaccountreferencerequestschema)

#### Output
* output [getPaymentAccountReferenceResponseSchema](#getpaymentaccountreferenceresponseschema)



## Definitions

### encryptedPayloadData
* encryptedPayloadData `object`
  * encryptedData `string`: Encrypted payload that contains the Primary Account Number (PAN). Refer to Encrypted Data Objects section for the format of encrypted data or download the latest OpenAPI YAML 
  * encryptedKey `string`: One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS 1 v1.5 (depending on the value of 
  * iv `string`: The initialization vector used when encrypting data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. If not present, an IV of zero is assumed.<br><br> 
  * oaepHashingAlgorithm `string`: Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS 1 v1.5 will be used. You must use one of the following algorithms; SHA256 - Use the SHA- 
  * publicKeyFingerprint `string`: The fingerprint of the public key used to encrypt the ephemeral AES key. Max length - 64. Type - String Hex-encoded Data (case-insensitive).

### encryptedPayloadOut
* encryptedPayloadOut `object`
  * encryptedData **required** `string`: Contains an encrypted JSON object. Encrypted by the ephemeral AES key using CBC mode (IV as provided in 'iv', or zero if none provided) and PKCS#7 padding. The JSON object being encrypted will be defined in the context of the API call. Max length - 256k.  Type - String Hex-encoded Data (case-insensitive). Required - Yes.
  * encryptedKey **required** `string`: One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS 1 v1.5 (depending on the value of 'oaepHashingAlgorithm'). Requirement is for a 128-bit key (with 256-bit key supported as an option). Data Type - String. Hex-encoded data (case-insensitive). Max Length - 512. Required - Yes.
  * iv `string`: The initialization vector used when encrypting data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. If not present, an IV of zero is assumed. Length - 32 exactly. Type - String Hex-encoded Data (case-insensitive). Optional.
  * oaepHashingAlgorithm `string`: Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS 1 v1.5 will be used. You must use one of the following algorithms; SHA256 - Use the SHA-256 algorithm | SHA512 - Use the SHA-512 algorithm.  Max length - 6. Type - String. Optional.
  * publicKeyFingerprint **required** `string`: The fingerprint of the public key used to encrypt the ephemeral AES key. <br><br>

### getPaymentAccountReferenceRequestSchema
* getPaymentAccountReferenceRequestSchema `object`
  * encryptedPayload **required** [encryptedPayloadData](#encryptedpayloaddata)
  * requestId **required** `string`: The id of the request submitted.

### getPaymentAccountReferenceResponseSchema
* getPaymentAccountReferenceResponseSchema `object`
  * encryptedPayload [encryptedPayloadOut](#encryptedpayloadout)
  * responseId `string`: The id of the response sent. Required.


