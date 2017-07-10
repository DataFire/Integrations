# @datafire/appveyor
AppVeyor is a hosted continuous integration service which runs on Microsoft
Windows.  The AppVeyor REST API provides a RESTful way to interact with the
AppVeyor service.  This includes managing projects, builds, deployments,
and the teams that build them.

Additional help and discussion of the AppVeyor REST API is available at
http://help.appveyor.com/discussions

This Swagger definition is an **unofficial** description of the AppVeyor
REST API maintained at https://github.com/kevinoid/appveyor-swagger
Please report any issues or suggestions for this Swagger definition at
https://github.com/kevinoid/appveyor-swagger/issues/new

#### API Conventions

Fields which are missing from update operations (`PUT` requests) are
typically reset to their default values.  So although most fields are not
technically required, they should usually be specified in practice.


## Operation: encryptValue
Encrypt a value for use in StoredValue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/EncryptRequest"
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
  "type": "string"
}
```
## Operation: getBuildLog
Download build log

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "jobId": {
      "type": "string",
      "description": "Build ID (`jobId` property of `BuildJob`)"
    }
  },
  "additionalProperties": false,
  "required": [
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: startBuild
Start build of branch most recent commit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/BuildStartRequest"
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
  "$ref": "#/definitions/Build"
}
```
## Operation: cancelBuild
Cancel build

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    },
    "buildVersion": {
      "type": "string",
      "description": "Build Version (`version` property of `Build`)"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug",
    "buildVersion"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollaborators
Get collaborators

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserAccount"
  },
  "type": "array"
}
```
## Operation: addCollaborator
Add collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CollaboratorAddition"
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
{}
```
## Operation: updateCollaborator
Update collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CollaboratorUpdate"
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
{}
```
## Operation: deleteCollaborator
Delete collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "description": "User ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollaborator
Get collaborator

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "description": "User ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserAccountRolesResults"
}
```
## Operation: startDeployment
Start deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeploymentStartRequest"
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
  "$ref": "#/definitions/Deployment"
}
```
## Operation: cancelDeployment
Cancel deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeploymentCancellation"
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
{}
```
## Operation: getDeployment
Get deployment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deploymentId": {
      "type": "integer",
      "description": "Deployment ID (`deploymentId` property of `Deployment`)",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "deploymentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectDeployment"
}
```
## Operation: getEnvironments
Get environments

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/DeploymentEnvironmentLookupModel"
  },
  "type": "array"
}
```
## Operation: addEnvironment
Add environment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeploymentEnvironmentAddition"
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
  "$ref": "#/definitions/DeploymentEnvironmentWithSettings"
}
```
## Operation: updateEnvironment
Update environment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DeploymentEnvironmentWithSettings"
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
  "$ref": "#/definitions/DeploymentEnvironmentWithSettings"
}
```
## Operation: deleteEnvironment
Delete environment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deploymentEnvironmentId": {
      "type": "integer",
      "description": "Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)\n",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "deploymentEnvironmentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getEnvironmentDeployments
Get environment deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deploymentEnvironmentId": {
      "type": "integer",
      "description": "Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)\n",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "deploymentEnvironmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentEnvironmentDeploymentsResults"
}
```
## Operation: getEnvironmentSettings
Get environment settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "deploymentEnvironmentId": {
      "type": "integer",
      "description": "Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)\n",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "deploymentEnvironmentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeploymentEnvironmentSettingsResults"
}
```
## Operation: getProjects
Get projects

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "array"
}
```
## Operation: addProject
Add project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ProjectAddition"
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
  "$ref": "#/definitions/Project"
}
```
## Operation: updateProject
Update project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ProjectWithConfiguration"
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
{}
```
## Operation: getPublicProjectStatusBadge
Get status badge image for a project with a public repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "branch": {
      "type": "string",
      "description": "Repository Branch",
      "minLength": 1
    },
    "svg": {
      "type": "boolean",
      "description": "Return an SVG image instead of PNG?  Exclusive with `retina`."
    },
    "retina": {
      "type": "boolean",
      "description": "Return a larger image suitable for retina displays?  Exclusive with `svg`."
    },
    "passingText": {
      "type": "string",
      "description": "Text to show in badge when build is passing.",
      "minLength": 1
    },
    "failingText": {
      "type": "string",
      "description": "Text to show in badge when build is failing.",
      "minLength": 1
    },
    "pendingText": {
      "type": "string",
      "description": "Text to show in badge when build is pending.",
      "minLength": 1
    },
    "badgeRepoProvider": {
      "type": "string",
      "description": "Repository provider supported for badges",
      "enum": [
        "bitBucket",
        "gitHub"
      ]
    },
    "repoAccountName": {
      "type": "string",
      "description": "Account name with repository provider",
      "minLength": 1
    },
    "repoSlug": {
      "type": "string",
      "description": "Slug (URL component) of repository.",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "badgeRepoProvider",
    "repoAccountName",
    "repoSlug"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: getProjectStatusBadge
Get project status badge image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "svg": {
      "type": "boolean",
      "description": "Return an SVG image instead of PNG?  Exclusive with `retina`."
    },
    "retina": {
      "type": "boolean",
      "description": "Return a larger image suitable for retina displays?  Exclusive with `svg`."
    },
    "passingText": {
      "type": "string",
      "description": "Text to show in badge when build is passing.",
      "minLength": 1
    },
    "failingText": {
      "type": "string",
      "description": "Text to show in badge when build is failing.",
      "minLength": 1
    },
    "pendingText": {
      "type": "string",
      "description": "Text to show in badge when build is pending.",
      "minLength": 1
    },
    "webhookId": {
      "type": "string",
      "description": "Project webhook ID (`webhookId` from `ProjectWithConfiguration`)",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "webhookId"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: getProjectBranchStatusBadge
Get project branch status badge image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "svg": {
      "type": "boolean",
      "description": "Return an SVG image instead of PNG?  Exclusive with `retina`."
    },
    "retina": {
      "type": "boolean",
      "description": "Return a larger image suitable for retina displays?  Exclusive with `svg`."
    },
    "passingText": {
      "type": "string",
      "description": "Text to show in badge when build is passing.",
      "minLength": 1
    },
    "failingText": {
      "type": "string",
      "description": "Text to show in badge when build is failing.",
      "minLength": 1
    },
    "pendingText": {
      "type": "string",
      "description": "Text to show in badge when build is pending.",
      "minLength": 1
    },
    "webhookId": {
      "type": "string",
      "description": "Project webhook ID (`webhookId` from `ProjectWithConfiguration`)",
      "minLength": 1
    },
    "buildBranch": {
      "type": "string",
      "description": "Build Branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "webhookId",
    "buildBranch"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: deleteProject
Delete project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectLastBuild
Get project last build

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectBuildResults"
}
```
## Operation: getProjectLastBuildBranch
Get project last branch build

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    },
    "buildBranch": {
      "type": "string",
      "description": "Build Branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug",
    "buildBranch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectBuildResults"
}
```
## Operation: getProjectBuildByVersion
Get project build by version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    },
    "buildVersion": {
      "type": "string",
      "description": "Build Version (`version` property of `Build`)"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug",
    "buildVersion"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectBuildResults"
}
```
## Operation: deleteProjectBuildCache
Delete project build cache

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectDeployments
Get project deployments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectDeploymentsResults"
}
```
## Operation: getProjectHistory
Get project history

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recordsNumber": {
      "type": "integer",
      "description": "Number of results to include in the response.",
      "minimum": 0
    },
    "startBuildId": {
      "type": "integer",
      "description": "Maximum `buildId` to include in the results (exclusive).",
      "minimum": 0
    },
    "branch": {
      "type": "string",
      "description": "Repository Branch",
      "minLength": 1
    },
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "recordsNumber",
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHistory"
}
```
## Operation: getProjectSettings
Get project settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSettingsResults"
}
```
## Operation: updateProjectBuildNumber
Update project build number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ProjectBuildNumberUpdate"
    },
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectSettingsYaml
Get project settings in YAML

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: updateProjectSettingsYaml
Update project settings in YAML

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "format": "binary",
      "type": "string"
    },
    "accountName": {
      "type": "string",
      "description": "AppVeyor account name (`accountName` property of `UserAccount`)",
      "minLength": 1
    },
    "projectSlug": {
      "type": "string",
      "description": "Project Slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "accountName",
    "projectSlug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRoles
Get roles

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Role"
  },
  "type": "array"
}
```
## Operation: addRole
Add role

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RoleAddition"
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
  "$ref": "#/definitions/RoleWithGroups"
}
```
## Operation: updateRole
Update role

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RoleWithGroups"
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
  "$ref": "#/definitions/RoleWithGroups"
}
```
## Operation: deleteRole
Delete role

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleId": {
      "type": "integer",
      "description": "Role ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "roleId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRole
Get role

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "roleId": {
      "type": "integer",
      "description": "Role ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "roleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RoleWithGroups"
}
```
## Operation: getUsers
Get users

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserAccount"
  },
  "type": "array"
}
```
## Operation: addUser
Add user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UserAddition"
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
{}
```
## Operation: updateUser
Update user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UserAccount"
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
{}
```
## Operation: deleteUser
Delete user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "description": "User ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUser
Get user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "description": "User ID",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserAccountRolesResults"
}
```
