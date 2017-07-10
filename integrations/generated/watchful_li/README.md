# @datafire/watchful_li


## Operation: getAudits
Returns a list of audits

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
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Audit"
}
```
## Operation: CreateAudits
Create a audit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Audit"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Audit"
}
```
## Operation: getFieldsAudits
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: deleteAuditById
Delete a specific audit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of audit that needs to be deleted",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getAuditById
Returns a audit based on ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of audit that needs to be fetched",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
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
  "$ref": "#/definitions/Audit"
}
```
## Operation: getExtensions
Returns a list Extensions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ext_name": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "siteids": {
      "type": "string",
      "description": "List of sites id separated by comma"
    },
    "ext_prefix": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'. technical name of the extension com_xxxx"
    },
    "version": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "vUpdate": {
      "type": "integer",
      "description": "update available for this extension",
      "enum": [
        1,
        0
      ]
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Extension"
}
```
## Operation: getFieldsExtensions
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: ignoreExtensionUpdate
Set 'ignore updates' for a given extension / site_id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the extension",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: unignoreExtensionUpdate
Remove 'ignore updates' for a given extension

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the extension",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: updateExtension
Update the extension on the remote site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the extension",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getFeedbacks
Returns a list of feedbacks

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas (es. name,id)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Feedback"
}
```
## Operation: createFeedbacks
Create a feedback

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Feedback"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Audit"
}
```
## Operation: getFieldsFeedbacks
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: logs.get
Returns a list of logs

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "log_type": {
      "type": "string",
      "description": "Type of the log",
      "enum": [
        "",
        "plugin_sends_error",
        "curlerror",
        "modified_file",
        "word_not_in_homepage",
        "file_not_exists",
        "update_available",
        "new_extension",
        "deleted_extension",
        "extension_not_saved",
        "modified_value_files",
        "custom"
      ]
    },
    "log_entry": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "from": {
      "type": "string",
      "description": "Logs after this date, format YYYY-MM-DD HH:MM:SS"
    },
    "to": {
      "type": "string",
      "description": "Logs before this date, format YYYY-MM-DD HH:MM:SS"
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Log"
}
```
## Operation: getExportLogs
Returns a file contain the list of logs

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Format of exported file (PDF or CSV)",
      "enum": [
        "csv",
        "pdf"
      ]
    },
    "site": {
      "type": "integer",
      "format": "int64",
      "description": "Site id of the log"
    },
    "filter_type": {
      "type": "string",
      "description": "Type of the log",
      "enum": [
        "",
        "plugin_sends_error",
        "curlerror",
        "modified_file",
        "word_not_in_homepage",
        "file_not_exists",
        "update_available",
        "new_extension",
        "deleted_extension",
        "extension_not_saved",
        "modified_value_files",
        "custom"
      ]
    },
    "search": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "startdate": {
      "type": "string",
      "description": "Logs after this date, format YYYY-MM-DD HH:MM:SS"
    },
    "enddate": {
      "type": "string",
      "description": "Logs before this date, format YYYY-MM-DD HH:MM:SS"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "startid": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getFieldsLogs
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getTypesLogs
Returns a list of log types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: deleteLogById
Delete a specific log

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of log that needs to be deleted",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: uploadZipPackage
Upload a ZIP package

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string",
      "description": "ZIP package"
    }
  },
  "additionalProperties": false,
  "required": [
    "file"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: reports.sites.id.get
Returns a PDF report based on a site ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID that needs to be fetched",
      "minimum": 1
    },
    "from": {
      "type": "string",
      "description": "Start of the report, format YYYY-MM-DD, default today-30day "
    },
    "to": {
      "type": "string",
      "description": "End of the report, format YYYY-MM-DD, default today"
    },
    "reports": {
      "type": "string",
      "description": "Type of reports separate by comas: Ga,Logs,Uptime"
    },
    "log_type": {
      "type": "string",
      "description": "Type of the log to show in the report",
      "enum": [
        "",
        "plugin_sends_error",
        "curlerror",
        "modified_file",
        "word_not_in_homepage",
        "file_not_exists",
        "update_available",
        "new_extension",
        "deleted_extension",
        "extension_not_saved",
        "modified_value_files"
      ]
    },
    "compare": {
      "type": "integer",
      "description": "Define if you want show previous values in Google Analytics graph",
      "enum": [
        0,
        1
      ]
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
  "$ref": "#/definitions/Reports"
}
```
## Operation: reports.tags.id.get
Returns a report based on a site ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID that needs to be fetched",
      "minimum": 1
    },
    "from": {
      "type": "string",
      "description": "Start of the report, format YYYY-MM-DD, default today-30day "
    },
    "to": {
      "type": "string",
      "description": "End of the report, format YYYY-MM-DD, default today"
    },
    "reports": {
      "type": "string",
      "description": "Type of reports separate by comas: Ga,Logs,Uptime"
    },
    "log_type": {
      "type": "string",
      "description": "Type of the log to show in the report",
      "enum": [
        "",
        "plugin_sends_error",
        "curlerror",
        "modified_file",
        "word_not_in_homepage",
        "file_not_exists",
        "update_available",
        "new_extension",
        "deleted_extension",
        "extension_not_saved",
        "modified_value_files"
      ]
    },
    "compare": {
      "type": "integer",
      "description": "Define if you want show previous values in Google Analytics graph",
      "enum": [
        0,
        1
      ]
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
  "$ref": "#/definitions/Reports"
}
```
## Operation: getSites
Returns a list of Sites

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "siteids": {
      "type": "string",
      "description": "List of sites id separated by comma"
    },
    "name": {
      "type": "string",
      "description": "Site name. Do a 'LIKE' search, you can also use '%'"
    },
    "access_url": {
      "type": "string",
      "description": "Access URL. Do a 'LIKE' search, you can also use '%'"
    },
    "j_version": {
      "type": "string",
      "description": "Joomla version. Do a 'LIKE' search, you can also use '%'"
    },
    "ip": {
      "type": "string",
      "description": "Ip address. Do a 'LIKE' search, you can also use '%'"
    },
    "jUpdate": {
      "type": "integer",
      "description": "Joomla core update status (1: update required, 0: update not required)",
      "enum": [
        1,
        0
      ]
    },
    "canUpdate": {
      "type": "integer",
      "description": "canUpdate",
      "enum": [
        1,
        0
      ]
    },
    "published": {
      "type": "integer",
      "description": "Is published",
      "enum": [
        1,
        0
      ]
    },
    "error": {
      "type": "string",
      "description": "Has errors"
    },
    "nbUpdates": {
      "type": "string"
    },
    "up": {
      "type": "integer",
      "description": "Is online",
      "enum": [
        1,
        0
      ]
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separated by commas (e.g. name,id)"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of objects to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: createSite
Create a site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PostSite"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.metadata.get
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: sites.id.delete
Delete a specific Site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of Site that needs to be deleted",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getSiteById
Return a site based on ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID that needs to be fetched",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
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
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.id.put
Update a site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website that needs to be update",
      "minimum": 1
    },
    "body": {
      "$ref": "#/definitions/PostSite"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: getSiteAudits
Return audits for a specific website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field"
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
  "$ref": "#/definitions/Audits"
}
```
## Operation: createAudits
Create an audit for the site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Audit"
}
```
## Operation: addSiteToBackupQueue
Add the site to the backup queue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Site"
}
```
## Operation: getBackupProfiles
Return backup profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
## Operation: getListBackups
List of latest backups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
## Operation: startSiteBackup
Start a remote backup for the site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Site"
}
```
## Operation: stepSiteBackup
Step (continue) a remote backup for the site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Site"
}
```
## Operation: sites.id.extensions.get
Get extensions for a site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field"
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
  "$ref": "#/definitions/Extension"
}
```
## Operation: installExtension
Install extension

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "url": {
      "type": "string",
      "format": "url",
      "description": "URL to install the extension from"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sites.id.logs.get
Return logs for a specific website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "log_entry": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "log_type": {
      "type": "string",
      "description": "Type of the log",
      "enum": [
        "",
        "plugin_sends_error",
        "curlerror",
        "modified_file",
        "word_not_in_homepage",
        "file_not_exists",
        "update_available",
        "new_extension",
        "deleted_extension",
        "extension_not_saved",
        "modified_value_files"
      ]
    },
    "from": {
      "type": "string",
      "description": "Logs after this date, format YYYY-MM-DD HH:MM:SS"
    },
    "to": {
      "type": "string",
      "description": "Logs before this date, format YYYY-MM-DD HH:MM:SS"
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
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
  "$ref": "#/definitions/Log"
}
```
## Operation: CreateLog
Create a custom log for a specific website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "body": {
      "$ref": "#/definitions/PostLog"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Log"
}
```
## Operation: deleteMonitor
Return boolean

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Monitor"
}
```
## Operation: postMonitor
Return boolean

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Monitor"
}
```
## Operation: scanner
Scan the site for malware

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: sites.id.tags.get
Return tags for a specific website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "name": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "type": {
      "type": "string",
      "description": "Bootstrap color of the tag",
      "enum": [
        "",
        "default",
        "success",
        "warning",
        "important",
        "info",
        "inverse"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field"
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
  "$ref": "#/definitions/Tag"
}
```
## Operation: postTags
Add tags for a specific website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
    },
    "body": {
      "$ref": "#/definitions/Tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Site"
}
```
## Operation: updateJoomla
Update Joomla core on the remote site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getUptime
Return uptime data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Uptime"
}
```
## Operation: validateSite
validate the site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Log"
}
```
## Operation: validateDebugSite
validate the site, return the debug information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of the website",
      "minimum": 1
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
  "$ref": "#/definitions/Log"
}
```
## Operation: getSsoUsers
Returns a list of SSO Users

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SsoUsers"
}
```
## Operation: CreateSsoUsers
Create a SSO User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SsoUsers"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SsoUsers"
}
```
## Operation: deleteSsoUserById
Delete a specific SSO User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of SSO User that needs to be deleted",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getSsoUsersById
Returns a SSO User based on ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of SSO User that needs to be fetched",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
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
  "$ref": "#/definitions/SsoUsers"
}
```
## Operation: UpdateSsoUsers
Update a SSO User

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of SSO User that needs to be updated",
      "minimum": 1
    },
    "body": {
      "$ref": "#/definitions/SsoUsers"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SsoUsers"
}
```
## Operation: tags.get
Returns a list of tags

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "type": {
      "type": "string",
      "description": "Bootstrap color of the tag",
      "enum": [
        "",
        "default",
        "success",
        "warning",
        "important",
        "info",
        "inverse"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: CreateTags
Create a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: tags.metadata.get
Returns a list of fields

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: tags.id.delete
Delete a specific tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of tag that needs to be deleted",
      "minimum": 1
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
  "type": "string"
}
```
## Operation: getTagById
Returns a tag based on ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of tag that needs to be fetched",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
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
  "$ref": "#/definitions/Tag"
}
```
## Operation: UpdateTag
Update a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of tag",
      "minimum": 1
    },
    "body": {
      "$ref": "#/definitions/Tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tag"
}
```
## Operation: getSitesByTags
Returns a list of sites based with a specific tag id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of tag that needs to be fetched",
      "minimum": 1
    },
    "name": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "access_url": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "j_version": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "ip": {
      "type": "string",
      "description": "Do a 'LIKE' search, you can also use '%'"
    },
    "jUpdate": {
      "type": "integer",
      "description": "Joomla core update",
      "enum": [
        1,
        0
      ]
    },
    "published": {
      "type": "integer",
      "description": "is published",
      "enum": [
        1,
        0
      ]
    },
    "error": {
      "type": "string",
      "description": "have errors"
    },
    "nbUpdates": {
      "type": "string"
    },
    "up": {
      "type": "integer",
      "description": "is the website online",
      "enum": [
        1,
        0
      ]
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of object to return (max 100, default 25)",
      "minimum": 1
    },
    "limitstart": {
      "type": "integer",
      "format": "int64",
      "description": "Start of the return (default 0)",
      "minimum": 0
    },
    "order": {
      "type": "string",
      "description": "ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-"
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
  "$ref": "#/definitions/Site"
}
```
## Operation: getVersions
Get list of versions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Fields to return separate by comas: name,id"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Version"
}
```
## Operation: getVersion
Find a version by ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "ID of version that needs to be fetched",
      "minimum": 1
    },
    "fields": {
      "type": "string",
      "description": "Fields to return separate by commas: name,id"
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
  "$ref": "#/definitions/Version"
}
```
