# @datafire/fitbit
Bring Fitbit health data into your apps, including user activities, sleep, heart, glucose and blood pressure information.

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
## Operation: user._collection_pathapiSubscriptions.json.get
Get a list of user's subscriptions for your application in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "collection-path": {
      "type": "string",
      "enum": [
        "/",
        "/activities/",
        "/foods/",
        "/body/",
        "/sleep/"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "collection-path"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._collection_pathapiSubscriptions.subscription_id.json.delete
Delete a subscription for the user and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "collection-path": {
      "type": "string",
      "enum": [
        "/",
        "/activities/",
        "/foods/",
        "/body/",
        "/sleep/"
      ]
    },
    "subscription-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "collection-path",
    "subscription-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._collection_pathapiSubscriptions.subscription_id.json.post
Add a subscription for the user to get notifications and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "collection-path": {
      "type": "string",
      "enum": [
        "/",
        "/activities/",
        "/foods/",
        "/body/",
        "/sleep/"
      ]
    },
    "subscription-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "collection-path",
    "subscription-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.friends.invitations.from_user_id.json_accept_accept.post
Accept or reject an invite to become friends with inviting user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "from-user-id": {
      "type": "string"
    },
    "accept": {
      "type": "string",
      "enum": [
        "true",
        "false"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "from-user-id",
    "accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.friends.invitations.json_invitedUserEmail_invitedUserEmail.post
Invite a user to become friends with authorized user. If you provide invitedUserEmail parameter with the request, standard friendship invitation email will be sent to the invited user, that he can accept later. Contrary, invitedUserId parameter creates an invite silently, so it could only be fetched through the Get Invites endpoint. You can accept or reject both invitation types on behalf of the authorized user via Accept Invite API call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "invitedUserEmail": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "invitedUserEmail"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.friends.invitations.json.get
Retrieve the list of invites to become freinds for a user in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: foods.units.json.get
Get list of all valid Fitbit food units in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: foods.food_id.json.get
Get the details of a specific food in Fitbit Food database (or private food for the user) in the format requested. Note, that nutritional values currently included in response only for the private foods.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "food-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "food-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: foods.search.json_query_query.get
Given a search query, get a list of public foods from Fitbit foods database and private foods the user created in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "query": {
      "type": "string",
      "enum": [
        "Icecream"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: activities.id.json.get
Get the details of a specific activity in Fitbit activities database in the format requested. If activity has levels, also get list of activity level details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: activities.json.get
Get a tree of all valid Fitbit public activities from the activities catalog as well as private custom activities the user created in the format requested. If activity has levels, also get a list of activity level details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.devices.json.get
Retrieve the list of Fitbit devices for a user in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.foods.log.goal.json.post
Update (create) a user's daily calorie consumption goal or Food Plan and get a response in the format requested. Food Plan could not be created unless user already has active goal (Update-Weight-Goal). Depending on the weight goal setup only either MAINTENANCE (in case start weight is close to target weight or smaller) or one of the four other "lose" food plans could be created via intensity POST parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "intensity": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "intensity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.goal.json.get
Get a user's current daily calorie consumption goal and/or Food Plan in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "intensity": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "intensity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.meals.json.get
Get a list of meals user created in his food log in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: foods.json.post
Create new private food for a user and get a response in a format requested. Created private food could be found in results of Search Foods call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "name": {
      "type": "string"
    },
    "defaultFoodMeasurementUnitId": {
      "type": "string"
    },
    "defaultServingSize": {
      "type": "string"
    },
    "calories": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "name",
    "defaultFoodMeasurementUnitId",
    "defaultServingSize",
    "calories"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.water.water_log_id.json.delete
Delete user's water log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "water-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "water-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.water.json.post
Create log entry for a water using units in the unit system that corresponds to the Accept-Language header provided (or waterUnit) and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "amount": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "amount",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.water.date.date.json.get
Get a summary and list of a user's water log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.favorite.id.json.delete
Delete the food with the given id from user's list of favorite foods.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.favorite.id.json.post
Add the food with the given id to user's list of favorite foods.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.goals.weekly.json_type_type_value_value.post
Create or updates user's weekly activity goals and get a response in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "steps",
        "distance",
        "floors"
      ]
    },
    "value": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "type",
    "value"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.goals.daily.json_type_type_value_value.post
Create or updates user's daily activity goals and get a response in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "steps",
        "distance",
        "floors",
        "caloriesOut"
      ]
    },
    "value": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "type",
    "value"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.goals.weekly.json.get
Get a user's current weekly activity goals in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.goals.daily.json.get
Get a user's current daily activity goals in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.log.favorite.id.json.delete
Delete the activity with the given id from user's list of favorite activities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.log.favorite.id.json.post
Adds the activity with the given id to user's list of favorite activities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.favorite.json.get
Get a list of a user's favorite foods in the format requested. A user marks a food as favorite on the user's Food Tab tab. A favorite food in the list provides a quick way to log the food via the Log Food endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.foods.log.frequent.json.get
Get a list of a user's frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.foods.log.recent.json.get
Get a list of a user's recent foods in the format requested. A recent food provides a quick way to log the food via the Log Food endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.favorite.json.get
Get a list of a user's favorite activities in the format requested. A user marks an activity as favorite on the user's Activities Tab. The activity ids in the list can be used to create a new activity log entry via the Log Activity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.frequent.json.get
Get a list of a user's frequent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided. A frequent activity record contains the distance and duration values recorded the last time the activity was logged. The record retrieved can therefore be used to log the activity via the Log Activity with the same or adjusted values for distance and duration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.recent.json.get
Get a list of a user's recent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided. A recent activity record contains the distance and duration values recorded the last time the activity was logged. The record retrieved can therefore be used to log the activity via the Log Activity with the same or adjusted values for distance and duration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user.user_id.sleep.minutesAsleep.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "start-date-or-end-date": {
      "type": "string"
    },
    "end-date-or-period": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "start-date-or-end-date",
    "end-date-or-period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.foods.log.caloriesIn.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "start-date-or-end-date": {
      "type": "string"
    },
    "end-date-or-period": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "start-date-or-end-date",
    "end-date-or-period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.goal.json.post
Create or updates user's fat goal and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "fat": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "fat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.goal.json.get
Get a user's current fat goal in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "fat": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "fat"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.weight.goal.json.post
Create or update user's weight goal using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "weight": {
      "type": "string"
    },
    "startWeight": {
      "type": "string"
    },
    "startDate": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "weight",
    "startWeight",
    "startDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.weight.goal.json.get
Get a user's current weight goal using units in the unit system that corresponds to the Accept-Language header provided in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "weight": {
      "type": "string"
    },
    "startWeight": {
      "type": "string"
    },
    "startDate": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "weight",
    "startWeight",
    "startDate"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.body_fat_log_id.json.delete
Delete user's body fat log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "body-fat-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "body-fat-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.body_weight_log_id.json.delete
Delete user's body weight log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "body-weight-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "body-weight-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.json.post
Create log entry for a body fat and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "fat": {
      "type": "string"
    },
    "time": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "fat",
    "time",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.weight.json.post
Create log entry for a body weight using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "weight": {
      "type": "string"
    },
    "time": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "weight",
    "time",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.json.post
Log body measurements using units in the unit system that corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "weight": {
      "type": "string"
    },
    "fat": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.body.weight.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "start-date-or-end-date": {
      "type": "string"
    },
    "end-date-or-period": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "start-date-or-end-date",
    "end-date-or-period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.activities.calories.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "start-date-or-end-date": {
      "type": "string"
    },
    "end-date-or-period": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "start-date-or-end-date",
    "end-date-or-period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.bp.bp_log_id.json.delete
Delete user's blood pressure log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "bp-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "bp-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.heart.heart_log_id.json.delete
Delete user's heart rate log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "heart-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "heart-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.sleep.sleep_log_id.json.delete
Delete user's sleep log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "sleep-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "sleep-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.badges.json.get
Get user's badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related). We return weight and distance badges based on the user's unit profile preference as on the website.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.activity_log_id.json.delete
Delete user's activity log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "activity-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "activity-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.food_log_id.json.delete
Delete the user's food log entry with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "food-log-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "food-log-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.glucose.json.post
Create log entry for a blood glucose measurement and/or HbA1c using units in the unit system which corresponds to the Accept-Language header provided and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "hba1c": {
      "type": "string"
    },
    "tracker": {
      "type": "string"
    },
    "glucose": {
      "type": "string"
    },
    "time": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "tracker",
    "glucose",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.bp.json.post
Create log entry for a blood pressure measurement and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "systolic": {
      "type": "string"
    },
    "diastolic": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "systolic",
    "diastolic",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.heart.json.post
Create log entry for a heart rate measurement and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "tracker": {
      "type": "string"
    },
    "heartRate": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "tracker",
    "heartRate",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.sleep.json.post
Create log entry for a sleep and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "startTime": {
      "type": "string"
    },
    "duration": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "startTime",
    "duration",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.foods.log.json.post
Create log entry for a food. You need to select one of the unit ids to create a food log entry. It is possible to fetch unit ids allowed for specific food via previous calls to endpoints that retrieve food lists of the user. Each unit id maps to a unit in the list returned via the Get Food Units API call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "foodId": {
      "type": "string"
    },
    "mealTypeId": {
      "type": "string"
    },
    "unitId": {
      "type": "string"
    },
    "amount": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "foodId",
    "mealTypeId",
    "unitId",
    "amount",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.activities.json.get
Get user's activity statistics in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Response contains both lifetime statistics from the tracker device and total numbers including the manual activity log entries as seen on the Fitbit website dashboard.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.activities.json.post
Create log entry for an activity using units in the unit system which corresponds to the Accept-Language header provided (or using optional custom distanceUnit).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user._.friends.leaderboard.json.get
Get a leaderboard of user's friends progress in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Authorized user himself is also included in the response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
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
## Operation: user.user_id.friends.json.get
Get user's friends in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.glucose.date.date.json.get
Get a list of user's blood glucose and HbA1C measurements for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Glucose measurement log entries are available only to authorized user. We always include all glucose trackers in the response body (with zero glucose value for the days with no measurements) to allow to seamlessly fetch a list of all additional user created custom trackers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.bp.date.date.json.get
Get an average value and a list of user's blood pressure log entries for a given day in the format requested. Blood pressure log entries are available only to authorized user. Blood pressure log entries in response are sorted exactly the same as they are presented on the Fitbit website.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.heart.date.date.json.get
Get an average values and a list of user's heart rate log entries for a given day in the format requested. Heart rate data available only to the authorized user. Heart rate log entries in response are sorted exactly the same as they are presented on the Fitbit website. We always include all heart rate trackers in the "average" section of the response body (with zero average values for the days with no measurements) to allow to seamlessly fetch a list of all additional user created custom trackers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.sleep.date.date.json.get
Get a summary and list of a user's sleep log entries for a given day in the format requested. Endpoint returns summary for all sleep log entries for the given day (including naps). If you need data only for the main sleep you can fetch entry with "isMainSleep" = true or use Get-Time-Series calls.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.foods.log.date.date.json.get
Get a summary and list of a user's food log entries for a given day in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.activities.date.date.json.get
Get a summary and list of a user's activities and activity log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.fat.date.date.json.get
Get a list of all user's body fat log entries for a given day in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.body.log.weight.date.date.json.get
Get a list of all user's body weight log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.body.date.date.json.get
Get a summary of a user's body measurements for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    },
    "date": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user._.profile.json.post
Update user's profile using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "gender": {
      "type": "string"
    },
    "birthday": {
      "type": "string"
    },
    "height": {
      "type": "string"
    },
    "nickname": {
      "type": "string"
    },
    "fullname": {
      "type": "string"
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
## Operation: user.user_id.profile.json.get
Get user's profile in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "xml",
        "json"
      ]
    },
    "user-id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "user-id"
  ]
}
```
### Output Schema
```json
{}
```
