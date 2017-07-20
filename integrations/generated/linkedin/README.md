# @datafire/linkedin
Bring user profiles and professional networks to your apps.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: people._format_json.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Some members have profiles in multiple languages. To specify the language you prefer, set the values to a comma separated list of locales ordered from highest to lowest preference. For example, if your preferred order is Spanish, then English (American), and finally Italian, your header should be: Accept-Language: es-ES, en-US, it-IT. At present, we will always return data if possible. So, if you specify just one locale, but the member hasn't localized her profile for that locale, we will return data in her primary language. We support any language the member has specified. For example, for Simplified Chinese, use zh-CN. However, the six most popular languages are: en-US, fr-FR, de-DE, it-IT, pt-BR and es-ES."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: people._id_num_connections_picture_url_format_json.get


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: people._.shares_format_json.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type."
    },
    "x-li-format": {
      "type": "string",
      "description": "The content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "x-li-format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.is_company_share_enabled_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.relation_to_viewer.is_company_share_enabled_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies_format_json_is_company_admin_true.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start": {
      "type": "integer",
      "description": "The offset value for paginating company results by.",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "count": {
      "type": "integer",
      "description": "Maximum number of companies to return.",
      "maximum": 2147483647,
      "minimum": -2147483648
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: companies.id_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id_id_name_ticker_description_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.updates_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "event-type": {
      "type": "integer",
      "description": "The offset value for paginating update results by.",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "start": {
      "type": "integer",
      "description": "The offset value for paginating update results by.",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "count": {
      "type": "integer",
      "description": "Maximum number of updates to return.",
      "maximum": 2147483647,
      "minimum": -2147483648
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.updates.key_update_key_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "update-key": {
      "type": "string",
      "description": "The unique company update identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "update-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.updates.key_update_key.update_comments_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "update-key": {
      "type": "string",
      "description": "The unique company update identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "update-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.updates.key_update_key.likes_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "update-key": {
      "type": "string",
      "description": "The unique company update identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "update-key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.shares_format_json.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type."
    },
    "x-li-format": {
      "type": "string",
      "description": "The content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "Content-Type",
    "x-li-format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.num_followers_format_json_seniorities_vp_d_jobFunc_it_geos_na.ca.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "geos": {
      "type": "string",
      "description": "Segment by a particular geographic area."
    },
    "companySizes": {
      "type": "string",
      "description": "Segment by a particular company size targeting code."
    },
    "jobFunc": {
      "type": "string",
      "description": "Segment by member job function targeting code."
    },
    "industries": {
      "type": "string",
      "description": "Segment by member industry."
    },
    "seniorities": {
      "type": "string",
      "description": "Segment by member seniority level targeting code."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.updates.key_update_key.update_comments_as_company.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "update-key": {
      "type": "string",
      "description": "The unique company update identifier."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type."
    },
    "x-li-format": {
      "type": "string",
      "description": "The content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "update-key",
    "Content-Type",
    "x-li-format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.historical_follow_statistics_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "time-granularity": {
      "type": "string",
      "description": "Granularity of statistics. Supported values are:\n\t                day\n\t                month"
    },
    "start-timestamp": {
      "type": "string",
      "description": "Starting timestamp of when the stats search should begin (milliseconds since epoch)"
    },
    "end-timestamp": {
      "type": "string",
      "description": "Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "time-granularity",
    "start-timestamp"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.historical_status_update_statistics_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    },
    "time-granularity": {
      "type": "string",
      "description": "Granularity of statistics. Supported values are:\n\t                day\n\t                month"
    },
    "start-timestamp": {
      "type": "string",
      "description": "Starting timestamp of when the stats search should begin (milliseconds since epoch)"
    },
    "end-timestamp": {
      "type": "string",
      "description": "Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set."
    },
    "update-key": {
      "type": "string",
      "description": "Optionally provide an update key value to return statistics for a specific company update."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "time-granularity",
    "start-timestamp"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: companies.id.company_statistics_format_json.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique internal numeric company identifier."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
