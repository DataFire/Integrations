# @datafire/azure_monitor


## Operation: UsageMetrics_List
The List operation lists the usage metrics for the resource.<br>**WARNING**: This operation will be *deprecated* in the next release.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The identifier of the resource."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version. NOTE: This is not a client property, it must be explicit in the call and there is no default value."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation.<br>**WARNING**: $filter not documented since the operation will be deprecated in the next release."
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
  "$ref": "#/definitions/UsageMetricCollection"
}
```
