# @datafire/amazonaws_qldb_session

Client library for Amazon QLDB Session

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_qldb_session
```
```js
let amazonaws_qldb_session = require('@datafire/amazonaws_qldb_session').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The transactional data APIs for Amazon QLDB</p> <note> <p>Instead of interacting directly with this API, we recommend that you use the Amazon QLDB Driver or the QLDB Shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB Driver. The driver provides a high-level abstraction layer above this <code>qldbsession</code> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB Shell. The shell is a command line interface that uses the QLDB Driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB Shell</a>.</p> </li> </ul> </note>

## Actions

### SendCommand



```js
amazonaws_qldb_session.SendCommand({}, context)
```

#### Input
* input `object`
  * AbortTransaction
  * CommitTransaction
    * CommitDigest **required**
    * TransactionId **required**
  * EndSession
  * ExecuteStatement
    * Parameters
      * items [ValueHolder](#valueholder)
    * Statement **required**
    * TransactionId **required**
  * FetchPage
    * NextPageToken **required**
    * TransactionId **required**
  * SessionToken
  * StartSession
    * LedgerName **required**
  * StartTransaction

#### Output
* output [SendCommandResult](#sendcommandresult)



## Definitions

### AbortTransactionRequest
* AbortTransactionRequest `object`: Contains the details of the transaction to abort.

### AbortTransactionResult
* AbortTransactionResult `object`: Contains the details of the aborted transaction.

### BadRequestException


### CommitDigest
* CommitDigest `string`

### CommitTransactionRequest
* CommitTransactionRequest `object`: Contains the details of the transaction to commit.
  * CommitDigest **required**
  * TransactionId **required**

### CommitTransactionResult
* CommitTransactionResult `object`: Contains the details of the committed transaction.
  * CommitDigest
  * TransactionId

### EndSessionRequest
* EndSessionRequest `object`: Specifies a request to end the session.

### EndSessionResult
* EndSessionResult `object`: Contains the details of the ended session.

### ExecuteStatementRequest
* ExecuteStatementRequest `object`: Specifies a request to execute a statement.
  * Parameters
    * items [ValueHolder](#valueholder)
  * Statement **required**
  * TransactionId **required**

### ExecuteStatementResult
* ExecuteStatementResult `object`: Contains the details of the executed statement.
  * FirstPage
    * NextPageToken
    * Values
      * items [ValueHolder](#valueholder)

### FetchPageRequest
* FetchPageRequest `object`: Specifies the details of the page to be fetched.
  * NextPageToken **required**
  * TransactionId **required**

### FetchPageResult
* FetchPageResult `object`: Contains the page that was fetched.
  * Page
    * NextPageToken
    * Values
      * items [ValueHolder](#valueholder)

### InvalidSessionException


### IonBinary
* IonBinary `string`

### IonText
* IonText `string`

### LedgerName
* LedgerName `string`

### LimitExceededException


### OccConflictException


### Page
* Page `object`: Contains details of the fetched page.
  * NextPageToken
  * Values
    * items [ValueHolder](#valueholder)

### PageToken
* PageToken `string`

### RateExceededException


### SendCommandRequest
* SendCommandRequest `object`
  * AbortTransaction
  * CommitTransaction
    * CommitDigest **required**
    * TransactionId **required**
  * EndSession
  * ExecuteStatement
    * Parameters
      * items [ValueHolder](#valueholder)
    * Statement **required**
    * TransactionId **required**
  * FetchPage
    * NextPageToken **required**
    * TransactionId **required**
  * SessionToken
  * StartSession
    * LedgerName **required**
  * StartTransaction

### SendCommandResult
* SendCommandResult `object`
  * AbortTransaction
  * CommitTransaction
    * CommitDigest
    * TransactionId
  * EndSession
  * ExecuteStatement
    * FirstPage
      * NextPageToken
      * Values
        * items [ValueHolder](#valueholder)
  * FetchPage
    * Page
      * NextPageToken
      * Values
        * items [ValueHolder](#valueholder)
  * StartSession
    * SessionToken
  * StartTransaction
    * TransactionId

### SessionToken
* SessionToken `string`

### StartSessionRequest
* StartSessionRequest `object`: Specifies a request to start a new session.
  * LedgerName **required**

### StartSessionResult
* StartSessionResult `object`: Contains the details of the started session.
  * SessionToken

### StartTransactionRequest
* StartTransactionRequest `object`: Specifies a request to start a transaction.

### StartTransactionResult
* StartTransactionResult `object`: Contains the details of the started transaction.
  * TransactionId

### Statement
* Statement `string`

### StatementParameters
* StatementParameters `array`
  * items [ValueHolder](#valueholder)

### TransactionId
* TransactionId `string`

### ValueHolder
* ValueHolder `object`: A structure that can contain an Amazon Ion value in multiple encoding formats.
  * IonBinary
  * IonText

### ValueHolders
* ValueHolders `array`
  * items [ValueHolder](#valueholder)


