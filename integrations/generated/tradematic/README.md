# @datafire/tradematic

Client library for Tradematic Cloud API

## Installation and Usage
```bash
npm install --save @datafire/tradematic
```
```js
let tradematic = require('@datafire/tradematic').create({
  Secured: ""
});

.then(data => {
  console.log(data);
});
```

## Description

### Overview
Tradematic Cloud is a trading infrastructure for building investment services.

It’s a trading engine + API + ready-made adapters to stock and forex brokers, crypto exchanges, and market data providers.

You can use it as a cloud API, or you can deploy it on your servers. 



### How to use Tradematic Cloud API

Sign up at [tradematic.cloud](https://tradematic.cloud). After signing up, you will receive your API key.

### Authorization

Add the 'X-API-KEY' header with your API key to each request.

### Examples of writing code with Tradematic Cloud API

Examples are available at [tradematic.cloud](https://tradematic.cloud). 

### Swagger (.yaml) File
Swagger (.yaml) file can be found [here](http://tradematic.cloud/sdk/swagger.yaml).


## Actions

### autofollow.strategies.get
Get autofollow strategies list


```js
tradematic.autofollow.strategies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Strategy](#strategy)

### autofollow.strategies.post
Create new autofollow strategy


```js
tradematic.autofollow.strategies.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * strategy [NewStrategy](#newstrategy)

#### Output
* output `object`
  * strategyid `integer`

### autofollow.strategies.strategyid.get
Get autofollow strategy by ID


```js
tradematic.autofollow.strategies.strategyid.get({
  "strategyid": 0
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`

#### Output
* output [Strategy](#strategy)

### autofollow.strategies.strategyid.put
Update autofollow strategy


```js
tradematic.autofollow.strategies.strategyid.put({
  "strategyid": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`
  * body **required** `object`
    * strategy [UpdatedStrategy](#updatedstrategy)

#### Output
* output `object`
  * result `string`

### autofollow.strategies.strategyid.content.put
Update rules for strategy that was created with strategy builder


```js
tradematic.autofollow.strategies.strategyid.content.put({
  "strategyid": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`
  * body **required** `object`
    * strategy [UpdatedStrategyContent](#updatedstrategycontent)

#### Output
* output `object`
  * strategyid `string`

### autofollow.strategies.strategyid.positions.get
Get positions for strategy


```js
tradematic.autofollow.strategies.strategyid.positions.get({
  "strategyid": 0
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`

#### Output
* output `array`
  * items [StrategyPosition](#strategyposition)

### autofollow.strategies.strategyid.signals.get
Get trading signals for strategy


```js
tradematic.autofollow.strategies.strategyid.signals.get({
  "strategyid": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`
  * count **required** `integer`

#### Output
* output `array`
  * items [Signal](#signal)

### autofollow.strategies.strategyid.signals.post
Send a new signal for autofollow strategy


```js
tradematic.autofollow.strategies.strategyid.signals.post({
  "strategyid": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`
  * body **required** `object`
    * signal [NewSignal](#newsignal)

#### Output
* output `object`
  * signalid `string`

### builder.rules.get
Get strategy builder rules list


```js
tradematic.builder.rules.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Rule](#rule)

### builder.rules.ruleid.get
Get strategy builder rules by ID


```js
tradematic.builder.rules.ruleid.get({
  "ruleid": 0
}, context)
```

#### Input
* input `object`
  * ruleid **required** `integer`

#### Output
* output `array`
  * items [Rule](#rule)

### client.apikeys.get
Get API keys


```js
tradematic.client.apikeys.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [APIKey](#apikey)

### client.apikeys.post
Create new API key


```js
tradematic.client.apikeys.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * key `string`
  * keyid `integer`

### client.apikeys.keyid.delete
Delete API key


```js
tradematic.client.apikeys.keyid.delete({
  "keyid": 0
}, context)
```

#### Input
* input `object`
  * keyid **required** `integer`

#### Output
* output `object`
  * keyid `integer`

### client.users.get
Get users list


```js
tradematic.client.users.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [User](#user)

### client.users.login.post
Logs user into the system


```js
tradematic.client.users.login.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * name `string`
  * userid `integer`

### client.users.register.post
Register a new user


```js
tradematic.client.users.register.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * user [NewUser](#newuser)

#### Output
* output `object`
  * userid `integer`

### client.users.userid.get
Get user by ID


```js
tradematic.client.users.userid.get({
  "userid": 0
}, context)
```

#### Input
* input `object`
  * userid **required** `integer`

#### Output
* output [User](#user)

### cloud.accounts.get
Get trading accounts list


```js
tradematic.cloud.accounts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Account](#account)

### cloud.accounts.accountid.get
Get trading account by ID


```js
tradematic.cloud.accounts.accountid.get({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output [Account](#account)

### cloud.accounts.accountid.closeall.post
Close all positions by account


```js
tradematic.cloud.accounts.accountid.closeall.post({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output `object`
  * commandid `integer`

### cloud.accounts.accountid.orders.get
Get orders list by account


```js
tradematic.cloud.accounts.accountid.orders.get({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output `array`
  * items [Order](#order)

### cloud.accounts.accountid.orders.post
Place a new order


```js
tradematic.cloud.accounts.accountid.orders.post({
  "accountid": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`
  * body **required** `object`
    * order [NewOrder](#neworder)

#### Output
* output `object`
  * commandid `integer`

### cloud.accounts.accountid.orders.orderid.delete
Cancel an order by ID


```js
tradematic.cloud.accounts.accountid.orders.orderid.delete({
  "accountid": 0,
  "orderid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`
  * orderid **required** `integer`

#### Output
* output `object`
  * commandid `integer`

### cloud.accounts.accountid.snapshots.get
Get account equity and cash snapshots


```js
tradematic.cloud.accounts.accountid.snapshots.get({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output `array`
  * items [Snapshot](#snapshot)

### cloud.accounts.accountid.sync.post
Syhchronize an account with account active strategies


```js
tradematic.cloud.accounts.accountid.sync.post({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output `object`
  * commandid `integer`

### cloud.accounts.accountid.trades.get
Get trades list by account


```js
tradematic.cloud.accounts.accountid.trades.get({
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * accountid **required** `integer`

#### Output
* output `array`
  * items [Trade](#trade)

### cloud.commands.get
Get commands list


```js
tradematic.cloud.commands.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Command](#command)

### cloud.commands.commandid.get
Get command by ID


```js
tradematic.cloud.commands.commandid.get({
  "commandid": 0
}, context)
```

#### Input
* input `object`
  * commandid **required** `integer`

#### Output
* output [Command](#command)

### cloud.connections.get
Get connections list


```js
tradematic.cloud.connections.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Connection](#connection)

### cloud.connections.post
Create a new connection


```js
tradematic.cloud.connections.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * connection [UpdatedConnection](#updatedconnection)

#### Output
* output `object`
  * connectionid `integer`

### cloud.connections.connectionid.delete
Delete connection by ID


```js
tradematic.cloud.connections.connectionid.delete({
  "connectionid": 0
}, context)
```

#### Input
* input `object`
  * connectionid **required** `integer`

#### Output
* output `object`
  * connectionid `integer`

### cloud.connections.connectionid.get
Get connection by ID


```js
tradematic.cloud.connections.connectionid.get({
  "connectionid": 0
}, context)
```

#### Input
* input `object`
  * connectionid **required** `integer`

#### Output
* output [Connection](#connection)

### cloud.connections.connectionid.put
Update existing connection


```js
tradematic.cloud.connections.connectionid.put({
  "connectionid": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * connectionid **required** `integer`
  * body **required** `object`
    * connection [UpdatedConnection](#updatedconnection)

#### Output
* output `object`
  * connectionid `integer`

### cloud.connectors.get
Get available connectors list


```js
tradematic.cloud.connectors.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Connector](#connector)

### cloud.connectors.connectorid.get
Get connector by ID


```js
tradematic.cloud.connectors.connectorid.get({
  "connectorid": 0
}, context)
```

#### Input
* input `object`
  * connectorid **required** `integer`

#### Output
* output [Connector](#connector)

### cloud.sessions.get
Get sessions list


```js
tradematic.cloud.sessions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Session](#session)

### cloud.sessions.sessionid.get
Get session by ID


```js
tradematic.cloud.sessions.sessionid.get({
  "sessionid": 0
}, context)
```

#### Input
* input `object`
  * sessionid **required** `integer`

#### Output
* output [Session](#session)

### cloud.strategies.get
Get list of active (executing) strategies


```js
tradematic.cloud.strategies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CloudStrategy](#cloudstrategy)

### cloud.strategies.start.post
Start a strategy execution for account


```js
tradematic.cloud.strategies.start.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * data [StartStrategyData](#startstrategydata)

#### Output
* output `object`
  * commandid `integer`

### cloud.strategies.strategyid.get
Get active (executing) strategy by ID


```js
tradematic.cloud.strategies.strategyid.get({
  "strategyid": 0
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`

#### Output
* output `array`
  * items [CloudStrategy](#cloudstrategy)

### cloud.strategies.strategyid.stop.post
Stop a strategy execution by ID


```js
tradematic.cloud.strategies.strategyid.stop.post({
  "strategyid": 0
}, context)
```

#### Input
* input `object`
  * strategyid **required** `integer`

#### Output
* output `object`
  * commandid `integer`

### marketdata.markets.get
Get markets list


```js
tradematic.marketdata.markets.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Market](#market)

### marketdata.markets.marketid.get
Get market by ID


```js
tradematic.marketdata.markets.marketid.get({
  "marketid": 0
}, context)
```

#### Input
* input `object`
  * marketid **required** `integer`

#### Output
* output [Market](#market)

### marketdata.symbols.get
Get symbols list


```js
tradematic.marketdata.symbols.get({
  "marketid": 0,
  "filter": 0
}, context)
```

#### Input
* input `object`
  * marketid **required** `integer`
  * filter **required** `integer`

#### Output
* output `array`
  * items [Symbol](#symbol)

### marketdata.symbols.symbolid.get
Get symbol by ID


```js
tradematic.marketdata.symbols.symbolid.get({
  "symbolid": 0
}, context)
```

#### Input
* input `object`
  * symbolid **required** `integer`

#### Output
* output [Symbol](#symbol)

### marketdata.symbols.symbolid.histdata.get
Get historical data for instrument


```js
tradematic.marketdata.symbols.symbolid.histdata.get({
  "symbolid": 0,
  "tf": 0,
  "from": 0,
  "to": 0
}, context)
```

#### Input
* input `object`
  * symbolid **required** `integer`
  * tf **required** `integer`
  * from **required** `integer`
  * to **required** `integer`

#### Output
* output `object`
  * adjusted `boolean`
  * queryCount `integer`
  * results `array`
    * items [Result](#result)
  * resultsCount `integer`
  * status `string`
  * ticker `string`

### news.news.get
Get news list


```js
tradematic.news.news.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [News](#news)

### news.news.newsid.get
Get news by ID


```js
tradematic.news.news.newsid.get({
  "newsid": 0
}, context)
```

#### Input
* input `object`
  * newsid **required** `integer`

#### Output
* output [News](#news)

### ping.get
Ping


```js
tradematic.ping.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### taskmanager.tasks.get
Get tasks list


```js
tradematic.taskmanager.tasks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Task](#task)

### taskmanager.tasks.post
Create a new task


```js
tradematic.taskmanager.tasks.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * task [NewTask](#newtask)

#### Output
* output `object`
  * taskid `string`

### taskmanager.tasks.taskid.get
Get task by ID


```js
tradematic.taskmanager.tasks.taskid.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output [Task](#task)

### taskmanager.tasks.taskid.bymonths.get
Get backtest data for equity chart, grouped by months


```js
tradematic.taskmanager.tasks.taskid.bymonths.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [ByMonths](#bymonths)

### taskmanager.tasks.taskid.byquarters.get
Get backtest data for equity chart, grouped by quarters


```js
tradematic.taskmanager.tasks.taskid.byquarters.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [ByQuarters](#byquarters)

### taskmanager.tasks.taskid.byyears.get
Get backtest data for equity chart, grouped by years


```js
tradematic.taskmanager.tasks.taskid.byyears.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [ByYears](#byyears)

### taskmanager.tasks.taskid.contribution.get
Get backtest symbol contribution data


```js
tradematic.taskmanager.tasks.taskid.contribution.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [Contribution](#contribution)

### taskmanager.tasks.taskid.drawdown.get
Get data for drawdown chart


```js
tradematic.taskmanager.tasks.taskid.drawdown.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [DrawdownItem](#drawdownitem)

### taskmanager.tasks.taskid.equity.get
Get data for equity chart


```js
tradematic.taskmanager.tasks.taskid.equity.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [EquityItem](#equityitem)

### taskmanager.tasks.taskid.equitypct.get
Get data for equity chart (%)


```js
tradematic.taskmanager.tasks.taskid.equitypct.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [EquityPctItem](#equitypctitem)

### taskmanager.tasks.taskid.equitypctsm.get
Get spared data for equity chart (%)


```js
tradematic.taskmanager.tasks.taskid.equitypctsm.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [EquityPctSmItem](#equitypctsmitem)

### taskmanager.tasks.taskid.folder.get
Get task result folder name


```js
tradematic.taskmanager.tasks.taskid.folder.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `object`
  * folder `string`

### taskmanager.tasks.taskid.performance.get
Get backtest statistics


```js
tradematic.taskmanager.tasks.taskid.performance.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `object`
  * buyandhold [Longshort](#longshort)
  * long [Longshort](#longshort)
  * longshort [Longshort](#longshort)
  * short [Longshort](#longshort)

### taskmanager.tasks.taskid.result.get
Get task result


```js
tradematic.taskmanager.tasks.taskid.result.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `object`
  * bymonths_csv `string`
  * bymonths_png `string`
  * byquarters_csv `string`
  * byquarters_png `string`
  * byyears_csv `string`
  * byyears_png `string`
  * contribution_csv `string`
  * contribution_png `string`
  * drawdown_csv `string`
  * drawdown_png `string`
  * equity_csv `string`
  * equity_png `string`
  * equitypct_csv `string`
  * equitypct_png `string`
  * equitypctnofill_csv `string`
  * equitypctnofill_png `string`
  * equitypctsm `string`
  * equitypctsm_csv `string`
  * equitypctsm_png `string`
  * performance_csv `string`
  * performance_png `string`
  * trades_csv `string`
  * trades_png `string`

### taskmanager.tasks.taskid.result2.get
Get task result (version 2)


```js
tradematic.taskmanager.tasks.taskid.result2.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `object`
  * apr `string`
  * curMonthProfit `string`
  * curYearProfit `string`
  * drawdown `string`
  * halfYearProfit `string`
  * monthProfit `string`
  * prevMonthProfit `string`
  * totalProfit `string`
  * weekProfit `string`
  * yearProfit `string`

### taskmanager.tasks.taskid.status.get
Get task status


```js
tradematic.taskmanager.tasks.taskid.status.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `object`
  * status `string`

### taskmanager.tasks.taskid.trades.get
Get backtest trades list


```js
tradematic.taskmanager.tasks.taskid.trades.get({
  "taskid": 0
}, context)
```

#### Input
* input `object`
  * taskid **required** `integer`

#### Output
* output `array`
  * items [BacktestTrade](#backtesttrade)

### time.get
Get current server time


```js
tradematic.time.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * servertime `integer`



## Definitions

### APIKey
* APIKey `object`
  * key `string`
  * keyid `string`
  * permissions `string`

### Account
* Account `object`
  * account `string`
  * accountid `string`
  * accounttypename `string`
  * cash `string`
  * change `string`
  * changepercent `string`
  * comments `string`
  * computer `string`
  * currencyid `string`
  * currencytext `string`
  * hwid `string`
  * positions [Positions](#positions)
  * positionspercent [Positions](#positions)
  * sessionid `string`
  * typeid `string`
  * value `string`

### BacktestTrade
* BacktestTrade `object`
  * barsheld `string`
  * changepct `string`
  * commission `string`
  * entrydatetime `string`
  * entryprice `string`
  * entrysignal `string`
  * exitdatetime `string`
  * exitprice `string`
  * exitsignal `string`
  * mae `string`
  * mfe `string`
  * pandl `string`
  * position `string`
  * shares `string`
  * size `string`
  * symbol `string`

### ByMonths
* ByMonths `object`
  * equitypct `string`
  * period `string`

### ByQuarters
* ByQuarters `object`
  * equitypct `string`
  * period `string`

### ByYears
* ByYears `object`
  * equitypct `string`
  * period `string`

### CloudStrategy
* CloudStrategy `object`
  * account `string`
  * computer `string`
  * hwid `string`
  * message `string`
  * status `string`
  * strategy `string`
  * strategyid `string`
  * strategystatusname `string`

### Command
* Command `object`
  * account `string`
  * accountid `string`
  * commanddate `string`
  * commandid `string`
  * commandstatusname `string`
  * commandtypename `string`
  * computer `string`
  * hwid `string`
  * message `string`
  * parameters [Parameters](#parameters)
  * status `string`
  * timestamp `string`
  * type `string`

### Connection
* Connection `object`
  * active `string`
  * connectionid `string`
  * connectionstring `string`
  * connectorcode `string`
  * connectorid `string`
  * connectorname `string`
  * connectortypename `string`
  * creationdate `string`
  * host `string`
  * login `string`
  * password `string`
  * port `string`
  * sessionid `string`
  * updatedate `string`

### Connector
* Connector `object`
  * code `string`
  * connectorid `string`
  * connectortypename `string`
  * name `string`
  * typeid `string`

### Contribution
* Contribution `object`
  * pandl `string`
  * share `string`
  * symbol `string`

### DrawdownItem
* DrawdownItem `object`
  * drawdownpct `string`
  * timestamp `string`

### EquityItem
* EquityItem `object`
  * cash `string`
  * equity `string`
  * timestamp `string`

### EquityPctItem
* EquityPctItem `object`
  * buyandhold `string`
  * equity `string`
  * timestamp `string`

### EquityPctSmItem
* EquityPctSmItem `object`
  * buyandhold `string`
  * equity `string`
  * timestamp `string`

### Error
* Error `object`
  * message `string`
  * status `integer`

### Longentry
* Longentry `object`
  * id `string`
  * name `string`
  * parameters `array`
    * items [Parameter](#parameter)
  * validnot `string`
  * validor `string`

### Longexit
* Longexit `object`
  * id `string`
  * name `string`
  * parameters `array`
    * items [Parameter](#parameter)
  * validnot `string`
  * validor `string`

### Longshort
* Longshort `object`
  * apr `string`
  * avgbarsheld `string`
  * avgloss `string`
  * avglossbarsheld `string`
  * avglosspct `string`
  * avgprofit `string`
  * avgprofitavgloss `string`
  * avgprofitbarsheld `string`
  * avgprofitpct `string`
  * endcapital `string`
  * exposure `string`
  * grossloss `string`
  * grossprofit `string`
  * losingtrades `string`
  * losingtradespct `string`
  * mar `string`
  * margininterest `string`
  * maxconsecloss `string`
  * maxconsecwin `string`
  * maxdrawdown `string`
  * maxdrawdowndate `string`
  * maxdrawdownlength `string`
  * maxdrawdownpct `string`
  * maxdrawdownpctdate `string`
  * mpr `string`
  * netprofit `string`
  * netprofitpct `string`
  * profitabletrades `string`
  * profitabletradespct `string`
  * profitfactor `string`
  * profitriskratio `string`
  * rar `string`
  * recoveryfactor `string`
  * sharperatio `string`
  * sortinoratio `string`
  * startcapital `string`
  * totalcommission `string`
  * totaltrades `string`
  * totalvolume `string`
  * turnover `string`

### Market
* Market `object`
  * code `string`
  * countryid `string`
  * marketid `string`
  * name `string`

### NewOrder
* NewOrder `object`
  * buy `string`
  * price `string`
  * shares `string`
  * symbol `string`
  * type `string`

### NewSignal
* NewSignal `object`
  * position `string`
  * price `string`
  * shares `string`
  * size `string`
  * symbol `string`
  * timestamp `string`
  * type `string`

### NewStrategy
* NewStrategy `object`
  * apr `string`
  * author `string`
  * content `string`
  * description `string`
  * drawdown `string`
  * guid `string`
  * limitorder `string`
  * marketname `string`
  * multiposition `string`
  * name `string`
  * positionsize `string`
  * strategytypeid `string`
  * symbols `string`
  * timeframe `string`

### NewTask
* NewTask `object`
  * isbenchmark `string`
  * strategyid `string`
  * tasktypeid `string`
  * userid2 `string`

### NewUser
* NewUser `object`
  * name `string`
  * password `string`
  * username `string`

### News
* News `object`
  * body `string`
  * newsid `string`
  * source `string`
  * timestamp `string`
  * title `string`

### Order
* Order `object`
  * account `string`
  * buy `string`
  * message `string`
  * number `string`
  * orderid `string`
  * price `string`
  * shares `string`
  * status `string`
  * statusname `string`
  * symbol `string`
  * timestamp `string`

### Parameter
* Parameter `object`
  * default `string`
  * name `string`
  * start `string`
  * step `string`
  * stop `string`
  * type `string`

### Parameters
* Parameters `object`

### Positions
* Positions `object`

### Result
* Result `object`
  * c `number`
  * h `number`
  * l `number`
  * n `integer`
  * o `number`
  * t `integer`
  * v `integer`

### Rule
* Rule `object`
  * category `string`
  * description `string`
  * guid `string`
  * name `string`
  * parameters `array`
    * items [Parameter](#parameter)
  * ruletype `string`
  * validnot `string`
  * validor `string`

### Rules
* Rules `object`
  * longentry `array`
    * items [Longentry](#longentry)
  * longexit `array`
    * items [Longexit](#longexit)

### Session
* Session `object`
  * computer `string`
  * hwid `string`
  * login `string`
  * mode `string`
  * sessionid `string`
  * sessionmodename `string`
  * sessionstatusname `string`
  * status `string`
  * timestamp `string`
  * type `string`
  * userid `string`

### Signal
* Signal `object`
  * position `string`
  * price `string`
  * shares `string`
  * signalid `string`
  * size `string`
  * symbol `string`
  * timestamp `string`
  * type `string`

### Snapshot
* Snapshot `object`
  * cash `string`
  * daynum `string`
  * snapshotid `string`
  * timestamp `string`
  * value `string`

### StartStrategyData
* StartStrategyData `object`
  * accountid `string`
  * strategyid `string`

### Strategy
* Strategy `object`
  * apr `string`
  * author `string`
  * brokername `string`
  * code `string`
  * datascale `string`
  * description `string`
  * drawdown `string`
  * folder `string`
  * guid `string`
  * image `string`
  * limitorder `string`
  * marketname `string`
  * multiposition `string`
  * name `string`
  * owner `string`
  * permissions `string`
  * positionsize `string`
  * risklevelcode `string`
  * risklevelid `string`
  * risklevelname `string`
  * rules [Rules](#rules)
  * strategyid `string`
  * strategytypeid `string`
  * symbols `array`
    * items [Symbol](#symbol)
  * taskfolder `string`
  * taskid `string`
  * taskresult [Taskresult](#taskresult)
  * timeframe `string`
  * updatedate `string`
  * url `string`

### StrategyPosition
* StrategyPosition `object`
  * date `string`
  * price `string`
  * size `string`
  * symbol `string`

### Symbol
* Symbol `string`

### Task
* Task `object`
  * isbenchmark `string`
  * name `string`
  * status `string`
  * statusupdatedate `string`
  * strategyid `string`
  * taskid `string`
  * usestaticdata `string`

### Taskresult
* Taskresult `object`
  * apr `string`
  * curMonthProfit `string`
  * curYearProfit `string`
  * drawdown `string`
  * halfYearProfit `string`
  * monthProfit `string`
  * prevMonthProfit `string`
  * totalProfit `string`
  * weekProfit `string`
  * yearProfit `string`

### Trade
* Trade `object`
  * account `string`
  * buy `string`
  * number `string`
  * price `string`
  * shares `string`
  * symbol `string`
  * timestamp `string`
  * tradeid `string`

### UpdatedConnection
* UpdatedConnection `object`
  * active `string`
  * connectorid `string`
  * host `string`
  * login `string`
  * password `string`
  * port `string`

### UpdatedStrategy
* UpdatedStrategy `object`
  * author `string`
  * description `string`
  * limitorder `string`
  * marketname `string`
  * multiposition `string`
  * name `string`
  * symbols `string`

### UpdatedStrategyContent
* UpdatedStrategyContent `object`
  * rules [Rules](#rules)

### User
* User `object`
  * comments `string`
  * createdby `string`
  * name `string`
  * regdate `string`
  * userid `string`
  * username `string`


