# @datafire/motaword
Use MotaWord API to post and track your translation projects.

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
## Operation: getEndpoints
The root endpoint will provide you a JSON Swagger definition.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: getFormats
Get a list of supported formats for documents, style guides and extensions.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Formats"
  },
  "type": "object"
}
```
## Operation: downloadGlobalGlossary
Download your corporate account's global glossary. This endpoint is available only for corporate account customers.

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
## Operation: updateGlobalGlossary
Update your corporate account's global glossary. This endpoint is available only for corporate account customers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "glossary": {
      "type": "string",
      "description": "Glossary file. Currently supported formats: .xlsx, .tbx\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "glossary"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "success",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: getLanguages
Get a list of supported languages

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Language"
  },
  "type": "array"
}
```
## Operation: getAccount
Get your account information and summary.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: getProjects
Get a list of your projects

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectList"
  },
  "type": "object"
}
```
## Operation: createProject
Create a new project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source_language": {
      "type": "string"
    },
    "target_languages[]": {
      "type": "array"
    },
    "callback_url": {
      "type": "string",
      "description": "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'."
    },
    "custom": {
      "type": "array",
      "description": "Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value."
    },
    "documents[]": {
      "type": "string",
      "description": "Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls."
    },
    "styleguides[]": {
      "type": "string",
      "description": "Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls."
    },
    "glossaries[]": {
      "type": "string",
      "description": "Optional. Only one glossary is supported at the moment."
    }
  },
  "additionalProperties": false,
  "required": [
    "source_language",
    "target_languages[]"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "object"
}
```
## Operation: getProject
Get single project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
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
  "$ref": "#/definitions/Project"
}
```
## Operation: updateProject
Update project language pairs

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "source_language": {
      "type": "string"
    },
    "target_languages[]": {
      "type": "array"
    },
    "callback_url": {
      "type": "string",
      "description": "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'."
    },
    "custom": {
      "type": "array",
      "description": "Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "source_language",
    "target_languages[]"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "object"
}
```
## Operation: download
Download the latest translation package. You must have given a /package call beforehand and wait until the packaging status is 'completed'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
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
## Operation: downloadLanguage
Download only the translation package of this language. You must have given a /package call beforehand and wait until the packaging status is 'completed'.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "language": {
      "type": "string",
      "description": "Language code. You can download the translation of only a specific language."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "language"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: launchProject
Launch your translation project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "payment_method": {
      "type": "string",
      "description": "Optional. Determines which method to use for payment. Options are 'corporate', 'client'.",
      "enum": [
        "corporate",
        "client"
      ]
    },
    "payment_code": {
      "type": "string",
      "description": "Optional. According to your corporate account configuration, this may be required."
    },
    "budget_code": {
      "type": "string",
      "description": "Optional with corporate accounts. Not available for others."
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
    "status": {
      "default": "started",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: package
Package the translation project, make it ready to be downloaded.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "async": {
      "type": "integer",
      "description": "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call."
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
## Operation: trackPackage
This request will tell you the current progress of the translation packaging. You will use the 'key' provided by the /package call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "key": {
      "type": "string",
      "description": "This is the package tracking key provided in the response of a /package call."
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
  "$ref": "#/definitions/PackageStatus"
}
```
## Operation: packageLanguage
Package the translation project, make it ready to be downloaded.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "language": {
      "type": "string",
      "description": "Language code. You can package the translation of only a specific language."
    },
    "async": {
      "type": "integer",
      "description": "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call."
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Package"
}
```
## Operation: getProgress
Get the progress of an already launched project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
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
  "$ref": "#/definitions/Progress"
}
```
## Operation: getActivities
Get a list of realtime activities on the project, such as translation suggestion and translation approval.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActivityList"
}
```
## Operation: getActivity
Get a single realtime activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "activityId": {
      "type": "integer",
      "format": "int64",
      "description": "Activity ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "activityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Activity"
}
```
## Operation: submitComment
Submit a comment to an activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "activityId": {
      "type": "integer",
      "format": "int64",
      "description": "Activity ID"
    },
    "comment": {
      "type": "string",
      "description": "Comment text."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "activityId",
    "comment"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: getActivityComments
Get a list of comments belonging to this activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "activityId": {
      "type": "integer",
      "format": "int64",
      "description": "Activity ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "activityId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: getComments
Get a list of activity comments throughout the whole project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: getDocuments
Get a list of documents

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DocumentList"
}
```
## Operation: createDocument
Upload a new document

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "documents[]": {
      "type": "string",
      "description": "You can add as many files as you want in documents[] parameter."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "documents[]"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Document"
}
```
## Operation: deleteDocument
Delete the document

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "documentId": {
      "type": "integer",
      "format": "int64",
      "description": "Document ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "documentId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "success",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: getDocument
Get single document

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "documentId": {
      "type": "integer",
      "format": "int64",
      "description": "Document ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "documentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Document"
}
```
## Operation: updateDocument
Update the document. File name and contents will replaced with the new one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "documentId": {
      "type": "integer",
      "format": "int64",
      "description": "Document ID"
    },
    "documents": {
      "type": "string",
      "description": "Single file data. The name is plural to provide a consistent naming convention."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "documentId",
    "documents"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Document"
}
```
## Operation: downloadDocument
Download a document

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "documentId": {
      "type": "integer",
      "format": "int64",
      "description": "Document ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "documentId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getGlossaries
Get a list of glossaries

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlossaryList"
}
```
## Operation: createGlossary
Upload a new glossary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "glossaries": {
      "type": "string",
      "description": "You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "glossaries"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Glossary"
}
```
## Operation: deleteGlossary
Delete the glossary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "glossaryId": {
      "type": "integer",
      "format": "int64",
      "description": "Glossary ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "glossaryId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "success",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: getGlossary
Get single glossary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "glossaryId": {
      "type": "integer",
      "format": "int64",
      "description": "Glossary ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "glossaryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Glossary"
}
```
## Operation: updateGlossary
Update the glossary. File name and contents will replaced with the new one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "glossaryId": {
      "type": "integer",
      "format": "int64",
      "description": "Glossary ID"
    },
    "glossaries": {
      "type": "string",
      "description": "Single file data. The name is plural to provide a consistent naming convention."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "glossaryId",
    "glossaries"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Glossary"
}
```
## Operation: downloadGlossary
Download a glossary

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "glossaryId": {
      "type": "integer",
      "format": "int64",
      "description": "Glossary ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "glossaryId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getStyleGuides
Get a list of style guides

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleGuideList"
}
```
## Operation: createStyleGuide
Upload a new style guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "styleguides[]": {
      "type": "string",
      "description": "You can add as many files as you want in styleguides[] parameter."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "styleguides[]"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleGuide"
}
```
## Operation: deleteStyleGuide
Delete the style guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "styleGuideId": {
      "type": "integer",
      "format": "int64",
      "description": "Style Guide ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "styleGuideId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "success",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: getStyleGuide
Get single style guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "styleGuideId": {
      "type": "integer",
      "format": "int64",
      "description": "Style Guide ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "styleGuideId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleGuide"
}
```
## Operation: updteStyleGuide
Update the style guide. File name and contents will replaced with the new one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "styleGuideId": {
      "type": "integer",
      "format": "int64",
      "description": "Style guide ID"
    },
    "styleguides": {
      "type": "string",
      "description": "Single file data. The name is plural to provide a consistent naming convention."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "styleGuideId",
    "styleguides"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StyleGuide"
}
```
## Operation: downloadStyleGuide
Download a style guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "integer",
      "format": "int64",
      "description": "Project ID"
    },
    "styleGuideId": {
      "type": "integer",
      "format": "int64",
      "description": "Style Guide ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "styleGuideId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: downloadGlobalStyleGuide
Download your corporate account's global style guide. This endpoint is available only for corporate account customers.

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
## Operation: updateGlobalStyleGuide
Update your corporate account's global style guide. This endpoint is available only for corporate account customers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "styleguide": {
      "type": "string",
      "description": "Style guide file. Currently supported formats: .pdf, .docx, .txt\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "styleguide"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "default": "success",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: getAccessToken
MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call. Currently, we only allow Client Credential type flow.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "grant_type": {
      "type": "string",
      "description": "OAuth2 grant type. Currently only 'client_credentials' available."
    },
    "Authorization": {
      "type": "string",
      "description": "HTTP Basic Authorization header."
    }
  },
  "additionalProperties": false,
  "required": [
    "grant_type",
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Token"
}
```
