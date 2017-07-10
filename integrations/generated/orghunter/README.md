# @datafire/orghunter
Get the latest IRS data and most up to date charity information for your website or application

## Operation: v1.categories.post
<p>This operation provides a list of categories.</p>

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: v1.charitybasic.post
<p>This operation detail data.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ein": {
      "type": "string",
      "description": "ein (Employer Identification Number)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v1.charityfinancial.post
<p>This operation detail data.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ein": {
      "type": "string",
      "description": "ein (Employer Identification Number)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v1.charitygeolocation.post
<p>This operation detail data.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ein": {
      "type": "string",
      "description": "ein (Employer Identification Number)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v1.charitypremium.post
<p>This operation detail data.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ein": {
      "type": "string",
      "description": "ein (Employer Identification Number)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v1.charitysearch.post
<p>This operation provides summary data.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ein": {
      "type": "string",
      "description": "Employer Identification Number (EIN)"
    },
    "searchTerm": {
      "type": "string",
      "description": "Charity Name or Keyword. Example: humane society or cancer"
    },
    "city": {
      "type": "string",
      "description": "City Name. Example: Miami"
    },
    "state": {
      "type": "string",
      "description": "State Name - Two letter state abbreviation"
    },
    "zipCode": {
      "type": "string",
      "description": "Zipcode Value - 5 digit zipcode value"
    },
    "category": {
      "type": "string",
      "description": "Category Value Selected from Categories API"
    },
    "eligible": {
      "type": "string",
      "description": "eligible=1 will return only organizations that are tax deductible and in good standing with the IRS"
    },
    "start": {
      "type": "string",
      "description": "Record Set Start Position"
    },
    "rows": {
      "type": "string",
      "description": "Records Per Page. Default Value = 20"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
