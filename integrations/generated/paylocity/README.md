# @datafire/paylocity

Client library for Paylocity API

## Installation and Usage
```bash
npm install --save @datafire/paylocity
```
```js
let paylocity = require('@datafire/paylocity').create({
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

For general questions and support of the API, contact: webservices@paylocity.com
# Overview

Paylocity Web Services API is an externally facing RESTful Internet protocol. The Paylocity API uses HTTP verbs and a RESTful endpoint structure. OAuth 2.0 is used as the API Authorization framework. Request and response payloads are formatted as JSON.
Paylocity supports v1 and v2 versions of its API endpoints. v1, while supported, won't be enhanced with additional functionality. For direct link to v1 documentation, please click [here](https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm). For additional resources regarding v1/v2 differences and conversion path, please contact webservices@paylocity.com.

##### Setup

Paylocity will provide the secure client credentials and set up the scope (type of requests and allowed company numbers). You will receive the unique client id, secret, and Paylocity public key for the data encryption. The secret will expire in 365 days. 
* Paylocity will send you an e-mail 10 days prior to the expiration date for the current secret. If not renewed, the second e-mail notification will be sent 5 days prior to secret's expiration. Each email will contain the code necessary to renew the client secret. 
* You can obtain the new secret by calling API endpoint using your current not yet expired credentials and the code that was sent with the notification email. For details on API endpoint, please see Client Credentials section. 
* Both the current secret value and the new secret value will be recognized during the transition period. After the current secret expires, you must use the new secret. 
* If you were unable to renew the secret via API endpoint, you can still contact Service and they will email you new secret via secure email.


When validating the request, Paylocity API will honor the defaults and required fields set up for the company default New Hire Template as defined in Web Pay.


# Authorization

Paylocity Web Services API uses OAuth2.0 Authentication with JSON Message Format.


All requests of the Paylocity Web Services API require a bearer token which can be obtained by authenticating the client with the Paylocity Web Services API via OAuth 2.0.


The client must request a bearer token from the authorization endpoint:


auth-server for production: https://api.paylocity.com/IdentityServer/connect/token


auth-server for testing: https://apisandbox.paylocity.com/IdentityServer/connect/token

Paylocity reserves the right to impose rate limits on the number of calls made to our APIs. Changes to API features/functionality may be made at anytime with or without prior notice.

##### Authorization Header

The request is expected to be in the form of a basic authentication request, with the "Authorization" header containing the client-id and client-secret. This means the standard base-64 encoded user:password, prefixed with "Basic" as the value for the Authorization header, where user is the client-id and password is the client-secret.

##### Content-Type Header

The "Content-Type" header is required to be "application/x-www-form-urlencoded".

##### Additional Values

The request must post the following form encoded values within the request body:

    grant_type = client_credentials
    scope = WebLinkAPI

##### Responses

Success will return HTTP 200 OK with JSON content:

    {
      "access_token": "xxx",
      "expires_in": 3600,
      "token_type": "Bearer"
    }

# Encryption

Paylocity uses a combination of RSA and AES cryptography. As part of the setup, each client is issued a public RSA key.

Paylocity recommends the encryption of the incoming requests as additional protection of the sensitive data. Clients can opt-out of the encryption during the initial setup process. Opt-out will allow Paylocity to process unencrypted requests.

The Paylocity Public Key has the following properties:

* 2048 bit key size

* PKCS1 key format

* PEM encoding

##### Properties

* key (base 64 encoded): The AES symmetric key encrypted with the Paylocity Public Key. It is the key used to encrypt the content. Paylocity will decrypt the AES key using RSA decryption and use it to decrypt the content.

* iv (base 64 encoded): The AES IV (Initialization Vector) used when encrypting the content.

* content (base 64 encoded): The AES encrypted request. The key and iv provided in the secureContent request are used by Paylocity for decryption of the content.

We suggest using the following for the AES:

* CBC cipher mode

* PKCS7 padding

* 128 bit block size

* 256 bit key size

##### Encryption Flow

* Generate the unencrypted JSON payload to POST/PUT
* Encrypt this JSON payload using your _own key and IV_ (NOT with the Paylocity public key)
* RSA encrypt the _key_ you used in step 2 with the Paylocity Public Key, then, base64 encode the result
* Base64 encode the IV used to encrypt the JSON payload in step 2
* Put together a "securecontent" JSON object:
 
{
  'secureContent' : {
    'key' : -- RSA-encrypted & base64 encoded key from step 3,
    'iv' : -- base64 encoded iv from step 4
    'content' -- content encrypted with your own key from step 2, base64 encoded
  }
}

##### Sample Example

    {
      "secureContent": {
        "key": "eS3aw6H/qzHMJ00gSi6gQ3xa08DPMazk8BFY96Pd99ODA==",
        "iv": "NLyXMGq9svw0XO5aI9BzWw==",
        "content": "gAEOiQltO1w+LzGUoIK8FiYbU42hug94EasSl7N+Q1w="
      }
    }

##### Sample C# Code

    using Newtonsoft.Json;
    using System;
    using System.IO;
    using System.Security.Cryptography;
    using System.Text;

    public class SecuredContent
    {
      [JsonProperty("key")]
      public string Key { get; set; }

      [JsonProperty("iv")]
      public string Iv { get; set; }

      [JsonProperty("content")]
      public string Content { get; set; }

    }

    public class EndUserSecureRequestExample
    {
      public string CreateSecuredRequest(FileInfo paylocityPublicKey, string unsecuredJsonRequest)
      {
        string publicKeyXml = File.ReadAllText(paylocityPublicKey.FullName, Encoding.UTF8);

        SecuredContent secureContent = this.CreateSecuredContent(publicKeyXml, unsecuredJsonRequest);

        string secureRequest = JsonConvert.SerializeObject(new { secureContent });

        return secureRequest;
      }

      private SecuredContent CreateSecuredContent(string publicKeyXml, string request)
      {
        using (AesCryptoServiceProvider aesCsp = new AesCryptoServiceProvider())
        {
          aesCsp.Mode = CipherMode.CBC;
          aesCsp.Padding = PaddingMode.PKCS7;
          aesCsp.BlockSize = 128;
          aesCsp.KeySize = 256;

          using (ICryptoTransform crt = aesCsp.CreateEncryptor(aesCsp.Key, aesCsp.IV))
          {
            using (MemoryStream outputStream = new MemoryStream())
            {
              using (CryptoStream encryptStream = new CryptoStream(outputStream, crt, CryptoStreamMode.Write))
              {
                byte[] encodedRequest = Encoding.UTF8.GetBytes(request);
                encryptStream.Write(encodedRequest, 0, encodedRequest.Length);
                encryptStream.FlushFinalBlock();
                byte[] encryptedRequest = outputStream.ToArray();

                using (RSACryptoServiceProvider crp = new RSACryptoServiceProvider())
                {
                  crp.FromXmlstring(publicKeyXml);
                  byte[] encryptedKey = crp.Encrypt(aesCsp.Key, false);

                  return new SecuredContent()
                  {
                    Key = Convert.ToBase64string(encryptedKey),
                    Iv = Convert.ToBase64string(aesCsp.IV),
                    Content = Convert.ToBase64string(encryptedRequest)
                  };
                }
              }
            }
          }
        }
      }
    }

## Support

Questions about using the Paylocity API? Please contact webservices@paylocity.com.

# Deductions (v1)

Deductions API provides endpoints to retrieve, add, update and delete deductions for a company's employees. For schema details, click <a href="https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm" target="_blank">here</a>.

# OnBoarding (v1)

Onboarding API sends employee data into Paylocity Onboarding to help ensure an easy and accurate hiring process for subsequent completion into Web Pay. For schema details, click <a href="https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm" target="_blank">here</a>.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
paylocity.oauthCallback({
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
paylocity.oauthRefresh(null, context)
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

### v2.companies.companyId.codes.codeResource.get
Get All Company Codes for the selected company and resource


```js
paylocity.v2.companies.companyId.codes.codeResource.get({
  "companyId": "",
  "codeResource": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * codeResource **required** `string`: Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.

#### Output
* output `array`
  * items [companyCodes](#companycodes)

### v2.companies.companyId.customfields.category.get
Get All Custom Fields for the selected company


```js
paylocity.v2.companies.companyId.customfields.category.get({
  "companyId": "",
  "category": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * category **required** `string`: Custom Fields Category

#### Output
* output `array`
  * items [customFieldDefinition](#customfielddefinition)

### v2.companies.companyId.employees.post
New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.


```js
paylocity.v2.companies.companyId.employees.post({
  "companyId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * body **required** [employee](#employee)

#### Output
* output `array`
  * items [employeeIdResponse](#employeeidresponse)

### v2.companies.companyId.employees.get
Get All Employees API will return employee data currently available in Web Pay.


```js
paylocity.v2.companies.companyId.employees.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * pagesize `integer`: Number of records per page. Default value is 25.
  * pagenumber `integer`: Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
  * includetotalcount `boolean`: Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.

#### Output
* output `array`
  * items [employeeInfo](#employeeinfo)

### v2.companies.companyId.employees.employeeId.get
Get Employee API will return employee data currently available in Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.get({
  "companyId": "",
  "employeeId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id

#### Output
* output `array`
  * items [employee](#employee)

### v2.companies.companyId.employees.employeeId.patch
Update Employee API will update existing employee data in WebPay.


```js
paylocity.v2.companies.companyId.employees.employeeId.patch({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [employee](#employee)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.additionalRates.put
Sends new or updated employee additional rates information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.additionalRates.put({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [additionalRate](#additionalrate)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.benefitSetup.put
Sends new or updated employee benefit setup information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.benefitSetup.put({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [benefitSetup](#benefitsetup)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.earnings.get
Get All Earnings returns all earnings for the selected employee.


```js
paylocity.v2.companies.companyId.employees.employeeId.earnings.get({
  "companyId": "",
  "employeeId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id

#### Output
* output `array`
  * items [earning](#earning)

### v2.companies.companyId.employees.employeeId.earnings.put
Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.earnings.put({
  "companyId": "",
  "employeeId": "",
  "body": {
    "earningCode": "",
    "startDate": ""
  }
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [earning](#earning)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.earnings.earningCode.get
Get Earnings returns all earnings with the provided earning code for the selected employee.


```js
paylocity.v2.companies.companyId.employees.employeeId.earnings.earningCode.get({
  "companyId": "",
  "employeeId": "",
  "earningCode": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * earningCode **required** `string`: Earning Code

#### Output
* output `array`
  * items [earning](#earning)

### v2.companies.companyId.employees.employeeId.earnings.earningCode.startDate.delete
Delete Earning by Earning Code and Start Date


```js
paylocity.v2.companies.companyId.employees.employeeId.earnings.earningCode.startDate.delete({
  "companyId": "",
  "employeeId": "",
  "earningCode": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * earningCode **required** `string`: Earning Code
  * startDate **required** `string`: Start Date

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.earnings.earningCode.startDate.get
Get Earnings returns the single earning with the provided earning code and start date for the selected employee.


```js
paylocity.v2.companies.companyId.employees.employeeId.earnings.earningCode.startDate.get({
  "companyId": "",
  "employeeId": "",
  "earningCode": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * earningCode **required** `string`: Earning Code
  * startDate **required** `string`: Start Date

#### Output
* output [earning](#earning)

### v2.companies.companyId.employees.employeeId.emergencyContacts.put
Sends new or updated employee emergency contacts directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.emergencyContacts.put({
  "companyId": "",
  "employeeId": "",
  "body": {
    "firstName": "",
    "lastName": ""
  }
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [emergencyContact](#emergencycontact)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.localTaxes.get
Returns all local taxes for the selected employee.


```js
paylocity.v2.companies.companyId.employees.employeeId.localTaxes.get({
  "companyId": "",
  "employeeId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id

#### Output
* output `array`
  * items [localTax](#localtax)

### v2.companies.companyId.employees.employeeId.localTaxes.post
Sends new employee local tax information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.localTaxes.post({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [localTax](#localtax)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.localTaxes.taxCode.delete
Delete local tax by tax code


```js
paylocity.v2.companies.companyId.employees.employeeId.localTaxes.taxCode.delete({
  "companyId": "",
  "employeeId": "",
  "taxCode": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * taxCode **required** `string`: Tax Code

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.localTaxes.taxCode.get
Returns all local taxes with the provided tax code for the selected employee.


```js
paylocity.v2.companies.companyId.employees.employeeId.localTaxes.taxCode.get({
  "companyId": "",
  "employeeId": "",
  "taxCode": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * taxCode **required** `string`: Tax Code

#### Output
* output `array`
  * items [localTax](#localtax)

### v2.companies.companyId.employees.employeeId.nonprimaryStateTax.put
Sends new or updated employee non-primary state tax information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.nonprimaryStateTax.put({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [nonPrimaryStateTax](#nonprimarystatetax)

#### Output
*Output schema unknown*

### v2.companies.companyId.employees.employeeId.paystatement.details.year.get
Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.


```js
paylocity.v2.companies.companyId.employees.employeeId.paystatement.details.year.get({
  "companyId": "",
  "employeeId": "",
  "year": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * year **required** `string`: The year for which to retrieve pay statement data
  * pagesize `integer`: Number of records per page. Default value is 25.
  * pagenumber `integer`: Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
  * includetotalcount `boolean`: Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.

#### Output
* output `array`
  * items [payStatementDetails](#paystatementdetails)

### v2.companies.companyId.employees.employeeId.paystatement.details.year.checkDate.get
Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.


```js
paylocity.v2.companies.companyId.employees.employeeId.paystatement.details.year.checkDate.get({
  "companyId": "",
  "employeeId": "",
  "year": "",
  "checkDate": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * year **required** `string`: The year for which to retrieve pay statement data
  * checkDate **required** `string`: The check date for which to retrieve pay statement data
  * pagesize `integer`: Number of records per page. Default value is 25.
  * pagenumber `integer`: Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
  * includetotalcount `boolean`: Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.

#### Output
* output `array`
  * items [payStatementDetails](#paystatementdetails)

### v2.companies.companyId.employees.employeeId.paystatement.summary.year.get
Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.


```js
paylocity.v2.companies.companyId.employees.employeeId.paystatement.summary.year.get({
  "companyId": "",
  "employeeId": "",
  "year": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * year **required** `string`: The year for which to retrieve pay statement data
  * pagesize `integer`: Number of records per page. Default value is 25.
  * pagenumber `integer`: Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
  * includetotalcount `boolean`: Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.

#### Output
* output `array`
  * items [payStatementSummary](#paystatementsummary)

### v2.companies.companyId.employees.employeeId.paystatement.summary.year.checkDate.get
Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.


```js
paylocity.v2.companies.companyId.employees.employeeId.paystatement.summary.year.checkDate.get({
  "companyId": "",
  "employeeId": "",
  "year": "",
  "checkDate": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * year **required** `string`: The year for which to retrieve pay statement data
  * checkDate **required** `string`: The check date for which to retrieve pay statement data
  * pagesize `integer`: Number of records per page. Default value is 25.
  * pagenumber `integer`: Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
  * includetotalcount `boolean`: Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.

#### Output
* output `array`
  * items [payStatementSummary](#paystatementsummary)

### v2.companies.companyId.employees.employeeId.primaryStateTax.put
Sends new or updated employee primary state tax information directly to Web Pay.


```js
paylocity.v2.companies.companyId.employees.employeeId.primaryStateTax.put({
  "companyId": "",
  "employeeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * employeeId **required** `string`: Employee Id
  * body **required** [stateTax](#statetax)

#### Output
*Output schema unknown*

### v2.companies.companyId.openapi.get
The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)


```js
paylocity.v2.companies.companyId.openapi.get({
  "Authorization": "",
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer + JWT
  * companyId **required** `string`: Company Id

#### Output
*Output schema unknown*

### v2.credentials.secrets.post
Obtain new client secret for Paylocity-issued client id. See Setup section for details.


```js
paylocity.v2.credentials.secrets.post({
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [addClientSecret](#addclientsecret)

#### Output
*Output schema unknown*

### v2.weblinkstaging.companies.companyId.employees.newemployees.post
Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.


```js
paylocity.v2.weblinkstaging.companies.companyId.employees.newemployees.post({
  "companyId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * body **required** [stagedEmployee](#stagedemployee)

#### Output
* output `array`
  * items [trackingNumberResponse](#trackingnumberresponse)



## Definitions

### addClientSecret
* addClientSecret `object`: The Add Client Secret Request Model
  * code **required** `string`: A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.

### additionalRate
* additionalRate `object`: The additional pay rate model
  * changeReason `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />
  * costCenter1 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />
  * costCenter2 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />
  * costCenter3 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />
  * effectiveDate `string`: Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
  * endCheckDate `string`: Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
  * job `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />
  * rate `number`: Required. Enter dollar amount that corresponds to the Per selection.<br />
  * rateCode `string`: Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />
  * rateNotes `string`: Not required.<br  />Max length: 4000<br />
  * ratePer `string`: Required. Valid values are HOUR or WEEK.<br />
  * shift `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />

### benefitSetup
* benefitSetup `object`: The benefit setup model
  * benefitClass `string`: Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30
  * benefitClassEffectiveDate `string`: Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
  * benefitSalary `number`: Salary used to configure benefits.<br  />Decimal(12,2)
  * benefitSalaryEffectiveDate `string`: Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
  * doNotApplyAdministrativePeriod `boolean`: Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
  * isMeasureAcaEligibility `boolean`: Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.

### companyCodes
* companyCodes `object`: The Company Codes model
  * code `string`: Code.<br  /> Max length: 40
  * description `string`: Description. <br  /> Max length: 150

### customFieldDefinition
* customFieldDefinition `object`
  * category `string`: The custom field category.
  * defaultValue `string`: Specifies the default value of the custom field.
  * isRequired `boolean`: Indicates whether the custom field is required.
  * label `string`: The custom field label.
  * type `string`: The custom field type.
  * values `array`: A set of values that are applicable to the custom field.
    * items `object`
      * code `string`: The custom field code.
      * description `string`: The custom field description.

### earning
* earning `object`: The employee earning model
  * agency `string`: Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10
  * amount `number`: Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)
  * annualMaximum `number`: Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)
  * calculationCode `string`: Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20
  * costCenter1 `string`: Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
  * costCenter2 `string`: Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
  * costCenter3 `string`: Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
  * earningCode **required** `string`: Earning code. Must match Company setup. <br  />Max length: 10
  * effectiveDate `string`: Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.
  * endDate `string`: Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.
  * frequency `string`: Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5
  * goal `number`: Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)
  * hoursOrUnits `number`: The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)
  * isSelfInsured `boolean`: Used for ACA. If not entered, defaulted to Company earning setup.
  * jobCode `string`: Job code associated with earnings. Must match Company setup.<br  /> Max length: 20
  * miscellaneousInfo `string`: Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50
  * paidTowardsGoal `number`: Amount already paid to employee toward goal. <br  /> Decimal(12,2)
  * payPeriodMaximum `number`: Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
  * payPeriodMinimum `number`: Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
  * rate `number`: Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)
  * rateCode `string`: Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10
  * startDate **required** `string`: Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.

### emergencyContact
* emergencyContact `object`: The emergency contact model
  * address1 `string`: 1st address line.
  * address2 `string`: 2nd address line.
  * city `string`: City.
  * country `string`: County.
  * county `string`: Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).
  * email `string`: Contact email.  Must be valid email address format.
  * firstName **required** `string`: Required. Contact first name. <br  />Max length: 40
  * homePhone `string`: Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
  * lastName **required** `string`: Required. Contact last name. <br  />Max length: 40
  * mobilePhone `string`: Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
  * notes `string`: Notes. <br  />Max length: 1000
  * pager `string`: Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
  * primaryPhone `string`: Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)
  * priority `string`: Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).
  * relationship `string`: Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.
  * state `string`: State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).
  * syncEmployeeInfo `boolean`: Valid values are *true* or *false*.
  * workExtension `string`: Work Extension.
  * workPhone `string`: Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
  * zip `string`: Postal code.  If U.S. address, must be a valid zip code.

### employee
* employee `object`: The employee model
  * additionalDirectDeposit `array`: Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
    * items `object`: The additional direct deposit model
      * accountNumber `string`: Account number, entered without special characters and spaces. <br  />Max length: 17<br />
      * accountType `string`: Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />
      * amount `number`: Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
      * amountType `string`: Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />
      * blockSpecial `boolean`: Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />
      * isSkipPreNote `boolean`: Indicates if account will not pre-note.<br />
      * nameOnAccount `string`: Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />
      * preNoteDate `string`: Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
      * routingNumber `string`: ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />
  * additionalRate `array`: Add Additional Rates.
    * items `object`: The additional pay rate model
      * changeReason `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />
      * costCenter1 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />
      * costCenter2 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />
      * costCenter3 `string`: Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />
      * effectiveDate `string`: Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
      * endCheckDate `string`: Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
      * job `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />
      * rate `number`: Required. Enter dollar amount that corresponds to the Per selection.<br />
      * rateCode `string`: Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />
      * rateNotes `string`: Not required.<br  />Max length: 4000<br />
      * ratePer `string`: Required. Valid values are HOUR or WEEK.<br />
      * shift `string`: Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />
  * benefitSetup `object`:  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
    * benefitClass `string`: Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30
    * benefitClassEffectiveDate `string`: Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * benefitSalary `number`: Salary used to configure benefits.<br  />Decimal(12,2)
    * benefitSalaryEffectiveDate `string`: Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * doNotApplyAdministrativePeriod `boolean`: Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
    * isMeasureAcaEligibility `boolean`: Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.
  * birthDate `string`: Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
  * companyFEIN `string`: Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20
  * companyName `string`: Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50
  * currency `string`: Employee is paid in this currency. <br  />Max length: 30
  * customBooleanFields `array`: Up to 8 custom fields of boolean (checkbox) type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `boolean`: The custom boolean field value.
  * customDateFields `array`: Up to 8 custom fields of the date type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
  * customDropDownFields `array`: Up to 8 custom fields of the dropdown type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
  * customNumberFields `array`: Up to 8 custom fields of numeric type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `number`: The custom number field value.  Decimal (18,6).
  * customTextFields `array`: Up to 8 custom fields of text type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom text field value.  Max length: 255.
  * departmentPosition `object`: Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
    * changeReason `string`: Employee department/position change reason. Must match Company setup. <br  />Max length: 15
    * clockBadgeNumber `string`: Employee clock badge number. Defaults to employeeId. <br  />Max length: 10
    * costCenter1 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
    * costCenter2 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
    * costCenter3 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
    * effectiveDate `string`: The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * employeeType `string`: Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10
    * equalEmploymentOpportunityClass `string`: Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10
    * isMinimumWageExempt `boolean`: Indicates if employee is exempt from minimum wage.
    * isOvertimeExempt `boolean`: Indicates if employee is exempt from overtime.
    * isSupervisorReviewer `boolean`: Indicates if employee is a supervisor or reviewer.
    * isUnionDuesCollected `boolean`: Indicates if union dues are collected.
    * isUnionInitiationCollected `boolean`: Indicates if initiations fees are collected.
    * jobTitle `string`: Employee current job title. <br  />Max length: 50
    * payGroup `string`: Employee pay group. Must match Company setup. <br  /> Max length: 20
    * positionCode `string`: Employee position code. Must match Company setup.<br  />Max length: 20
    * reviewerCompanyNumber `string`: Company number of reviewer.<br />Max length: 9
    * reviewerEmployeeId `string`: Employee id of the reviewer.<br />Max length: 10
    * shift `string`: Employee work shift.<br  />Max length: 255
    * supervisorCompanyNumber `string`: Supervisor's company number. Defaults to employee company number.<br  />Max length: 9
    * supervisorEmployeeId `string`: EmployeeId of the supervisor. <br  />Max length: 10
    * tipped `string`: Indicates if employee receives tips.
    * unionAffiliationDate `string`: Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * unionCode `string`: Employee union code. Must match Company setup. <br  />Max length: 10
    * unionPosition `string`: Employee union position. Must match Company setup. <br  />Max length: 30
    * workersCompensation `string`: Employee worker compensation code. Must match Company setup.<br  /> Max length: 10
  * disabilityDescription `string`: Indicates if employee has disability status.
  * emergencyContacts `array`: Add or update Emergency Contacts.
    * items `object`: The emergency contact model
      * address1 `string`: 1st address line.
      * address2 `string`: 2nd address line.
      * city `string`: City.
      * country `string`: County.
      * county `string`: Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).
      * email `string`: Contact email.  Must be valid email address format.
      * firstName **required** `string`: Required. Contact first name. <br  />Max length: 40
      * homePhone `string`: Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
      * lastName **required** `string`: Required. Contact last name. <br  />Max length: 40
      * mobilePhone `string`: Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
      * notes `string`: Notes. <br  />Max length: 1000
      * pager `string`: Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
      * primaryPhone `string`: Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)
      * priority `string`: Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).
      * relationship `string`: Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.
      * state `string`: State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).
      * syncEmployeeInfo `boolean`: Valid values are *true* or *false*.
      * workExtension `string`: Work Extension.
      * workPhone `string`: Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
      * zip `string`: Postal code.  If U.S. address, must be a valid zip code.
  * employeeId `string`: Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 10
  * ethnicity `string`: Employee ethnicity.<br  /> Max length: 10
  * federalTax `object`: Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
    * amount `number`: Tax amount. <br  />Decimal (12,2)
    * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
    * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
    * exemptions `number`: Federal tax exemptions value. <br  />Decimal (12,2)
    * filingStatus `string`: Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
    * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
    * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
    * percentage `number`: Tax percentage. <br  />Decimal (12,2)
    * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
    * w4FormYear `integer`: The federal W4 form year <br  />Integer
  * firstName `string`: Employee first name. <br  />Max length: 40
  * gender `string`: Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1
  * homeAddress `object`: Add or update employee's home address, personal phone numbers, and personal email.
    * address1 `string`: 1st address line.<br  /> Max length: 40
    * address2 `string`: 2nd address line. <br  /> Max length: 40
    * city `string`: City.<br  /> Max length: 40
    * country `string`: Country.<br  /> Max length: 30
    * county `string`: County.<br  /> Max length: 30
    * emailAddress `string`: Email. <br  />Max length: 50
    * mobilePhone `string`: Mobile phone number.<br  /> Max length: 12
    * phone `string`: Phone number.<br  /> Max length: 12
    * postalCode `string`: Postal code.<br  /> Max length: 10
    * state `string`: State or province.<br  /> Max length: 2
  * isHighlyCompensated `boolean`: Indicates if employee meets the highly compensated employee criteria.
  * isSmoker `boolean`: Indicates if employee is a smoker.
  * lastName `string`: Employee last name. <br  />Max length: 40
  * localTax `array`: Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.
    * items `object`: The Local Tax model
      * exemptions `number`: Local tax exemptions value.<br  />Decimal (12,2)
      * exemptions2 `number`: Local tax exemptions 2 value.<br  />Decimal (12,2)
      * filingStatus `string`: Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
      * residentPSD `string`: Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
      * taxCode `string`: Local tax code.<br  />Max length: 50
      * workPSD `string`: Work location PSD. Must match Company setup. <br  /> Max length: 9
  * mainDirectDeposit `object`: Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
    * accountNumber `string`: Account number, entered without special characters and spaces. <br  />Max length: 17
    * accountType `string`: Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1
    * blockSpecial `boolean`: Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />
    * isSkipPreNote `boolean`: Indicates if account will not pre-note.
    * nameOnAccount `string`: Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />
    * preNoteDate `string`: Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * routingNumber `string`: ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9
  * maritalStatus `string`: Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10
  * middleName `string`: Employee middle name.<br  /> Max length: 20
  * nonPrimaryStateTax `object`: Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
    * amount `number`: State tax code.<br  /> Max length: 50
    * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
    * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
    * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
    * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
    * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
    * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
    * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
    * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
    * reciprocityCode `string`: Non-primary state tax reciprocity code.<br  /> Max length: 50
    * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
    * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
    * taxCode `string`: State tax code.<br  /> Max length: 50
    * w4FormYear `integer`: The state W4 form year <br  />Integer
  * ownerPercent `number`: Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)
  * preferredName `string`: Employee preferred display name.<br  /> Max length: 20
  * primaryPayRate `object`: Add or update hourly or salary pay rate, effective date, and pay frequency.
    * annualSalary `number`: Employee annual salary.<br />Decimal (12,2)
    * baseRate `number`: Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
    * beginCheckDate `string`: The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * changeReason `string`: Pay rate change reason.<br  /> Max length: 30
    * defaultHours `number`: Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
    * effectiveDate `string`: The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * isAutoPay `boolean`: If set to *True*, employee will be paid automatically using deafultHours.
    * payFrequency `string`: Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5
    * payGrade `string`: Employee pay grade. Must match Company setup. <br  /> Max length: 10
    * payRateNote `string`: Pay rate notes regarding employee.<br  /> Max length: 250
    * payType `string`: Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10
    * ratePer `string`: Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10
    * salary `number`: Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,2)
  * primaryStateTax `object`: Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
    * amount `number`: State tax code.<br  /> Max length: 50
    * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
    * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
    * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
    * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
    * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
    * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
    * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
    * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
    * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
    * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
    * taxCode `string`: State tax code.<br  /> Max length: 50
    * w4FormYear `integer`: The state W4 form year <br  />Integer
  * priorLastName `string`: Prior last name if applicable.<br  />Max length: 40
  * salutation `string`: Employee preferred salutation. <br  />Max length: 10
  * ssn `string`: Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11
  * status `object`: Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
    * adjustedSeniorityDate `string`: Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * changeReason `string`: Employee status change reason. Must match Company setup.<br  /> Max length: 15
    * effectiveDate `string`: Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * employeeStatus `string`: Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20
    * hireDate `string`: Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * isEligibleForRehire `boolean`: Indicates if employee eligible for rehire.
    * reHireDate `string`: Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
  * suffix `string`: Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30
  * taxSetup `object`: Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
    * fitwExemptNotes `string`: Notes for FITW exemption.<br  /> Max length: 250
    * fitwExemptReason `string`: Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
    * futaExemptNotes `string`: Notes for FUTA exemption.<br  /> Max length: 250
    * futaExemptReason `string`: Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
    * isEmployee943 `boolean`: Indicates if employee in agriculture or farming.
    * isPension `boolean`: Indicates if employee is eligible for pension.
    * isStatutory `boolean`: Indicates if employee is statutory.
    * medExemptNotes `string`: Notes for Medicare exemption.<br  /> Max length: 250
    * medExemptReason `string`: Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
    * sitwExemptNotes `string`: Notes for SITW exemption.<br  /> Max length: 250
    * sitwExemptReason `string`: Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
    * ssExemptNotes `string`: Notes for Social Security exemption.<br  /> Max length: 250
    * ssExemptReason `string`: Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
    * suiExemptNotes `string`: Notes for SUI exemption.<br  /> Max length: 250
    * suiExemptReason `string`: Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
    * suiState `string`: Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2
    * taxDistributionCode1099R `string`: Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1
    * taxForm `string`: Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15
  * veteranDescription `string`: Indicates if employee is a veteran.
  * webTime `object`: Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
    * badgeNumber `string`: Badge number usually issued for time and attendance system use. <br  />Max length: 50
    * chargeRate `number`: Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
    * isTimeLaborEnabled `boolean`: If set to true, changes to employee data will be reflected in Web Time.
  * workAddress `object`: Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.
    * address1 `string`: 1st address line.<br  /> Max length: 40
    * address2 `string`: 2nd address line. <br  /> Max length: 40
    * city `string`: City.<br  /> Max length: 40
    * country `string`: Country.<br  /> Max length: 30
    * county `string`: County.<br  /> Max length: 30
    * emailAddress `string`: Email. <br  />Max length: 50
    * location `string`: Work Location name. <br />Max length: 50
    * mailStop `string`: Employee mail stop.<br  /> Max length: 10
    * mobilePhone `string`: Mobile phone number.<br  /> Max length: 12
    * pager `string`: Employee pager number.<br  /> Max length: 20
    * phone `string`: Phone number.<br  /> Max length: 12
    * phoneExtension `string`: Phone number extension.<br  /> Max length: 10
    * postalCode `string`: Postal code.<br  /> Max length: 10
    * state `string`: State or province.<br  /> Max length: 2
  * workEligibility `object`: Add or update I-9 work authorization information.
    * alienOrAdmissionDocumentNumber `string`: Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'
    * attestedDate `string`: The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
    * countryOfIssuance `string`: If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30
    * foreignPassportNumber `string`: Foreign Passport Number.<br  /> Max length: 50
    * i94AdmissionNumber `string`: Form I-94 admission number.<br  /> Must be 11 numeric characters
    * i9DateVerified `string`: Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * i9Notes `string`: Notes regarding employee's i9.<br  /> Max length: 4000
    * isI9Verified `boolean`: Indicates if employee I9 is verified.
    * isSsnVerified `boolean`: Indicates if employee SSN is verified.
    * ssnDateVerified `string`: The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
    * ssnNotes `string`: Notes regarding employee's SSN.<br  /> Max length: 4000
    * visaType `string`: Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100
    * workAuthorization `string`: Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100
    * workUntil `string`: End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

### employeeIdResponse
* employeeIdResponse `object`: The EmployeeId Response Model
  * employeeId `string`: The EmployeeId

### employeeInfo
* employeeInfo `object`: The employee info model
  * employeeId `string`: Employee Id.<br  /> Max length: 10
  * statusCode `string`: Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20
  * statusTypeCode `string`: Employee current work status type. <br  />Max length: 10

### error
* error `object`: The error model
  * field `string`: The name of the field, or property in the request message that contains an error.
  * message `string`: The error message.
  * options `array`: A list of options associated with this error. These options may indicate valid values for the field, or property that contains an error.
    * items `object`: The error option model
      * code `string`: The code associated with this option.
      * description `string`: The description of the option.
  * path `string`: The JSON path of the field, or property, that contains an error in the request message.

### localTax
* localTax `object`: The Local Tax model
  * exemptions `number`: Local tax exemptions value.<br  />Decimal (12,2)
  * exemptions2 `number`: Local tax exemptions 2 value.<br  />Decimal (12,2)
  * filingStatus `string`: Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
  * residentPSD `string`: Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
  * taxCode `string`: Local tax code.<br  />Max length: 50
  * workPSD `string`: Work location PSD. Must match Company setup. <br  /> Max length: 9

### nonPrimaryStateTax
* nonPrimaryStateTax `object`: The Non-Primary State Tax model
  * amount `number`: State tax code.<br  /> Max length: 50
  * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
  * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
  * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
  * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
  * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
  * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
  * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
  * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
  * reciprocityCode `string`: Non-primary state tax reciprocity code.<br  /> Max length: 50
  * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
  * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
  * taxCode `string`: State tax code.<br  /> Max length: 50
  * w4FormYear `integer`: The state W4 form year <br  />Integer

### payStatementDetails
* payStatementDetails `object`: The pay statement details model
  * amount `number`: .<br />
  * checkDate `string`: .<br />
  * det `string`: .<br />
  * detCode `string`: .<br />
  * hours `number`: .<br />
  * rate `number`: .<br />
  * transactionNumber `integer`: <br />
  * transactionType `string`: .<br />
  * year `integer`: .<br />

### payStatementSummary
* payStatementSummary `object`: The pay statement summary model
  * autoPay `boolean`: .<br />
  * beginDate `string`: .<br />
  * checkDate `string`: .<br />
  * checkNumber `integer`: .<br />
  * directDepositAmount `number`: .<br />
  * endDate `string`: .<br />
  * grossPay `number`: .<br />
  * hours `number`: .<br />
  * netCheck `number`: .<br />
  * netPay `number`: .<br />
  * overtimeDollars `number`: .<br />
  * overtimeHours `number`: .<br />
  * process `integer`: .<br />
  * regularDollars `number`: .<br />
  * regularHours `number`: .<br />
  * transactionNumber `integer`: <br />
  * voucherNumber `integer`: .<br />
  * workersCompCode `string`: .<br />
  * year `integer`: .<br />

### stagedEmployee
* stagedEmployee `object`: The staged employee model
  * additionalDirectDeposit `array`: Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
    * items `object`: The additional direct deposit model
      * accountNumber `string`: Account number, entered without special characters and spaces. <br  />Max length: 17<br />
      * accountType `string`: Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />
      * amount `number`: Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
      * amountType `string`: Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />
      * isSkipPreNote `boolean`: Indicates if account will not pre-note.<br />
      * preNoteDate `string`: Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
      * routingNumber `string`: ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />
  * benefitSetup `array`: Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
    * items `object`: The benefit setup model
      * benefitClass `string`: Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30
      * benefitClassEffectiveDate `string`: Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * benefitSalary `number`: Salary used to configure benefits.<br  />Decimal(12,2)
      * benefitSalaryEffectiveDate `string`: Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * doNotApplyAdministrativePeriod `boolean`: Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
      * isMeasureAcaEligibility `boolean`: Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.
  * birthDate `string`: Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
  * customBooleanFields `array`: Up to 8 custom fields of boolean (checkbox) type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `boolean`: The custom boolean field value.
  * customDateFields `array`: Up to 8 custom fields of the date type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
  * customDropDownFields `array`: Up to 8 custom fields of the dropdown type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
  * customNumberFields `array`: Up to 8 custom fields of numeric type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `number`: The custom number field value.  Decimal (18,6).
  * customTextFields `array`: Up to 8 custom fields of text type value.
    * items `object`
      * category **required** `string` (values: PayrollAndHR): The custom field category.  Acceptable value is 'PayrollAndHR'.
      * label **required** `string`: The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
      * value **required** `string`: The custom text field value.  Max length: 255.
  * departmentPosition `array`: Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
    * items `object`: The Department Position model
      * changeReason `string`: Employee department/position change reason. Must match Company setup. <br  />Max length: 15
      * clockBadgeNumber `string`: Employee clock badge number. Defaults to employeeId. <br  />Max length: 10
      * costCenter1 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
      * costCenter2 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
      * costCenter3 `string`: Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
      * effectiveDate `string`: The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * employeeType `string`: Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10
      * equalEmploymentOpportunityClass `string`: Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10
      * isMinimumWageExempt `boolean`: Indicates if employee is exempt from minimum wage.
      * isOvertimeExempt `boolean`: Indicates if employee is exempt from overtime.
      * isSupervisorReviewer `boolean`: Indicates if employee is a supervisor or reviewer.
      * isUnionDuesCollected `boolean`: Indicates if union dues are collected.
      * isUnionInitiationCollected `boolean`: Indicates if initiations fees are collected.
      * jobTitle `string`: Employee current job title. <br  />Max length: 50
      * payGroup `string`: Employee pay group. Must match Company setup. <br  /> Max length: 20
      * positionCode `string`: Employee position code. Must match Company setup.<br  />Max length: 20
      * shift `string`: Employee work shift.<br  />Max length: 255
      * supervisorCompanyNumber `string`: Supervisor's company number. Defaults to employee company number.<br  />Max length: 9
      * supervisorEmployeeId `string`: EmployeeId of the supervisor. <br  />Max length: 10
      * tipped `string`: Indicates if employee receives tips.
      * unionAffiliationDate `string`: Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * unionCode `string`: Employee union code. Must match Company setup. <br  />Max length: 10
      * unionPosition `string`: Employee union position. Must match Company setup. <br  />Max length: 30
      * workersCompensation `string`: Employee worker compensation code. Must match Company setup.<br  /> Max length: 10
  * disabilityDescription `string`: Indicates if employee has disability status.
  * employeeId `string`: Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10
  * ethnicity `string`: Employee ethnicity.<br  /> Max length: 10
  * federalTax `array`: Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
    * items `object`: The Federal Tax model
      * amount `number`: Tax amount. <br  />Decimal (12,2)
      * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
      * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
      * exemptions `number`: Federal tax exemptions value. <br  />Decimal (12,2)
      * filingStatus `string`: Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
      * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
      * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
      * percentage `number`: Tax percentage. <br  />Decimal (12,2)
      * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
      * w4FormYear `integer`: The federal W4 form year <br  />Integer
  * firstName `string`: Employee first name. <br  />Max length: 40
  * fitwExemptReason `string`: Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
  * futaExemptReason `string`: Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
  * gender `string`: Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1
  * homeAddress `array`: Add employee's home address, personal phone numbers, and personal email.
    * items `object`: The address model
      * address1 `string`: 1st address line.<br  /> Max length: 40
      * address2 `string`: 2nd address line. <br  /> Max length: 40
      * city `string`: City.<br  /> Max length: 40
      * country `string`: Country.<br  /> Max length: 30
      * county `string`: County.<br  /> Max length: 30
      * emailAddress `string`: Email. <br  />Max length: 50
      * mobilePhone `string`: Mobile phone number.<br  /> Max length: 12
      * phone `string`: Phone number.<br  /> Max length: 12
      * postalCode `string`: Postal code.<br  /> Max length: 10
      * state `string`: State or province.<br  /> Max length: 2
  * isEmployee943 `boolean`: Indicates if employee in agriculture or farming.
  * isSmoker `boolean`: Indicates if employee is a smoker.
  * lastName `string`: Employee last name. <br  />Max length: 40
  * localTax `array`: Add local tax code, filing status, and exemptions including PA-PSD taxes.
    * items `object`: The Local Tax model
      * exemptions `number`: Local tax exemptions value.<br  />Decimal (12,2)
      * exemptions2 `number`: Local tax exemptions 2 value.<br  />Decimal (12,2)
      * filingStatus `string`: Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
      * residentPSD `string`: Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
      * taxCode `string`: Local tax code.<br  />Max length: 50
      * workPSD `string`: Work location PSD. Must match Company setup. <br  /> Max length: 9
  * mainDirectDeposit `array`: Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
    * items `object`: The Main Direct Deposit model
      * accountNumber `string`: Account number, entered without special characters and spaces. <br  />Max length: 17
      * accountType `string`: Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1
      * isSkipPreNote `boolean`: Indicates if account will not pre-note.
      * preNoteDate `string`: Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * routingNumber `string`: ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9
  * maritalStatus `string`: Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10
  * medExemptReason `string`: Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
  * middleName `string`: Employee middle name.<br  /> Max length: 20
  * nonPrimaryStateTax `array`: Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
    * items `object`: The Non-Primary State Tax model
      * amount `number`: State tax code.<br  /> Max length: 50
      * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
      * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
      * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
      * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
      * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
      * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
      * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
      * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
      * reciprocityCode `string`: Non-primary state tax reciprocity code.<br  /> Max length: 50
      * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
      * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
      * taxCode `string`: State tax code.<br  /> Max length: 50
      * w4FormYear `integer`: The state W4 form year <br  />Integer
  * preferredName `string`: Employee preferred display name.<br  /> Max length: 20
  * primaryPayRate `array`: Add hourly or salary pay rate, effective date, and pay frequency.
    * items `object`: The Primary Pay Rate model
      * baseRate `number`: Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
      * changeReason `string`: Pay rate change reason.<br  /> Max length: 30
      * defaultHours `number`: Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
      * effectiveDate `string`: The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * isAutoPay `boolean`: If set to *True*, employee will be paid automatically using deafultHours.
      * payFrequency `string`: Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5
      * payGrade `string`: Employee pay grade. Must match Company setup. <br  /> Max length: 10
      * payType `string`: Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10
      * ratePer `string`: Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10
      * salary `number`: Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,2)
  * primaryStateTax `array`: Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.
    * items `object`: The State Tax model
      * amount `number`: State tax code.<br  /> Max length: 50
      * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
      * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
      * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
      * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
      * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
      * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
      * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
      * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
      * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
      * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
      * taxCode `string`: State tax code.<br  /> Max length: 50
      * w4FormYear `integer`: The state W4 form year <br  />Integer
  * priorLastName `string`: Prior last name if applicable.<br  />Max length: 40
  * salutation `string`: Employee preferred salutation. <br  />Max length: 10
  * sitwExemptReason `string`: Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
  * ssExemptReason `string`: Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
  * ssn `string`: Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11
  * status `array`: Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
    * items `object`: The employee status model
      * adjustedSeniorityDate `string`: Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * changeReason `string`: Employee status change reason. Must match Company setup.<br  /> Max length: 15
      * effectiveDate `string`: Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * employeeStatus `string`: Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20
      * hireDate `string`: Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * isEligibleForRehire `boolean`: Indicates if employee eligible for rehire.
  * suffix `string`: Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30
  * suiExemptReason `string`: Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
  * suiState `string`: Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2
  * taxDistributionCode1099R `string`: Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1
  * taxForm `string`: Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15
  * veteranDescription `string`: Indicates if employee is a veteran.
  * webTime `object`: Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
    * badgeNumber `string`: Badge number usually issued for time and attendance system use. <br  />Max length: 50
    * chargeRate `number`: Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
    * isTimeLaborEnabled `boolean`: If set to true, changes to employee data will be reflected in Web Time.
  * workAddress `array`: Add employee's work address, phone numbers, and email. Work Location drop down field is not included.
    * items `object`: The address model
      * address1 `string`: 1st address line.<br  /> Max length: 40
      * address2 `string`: 2nd address line. <br  /> Max length: 40
      * city `string`: City.<br  /> Max length: 40
      * country `string`: Country.<br  /> Max length: 30
      * county `string`: County.<br  /> Max length: 30
      * emailAddress `string`: Email. <br  />Max length: 50
      * mobilePhone `string`: Mobile phone number.<br  /> Max length: 12
      * pager `string`: Employee pager number.<br  /> Max length: 20
      * phone `string`: Phone number.<br  /> Max length: 12
      * phoneExtension `string`: Phone number extension.<br  /> Max length: 10
      * postalCode `string`: Postal code.<br  /> Max length: 10
      * state `string`: State or province.<br  /> Max length: 2
  * workEligibility `array`: Add I-9 work authorization information.
    * items `object`: The Work Eligibility model
      * alienOrAdmissionDocumentNumber `string`: Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'
      * attestedDate `string`: The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
      * countryOfIssuance `string`: If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30
      * foreignPassportNumber `string`: Foreign Passport Number.<br  /> Max length: 50
      * i94AdmissionNumber `string`: Form I-94 admission number.<br  /> Must be 11 numeric characters
      * i9DateVerified `string`: Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * i9Notes `string`: Notes regarding employee's i9.<br  /> Max length: 4000
      * isI9Verified `boolean`: Indicates if employee I9 is verified.
      * isSsnVerified `boolean`: Indicates if employee SSN is verified.
      * ssnDateVerified `string`: The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
      * ssnNotes `string`: Notes regarding employee's SSN.<br  /> Max length: 4000
      * visaType `string`: Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100
      * workAuthorization `string`: Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100
      * workUntil `string`: End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

### stateTax
* stateTax `object`: The State Tax model
  * amount `number`: State tax code.<br  /> Max length: 50
  * deductionsAmount `number`: Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
  * dependentsAmount `number`: Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
  * exemptions `number`: State tax exemptions value.<br  />Decimal (12,2)
  * exemptions2 `number`: State tax exemptions 2 value.<br  />Decimal (12,2)
  * filingStatus `string`: Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
  * higherRate `boolean`: Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
  * otherIncomeAmount `number`: Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
  * percentage `number`: State Tax percentage. <br  />Decimal (12,2)
  * specialCheckCalc `string`: Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
  * taxCalculationCode `string`: Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
  * taxCode `string`: State tax code.<br  /> Max length: 50
  * w4FormYear `integer`: The state W4 form year <br  />Integer

### trackingNumberResponse
* trackingNumberResponse `object`: The Tracking Number Response model
  * trackingNumber `string`: The unique tracking number


