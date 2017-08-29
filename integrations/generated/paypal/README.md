# @datafire/paypal

Client library for PayPal (Sandbox)

## Installation and Usage
```bash
npm install --save datafire @datafire/paypal
```

```js
let datafire = require('datafire');
let paypal = require('@datafire/paypal').create();

paypal.Permissions.GetAdvancedPersonalData.post({}).then(data => {
  console.log(data);
})
```

## Description
Bring payments to apps, mobile and social with Adaptive Payments <b>(Sandbox API).</b>

## Actions
### Permissions.GetAdvancedPersonalData.post
Use the GetAdvancedPersonalData API operation to obtain sensitive personal data for an account holder.


```js
paypal.Permissions.GetAdvancedPersonalData.post(null, context)
```


### Permissions.GetBasicPersonalData.post
Use the GetBasicPersonalData API operation to obtain basic personal data for an account holder.


```js
paypal.Permissions.GetBasicPersonalData.post(null, context)
```


### Permissions.CancelPermissions.post
Use the CancelPermissions API operation to cancel access to a set of permissions.


```js
paypal.Permissions.CancelPermissions.post(null, context)
```


### Permissions.GetPermissions.post
Use the GetPermissons API operation to obtain the permissions associated with an access token.


```js
paypal.Permissions.GetPermissions.post(null, context)
```


### Permissions.GetAccessToken.post
Use the GetAccessToken API operation to obtain an access token for a set of permissions.


```js
paypal.Permissions.GetAccessToken.post(null, context)
```


### Permissions.RequestPermissions.post
Use the RequestPermissions API operation to request permissions to execute API operations on a PayPal account holder’s behalf.


```js
paypal.Permissions.RequestPermissions.post(null, context)
```


### Invoice.SearchInvoices.post
Use the SearchInvoice API operation to search an invoice.


```js
paypal.Invoice.SearchInvoices.post(null, context)
```


### Invoice.MarkInvoiceAsPaid.post
Use the MarkInvoiceAsPaid API operation to mark an invoice as paid.


```js
paypal.Invoice.MarkInvoiceAsPaid.post(null, context)
```


### Invoice.CancelInvoice.post
Use the CancelInvoice API operation to cancel an invoice.


```js
paypal.Invoice.CancelInvoice.post(null, context)
```


### Invoice.GetInvoiceDetails.post
Use the GetInvoiceDetails API operation to get detailed information about an invoice.


```js
paypal.Invoice.GetInvoiceDetails.post(null, context)
```


### Invoice.UpdateInvoice.post
Use the UpdateInvoice API operation to update an invoice.


```js
paypal.Invoice.UpdateInvoice.post(null, context)
```


### Invoice.CreateAndSendInvoice.post
Use the CreateAndSendInvoice API operation to create and send an invoice.


```js
paypal.Invoice.CreateAndSendInvoice.post(null, context)
```


### Invoice.SendInvoice.post
Use the SendInvoice API operation to send an invoice to a payer, and notify the payer of the pending invoice.


```js
paypal.Invoice.SendInvoice.post(null, context)
```


### Invoice.CreateInvoice.post
Use the CreateInvoice API operation to create a new invoice. The call includes merchant, payer, and API caller information, in addition to invoice detail. The response to the call contains an invoice ID and URL.


```js
paypal.Invoice.CreateInvoice.post(null, context)
```


### AdaptiveAccounts.GetUserAgreement.post
The GetUserAgreement API operation lets you retrieve the user agreement for the customer to approve the new PayPal account.


```js
paypal.AdaptiveAccounts.GetUserAgreement.post(null, context)
```


### AdaptiveAccounts.GetVerifiedStatus.post
The GetVerifiedStatus API operation lets you check if a PayPal account status is verified. A PayPal account gains verified status under a variety of circumstances, such as when an account is linked to a verified funding source. Verified status serves to indicate a trust relationship. For more information about account verified status, refer to PayPal.com.


```js
paypal.AdaptiveAccounts.GetVerifiedStatus.post(null, context)
```


### AdaptiveAccounts.SetFundingSourceConfirmed.post
The SetFundingSourceConfirmed API operation lets your application set up bank accounts as funding sources for PayPal accounts.


```js
paypal.AdaptiveAccounts.SetFundingSourceConfirmed.post(null, context)
```


### AdaptiveAccounts.AddPaymentCard.post
The AddPaymentCard API operation lets your application set up credit cards as funding sources for PayPal accounts.


```js
paypal.AdaptiveAccounts.AddPaymentCard.post(null, context)
```


### AdaptiveAccounts.AddBankAccount.post
The AddBankAccount API operation lets your application set up bank accounts as funding sources for PayPal accounts.


```js
paypal.AdaptiveAccounts.AddBankAccount.post(null, context)
```


### AdaptiveAccounts.CreateAccount.post
The CreateAccount API operation enables you to create a PayPal account on behalf of a third party.


```js
paypal.AdaptiveAccounts.CreateAccount.post({
  "X-PAYPAL-SANDBOX-EMAIL-ADDRESS": null
}, context)
```

#### Parameters
* X-PAYPAL-SANDBOX-EMAIL-ADDRESS (undefined) **required**

### AdaptivePayments.GetFundingPlans.post
Use the GetFundingPlans API operation to determine the funding sources that are available for a specified payment, identified by its key, which takes into account the preferences and country of the receiver as well as the payment amount. You must be both the sender of the payment and the caller of this API operation


```js
paypal.AdaptivePayments.GetFundingPlans.post(null, context)
```


### AdaptivePayments.GetShippingAddresses.post
Use the GetShippingAddresses API operation to obtain the selected shipping address. You must have created the payment or preapproval key that identifies the account holder whose shipping address you want to obtain, or be the primary receiver of the payment or one of the parallel receivers of the payment. The shipping address is available only if it was provided during the embedded payment flow.


```js
paypal.AdaptivePayments.GetShippingAddresses.post(null, context)
```


### AdaptivePayments.ExecutePayment.post
The ExecutePayment API operation lets you execute a payment set up with the Pay API operation with the actionType CREATE. To pay receivers identified in the Pay call, set the pay key from the PayResponse message in the ExecutePaymentRequest message.


```js
paypal.AdaptivePayments.ExecutePayment.post(null, context)
```


### AdaptivePayments.SetPaymentOptions.post
You use the SetPaymentOptions API operation to specify settings for a payment of the actionType CREATE. 
					This actionType is specified in the PayRequest message.


```js
paypal.AdaptivePayments.SetPaymentOptions.post(null, context)
```


### AdaptivePayments.GetPaymentOptions.post
You use the GetPaymentOptions API operation to retrieve the payment options passed with the SetPaymentOptionsRequest.


```js
paypal.AdaptivePayments.GetPaymentOptions.post(null, context)
```


### AdaptivePayments.Refund.post
Use the Refund API operation to refund all or part of a payment. You can specify the amount of the refund and identify the accounts to receive the refund by the payment key or tracking ID, and optionally, by transaction ID or the receivers of the original payment.


```js
paypal.AdaptivePayments.Refund.post(null, context)
```


### AdaptivePayments.ConvertCurrency.post
Use the ConvertCurrency API operation to request the current foreign exchange (FX) rate for a specific amount and currency.


```js
paypal.AdaptivePayments.ConvertCurrency.post(null, context)
```


### AdaptivePayments.CancelPreapproval.post
Use the CancelPreapproval API operation to handle the canceling of preapprovals. Preapprovals can be canceled regardless of the state they are in, such as active, expired, deactivated, and previously canceled.


```js
paypal.AdaptivePayments.CancelPreapproval.post(null, context)
```


### AdaptivePayments.PreapprovalDetails.post
Use the PreapprovalDetails API operation to obtain information about an agreement between you and a sender for making payments on the sender’s behalf.


```js
paypal.AdaptivePayments.PreapprovalDetails.post(null, context)
```


### AdaptivePayments.Preapproval.post
Use the Preapproval API operation to set up an agreement between yourself and a sender for making payments on the sender’s behalf. You set up a preapprovals for a specific maximum amount over a specific period of time and, optionally, by any of the following constraints: the number of payments, a maximum per-payment amount, a specific day of the week or the month, and whether or not a PIN is required for each payment request.


```js
paypal.AdaptivePayments.Preapproval.post(null, context)
```


### AdaptivePayments.PaymentDetails.post
Use the PaymentDetails API operation to obtain information about a payment. You can identify the payment by your tracking ID, the PayPal transaction ID in an IPN message, or the pay key associated with the payment.


```js
paypal.AdaptivePayments.PaymentDetails.post(null, context)
```


### AdaptivePayments.Pay.post
Use the Pay API operation to transfer funds from a sender’s PayPal account to one or more receivers’ PayPal accounts. You can use the Pay API operation to make simple payments, chained payments, or parallel payments; these payments can be explicitly approved, preapproved, or implicitly approved.


```js
paypal.AdaptivePayments.Pay.post(null, context)
```


