# @datafire/mastercard_spendingpulse

Client library for Spending Pulse

## Installation and Usage
```bash
npm install --save @datafire/mastercard_spendingpulse
```
```js
let mastercard_spendingpulse = require('@datafire/mastercard_spendingpulse').create();

.then(data => {
  console.log(data);
});
```

## Description

This API will provide monthly data which includes metrics such as sales volume and growth rate.

## Actions

### gasweekly.get
Returns the weekly gasoline report. This resource pulls back the report with ProductLine = "US Weekly Gasoline Demand Report". Keep in mind that you must be subscribed to the gasoline weekly report to be able to receive data back from this resource.



```js
mastercard_spendingpulse.gasweekly.get({}, context)
```

#### Input
* input `object`
  * CurrentRow `string`: Starting record number to return.
  * Offset `string`: Used to restrict the number of records returned if needed to be less than max.

#### Output
* output [GasWeeklyListResponse](#gasweeklylistresponse)

### parameters.get
Returns a distinct list of all reports are available and that one is subscribed to.



```js
mastercard_spendingpulse.parameters.get({}, context)
```

#### Input
* input `object`
  * CurrentRow `string`: Starting record number to return.
  * Offset `string`: Used to restrict the number of records returned if needed to be less than max.

#### Output
* output [ParameterListResponse](#parameterlistresponse)

### spendingpulse.get
Returns all Spending Pulse reports (with the exception of the gasoline weekly report, which has its own resource), that one is subscribed to.



```js
mastercard_spendingpulse.spendingpulse.get({}, context)
```

#### Input
* input `object`
  * CurrentRow `string`: Starting record number to return.
  * Offset `string`: Used to restrict the number of records returned if needed to be less than max.
  * ProductLine `string`: Product Line.  Either ?US Executive Report? or ?Weekly Sales?
  * PublicationCoveragePeriod `string`: Publication Coverage Period indicates what period is to be covered, often the current report will include the month prior.
  * Country `string`: Country code.
  * ReportType `string`: Report type name, today the only report supported is "monitor".
  * Period `string`: Indicates the period covered by the data with possible values of - day, week, month, quarter, annual
  * Sector `string`: Sector name.
  * Ecomm `string`: Ecommerce indicator.

#### Output
* output [SpendingPulseListResponse](#spendingpulselistresponse)

### subscription.get
Returns a list of all reports one is currently subscribed to.



```js
mastercard_spendingpulse.subscription.get({}, context)
```

#### Input
* input `object`
  * CurrentRow `string`: Starting record number to return.
  * Offset `string`: Used to restrict the number of records returned if needed to be less than max.

#### Output
* output [SubscriptionListResponse](#subscriptionlistresponse)



## Definitions

### Error
* Error `object`
  * Description `string`: This is the text description of the error. This is optional and will only be displayed if more information is available than is stored in the data identifier and reason code.
  * ReasonCode `string`: This will identify the reason for the error.
  * Recoverable `boolean`: This is a true/false presentation to explain if the transaction was submitted again would it be successful or not.
  * Source `string`: Unique identifier that attempts to define the field in error when available.  If a specific field can't be identified System will be returned.

### ErrorSchema
* ErrorSchema `object`
  * Errors [Errors](#errors)

### Errors
* Errors `object`
  * Error `array`
    * items [Error](#error)

### GasWeeklyArray
* GasWeeklyArray `object`
  * GasWeeklyRecord `array`
    * items [GasWeeklyRecord](#gasweeklyrecord)

### GasWeeklyList
* GasWeeklyList `object`
  * Count `string`: Total number of records returned from the query.
  * GasWeeklyArray [GasWeeklyArray](#gasweeklyarray)
  * Message `string`: Success/Failure.

### GasWeeklyListResponse
* GasWeeklyListResponse `object`
  * GasWeeklyList [GasWeeklyList](#gasweeklylist)

### GasWeeklyRecord
* GasWeeklyRecord `object`
  * AveragePricePerGalRegularGasoline `string`: Average price at the pump for all gallons sold during the reporting week.
  * Country `string`: Country Code.
  * PADDCode `string`: PADD (Petroleum Administration for Defense Districts) are defined by the U.S. Energy Information Administration. The PADD Districts are New England, Central Atlantic, Lower Atlantic, Midwest, Gulf Coast, Rocky Mountain, West Coast.
  * PADDMillionsofBarrelsSold `string`: For the PADD being reported, the estimated number of barrels (42 U.S. gallons) of regular motor gasoline (includes all finished motor gasoline grades and formulations or blends . It does not contain diesel nor aviation fuel.) sold during the week.
  * PADDPercentChangeInBarrelsFromPriorWeek `string`: The percent change from one week ago in the PADDMillionsofBarrelsSold.
  * PADDPercentChangeinBarrelsfrom52WeeksAgo `string`: The percent change from 52 weeks ago in the PADDMillionsofBarrelsSold.
  * Period `string`: Indicates the period covered by the data with possible values of - day, week, month, quarter, annual
  * ProductLine `string`: Overall product line that the report belongs to, the only report for this resource is US Weekly Gasoline Demand Report.
  * PublicationCoveragePeriod `string`: Publication Coverage Period indicates what period is to be covered.  For this report it will include the gasoline week ending date which will always be a Friday.
  * ReportType `string`: Report type name, today the only report supported is "monitor".
  * Sector `string`: Gas
  * Segment `string`: Not used.
  * SubSector `string`: Not used.
  * TotalBarrelsChangeFromPriorWeek `string`: Change in TotalMillionsOfBarrelsSold from one week ago.
  * TotalMillionsOfBarrels4WeekAverage `string`: Average millions of barrels of gasoline sold per week during the prior 4 weeks.
  * TotalMillionsOfBarrelsDailyAverage `string`: Average millions of barrels of gasoline sold per day during the week being reported.
  * TotalMillionsOfBarrelsSold `string`: Estimated number of barrels (42 U.S. Gallons) of regular motor gasoline (includes all finished motor gasoline grades and formulations or blends . IT does not contain diesel nor aviation fuel).
  * TotalPercentChangeInBarrelsFrom52WeeksAgo `string`: Percent change from 52 weeks ago in the TotalMillionsOfBarrelsSold.
  * TotalPercentChangeInBarrelsFromPriorWeek `string`: Percent change from one week ago in the TotalMillionsOfBarrelsSold.
  * TotalPercentChangeInThe4WeekAverageFrom52WeeksAgo `string`: Percent change from 52 weeks ago in the TotalMillionsOfBarrels4WeekAverage.
  * WeekEndDate `string`: End of week date.

### Parameter
* Parameter `object`
  * Country `string`: Country Code.
  * Ecomm `string`: Ecommerce indicator. "yes" or "no" are the options.
  * Period `string`: Indicates the period covered by the data with possible values of - day, week, month, quarter, annual
  * ProductLine `string`: Product lines available for the consumer ?US Executive Report? and/or ?US Weekly Gasoline Report?.
  * PublicationCoveragePeriod `string`: Publication Coverage Period indicates what period is to be covered by the current report.
  * ReportType `string`: Report type name, today the only report supported is "monitor".
  * Sector `string`: Sector name/id.

### ParameterArray
* ParameterArray `object`
  * Parameter `array`
    * items [Parameter](#parameter)

### ParameterList
* ParameterList `object`
  * Count `string`: Total number of records returned from the query.
  * Message `string`: Success/Failure.
  * ParameterArray [ParameterArray](#parameterarray)

### ParameterListResponse
* ParameterListResponse `object`
  * ParameterList [ParameterList](#parameterlist)

### SpendingPulseArray
* SpendingPulseArray `object`
  * SpendingPulseRecord `array`
    * items [SpendingPulseRecord](#spendingpulserecord)

### SpendingPulseList
* SpendingPulseList `object`
  * Count `string`: Total number of records returned from the query.
  * Message `string`: Success/Failure.
  * SpendingPulseArray [SpendingPulseArray](#spendingpulsearray)

### SpendingPulseListResponse
* SpendingPulseListResponse `object`
  * SpendingPulseList [SpendingPulseList](#spendingpulselist)

### SpendingPulseRecord
* SpendingPulseRecord `object`
  * Country `string`: Country Code.
  * CurrencyOfForSalesValue `string`: A value to indicate the currency in which the sales value is being reported. For sales index values, this field is not used.
  * Ecomm `string`: Ecommerce indicator. "yes" or "no" are the options.
  * ImpliedDeflatorMonthOverMonthChange `string`: Percent change from one month ago in the implied deflator (the deflator is used in seasonal adjustment calculation).
  * ImpliedDeflatorYearOverYearChange `string`: Percent change from one year ago in the implied deflator (the deflator is used in seasonal adjustment calculation).
  * NonGregorianReportingPeriod `string`: For only those data reported by a non-Gregorian calendar (e.g. US Sectors which are reported based on the National Retail Federation 4-5-4 calendar) this value designates the retail period being reported. As an example, for the US apparel sector, for Period Date = February 2015, the reporting period is 2015-01 (February is the first month of US retail year 2015).
  * Period `string`: Indicates the period covered by the data with possible values of - day, week, month, quarter, annual
  * PeriodEndDate `string`: Date indicating the end of the period covered by ensuing data.
  * PeriodStartDate `string`: Date indicating the beginning of the period covered by ensuing data.
  * PriceAdjustmentFlag `string`: Price adjustment indicator.
  * PriceIndex3MonthMovingAverageChange `string`: Percent change from one year ago in the three-month moving PriceIndexValue average.
  * PriceIndexMonthOverMonthChange `string`: Percent change from one month ago in the PriceIndexValue.
  * PriceIndexValue `string`: Published price index value for the period being reported. Not a currency value - a decimal index value. The price index takes into account both the average ticket value and the size of the basket. Changes in either will be reflected in the price index changes.
  * PriceIndexYearOverYearChange `string`: Percent change from one year ago in the PriceIndexValue.
  * ProductLine `string`: Product line, either for this resource it will be ?US Executive".
  * PublicationCoveragePeriod `string`: Publication Coverage Period indicates what period is to be covered, often the current report will include the month prior.
  * ReportType `string`: Report type name, today the only report supported is "monitor".
  * ReportingCalender `string`: Value indicates calendar used for periodic aggregation (e.g. "G" = Gregorian, "454" = US Retail, "445" = UK ONS, etc.) Please note that some data are reported under more than one calendar. As a result, in order to uniquely identify the data being reported, the reporting calendar must be included.
  * Sales3MonthMovingAverageChange `string`: Percent change from one year ago in the three-month moving SalesIndexValue average.
  * SalesMonthOverMonthChange `string`: Percent change from one month ago in the SalesValueIndex.
  * SalesValueIndex `string`: Aggregated/computed value of sales for the period being reported. This may be an index value (not a currency value - just a decimal value) or it may be a currency value that would typically be in local currency (dollar, pound, yen, etc.)
  * SalesYearOverYearChange `string`: Percent change from one year ago in the SalesValueIndex.
  * SalesYearToDateChange `string`: Percent change from year ago.
  * SameStoreSalesIndex3MonthMovingAverageChange `string`: Percent change from one month ago in the SameStoreSalesIndex.
  * SameStoreSalesIndexYearOverYearChange `string`: Percent change from one year ago in the SameStoreSalesIndex.
  * SeasonalAdjustmentFlag `string`: Seasonal data adjustment indicator.
  * Sector `string`: Sector name/id.
  * Segment `string`: Sub unit within a sector e.g. Sector = restaurant; SubSector = Full Service; Segment = Fine Dining.
  * SubGeographyValue `string`: For those data reported by sub-geographies (e.g. regions, states, etc.) the sub-geography being reported.
  * SubSector `string`: Sub unit within a sector e.g. Sector = Electronics & Appliances; SubSector = Electronics.
  * TransactionIndex3MonthMovingAverageChange `string`: Percent change from one year ago in the three-month moving TransactionIndexValue average.
  * TransactionIndexMonthOverMonthChange `string`: Percent change from one month ago in the TransactionIndexValue.
  * TransactionIndexValue `string`: Published transaction index value for the period being reported. Not a currency value - a decimal index value. The transaction index is a relative indication of transactions volume in the sector/sub-sector/segment being reported.
  * TransactionIndexYearOverYearChange `string`: Percent change from one year ago in the TransactionIndexValue.

### Subscription
* Subscription `object`
  * Country `string`: Country Code.
  * Ecomm `string`: Ecommerce indicator. "yes" or "no" are the options.
  * Period `string`: Indicates the period covered by the data with possible values of - day, week, month, quarter, annual
  * ReportType `string`: Report type name, today the only report supported is "monitor".
  * Sector `string`: Sector name.

### SubscriptionArray
* SubscriptionArray `object`
  * Subscription `array`
    * items [Subscription](#subscription)

### SubscriptionList
* SubscriptionList `object`
  * Count `string`: Total number of records returned from the query.
  * Message `string`: Success/Failure
  * SubscriptionArray [SubscriptionArray](#subscriptionarray)

### SubscriptionListResponse
* SubscriptionListResponse `object`
  * SubscriptionList [SubscriptionList](#subscriptionlist)


