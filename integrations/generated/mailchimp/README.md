# @datafire/mailchimp
Create plugins that connect MailChimp to your CMS, your blog, your e-commerce shopping cart, and more.

## Operation: _method_templates.get
Retrieve various templates available in the system, allowing some thing similar to our template gallery to be created.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "string",
      "description": "The types of templates to return. See options: \"http://apidocs.mailchimp.com/api/1.3/templates.func.php\""
    },
    "category": {
      "type": "string",
      "description": "For Gallery templates only, limit to a specific template category."
    },
    "inactives": {
      "type": "string",
      "description": "Options to control how inactive templates are returned, if at all. See options: \"http://apidocs.mailchimp.com/api/1.3/templates.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_templateUpdate.get
Replace the content of a user template, NOT campaign content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the user template to update."
    },
    "values": {
      "type": "string",
      "description": "The values to updates. See options: \"http://apidocs.mailchimp.com/api/1.3/templateupdate.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "values",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_templateUndel.get
Undelete (reactivate) a user template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the user template to reactivate."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_templateInfo.get
Pull details for a specific template to help support editing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tid": {
      "type": "string",
      "description": "The template id."
    },
    "type": {
      "type": "string",
      "description": "the template type to load.",
      "enum": [
        "user",
        "gallery",
        "base"
      ]
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "tid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_templateDel.get
Delete (deactivate) a user template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the user template to delete."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_templateAdd.get
Create a new user template, NOT campaign content. These templates can then be applied while creating campaigns.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name for the template - names must be unique and a max of 50 bytes."
    },
    "html": {
      "type": "string",
      "description": "A string specifying the entire template to be created. This is NOT campaign content."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "html",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_apikeys.get
Retrieve a list of all MailChimp API Keys for this User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Your MailChimp user name."
    },
    "password": {
      "type": "string",
      "description": "Your MailChimp password."
    },
    "expired": {
      "type": "boolean",
      "description": "Whether or not to include expired keys."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_apikeyExpire.get
Expire a Specific API Key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Your MailChimp user name."
    },
    "password": {
      "type": "string",
      "description": "Your MailChimp password."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_apikeyAdd.get
Add an API Key to your account. We will generate a new key for you and return it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Your MailChimp user name."
    },
    "password": {
      "type": "string",
      "description": "Your MailChimp password."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_lists.get
Retrieve all of the lists defined for your user account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filters": {
      "type": "string",
      "description": "A hash of filters to apply to this query. See options: \"http://apidocs.mailchimp.com/api/1.3/lists.func.php\""
    },
    "start": {
      "type": "integer",
      "description": "Control paging of lists, start results at this list #, defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "Control paging of lists, number of lists to return with each call, defaults to 25 (max=100)."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listWebhooks.get
Return the Webhooks configured for the given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listWebhookDel.get
Delete an existing Webhook URL from a given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "url": {
      "type": "string",
      "description": "The URL of a Webhook on this list."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "url",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listWebhookAdd.get
Add a new Webhook URL for the given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "url": {
      "type": "string",
      "description": "A valid URL for the Webhook - it will be validated. note that a url may only exist on a list once."
    },
    "actions": {
      "type": "string",
      "description": "A hash of actions to fire this Webhook. See options: \"http://apidocs.mailchimp.com/api/1.3/listwebhookadd.func.php\""
    },
    "sources": {
      "type": "string",
      "description": "A hash of sources to fire this Webhook. See options: \"http://apidocs.mailchimp.com/api/1.3/listwebhookadd.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "url",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listUpdateMember.get
Edit the email address, merge fields, and interest groups for a list member.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "The current email address of the member to update OR the \"id\" for the member returned from listMemberInfo, Webhooks, and Campaigns."
    },
    "merge_vars": {
      "type": "string",
      "description": "Array of new field values to update the member with. See options: \"http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php\""
    },
    "email_type": {
      "type": "string",
      "description": "Change the email type preference for the member. Leave blank to keep the existing preference (optional).",
      "enum": [
        "html",
        "text",
        "mobile"
      ]
    },
    "replace_interests": {
      "type": "boolean",
      "description": "Flag to determine whether we replace the interest groups with the updated groups provided, or we add the provided groups to the member's interest groups."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "merge_vars",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listUnsubscribe.get
Unsubscribe the given email address from the list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "The email address to unsubscribe OR the email \"id\" returned from listMemberInfo, Webhooks, and Campaigns."
    },
    "delete_member": {
      "type": "boolean",
      "description": "Flag to completely delete the member from your list instead of just unsubscribing."
    },
    "send_goodbye": {
      "type": "boolean",
      "description": "Flag to send the goodbye email to the email address."
    },
    "send_notify": {
      "type": "boolean",
      "description": "Flag to send the unsubscribe notification email to the address defined in the list email notification settings."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listSubscribe.get
Subscribe the provided email to a list. By default this sends a confirmation email.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "The email address to subscribe."
    },
    "merge_vars": {
      "type": "string",
      "description": "Merges for the email (FNAME, LNAME, etc.). See options: \"http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php\""
    },
    "email_type": {
      "type": "string",
      "description": "Email type preference for the email.",
      "enum": [
        "html",
        "text",
        "mobile"
      ]
    },
    "double_optin": {
      "type": "boolean",
      "description": "Flag to control whether a double opt-in confirmation message is sent, defaults to true. Abusing this may cause your account to be suspended."
    },
    "update_existing": {
      "type": "boolean",
      "description": "Flag to control whether existing subscribers should be updated instead of throwing an error."
    },
    "replace_interests": {
      "type": "boolean",
      "description": "Flag to determine whether we replace the interest groups with the groups provided or we add the provided groups to the member's interest groups."
    },
    "send_welcome": {
      "type": "boolean",
      "description": "If your double_optin is false and this is true, we will send your lists Welcome Email if this subscribe succeeds - this will *not* fire if we end up updating an existing subscriber. If double_optin is true, this has no effect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegments.get
Retrieve all of the Static Segments for a list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegmentReset.get
Resets a static segment - removes all members from the static segment. Note: does not actually affect list member data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "seg_id": {
      "type": "string",
      "description": "The id of the static segment to reset."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "seg_id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegmentMembersDel.get
Remove list members from a static segment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "seg_id": {
      "type": "string",
      "description": "The id of the static segment to delete."
    },
    "batch": {
      "type": "string",
      "description": "An array of email addresses and/or unique_ids to remove from the segment."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "seg_id",
    "batch",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegmentMembersAdd.get
Add list members to a static segment. It is suggested that you limit batch size to no more than 10,000 addresses per call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "seg_id": {
      "type": "string",
      "description": "The id of the static segment to modify."
    },
    "batch": {
      "type": "string",
      "description": "An array of email addresses and/or unique_ids to add to the segment."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "seg_id",
    "batch",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegmentDel.get
Delete a static segment. Note that this will, of course, remove any member affiliations with the segment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "seg_id": {
      "type": "string",
      "description": "The id of the static segment to delete."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "seg_id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listStaticSegmentAdd.get
Save a segment against a list for later use. There is no limit to the number of segments which can be saved.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "name": {
      "type": "string",
      "description": "A unique name per list for the segment - 50 byte maximum length, anything longer will throw an error."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMergeVars.get
Get the list of merge tags for a given list, including their name, tag, and required setting.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMergeVarUpdate.get
Update most parameters for a merge tag on a given list. You cannot currently change the merge type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "tag": {
      "type": "string",
      "description": "The merge tag to update."
    },
    "options": {
      "type": "string",
      "description": "The options to change for a merge var. See options: http://apidocs.mailchimp.com/api/1.3/listmergevaradd.func.php"
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag",
    "options",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMergeVarDel.get
Delete a merge tag from a given list and all its members.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "tag": {
      "type": "string",
      "description": "The merge tag to delete."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMergeVarAdd.get
Add a new merge tag to a given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "tag": {
      "type": "string",
      "description": "The merge tag to add, e.g. FNAME. 10 bytes max, valid characters: \"A-Z 0-9 _\" no spaces, dashes, etc."
    },
    "name": {
      "type": "string",
      "description": "The long description of the tag being added, used for user displays."
    },
    "options": {
      "type": "string",
      "description": "Various options for this merge var. See options: http://apidocs.mailchimp.com/api/1.3/listmergevaradd.func.php"
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag",
    "name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMembers.get
Get all of the list members for a list that are of a particular status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "status": {
      "type": "string",
      "description": "The status to get members.",
      "enum": [
        "subscribed",
        "unsubscribed",
        "cleaned",
        "updated"
      ]
    },
    "since": {
      "type": "string",
      "description": "Pull all members whose status (subscribed/unsubscribed/cleaned) has changed or whose profile (updated) has changed since this date/time (in GMT) - format is YYYY-MM-DD HH:mm:ss (24hr)."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 100, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "status",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMemberInfo.get
Get all the information for particular members of a list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "An array of up to 50 email addresses to get information for OR the \"id\"(s) for the member returned from listMembers, Webhooks, and Campaigns. For backwards compatibility, if a string is passed, it will be treated as an array with a single element (will not work with XML-RPC)."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listMemberActivity.get
Get the most recent 100 activities for particular list members (open, click, bounce, unsub, abuse, sent to).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "An array of up to 50 email addresses to get information for OR the \"id\"(s) for the member returned from listMembers, Webhooks, and Campaigns."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listLocations.get
Retrieve the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupings.get
Get the list of interest groupings for a given list, including the label, form information, and included groups for each.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupingUpdate.get
Update an existing Interest Grouping.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "grouping_id": {
      "type": "string",
      "description": "The interest grouping id."
    },
    "name": {
      "type": "string",
      "description": "The name of the field to update - either \"name\" or \"type\". Groups with in the grouping should be manipulated using the standard listInterestGroup methods."
    },
    "value": {
      "type": "string",
      "description": "The new value of the field. Grouping names must be unique - only \"hidden\" and \"checkboxes\" grouping types can be converted between each other."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "grouping_id",
    "name",
    "value",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupingDel.get
Delete an existing Interest Grouping - this will permanently delete all contained interest groups and will remove those selections from all list members.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "grouping_id": {
      "type": "string",
      "description": "The interest grouping id."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "grouping_id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupingAdd.get
Add a new Interest Grouping - if interest groups for the List are not yet enabled, adding the first grouping will automatically turn them on.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "name": {
      "type": "string",
      "description": "The interest grouping to add - grouping names must be unique."
    },
    "type": {
      "type": "string",
      "description": "The type of the grouping to add.",
      "enum": [
        "checkboxes",
        "hidden",
        "dropdown",
        "radio"
      ]
    },
    "groups": {
      "type": "integer",
      "description": "The lists of initial group names to be added - at least 1 is required and the names must be unique within a grouping. If the number takes you over the 60 group limit, an error will be thrown."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name",
    "type",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupUpdate.get
Change the name of an Interest Group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "old_name": {
      "type": "string",
      "description": "The interest group name to be changed."
    },
    "new_name": {
      "type": "string",
      "description": "The new interest group name to be set."
    },
    "optional": {
      "type": "integer",
      "description": "The grouping to delete the group from. If not supplied, the first grouping on the list is used."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "old_name",
    "new_name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupDel.get
Delete a single Interest Group - if the last group for a list is deleted, this will also turn groups for the list off.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "group_name": {
      "type": "string",
      "description": "The interest group to delete."
    },
    "grouping_id": {
      "type": "integer",
      "description": "The grouping to delete the group from - get using listInterestGrouping() . If not supplied, the first grouping on the list is used."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "group_name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listInterestGroupAdd.get
Add a single Interest Group - if interest groups for the List are not yet enabled, adding the first group will automatically turn them on.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "group_name": {
      "type": "string",
      "description": "The interest group to add - group names must be unique within a grouping."
    },
    "grouping_id": {
      "type": "integer",
      "description": "The grouping to add the new group to - get using listInterestGrouping(). If not supplied, the first grouping on the list is used."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "group_name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listGrowthHistory.get
Access the Growth History by Month for a given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listClients.get
Retrieve the clients that the list's subscribers have been tagged as being used based on user agents seen.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listBatchUnsubscribe.get
Unsubscribe a batch of email addresses to a list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "emails": {
      "type": "string",
      "description": "Array of email addresses to unsubscribe."
    },
    "delete_member": {
      "type": "boolean",
      "description": "Flag to completely delete the member from your list instead of just unsubscribing."
    },
    "send_goodbye": {
      "type": "boolean",
      "description": "Flag to send the goodbye email to the email addresses."
    },
    "send_notify": {
      "type": "boolean",
      "description": "Flag to send the unsubscribe notification email to the address defined in the list email notification settings."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "emails",
    "delete_member",
    "send_goodbye",
    "send_notify",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listBatchSubscribe.get
Subscribe a batch of email addresses to a list at once.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "batch": {
      "type": "string",
      "description": "An array of structs for each address to import with two special keys: \"EMAIL\" for the email address, and \"EMAIL_TYPE\" for the email type option (html, text, or mobile)."
    },
    "double_optin": {
      "type": "boolean",
      "description": "Flag to control whether to send an opt-in confirmation email."
    },
    "update_existing": {
      "type": "boolean",
      "description": "Flag to control whether to update members that are already subscribed to the list or to return an error."
    },
    "replace_interests": {
      "type": "boolean",
      "description": "Flag to determine whether we replace the interest groups with the updated groups provided, or we add the provided groups to the member's interest groups."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "batch",
    "double_optin",
    "update_existing",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listActivity.get
Access up to the previous 180 days of daily detailed aggregated activity stats for a given list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listAbuseReports.get
Get all email addresses that complained about a given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to pull abuse reports."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 500, upper limit set at 1000."
    },
    "since": {
      "type": "string",
      "description": "Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_ping.get
A simple method you can call that will return a constant value as long as everything is good.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_listsForEmail.get
Retrieve all List Ids a member is subscribed to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email_address": {
      "type": "string",
      "description": "The email address to check OR the email \"id\" returned from listMemberInfo, Webhooks, and Campaigns."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_inlineCss.get
Send your HTML content to have the CSS inlined and optionally remove the original styles.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "html": {
      "type": "string",
      "description": "Your HTML content."
    },
    "strip_css": {
      "type": "boolean",
      "description": "Whether you want the CSS style tags stripped from the returned document."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "html",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_getAccountDetails.get
Retrieve lots of account information including payments made, plan info, some account stats, installed modules, contact info, and more.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_generateText.get
Have HTML content auto-converted to a text-only format. You can send: plain HTML, an array of Template content, an existing Campaign Id, or an existing Template Id. Note that this will not save anything to or update any of your lists, campaigns, or templates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of content to parse.",
      "enum": [
        "html",
        "template",
        "url",
        "cid",
        "tid"
      ]
    },
    "content": {
      "type": "string",
      "description": "The content to use. For \"html\" expects a single string value, \"template\" expects an array like you send to campaignCreate, \"url\" expects a valid and public URL to pull from, \"cid\" expects a valid Campaign Id, and \"tid\" expects a valid Template Id on your account."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "content",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_chimpChatter.get
Return the current Chimp Chatter messages for an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignsForEmail.get
Retrieve all Campaigns Ids a member was sent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email_address": {
      "type": "string",
      "description": "The email address to unsubscribe OR the email \"id\" returned from listMemberInfo, Webhooks, and Campaigns."
    },
    "options": {
      "type": "string",
      "description": "Extra options to modify the returned data. See options: \"http://apidocs.mailchimp.com/api/1.3/campaignsforemail.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_gmonkeyMembers.get
Retrieve all Golden Monkey(s) for an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_gmonkeyDel.get
Remove Golden Monkey(s).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "An array of email addresses (max 50) to attempt to remove Golden Monkey status from."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_gmonkeyAdd.get
Add Golden Monkey(s).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The list id to connect."
    },
    "email_address": {
      "type": "string",
      "description": "An array of email addresses (max 50) to attempt to flag as Golden Monkeys."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_gmonkeyActivity.get
Retrieve all Activity (opens/clicks) for Golden Monkeys over the past 10 days.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_folders.get
List all the folders for a user account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of folder to create.",
      "enum": [
        "campaign",
        "autoresponder"
      ]
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_folderUpdate.get
Update the name of a folder for campaigns or autoresponders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fid": {
      "type": "integer",
      "description": "The folder id to update."
    },
    "name": {
      "type": "string",
      "description": "A new, unique name for a folder (max 100 bytes)."
    },
    "type": {
      "type": "string",
      "description": "The type of folder to create.",
      "enum": [
        "campaign",
        "autoresponder"
      ]
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "fid",
    "name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_folderDel.get
Delete a campaign or autoresponder folder. Note that this will simply make campaigns in the folder appear unfiled, they are not removed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fid": {
      "type": "integer",
      "description": "The folder id to update."
    },
    "type": {
      "type": "string",
      "description": "The type of folder to create.",
      "enum": [
        "campaign",
        "autoresponder"
      ]
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "fid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_folderAdd.get
Add a new folder to file campaigns or autoresponders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "A unique name for a folder (max 100 bytes)."
    },
    "type": {
      "type": "string",
      "description": "The type of folder to create.",
      "enum": [
        "campaign",
        "autoresponder"
      ]
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_ecommOrders.get
Retrieve the Ecommerce Orders for an account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 100, upper limit set at 500."
    },
    "since": {
      "type": "string",
      "description": "Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_ecommOrderDel.get
Delete Ecommerce Order Information used for segmentation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "store_id": {
      "type": "string",
      "description": "The store id the order belongs."
    },
    "order_id": {
      "type": "string",
      "description": "The order id (generated by the store) to delete."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "store_id",
    "order_id",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_ecommOrderAdd.get
Import Ecommerce Order Information to be used for Segmentation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "An array of information pertaining to the order that has completed. See options: \"http://apidocs.mailchimp.com/api/1.3/ecommorderadd.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "order",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignOpenedAIM.get
Retrieve the list of email addresses that opened a given campaign with how many times they opened.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get opens."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignNotOpenedAIM.get
Retrieve the list of email addresses that did not open a given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get no opens."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEmailStatsAIMAll.get
Given a campaign and correct paging limits, return the entire click and open history with timestamps, ordered by time, for every user a campaign was delivered to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get stats."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 100, upper limit set at 1000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEmailStatsAIM.get
Given a campaign and email address, return the entire click and open history with timestamps, ordered by time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get stats."
    },
    "email_address": {
      "type": "string",
      "description": "An array of up to 50 email addresses to check OR the email \"id\" returned from listMemberInfo, Webhooks, and Campaigns. For backwards compatibility, if a string is passed, it will be treated as an array with a single element (will not work with XML-RPC)."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "email_address",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignClickDetailAIM.get
Return the list of email addresses that clicked on a given url, and how many times they clicked.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get stats"
    },
    "url": {
      "type": "string",
      "description": "The URL of the link that was clicked on."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "url",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignUnsubscribes.get
Get all unsubscribed email addresses for a given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignStats.get
Given a list and a campaign, get all the relevant campaign statistics (opens, bounces, clicks, etc.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull stats."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignMembers.get
Get all email addresses the campaign was successfully sent to (ie, no bounces)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull members."
    },
    "status": {
      "type": "string",
      "description": "The status to pull. By default, all records are returned",
      "enum": [
        "sent",
        "hard",
        "soft"
      ]
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 1000, upper limit set at 15000."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignGeoOpensForCountry.get
Retrieve the regions and number of opens tracked for a certain country.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "code": {
      "type": "string",
      "description": "An ISO3166 2 digit country code."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "code",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignGeoOpens.get
Retrieve the countries and number of opens tracked for each.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEmailDomainPerformance.get
Get the top 5 performing email domains for this campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull email domain performance."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEepUrlStats.get
Retrieve the tracked eepurl mentions on Twitter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull stats."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEcommOrders.get
Retrieve the Ecommerce Orders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 100, upper limit set at 500."
    },
    "since": {
      "type": "string",
      "description": "Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignClickStats.get
Get an array of the urls being tracked, and their click counts for a given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull stats."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignBounceMessages.get
Retrieve the full bounce messages for the given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 25, upper limit set at 50."
    },
    "since": {
      "type": "string",
      "description": "Pull only messages since this time - use YYYY-MM-DD format in GMT (we only store the date, not the time)."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignBounceMessage.get
Retrieve the most recent full bounce message for a specific email address on the given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "email": {
      "type": "string",
      "description": "The email address or unique id of the member to pull a bounce message."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "email",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignAnalytics.get
Retrieve the Google Analytics data we've collected for this campaign. Note, requires Google Analytics Add-on to be installed and configured.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull bounces."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignAdvice.get
Retrieve the text presented in our app for how a campaign performed and any advice we may have for you - best suited for display in customized reports pages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull advice text."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignAbuseReports.get
Get all email addresses that complained about a given campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to pull abuse reports."
    },
    "start": {
      "type": "integer",
      "description": "For large data sets, the page number to start at - defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "For large data sets, the number of results to return - defaults to 500, upper limit set at 1000."
    },
    "since": {
      "type": "string",
      "description": "Pull only messages since this time - use YYYY-MM-DD HH:II:SS format in GMT."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaigns.get
Get the list of campaigns and their details matching the specified filters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filters": {
      "type": "string",
      "description": "A hash of filters to apply to this query. See options: \"http://apidocs.mailchimp.com/api/1.3/campaigns.func.php\""
    },
    "start": {
      "type": "integer",
      "description": "Control paging of campaigns, start results at this campaign #, defaults to 1st page of data (page 0)."
    },
    "limit": {
      "type": "integer",
      "description": "Control paging of campaigns, number of campaigns to return with each call, defaults to 25 (max=1000)."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignUpdate.get
Update just about any setting for a campaign that has not been sent.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The Campaign Id to update."
    },
    "name": {
      "type": "string",
      "description": "For items in the options array, this will be that parameter's name (subject, from_email, etc.). Additional parameters will be that option name (content, segment_opts). \"type_opts\" will be the name of the type - rss, auto, trans, etc."
    },
    "value": {
      "type": "string",
      "description": "For items in the options array, this will be that parameter's value. For additional parameters, this is the same value passed to them."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "name",
    "value",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignUnschedule.get
Unschedule a campaign that is scheduled to be sent in the future.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to unschedule."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignTemplateContent.get
Get the HTML template content sections for a campaign. Note that this will return very jagged, non-standard results based on the template a campaign is using.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get content."
    },
    "dc": {
      "type": "string",
      "description": "the portion after the dash in your api key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "a valid api key for your user account."
    },
    "method": {
      "type": "string",
      "description": "is the method name from our api you are calling."
    },
    "output": {
      "type": "string",
      "description": "output formats for serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignShareReport.get
Get the URL to a customized VIP Report for the specified campaign and optionally send an email to someone with links to it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to share a report."
    },
    "opts": {
      "type": "string",
      "description": "Various parameters which can be used to configure the shared report. See options: \"http://apidocs.mailchimp.com/api/1.3/campaignsharereport.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "opts",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignSendTest.get
Send a test of this campaign to the provided email address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to test."
    },
    "test_emails": {
      "type": "string",
      "description": "An array of email address to receive the test message."
    },
    "send_type": {
      "type": "string",
      "description": "By default (null) both formats are sent - \"html\" or \"text\" send just that format."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "test_emails",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignSendNow.get
Send a given campaign immediately. For RSS campaigns, this will "start" them.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to send."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignSegmentTest.get
Allows one to test their segmentation rules before creating a campaign using them.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "list_id": {
      "type": "string",
      "description": "The list to test segmentation on."
    },
    "options": {
      "type": "string",
      "description": "Options for test segmentation. See options: \"http://apidocs.mailchimp.com/api/1.3/campaignsegmenttest.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "list_id",
    "options",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignSchedule.get
Schedule a campaign to be sent in the future.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to schedule."
    },
    "schedule_time": {
      "type": "string",
      "description": "The time to schedule the campaign. For A/B Split \"schedule\" campaigns, the time for Group A - in YYYY-MM-DD HH:II:SS format in GMT."
    },
    "schedule_time_b": {
      "type": "string",
      "description": "The time to schedule Group B of an A/B Split \"schedule\" campaign - in YYYY-MM-DD HH:II:SS format in GMT."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "schedule_time",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignResume.get
Resume sending an AutoResponder or RSS campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to resume."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignReplicate.get
Replicate a campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The Campaign Id to replicate."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignPause.get
Pause an AutoResponder or RSS campaign from sending.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The id of the campaign to pause."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignEcommOrderAdd.get
Attach Ecommerce Order Information to a Campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order": {
      "type": "string",
      "description": "An array of information pertaining to the order that has completed. See options: \"http://apidocs.mailchimp.com/api/1.3/campaignecommorderadd.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "order",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignDelete.get
Delete a campaign.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The Campaign Id to delete."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignCreate.get
Create a new draft campaign to send.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "The Campaign Type to create.",
      "enum": [
        "regular",
        "plaintext",
        "absplit",
        "rss",
        "trans",
        "auto"
      ]
    },
    "options": {
      "type": "string",
      "description": "A hash of the standard options for this campaign. See options: \"http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php\""
    },
    "content": {
      "type": "string",
      "description": "The content for this campaign. See options: \"http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php\""
    },
    "segment_opts": {
      "type": "string",
      "description": "If you wish to do Segmentation with this campaign this array should contain: see campaignSegmentTest(). It's suggested that you test your options against campaignSegmentTest(). Also, \"trans\" campaigns do not support segmentation."
    },
    "type_opts": {
      "type": "string",
      "description": "Array for RSS, A/B Split or AutoResponder campaigns. See options: \"http://apidocs.mailchimp.com/api/1.3/campaigncreate.func.php\""
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "options",
    "content",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: _method_campaignContent.get
Get the content (both html and text) for a campaign either as it would appear in the campaign archive or as the raw, original content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cid": {
      "type": "string",
      "description": "The campaign id to get content for (can be gathered using campaigns())."
    },
    "for_archive": {
      "type": "boolean",
      "description": "Controls whether we return the Archive version (true) or the Raw version (false), defaults to true."
    },
    "dc": {
      "type": "string",
      "description": "The portion after the dash in your API Key. e.g. \"us1\", \"us2\", \"uk1\", etc."
    },
    "apikey": {
      "type": "string",
      "description": "A valid API Key for your user account."
    },
    "method": {
      "type": "string",
      "description": "Is the method name from our API you are calling."
    },
    "output": {
      "type": "string",
      "description": "Output Formats for Serialized calls.",
      "enum": [
        "json",
        "php",
        "xml",
        "lolcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "cid",
    "dc",
    "apikey",
    "method"
  ]
}
```
### Output Schema
```json
{}
```
