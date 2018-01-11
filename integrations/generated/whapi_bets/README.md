# @datafire/whapi_bets

Client library for Bets

## Installation and Usage
```bash
npm install --save @datafire/whapi_bets
```
```js
let whapi_bets = require('@datafire/whapi_bets').create({
  apiKey: ""
});

whapi_bets.placeComplexBet({}).then(data => {
  console.log(data);
})
```

## Description

The Bets API methods are used to place single, multiple and complex bets and to retrieve a customer’s bet history. When retrieving a customer’s bet history you can organize the bets from the betting history in terms of date, bet type and whether the bet is settled or not. You can also specify what fields to be included/excluded or return a list of all default fields the method returns. <br /><br /> The Bets API will also generate a bet delay if you’re placing a single/multiple bet in-Play by creating a time margin to negate the effects of major changes to the market (for example, goals during a football match). Note that in version 2 of our APIs, Bets API contains the functionality of both Bets API v1 and the Betslips API v1.

## Actions

### placeComplexBet
Places a multiple or a complex bet.


```js
whapi_bets.placeComplexBet({
  "apiSecret": "",
  "apiTicket": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)
  * body **required** [complexBetRequestBody](#complexbetrequestbody)

#### Output
* output [betPlacedResponse](#betplacedresponse)

### placeSingleBet
Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market.  Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.


```js
whapi_bets.placeSingleBet({
  "apiSecret": "",
  "apiTicket": "",
  "body": {
    "priceType": "",
    "selectionId": "",
    "stake": 0,
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)
  * body **required** [singleBetRequestBody](#singlebetrequestbody)

#### Output
* output [betPlacedResponse](#betplacedresponse)

### validateBetslip
Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.


```js
whapi_bets.validateBetslip({
  "apiSecret": "",
  "apiTicket": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * body **required** [betSlipRequest](#betsliprequest)

#### Output
* output [betSlipResponse](#betslipresponse)

### getFreeBets
Retrieves the current free bets available for a customer.


```js
whapi_bets.getFreeBets({
  "apiSecret": "",
  "apiTicket": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)

#### Output
* output [freeBet](#freebet)

### getBetHistory
Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.


```js
whapi_bets.getBetHistory({
  "apiSecret": "",
  "apiTicket": "",
  "dateFrom": "",
  "dateTo": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * dateFrom **required** `string`: The UTC FROM datetime from bets to be returned. (yyyy-MM-ddTHH:mm:ss)
  * dateTo **required** `string`: The UTC TO datetime for bets to be returned. (yyyy-MM-ddTHH:mm:ss)
  * fields `array`: Specify an absolute field list to return (Comma Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma Separated List)
  * page `number`: The index of the page to return
  * pageSize `number`: The number of results per page
  * sort `string`: The order the response will be retuned by. i.e. transDateTime,desc. Only transDateTime can be used currently
  * settled `boolean`: Filter by settled bets. If omitted, both settled and unsettled will be returned.

#### Output
* output [betHistoryResponse](#bethistoryresponse)

### cashin
Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.


```js
whapi_bets.cashin({
  "apiSecret": "",
  "apiTicket": "",
  "betId": "",
  "cashInValue": 0,
  "cashinBetDelayId": ""
}, context)
```

#### Input
* input `object`
  * apiSecret **required** `string`: Another unique identifier for your application.
  * apiTicket **required** `string`: The ticket obtained from the sessions API
  * betId **required** `string`: The identifier of the bet
  * cashInValue **required** `number`: The cash in value of the bet
  * cashinBetDelayId **required** `string`: The ID of this bet delay

#### Output
* output [cashInResponse](#cashinresponse)



## Definitions

### bet
* bet `object`
  * delayedBetId `string`: The delayed bet identifier
  * freeBetId `string`: The ID number of the free bet token if used in conjunction with this bet
  * legs **required** `array`
    * items [leg](#leg)
  * number **required** `integer`: The bet number
  * stake **required** `number`: The amount of the stake placed on the bet
  * typeCode **required** `string`: The bet type code of the bet. For example: TBL (Treble)

### betDelayed
* betDelayed `object`
  * delayPeriodSeconds **required** `integer`: The delay time period of the bet in seconds. The resubmission of the bet has to wait for the length of time (in seconds) returned in the delayPeriod before submitting the second request.
  * delayedBetId **required** `string`: The unique identifier of the delayed bet. After the initial response is received, containing the delayPeriod and the delayBetId, the request is then resubmitted using the same delayBetId token that came in that initial response. Check the example below to see how to resend a delayed bet payload.
  * id **required** `string`: The number of the bet
  * number `number`: Number of the bet if this is part of a multiple bet

### betDelayedResponse
* delayedBets `array`
  * items [betDelayed](#betdelayed)

### betHistoryResponse
* betHistoryResponse `object`
  * bets [historyBets](#historybets)

### betPlaced
* betPlaced `object`
  * id `string`: The bet id
  * numLines `integer`: The number of lines the bet consists of
  * number `number`: Number of the bet if this is part of a multiple bet
  * placedDateTime `string`: The time the bet was placed. For example: 2013-01-30TT13:34:20. The value of this element can be replaced with the current timestamp if it was missing.
  * receipt **required** `string`: The unique ID of the bet receipt
  * totalStake `number`: The total amount staked on the bet

### betPlacedResponse
* placedBets `array`
  * items [betPlaced](#betplaced)

### betSlipRequest
* betSlipRequest `object`
  * legs `array`
    * items [leg](#leg)

### betSlipResponse
* betSlipResponse `object`
  * betslip `array`
    * items [betslipbet](#betslipbet)

### betslipbet
* betslipbet `object`
  * betMultiplier `number`: The total aggregated odds, as a decimal, of the multiple bet placed
  * freeBets `array`: Free bets that can be used with this bet
    * items [freeBetDetail](#freebetdetail)
  * legs **required** `array`
    * items [betslipleg](#betslipleg)
  * maxStake `number`: Maximum stake allowable on the bet. For example: 2500.00 (GBP)
  * minStake `number`: Minumum stake allowable on the bet. For example: 0.05 (GBP)
  * numLines `number`: The number of lines (selections) of a bet
  * number **required** `integer`: The bet number
  * typeCode **required** `string`: The bet type code of the bet. For example: TBL (Treble)
  * typeName `string`: The TypeCode of the bet. For example: TBL (Treble)

### betslipleg
* betslipleg `object`
  * parts **required** `array`
    * items [betslippart](#betslippart)
  * sort `string`: The leg sort. This element is present for complex bets but not for single bets.
  * type **required** `string`: Type of leg that was placed on the bet, such as Win or Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.

### betslippart
* betslippart `object`
  * eachWayAvailable `boolean`: Indicates whether each way is available
  * includeInMultiple **required** `boolean`: Indicates if the bet can be used in a multiple bet
  * priceChanged `boolean`: Indicates if there has been a change in the price
  * priceDen **required** `integer`: Price denominator - will be ignored for types other than L (Fixed Price)
  * priceNum **required** `integer`: Price numerator - will be ignored for types other than L (Fixed Price)
  * priceType **required** `integer`: The type of price selected. For example - ‘L’ (Fixed)
  * selectionId **required** `integer`: The selection identifier
  * singleAvailable `boolean`: Indicates whether the bet can be used in a single bet
  * startingPriceAvailable `boolean`: Indicates whether starting prices are available
  * status `string`: Indicates the current status of the bet
  * statusChanged `boolean`: Indicates whether the status of the bet has changed

### cashInResponse
* cashInResponse `object`
  * success **required** `boolean`: Indicates whether the bet has been cashed-in.

### complexBetRequestBody
* complexBetRequestBody `object`
  * bets `array`: A collection of bets
    * items [bet](#bet)

### error
* error `object`
  * code `string`: A unique William Hill identifier for the error
  * field `string`: To help pinpoint the exact parameter where a request has failed
  * message `string`: A unique William Hill text string to enable you to identify the error (in English only)
  * solution [solution](#solution)

### errors
* errors `object`
  * errors `array`
    * items [error](#error)

### freeBet
* freeBet `array`
  * items [freeBetDetail](#freebetdetail)

### freeBetDetail
* freeBetDetail `object`
  * awardDateTime `string`: The time the free bet was awarded. For example 2014-11-013T23:59:10
  * displayText `string`: The message explaining the offer displayed to the customer along with the free bet
  * expiryDateTime `string`: The time the free bet expired. For example 2014-11-013T23:59:10
  * id **required** `integer`: The identifier of the free bet
  * offerDesc `string`: The description of the offer that enabled the customer to place a free bet
  * offerId `integer`: The identifier of the offer
  * offerName **required** `string`: The name of the offer that enabled the customer to place a free bet
  * startDateTime `string`: The time the free bet offer started. For example 2014-11-013T23:59:10
  * value **required** `number`: The value of the free bet

### historyBets
* historyBets `array`
  * items [placedBet](#placedbet)

### leg
* leg `object`
  * parts **required** `array`
    * items [part](#part)
  * sort `string`: The leg sort. This element is present for complex bets but not for single bets.
  * type **required** `string`: The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.

### part
* part `object`
  * includeInMultiple **required** `boolean`: Indicates if the bet can be used in a multiple bet
  * priceDen **required** `integer`: Price denominator - will be ignored for types other than L (Fixed Price)
  * priceNum **required** `integer`: Price numerator - will be ignored for types other than L (Fixed Price)
  * priceType **required** `integer`: The type of price selected. For example - ‘L’ (Fixed)
  * selectionId **required** `integer`: The selection identifier

### placedBet
* placedBet `object`
  * cashinValue `number`: The cash in value of the bet. For example £0.88. When no value is given or no value is present, no cash in is available
  * estimatedReturns **required** `number`: The estimated value of the returns if the bet is successful. Note: when an estimated return isn’t available, as in the case of a bet placed on a horse at SP (starting price) where the actual price is unknown when the bet is placed, ‘NOT_AVAILABLE’ will appear in the response field.
  * freeBetValue `number`: If a free bet token is used for the bet, this element represents the value
  * id **required** `string`: The unique identifier of the bet
  * legs `array`
    * items [placedBetLeg](#placedbetleg)
  * numLines `integer`: Number of lines of bets
  * numSelections `integer`: Number of selections that the bet is made of
  * receipt `string`: The unique identifier of the receipt for the bet
  * settled **required** `boolean`: Whether the bet is settled
  * stake **required** `number`: The bet stake, which represents the total value of the bet. For example: £ 12.34
  * stakePerLine `number`: The individual stake on each line of the bet. For example: £ 6.17
  * status **required** `string`: The status of the bet. Can be one of the following: A - Active, S - suspended, C - Cashed Out
  * transDateTime **required** `string`: The time the bet was placed
  * typeCode **required** `string`: The bet type code of the bet. For example: TBL (Treble)
  * typeName **required** `string`: The name of the bet type. For example: Double
  * winnings **required** `number`: Actual value of the returns from this bet

### placedBetLeg
* placedBetLeg `object`
  * number **required** `integer`: The leg number of the bet
  * parts **required** `array`
    * items [placedBetPart](#placedbetpart)
  * sort `string`: The leg sort. This element is present for complex bets but not for single bets.
  * type **required** `string`: The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message    - Price changed.

### placedBetPart
* placedBetPart `object`
  * description **required** `string`: Human-friendly description of the bet
  * eachWayDen `integer`: When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
  * eachWayNum `integer`: When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
  * eachWayPlaces `integer`: The Each-way places available for the bet
  * eventDescription **required** `string`: The description of the event
  * eventId **required** `string`: Unique identifier of the event
  * eventMarketDescription `string`: The description of the market within an event
  * eventTypeDescription `string`: The description of type of the event
  * handicap `number`: Denotes if the bet is part of a handicap market. For example: -1 if the selection starts on -1 goals (in football)
  * number **required** `integer`: The number of the bet
  * priceDen **required** `integer`: When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
  * priceFormatted [priceFormatted](#priceformatted)
  * priceNum **required** `integer`: When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
  * priceType **required** `string`: The price type chosen when the bet was placed. For example: L (Win)
  * result **required** `string`: The outcome of the bet/event. Can be one of the following values: W - Won; L - Lost; V - Void; - Result not yet available
  * rule4Deductions `number`: The official scale of deductions that apply when a runner is withdrawn
  * selectionId `string`: Unique identifier of the selection
  * startDateTime **required** `string`: Time the event will start. For example: 2013-01-30 11:01:01

### priceFormatted
* priceFormatted `object`
  * american `string`: The price in American format
  * decimal `number`: The decimal format of the price
  * fractional `string`: The fractional format of the price or EVS when the price evens.

### singleBetRequestBody
* singleBetRequestBody `object`
  * delayedBetId `string`: The delayed bet identifier
  * freeBetId `string`: The ID number of the free bet token if used in conjunction with this bet
  * priceDen `integer`: When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
  * priceNum `integer`: When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
  * priceType **required** `string`: The type of price taken by the customer when the bet is made. Can be one of the following: L - Live Fixed price, S - Starting price - Horse and Greyhound racing or G - Guaranteed best price.
  * selectionId **required** `string`: The unique ID for the selection of the bet
  * stake **required** `number`: The amount of the stake placed on the bet
  * type **required** `string`: The type of bet placed. Can be one of the following: W - Win or E- EachWay

### solution
* solution `object`
  * betNum `string`: The bet number
  * eventId `string`: The identifier of the event
  * handicap `string`: The updated handicap
  * handicapPrecision `string`: The handicap precision
  * priceDen `string`: When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
  * priceNum `string`: When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
  * selectionHandicap `string`: The selection handicap
  * selectionId `string`: The identifier of the selection


