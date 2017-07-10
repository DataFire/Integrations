# @datafire/azure_insights


## Operation: Metrics_List
**Lists the metric values for a resource**.<br>The **$filter** is used to reduce the set of metric data returned. Some common properties for this expression will be: name.value, aggregationType, startTime, endTime, timeGrain. The filter expression uses these properties with comparison operators (eg. eq, gt, lt) and multiple expressions can be combined with parentheses and 'and/or' operators.<br>Some example filter expressions are:<br>- $filter=(name.value eq 'RunsSucceeded') and aggregationType eq 'Total' and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M',<br>- $filter=(name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1H',<br>- $filter=(name.value eq 'ActionsCompleted' or name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M'.<br><br> >**NOTE**: When a metrics query comes in with multiple metrics, but with no aggregation types defined, the service will pick the Primary aggregation type of the first metrics to be used as the default aggregation type for all the metrics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The identifier of the resource."
    },
    "$filter": {
      "type": "string",
      "description": "Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricCollection"
}
```
