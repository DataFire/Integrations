# @datafire/nebl

Client library for Neblio REST API Suite

## Installation and Usage
```bash
npm install --save @datafire/nebl
```
```js
let nebl = require('@datafire/nebl').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

APIs for Interacting with NTP1 Tokens & The Neblio Blockchain

## Actions

### json_rpc
Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1


```js
nebl.json_rpc({
  "body": {
    "jsonrpc": "",
    "id": "",
    "method": "",
    "params": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [rpcRequest](#rpcrequest)

#### Output
* output [rpcResponse](#rpcresponse)

### getAddress
Returns NEBL address object containing information on a specific address


```js
nebl.getAddress({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressResponse](#getaddressresponse)

### getAddressBalance
Returns NEBL address balance in satoshis


```js
nebl.getAddressBalance({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressBalanceResponse](#getaddressbalanceresponse)

### getAddressTotalReceived
Returns total NEBL received by address in satoshis


```js
nebl.getAddressTotalReceived({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressTotalReceivedResponse](#getaddresstotalreceivedresponse)

### getAddressTotalSent
Returns total NEBL sent by address in satoshis


```js
nebl.getAddressTotalSent({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressTotalSentResponse](#getaddresstotalsentresponse)

### getAddressUnconfirmedBalance
Returns NEBL address unconfirmed balance in satoshis


```js
nebl.getAddressUnconfirmedBalance({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressUnconfirmedBalanceResponse](#getaddressunconfirmedbalanceresponse)

### getAddressUtxos
Returns information on each Unspent Transaction Output contained at an address


```js
nebl.getAddressUtxos({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressUtxosResponse](#getaddressutxosresponse)

### getBlockIndex
Returns the block hash of a block at a given block index


```js
nebl.getBlockIndex({
  "blockindex": 0
}, context)
```

#### Input
* input `object`
  * blockindex **required** `number`: Block Index

#### Output
* output [getBlockIndexResponse](#getblockindexresponse)

### getBlock
Returns blockchain data for a given block based upon the block hash


```js
nebl.getBlock({
  "blockhash": ""
}, context)
```

#### Input
* input `object`
  * blockhash **required** `string`: Block Hash

#### Output
* output [getBlockResponse](#getblockresponse)

### getRawTx
Returns raw transaction hex representing a NEBL transaction


```js
nebl.getRawTx({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Transaction ID

#### Output
* output [getRawTxResponse](#getrawtxresponse)

### getStatus
Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash


```js
nebl.getStatus({}, context)
```

#### Input
* input `object`
  * q `string`: Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash

#### Output
* output [getStatusResponse](#getstatusresponse)

### getSync
Returns information on the node's sync progress


```js
nebl.getSync(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [getSyncResponse](#getsyncresponse)

### sendTx
Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.



```js
nebl.sendTx({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [sendTxRequest](#sendtxrequest)

#### Output
* output [broadcastTxResponse](#broadcasttxresponse)

### getTx
Returns NEBL transaction object representing a NEBL transaction


```js
nebl.getTx({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Transaction ID

#### Output
* output [getTxResponse](#gettxresponse)

### getTxs
Returns all transactions by block or address


```js
nebl.getTxs({}, context)
```

#### Input
* input `object`
  * address `string`: Address
  * block `string`: Block Hash
  * pageNum `number`: Page number to display

#### Output
* output [getTxsResponse](#gettxsresponse)

### getAddressInfo
Returns both NEBL and NTP1 token UTXOs held at the given address.



```js
nebl.getAddressInfo({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Neblio Address to get information on.

#### Output
* output [getAddressInfoResponse](#getaddressinforesponse)

### broadcastTx
Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.



```js
nebl.broadcastTx({
  "body": {
    "txHex": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [broadcastTxRequest](#broadcasttxrequest)

#### Output
* output [broadcastTxResponse](#broadcasttxresponse)

### burnToken
Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.



```js
nebl.burnToken({
  "body": {
    "fee": 0,
    "burn": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [burnTokenRequest](#burntokenrequest)

#### Output
* output [burnTokenResponse](#burntokenresponse)

### issueToken
Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.



```js
nebl.issueToken({
  "body": {
    "issueAddress": "",
    "amount": 0,
    "divisibility": 0,
    "fee": 0,
    "reissuable": true,
    "transfer": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [issueTokenRequest](#issuetokenrequest)

#### Output
* output [issueTokenResponse](#issuetokenresponse)

### sendToken
Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.



```js
nebl.sendToken({
  "body": {
    "fee": 0,
    "to": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [sendTokenRequest](#sendtokenrequest)

#### Output
* output [sendTokenResponse](#sendtokenresponse)

### getTokenHolders
Returns the the the addresses holding a token and how many tokens are held



```js
nebl.getTokenHolders({
  "tokenid": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for

#### Output
* output [getTokenHoldersResponse](#gettokenholdersresponse)

### getTokenId
Translates a token symbol to a tokenId if a token exists with that symbol on the network



```js
nebl.getTokenId({
  "tokensymbol": ""
}, context)
```

#### Input
* input `object`
  * tokensymbol **required** `string`: Token symbol

#### Output
* output [getTokenIdResponse](#gettokenidresponse)

### getTokenMetadata
Returns the metadata associated with a token.



```js
nebl.getTokenMetadata({
  "tokenid": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for
  * verbosity `number`: 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses

#### Output
* output [getTokenMetadataResponse](#gettokenmetadataresponse)

### getTokenMetadataOfUtxo
Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.



```js
nebl.getTokenMetadataOfUtxo({
  "tokenid": "",
  "utxo": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for
  * utxo **required** `string`: Specific UTXO to request metadata for
  * verbosity `number`: 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses

#### Output
* output [getTokenMetadataResponse](#gettokenmetadataresponse)

### getTransactionInfo
Returns detailed information regarding an NTP1 transaction.



```js
nebl.getTransactionInfo({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Neblio txid to get information on.

#### Output
* output [getTransactionInfoResponse](#gettransactioninforesponse)

### testnet_getFaucet
Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.



```js
nebl.testnet_getFaucet({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Your Neblio Testnet Address
  * amount `number`: Amount of NEBL to withdrawal in satoshis

#### Output
* output [getFaucetResponse](#getfaucetresponse)

### testnet_getAddress
Returns NEBL address object containing information on a specific address


```js
nebl.testnet_getAddress({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressResponse](#getaddressresponse)

### testnet_getAddressBalance
Returns NEBL address balance in satoshis


```js
nebl.testnet_getAddressBalance({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressBalanceResponse](#getaddressbalanceresponse)

### testnet_getAddressTotalReceived
Returns total NEBL received by address in satoshis


```js
nebl.testnet_getAddressTotalReceived({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressTotalReceivedResponse](#getaddresstotalreceivedresponse)

### testnet_getAddressTotalSent
Returns total NEBL sent by address in satoshis


```js
nebl.testnet_getAddressTotalSent({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressTotalSentResponse](#getaddresstotalsentresponse)

### testnet_getAddressUnconfirmedBalance
Returns NEBL address unconfirmed balance in satoshis


```js
nebl.testnet_getAddressUnconfirmedBalance({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressUnconfirmedBalanceResponse](#getaddressunconfirmedbalanceresponse)

### testnet_getAddressUtxos
Returns information on each Unspent Transaction Output contained at an address


```js
nebl.testnet_getAddressUtxos({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Address

#### Output
* output [getAddressUtxosResponse](#getaddressutxosresponse)

### testnet_getBlockIndex
Returns the block hash of a block at a given block index


```js
nebl.testnet_getBlockIndex({
  "blockindex": 0
}, context)
```

#### Input
* input `object`
  * blockindex **required** `number`: Block Index

#### Output
* output [getBlockIndexResponse](#getblockindexresponse)

### testnet_getBlock
Returns blockchain data for a given block based upon the block hash


```js
nebl.testnet_getBlock({
  "blockhash": ""
}, context)
```

#### Input
* input `object`
  * blockhash **required** `string`: Block Hash

#### Output
* output [getBlockResponse](#getblockresponse)

### testnet_getRawTx
Returns raw transaction hex representing a NEBL transaction


```js
nebl.testnet_getRawTx({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Transaction ID

#### Output
* output [getRawTxResponse](#getrawtxresponse)

### testnet_getStatus
Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash


```js
nebl.testnet_getStatus({}, context)
```

#### Input
* input `object`
  * q `string`: Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash

#### Output
* output [getStatusResponse](#getstatusresponse)

### testnet_getSync
Returns information on the node's sync progress


```js
nebl.testnet_getSync(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [getSyncResponse](#getsyncresponse)

### testnet_sendTx
Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.



```js
nebl.testnet_sendTx({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [sendTxRequest](#sendtxrequest)

#### Output
* output [broadcastTxResponse](#broadcasttxresponse)

### testnet_getTx
Returns NEBL transaction object representing a NEBL transaction


```js
nebl.testnet_getTx({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Transaction ID

#### Output
* output [getTxResponse](#gettxresponse)

### testnet_getTxs
Returns all transactions by block or address


```js
nebl.testnet_getTxs({}, context)
```

#### Input
* input `object`
  * address `string`: Address
  * block `string`: Block Hash
  * pageNum `number`: Page number to display

#### Output
* output [getTxsResponse](#gettxsresponse)

### testnet_getAddressInfo
Returns both NEBL and NTP1 token UTXOs held at the given address.



```js
nebl.testnet_getAddressInfo({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: Neblio Address to get information on.

#### Output
* output [getAddressInfoResponse](#getaddressinforesponse)

### testnet_broadcastTx
Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.



```js
nebl.testnet_broadcastTx({
  "body": {
    "txHex": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [broadcastTxRequest](#broadcasttxrequest)

#### Output
* output [broadcastTxResponse](#broadcasttxresponse)

### testnet_burnToken
Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.



```js
nebl.testnet_burnToken({
  "body": {
    "fee": 0,
    "burn": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [burnTokenRequest](#burntokenrequest)

#### Output
* output [burnTokenResponse](#burntokenresponse)

### testnet_issueToken
Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.



```js
nebl.testnet_issueToken({
  "body": {
    "issueAddress": "",
    "amount": 0,
    "divisibility": 0,
    "fee": 0,
    "reissuable": true,
    "transfer": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [issueTokenRequest](#issuetokenrequest)

#### Output
* output [issueTokenResponse](#issuetokenresponse)

### testnet_sendToken
Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.



```js
nebl.testnet_sendToken({
  "body": {
    "fee": 0,
    "to": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [sendTokenRequest](#sendtokenrequest)

#### Output
* output [sendTokenResponse](#sendtokenresponse)

### testnet_getTokenHolders
Returns the the the addresses holding a token and how many tokens are held



```js
nebl.testnet_getTokenHolders({
  "tokenid": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for

#### Output
* output [getTokenHoldersResponse](#gettokenholdersresponse)

### testnet_getTokenId
Translates a token symbol to a tokenId if a token exists with that symbol on the network



```js
nebl.testnet_getTokenId({
  "tokensymbol": ""
}, context)
```

#### Input
* input `object`
  * tokensymbol **required** `string`: Token symbol

#### Output
* output [getTokenIdResponse](#gettokenidresponse)

### testnet_getTokenMetadata
Returns the metadata associated with a token.



```js
nebl.testnet_getTokenMetadata({
  "tokenid": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for
  * verbosity `number`: 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses

#### Output
* output [getTokenMetadataResponse](#gettokenmetadataresponse)

### testnet_getTokenMetadataOfUtxo
Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.



```js
nebl.testnet_getTokenMetadataOfUtxo({
  "tokenid": "",
  "utxo": ""
}, context)
```

#### Input
* input `object`
  * tokenid **required** `string`: TokenId to request metadata for
  * utxo **required** `string`: Specific UTXO to request metadata for
  * verbosity `number`: 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses

#### Output
* output [getTokenMetadataResponse](#gettokenmetadataresponse)

### testnet_getTransactionInfo
Returns detailed information regarding an NTP1 transaction.



```js
nebl.testnet_getTransactionInfo({
  "txid": ""
}, context)
```

#### Input
* input `object`
  * txid **required** `string`: Neblio txid to get information on.

#### Output
* output [getTransactionInfoResponse](#gettransactioninforesponse)



## Definitions

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### broadcastTxRequest
* broadcastTxRequest `object`
  * txHex **required** `string`: Signed raw tx hex to broadcast

### broadcastTxResponse
* broadcastTxResponse `object`
  * txid `string`: Txid of successfully broadcasted transaction

### burnTokenRequest
* burnTokenRequest `object`
  * burn **required** `array`: Array of objects representing tokens to be burned
    * items `object`
      * amount `number`: Amount of tokens to burn
      * tokenId `string`: Unique token id we are burning
  * fee **required** `number`: Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
  * from `array`: Array of addresses to send the token from
    * items `string`
  * transfer `array`
    * items `object`
      * address `string`: Address to transfer tokens to
      * amount `number`: Number of tokens to send
      * tokenId `string`: ID of token we are sending

### burnTokenResponse
* burnTokenResponse `object`
  * multisigOutputs `array`: Array of indexes of multisig outputs
    * items `number`
  * ntp1OutputIndexes `array`: Array of indexes transfering NTP1 tokens
    * items `number`
  * txHex `string`: Unsigned, raw transaction hex of the transaction to burn the token

### getAddressBalanceResponse
* getAddressBalanceResponse `number`: Address balance in satoshis

### getAddressInfoResponse
* getAddressInfoResponse `object`
  * address `string`: The Neblio Address
  * utxos `array`: Array of UTXOs held at this address.
    * items `object`
      * blockheight `number`: Blockheight of the UTXO
      * blocktime `number`: Blocktime of the UTXO
      * index `number`: Index of the UTXO at this address
      * scriptPubKey `object`: Object representing the scruptPubKey of the UTXO
      * tokens `array`: Array of NTP1 tokens in this UTXO.
        * items `object`
          * aggregationPolicy `string`: Whether the tokens can be aggregated together
          * amount `number`: Number of Tokens
          * divisibility `number`: Decimal places the token is divisible to
          * issueTxid `string`: TXID the token originally was issued in
          * lockStatus `boolean`: Whether the token is locked, preventing more from being issued
          * tokenId `string`: Unique NTP1 identifier for this token
      * txid `string`: Txid of this UTXO
      * used `boolean`: Whether the UTXO has been used
      * value `number`: Value of the UTXO in NEBL satoshi

### getAddressResponse
* getAddressResponse `object`
  * addrStr `string`: Address in string form
  * balance `number`: NEBL balance
  * balanceSat `number`: NEBL balance in satoshis
  * totalReceived `number`: Total NEBL received
  * totalReceivedSat `number`: Total NEBL received in satoshis
  * totalSent `number`: Total NEBL sent
  * totalSentSat `number`: Total NEBL sent satoshis
  * transactions `array`: Array of transaction ids for this address
    * items `string`
  * txAppearances `number`: Number of transactions for this address
  * unconfirmedBalance `number`: Unconfirmed NEBL balance
  * unconfirmedBalanceSat `number`: Unconfirmed NEBL balance in satoshis
  * unconfirmedTxAppearances `number`: Number of unconfirmed transactions for this address

### getAddressTotalReceivedResponse
* getAddressTotalReceivedResponse `number`: Address total received in satoshis

### getAddressTotalSentResponse
* getAddressTotalSentResponse `number`: Address total sent in satoshis

### getAddressUnconfirmedBalanceResponse
* getAddressUnconfirmedBalanceResponse `number`: Address unconfirmed balance in satoshis

### getAddressUtxosResponse
* getAddressUtxosResponse `array`: Array of objects representing this address' UTXOs
  * items `object`
    * address `string`: Address
    * amount `number`: NEBL amount
    * confirmations `number`: Number of confirmations
    * scriptPubKey `string`: scriptPubKey
    * ts `number`: Timestamp
    * txid `string`: Transaction ID
    * vout `number`: vout

### getBlockIndexResponse
* getBlockIndexResponse `object`
  * blockHash `string`: Hash of the requested block

### getBlockResponse
* getBlockResponse `object`
  * bits `string`: Block bits
  * confirmations `number`: Number of confirmations block has
  * difficulty `number`: Block difficulty
  * hash `string`: Block hash
  * height `number`: Block height
  * merkleroot `string`: Merkleroot of block
  * nextblockhash `string`: Hash of the next block on the chain
  * nonce `number`: Block nonce
  * previousblockhash `string`: Hash of the previous block on the chain
  * reward `number`: Number of NEBL awarded in this block
  * size `number`: Block size in bytes
  * time `number`: Block time relative to epoch
  * tx `array`: Array of tx ids in the block
    * items `string`
  * version `number`: Block version

### getFaucetResponse
* getFaucetResponse `object`
  * data `object`
    * txId `string`: TXID of a successful withdrawal
  * status `string`: Whether the withdrawal was successful

### getRawTxResponse
* getRawTxResponse `object`
  * rawtx `string`: Raw hex representing the transaction

### getStatusResponse
* getStatusResponse `object`: Depending on the function called, the structure and information contained in this object will vary

### getSyncResponse
* getSyncResponse `object`: Object containing node sync status
  * blockChainHeight `number`: Current blockchain height
  * error `string`: Recent sync error messages
  * height `number`: Height node is synced to
  * status `string`: Current sync status
  * syncPercentage `number`: Current sync percentage
  * type `string`: Node type

### getTokenHoldersResponse
* getTokenHoldersResponse `object`
  * aggregationPolicy `string`: Whether the tokesn are aggregatable
  * divibility `number`: How many decimal points the token is divisble to
  * holders `array`
    * items `object`
      * address `string`
      * amount `number`
  * lockStatus `boolean`: Whether new issuances of this token are locked
  * someUtxo `string`: A UTXO of this token
  * tokenId `string`: TokenId of the token

### getTokenIdResponse
* getTokenIdResponse `object`
  * tokenId `string`: Unique ID of the token
  * tokenName `string`: String representing the token Symbol

### getTokenMetadataResponse
* getTokenMetadataResponse `object`
  * aggregationPolicy `string`: Whether the tokens are aggregatable
  * divisibility `number`: Decimal places the token is divisible to
  * firstBlock `number`: Block number token was issued in
  * initialIssuanceAmount `number`: Total tokens issued in initial issuance
  * issuanceTxid `string`: TXID the token was issued with
  * issueAddress `string`: Address that issued the tokens
  * lockStatus `boolean`: Whether issuance of more tokens is locked
  * metadataOfIssuance `object`: Metadata set at issuance
    * data `object`
      * description `string`: Token description
      * issuer `string`: Name of token issuer
      * tokenName `string`: Token symbol
      * userData `object`: Metadata set by user on token
        * meta `array`
          * items `object`
  * metadataOfUtxo `object`: Metadata set for UTXO
    * userData `object`: Metadata set by user on token for UTXO
      * meta `array`
        * items `object`
  * numOfBurns `number`: Number of times tokens have been burned
  * numOfHolders `number`: Total number of addresses this token is held at
  * numOfIssuance `number`: Total number of times this token has been issued
  * numOfTransfers `number`: Total number of transactions of this token
  * someUtxo `string`: Example UTXO containing this token.
  * tokenId `string`: ID of the token
  * totalSupply `number`: Total number of tokens in supply

### getTransactionInfoResponse
* getTransactionInfoResponse `object`
  * blockhash `string`: Hash of the block this transaction is in
  * blockheight `number`: Block height of this transaction
  * blocktime `number`: Block time of this transaction
  * confirmations `number`: Number of transaction confirmations
  * fee `number`: Total NEBL used as fee for this transcation in satoshis
  * hex `string`: Transaction in raw hex
  * locktime `number`: Transaction locktime
  * time `number`: Transaction time
  * totalsent `number`: Total NEBL sent in this transaction in satoshis
  * txid `string`: TXID of transaction
  * version `number`: Transaction version
  * vin `array`: Array of transaction inputs
    * items `object`
      * previousOutput `object`
        * addresses `array`
          * items `string`
        * asm `string`
        * hex `string`
        * reqSigs `number`
        * type `string`
      * scriptSig `object`
        * asm `string`
        * hex `string`
      * sequence `number`
      * tokens `array`
        * items `object`
          * aggregationPolicy `string`: Whether the tokens are aggregatable
          * amount `number`: Number of tokens
          * divisibility `number`: Decimal places the token is divisible to
          * issueTxid `string`: TXID the token was issued in
          * lockStatus `boolean`: Whether issuance of more tokens is locked
          * tokenId `string`: ID of the token
      * txid `string`: TXID of the input
      * value `number`: Value of input in NEBL satoshi
      * vout `number`: output index
  * vout `array`: Array of transaction outputs
    * items `object`
      * blockheight `number`: Blockheight of this transaction
      * n `number`: Output index
      * scriptPubKey `object`
        * addresses `array`
          * items `string`
        * asm `string`
        * hex `string`
        * reqSigs `number`
        * type `string`
      * tokens `array`
        * items `object`
          * aggregationPolicy `string`: Whether the tokens are aggregatable
          * amount `number`: Number of tokens
          * divisibility `number`: Decimal places the token is divisible to
          * issueTxid `string`: TXID the token was issued in
          * lockStatus `boolean`: Whether issuance of more tokens is locked
          * tokenId `string`: ID of the token
      * used `boolean`: Whether this output has now been used
      * usedBlockheight `number`: Blockheight this output was used in
      * usedTxid `string`: TXID this output was used in
      * value `number`: Value of the output in NEBL satoshi

### getTxResponse
* getTxResponse `object`
  * blockhash `string`: Hash of the block this transaction is in
  * blockheight `number`: Block height of this transaction
  * blocktime `number`: Block time of this transaction
  * confirmations `number`: Number of transaction confirmations
  * fee `number`: Total NEBL used as fee for this transcation in satoshis
  * fees `number`: Total NEBL used in fees for this transaction
  * locktime `number`: Transaction locktime
  * size `number`: Transcation size in bytes
  * time `number`: Transaction time
  * totalsent `number`: Total NEBL sent in this transaction in satoshis
  * txid `string`: TXID of transaction
  * valueIn `number`: Total NEBL input in this transaction
  * valueOut `number`: Total NEBL output in this transaction
  * version `number`: Transaction version
  * vin `array`: Array of transaction inputs
    * items `object`
      * n `number`: input index
      * scriptSig `object`
        * asm `string`
        * hex `string`
      * sequence `number`
      * txid `string`: TXID of the input
      * value `number`: Value of input in NEBL
      * valueSat `number`: Value of input in NEBL satoshi
      * vout `number`: output index
  * vout `array`: Array of transaction outputs
    * items `object`
      * blockheight `number`: Blockheight of this transaction
      * n `number`: Output index
      * scriptPubKey `object`
        * addresses `array`
          * items `string`
        * asm `string`
        * hex `string`
        * reqSigs `number`
        * type `string`
      * used `boolean`: Whether this output has now been used
      * usedBlockheight `number`: Blockheight this output was used in
      * usedTxid `string`: TXID this output was used in
      * value `number`: Value of the output in NEBL

### getTxsResponse
* getTxsResponse `object`: Object containing an array of transaction objects
  * pagesTotal `number`: Number of pages of transactions
  * txs `array`: Array of transaction objects
    * items [getTxResponse](#gettxresponse)

### issueTokenRequest
* issueTokenRequest `object`
  * amount **required** `number`: Number of tokens to issue
  * divisibility **required** `number`: Number of decimal places the token should be divisble by (0-7)
  * fee **required** `number`: Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
  * flags `object`: Object representing flags that potentialy modify this transaction
    * splitChange `boolean`: If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)
  * issueAddress **required** `string`: Address issuing the token
  * metadata `object`: Object representing all metadata at token issuance
    * description `string`: Long name or description of token (ex. Nibble)
    * encryptions `array`: Array of encryption instruction objects for encrypting userData
      * items `object`
        * format `string`: key format (pem or der)
        * key `string`: userData key to encrypt
        * pubkey `string`: RSA public key used for encryption
        * type `string`: pkcs1 or pkcs8
    * issuer `string`: Name of token issuer
    * rules `object`: Object describing token rules
      * expiration `object`: Object describing expiration rules of the token
        * locked `boolean`: Whether this rule can be modified in future transactions
        * validUntil `number`: Blockheight at wh
      * fees `object`
        * items `array`: Array of objects describing fee rules
          * items `object`
        * locked `boolean`: Whether this rule can be modified in future transactions
      * holders `array`: Array of objects describing what addresses can hold the token
        * items `object`
          * address `string`: Address that can hold the token
          * locked `boolean`: Whether this rule can be modified in future transactions
    * tokenName `string`: Token Symbol it will be identified by (ex. NIBBL)
    * urls `array`
      * items `object`
        * dataHash `string`: Hash of data at the URL, used for verification
        * mimeType `string`: mimeType of URL content
        * name `string`: Name of the URL
        * url `string`: Actual URL
    * userData `object`: Metadata set by user on token
      * meta `array`
        * items `object`
          * key `string`
          * value `string`
  * reissuable **required** `boolean`: whether the token should be reissuable
  * transfer **required** `array`
    * items `object`
      * address `string`: Address to send the amount of issued tokens to
      * amount `number`

### issueTokenResponse
* issueTokenResponse `object`
  * tokenId `string`: TokenId of the to be issued token
  * txHex `string`: Unsigned, raw transaction hex of the transaction to issue the token

### rpcRequest
* rpcRequest `object`
  * id **required** `string`: Identifier of RCP caller
  * jsonrpc **required** `string`: JSON-RPC version
  * method **required** `string`: Name of the Neblio RPC method to call
  * params **required** `array`: Array of string params that should be passed to the RPC method.
    * items `string`

### rpcResponse
* rpcResponse `object`: Object containing the JSON response from the Neblio node.
  * error `object`: Object containing any error information.
  * id `string`: Identifier of RCP caller
  * result `object`: Object containing the response output.

### sendTokenRequest
* sendTokenRequest `object`
  * fee **required** `number`: Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
  * flags `object`: Object representing flags that potentialy modify this transaction
    * splitChange `boolean`: If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)
  * from `array`: Array of addresses to send the token from
    * items `string`
  * metadata `object`: Object representing all metadata at token issuance
    * description `string`: Long name or description of token (ex. Nibble)
    * encryptions `array`: Array of encryption instruction objects for encrypting userData
      * items `object`
        * format `string`: key format (pem or der)
        * key `string`: userData key to encrypt
        * pubkey `string`: RSA public key used for encryption
        * type `string`: pkcs1 or pkcs8
    * issuer `string`: Name of token issuer
    * rules `object`: Object describing token rules
      * expiration `object`: Object describing expiration rules of the token
        * locked `boolean`: Whether this rule can be modified in future transactions
        * validUntil `number`: Blockheight at wh
      * fees `object`
        * items `array`: Array of objects describing fee rules
          * items `object`
        * locked `boolean`: Whether this rule can be modified in future transactions
      * holders `array`: Array of objects describing what addresses can hold the token
        * items `object`
          * address `string`: Address that can hold the token
          * locked `boolean`: Whether this rule can be modified in future transactions
    * tokenName `string`: Token Symbol it will be identified by (ex. NIBBL)
    * urls `array`
      * items `object`
        * dataHash `string`: Hash of data at the URL, used for verification
        * mimeType `string`: mimeType of URL content
        * name `string`: Name of the URL
        * url `string`: Actual URL
    * userData `object`: Metadata set by user on token
      * meta `array`
        * items `object`
          * key `string`
          * value `string`
  * sendutxo `array`: Array of UTXOs to send the token from
    * items `string`
  * to **required** `array`
    * items `object`
      * address `string`: Address to transfer tokens to
      * amount `number`: Number of tokens to send
      * tokenId `string`: ID of token we are sending

### sendTokenResponse
* sendTokenResponse `object`
  * multisigOutputs `array`: Array of indexes of multisig outputs
    * items `number`
  * ntp1OutputIndexes `array`: Array of indexes transfering NTP1 tokens
    * items `number`
  * txHex `string`: Unsigned, raw transaction hex of the transaction to send the token

### sendTxRequest
* sendTxRequest `object`
  * txHex `string`: Signed raw tx hex to broadcast


