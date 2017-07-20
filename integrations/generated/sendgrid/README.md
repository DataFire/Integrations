# @datafire/sendgrid
# The SendGrid Web API V3 Documentation

This is the entirety of the documented v3 endpoints. We have updated all the descriptions, parameters, requests, and responses.

## Authentication 

Every endpoint requires Authentication in the form of an Authorization Header:

Authorization: Bearer API_KEY

## Operation: access_settings.activity.get
**This endpoint allows you to retrieve a list of all of the IP addresses that recently attempted to access your account either through the User Interface or the API.**

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of IPs to return."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "properties": {
          "allowed": {
            "type": "boolean"
          },
          "auth_method": {
            "type": "string"
          },
          "first_at": {
            "type": "integer"
          },
          "ip": {
            "type": "string"
          },
          "last_at": {
            "type": "integer"
          },
          "location": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: access_settings.whitelist.delete
**This endpoint allows you to remove one or more IPs from your IP whitelist.**

You can remove one IP at a time, or you can remove multiple IP addresses.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "ids": [
          1,
          2,
          3
        ]
      },
      "properties": {
        "ids": {
          "description": "An array of the IDs of the IP address that you want to remove from your whitelist.",
          "items": {
            "type": "integer"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: access_settings.whitelist.get
**This endpoint allows you to retrieve a list of IP addresses that are currently whitelisted.**

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "description": "An array listing all of your whitelisted IPs.",
      "items": {
        "properties": {
          "created_at": {
            "description": "A Unix timestamp indicating when the IP was whitelisted.",
            "type": "integer"
          },
          "id": {
            "description": "The ID of the whitelisted IP.",
            "type": "integer"
          },
          "ip": {
            "description": "The whitelisted IP.",
            "type": "string"
          },
          "updated_at": {
            "description": "A Unix timestamp indicating when the IPs whitelisting status was most recently updated.",
            "type": "integer"
          }
        },
        "required": [
          "id",
          "ip",
          "created_at",
          "updated_at"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "result"
  ],
  "type": "object"
}
```
## Operation: access_settings.whitelist.post
**This endpoint allows you to add one or more IP addresses to your IP whitelist.**

When adding an IP to your whitelist, include the IP address in an array. You can whitelist one IP at a time, or you can whitelist multiple IPs at once.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "ips": [
          {
            "ip": "192.168.1.1"
          },
          {
            "ip": "192.*.*.*"
          },
          {
            "ip": "192.168.1.3/32"
          }
        ]
      },
      "properties": {
        "ips": {
          "description": "An array containing the IP(s) you want to whitelist.",
          "items": {
            "properties": {
              "ip": {
                "description": "An IP address that you want to whitelist.",
                "type": "string"
              }
            },
            "required": [
              "ip"
            ],
            "type": "object"
          },
          "type": "array"
        }
      },
      "required": [
        "ips"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "description": "An array listing all of your whitelisted IPs.",
      "items": {
        "properties": {
          "created_at": {
            "description": "A Unix timestamp indicating when the IP was whitelisted.",
            "type": "integer"
          },
          "id": {
            "description": "The ID of the whitelisted IP.",
            "type": "integer"
          },
          "ip": {
            "description": "The whitelisted IP.",
            "type": "string"
          },
          "updated_at": {
            "description": "A Unix timestamp indicating when the IPs whitelisting status was most recently updated.",
            "type": "integer"
          }
        },
        "required": [
          "id",
          "ip",
          "created_at",
          "updated_at"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "result"
  ],
  "type": "object"
}
```
## Operation: access_settings.whitelist.rule_id.delete
**This endpoint allows you to remove a specific IP address from your IP whitelist.**

When removing a specific IP address from your whitelist, you must include the ID in your call.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "The ID of the whitelisted IP address that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: access_settings.whitelist.rule_id.get
**This endpoint allows you to retreive a specific IP address that has been whitelisted.**

You must include the ID for the specific IP address you want to retrieve in your call.

IP Access Management allows you to control which IP addresses can be used to access your account, either through the User Interface or the API. There is no limit to the number of IP addresses that you can add to your whitelist. It is possible to remove your own IP address from the whitelist, thus preventing yourself from accessing your account.

For more information, please see our [User Guide](http://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rule_id": {
      "type": "string",
      "description": "The ID of the whitelisted IP address that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "rule_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "created_at": {
      "description": "A Unix timestamp indicating when the IP was whitelisted.",
      "type": "integer"
    },
    "id": {
      "description": "The ID of the IP address.",
      "type": "integer"
    },
    "ip": {
      "description": "The IP address.",
      "type": "string"
    },
    "updated_at": {
      "description": "A Unix timestamp indicating when the IP address was last updated.",
      "type": "integer"
    }
  },
  "required": [
    "id",
    "ip",
    "created_at",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: GET_alerts
**This endpoint allows you to retieve all of your alerts.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Authorization": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "The list of alerts.",
  "items": {
    "properties": {
      "created_at": {
        "description": "A Unix timestamp indicating when the alert was created.",
        "type": "integer"
      },
      "email_to": {
        "description": "The email address that the alert will be sent to.",
        "type": "string"
      },
      "frequency": {
        "description": "If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, \"daily\", \"weekly\", or \"monthly\".",
        "type": "string"
      },
      "id": {
        "description": "The ID of the alert.",
        "type": "integer"
      },
      "percentage": {
        "description": "If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.",
        "type": "integer"
      },
      "type": {
        "description": "The type of alert.",
        "enum": [
          "usage_limit",
          "stats_notification"
        ],
        "type": "string"
      },
      "updated_at": {
        "description": "A Unix timestamp indicating when the alert was last modified.",
        "type": "integer"
      }
    },
    "required": [
      "created_at",
      "email_to",
      "id",
      "type"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: POST_alerts
**This endpoint allows you to create a new alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "email_to": "example@example.com",
        "frequency": "daily",
        "type": "stats_notification"
      },
      "properties": {
        "email_to": {
          "description": "The email address the alert will be sent to.\nExample: test@example.com",
          "type": "string"
        },
        "frequency": {
          "description": "Required for stats_notification. How frequently the alert will be sent.\nExample: daily",
          "type": "string"
        },
        "percentage": {
          "description": "Required for usage_alert. When this usage threshold is reached, the alert will be sent.\nExample: 90",
          "type": "integer"
        },
        "type": {
          "description": "The type of alert you want to create. Can be either usage_alert or stats_notification.\nExample: usage_alert",
          "type": "string"
        }
      },
      "required": [
        "type",
        "email_to"
      ],
      "type": "object"
    },
    "Authorization": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "created_at": {
      "description": "A Unix timestamp indicating when the alert was created.",
      "type": "integer"
    },
    "email_to": {
      "description": "The email address that the alert will be sent to.",
      "type": "string"
    },
    "frequency": {
      "description": "If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, \"daily\", \"weekly\", or \"monthly\".",
      "type": "string"
    },
    "id": {
      "description": "The ID of the alert.",
      "type": "integer"
    },
    "percentage": {
      "description": "\"If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.",
      "type": "integer"
    },
    "type": {
      "description": "The type of alert.",
      "type": "string"
    },
    "updated_at": {
      "description": "A Unix timestamp indicating when the alert was last modified.",
      "type": "integer"
    }
  },
  "required": [
    "created_at",
    "email_to",
    "id",
    "type",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: alerts.alert_id.delete
**This endpoint allows you to delete an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "alert_id": {
      "type": "integer",
      "description": "The ID of the alert you would like to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "alert_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: alerts.alert_id.get
**This endpoint allows you to retrieve a specific alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": ""
    },
    "alert_id": {
      "type": "integer",
      "description": "The ID of the alert you would like to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "alert_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "created_at": {
      "description": "A Unix timestamp indicating when the alert was created.",
      "type": "integer"
    },
    "email_to": {
      "description": "The email address that the alert will be sent to.",
      "type": "string"
    },
    "frequency": {
      "description": "If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: \"daily\", \"weekly\", or \"monthly\".",
      "type": "string"
    },
    "id": {
      "description": "The ID of the alert.",
      "type": "integer"
    },
    "percentage": {
      "description": "If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.",
      "type": "integer"
    },
    "type": {
      "description": "The type of alert.",
      "enum": [
        "usage_alert",
        "stats_notification"
      ],
      "type": "string"
    },
    "updated_at": {
      "description": "A Unix timestamp indicating when the alert was last modified.",
      "type": "integer"
    }
  },
  "required": [
    "created_at",
    "email_to",
    "id",
    "type",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: alerts.alert_id.patch
**This endpoint allows you to update an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. 
* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/alerts.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "email_to": "example@example.com"
      },
      "properties": {
        "email_to": {
          "description": "The new email address you want your alert to be sent to.\nExample: test@example.com",
          "type": "string"
        },
        "frequency": {
          "description": "The new frequency at which to send the stats_notification alert.\nExample: monthly",
          "type": "string"
        },
        "percentage": {
          "description": "The new percentage threshold at which the usage_limit alert will be sent.\nExample: 90",
          "type": "integer"
        }
      },
      "type": "object"
    },
    "alert_id": {
      "type": "integer",
      "description": "The ID of the alert you would like to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "alert_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "created_at": {
      "description": "A Unix timestamp indicating when the alert was created.",
      "type": "integer"
    },
    "email_to": {
      "description": "The email address that the alert will be sent to.",
      "type": "string"
    },
    "frequency": {
      "description": "If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: \"daily\", \"weekly\", or \"monthly\".",
      "type": "string"
    },
    "id": {
      "description": "The ID of the alert.",
      "type": "integer"
    },
    "percentage": {
      "description": "If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent.",
      "type": "integer"
    },
    "type": {
      "description": "The type of alert.",
      "enum": [
        "usage_alert",
        "stats_notification"
      ],
      "type": "string"
    },
    "updated_at": {
      "description": "A Unix timestamp indicating when the alert was last modified.",
      "type": "integer"
    }
  },
  "required": [
    "created_at",
    "email_to",
    "id",
    "type",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: GET_api_keys
**This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "$ref": "#/definitions/api_key_name_id"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: api_keys.post
**This enpoint allows you to create a new random API Key for the user.**

A JSON request body containing a "name" property is required. If number of maximum keys is reached, HTTP 403 will be returned.

There is a limit of 100 API Keys on your account.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

See the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) for a list of all available scopes.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "name": "My API Key",
        "sample": "data",
        "scopes": [
          "mail.send",
          "alerts.create",
          "alerts.read"
        ]
      },
      "properties": {
        "name": {
          "description": "The name you will use to describe this API Key.",
          "type": "string"
        },
        "sample": {
          "type": "string"
        },
        "scopes": {
          "description": "The individual permissions that you are giving to this API Key.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "api_key": {
      "type": "string"
    },
    "api_key_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "scopes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: api_keys.api_key_id.delete
**This endpoint allows you to revoke an existing API Key**

Authentications using this API Key will fail after this request is made, with some small propogation delay.If the API Key ID does not exist an HTTP 404 will be returned.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are deleting.|

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: api_keys.api_key_id.get
**This endpoint allows you to retrieve a single api key.**

If the API Key ID does not exist an HTTP 404 will be returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "$ref": "#/definitions/api_key_name_id_scopes"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: api_keys.api_key_id.patch
**This endpoint allows you to update the name of an existing API Key.**

A JSON request body with a "name" property is required.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are updating.|

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "name": "A New Hope"
      },
      "properties": {
        "name": {
          "description": "The new name of the API Key.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "api_key_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/api_key_name_id"
}
```
## Operation: api_keys.api_key_id.put
**This endpoint allows you to update the name and scopes of a given API key.**

A JSON request body with a "name" property is required.
Most provide the list of all the scopes an api key should have.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "name": "A New Hope",
        "scopes": [
          "user.profile.read",
          "user.profile.update"
        ]
      },
      "properties": {
        "name": {
          "type": "string"
        },
        "scopes": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "api_key_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/api_key_name_id_scopes"
}
```
## Operation: asm.groups.get
**This endpoint allows you to retrieve information about multiple suppression groups.**

This endpoint will return information for each group ID that you include in your request. To add a group ID to your request, simply append `&id=` followed by the group ID.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

Suppression groups, or [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html), allow you to label a category of content that you regularly send. This gives your recipients the ability to opt out of a specific set of your email. For example, you might define a group for your transactional email, and one for your marketing email so that your users can continue recieving your transactional email witout having to receive your marketing content.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "description": "The ID of a suppression group that you want to retrieve information for."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/suppression_group"
  },
  "type": "array"
}
```
## Operation: asm.groups.post
**This endpoint allows you to create a new suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "description": "Suggestions for products our users might like.",
        "is_default": true,
        "name": "Product Suggestions"
      },
      "properties": {
        "description": {
          "description": "A brief description of your new suppression group.",
          "maxLength": 100,
          "type": "string"
        },
        "is_default": {
          "description": "Indicates if you would like this to be your default suppression group.",
          "type": "boolean"
        },
        "name": {
          "description": "The name that you would like to use for your new suppression group.",
          "maxLength": 30,
          "type": "string"
        }
      },
      "required": [
        "name",
        "description"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "description": {
      "description": "A brief description of the suppression group.",
      "type": "string"
    },
    "id": {
      "description": "The ID of the suppression group.",
      "type": "integer"
    },
    "is_default": {
      "description": "Indicates if this is the default suppression group.",
      "type": "boolean"
    },
    "name": {
      "description": "The name of the suppression group.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "description",
    "is_default"
  ],
  "type": "object"
}
```
## Operation: asm.groups.group_id.delete
**This endpoint allows you to delete a suppression group.**

You can only delete groups that have not been attached to sent mail in the last 60 days. If a recipient uses the "one-click unsubscribe" option on an email associated with a deleted group, that recipient will be added to the global suppression list.

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group_id": {
      "type": "integer",
      "description": "The id of the suppression group you want to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: asm.groups.group_id.get
**This endpoint allows you to retrieve a single suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group_id": {
      "type": "integer",
      "description": "The id of the suppression group you want to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "description": {
      "description": "The description of the suppression group.",
      "type": "string"
    },
    "id": {
      "description": "The ID of the suppression group.",
      "type": "integer"
    },
    "is_default": {
      "description": "Indicates if this is the default suppression group.",
      "type": "boolean"
    },
    "last_email_sent_at": {
      "description": "A unix timestamp indicating the last time this group was assigned to an email.",
      "type": "null"
    },
    "name": {
      "description": "The name of the suppression group.",
      "type": "string"
    },
    "unsubscribes": {
      "description": "The number of unsubscribes, or suppressions, in this group.",
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: asm.groups.group_id.patch
**This endpoint allows you to update or change a suppression group.**

Suppression groups, or unsubscribe groups, are specific types or categories of email that you would like your recipients to be able to unsubscribe from. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the unsubscribe group will be visible by recipients when they are managing their subscriptions.

Each user can create up to 25 different suppression groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "description": "Suggestions for items our users might like.",
        "id": 103,
        "name": "Item Suggestions"
      },
      "properties": {
        "description": {
          "description": "The description of the suppression group.",
          "maxLength": 100,
          "type": "string"
        },
        "id": {
          "description": "The id of the suppression group.",
          "type": "integer"
        },
        "is_default": {
          "description": "Indicates if the suppression group is set as the default group.",
          "type": "boolean"
        },
        "name": {
          "description": "The name of the suppression group. Each group created by a user must have a unique name.",
          "maxLength": 30,
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    },
    "group_id": {
      "type": "integer",
      "description": "The id of the suppression group you want to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/suppression_group"
}
```
## Operation: asm.groups.group_id.suppressions.get
**This endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group_id": {
      "type": "string",
      "description": "The id of the unsubscribe group that you are adding suppressions to."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "description": "The list of email addresses belonging to the given suppression group.",
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: asm.groups.group_id.suppressions.post
**This endpoint allows you to add email addresses to an unsubscribe group.**

If you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "recipient_emails": [
          "test1@example.com",
          "test2@example.com"
        ]
      },
      "properties": {
        "recipient_emails": {
          "description": "The email address that you want to add to the unsubscribe group.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "recipient_emails"
      ],
      "type": "object"
    },
    "group_id": {
      "type": "string",
      "description": "The id of the unsubscribe group that you are adding suppressions to."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "recipient_emails": {
      "description": "The email address that were added to the suppressions list.",
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "recipient_emails"
  ],
  "type": "object"
}
```
## Operation: asm.groups.group_id.suppressions.search.post
**This endpoint allows you to search a suppression group for multiple suppressions.**

When given a list of email addresses and a group ID, this endpoint will return only the email addresses that have been unsubscribed from the given group.

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "recipient_emails": [
          "exists1@example.com",
          "exists2@example.com",
          "doesnotexists@example.com"
        ]
      },
      "properties": {
        "recipient_emails": {
          "description": "The list of email address that you want to search the suppression group for.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "recipient_emails"
      ],
      "type": "object"
    },
    "group_id": {
      "type": "string",
      "description": "The ID of the suppression group that you would like to search."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "recipient_emails": {
      "description": "The email address from your search that do exist in the suppression group.",
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "recipient_emails"
  ],
  "type": "object"
}
```
## Operation: asm.groups.group_id.suppressions.email.delete
**This endpoint allows you to remove a suppressed email address from the given suppression group.**

Suppressions are recipient email addresses that are added to [unsubscribe groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html). Once a recipient's address is on the suppressions list for an unsubscribe group, they will not receive any emails that are tagged with that unsubscribe group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group_id": {
      "type": "string",
      "description": "The id of the suppression group that you are removing an email address from."
    },
    "email": {
      "type": "string",
      "description": "The email address that you want to remove from the suppression group."
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id",
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: asm.suppressions.get
**This endpoint allows you to retrieve a list of all suppressions.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created_at": {
        "description": "A UNIX timestamp indicating when the suppression was created.",
        "type": "integer"
      },
      "email": {
        "description": "The email address that was suppressed.",
        "type": "string"
      },
      "group_id": {
        "description": "The id of the suppression group that this email address belongs to.",
        "type": "integer"
      },
      "group_name": {
        "description": "The name of the suppression group that this email address belongs to.",
        "type": "string"
      }
    },
    "required": [
      "email",
      "group_id",
      "group_name",
      "created_at"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: asm.suppressions.global.post
**This endpoint allows you to add one or more email addresses to the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "recipient_emails": [
          "test1@example.com",
          "test2@example.com"
        ]
      },
      "properties": {
        "recipient_emails": {
          "description": "The email address, or addresses, that you want to add to the global suppressions group.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "recipient_emails": {
      "description": "The email addresses that are globally suppressed",
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "recipient_emails"
  ],
  "type": "object"
}
```
## Operation: asm.suppressions.global.email.delete
**This endpoint allows you to remove an email address from the global suppressions group.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: asm.suppressions.global.email.get
**This endpoint allows you to retrieve a global suppression. You can also use this endpoint to confirm if an email address is already globally suppresed.**

If the email address you include in the URL path parameter `{email}` is alreayd globally suppressed, the response will include that email address. If the address you enter for `{email}` is not globally suppressed, an empty JSON object `{}` will be returned.

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "recipient_email": {
      "description": "The email address that is globally suppressed. This will be an empty object if the email address you included in your call is not globally suppressed.",
      "type": "string"
    }
  },
  "required": [
    "recipient_email"
  ],
  "title": "Retrieve a Global Suppression response",
  "type": "object"
}
```
## Operation: asm.suppressions.email.get
**This endpoint returns the list of all groups that the given email address has been unsubscribed from.**

Suppressions are a list of email addresses that will not receive content sent under a given [group](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address that you want to search suppression groups for."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "suppressions": {
      "description": "The array of suppression groups.",
      "items": {
        "properties": {
          "description": {
            "description": "The description of the suppression group.",
            "type": "string"
          },
          "id": {
            "description": "The id of the suppression group.",
            "type": "integer"
          },
          "is_default": {
            "description": "Indicates if the suppression group  is set as the default.",
            "type": "boolean"
          },
          "name": {
            "description": "The name of the suppression group.",
            "type": "string"
          },
          "suppressed": {
            "description": "Indicates if the given email address is suppressed for this group.",
            "type": "boolean"
          }
        },
        "required": [
          "description",
          "id",
          "is_default",
          "name",
          "suppressed"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "suppressions"
  ],
  "type": "object"
}
```
## Operation: browsers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by browser type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today."
    },
    "limit": {
      "type": "string",
      "description": "The number of results to include on each page."
    },
    "offset": {
      "type": "string",
      "description": "The number of results to exclude."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the stats. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "browsers": {
      "type": "string",
      "description": "The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times."
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_clicks"
  },
  "type": "array"
}
```
## Operation: GET_campaigns
**This endpoint allows you to retrieve a list of all of your campaigns.**

Returns campaigns in reverse order they were created (newest first).

Returns an empty array if no campaigns exist.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results you would like to receive at a time."
    },
    "offset": {
      "type": "integer",
      "description": "The index of the first campaign to return, where 0 is the first campaign."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "properties": {
          "categories": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "custom_unsubscribe_url": {
            "type": "string"
          },
          "html_content": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "ip_pool": {
            "type": "string"
          },
          "list_ids": {
            "items": {
              "type": "integer"
            },
            "type": "array"
          },
          "plain_content": {
            "type": "string"
          },
          "segment_ids": {
            "items": {
              "type": "integer"
            },
            "type": "array"
          },
          "sender_id": {
            "type": "integer"
          },
          "status": {
            "type": "string"
          },
          "subject": {
            "type": "string"
          },
          "suppression_group_id": {
            "type": "integer"
          },
          "title": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: POST_campaigns
**This endpoint allows you to create a campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

Note: In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/campaign_request",
      "example": {
        "categories": [
          "spring line"
        ],
        "custom_unsubscribe_url": "",
        "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
        "ip_pool": "marketing",
        "list_ids": [
          110,
          124
        ],
        "plain_content": "Check out our spring line!",
        "segment_ids": [
          110
        ],
        "sender_id": 124451,
        "subject": "New Products for Spring!",
        "suppression_group_id": 42,
        "title": "March Newsletter"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/campaign_response"
}
```
## Operation: campaigns.campaign_id.delete
**This endpoint allows you to delete a specific campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "integer",
      "description": "The ID of the campaign that you would like to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: campaigns.campaign_id.get
**This endpoint allows you to retrieve a specific campaign.**

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "integer",
      "description": "The ID of the campaign that you would like to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "categories": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "custom_unsubscribe_url": {
      "type": "string"
    },
    "html_content": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    },
    "ip_pool": {
      "type": "string"
    },
    "list_ids": {
      "items": {
        "type": "integer"
      },
      "type": "array"
    },
    "plain_content": {
      "type": "string"
    },
    "segment_ids": {
      "items": {
        "type": "integer"
      },
      "type": "array"
    },
    "sender_id": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    },
    "suppression_group_id": {
      "type": "integer"
    },
    "title": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: campaigns.campaign_id.patch
Update a campaign. This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "categories": [
          "summer line"
        ],
        "html_content": "<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>",
        "plain_content": "Check out our summer line!",
        "subject": "New Products for Summer!",
        "title": "May Newsletter"
      },
      "properties": {
        "categories": {
          "description": "The categories you want to tag on this campaign.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "html_content": {
          "description": "The HTML content of this campaign.",
          "type": "string"
        },
        "plain_content": {
          "description": "The plain content of this campaign.",
          "type": "string"
        },
        "subject": {
          "description": "The subject line for your campaign.",
          "type": "string"
        },
        "title": {
          "description": "The title of the campaign.",
          "type": "string"
        }
      },
      "required": [
        "title",
        "subject",
        "categories",
        "html_content",
        "plain_content"
      ],
      "title": "Update a Campaign request",
      "type": "object"
    },
    "campaign_id": {
      "type": "integer",
      "description": "The ID of the campaign that you would like to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/campaign_response"
}
```
## Operation: campaigns.campaign_id.schedules.delete
**This endpoint allows you to unschedule a campaign that has already been scheduled to be sent.**

A successful unschedule will return a 204.
If the specified campaign is in the process of being sent, the only option is to cancel (a different method).

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: campaigns.campaign_id.schedules.get
**This endpoint allows you to retrieve the date and time that the given campaign has been scheduled to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "send_at": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "send_at"
  ],
  "title": "View Scheduled Time of a Campaign response",
  "type": "object"
}
```
## Operation: campaigns.campaign_id.schedules.patch
**This endpoint allows to you change the scheduled time and date for a campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "send_at": 1489451436
      },
      "properties": {
        "send_at": {
          "format": "int64",
          "type": "integer"
        }
      },
      "required": [
        "send_at"
      ],
      "title": "Update a Scheduled Campaign request",
      "type": "object"
    },
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "id": {
      "description": "The campaign ID",
      "type": "integer"
    },
    "send_at": {
      "description": "The unix timestamp to send the campaign.",
      "type": "integer"
    },
    "status": {
      "description": "The status of the schedule.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "send_at",
    "status"
  ],
  "title": "Update a Scheduled Campaign response",
  "type": "object"
}
```
## Operation: campaigns.campaign_id.schedules.post
**This endpoint allows you to schedule a specific date and time for your campaign to be sent.**

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "send_at": 1489771528
      },
      "properties": {
        "send_at": {
          "description": "The unix timestamp for the date and time you would like your campaign to be sent out.",
          "type": "integer"
        }
      },
      "required": [
        "send_at"
      ],
      "title": "Schedule a Campaign request",
      "type": "object"
    },
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "id": {
      "description": "The campaign ID.",
      "type": "integer"
    },
    "send_at": {
      "description": "The date time you scheduled your campaign to be sent.",
      "type": "integer"
    },
    "status": {
      "description": "The status of your campaign.",
      "enum": [
        "Scheduled"
      ],
      "type": "string"
    }
  },
  "required": [
    "id",
    "send_at",
    "status"
  ],
  "title": "Schedule a Campaign response",
  "type": "object"
}
```
## Operation: campaigns.campaign_id.schedules.now.post
**This endpoint allows you to immediately send a campaign at the time you make the API call.**

Normally a POST would have a request body, but since this endpoint is telling us to send a resource that is already created, a request body is not needed.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "id": {
      "format": "int64",
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "status"
  ],
  "title": "Send a Campaign response",
  "type": "object"
}
```
## Operation: campaigns.campaign_id.schedules.test.post
**This endpoint allows you to send a test campaign.**

To send to multiple addresses, use an array for the JSON "to" value ["one@address","two@address"]

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "to": "your.email@example.com"
      },
      "properties": {
        "to": {
          "description": "The email address that should receive the test campaign.",
          "format": "email",
          "type": "string"
        }
      },
      "required": [
        "to"
      ],
      "type": "object"
    },
    "campaign_id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "campaign_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "to": {
      "type": "string"
    }
  },
  "required": [
    "to"
  ],
  "title": "Send a Test Campaign request",
  "type": "object"
}
```
## Operation: GET_categories
**This endpoint allows you to retrieve a list of all of your categories.**

Categories can help organize your email analytics by enabling you to “tag” emails by type or broad topic. You can define your own custom categories. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of categories to display per page."
    },
    "category": {
      "type": "string",
      "description": "Allows you to perform a prefix search on this particular category."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list that you would like to begin displaying results."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "category": {
        "description": "A category used to group emails by broad topic.",
        "type": "string"
      }
    },
    "required": [
      "category"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: categories.stats.get
**This endpoint allows you to retrieve all of your email statistics for each of your categories.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html). 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD"
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "categories": {
      "type": "string",
      "description": "The individual categories that you want to retrieve statistics for. You may include up to 10 different categories."
    },
    "limit": {
      "type": "integer",
      "description": "The number of results to include.",
      "maximum": 500
    },
    "offset": {
      "type": "integer",
      "description": "The number of results to skip."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date",
    "categories"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/category_stats"
  },
  "type": "array"
}
```
## Operation: categories.stats.sums.get
**This endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

Categories allow you to group your emails together according to broad topics that you define. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/categories.html). 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sort_by_metric": {
      "type": "string",
      "description": "The metric that you want to sort by.  Must be a single metric."
    },
    "sort_by_direction": {
      "type": "string",
      "description": "The direction you want to sort.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "limit": {
      "type": "integer",
      "description": "Limits the number of results returned."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list to begin retrieving results."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/category_stats"
}
```
## Operation: clients.stats.get
**This endpoint allows you to retrieve your email statistics segmented by client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_opens"
  },
  "type": "array"
}
```
## Operation: clients.client_type.stats.get
**This endpoint allows you to retrieve your email statistics segmented by a specific client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Client Types
- phone
- tablet
- webmail
- desktop

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "client_type": {
      "type": "string",
      "description": "Specifies the type of client to retrieve stats for. Must be either \"phone\", \"tablet\", \"webmail\", or \"desktop\".",
      "enum": [
        "phone",
        "tablet",
        "webmail",
        "desktop"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date",
    "client_type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_opens"
  },
  "type": "array"
}
```
## Operation: contactdb.custom_fields.get
**This endpoint allows you to retrieve all custom fields.** 

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "custom_fields": {
      "items": {
        "$ref": "#/definitions/contactdb_custom_field_with_id"
      },
      "type": "array"
    }
  },
  "required": [
    "custom_fields"
  ],
  "title": "List All Custom Fields response",
  "type": "object"
}
```
## Operation: contactdb.custom_fields.post
**This endpoint allows you to create a custom field.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "name": "pet",
        "type": "text"
      },
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: contactdb.custom_fields.custom_field_id.delete
**This endpoint allows you to delete a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "custom_field_id": {
      "type": "integer",
      "description": "The ID of the custom field that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "custom_field_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/global:ErrorResponse"
}
```
## Operation: contactdb.custom_fields.custom_field_id.get
**This endpoint allows you to retrieve a custom field by ID.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "custom_field_id": {
      "type": "integer",
      "description": "The ID of the custom field that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "custom_field_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_custom_field_with_id"
}
```
## Operation: contactdb.lists.delete
**This endpoint allows you to delete multiple recipient lists.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": [
        1,
        2,
        3,
        4
      ],
      "items": {
        "type": "integer"
      },
      "type": "array"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.lists.get
**This endpoint allows you to retrieve all of your recipient lists. If you don't have any lists, an empty array will be returned.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "lists": {
      "items": {
        "$ref": "#/definitions/contactdb_list"
      },
      "type": "array"
    }
  },
  "required": [
    "lists"
  ],
  "title": "List All Lists response",
  "type": "object"
}
```
## Operation: contactdb.lists.post
**This endpoint allows you to create a list for your recipients.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "name": "your list name"
      },
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "title": "Create a List request",
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_list"
}
```
## Operation: contactdb.lists.list_id.delete
**This endpoint allows you to delete a specific recipient list with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "delete_contacts": {
      "type": "boolean",
      "description": "Adds the ability to delete all contacts on the list in addition to deleting the list.",
      "enum": [
        true,
        false
      ]
    },
    "list_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.lists.list_id.get
This endpoint allows you to retrieve a single recipient list.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "list_id_query": {
      "type": "integer",
      "description": "The ID of the list to retrieve."
    },
    "list_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_list"
}
```
## Operation: contactdb.lists.list_id.patch
**This endpoint allows you to update the name of one of your recipient lists.**


The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "list_id": {
      "type": "integer",
      "description": "The ID of the list you are updating."
    },
    "body": {
      "example": {
        "name": "newlistname"
      },
      "properties": {
        "name": {
          "description": "The new name for your list. ",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "title": "Update a List request",
      "type": "object"
    },
    "list_id_path": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id",
    "list_id_path"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: contactdb.lists.list_id.recipients.get
**This endpoint allows you to retrieve all recipients on the list with the given ID.** 

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page index of first recipient to return (must be a positive integer)"
    },
    "page_size": {
      "type": "integer",
      "description": "Number of recipients to return at a time (must be a positive integer between 1 and 1000)"
    },
    "list_id": {
      "type": "integer",
      "description": "The ID of the list whose recipients you are requesting."
    },
    "list_id_path": {
      "type": "integer",
      "description": "The id of the list of recipients you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id",
    "list_id_path"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "recipients": {
      "items": {
        "$ref": "#/definitions/contactdb_recipient"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: contactdb.lists.list_id.recipients.post
**This endpoint allows you to add multiple recipients to a list.**

Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": [
        "recipient_id1",
        "recipient_id2"
      ],
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "list_id": {
      "type": "integer",
      "description": "The id of the list of recipients you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.lists.list_id.recipients.recipient_id.delete
**This endpoint allows you to delete a single recipient from a list.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "list_id": {
      "type": "integer",
      "description": "The ID of the list you are taking this recipient away from."
    },
    "recipient_id": {
      "type": "integer",
      "description": "The ID of the recipient to take off the list."
    },
    "list_id_path": {
      "type": "integer",
      "description": "The ID of the list that you want to add the recipient to."
    },
    "recipient_id_path": {
      "type": "string",
      "description": "The ID of the recipient you are adding to the list."
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id",
    "recipient_id",
    "list_id_path",
    "recipient_id_path"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.lists.list_id.recipients.recipient_id.post
**This endpoint allows you to add a single recipient to a list.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "list_id": {
      "type": "integer",
      "description": "The ID of the list that you want to add the recipient to."
    },
    "recipient_id": {
      "type": "string",
      "description": "The ID of the recipient you are adding to the list."
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id",
    "recipient_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.recipients.delete
**This endpoint allows you to deletes one or more recipients.**

The body of an API call to this endpoint must include an array of recipient IDs of the recipients you want to delete.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": [
        "recipient_id1",
        "recipient_id2"
      ],
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: contactdb.recipients.get
**This endpoint allows you to retrieve all of your Marketing Campaigns recipients.**

Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "description": "Page index of first recipients to return (must be a positive integer)"
    },
    "page_size": {
      "type": "integer",
      "description": "Number of recipients to return at a time (must be a positive integer between 1 and 1000)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "recipients": {
      "items": {
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "recipients"
  ],
  "title": "List Recipients response",
  "type": "object"
}
```
## Operation: contactdb.recipients.patch
**This endpoint allows you to update one or more recipients.**

The body of an API call to this endpoint must include an array of one or more recipient objects.

It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": [
        {
          "email": "jones@example.com",
          "first_name": "Guy",
          "last_name": "Jones"
        }
      ],
      "items": {
        "properties": {
          "email": {
            "format": "email",
            "type": "string"
          },
          "first_name": {
            "description": "The first name of the recipient. This is one of the default custom fields.",
            "type": "string"
          },
          "last_name": {
            "description": "The last name of the recipient. This is one of the default custom fields.",
            "type": "string"
          }
        },
        "required": [
          "email"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_recipient_response"
}
```
## Operation: contactdb.recipients.post
**This endpoint allows you to add a Marketing Campaigns recipient.**

It is of note that you can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": [
        {
          "age": 25,
          "email": "example@example.com",
          "first_name": "",
          "last_name": "User"
        },
        {
          "age": 25,
          "email": "example2@example.com",
          "first_name": "Example",
          "last_name": "User"
        }
      ],
      "items": {
        "properties": {
          "age": {
            "type": "integer"
          },
          "email": {
            "description": "The email address of the recipient.",
            "format": "email",
            "type": "string"
          },
          "first_name": {
            "description": "The first name of the recipient.",
            "type": "string"
          },
          "last_name": {
            "description": "The last name of the recipient.",
            "type": "string"
          }
        },
        "required": [
          "email"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_recipient_response"
}
```
## Operation: contactdb.recipients.billable_count.get
**This endpoint allows you to retrieve the number of Marketing Campaigns recipients that you will be billed for.**

You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_recipient_count"
}
```
## Operation: contactdb.recipients.count.get
**This endpoint allows you to retrieve the total number of Marketing Campaigns recipients.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_recipient_count"
}
```
## Operation: contactdb.recipients.search.get
**This endpoint allows you to perform a search on all of your Marketing Campaigns recipients.**

field_name:

* is a variable that is substituted for your actual custom field name from your recipient.
* Text fields must be url-encoded. Date fields are searchable only by unix timestamp (e.g. 2/2/2015 becomes 1422835200)
* If field_name is a 'reserved' date field, such as created_at or updated_at, the system will internally convert
your epoch time to a date range encompassing the entire day. For example, an epoch time of 1422835600 converts to
Mon, 02 Feb 2015 00:06:40 GMT, but internally the system will search from Mon, 02 Feb 2015 00:00:00 GMT through
Mon, 02 Feb 2015 23:59:59 GMT.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "{field_name}": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "recipients": {
      "items": {
        "$ref": "#/definitions/contactdb_recipient"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: contactdb.recipients.recipient_id.delete
**This endpoint allows you to delete a single recipient with the given ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipient_id": {
      "type": "string",
      "description": "The ID of the recipient that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "recipient_id"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: contactdb.recipients.recipient_id.get
**This endpoint allows you to retrieve a single recipient by ID from your contact database.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipient_id": {
      "type": "string",
      "description": "The ID of the recipient that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "recipient_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_recipient"
}
```
## Operation: contactdb.recipients.recipient_id.lists.get
**This endpoint allows you to retrieve the lists that a given recipient belongs to.**

Each recipient can be on many lists. This endpoint gives you all of the lists that any one recipient has been added to.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipient_id": {
      "type": "string",
      "description": "The ID of the recipient for whom you are retrieving lists."
    }
  },
  "additionalProperties": false,
  "required": [
    "recipient_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "lists": {
      "items": {
        "$ref": "#/definitions/contactdb_list"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: contactdb.reserved_fields.get
**This endpoint allows you to list all fields that are reserved and can't be used for custom field names.**

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "reserved_fields": {
      "description": "The reserved fields that are already set up within custom fields.",
      "items": {
        "$ref": "#/definitions/contactdb_custom_field"
      },
      "type": "array"
    }
  },
  "required": [
    "reserved_fields"
  ],
  "title": "List fields that are reserved and can't be used for custom field names. response",
  "type": "object"
}
```
## Operation: contactdb.segments.get
**This endpoint allows you to retrieve all of your segments.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "segments": {
      "items": {
        "$ref": "#/definitions/contactdb_segments"
      },
      "type": "array"
    }
  },
  "required": [
    "segments"
  ],
  "title": "List All Segments response",
  "type": "object"
}
```
## Operation: contactdb.segments.post
**This endpoint allows you to create a segment.**

All recipients in your contactdb will be added or removed automatically depending on whether they match the criteria for this segment.

List Id:

* Send this to segment from an existing list
* Don't send this in order to segment from your entire contactdb.

Valid operators for create and update depend on the type of the field you are segmenting: 

* **Dates:** "eq", "ne", "lt" (before), "gt" (after) 
* **Text:** "contains", "eq" (is - matches the full field), "ne" (is not - matches any field where the entire field is not the condition value) 
* **Numbers:** "eq", "lt", "gt" 
* **Email Clicks and Opens:** "eq" (opened), "ne" (not opened) 

Segment conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either *clicks.campaign_identifier* or *opens.campaign_identifier*. The condition value should be a string containing the id of a completed campaign. 

Segments may contain multiple condtions, joined by an "and" or "or" in the "and_or" field. The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/contactdb_segments",
      "example": {
        "conditions": [
          {
            "and_or": "",
            "field": "last_name",
            "operator": "eq",
            "value": "Miller"
          },
          {
            "and_or": "and",
            "field": "last_clicked",
            "operator": "gt",
            "value": "01/02/2015"
          },
          {
            "and_or": "or",
            "field": "clicks.campaign_identifier",
            "operator": "eq",
            "value": "513"
          }
        ],
        "list_id": 4,
        "name": "Last Name Miller"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_segments_with_id"
}
```
## Operation: contactdb.segments.segment_id.delete
**This endpoint allows you to delete a segment from your recipients database.**

You also have the option to delete all the contacts from your Marketing Campaigns recipient database who were in this segment.

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "delete_contacts": {
      "type": "boolean",
      "description": "True to delete all contacts matching the segment in addition to deleting the segment"
    },
    "segment_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "segment_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: contactdb.segments.segment_id.get
**This endpoint allows you to retrieve a single segment with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "segment_id": {
      "type": "integer",
      "description": "The ID of the segment you want to request."
    },
    "segment_id_path": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "segment_id",
    "segment_id_path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_segments"
}
```
## Operation: contactdb.segments.segment_id.patch
**This endpoint allows you to update a segment.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "segment_id_query": {
      "type": "string",
      "description": "The ID of the segment you are updating."
    },
    "body": {
      "example": {
        "conditions": [
          {
            "and_or": "",
            "field": "last_name",
            "operator": "eq",
            "value": "Miller"
          }
        ],
        "list_id": 5,
        "name": "The Millers"
      },
      "properties": {
        "conditions": {
          "description": "The conditions by which this segment should be created.",
          "items": {
            "$ref": "#/definitions/contactdb_segments_conditions"
          },
          "type": "array"
        },
        "list_id": {
          "description": "The list ID you would like this segment to be built from.",
          "type": "number"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    },
    "segment_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "segment_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/contactdb_segments"
}
```
## Operation: contactdb.segments.segment_id.recipients.get
**This endpoint allows you to retrieve all of the recipients in a segment with the given ID.**

The Contacts API helps you manage your [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) recipients.

For more information about segments in Marketing Campaigns, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "page_size": {
      "type": "integer"
    },
    "segment_id": {
      "type": "integer",
      "description": "The ID of the segment from which you want to retrieve recipients."
    }
  },
  "additionalProperties": false,
  "required": [
    "segment_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "recipients": {
      "items": {
        "$ref": "#/definitions/contactdb_recipient"
      },
      "type": "array"
    }
  },
  "required": [
    "recipients"
  ],
  "title": "List Recipients On a Segment response",
  "type": "object"
}
```
## Operation: devices.stats.get
**This endpoint allows you to retrieve your email statistics segmented by the device type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Device Types
| **Device** | **Description** | **Example** |
|---|---|---|
| Desktop | Email software on desktop computer. | I.E., Outlook, Sparrow, or Apple Mail. |
| Webmail |	A web-based email client. | I.E., Yahoo, Google, AOL, or Outlook.com. |
| Phone | A smart phone. | iPhone, Android, Blackberry, etc.
| Tablet | A tablet computer. | iPad, android based tablet, etc. |
| Other | An unrecognized device. |

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today."
    },
    "limit": {
      "type": "integer",
      "description": "How many results to include on each page."
    },
    "offset": {
      "type": "integer",
      "description": "How many results to exclude."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_opens"
  },
  "type": "array"
}
```
## Operation: geo.stats.get
**This endpoint allows you to retrieve your email statistics segmented by country and state/province.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "How many results to include on each page."
    },
    "offset": {
      "type": "integer",
      "description": "How many results to exclude."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How you would like the statistics to be grouped. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must be in format YYYY-MM-DD"
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. "
    },
    "country": {
      "type": "string",
      "description": "The country you would like to see statistics for. Currently only supported for US and CA.",
      "enum": [
        "US",
        "CA"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_country"
  },
  "type": "array"
}
```
## Operation: GET_ips
**This endpoint allows you to retrieve a list of all assigned and unassigned IPs.**

Response includes warm up status, pools, assigned subusers, and whitelabel info. The start_date field corresponds to when warmup started for that IP.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ip": {
      "type": "string",
      "description": "The IP address to get"
    },
    "exclude_whitelabels": {
      "type": "boolean",
      "description": "Should we exclude whitelabels?"
    },
    "subuser": {
      "type": "string",
      "description": "The subuser you are requesting for."
    },
    "limit": {
      "type": "integer",
      "description": "The number of IPs you want returned at the same time."
    },
    "offset": {
      "type": "integer",
      "description": "The offset for the number of IPs that you are requesting."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "ip": {
        "description": "An IP address.",
        "type": "string"
      },
      "pools": {
        "description": "The IP pools that this IP has been added to.",
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "rdns": {
        "description": "The reverse DNS record for this IP address.",
        "type": "string"
      },
      "start_date": {
        "description": "The date that the IP address was entered into warmup.",
        "type": [
          "number",
          "null"
        ]
      },
      "subusers": {
        "description": "The subusers that are able to send email from this IP.",
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "warmup": {
        "description": "Indicates if this IP address is currently warming up.",
        "type": "boolean"
      },
      "whitelabeled": {
        "description": "Indicates if this IP address has been whitelabeled.",
        "type": "boolean"
      }
    },
    "required": [
      "ip",
      "subusers",
      "pools",
      "warmup",
      "start_date",
      "whitelabeled"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: ips.assigned.get
**This endpoint allows you to retrieve only assigned IP addresses.**

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "ip": {
        "description": "The IP address.",
        "type": "string"
      },
      "pools": {
        "description": "The IP pools that this IP address has been added to.",
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "start_date": {
        "description": "The start date that this IP address was entered into warmup.",
        "type": "integer"
      },
      "warmup": {
        "description": "Indicates if this IP address is currently warming up.",
        "type": "boolean"
      }
    },
    "required": [
      "ip",
      "pools",
      "warmup",
      "start_date"
    ],
    "type": "object"
  },
  "title": "List all assigned IPs response",
  "type": "array"
}
```
## Operation: ips.pools.get
**This endpoint allows you to retreive all of your IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ip_pool"
  },
  "type": "array"
}
```
## Operation: ips.pools.post
**This endpoint allows you to create an IP pool.**

**Each user can create up to 10 different IP pools.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "name": "marketing"
      },
      "properties": {
        "name": {
          "description": "The name of your new IP pool.",
          "maxLength": 64,
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_pool"
}
```
## Operation: ips.pools.pool_name.delete
**This endpoint allows you to delete an IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pool_name": {
      "type": "string",
      "description": "The name of the IP pool that you want to retrieve the IP addresses from."
    }
  },
  "additionalProperties": false,
  "required": [
    "pool_name"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: ips.pools.pool_name.get
**This endpoint allows you to list all of the IP addresses that are in a specific IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pool_name": {
      "type": "string",
      "description": "The name of the IP pool that you want to retrieve the IP addresses from."
    }
  },
  "additionalProperties": false,
  "required": [
    "pool_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ips": {
      "description": "The list of IP addresses that belong to this IP pool.",
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "pool_name": {
      "description": "The name of the IP pool.",
      "maxLength": 64,
      "type": "string"
    }
  },
  "required": [
    "pool_name"
  ],
  "type": "object"
}
```
## Operation: ips.pools.pool_name.put
**This endpoint allows you to update the name of an IP pool.**

IP Pools allow you to group your dedicated SendGrid IP addresses together. For example, you could create separate pools for your transactional and marketing email. When sending marketing emails, specify that you want to use the marketing IP pool. This allows you to maintain separate reputations for your different email traffic.

IP pools can only be used with whitelabeled IP addresses.

If an IP pool is NOT specified for an email, it will use any IP available, including ones in pools.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "name": "new_pool_name"
      },
      "properties": {
        "name": {
          "description": "The new name for your IP pool.",
          "maxLength": 64,
          "type": "string"
        }
      },
      "type": "object"
    },
    "pool_name": {
      "type": "string",
      "description": "The name of the IP pool that you want to retrieve the IP addresses from."
    }
  },
  "additionalProperties": false,
  "required": [
    "pool_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_pool"
}
```
## Operation: ips.pools.pool_name.ips.post
**This endpoint allows you to add an IP address to an IP pool.**

You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address to be added to a pool after your request is made.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "ip": "0.0.0.0"
      },
      "properties": {
        "ip": {
          "description": "The IP address that you want to add to an IP pool.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "pool_name": {
      "type": "string",
      "description": "The name of the IP pool that you want to add an IP address to."
    }
  },
  "additionalProperties": false,
  "required": [
    "pool_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ip": {
      "description": "The IP address.",
      "type": "string"
    },
    "pools": {
      "description": "The list of IP pools that this IP address has been added to.",
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "start_date": {
      "description": "A unix timestamp indicating when the warmup process began for the IP address.",
      "type": "integer"
    },
    "warmup": {
      "description": "Indicates if the IP address is in warmup.",
      "type": "boolean"
    }
  },
  "required": [
    "ip",
    "pools",
    "start_date",
    "warmup"
  ],
  "type": "object"
}
```
## Operation: ips.pools.pool_name.ips.ip.delete
**This endpoint allows you to remove an IP address from an IP pool.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pool_name": {
      "type": "string",
      "description": "The name of the IP pool that you are removing the IP address from."
    },
    "ip": {
      "type": "string",
      "description": "The IP address that you are removing."
    }
  },
  "additionalProperties": false,
  "required": [
    "pool_name",
    "ip"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: ips.warmup.get
**This endpoint allows you to retrieve all of your IP addresses that are currently warming up.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_warmup_response"
}
```
## Operation: ips.warmup.post
**This endpoint allows you to enter an IP address into warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "ip": "0.0.0.0"
      },
      "properties": {
        "ip": {
          "description": "The IP address that you want to begin warming up.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_warmup_response"
}
```
## Operation: ips.warmup.ip_address.delete
**This endpoint allows you to remove an IP address from warmup mode.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ip_address": {
      "type": "string",
      "description": "The IP address that you want to remove from warmup mode."
    }
  },
  "additionalProperties": false,
  "required": [
    "ip_address"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: ips.warmup.ip_address.get
**This endpoint allows you to retrieve the warmup status for a specific IP address.**

SendGrid can automatically warm up dedicated IP addresses by limiting the amount of mail that can be sent through them per hour, with the limit determined by how long the IP address has been in warmup. See the [warmup schedule](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) for more details on how SendGrid limits your email traffic for IPs in warmup.

For more general information about warming up IPs, please see our [Classroom](https://sendgrid.com/docs/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ip_address": {
      "type": "string",
      "description": "The IP address that you want to remove from warmup mode."
    }
  },
  "additionalProperties": false,
  "required": [
    "ip_address"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_warmup_response"
}
```
## Operation: ips.ip_address.get
**This endpoint allows you to see which IP pools a particular IP address has been added to.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ip_address": {
      "type": "string",
      "description": "The IP address you are retrieving the IP pools for."
    }
  },
  "additionalProperties": false,
  "required": [
    "ip_address"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ip": {
      "description": "The IP address.",
      "type": "string"
    },
    "pools": {
      "description": "The list of IP pools that this IP address belongs to.",
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "rdns": {
      "description": "The reverse DNS record for this IP address.",
      "type": "string"
    },
    "start_date": {
      "description": "The date that the IP address was entered into warmup.",
      "type": [
        "integer",
        "null"
      ]
    },
    "subusers": {
      "description": "The subusers that can send email using this IP address.",
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "warmup": {
      "description": "Indicates if this IP address is currently warming up.",
      "type": "boolean"
    },
    "whitelabeled": {
      "description": "Indicates if this IP address has been whitelabeled.",
      "type": "boolean"
    }
  },
  "required": [
    "ip",
    "subusers",
    "rdns",
    "pools",
    "warmup",
    "start_date",
    "whitelabeled"
  ],
  "type": "object"
}
```
## Operation: mail.batch.post
**This endpoint allows you to generate a new batch ID. This batch ID can be associated with scheduled sends via the mail/send endpoint.**

If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_batch_id"
}
```
## Operation: mail.batch.batch_id.get
**This endpoint allows you to validate a batch ID.**

If you set the SMTPAPI header `batch_id`, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_batch_id"
}
```
## Operation: mail.send.post
This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API. If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

* Top level parameters are referred to as "global".
* Individual fields within the personalizations array will override any other global, or “message level”, parameters that are defined outside of personalizations.

For an overview of the v3 Mail Send endpoint, please visit our [v3 API Reference](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html)

For more detailed information about how to use the v3 Mail Send endpoint, please visit our [Classroom](https://sendgrid.com/docs/Classroom/Send/v3_Mail_Send/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "asm": {
          "group_id": 1,
          "groups_to_display": [
            1,
            2,
            3
          ]
        },
        "attachments": [
          {
            "content": "[BASE64 encoded content block here]",
            "content_id": "ii_139db99fdb5c3704",
            "disposition": "inline",
            "filename": "file1.jpg",
            "name": "file1",
            "type": "jpg"
          }
        ],
        "batch_id": "[YOUR BATCH ID GOES HERE]",
        "categories": [
          "category1",
          "category2"
        ],
        "content": [
          {
            "type": "text/html",
            "value": "<html><p>Hello, world!</p><img src=[CID GOES HERE]></img></html>"
          }
        ],
        "custom_args": {
          "New Argument 1": "New Value 1",
          "activationAttempt": "1",
          "customerAccountNumber": "[CUSTOMER ACCOUNT NUMBER GOES HERE]"
        },
        "from": {
          "email": "sam.smith@example.com",
          "name": "Sam Smith"
        },
        "headers": {},
        "ip_pool_name": "[YOUR POOL NAME GOES HERE]",
        "mail_settings": {
          "bcc": {
            "email": "ben.doe@example.com",
            "enable": true
          },
          "bypass_list_management": {
            "enable": true
          },
          "footer": {
            "enable": true,
            "html": "<p>Thanks</br>The SendGrid Team</p>",
            "text": "Thanks,/n The SendGrid Team"
          },
          "sandbox_mode": {
            "enable": false
          },
          "spam_check": {
            "enable": true,
            "post_to_url": "http://example.com/compliance",
            "threshold": 3
          }
        },
        "personalizations": [
          {
            "bcc": [
              {
                "email": "sam.doe@example.com",
                "name": "Sam Doe"
              }
            ],
            "cc": [
              {
                "email": "jane.doe@example.com",
                "name": "Jane Doe"
              }
            ],
            "custom_args": {
              "New Argument 1": "New Value 1",
              "activationAttempt": "1",
              "customerAccountNumber": "[CUSTOMER ACCOUNT NUMBER GOES HERE]"
            },
            "headers": {
              "X-Accept-Language": "en",
              "X-Mailer": "MyApp"
            },
            "send_at": 1409348513,
            "subject": "Hello, World!",
            "substitutions": {
              "id": "substitutions",
              "type": "object"
            },
            "to": [
              {
                "email": "john.doe@example.com",
                "name": "John Doe"
              }
            ]
          }
        ],
        "reply_to": {
          "email": "sam.smith@example.com",
          "name": "Sam Smith"
        },
        "sections": {
          "section": {
            ":sectionName1": "section 1 text",
            ":sectionName2": "section 2 text"
          }
        },
        "send_at": 1409348513,
        "subject": "Hello, World!",
        "template_id": "[YOUR TEMPLATE ID GOES HERE]",
        "tracking_settings": {
          "click_tracking": {
            "enable": true,
            "enable_text": true
          },
          "ganalytics": {
            "enable": true,
            "utm_campaign": "[NAME OF YOUR REFERRER SOURCE]",
            "utm_content": "[USE THIS SPACE TO DIFFERENTIATE YOUR EMAIL FROM ADS]",
            "utm_medium": "[NAME OF YOUR MARKETING MEDIUM e.g. email]",
            "utm_name": "[NAME OF YOUR CAMPAIGN]",
            "utm_term": "[IDENTIFY PAID KEYWORDS HERE]"
          },
          "open_tracking": {
            "enable": true,
            "substitution_tag": "%opentrack"
          },
          "subscription_tracking": {
            "enable": true,
            "html": "If you would like to unsubscribe and stop receiving these emails <% clickhere %>.",
            "substitution_tag": "<%click here%>",
            "text": "If you would like to unsubscribe and stop receiveing these emails <% click here %>."
          }
        }
      },
      "properties": {
        "asm": {
          "description": "An object allowing you to specify how to handle unsubscribes.",
          "properties": {
            "group_id": {
              "description": "The unsubscribe group to associate with this email.",
              "type": "integer"
            },
            "groups_to_display": {
              "description": "An array containing the unsubscribe groups that you would like to be displayed on the unsubscribe preferences page.",
              "items": {
                "type": "integer"
              },
              "maxItems": 25,
              "type": "array"
            }
          },
          "required": [
            "group_id"
          ],
          "type": "object"
        },
        "attachments": {
          "description": "An array of objects in which you can specify any attachments you want to include.",
          "items": {
            "properties": {
              "content": {
                "description": "The Base64 encoded content of the attachment.",
                "minLength": 1,
                "type": "string"
              },
              "content_id": {
                "description": "The content id for the attachment. This is used when the disposition is set to “inline” and the attachment is an image, allowing the file to be displayed within the body of your email.",
                "type": "string"
              },
              "disposition": {
                "default": "attachment",
                "description": "The content-disposition of the attachment specifying how you would like the attachment to be displayed. For example, “inline” results in the attached file being displayed automatically within the message while “attachment” results in the attached file requiring some action to be taken before it is displayed (e.g. opening or downloading the file).",
                "enum": [
                  "inline",
                  "attachment"
                ],
                "type": "string"
              },
              "filename": {
                "description": "The filename of the attachment.",
                "type": "string"
              },
              "type": {
                "description": "The mime type of the content you are attaching. For example, “text/plain” or “text/html”.",
                "minLength": 1,
                "type": "string"
              }
            },
            "required": [
              "content",
              "filename"
            ],
            "type": "object"
          },
          "type": "array"
        },
        "batch_id": {
          "description": "This ID represents a batch of emails to be sent at the same time. Including a batch_id in your request allows you include this email in that batch, and also enables you to cancel or pause the delivery of that batch. For more information, see https://sendgrid.com/docs/API_Reference/Web_API_v3/cancel_schedule_send.html ",
          "type": "string"
        },
        "categories": {
          "description": "An array of category names for this message. Each category name may not exceed 255 characters. ",
          "items": {
            "maxLength": 255,
            "type": "string"
          },
          "maxItems": 10,
          "type": "array",
          "uniqueItems": true
        },
        "content": {
          "description": "An array in which you may specify the content of your email. You can include multiple mime types of content, but you must specify at least one mime type. To include more than one mime type, simply add another object to the array containing the `type` and `value` parameters.",
          "items": {
            "properties": {
              "type": {
                "description": "The mime type of the content you are including in your email. For example, “text/plain” or “text/html”.",
                "minLength": 1,
                "type": "string"
              },
              "value": {
                "description": "The actual content of the specified mime type that you are including in your email.",
                "minLength": 1,
                "type": "string"
              }
            },
            "required": [
              "type",
              "value"
            ],
            "type": "object"
          },
          "type": "array"
        },
        "custom_args": {
          "description": "Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This parameter is overridden by personalizations[x].custom_args if that parameter has been defined. Total custom args size may not exceed 10,000 bytes.",
          "type": "object"
        },
        "from": {
          "$ref": "#/definitions/email_object"
        },
        "headers": {
          "description": "An object containing key/value pairs of header names and the value to substitute for them. You must ensure these are properly encoded if they contain unicode characters. Must not be one of the reserved headers.",
          "type": "object"
        },
        "ip_pool_name": {
          "description": "The IP Pool that you would like to send this email from.",
          "maxLength": 64,
          "minLength": 2,
          "type": "string"
        },
        "mail_settings": {
          "description": "A collection of different mail settings that you can use to specify how you would like this email to be handled.",
          "properties": {
            "bcc": {
              "description": "This allows you to have a blind carbon copy automatically sent to the specified email address for every email that is sent.",
              "properties": {
                "email": {
                  "description": "The email address that you would like to receive the BCC.",
                  "format": "email",
                  "type": "string"
                },
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                }
              },
              "type": "object"
            },
            "bypass_list_management": {
              "description": "Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                }
              },
              "type": "object"
            },
            "footer": {
              "description": "The default footer that you would like included on every email.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "html": {
                  "description": "The HTML content of your footer.",
                  "type": "string"
                },
                "text": {
                  "description": "The plain text content of your footer.",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "sandbox_mode": {
              "description": "This allows you to send a test email to ensure that your request body is valid and formatted correctly.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                }
              },
              "type": "object"
            },
            "spam_check": {
              "description": "This allows you to test the content of your email for spam.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "post_to_url": {
                  "description": "An Inbound Parse URL that you would like a copy of your email along with the spam report to be sent to.",
                  "type": "string"
                },
                "threshold": {
                  "description": "The threshold used to determine if your content qualifies as spam on a scale from 1 to 10, with 10 being most strict, or most likely to be considered as spam.",
                  "maximum": 10,
                  "minimum": 1,
                  "type": "integer"
                }
              },
              "type": "object"
            }
          },
          "type": "object"
        },
        "personalizations": {
          "description": "An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled.",
          "items": {
            "properties": {
              "bcc": {
                "description": "An array of recipients who will receive a blind carbon copy of your email. Each object within this array may contain the name, but must always contain the email, of a recipient.",
                "items": {
                  "$ref": "#/definitions/email_object"
                },
                "maxItems": 1000,
                "type": "array"
              },
              "cc": {
                "description": "An array of recipients who will receive a copy of your email. Each object within this array may contain the name, but must always contain the email, of a recipient.",
                "items": {
                  "$ref": "#/definitions/email_object"
                },
                "maxItems": 1000,
                "type": "array"
              },
              "custom_args": {
                "description": "Values that are specific to this personalization that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. May not exceed 10,000 bytes.",
                "type": "object"
              },
              "headers": {
                "description": "A collection of JSON key/value pairs allowing you to specify specific handling instructions for your email. You may not overwrite the following headers: x-sg-id, x-sg-eid, received, dkim-signature, Content-Type, Content-Transfer-Encoding, To, From, Subject, Reply-To, CC, BCC",
                "type": "object"
              },
              "send_at": {
                "description": "A unix timestamp allowing you to specify when you want your email to be delivered. Scheduling more than 72 hours in advance is forbidden.",
                "type": "integer"
              },
              "subject": {
                "description": "The subject of your email. Char length requirements, according to the RFC - http://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit#answer-1592310",
                "minLength": 1,
                "type": "string"
              },
              "substitutions": {
                "description": "A collection of key/value pairs following the pattern \"substitution_tag\":\"value to substitute\". All are assumed to be strings. These substitutions will apply to the text and html content of the body of your email, in addition to the `subject` and `reply-to` parameters.",
                "maxProperties": 10000,
                "type": "object"
              },
              "to": {
                "description": "An array of recipients. Each object within this array may contain the name, but must always contain the email, of a recipient.",
                "items": {
                  "$ref": "#/definitions/email_object"
                },
                "maxItems": 1000,
                "minItems": 1,
                "type": "array"
              }
            },
            "required": [
              "to"
            ],
            "type": "object"
          },
          "maxItems": 1000,
          "type": "array",
          "uniqueItems": false
        },
        "reply_to": {
          "$ref": "#/definitions/email_object"
        },
        "sections": {
          "description": "An object of key/value pairs that define block sections of code to be used as substitutions.",
          "type": "object"
        },
        "send_at": {
          "description": "A unix timestamp allowing you to specify when you want your email to be delivered. This may be overridden by the personalizations[x].send_at parameter. Scheduling more ta 72 hours in advance is forbidden.",
          "type": "integer"
        },
        "subject": {
          "description": "The global, or “message level”, subject of your email. This may be overridden by personalizations[x].subject.",
          "minLength": 1,
          "type": "string"
        },
        "template_id": {
          "description": "The id of a template that you would like to use. If you use a template that contains a subject and content (either text or html), you do not need to specify those at the personalizations nor message level. ",
          "type": "string"
        },
        "tracking_settings": {
          "description": "Settings to determine how you would like to track the metrics of how your recipients interact with your email.",
          "properties": {
            "click_tracking": {
              "description": "Allows you to track whether a recipient clicked a link in your email.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "enable_text": {
                  "description": "Indicates if this setting should be included in the text/plain portion of your email.",
                  "type": "boolean"
                }
              },
              "type": "object"
            },
            "ganalytics": {
              "description": "Allows you to enable tracking provided by Google Analytics.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "utm_campaign": {
                  "description": "The name of the campaign.\t",
                  "type": "string"
                },
                "utm_content": {
                  "description": "Used to differentiate your campaign from advertisements.\t",
                  "type": "string"
                },
                "utm_medium": {
                  "description": "Name of the marketing medium. (e.g. Email)",
                  "type": "string"
                },
                "utm_source": {
                  "description": "Name of the referrer source. (e.g. Google, SomeDomain.com, or Marketing Email)",
                  "type": "string"
                },
                "utm_term": {
                  "description": "Used to identify any paid keywords.\t",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "open_tracking": {
              "description": "Allows you to track whether the email was opened or not, but including a single pixel image in the body of the content. When the pixel is loaded, we can log that the email was opened.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "substitution_tag": {
                  "description": "Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel.",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "subscription_tracking": {
              "description": "Allows you to insert a subscription management link at the bottom of the text and html bodies of your email. If you would like to specify the location of the link within your email, you may use the substitution_tag.",
              "properties": {
                "enable": {
                  "description": "Indicates if this setting is enabled.",
                  "type": "boolean"
                },
                "html": {
                  "description": "HTML to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag <% %>",
                  "type": "string"
                },
                "substitution_tag": {
                  "description": "A tag that will be replaced with the unsubscribe URL. for example: [unsubscribe_url]. If this parameter is used, it will override both the `text` and `html` parameters. The URL of the link will be placed at the substitution tag’s location, with no additional formatting.",
                  "type": "string"
                },
                "text": {
                  "description": "Text to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag <% %>",
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "type": "object"
        }
      },
      "required": [
        "personalizations",
        "from",
        "subject",
        "content"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: GET_mail_settings
**This endpoint allows you to retrieve a list of all mail settings.**

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of settings to return."
    },
    "offset": {
      "type": "integer",
      "description": "Where in the list of results to begin displaying settings."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "description": "The list of all mail settings.",
      "items": {
        "properties": {
          "description": {
            "description": "A description of the mail setting.",
            "type": "string"
          },
          "enabled": {
            "description": "Indicates if this mail setting is currently enabled.",
            "type": "boolean"
          },
          "name": {
            "description": "The name of the mail setting.",
            "type": "string"
          },
          "title": {
            "description": "The title of the mail setting.",
            "type": "string"
          }
        },
        "required": [
          "title",
          "enabled",
          "name",
          "description"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "result"
  ],
  "type": "object"
}
```
## Operation: mail_settings.address_whitelist.get
**This endpoint allows you to retrieve your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_address_whitelabel"
}
```
## Operation: mail_settings.address_whitelist.patch
**This endpoint allows you to update your current email address whitelist settings.**

The address whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the address whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": true,
        "list": [
          "email1@example.com",
          "example.com"
        ]
      },
      "properties": {
        "enabled": {
          "description": "Indicates if your email address whitelist is enabled.",
          "type": "boolean"
        },
        "list": {
          "description": "Either a single email address that you want whitelisted or a domain, for which all email addresses belonging to this domain will be whitelisted.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_address_whitelabel"
}
```
## Operation: mail_settings.bcc.get
**This endpoint allows you to retrieve your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_bcc"
}
```
## Operation: mail_settings.bcc.patch
**This endpoint allows you to update your current BCC mail settings.**

When the BCC mail setting is enabled, SendGrid will automatically send a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/mail_settings_patch",
      "example": {
        "email": "email@example.com",
        "enabled": false
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_patch"
}
```
## Operation: mail_settings.bounce_purge.get
**This endpoint allows you to retrieve your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_bounce_purge"
}
```
## Operation: mail_settings.bounce_purge.patch
**This endpoint allows you to update your current bounce purge settings.**

This setting allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/mail_settings_bounce_purge",
      "example": {
        "enabled": true,
        "hard_bounces": 5,
        "soft_bounces": 5
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_bounce_purge"
}
```
## Operation: mail_settings.footer.get
**This endpoint allows you to retrieve your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_footer"
}
```
## Operation: mail_settings.footer.patch
**This endpoint allows you to update your current Footer mail settings.**

The footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/mail_settings_footer",
      "example": {
        "enabled": true,
        "html_content": "...",
        "plain_content": "..."
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_footer"
}
```
## Operation: mail_settings.forward_bounce.get
**This endpoint allows you to retrieve your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_forward_bounce"
}
```
## Operation: mail_settings.forward_bounce.patch
**This endpoint allows you to update your current bounce forwarding mail settings.**

Activating this setting allows you to specify an email address to which bounce reports are forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/mail_settings_forward_bounce",
      "example": {
        "email": "example@example.com",
        "enabled": true
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_forward_bounce"
}
```
## Operation: mail_settings.forward_spam.get
**This endpoint allows you to retrieve your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_forward_spam"
}
```
## Operation: mail_settings.forward_spam.patch
**This endpoint allows you to update your current Forward Spam mail settings.**

Enabling the forward spam setting allows you to specify an email address to which spam reports will be forwarded.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/mail_settings_forward_spam",
      "example": {
        "email": "",
        "enabled": false
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_forward_spam"
}
```
## Operation: mail_settings.plain_content.get
**This endpoint allows you to retrieve your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "enabled": {
      "description": "Indicates if the Plain Content mail setting is enabled.",
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: mail_settings.plain_content.patch
**This endpoint allows you to update your current Plain Content mail settings.**

The plain content setting will automatically convert any plain text emails that you send to HTML before sending.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": false
      },
      "properties": {
        "enabled": {
          "description": "The new setting you would like to use for your Plain Content mail setting.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "enabled": {
      "description": "Indicates if your Plain Content mail setting is enabled.",
      "type": "boolean"
    }
  },
  "type": "object"
}
```
## Operation: mail_settings.spam_check.get
**This endpoint allows you to retrieve your current Spam Checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_spam_check"
}
```
## Operation: mail_settings.spam_check.patch
**This endpoint allows you to update your current spam checker mail settings.**

The spam checker filter notifies you when emails are detected that exceed a predefined spam threshold.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": true,
        "max_score": 5,
        "url": "url"
      },
      "properties": {
        "enabled": {
          "description": "Indicates if you want the spam check mail setting to be enabled or not.",
          "type": "boolean"
        },
        "max_score": {
          "default": 5,
          "description": "The new max score, or spam threshold that you would like to set for the spam checker.",
          "maximum": 10,
          "minimum": 1,
          "type": "integer"
        },
        "url": {
          "description": "The Inbound Parse URL where you would like your spam reports to be sent to.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_spam_check"
}
```
## Operation: mail_settings.template.get
**This endpoint allows you to retrieve your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/mail_settings_template"
}
```
## Operation: mail_settings.template.patch
**This endpoint allows you to update your current legacy email template settings.**

This setting refers to our original email templates. We currently support more fully featured [transactional templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html). 

The legacy email template setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages.

Mail settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) or [SMTP Relay](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": true,
        "html_content": "<% body %>"
      },
      "properties": {
        "enabled": {
          "description": "Indicates if you want to enable the legacy email template mail setting.",
          "type": "boolean"
        },
        "html_content": {
          "description": "The new HTML content for your legacy email template.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "enabled": {
      "description": "Indicates if the legacy email template mail setting is enabled.",
      "type": "boolean"
    },
    "html_content": {
      "description": "The HTML content of your legacy email template.",
      "type": "string"
    }
  },
  "required": [
    "enabled",
    "html_content"
  ],
  "type": "object"
}
```
## Operation: mailbox_providers.stats.get
**This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to include on each page."
    },
    "offset": {
      "type": "integer",
      "description": "The number of results to exclude."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the stats. Must be either \"day\", \"wee\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "mailbox_providers": {
      "type": "string",
      "description": "The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times."
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/advanced_stats_mailbox_provider"
  },
  "type": "array"
}
```
## Operation: GET_partner_settings
**This endpoint allows you to retrieve a list of all partner settings that you can enable.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of settings to return per page."
    },
    "offset": {
      "type": "integer",
      "description": "The paging offset."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "properties": {
          "description": {
            "description": "A description of this partner setting.",
            "type": "string"
          },
          "enabled": {
            "description": "Indicates if this partner setting has been enabled.",
            "type": "boolean"
          },
          "name": {
            "description": "The name of the partner setting.",
            "type": "string"
          },
          "title": {
            "description": "The title of the partner.",
            "type": "string"
          }
        },
        "required": [
          "title",
          "enabled",
          "name",
          "description"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: partner_settings.new_relic.get
**This endpoint allows you to retrieve your current New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/partner_settings_new_relic"
}
```
## Operation: partner_settings.new_relic.patch
**This endpoint allows you to update or change your New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enable_subuser_statistics": true,
        "enabled": true,
        "license_key": ""
      },
      "properties": {
        "enable_subuser_statistics": {
          "description": "Indicates if your subuser statistics will be sent to your New Relic Dashboard.",
          "type": "boolean"
        },
        "enabled": {
          "description": "Indicates if this partner setting is enabled.",
          "type": "boolean"
        },
        "license_key": {
          "description": "The license key for your New Relic account.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/partner_settings_new_relic"
}
```
## Operation: GET_scopes
**This endpoint returns a list of all scopes that this user has access to.**

API Keys can be used to authenticate the use of [SendGrid’s v3 Web API](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html), or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access. For a more detailed explanation of how you can use API Key permissios, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/api_keys.html#-API-Key-Permissions) or [Classroom](https://sendgrid.com/docs/Classroom/Basics/API/api_key_permissions.html). 

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "scopes": {
      "description": "The list of scopes for which this user has access.",
      "items": {
        "type": "string"
      },
      "type": "array",
      "uniqueItems": true
    }
  },
  "required": [
    "scopes"
  ],
  "type": "object"
}
```
## Operation: senders.get
**This endpoint allows you to retrieve a list of all sender identities that have been created for your account.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "items": {
        "$ref": "#/definitions/senderID"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: POST_senders
**This endpoint allows you to create a new sender identity.**

*You may create up to 100 unique sender identities.*

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "address": "123 Elm St.",
        "address_2": "Apt. 456",
        "city": "Denver",
        "country": "United States",
        "from": {
          "email": "from@example.com",
          "name": "Example INC"
        },
        "nickname": "My Sender ID",
        "reply_to": {
          "email": "replyto@example.com",
          "name": "Example INC"
        },
        "state": "Colorado",
        "zip": "80202"
      },
      "properties": {
        "address": {
          "description": "The physical address of the sender identity.",
          "type": "string"
        },
        "address_2": {
          "description": "Additional sender identity address information.",
          "type": "string"
        },
        "city": {
          "description": "The city of the sender identity.",
          "type": "string"
        },
        "country": {
          "description": "The country of the sender identity.",
          "type": "string"
        },
        "from": {
          "properties": {
            "email": {
              "description": "This is where the email will appear to originate from for your recipient",
              "type": "string"
            },
            "name": {
              "description": "This is the name appended to the from email field. IE - Your name or company name.",
              "type": "string"
            }
          },
          "required": [
            "email"
          ],
          "type": "object"
        },
        "nickname": {
          "description": "A nickname for the sender identity. Not used for sending.",
          "type": "string"
        },
        "reply_to": {
          "properties": {
            "email": {
              "description": "This is the email that your recipient will reply to.",
              "type": "string"
            },
            "name": {
              "description": "This is the name appended to the reply to email field. IE - Your name or company name.",
              "type": "string"
            }
          },
          "required": [
            "email"
          ],
          "type": "object"
        },
        "state": {
          "description": "The state of the sender identity.",
          "type": "string"
        },
        "zip": {
          "description": "The zipcode of the sender identity.",
          "type": "string"
        }
      },
      "required": [
        "nickname",
        "address",
        "city",
        "country"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/senderID"
}
```
## Operation: senders.sender_id.delete
**This endoint allows you to delete one of your sender identities.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sender_id": {
      "type": "integer",
      "description": "The ID of the sender identity that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "sender_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: senders.sender_id.get
**This endpoint allows you to retrieve a specific sender identity.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sender_id": {
      "type": "integer",
      "description": "The ID of the sender identity that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "sender_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/senderID"
}
```
## Operation: senders.sender_id.patch
**This endpoint allows you to update a sender identity.**

Updates to `from.email` require re-verification. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "address": "123 Elm St.",
        "address_2": "Apt. 456",
        "city": "Denver",
        "country": "United States",
        "from": {
          "email": "from@example.com",
          "name": "Example INC"
        },
        "nickname": "My Sender ID",
        "reply_to": {
          "email": "replyto@example.com",
          "name": "Example INC"
        },
        "state": "Colorado",
        "zip": "80202"
      },
      "properties": {
        "address": {
          "description": "The physical address of the sender identity.",
          "type": "string"
        },
        "address_2": {
          "description": "Additional sender identity address information.",
          "type": "string"
        },
        "city": {
          "description": "The city of the sender identity.",
          "type": "string"
        },
        "country": {
          "description": "The country of the sender identity.",
          "type": "string"
        },
        "from": {
          "properties": {
            "email": {
              "description": "This is where the email will appear to originate from for your recipient",
              "type": "string"
            },
            "name": {
              "description": "This is the name appended to the from email field. IE - Your name or company name.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "nickname": {
          "description": "A nickname for the sender identity. Not used for sending.",
          "type": "string"
        },
        "reply_to": {
          "properties": {
            "email": {
              "description": "This is the email that your recipient will reply to.",
              "type": "string"
            },
            "name": {
              "description": "This is the name appended to the reply to email field. IE - Your name or company name.",
              "type": "string"
            }
          },
          "type": "object"
        },
        "state": {
          "description": "The state of the sender identity.",
          "type": "string"
        },
        "zip": {
          "description": "The zipcode of the sender identity.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "sender_id": {
      "type": "integer",
      "description": "The ID of the sender identity that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "sender_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/senderID"
}
```
## Operation: senders.sender_id.resend_verification.post
**This enpdoint allows you to resend a sender identity verification email.**

Sender Identities are required to be verified before use. If your domain has been whitelabeled it will auto verify on creation. Otherwise an email will be sent to the `from.email`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sender_id": {
      "type": "integer",
      "description": "The ID of the sender identity for which you would like to resend a verification email."
    }
  },
  "additionalProperties": false,
  "required": [
    "sender_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: GET_stats
**This endpoint allows you to retrieve all of your global email statistics between a given date range.**

Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to return."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list to begin retrieving results."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "date": {
        "description": "The date the stats were gathered.",
        "type": "string"
      },
      "stats": {
        "description": "The individual email activity stats.",
        "items": {
          "properties": {
            "metrics": {
              "properties": {
                "blocks": {
                  "description": "The number of emails that were not allowed to be delivered by ISPs.",
                  "type": "integer"
                },
                "bounce_drops": {
                  "description": "The number of emails that were dropped because of a bounce.",
                  "type": "integer"
                },
                "bounces": {
                  "description": "The number of emails that bounced instead of being delivered.",
                  "type": "integer"
                },
                "clicks": {
                  "description": "The number of links that were clicked in your emails.",
                  "type": "integer"
                },
                "deferred": {
                  "description": "The number of emails that temporarily could not be delivered. ",
                  "type": "integer"
                },
                "delivered": {
                  "description": "The number of emails SendGrid was able to confirm were actually delivered to a recipient.",
                  "type": "integer"
                },
                "invalid_emails": {
                  "description": "The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid.",
                  "type": "integer"
                },
                "opens": {
                  "description": "The total number of times your emails were opened by recipients.",
                  "type": "integer"
                },
                "processed": {
                  "description": "Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.",
                  "type": "integer"
                },
                "requests": {
                  "description": "The number of emails that were requested to be delivered.",
                  "type": "integer"
                },
                "spam_report_drops": {
                  "description": "The number of emails that were dropped due to a recipient previously marking your emails as spam.",
                  "type": "integer"
                },
                "spam_reports": {
                  "description": "The number of recipients who marked your email as spam.",
                  "type": "integer"
                },
                "unique_clicks": {
                  "description": "The number of unique recipients who clicked links in your emails.",
                  "type": "integer"
                },
                "unique_opens": {
                  "description": "The number of unique recipients who opened your emails.",
                  "type": "integer"
                },
                "unsubscribe_drops": {
                  "description": "The number of emails dropped due to a recipient unsubscribing from your emails.",
                  "type": "integer"
                },
                "unsubscribes": {
                  "description": "The number of recipients who unsubscribed from your emails.",
                  "type": "integer"
                }
              },
              "type": "object"
            }
          },
          "type": "object"
        },
        "type": "array"
      }
    },
    "required": [
      "date",
      "stats"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: GET_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "username": {
      "type": "string",
      "description": "The username of this subuser."
    },
    "limit": {
      "type": "integer",
      "description": "The number of results you would like to get in each request."
    },
    "offset": {
      "type": "integer",
      "description": "The number of subusers to skip."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/subuser"
  },
  "type": "array"
}
```
## Operation: POST_subusers
This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "email": "John@example.com",
        "ips": [
          "1.1.1.1",
          "2.2.2.2"
        ],
        "password": "johns_password",
        "username": "John@example.com"
      },
      "properties": {
        "email": {
          "description": "The email address of the subuser.",
          "format": "email",
          "type": "string"
        },
        "ips": {
          "description": "The IP addresses that should be assigned to this subuser.",
          "items": {
            "format": "ipv4",
            "type": "string"
          },
          "type": "array"
        },
        "password": {
          "description": "The password this subuser will use when logging into SendGrid.",
          "type": "string"
        },
        "username": {
          "description": "The username for this subuser.",
          "type": "string"
        }
      },
      "required": [
        "username",
        "email",
        "password",
        "ips"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subuser_post"
}
```
## Operation: subusers.reputations.get
Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will effect your sender rating.

This endpoint allows you to request the reputations for your subusers.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "usernames": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "reputation": {
        "description": "The sender reputation this subuser has attained.",
        "type": "number"
      },
      "username": {
        "description": "The subuser that has this reputation.f",
        "type": "string"
      }
    },
    "required": [
      "reputation",
      "username"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: subusers.stats.get
**This endpoint allows you to retrieve the email statistics for the given subusers.**

You may retrieve statistics for up to 10 different subusers by including an additional _subusers_ parameter for each additional subuser.

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of results returned per page."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list to begin retrieving results from."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\".",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "subusers": {
      "type": "string",
      "description": "The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers."
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today."
    }
  },
  "additionalProperties": false,
  "required": [
    "subusers",
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/stats"
}
```
## Operation: subusers.stats.monthly.get
**This endpoint allows you to retrieve the monthly email statistics for all subusers over the given date range.**

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date": {
      "type": "string",
      "description": "The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD"
    },
    "subuser": {
      "type": "string",
      "description": "A substring search of your subusers."
    },
    "sort_by_metric": {
      "type": "string",
      "description": "The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'"
    },
    "sort_by_direction": {
      "type": "string",
      "description": "The direction you want to sort.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "limit": {
      "type": "integer",
      "description": "Optional field to limit the number of results returned."
    },
    "offset": {
      "type": "integer",
      "description": "Optional beginning point in the list to retrieve from."
    }
  },
  "additionalProperties": false,
  "required": [
    "date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subuser_stats"
}
```
## Operation: subusers.stats.sums.get
**This endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**


While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sort_by_direction": {
      "type": "string",
      "description": "The direction you want to sort. ",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD."
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "limit": {
      "type": "integer",
      "description": "Limits the number of results returned per page."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list to begin retrieving results from."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD."
    },
    "sort_by_metric": {
      "type": "string",
      "description": "The metric that you want to sort by.  Must be a single metric."
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/category_stats"
}
```
## Operation: subusers.subuser_name.delete
This endpoint allows you to delete a subuser. This is a permanent action, once deleted a subuser cannot be retrieved.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subuser_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: subusers.subuser_name.patch
This endpoint allows you to enable or disable a subuser.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "disabled": false
      },
      "properties": {
        "disabled": {
          "description": "Whether or not this subuser is disabled. True means disabled, False means enabled.",
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "subuser_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: subusers.subuser_name.ips.put
Each subuser should be assigned to an IP address, from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have their own, or multiple, IP addresses as well. 

More information:

* [How to request more IPs](https://sendgrid.com/docs/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)
* [IPs can be whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/ips.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "description": "The IP addresses you would like to assign to the subuser.",
      "example": [
        "127.0.0.1"
      ],
      "items": {
        "format": "ipv4",
        "type": "string"
      },
      "type": "array"
    },
    "subuser_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "ips": {
      "description": "The IP addresses that are assigned to the subuser.",
      "items": {
        "format": "ipv4",
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: subusers.subuser_name.monitor.delete
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subuser_name": {
      "type": "string",
      "description": "The name of the subuser for which to retrieve monitor settings."
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "properties": {},
  "type": "object"
}
```
## Operation: subusers.subuser_name.monitor.get
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subuser_name": {
      "type": "string",
      "description": "The name of the subuser for which to retrieve monitor settings."
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/monitor"
}
```
## Operation: subusers.subuser_name.monitor.post
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/monitor",
      "example": {
        "email": "example@example.com",
        "frequency": 50000
      }
    },
    "subuser_name": {
      "type": "string",
      "description": "The name of the subuser for which to retrieve monitor settings."
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/monitor"
}
```
## Operation: subusers.subuser_name.monitor.put
Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/monitor",
      "example": {
        "email": "example@example.com",
        "frequency": 500
      }
    },
    "subuser_name": {
      "type": "string",
      "description": "The name of the subuser for which to retrieve monitor settings."
    }
  },
  "additionalProperties": false,
  "required": [
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/monitor"
}
```
## Operation: subusers.subuser_name.stats.monthly.get
**This endpoint allows you to retrive the monthly email statistics for a specific subuser.**

While you can always view the statistics for all email activity on your account, subuser statistics enable you to view specific segments of your stats for your subusers. Emails sent, bounces, and spam reports are always tracked for subusers. Unsubscribes, clicks, and opens are tracked if you have enabled the required settings.

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

For more information, see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/subuser.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "date": {
      "type": "string",
      "description": "The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD"
    },
    "sort_by_metric": {
      "type": "string",
      "description": "The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'"
    },
    "sort_by_direction": {
      "type": "string",
      "description": "The direction you want to sort.",
      "enum": [
        "desc",
        "asc"
      ]
    },
    "limit": {
      "type": "integer",
      "description": "Optional field to limit the number of results returned."
    },
    "offset": {
      "type": "integer",
      "description": "Optional beginning point in the list to retrieve from."
    },
    "subuser_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "date",
    "subuser_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subuser_stats"
}
```
## Operation: suppression.blocks.delete
**This endpoint allows you to delete all email addresses on your blocks list.**

There are two options for deleting blocked emails: 

1. You can delete all blocked emails by setting `delete_all` to true in the request body. 
2. You can delete some blocked emails by specifying the email addresses in an array in the request body.

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "delete_all": false,
        "emails": [
          "example1@example.com",
          "example2@example.com"
        ]
      },
      "properties": {
        "delete_all": {
          "description": "Indicates if you want to delete all blocked email addresses.",
          "type": "boolean"
        },
        "emails": {
          "description": "The specific blocked email addresses that you want to delete.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: suppression.blocks.get
**This endpoint allows you to retrieve a list of all email addresses that are currently on your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start_time": {
      "type": "integer",
      "description": "Refers start of the time range in unix timestamp when a blocked email was created (inclusive)."
    },
    "end_time": {
      "type": "integer",
      "description": "Refers end of the time range in unix timestamp when a blocked email was created (inclusive)."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of results to be displayed per page."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list to begin displaying results."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the email address was added to the blocks list.",
        "type": "integer"
      },
      "email": {
        "description": "The email address that was added to the block list.",
        "type": "string"
      },
      "reason": {
        "description": "An explanation for the reason of the block.",
        "type": "string"
      },
      "status": {
        "description": "The status of the block.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "reason",
      "status"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.blocks.email.delete
**This endpoint allows you to delete a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The blocked email address that you want to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: suppression.blocks.email.get
**This endpoint allows you to retrieve a specific email address from your blocks list.**

[Blocks](https://sendgrid.com/docs/Glossary/blocks.html) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The blocked email address that you want to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the block was created.",
        "type": "integer"
      },
      "email": {
        "description": "The email address of the recipient that was blocked.",
        "type": "string"
      },
      "reason": {
        "description": "The reason why the email was blocked.",
        "type": "string"
      },
      "status": {
        "description": "The status of the block.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "reason"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.bounces.delete
**This endpoint allows you to delete all of your bounces. You can also use this endpoint to remove a specific email address from your bounce list.**

Bounces are messages that are returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

Note: the `delete_all` and `emails` parameters should be used independently of each other as they have different purposes.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "delete_all": true,
        "emails": [
          "example@example.com",
          "example2@example.com"
        ]
      },
      "properties": {
        "delete_all": {
          "description": "This parameter allows you to delete **every** email in your bounce list. This should not be used with the emails parameter.",
          "type": "boolean"
        },
        "emails": {
          "description": "Delete multiple emails from your bounce list at the same time. This should not be used with the delete_all parameter.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: suppression.bounces.get
**This endpoint allows you to retrieve all of your bounces.**

Bounces are messages that are returned to the server that sent it. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_time": {
      "type": "integer",
      "description": "Refers start of the time range in unix timestamp when a bounce was created (inclusive)."
    },
    "end_time": {
      "type": "integer",
      "description": "Refers end of the time range in unix timestamp when a bounce was created (inclusive)."
    },
    "Accept": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "type": "number"
      },
      "email": {
        "type": "string"
      },
      "reason": {
        "type": "string"
      },
      "status": {
        "type": "string"
      }
    },
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.bounces.email.delete
**This endpoint allows you to remove an email address from your bounce list.**

Bounces are messages that are returned to the server that sent it. This endpoint allows you to delete a single email addresses from your bounce list. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email_address": {
      "type": "string",
      "format": "email",
      "description": "The email address you would like to remove from the bounce list."
    },
    "email": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "email_address",
    "email"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: suppression.bounces.email.get
**This endpoint allows you to retrieve a specific bounce for a given email address.**

Bounces are messages that are returned to the server that sent it.

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "type": "integer"
      },
      "email": {
        "type": "string"
      },
      "reason": {
        "type": "string"
      },
      "status": {
        "type": "string"
      }
    },
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.invalid_emails.delete
**This endpoint allows you to remove email addresses from your invalid email address list.**

There are two options for deleting invalid email addresses: 

1) You can delete all invalid email addresses by setting `delete_all` to true in the request body.
2) You can delete some invalid email addresses by specifying certain addresses in an array in the request body.

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "delete_all": false,
        "emails": [
          "example1@example.com",
          "example2@example.com"
        ]
      },
      "properties": {
        "delete_all": {
          "description": "Indicates if you want to remove all email address from the invalid emails list.",
          "type": "boolean"
        },
        "emails": {
          "description": "The list of specific email addresses that you want to remove.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: suppression.invalid_emails.get
**This endpoint allows you to retrieve a list of all invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start_time": {
      "type": "integer",
      "description": "Refers start of the time range in unix timestamp when an invalid email was created (inclusive)."
    },
    "end_time": {
      "type": "integer",
      "description": "Refers end of the time range in unix timestamp when an invalid email was created (inclusive)."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of results to be displayed per page."
    },
    "offset": {
      "type": "integer",
      "description": "Paging offset. The point in the list to begin displaying results."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "The list of invalid email addresses.",
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the email address was added to the invalid emails list.",
        "type": "integer"
      },
      "email": {
        "description": "The email address that was marked as invalid.",
        "type": "string"
      },
      "reason": {
        "description": "The reason that the email address was marked as invalid.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "reason"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.invalid_emails.email.delete
**This endpoint allows you to remove a specific email address from the invalid email address list.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The specific email address of the invalid email entry that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: suppression.invalid_emails.email.get
**This endpoint allows you to retrieve a specific invalid email addresses.**

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient’s mail server.

Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The specific email address of the invalid email entry that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the email address was added to the invalid emails list.",
        "type": "integer"
      },
      "email": {
        "description": "The email address that was marked as invalid.",
        "type": "string"
      },
      "reason": {
        "description": "A reason explaining why the email address was marked as invalid.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "reason"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.spam_report.email.delete
**This endpoint allows you to delete a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address of a specific spam report that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: suppression.spam_report.email.get
**This endpoint allows you to retrieve a specific spam report.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email address of a specific spam report that you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp that indicates when the recipient marked your message as spam.",
        "type": "integer"
      },
      "email": {
        "description": "The email address of the recipient that marked your message as spam.",
        "type": "string"
      },
      "ip": {
        "description": "The IP address that the message was sent from.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "ip"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.spam_reports.delete
**This endpoint allows you to delete your spam reports.**

There are two options for deleting spam reports: 

1) You can delete all spam reports by setting "delete_all" to true in the request body. 
2) You can delete some spam reports by specifying the email addresses in an array in the request body.

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "delete_all": false,
        "emails": [
          "example1@example.com",
          "example2@example.com"
        ]
      },
      "properties": {
        "delete_all": {
          "description": "Indicates if you want to delete all email addresses on the spam report list.",
          "type": "boolean"
        },
        "emails": {
          "description": "A list of specific email addresses that you want to remove from the spam report list.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: suppression.spam_reports.get
**This endpoint allows you to retrieve all spam reports.**

[Spam reports](https://sendgrid.com/docs/Glossary/spam_reports.html) happen when a recipient indicates that they think your email is [spam](https://sendgrid.com/docs/Glossary/spam.html) and then their email provider reports this to SendGrid.

For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start_time": {
      "type": "integer",
      "description": "Refers start of the time range in unix timestamp when a spam report was created (inclusive)."
    },
    "end_time": {
      "type": "integer",
      "description": "Refers end of the time range in unix timestamp when a spam report was created (inclusive)."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of results to be displayed per page."
    },
    "offset": {
      "type": "integer",
      "description": "Paging offset. The point in the list to begin displaying results."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the spam report was made.",
        "type": "integer"
      },
      "email": {
        "description": "The email address of the recipient who marked your message as spam.",
        "type": "string"
      },
      "ip": {
        "description": "The IP address that the message was sent on.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email",
      "ip"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: suppression.unsubscribes.get
**This endpoint allows you to retrieve a list of all email address that are globally suppressed.**

A global suppression (or global unsubscribe) is an email address of a recipient who does not want to receive any of your messages. A globally suppressed recipient will be removed from any email you send. For more information, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start_time": {
      "type": "integer",
      "description": "Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive)."
    },
    "end_time": {
      "type": "integer",
      "description": "Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive)."
    },
    "limit": {
      "type": "integer",
      "description": "The number of results to display on each page."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list of results to begin displaying global suppressions."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "created": {
        "description": "A Unix timestamp indicating when the recipient was added to the global suppression list.",
        "type": "integer"
      },
      "email": {
        "description": "The email address of the recipient who is globally suppressed.",
        "type": "string"
      }
    },
    "required": [
      "created",
      "email"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: GET_templates
**This endpoint allows you to retrieve all transactional templates.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/transactional_template"
  },
  "type": "array"
}
```
## Operation: POST_templates
**This endpoint allows you to create a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "name": "example_name"
      },
      "properties": {
        "name": {
          "description": "The name for the new transactional template.",
          "maxLength": 100,
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transactional_template"
}
```
## Operation: templates.template_id.delete
**This endpoint allows you to delete a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string",
      "description": "The id of the transactional template you want to edit."
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: templates.template_id.get
**This endpoint allows you to retrieve a single transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string",
      "description": "The id of the transactional template you want to edit."
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transactional_template"
}
```
## Operation: templates.template_id.patch
**This endpoint allows you to edit a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "name": "new_example_name"
      },
      "properties": {
        "name": {
          "description": "The name of the transactional template.",
          "maxLength": 100,
          "type": "string"
        }
      },
      "type": "object"
    },
    "template_id": {
      "type": "string",
      "description": "The id of the transactional template you want to edit."
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/transactional_template"
}
```
## Operation: templates.template_id.versions.post
**This endpoint allows you to create a new version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/transactional_template_version",
      "example": {
        "active": 1,
        "html_content": "<%body%>",
        "name": "example_version_name",
        "plain_content": "<%body%>",
        "subject": "<%subject%>",
        "template_id": "ddb96bbc-9b92-425e-8979-99464621b543"
      }
    },
    "template_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "Transactional Template Version": {
      "$ref": "#/definitions/transactional_template_version"
    },
    "id": {
      "description": "The id of the new transactional template version.",
      "type": "string"
    },
    "updated_at": {
      "description": "The date and time that this transactional template version was updated.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: templates.template_id.versions.version_id.delete
**This endpoint allows you to delete one of your transactional template versions.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: templates.template_id.versions.version_id.get
**This endpoint allows you to retrieve a specific version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "Transactional Template Version": {
      "$ref": "#/definitions/transactional_template_version"
    },
    "id": {
      "description": "The ID of the template version.",
      "type": "string"
    },
    "updated_at": {
      "description": "The date and time that the template version was last updated.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: templates.template_id.versions.version_id.patch
**This endpoint allows you to edit a version of one of your transactional templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "active": 1,
        "html_content": "<%body%>",
        "name": "updated_example_name",
        "plain_content": "<%body%>",
        "subject": "<%subject%>"
      },
      "properties": {
        "active": {
          "description": "Indicates if the template version is active.",
          "type": "integer"
        },
        "html_content": {
          "description": "The HTML content of the template version.",
          "type": "string"
        },
        "name": {
          "description": "The name of the template version.",
          "type": "string"
        },
        "plain_content": {
          "description": "The text/plain content of the template version.",
          "type": "string"
        },
        "subject": {
          "description": "The subject of the template version.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "template_id": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "Transactional Template Version": {
      "$ref": "#/definitions/transactional_template_version"
    },
    "id": {
      "description": "The ID of the template version.",
      "type": "string"
    },
    "updated_at": {
      "description": "The date and time that the template version was last updated.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: templates.template_id.versions.version_id.activate.post
**This endpoint allows you to activate a version of one of your templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.


For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "template_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "Transactional Template Version": {
      "$ref": "#/definitions/transactional_template_version"
    },
    "id": {
      "description": "The ID of the template version.",
      "type": "string"
    },
    "updated_at": {
      "description": "The date and time that the version was last updated.",
      "type": "string"
    }
  },
  "required": [
    "id",
    "updated_at"
  ],
  "type": "object"
}
```
## Operation: GET_tracking_settings
**This endpoint allows you to retrieve a list of all tracking settings that you can enable on your account.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of settings to return."
    },
    "offset": {
      "type": "integer",
      "description": "Where in the list of results you want to begin retrieving settings."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "description": "The list of all tracking settings.",
      "items": {
        "properties": {
          "description": {
            "description": "A description about the event that is being tracked.",
            "type": "string"
          },
          "enabled": {
            "description": "Indicates if this tracking setting is currently enabled.",
            "type": "boolean"
          },
          "name": {
            "description": "The name of the event being tracked.",
            "type": "string"
          },
          "title": {
            "description": "The title of the tracking setting.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: tracking_settings.click.get
**This endpoint allows you to retrieve your current click tracking setting.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "enable_text": {
      "description": "Indicates if click tracking is enabled for plain text emails.",
      "type": "boolean"
    },
    "enabled": {
      "description": "Indicates if click tracking is enabled or disabled.",
      "type": "boolean"
    }
  },
  "required": [
    "enable_text",
    "enabled"
  ],
  "type": "object"
}
```
## Operation: tracking_settings.click.patch
**This endpoint allows you to change your current click tracking setting. You can enable, or disable, click tracking using this endpoint.**

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": true
      },
      "properties": {
        "enabled": {
          "description": "The setting you want to use for click tracking.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "enable_text": {
      "description": "Indicates if click tracking is enabled for plain text emails",
      "type": "boolean"
    },
    "enabled": {
      "description": "The new setting new setting for click tracking.",
      "type": "boolean"
    }
  },
  "required": [
    "enable_text",
    "enabled"
  ],
  "type": "object"
}
```
## Operation: tracking_settings.google_analytics.get
**This endpoint allows you to retrieve your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/google_analytics_settings"
}
```
## Operation: tracking_settings.google_analytics.patch
**This endpoint allows you to update your current setting for Google Analytics.**

For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/google_analytics_demystified_ga_statistics_vs_sg_statistics.html).

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/google_analytics_settings",
      "example": {
        "enabled": true,
        "utm_campaign": "website",
        "utm_content": "",
        "utm_medium": "email",
        "utm_source": "sendgrid.com",
        "utm_term": ""
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/google_analytics_settings"
}
```
## Operation: tracking_settings.open.get
**This endpoint allows you to retrieve your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "enabled": {
      "description": "Indicates if open tracking is enabled.",
      "type": "boolean"
    }
  },
  "required": [
    "enabled"
  ],
  "type": "object"
}
```
## Operation: tracking_settings.open.patch
**This endpoint allows you to update your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens. If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "enabled": true
      },
      "properties": {
        "enabled": {
          "description": "The new status that you want to set for open tracking.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "enabled": {
      "description": "Indicates if open tracking is enabled.",
      "type": "boolean"
    }
  },
  "required": [
    "enabled"
  ],
  "type": "object"
}
```
## Operation: tracking_settings.subscription.get
**This endpoint allows you to retrieve your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscription_tracking_settings"
}
```
## Operation: tracking_settings.subscription.patch
**This endpoint allows you to update your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

You can track a variety of the actions your recipients may take when interacting with your emails including opening your emails, clicking on links in your emails, and subscribing to (or unsubscribing from) your emails.

For more information about tracking, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/tracking.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/subscription_tracking_settings",
      "example": {
        "enabled": true,
        "html_content": "html content",
        "landing": "landing page html",
        "plain_content": "text content",
        "replace": "replacement tag",
        "url": "url"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subscription_tracking_settings"
}
```
## Operation: user.account.get
**This endpoint allows you to retrieve your user account details.**

Your user's account information includes the user's account type and reputation.

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "reputation": {
      "description": "The sender reputation for this user.",
      "type": "number"
    },
    "type": {
      "description": "The type of account for this user.",
      "enum": [
        "free",
        "paid"
      ],
      "type": "string"
    }
  },
  "required": [
    "type",
    "reputation"
  ],
  "title": "GET User Account response",
  "type": "object"
}
```
## Operation: user.credits.get
**This endpoint allows you to retrieve the current credit balance for your account.**

Your monthly credit allotment limits the number of emails you may send before incurring overage charges. For more information about credits and billing, please visit our [Clssroom](https://sendgrid.com/docs/Classroom/Basics/Billing/billing_info_and_faqs.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "last_reset": {
      "description": "The date that your credit balance was last reset.",
      "type": "string"
    },
    "next_reset": {
      "description": "The next date that your credit balance will be reset.",
      "type": "string"
    },
    "overage": {
      "description": "The number of overdrawn credits for your account.",
      "type": "integer"
    },
    "remain": {
      "description": "The remaining number of credits available on your account.",
      "type": "integer"
    },
    "reset_frequency": {
      "description": "The frequency at which your credit balance will be reset.",
      "type": "string"
    },
    "total": {
      "description": "The total number of credits assigned to your account.",
      "type": "integer"
    },
    "used": {
      "description": "The number of credits that you have used.",
      "type": "integer"
    }
  },
  "required": [
    "remain",
    "total",
    "overage",
    "used",
    "last_reset",
    "next_reset",
    "reset_frequency"
  ],
  "type": "object"
}
```
## Operation: user.email.get
**This endpoint allows you to retrieve the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "email": {
      "description": "The email address currently on file for your account.",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "type": "object"
}
```
## Operation: user.email.put
**This endpoint allows you to update the email address currently on file for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "email": "example@example.com"
      },
      "properties": {
        "email": {
          "description": "The new email address that you would like to use for your account.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "email": {
      "description": "The current email address on file for your account.",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "type": "object"
}
```
## Operation: user.password.put
**This endpoint allows you to update your password.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "new_password": "new_password",
        "old_password": "old_password"
      },
      "properties": {
        "new_password": {
          "description": "The new password you would like to use for your account.",
          "type": "string"
        },
        "old_password": {
          "description": "The old password for your account.",
          "type": "string"
        }
      },
      "required": [
        "new_password",
        "old_password"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.profile.get
Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "address": {
      "description": "The user's address.",
      "type": "string"
    },
    "address2": {
      "description": "The second line of the user's address.",
      "type": "string"
    },
    "city": {
      "description": "The user's city.",
      "type": "string"
    },
    "company": {
      "description": "The name of the user's company.",
      "type": "string"
    },
    "country": {
      "description": "The user's country.",
      "type": "string"
    },
    "first_name": {
      "description": "The user's first name.",
      "type": "string"
    },
    "last_name": {
      "description": "The user's last name.",
      "type": "string"
    },
    "phone": {
      "description": "The user's phone number.",
      "type": "string"
    },
    "state": {
      "description": "The user's state.",
      "type": "string"
    },
    "website": {
      "description": "The user's website URL.",
      "type": "string"
    },
    "zip": {
      "description": "The user's zip code.",
      "type": "string"
    }
  },
  "required": [
    "address",
    "city",
    "company",
    "country",
    "first_name",
    "last_name",
    "phone",
    "state",
    "website",
    "zip"
  ],
  "title": "GET User Profile response",
  "type": "object"
}
```
## Operation: user.profile.patch
**This endpoint allows you to update your current profile details.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

It should be noted that any one or more of the parameters can be updated via the PATCH /user/profile endpoint. The only requirement is that you include at least one when you PATCH.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/user_profile",
      "example": {
        "city": "Orange",
        "first_name": "Example",
        "last_name": "User"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user_profile"
}
```
## Operation: user.scheduled_sends.get
**This endpoint allows you to retrieve all cancel/paused scheduled send information.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/user_scheduled_send_status"
  },
  "type": "array"
}
```
## Operation: user.scheduled_sends.post
**This endpoint allows you to cancel or pause an email that has been scheduled to be sent.**

If the maximum number of cancellations/pauses are added, HTTP 400 will
be returned.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "batch_id": "YOUR_BATCH_ID",
        "status": "pause"
      },
      "properties": {
        "batch_id": {
          "description": "The batch ID is the identifier that your scheduled mail sends share.",
          "pattern": "^[a-zA-Z0-9]",
          "type": "string"
        },
        "status": {
          "default": "pause",
          "description": "The status of the send you would like to implement. This can be pause or cancel. To delete a pause or cancel status see DELETE /v3/user/scheduled_sends/{batch_id}",
          "enum": [
            "pause",
            "cancel"
          ],
          "type": "string"
        }
      },
      "required": [
        "batch_id",
        "status"
      ],
      "title": "Cancel or pause a scheduled send request",
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user_scheduled_send_status"
}
```
## Operation: user.scheduled_sends.batch_id.delete
**This endpoint allows you to delete the cancellation/pause of a scheduled send.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: user.scheduled_sends.batch_id.get
**This endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/user_scheduled_send_status"
  },
  "title": "Retrieve scheduled send response",
  "type": "array"
}
```
## Operation: user.scheduled_sends.batch_id.patch
**This endpoint allows you to update the status of a scheduled send for the given `batch_id`.**

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "status": "pause"
      },
      "properties": {
        "status": {
          "description": "The status you would like the scheduled send to have.",
          "enum": [
            "cancel",
            "pause"
          ],
          "type": "string"
        }
      },
      "required": [
        "status"
      ],
      "type": "object"
    },
    "batch_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch_id"
  ]
}
```
### Output Schema
```json
{
  "type": "null"
}
```
## Operation: user.settings.enforced_tls.get
**This endpoint allows you to retrieve your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "require_tls": {
      "description": "Indicates if the recipient is required to support TLS.",
      "type": "boolean"
    },
    "require_valid_cert": {
      "description": "Indicates if the recipient is required to have a valid certificate.",
      "type": "boolean"
    }
  },
  "required": [
    "require_tls",
    "require_valid_cert"
  ],
  "type": "object"
}
```
## Operation: user.settings.enforced_tls.patch
**This endpoint allows you to update your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. See the [SMTP Ports User Guide](https://sendgrid.com/docs/Classroom/Basics/Email_Infrastructure/smtp_ports.html) for more information on opportunistic TLS.

**Note:** If either setting is enabled and the recipient does not support TLS or have a valid certificate, we drop the message and send a block event with “TLS required but not supported” as the description.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "require_tls": true,
        "require_valid_cert": false
      },
      "properties": {
        "require_tls": {
          "description": "Indicates if you want to require your recipients to support TLS. ",
          "type": "boolean"
        },
        "require_valid_cert": {
          "description": "Indicates if you want to require your recipients to have a valid certificate.",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "require_tls": {
      "description": "Indicates if your recipients are required to support TLS.",
      "type": "boolean"
    },
    "require_valid_cert": {
      "description": "Indicates if your recipients are required to have a valid certificate.",
      "type": "boolean"
    }
  },
  "required": [
    "require_tls",
    "require_valid_cert"
  ],
  "type": "object"
}
```
## Operation: user.username.get
**This endpoint allows you to retrieve your current account username.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "user_id": {
      "description": "The user ID for your account.",
      "type": "integer"
    },
    "username": {
      "description": "Your account username.",
      "type": "string"
    }
  },
  "required": [
    "username",
    "user_id"
  ],
  "type": "object"
}
```
## Operation: user.username.put
**This endpoint allows you to update the username for your account.**

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "username": "test_username"
      },
      "properties": {
        "username": {
          "description": "The new username you would like to use for your account.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "username": {
      "description": "The current username on file for your account.",
      "type": "string"
    }
  },
  "required": [
    "username"
  ],
  "type": "object"
}
```
## Operation: user.webhooks.event.settings.get
**This endpoint allows you to retrieve your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/event_webhook_settings"
}
```
## Operation: user.webhooks.event.settings.patch
**This endpoint allows you to update your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/event_webhook_settings",
      "example": {
        "bounce": true,
        "click": true,
        "deferred": true,
        "delivered": true,
        "dropped": true,
        "enabled": true,
        "group_resubscribe": true,
        "group_unsubscribe": true,
        "open": true,
        "processed": true,
        "spam_report": true,
        "unsubscribe": true,
        "url": "url"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/event_webhook_settings"
}
```
## Operation: user.webhooks.event.test.post
**This endpoint allows you to test your event webhook by sending a fake event notification post to the provided URL.**

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "url": "url"
      },
      "properties": {
        "url": {
          "description": "The URL where you would like the test notification to be sent.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.webhooks.parse.settings.get
**This endpoint allows you to retrieve all of your current inbound parse settings.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "result": {
      "description": "The list of your current inbound parse settings.",
      "items": {
        "$ref": "#/definitions/parse-setting"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: user.webhooks.parse.settings.post
**This endpoint allows you to create a new inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the content, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/parse-setting",
      "example": {
        "hostname": "myhostname.com",
        "send_raw": false,
        "spam_check": true,
        "url": "http://email.myhosthame.com"
      }
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/parse-setting"
}
```
## Operation: user.webhooks.parse.settings.hostname.delete
**This endpoint allows you to delete a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostname": {
      "type": "string",
      "description": "The hostname associated with the specific inbound parse setting that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostname"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.webhooks.parse.settings.hostname.get
**This endpoint allows you to retrieve a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hostname": {
      "type": "string",
      "description": "The hostname associated with the specific inbound parse setting that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostname"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/parse-setting"
}
```
## Operation: user.webhooks.parse.settings.hostname.patch
**This endpoint allows you to update a specific inbound parse setting.**

The inbound parse webhook allows you to have incoming emails parsed, extracting some or all of the contnet, and then have that content POSTed by SendGrid to a URL of your choosing. For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Webhooks/parse.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/parse-setting",
      "example": {
        "send_raw": true,
        "spam_check": false,
        "url": "http://newdomain.com/parse"
      }
    },
    "hostname": {
      "type": "string",
      "description": "The hostname associated with the specific inbound parse setting that you want to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "hostname"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/parse-setting"
}
```
## Operation: user.webhooks.parse.stats.get
**This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**

SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse Webhook cannot parse messages greater than 20MB in size, including all attachments.

There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing events easy. You can find these integrations in the [Library Index](https://sendgrid.com/docs/Integrate/libraries.html#-Webhook-Libraries).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "string",
      "description": "The number of statistics to return on each page."
    },
    "offset": {
      "type": "string",
      "description": "The number of statistics to skip."
    },
    "aggregated_by": {
      "type": "string",
      "description": "How you would like the statistics to by grouped. ",
      "enum": [
        "day",
        "week",
        "month"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD"
    },
    "end_date": {
      "type": "string",
      "description": "The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD"
    }
  },
  "additionalProperties": false,
  "required": [
    "start_date"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "date": {
        "description": "The date that the stats were collected.",
        "type": "string"
      },
      "stats": {
        "description": "The Parse Webhook usage statistics.",
        "items": {
          "properties": {
            "metrics": {
              "properties": {
                "received": {
                  "description": "The number of emails received and parsed by the Parse Webhook.",
                  "type": "number"
                }
              },
              "required": [
                "received"
              ],
              "type": "object"
            }
          },
          "type": "object"
        },
        "type": "array"
      }
    },
    "required": [
      "date",
      "stats"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: whitelabel.domains.get
**This endpoint allows you to retrieve a list of all domain whitelabels you have created.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Number of domains to return."
    },
    "offset": {
      "type": "integer",
      "description": "Paging offset."
    },
    "exclude_subusers": {
      "type": "boolean",
      "description": "Exclude subuser domains from the result."
    },
    "username": {
      "type": "string",
      "description": "The username associated with a whitelabel."
    },
    "domain": {
      "type": "string",
      "description": "Search for domain whitelabels that match the given domain."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "properties": {
      "automatic_security": {
        "description": "Indicates if this whitelabel uses automated security.",
        "type": "boolean"
      },
      "custom_spf": {
        "description": "Indicates if this whitelabel has custom SPF.",
        "type": "boolean"
      },
      "default": {
        "description": "Indicates if this whitelabel has been set as the default whitelabel.",
        "type": "boolean"
      },
      "dns": {
        "description": "The DNS records for this whitelabel that are used for authenticating the sending domain.",
        "properties": {
          "dkim": {
            "description": "The DNS record used when creating the DKIM signature.",
            "properties": {
              "data": {
                "description": "The DNS record.",
                "type": "string"
              },
              "host": {
                "description": "The domain that these DNS records will be applied to.",
                "format": "hostname",
                "type": "string"
              },
              "type": {
                "description": "The type of DNS record.",
                "enum": [
                  "cname",
                  "mx",
                  "txt"
                ],
                "type": "string"
              },
              "valid": {
                "description": "Indicates if this DNS record is valid.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "mail_server": {
            "description": "Designates which mail server is responsible for accepting messages from a domain.",
            "properties": {
              "data": {
                "description": "The mail server responsible for accepting messages.",
                "type": "string"
              },
              "host": {
                "description": "The domain sending the messages.",
                "type": "string"
              },
              "type": {
                "description": "The type of DNS record.",
                "type": "string"
              },
              "valid": {
                "description": "Indicates if this is a valid DNS record with no conflicts.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "subdomain_spf": {
            "description": "The SPF record for the subdomain used to create this whitelabel.",
            "properties": {
              "data": {
                "description": "The SPF record.",
                "type": "string"
              },
              "host": {
                "description": "The domain that this SPF record will be used to authenticate.",
                "type": "string"
              },
              "type": {
                "description": "The type of data in the SPF record.",
                "type": "string"
              },
              "valid": {
                "description": "Indicates if the SPF record is valid.",
                "type": "boolean"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "domain": {
        "description": "The domain that this whitelabel was created for.",
        "type": "string"
      },
      "id": {
        "description": "The ID of the domain whitelabel.",
        "type": "number"
      },
      "ips": {
        "description": "The IPs that will be included in the custom SPF record.",
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "legacy": {
        "description": "Indicates if this is whitelabel was created with the legacy whitelabel tool.",
        "type": "boolean"
      },
      "subdomain": {
        "description": "The subdomain created for this domain whitelabel.",
        "type": "string"
      },
      "user_id": {
        "description": "The ID of the user that this whitelabel will be associated with.",
        "type": "number"
      },
      "username": {
        "description": "The username that this whitelabel is associated with.",
        "type": "string"
      },
      "valid": {
        "description": "Indicates if this is a valid whitelabel or not.",
        "type": "boolean"
      }
    },
    "required": [
      "id",
      "user_id",
      "subdomain",
      "domain",
      "username",
      "ips",
      "custom_spf",
      "default",
      "legacy",
      "automatic_security",
      "valid",
      "dns"
    ],
    "type": "object"
  },
  "type": "array"
}
```
## Operation: whitelabel.domains.post
**This endpoint allows you to create a whitelabel for one of your domains.**

If you are creating a domain whitelabel that you would like a subuser to use, you have two options:
1. Use the "username" parameter. This allows you to create a whitelabel on behalf of your subuser. This means the subuser is able to see and modify the created whitelabel.
2. Use the Association workflow (see Associate Domain section). This allows you to assign a whitelabel created by the parent to a subuser. This means the subuser will default to the assigned whitelabel, but will not be able to see or modify that whitelabel. However, if the subuser creates their own whitelabel it will overwrite the assigned whitelabel.

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "automatic_security": false,
        "custom_spf": true,
        "default": true,
        "domain": "example.com",
        "ips": [
          "192.168.1.1",
          "192.168.1.2"
        ],
        "subdomain": "news",
        "username": "john@example.com"
      },
      "properties": {
        "automatic_security": {
          "description": "Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation.",
          "type": "boolean"
        },
        "custom_spf": {
          "description": "Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to domain whitelabels setup for manual security.",
          "type": "boolean"
        },
        "default": {
          "description": "Whether to use this whitelabel as the fallback if no domain whitelabels match the sender's domain.",
          "type": "boolean"
        },
        "domain": {
          "description": "Domain being whitelabeled.",
          "type": "string"
        },
        "ips": {
          "description": "The IP addresses that will be included in the custom SPF record for this whitelabel.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "subdomain": {
          "description": "The subdomain to use for this domain whitelabel.",
          "type": "string"
        },
        "username": {
          "description": "The username that this whitelabel will be associated with.",
          "type": "string"
        }
      },
      "required": [
        "domain",
        "subdomain"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel::domain"
}
```
## Operation: whitelabel.domains.default.get
**This endpoint allows you to retrieve the default whitelabel for a domain.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain | string  |The domain to find a default domain whitelabel for. |

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel:domain_spf"
}
```
## Operation: whitelabel.domains.subuser.delete
**This endpoint allows you to disassociate a specific whitelabel from a subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
| username | string  | required  | Username for the subuser to find associated whitelabels for. |

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: whitelabel.domains.subuser.get
**This endpoint allows you to retrieve all of the whitelabels that have been assigned to a specific subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| username | string  | Username of the subuser to find associated whitelabels for. |

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel:domain_spf"
}
```
## Operation: whitelabel.domains.domain_id.delete
**This endpoint allows you to delete a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_id": {
      "type": "number",
      "description": "The id of the domain whitelabel."
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: whitelabel.domains.domain_id.get
**This endpoint allows you to retrieve a specific domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_id": {
      "type": "number",
      "description": "The id of the domain whitelabel."
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel::domain"
}
```
## Operation: whitelabel.domains.domain_id.patch
**This endpoint allows you to update the settings for a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "custom_spf": true,
        "default": false
      },
      "properties": {
        "custom_spf": {
          "default": false,
          "description": "Indicates whether to generate a custom SPF record for manual security.",
          "type": "boolean"
        },
        "default": {
          "default": false,
          "description": "Indicates whether this domain whitelabel should be considered the default.",
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "domain_id": {
      "type": "number",
      "description": "The id of the domain whitelabel."
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "custom_spf false": {
      "description": "Indicates whether to generate a custom SPF record for manual security.  Defaults to false.",
      "type": "boolean"
    },
    "default false": {
      "description": "Inidcates whether this domain whitelabel should be considered the default.  Defaults to false.",
      "type": "boolean"
    }
  },
  "title": "Update a Domain response",
  "type": "object"
}
```
## Operation: whitelabel.domains.domain_id.subuser.post
**This endpoint allows you to associate a specific domain whitelabel with a subuser.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain_id | integer   | ID of the domain whitelabel to associate with the subuser. |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "username": "jane@example.com"
      },
      "properties": {
        "username": {
          "description": "Username to associate with the domain whitelabel.",
          "type": "string"
        }
      },
      "required": [
        "username"
      ],
      "type": "object"
    },
    "domain_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel:domain_spf"
}
```
## Operation: whitelabel.domains.id.ips.post
**This endpoint allows you to add an IP address to a domain whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  |  Description  |
|---|---|---|
| id | integer  | ID of the domain to which you are adding an IP |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "ip": "192.168.0.1"
      },
      "properties": {
        "ip": {
          "description": "IP to associate with the domain. Used for manually specifying IPs for custom SPF.",
          "type": "string"
        }
      },
      "required": [
        "ip"
      ],
      "type": "object"
    },
    "id": {
      "type": "string"
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
{
  "$ref": "#/definitions/whitelabel:domain_spf"
}
```
## Operation: whitelabel.domains.id.ips.ip.delete
**This endpoint allows you to remove a domain's IP address from that domain's whitelabel.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| id | integer  | ID of the domain whitelabel to delete the IP from. |
| ip | string | IP to remove from the domain whitelabel. |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "ip": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "ip"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/whitelabel:domain_spf"
}
```
## Operation: whitelabel.domains.id.validate.post
**This endpoint allows you to validate a domain whitelabel. If it fails, it will return an error message describing why the whitelabel could not be validated.**

A domain whitelabel allows you to remove the “via” or “sent on behalf of” message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| id | integer  |ID of the domain whitelabel to validate. |

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
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
{
  "properties": {
    "id": {
      "description": "The ID of the domain whitelabel.",
      "type": "integer"
    },
    "valid": {
      "description": "Indicates if this is a valid whitelabel.",
      "type": "boolean"
    },
    "validation_resuts": {
      "description": "The individual DNS records that are checked when validating, including the reason for any invalid DNS records.",
      "properties": {
        "dkim1": {
          "description": "A DNS record for this domain whitelabel.",
          "properties": {
            "reason": {
              "type": "null"
            },
            "valid": {
              "description": "Indicates if the DNS record is valid.",
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "dkim2": {
          "description": "A DNS record for this whitelabel.",
          "properties": {
            "reason": {
              "type": "null"
            },
            "valid": {
              "description": "Indicates if the DNS record is valid.",
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "mail_cname": {
          "description": "The CNAME record for the domain whitelabel.",
          "properties": {
            "reason": {
              "description": "The reason this record is invalid.",
              "type": "string"
            },
            "valid": {
              "description": "Indicates if this DNS record is valid.",
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "spf": {
          "description": "The SPF record for the whitelabel.",
          "properties": {
            "reason": {
              "type": "null"
            },
            "valid": {
              "description": "Indicates if the SPF record is valid.",
              "type": "boolean"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}
```
## Operation: whitelabel.ips.get
**This endpoint allows you to retrieve all of the IP whitelabels that have been createdy by this account.**

You may include a search key by using the "ip" parameter. This enables you to perform a prefix search for a given IP segment (e.g. "192.").

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of results to retrieve."
    },
    "offset": {
      "type": "integer",
      "description": "The point in the list of results to begin retrieving IPs from."
    },
    "ip": {
      "type": "string",
      "description": "The IP segment that you would like to use in a prefix search."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ip_whitelabel"
  },
  "type": "array"
}
```
## Operation: whitelabel.ips.post
**This endpoint allows you to create an IP whitelabel.**

When creating an IP whitelable, you should use the same subdomain that you used when you created a domain whitelabel.

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "example": {
        "domain": "example.com",
        "ip": "192.168.1.1",
        "subdomain": "email"
      },
      "properties": {
        "domain": {
          "description": "The root, or sending, domain that will be used to send message from the IP.",
          "type": "string"
        },
        "ip": {
          "description": "The IP address that you want to whitelabel.",
          "type": "string"
        },
        "subdomain": {
          "description": "The subdomain that will be used to send emails from the IP. Should be the same as the subdomain used for your domain whitelabel.",
          "type": "string"
        }
      },
      "required": [
        "ip",
        "subdomain",
        "domain"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ip_whitelabel"
}
```
## Operation: whitelabel.ips.id.delete
**This endpoint allows you to delete an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the IP whitelabel that you want to delete."
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
{
  "type": "object"
}
```
## Operation: whitelabel.ips.id.get
**This endpoint allows you to retrieve an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the IP whitelabel that you want to delete."
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
{
  "$ref": "#/definitions/ip_whitelabel"
}
```
## Operation: whitelabel.ips.id.validate.post
**This endpoint allows you to validate an IP whitelabel.**

A IP whitelabel consists of a subdomain and domain that will be used to generate a reverse DNS record for a given IP. Once SendGrid has verified that the appropriate A record for the IP has been created, the appropriate reverse DNS record for the IP is generated.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/ips.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "properties": {
    "id": {
      "description": "The id of the IP whitelabel.",
      "type": "integer"
    },
    "valid": {
      "description": "Indicates if the IP whitelabel is valid.",
      "enum": [
        true,
        false
      ],
      "type": "boolean"
    },
    "validation_results": {
      "description": "The specific results of the validation.",
      "properties": {
        "a_record": {
          "properties": {
            "reason": {
              "description": "The reason the IP whitelabel could not be validated. Is null if the whitelabel was validated.",
              "type": [
                "null",
                "string"
              ]
            },
            "valid": {
              "description": "Indicates if the IP whitelabel could be validated.",
              "enum": [
                true,
                false
              ],
              "type": "boolean"
            }
          },
          "required": [
            "valid",
            "reason"
          ],
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  "required": [
    "id",
    "valid",
    "validation_results"
  ],
  "type": "object"
}
```
## Operation: whitelabel.links.get
**This endpoint allows you to retrieve all link whitelabels.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of results returned per page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/link_whitelabel"
  },
  "type": "array"
}
```
## Operation: whitelabel.links.post
**This endpoint allows you to create a new link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Number of domains to return."
    },
    "offset": {
      "type": "integer",
      "description": "Paging offset."
    },
    "body": {
      "example": {
        "default": true,
        "domain": "example.com",
        "subdomain": "mail"
      },
      "properties": {
        "default": {
          "description": "Indicates if you want to use this link whitelabel as the fallback, or default, whitelabel.",
          "enum": [
            true,
            false
          ],
          "type": "boolean"
        },
        "domain": {
          "description": "The root domain for your subdomain that you are creating the whitelabel for. This should match your FROM email address.",
          "type": "string"
        },
        "subdomain": {
          "description": "The subdomain to create the link whitelabel for. Must be different from the subdomain you used for a domain whitelabel.",
          "type": "string"
        }
      },
      "required": [
        "domain",
        "subdomain"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/link_whitelabel"
}
```
## Operation: whitelabel.links.default.get
**This endpoint allows you to retrieve the default link whitelabel.**

Default link whitelabel is the actual link whitelabel to be used when sending messages. If there are multiple link whitelabels, the default is determined by the following order:
<ul>
  <li>Validated link whitelabels marked as "default"</li>
  <li>Legacy link whitelabels (migrated from the whitelabel wizard)</li>
  <li>Default SendGrid link whitelabel (i.e. 100.ct.sendgrid.net)</li>
</ul>

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "domain": {
      "type": "string",
      "description": "The domain to match against when finding a corresponding link whitelabel."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/link_whitelabel"
}
```
## Operation: whitelabel.links.subuser.delete
**This endpoint allows you to disassociate a link whitelabel from a subuser.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The username of the subuser account that you want to disassociate a link whitelabel from."
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: whitelabel.links.subuser.get
**This endpoint allows you to retrieve the associated link whitelabel for a subuser.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The username of the subuser to retrieve associated link whitelabels for."
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/link_whitelabel"
}
```
## Operation: whitelabel.links.id.delete
**This endpoint allows you to delete a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The id of the link whitelabel that you want to delete."
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
## Operation: whitelabel.links.id.get
**This endpoint allows you to retrieve a specific link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The id of the link whitelabel that you want to delete."
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
{
  "$ref": "#/definitions/link_whitelabel"
}
```
## Operation: whitelabel.links.id.patch
**This endpoint allows you to update a specific link whitelabel. You can use this endpoint to change a link whitelabel's default status.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "default": true
      },
      "properties": {
        "default": {
          "description": "Indicates if the link whitelabel is set as the default, or fallback, whitelabel.",
          "enum": [
            true,
            false
          ],
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "id": {
      "type": "integer",
      "description": "The id of the link whitelabel that you want to delete."
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
{
  "$ref": "#/definitions/link_whitelabel"
}
```
## Operation: whitelabel.links.id.validate.post
**This endpoint allows you to validate a link whitelabel.**

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The id of the link whitelabel that you want to validate."
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
{
  "properties": {
    "id": {
      "description": "The id of the link whitelabel.",
      "type": "integer"
    },
    "valid": {
      "description": "Indicates if the link whitelabel is valid.",
      "enum": [
        true,
        false
      ],
      "type": "boolean"
    },
    "validation_results": {
      "description": "The individual validations results for each of the DNS records associated with this link whitelabel.",
      "properties": {
        "domain_cname": {
          "description": "The DNS record generated for the sending domain used for this link whitelabel.",
          "properties": {
            "reason": {
              "description": "Null if the DNS record is valid. If the DNS record is invalid, this will explain why.",
              "type": [
                "string",
                "null"
              ]
            },
            "valid": {
              "description": "Indicates if this DNS record is valid.",
              "enum": [
                true,
                false
              ],
              "type": "boolean"
            }
          },
          "required": [
            "valid",
            "reason"
          ],
          "type": "object"
        },
        "owner_cname": {
          "description": "The DNS record created to verify the link whitelabel.",
          "properties": {
            "reason": {
              "description": "Null if valid. If the DNS record is invalid, this will explain why.",
              "type": [
                "null",
                "string"
              ]
            },
            "valid": {
              "description": "Indicates if the DNS record is valid.",
              "enum": [
                true,
                false
              ],
              "type": "boolean"
            }
          },
          "required": [
            "valid",
            "reason"
          ],
          "type": "object"
        }
      },
      "required": [
        "domain_cname"
      ],
      "type": "object"
    }
  },
  "required": [
    "id",
    "valid",
    "validation_results"
  ],
  "type": "object"
}
```
## Operation: whitelabel.links.link_id.subuser.post
**This endpoint allows you to associate a link whitelabel with a subuser account.**

Link whitelables can be associated with subusers from the parent account. This functionality allows
subusers to send mail using their parent's linke whitelabels. To associate a link whitelabel, the parent account
must first create a whitelabel and validate it. The parent may then associate that whitelabel with a subuser via the API or the Subuser Management page in the user interface.

Email link whitelabels allow all of the click-tracked links you send in your emails to include the URL of your domain instead of sendgrid.net.

For more information, please see our [User Guide](https://sendgrid.com/docs/API_Reference/Web_API_v3/Whitelabel/links.html).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "example": {
        "username": "jane@example.com"
      },
      "properties": {
        "username": {
          "description": "The username of the subuser account that you want to associate the link whitelabel with.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "link_id": {
      "type": "integer",
      "description": "The id of the link whitelabel you want to associate."
    }
  },
  "additionalProperties": false,
  "required": [
    "link_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/link_whitelabel"
}
```
