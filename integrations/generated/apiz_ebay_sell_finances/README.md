# @datafire/apiz_ebay_sell_finances

Client library for eBay Finances API

## Installation and Usage
```bash
npm install --save @datafire/apiz_ebay_sell_finances
```
```js
let apiz_ebay_sell_finances = require('@datafire/apiz_ebay_sell_finances').create({
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

This API is used to retrieve seller payouts and monetary transaction details related to those payouts.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
apiz_ebay_sell_finances.oauthCallback({
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
apiz_ebay_sell_finances.oauthRefresh(null, context)
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

### getPayouts
This method is used to retrieve the details of one or more seller payouts. By using the filter query parameter, users can retrieve payouts processed within a specific date range, and/or they can retrieve payouts in a specific state. There are also pagination and sort query parameters that allow users to control the payouts that are returned in the response. If no payouts match the input criteria, an empty payload is returned.


```js
apiz_ebay_sell_finances.getPayouts({}, context)
```

#### Input
* input `object`
  * filter `string`: The three filter types that can be used here are discussed below. If none of these filters are used, all recent payouts in all states are returned: payoutDate: search for payouts within a specific range of dates. The date format to use is YYYY-MM-DDTHH:MM:SS.SSSZ. Below is the proper syntax to use if filtering by a date range: https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z] Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past. lastAttemptedPayoutDate: search for attempted payouts that failed within a specific range of dates. In order to use this filter, the payoutStatus filter must also be used and its value must be set to RETRYABLE_FAILED. The date format to use is YYYY-MM-DDTHH:MM:SS.SSSZ. The same syntax used for the payoutDate filter is also used for the lastAttemptedPayoutDate filter. This filter is only applicable (and will return results) if one or more seller payouts have failed, but are retryable. payoutStatus: search for payouts in a particular state. Only one payout state can be specified with this filter. The supported payoutStatus values are as follows: INITIATED: search for payouts that have been initiated but not processed. SUCCEEDED: search for successful payouts. RETRYABLE_FAILED: search for payouts that failed, but ones which will be tried again. This value must be used if filtering by lastAttemptedPayoutDate. TERMINAL_FAILED: search for payouts that failed, and ones that will not be tried again. REVERSED: search for payouts that were reversed. Below is the proper syntax to use if filtering by payout status: https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutStatus:{SUCCEEDED} If both the payoutDate and payoutStatus filters are used, payouts must satisfy both criteria to be returned. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
  * sort `string`: By default, payouts or failed payouts that match the input criteria are sorted in ascending order according to the payout date/last attempted payout date (oldest payouts returned first). To view payouts in descending order instead (most recent payouts/attempted payouts first), you would include the sort query parameter, and then set the value of its field parameter to payoutDate or lastAttemptedPayoutDate (if searching for failed, retrybable payouts). Below is the proper syntax to use if filtering by a payout date range in descending order: https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z]&amp;sort=payoutDate Payouts can only be sorted according to payout date, and can not be sorted by payout status. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:SortField
  * limit `string`: The number of payouts to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the method retrieves payouts 11 thru 20 from the result set. Note: This feature employs a zero-based list, where the first payout in the results set has an offset value of 0. Maximum: 200 Default: 20
  * offset `string`: This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the offset value in the request to 10. In the request, you can use the offset parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 30 and limit is set to 10, the method retrieves payouts 31 thru 40 from the resulting collection of payouts. Note: This feature employs a zero-based list, where the first payout in the results set has an offset value of 0. Default: 0 (zero)

#### Output
* output [Payouts](#payouts)

### getPayout
This method retrieves details on a specific seller payout. The unique identfier of the payout is passed in as a path parameter at the end of the call URI. The getPayouts method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub.


```js
apiz_ebay_sell_finances.getPayout({
  "payout_Id": ""
}, context)
```

#### Input
* input `object`
  * payout_Id **required** `string`: The unique identfier of the payout is passed in as a path parameter at the end of the call URI. The getPayouts method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub to get the payout ID.

#### Output
* output [Payout](#payout)

### getPayoutSummary
This method is used to retrieve cumulative values for payouts in a particular state, or all states. The metadata in the response includes total payouts, the total number of monetary transactions (sales, refunds, credits) associated with those payouts, and the total dollar value of all payouts. If the filter query parameter is used to filter by payout status, only one payout status value may be used. If the filter query parameter is not used to filter by a specific payout status, cumulative values for payouts in all states are returned. The user can also use the filter query parameter to specify a date range, and then only payouts that were processed within that date range are considered.


```js
apiz_ebay_sell_finances.getPayoutSummary({}, context)
```

#### Input
* input `object`
  * filter `string`: The two filter types that can be used here are discussed below. One or both of these filter types can be used. If none of these filters are used, the data returned in the response will reflect payouts, in all states, processed within the last 90 days. payoutDate: consider payouts processed within a specific range of dates. The date format to use is YYYY-MM-DDTHH:MM:SS.SSSZ. Below is the proper syntax to use if filtering by a date range: https://apiz.ebay.com/sell/finances/v1/payout_summary?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z] Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past. payoutStatus: consider only the payouts in a particular state. Only one payout state can be specified with this filter. The supported payoutStatus values are as follows: INITIATED: search for payouts that have been initiated but not processed. SUCCEEDED: consider only successful payouts. RETRYABLE_FAILED: consider only payouts that failed, but ones which will be tried again. TERMINAL_FAILED: consider only payouts that failed, and ones that will not be tried again. REVERSED: consider only payouts that were reversed. Below is the proper syntax to use if filtering by payout status: https://apiz.ebay.com/sell/finances/v1/payout_summary?filter=payoutStatus:{SUCCEEDED} If both the payoutDate and payoutStatus filters are used, only the payouts that satisfy both criteria are considered in the results. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField

#### Output
* output [PayoutSummaryResponse](#payoutsummaryresponse)

### getSellerFundsSummary
This method retrieves all pending funds that have not yet been distibuted through a seller payout. There are no input parameters for this method. The response payload includes available funds, funds being processed, funds on hold, and also an aggregate count of all three of these categories. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.


```js
apiz_ebay_sell_finances.getSellerFundsSummary(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SellerFundsSummaryResponse](#sellerfundssummaryresponse)

### getTransactions
This method allows a seller to retrieve one or monetary transactions. In this case, 'monetary transactions' include sales orders, buyer refunds, seller credits, buyer-initiated payment disputes, eBay shipping label purchases, and transfers. There are numerous input filters available for use, including filters to retrieve specific types of monetary transactions, to retrieve monetary transactions processed within a specific date range, or to retrieve monetary transactions in a specific state. See the filter field for more information on each filter, and how each one is used. There are also pagination and sort query parameters that allow users to further control the monetary transactions that are returned in the response. If no monetary transactions match the input criteria, an http status code of 204 No Content is returned with no response payload.


```js
apiz_ebay_sell_finances.getTransactions({}, context)
```

#### Input
* input `object`
  * filter `string`: Numerous filters are available for the getTransactions method, and these filters are discussed below. One or more of these filter types can be used. If none of these filters are used, all monetary transactions from the last 90 days are returned: transactionDate: search for monetary transactions that occurred within a specific range of dates. The date format to use is YYYY-MM-DDTHH:MM:SS.SSSZ. Below is the proper syntax to use if filtering by a date range: https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionDate:[2018-10-23T00:00:01.000Z..2018-11-09T00:00:01.000Z] Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past. transactionType: search for a specific type of monetary transaction. The supported transactionType values are as follows: SALE: a sales order. REFUND: a refund to the buyer after an order cancellation or return. CREDIT: a credit issued by eBay to the seller's account. DISPUTE: a monetary transaction associated with a payment dispute between buyer and seller. SHIPPING_LABEL: a monetary transaction where eBay is billing the seller for an eBay shipping label. Note that the shipping label functionality will initially only be available to a select number of sellers. TRANSFER: A transfer is a monetary transaction where eBay is billing the seller for reimbursement of a charge. An example of a transfer is a seller reimbursing eBay for a buyer refund.Below is the proper syntax to use if filtering by a monetary transaction type: https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionType:{SALE} transactionStatus: this filter type is only applicable for sales orders, and allows the user to filter seller payouts in a particular state. The supported transactionStatus values are as follows: PAYOUT: this indicates that the proceeds from the corresponding sales order has been paid out to the seller's account. FUNDS_PROCESSING: this indicates that the funds for the corresponding monetary transaction are currently being processed. FUNDS_AVAILABLE_FOR_PAYOUT: this indicates that the proceeds from the corresponding sales order are available for a seller payout, but processing has not yet begun. FUNDS_ON_HOLD: this indicates that the proceeds from the corresponding sales order are currently being held by eBay, and are not yet available for a seller payout. COMPLETED: this indicates that the funds for the corresponding TRANSFER monetary transaction have transferred and the transaction has completed. FAILED: this indicates the process has failed for the corresponding TRANSFER monetary transaction. Below is the proper syntax to use if filtering by transaction status: https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionStatus:{PAYOUT} buyerUsername: the eBay user ID of the buyer involved in the monetary transaction. Only monetary transactions involving this buyer are returned. Below is the proper syntax to use if filtering by a specific eBay buyer: https://apiz.ebay.com/sell/finances/v1/transaction?filter=buyerUsername:{buyer1234} salesRecordReference: the unique Selling Manager identifier of the order involved in the monetary transaction. Only monetary transactions involving this Selling Manager Sales Record ID are returned. Below is the proper syntax to use if filtering by a specific Selling Manager Sales Record ID: https://apiz.ebay.com/sell/finances/v1/transaction?filter=salesRecordReference:{123} Note: For all orders originating after February 1, 2020, a value of 0 will be returned in the salesRecordReference field. So, this filter will only be useful to retrieve orders than occurred before this date.. payoutId: the unique identifier of a seller payout. This value is auto-generated by eBay once the seller payout is set to be processed. Only monetary transactions involving this Payout ID are returned. Below is the proper syntax to use if filtering by a specific Payout ID: https://apiz.ebay.com/sell/finances/v1/transaction?filter=payoutId:{5000106638} transactionId: the unique identifier of a monetary transaction. For a sales order, the orderId filter should be used instead. Only the monetary transaction defined by the identifier is returned. Below is the proper syntax to use if filtering by a specific transaction ID: https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionId:{03-03620-33763} orderId: the unique identifier of a sales order. For any other monetary transaction, the, the transactionId filter should be used instead. Only the sales order defined by the identifier is returned. Below is the proper syntax to use if filtering by a specific order ID: https://apiz.ebay.com/sell/finances/v1/transaction?filter=orderId:{03-03620-33763} For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
  * sort `string`: Sorting is not yet available for the getTransactions method. By default, monetary transactions that match the input criteria are sorted in descending order according to the transaction date. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:SortField
  * limit `string`: The number of monetary transactions to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. For example, if offset is set to 10 and limit is set to 10, the method retrieves monetary transactions 11 thru 20 from the result set. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. If an orderId, transactionId, or payoutId filter is included in the request, any limit value will be ignored. Maximum: 200 Default: 20
  * offset `string`: This integer value indicates the actual position that the first monetary transaction returned on the current page has in the results set. So, if you wanted to view the 11th monetary transaction of the result set, you would set the offset value in the request to 10. In the request, you can use the offset parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 30 and limit is set to 10, the method retrieves transactions 31 thru 40 from the resulting collection of transactions. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. Default: 0 (zero)

#### Output
* output [Transactions](#transactions)

### getTransactionSummary
This method is used to retrieve cumulative values for five types of monetary transactions (order sales, seller credits, buyer refunds, buyer-initiated payment disputes, eBay shipping label purchases, and transfers). If applicable, the number of payment holds and the amount of the holds are also returned. See the description for the filter query parameter for more information on the available filters. Note: Unless the transactionType filter is used to retrieve a specific type of monetary transaction (sale, buyer refund, seller credit, payment dispute, shipping label, transfer), the creditCount and creditAmount response fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).


```js
apiz_ebay_sell_finances.getTransactionSummary({}, context)
```

#### Input
* input `object`
  * filter `string`: Numerous filters are available for the getTransactionSummary method, and these filters are discussed below. One or more of these filter types can be used. The transactionStatus filter must be used. All other filters are optional. transactionStatus: the data returned in the response pertains to the sales, payouts, and transfer status set. The supported transactionStatus values are as follows: PAYOUT: only consider monetary transactions where the proceeds from the sales order(s) have been paid out to the seller's bank account. FUNDS_PROCESSING: only consider monetary transactions where the proceeds from the sales order(s) are currently being processed. FUNDS_AVAILABLE_FOR_PAYOUT: only consider monetary transactions where the proceeds from the sales order(s) are available for a seller payout, but processing has not yet begun. FUNDS_ON_HOLD: only consider monetary transactions where the proceeds from the sales order(s) are currently being held by eBay, and are not yet available for a seller payout. COMPLETED: this indicates that the funds for the corresponding TRANSFER monetary transaction have transferred and the transaction has completed. FAILED: this indicates the process has failed for the corresponding TRANSFER monetary transaction. Below is the proper syntax to use when setting up the transactionStatus filter: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionStatus:{PAYOUT} transactionDate: only consider monetary transactions that occurred within a specific range of dates. The date format to use is YYYY-MM-DDTHH:MM:SS.SSSZ. Below is the proper syntax to use if filtering by a date range: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionDate:[2018-10-23T00:00:01.000Z..2018-11-09T00:00:01.000Z] Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past. transactionType: only consider a specific type of monetary transaction. The supported transactionType values are as follows: SALE: a sales order. REFUND: a refund to the buyer after an order cancellation or return. CREDIT: a credit issued by eBay to the seller's account. DISPUTE: a monetary transaction associated with a payment dispute between buyer and seller. SHIPPING_LABEL: a monetary transaction where eBay is billing the seller for an eBay shipping label. Note that the shipping label functionality will initially only be available to a select number of sellers. TRANSFER: A transfer is a monetary transaction where eBay is billing the seller for reimbursement of a charge. An example of a transfer is a seller reimbursing eBay for a buyer refund.Below is the proper syntax to use if filtering by a monetary transaction type: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionType:{SALE} buyerUsername: only consider monetary transactions involving a specific buyer (specified with the buyer's eBay user ID). Below is the proper syntax to use if filtering by a specific eBay buyer: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=buyerUsername:{buyer1234} salesRecordReference: only consider monetary transactions corresponding to a specific order (identified with a Selling Manager order identifier). Below is the proper syntax to use if filtering by a specific Selling Manager Sales Record ID: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=salesRecordReference:{123} Note: For all orders originating after February 1, 2020, a value of 0 will be returned in the salesRecordReference field. So, this filter will only be useful to retrieve orders than occurred before this date. payoutId: only consider monetary transactions related to a specific seller payout (identified with a Payout ID). This value is auto-generated by eBay once the seller payout is set to be processed. Below is the proper syntax to use if filtering by a specific Payout ID: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=payoutId:{5000106638} transactionId: the unique identifier of a monetary transaction. For a sales order, the orderId filter should be used instead. Only the monetary transaction(s) associated with this transactionId value are returned. Below is the proper syntax to use if filtering by a specific transaction ID: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionId:{03-03620-33763} orderId: the unique identifier of a sales order. For any other monetary transaction, the, the transactionId filter should be used instead. Only the monetary transaction(s) associated with this orderId value are returned. Below is the proper syntax to use if filtering by a specific order ID: https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=orderId:{03-03620-33763} For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField

#### Output
* output [TransactionSummaryResponse](#transactionsummaryresponse)

### getTransfer
This method retrieves detailed information regarding a TRANSFER transaction type. A TRANSFER is a monetary transaction type that involves a seller transferring money to eBay for reimbursement of one or more charges. For example, when a seller reimburses eBay for a buyer refund. If an ID is passed into the URI that is an identifier for another transaction type, this call will return an http status code of 404 Not found.


```js
apiz_ebay_sell_finances.getTransfer({
  "transfer_Id": ""
}, context)
```

#### Input
* input `object`
  * transfer_Id **required** `string`: The unique identifier of the TRANSFER transaction type you wish to retrieve.

#### Output
* output [Transfer](#transfer)



## Definitions

### Amount
* Amount `object`: This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
  * convertedFromCurrency `string`: The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is the pre-conversion currency. This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/base:CurrencyCodeEnum'>eBay API documentation</a>
  * convertedFromValue `string`: The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is the pre-conversion amount. The value field contains the converted amount of this value, in the currency specified by the currency field. This field is only returned if/when currency conversion was applied by eBay.
  * currency `string`: A three-letter ISO 4217 code that indicates the currency of the amount in the value field. This field is always returned with any container using Amount type. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/base:CurrencyCodeEnum'>eBay API documentation</a>
  * exchangeRate `string`: The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the value field from the dollar value in the convertedFromValue field. This field is only returned when eBay does a currency version, and a currency conversion is generally needed if the buyer is viewing, or has purchased an item on an international site. This field is only returned if/when currency conversion was applied by eBay.
  * value `string`: The monetary amount, in the currency specified by the currency field. This field is always returned with any container using Amount type.

### BalanceAdjustment
* BalanceAdjustment `object`: This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
  * adjustmentAmount [Amount](#amount)
  * adjustmentType `string`: The enumeration value returned here indicates if the charge is a DEBIT or a CREDIT to the seller. Generally, all transfer transaction types are going to be DEBIT, since the money is being tranferred from the seller to eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>

### Buyer
* Buyer `object`: This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date.
  * username `string`: The eBay user ID of the order's buyer.

### Charge
* Charge `object`: This type is used by the charge container, which is an array of one or more charges related to the transfer.
  * cancellationId `string`: The unique identifier of an order cancellation. This field is only applicable and returned if the charge is related to an order cancellation.
  * caseId `string`: The unique identifier of a case filed against an order. This field is only applicable and returned if the charge is related to a case filed against an order.
  * chargeNetAmount [Amount](#amount)
  * inquiryId `string`: The unique identifier of an Item Not Received (INR) inquiry filed against an order. This field is only applicable and returned if the charge is related to has an INR inquiry filed against the order.
  * orderId `string`: The unique identifier of the order that is associated with the charge.
  * paymentDisputeId `string`: The unique identifier of a third-party payment dispute filed against an order. This occurs when the buyer files a dispute against the order with their payment provider, and then the dispute comes into eBay's system. This field is only applicable and returned if the charge is related to a third-party payment dispute filed against an order.
  * refundId `string`: The unique identifier of a buyer refund associated with the charge.
  * returnId `string`: The unique identifier of an order return. This field is only applicable and returned if the charge is related to an order that was returned by the buyer.

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### Fee
* Fee `object`: This type is used to display fees that are automatically deducted from seller payouts.
  * amount [Amount](#amount)
  * feeType `string`: The enumeration value returned here indicates the type of fee that was deducted from the seller's payout. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a>

### FundingSource
* FundingSource `object`: This type provided details on the funding source for the transfer.
  * brand `string`: The brand name of the credit card or the name of the financial institution that is the source of payment. This field may not be populated for other funding sources.
  * memo `string`: This field provides a note about the funding source. If the seller's credit card or bank account is the funding source, this field might contain the last four digits of the credit card or bank account. This field may also be returned as null.
  * type `string`: The string value returned here indicates the funding source. Possible values include the following: AVAILABLE_FUNDS: transfer is funded with seller payout funds CREDIT_CARD: transfer is funded with seller's credit card BANK: transfer is funded with a direct debit to seller's bank account on file with eBay PAY_UPON_INVOICE: eBay will bill the seller for the transfer on the monthly invoice

### OrderLineItem
* OrderLineItem `object`: This type is used to show the fees that are deducted from a seller payout for each line item in an order.
  * feeBasisAmount [Amount](#amount)
  * lineItemId `string`: The unique identifier of an order line item.
  * marketplaceFees `array`: An array of all fees accrued for the order line item and deducted from a seller payout.
    * items [Fee](#fee)

### Payout
* Payout `object`: This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
  * amount [Amount](#amount)
  * lastAttemptedPayoutDate `string`: This timestamp indicates the date/time when eBay last attempted to process a seller payout but it failed. This field is only returned if a seller payout fails, and the payoutStatus value shows RETRYABLE_FAILED or TERMINAL_FAILED. A seller can filter on the lastAttemptedPayoutDate in a getPayouts request.
  * payoutDate `string`: This timestamp indicates when the seller payout began processing. The following format is used: YYYY-MM-DDTHH:MM:SS.SSSZ. For example, 2015-08-04T19:09:02.768Z. This field is still returned even if the payout was pending but failed (payoutStatus value shows RETRYABLE_FAILED or TERMINAL_FAILED).
  * payoutId `string`: The unique identifier of the seller payout. This identifier is generated once eBay begins processing the payout to the seller's bank account.
  * payoutInstrument [PayoutInstrument](#payoutinstrument)
  * payoutStatus `string`: This enumeration value indicates the current status of the seller payout. For a successful payout, the value returned will be SUCCEEDED. See the PayoutStatusEnum type for more details on each payout status value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:PayoutStatusEnum'>eBay API documentation</a>
  * payoutStatusDescription `string`: This field provides more details about the current status of payout. The description returned here will correspond with enumeration value returned in the payoutStatus field. The following shows what description text might appear based on the different payoutStatus values: INITIATED: Preparing to send SUCCEEDED: Funds sent REVERSED: Waiting to retry : Money rejected by seller's bank RETRYABLE_FAILED: Waiting to retry TERMINAL_FAILED: Payout failed
  * transactionCount `integer`: This integer value indicates the number of monetary transactions (all orders, refunds, and credits, etc.) that have occurred with the corresponding payout. Its value should always be at least 1, since there is at least one order per seller payout.

### PayoutInstrument
* PayoutInstrument `object`: This type provides details about the seller's account that received (or is scheduled to receive) a payout.
  * accountLastFourDigits `string`: This string value is the last four digits of the seller's account number.
  * instrumentType `string`: This string value indicates the type of account that received the payout. At this time, seller payouts can only be distributed to bank acounts, so the string value returned in this field will always be BankAccount.
  * nickname `string`: This string value is a seller-provided nickname that the seller uses to represent the bank account.

### PayoutSummaryResponse
* PayoutSummaryResponse `object`: This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
  * amount [Amount](#amount)
  * payoutCount `integer`: This integer value indicates the total count of payouts to the seller that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show 0).
  * transactionCount `integer`: This integer value indicates the total count of monetary transactions (order payments, buyer refunds, and seller credits) associated with the payouts that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show 0). If there is at least one payout that matches the input criteria, the value in this field will be at least 1.

### Payouts
* Payouts `object`: This type is the base response type of the getPayouts method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set.
  * href `string`: The URI of the getPayouts call request that produced the current page of the result set.
  * limit `integer`: The maximum number of payouts that may be returned per page of the result set. The limit value can be passed in as a query parameter, or if omitted, its value defaults to 20. Note: If this is the last or only page of the result set, the page may contain fewer payouts than the limit value. To determine the number of pages in a result set, divide the total value (total number of payouts matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total payouts) and the limit value was 50 (show 50 payouts per page), the total number of pages in the result set is three, so the seller would have to make three separate getPayouts calls to view all payouts matching the input criteria. Maximum: 200 Default: 20
  * next `string`: The getPayouts call URI to use if you wish to view the next page of the result set. This field is only returned if there is a next page of results to view based on the current input criteria.
  * offset `integer`: This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the offset value in the request to 10. In the request, you can use the offset parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 30 and limit is set to 10, the call retrieves payouts 31 thru 40 from the resulting collection of payouts. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. Default: 0 (zero)
  * payouts `array`: An array of one or more payouts that match the input criteria. Details for each payout include the unique identifier of the payout, the status of the payout, the amount of the payout, and the number of monetary transactions associated with the payout.
    * items [Payout](#payout)
  * prev `string`: The getPayouts call URI to use if you wish to view the previous page of the result set. This field is only returned if there is a previous page of results to view based on the current input criteria.
  * total `integer`: This integer value is the total number of payouts in the results set based on the current input criteria. Based on the total number of payouts that match the criteria, and on the limit and offset values, there may be additional pages in the results set.

### SellerFundsSummaryResponse
* SellerFundsSummaryResponse `object`: This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
  * availableFunds [Amount](#amount)
  * fundsOnHold [Amount](#amount)
  * processingFunds [Amount](#amount)
  * totalFunds [Amount](#amount)

### Transaction
* Transaction `object`: This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
  * amount [Amount](#amount)
  * bookingEntry `string`: The enumeration value returned in this field indicates if the monetary transaction amount is a (CREDIT) or a (DEBIT) to the seller's account. Typically, the SALE and CREDIT transaction types are credits to the seller's account, and the REFUND, DISPUTE, SHIPPING_LABEL, and TRANSFER transaction types are debits to the seller's account. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * buyer [Buyer](#buyer)
  * orderId `string`: The unique identifier of the eBay order associated with the monetary transaction.
  * orderLineItems `array`: This array shows the fees that are deducted from a seller payout for each line item in an order.
    * items [OrderLineItem](#orderlineitem)
  * paymentsEntity `string`: This string value indicates the entity that is processing the payment.
  * payoutId `string`: The unique identifier of the seller payout associated with the monetary transaction. This identifier is generated once eBay begins processing the payout for the corresponding order. This field will not be returned if eBay has not yet begun processing the payout for an order.
  * salesRecordReference `string`: The Sales Record Number associated with a sales order. Sales Record Numbers are Selling Manager/Selling Manager Pro identifiers that are created at order checkout. Note: For all orders originating after February 1, 2020, a value of 0 will be returned in this field. The Sales Record Number field has also been removed from Seller Hub. Instead of salesRecordReference, depend on orderId instead as the identifier of the order. The salesRecordReference field has been scheduled for deprecation, and a date for when this field will no longer be returned at all will be announced soon.
  * totalFeeAmount [Amount](#amount)
  * totalFeeBasisAmount [Amount](#amount)
  * transactionDate `string`: This timestamp indicates when the monetary transaction (order purchase, buyer refund, seller credit) occurred. The following format is used: YYYY-MM-DDTHH:MM:SS.SSSZ. For example, 2015-08-04T19:09:02.768Z.
  * transactionId `string`: The unique identifier of the monetary transaction. A monetary transaction can be a sales order, an order refund to the buyer, a credit to the seller's account, a debit to the seller for the purchase of a shipping label, or a transaction where eBay recouped money from the seller if the seller lost a buyer-initiated payment dispute.
  * transactionMemo `string`: This field provides more details on a shipping label transaction, such as a purchase, a refund, or a price adjustment to the cost of the shipping label. This field is only returned if applicable/available. Currently, this field is only used for shipping label transactions, but it is possible that it will be used for other transaction types in the future.
  * transactionStatus `string`: This enumeration value indicates the current status of the seller payout associated with the monetary transaction. See the TransactionStatusEnum type for more information on the different states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionStatusEnum'>eBay API documentation</a>
  * transactionType `string`: This enumeration value indicates whether the monetary transaction is a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, a credit issued by eBay to the seller's account, a payment dispute between the buyer and seller, or where eBay is billing the seller for an eBay shipping label or another charge (such as a refund to a buyer). Note that the shipping label functionality will initially only be available to a select number of sellers. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionTypeEnum'>eBay API documentation</a>

### TransactionSummaryResponse
* TransactionSummaryResponse `object`: This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
  * balanceTransferAmount [Amount](#amount)
  * balanceTransferBookingEntry `string`: The credit debit sign indicator for the balance transfer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * balanceTransferCount `integer`: The total balance transfer count for given payee within the specified period.
  * creditAmount [Amount](#amount)
  * creditBookingEntry `string`: The enumeration value indicates whether the dollar amount in the creditAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be CREDIT. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * creditCount `integer`: This integer value indicates the total number of the seller's sales and/or credits that match the input criteria. Note: Unless the transactionType filter is used in the request to retrieve a specific type of monetary transaction (sale, buyer refund, or seller credit), the creditCount and creditAmount fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types). This field is generally returned, even if 0, but it will not be returned if a transactionType filter is used, and its value is set to either REFUND, DISPUTE, or SHIPPING_LABEL.
  * disputeAmount [Amount](#amount)
  * disputeBookingEntry `string`: The enumeration value indicates whether the dollar amount in the disputeAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be DEBIT, but its possible that CREDIT could be returned if the seller contested one or more payment disputes and won the dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * disputeCount `integer`: This integer value indicates the total number of payment disputes that have been initiated by one or more buyers. Only the orders that match the input criteria are considered. The Payment Disputes methods in the Fulfillment API can be used by the seller to retrieve more information about any payment disputes. This field is generally returned, even if 0, but it will not be returned if a transactionType filter is used, and its value is set to any value other than DISPUTE.
  * feeAmount [Amount](#amount)
  * feeBookingEntry `string`: The credit debit sign indicator for the fee. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * feeCount `integer`: The total fee count for given payee within the specified period.
  * onHoldAmount [Amount](#amount)
  * onHoldBookingEntry `string`: The enumeration value indicates whether the dollar amount in the onHoldAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be CREDIT, since on-hold funds should eventually be released as part of a payout to the seller once the hold is cleared. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * onHoldCount `integer`: This integer value indicates the total number of order sales where the associated funds are on hold. Only the orders that match the input criteria are considered. This field is generally returned, even if 0, but it will not be returned if a transactionStatus filter is used, and its value is set to any value other than FUNDS_ON_HOLD.
  * refundAmount [Amount](#amount)
  * refundBookingEntry `string`: The enumeration value indicates whether the dollar amount in the refundAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be DEBIT since this a refund from the seller to the buyer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * refundCount `integer`: This integer value indicates the total number of buyer refunds that match the input criteria. This field is generally returned, even if 0, but it will not be returned if a transactionType filter is used, and its value is set to any value other than REFUND.
  * shippingLabelAmount [Amount](#amount)
  * shippingLabelBookingEntry `string`: The enumeration value indicates whether the dollar amount in the shippingLabelAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be DEBIT, as eBay will charge the seller when eBay shipping labels are purchased, but it can be CREDIT if the seller was refunded for a shipping label or was possibly overcharged for a shipping label. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * shippingLabelCount `integer`: This is the total number of eBay shipping labels purchased by the seller. The count returned here may depend on the specified input criteria.
  * transferAmount [Amount](#amount)
  * transferBookingEntry `string`: The enumeration value indicates whether the dollar amount in the transferAmount field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be DEBIT since this a seller reimbursement to eBay for buyer refunds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a>
  * transferCount `integer`: This integer value indicates the total number of buyer refund transfers that match the input criteria. This field is generally returned, even if 0, but it will not be returned if a transactionType filter is used, and its value is set to any value other than TRANSFER.

### Transactions
* Transactions `object`: This is the base response type of the getTransactions method. The getTransactions response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.
  * href `string`: The URI of the getTransactions method request that produced the current page of the result set.
  * limit `integer`: The maximum number of monetary transactions that may be returned per page of the result set. The limit value can be passed in as a query parameter, or if omitted, its value defaults to 20. Note: If this is the last or only page of the result set, the page may contain fewer monetary transactions than the limit value. To determine the number of pages in a result set, divide the total value (total number of monetary transactions matching input criteria) by this limit value, and then round up to the next integer. For example, if the total value was 120 (120 total monetary transactions) and the limit value was 50 (show 50 monetary transactions per page), the total number of pages in the result set is three, so the seller would have to make three separate getTransactions calls to view all monetary transactions matching the input criteria. Maximum: 200 Default: 20
  * next `string`: The getTransactions method URI to use if you wish to view the next page of the result set. This field is only returned if there is a next page of results to view based on the current input criteria.
  * offset `integer`: This integer value indicates the actual position that the first monetary transaction returned on the current page has in the results set. So, if you wanted to view the 11th monetary transaction of the result set, you would set the offset value in the request to 10. In the request, you can use the offset parameter in conjunction with the limit parameter to control the pagination of the output. For example, if offset is set to 30 and limit is set to 10, the method retrieves monetary transactions 31 thru 40 from the resulting collection of monetary transactions. Note: This feature employs a zero-based list, where the first item in the list has an offset of 0. Default: 0 (zero)
  * prev `string`: The getTransactions method URI to use if you wish to view the previous page of the result set. This field is only returned if there is a previous page of results to view based on the current input criteria.
  * total `integer`: This integer value is the total amount of monetary transactions in the result set based on the current input criteria. Based on the total number of monetary transactions that match the criteria, and on the limit and offset values, there may be additional pages in the results set.
  * transactions `array`: An array of one or more monetary transactions that match the input criteria. Details for each monetary transaction may include the unique identifier of the order associated with the monetary transaction, the status of the transaction, the amount of the order, the order's buyer, and the unique identifier of the payout (if a payout has been initiated/issued for the order).
    * items [Transaction](#transaction)

### Transfer
* Transfer `object`: This type is the base response type used by TRANSFER transaction type that is returned in the response.
  * fundingSource [FundingSource](#fundingsource)
  * transactionDate `string`: This timestamp indicates the date/time of the transfer. The following (UTC) format is used: YYYY-MM-DDTHH:MM:SS.SSSZ. For example, 2020-08-04T19:09:02.768Z
  * transferAmount [Amount](#amount)
  * transferDetail [TransferDetail](#transferdetail)
  * transferId `string`: The unique identifier of the TRANSFER transaction type. This is the same value that was passed into the end of the call URI.

### TransferDetail
* TransferDetail `object`: This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
  * balanceAdjustment [BalanceAdjustment](#balanceadjustment)
  * charges `array`: This container is an array of one or more charges related to the transfer. Charges can be related to an order cancellation, order return, case, payment dispute, etc.
    * items [Charge](#charge)
  * totalChargeNetAmount [Amount](#amount)


