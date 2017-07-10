# @datafire/spectrocoin
This is an API designed for merchants who are using SpectroCoin services and wishes to integrate them locally.

## Operation: createOrder
Create merchant order

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Order_request_class_used_to_provide_order_specific_information"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Order_information_class"
}
```
