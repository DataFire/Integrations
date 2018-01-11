# @datafire/betfair

Client library for Betfair: Exchange Streaming

## Installation and Usage
```bash
npm install --save @datafire/betfair
```
```js
let betfair = require('@datafire/betfair').create();

betfair.request.post({}).then(data => {
  console.log(data);
})
```

## Description

API to receive streamed updates. This is an ssl socket connection of CRLF delimited json messages (see RequestMessage & ResponseMessage)

## Actions

### request.post
This is a socket protocol delimited by CRLF (not http)


```js
betfair.request.post({
  "RequestMessage": null
}, context)
```

#### Input
* input `object`
  * RequestMessage **required** [AllRequestTypesExample](#allrequesttypesexample)

#### Output
* output [AllResponseTypesExample](#allresponsetypesexample)



## Definitions

### AllRequestTypesExample
* AllRequestTypesExample `object`
  * authentication [AuthenticationMessage](#authenticationmessage)
  * heartbeat [HeartbeatMessage](#heartbeatmessage)
  * marketSubscription [MarketSubscriptionMessage](#marketsubscriptionmessage)
  * opTypes `string` (values: heartbeat, authentication, marketSubscription, orderSubscription)
  * orderSubscriptionMessage [OrderSubscriptionMessage](#ordersubscriptionmessage)

### AllResponseTypesExample
* AllResponseTypesExample `object`
  * connection [ConnectionMessage](#connectionmessage)
  * marketChangeMessage [MarketChangeMessage](#marketchangemessage)
  * opTypes `string` (values: connection, status, mcm, ocm)
  * orderChangeMessage [OrderChangeMessage](#orderchangemessage)
  * status [StatusMessage](#statusmessage)

### AuthenticationMessage
* AuthenticationMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * appKey `string`
  * session `string`

### ConnectionMessage
* ConnectionMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * connectionId `string`: The connection id

### HeartbeatMessage
* HeartbeatMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type

### KeyLineDefinition
* KeyLineDefinition `object`
  * kl `array`
    * items [KeyLineSelection](#keylineselection)

### KeyLineSelection
* KeyLineSelection `object`
  * hc `number`
  * id `integer`

### MarketChange
* MarketChange `object`
  * con `boolean`: Conflated - have more than a single change been combined (or null if not conflated)
  * id `string`: Market Id - the id of the market
  * img `boolean`: Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta)
  * marketDefinition [MarketDefinition](#marketdefinition)
  * rc `array`: Runner Changes - a list of changes to runners (or null if un-changed)
    * items [RunnerChange](#runnerchange)
  * tv `number`: The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)

### MarketChangeMessage
* MarketChangeMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * clk `string`: Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
  * conflateMs `integer`: Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
  * ct `string` (values: SUB_IMAGE, RESUB_DELTA, HEARTBEAT): Change Type - set to indicate the type of change - if null this is a delta)
  * heartbeatMs `integer`: Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
  * initialClk `string`: Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
  * mc `array`: MarketChanges - the modifications to markets (will be null on a heartbeat
    * items [MarketChange](#marketchange)
  * pt `integer`: Publish Time (in millis since epoch) that the changes were generated
  * segmentType `string` (values: SEG_START, SEG, SEG_END): Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented
  * status `integer`: Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies

### MarketDataFilter
* MarketDataFilter `object`
  * fields `array`
    * items `string` (values: EX_BEST_OFFERS_DISP, EX_BEST_OFFERS, EX_ALL_OFFERS, EX_TRADED, EX_TRADED_VOL, EX_LTP, EX_MARKET_DEF, SP_TRADED, SP_PROJECTED)
  * ladderLevels `integer`

### MarketDefinition
* MarketDefinition `object`
  * betDelay `integer`
  * bettingType `string` (values: ODDS, LINE, RANGE, ASIAN_HANDICAP_DOUBLE_LINE, ASIAN_HANDICAP_SINGLE_LINE)
  * bspMarket `boolean`
  * bspReconciled `boolean`
  * complete `boolean`
  * countryCode `string`
  * crossMatching `boolean`
  * discountAllowed `boolean`
  * eachWayDivisor `number`
  * eventId `string`
  * eventTypeId `string`: The Event Type the market is contained within.
  * inPlay `boolean`
  * keyLineDefinition [KeyLineDefinition](#keylinedefinition)
  * lineInterval `number`: For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.
  * lineMaxUnit `number`: For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).
  * lineMinUnit `number`: For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).
  * marketBaseRate `number`
  * marketTime `string`
  * marketType `string`
  * numberOfActiveRunners `integer`
  * numberOfWinners `integer`
  * openDate `string`
  * persistenceEnabled `boolean`
  * priceLadderDefinition [PriceLadderDefinition](#priceladderdefinition)
  * raceType `string`
  * regulators `array`: The market regulators.
    * items `string`
  * runners `array`
    * items [RunnerDefinition](#runnerdefinition)
  * runnersVoidable `boolean`
  * settledTime `string`
  * status `string` (values: INACTIVE, OPEN, SUSPENDED, CLOSED)
  * suspendTime `string`
  * timezone `string`
  * turnInPlayEnabled `boolean`
  * venue `string`
  * version `integer`

### MarketFilter
* MarketFilter `object`
  * bettingTypes `array`
    * items `string` (values: ODDS, LINE, RANGE, ASIAN_HANDICAP_DOUBLE_LINE, ASIAN_HANDICAP_SINGLE_LINE)
  * bspMarket `boolean`
  * countryCodes `array`
    * items `string`
  * eventIds `array`
    * items `string`
  * eventTypeIds `array`
    * items `string`
  * marketIds `array`
    * items `string`
  * marketTypes `array`
    * items `string`
  * raceTypes `array`
    * items `string`
  * turnInPlayEnabled `boolean`
  * venues `array`
    * items `string`

### MarketSubscriptionMessage
* MarketSubscriptionMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * clk `string`: Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription
  * conflateMs `integer`: Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
  * heartbeatMs `integer`: Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
  * initialClk `string`: Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription
  * marketDataFilter [MarketDataFilter](#marketdatafilter)
  * marketFilter [MarketFilter](#marketfilter)
  * segmentationEnabled `boolean`: Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block

### Order
* Order `object`
  * avp `number`: Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.
  * bsp `number`: BSP Liability - the BSP liability of the order (null if the order is not a BSP order)
  * id `string`: Bet Id - the id of the order
  * ld `integer`: Lapsed Date - the date the order was lapsed (null if the order is not lapsed)
  * md `integer`: Matched Date - the date the order was matched (null if the order is not matched)
  * ot `string` (values: L, LOC, MOC): Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE)
  * p `number`: Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps
  * pd `integer`: Placed Date - the date the order was placed
  * pt `string` (values: L, P, MOC): Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close)
  * rac `string`: Regulator Auth Code - the auth code returned by the regulator
  * rc `string`: Regulator Code - the regulator of the order
  * rfo `string`: Order Reference - the customer's order reference for this order (empty string if one was not set)
  * rfs `string`: Strategy Reference - the customer's strategy reference for this order (empty string if one was not set)
  * s `number`: Size - the original placed size of the order
  * sc `number`: Size Cancelled - the amount of the order that has been cancelled
  * side `string` (values: B, L): Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line.
  * sl `number`: Size Lapsed - the amount of the order that has been lapsed
  * sm `number`: Size Matched - the amount of the order that has been matched
  * sr `number`: Size Remaining - the amount of the order that is remaining unmatched
  * status `string` (values: E, EC): Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE)
  * sv `number`: Size Voided - the amount of the order that has been voided

### OrderChangeMessage
* OrderChangeMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * clk `string`: Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
  * conflateMs `integer`: Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
  * ct `string` (values: SUB_IMAGE, RESUB_DELTA, HEARTBEAT): Change Type - set to indicate the type of change - if null this is a delta)
  * heartbeatMs `integer`: Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
  * initialClk `string`: Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
  * oc `array`: OrderMarketChanges - the modifications to account's orders (will be null on a heartbeat
    * items [OrderMarketChange](#ordermarketchange)
  * pt `integer`: Publish Time (in millis since epoch) that the changes were generated
  * segmentType `string` (values: SEG_START, SEG, SEG_END): Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented
  * status `integer`: Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies

### OrderFilter
* OrderFilter `object`
  * accountIds `array`: Internal use only & should not be set on your filter (your subscription is already locked to your account). If set subscription will fail.
    * items `integer`
  * customerStrategyRefs `array`: Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered)
    * items `string`
  * includeOverallPosition `boolean`: Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true
  * partitionMatchedByStrategyRef `boolean`: Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false

### OrderMarketChange
* OrderMarketChange `object`
  * accountId `integer`
  * closed `boolean`
  * id `string`: Market Id - the id of the market the order is on
  * orc `array`: Order Changes - a list of changes to orders on a selection
    * items [OrderRunnerChange](#orderrunnerchange)

### OrderRunnerChange
* OrderRunnerChange `object`
  * fullImage `boolean`
  * hc `number`: Handicap - the handicap of the runner (selection) (null if not applicable)
  * id `integer`: Selection Id - the id of the runner (selection)
  * mb `array`: Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection)
    * items `array`
      * items `number`
  * ml `array`: Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection)
    * items `array`
      * items `number`
  * smc `object`: Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference
  * uo `array`: Unmatched Orders - orders on this runner (selection) that are not fully matched
    * items [Order](#order)

### OrderSubscriptionMessage
* OrderSubscriptionMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * clk `string`: Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription
  * conflateMs `integer`: Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
  * heartbeatMs `integer`: Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
  * initialClk `string`: Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription
  * orderFilter [OrderFilter](#orderfilter)
  * segmentationEnabled `boolean`: Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block

### PriceLadderDefinition
* PriceLadderDefinition `object`
  * type `string` (values: CLASSIC, FINEST, LINE_RANGE)

### RequestMessage
* RequestMessage `object`
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type

### ResponseMessage
* ResponseMessage `object`
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type

### RunnerChange
* RunnerChange `object`
  * atb `array`: Available To Back - PriceVol tuple delta of price changes (0 vol is remove)
    * items `array`
      * items `number`
  * atl `array`: Available To Lay - PriceVol tuple delta of price changes (0 vol is remove)
    * items `array`
      * items `number`
  * batb `array`: Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
    * items `array`
      * items `number`
  * batl `array`: Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
    * items `array`
      * items `number`
  * bdatb `array`: Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
    * items `array`
      * items `number`
  * bdatl `array`: Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)
    * items `array`
      * items `number`
  * hc `number`: Handicap - the handicap of the runner (selection) (null if not applicable)
  * id `integer`: Selection Id - the id of the runner (selection)
  * ltp `number`: Last Traded Price - The last traded price (or null if un-changed)
  * spb `array`: Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove)
    * items `array`
      * items `number`
  * spf `number`: Starting Price Far - The far starting price (or null if un-changed)
  * spl `array`: Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove)
    * items `array`
      * items `number`
  * spn `number`: Starting Price Near - The far starting price (or null if un-changed)
  * trd `array`: Traded - PriceVol tuple delta of price changes (0 vol is remove)
    * items `array`
      * items `number`
  * tv `number`: The total amount matched. This value is truncated at 2dp.

### RunnerDefinition
* RunnerDefinition `object`
  * adjustmentFactor `number`
  * bsp `number`
  * hc `number`: Handicap - the handicap of the runner (selection) (null if not applicable)
  * id `integer`: Selection Id - the id of the runner (selection)
  * removalDate `string`
  * sortPriority `integer`
  * status `string` (values: ACTIVE, WINNER, LOSER, REMOVED, REMOVED_VACANT, HIDDEN, PLACED)

### StatusMessage
* StatusMessage
  * id `integer`: Client generated unique id to link request with response (like json rpc)
  * op `string`: The operation type
  * connectionClosed `boolean`: Is the connection now closed
  * connectionId `string`: The connection id
  * errorCode `string` (values: NO_APP_KEY, INVALID_APP_KEY, NO_SESSION, INVALID_SESSION_INFORMATION, NOT_AUTHORIZED, INVALID_INPUT, INVALID_CLOCK, UNEXPECTED_ERROR, TIMEOUT, SUBSCRIPTION_LIMIT_EXCEEDED, INVALID_REQUEST, CONNECTION_FAILED, MAX_CONNECTION_LIMIT_EXCEEDED): The type of error in case of a failure
  * errorMessage `string`: Additional message in case of a failure
  * statusCode `string` (values: SUCCESS, FAILURE): The status of the last request

### StrategyMatchChange
* StrategyMatchChange `object`
  * mb `array`: Matched Backs - matched amounts by distinct matched price on the Back side for this strategy
    * items `array`
      * items `number`
  * ml `array`: Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy
    * items `array`
      * items `number`


