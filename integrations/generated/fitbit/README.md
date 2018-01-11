# @datafire/fitbit

Client library for Fitbit

## Installation and Usage
```bash
npm install --save @datafire/fitbit
```
```js
let fitbit = require('@datafire/fitbit').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

fitbit.user._.profile.json.post({}).then(data => {
  console.log(data);
})
```

## Description

Bring Fitbit health data into your apps, including user activities, sleep, heart, glucose and blood pressure information.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
fitbit.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
fitbit.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### user._collection_pathapiSubscriptions.json.get
Get a list of user's subscriptions for your application in the format requested.


```js
fitbit.user._collection_pathapiSubscriptions.json.get({
  "collection-path": ""
}, context)
```

#### Input
* input `object`
  * collection-path **required** `string` (values: /, /activities/, /foods/, /body/, /sleep/)

#### Output
*Output schema unknown*

### user._collection_pathapiSubscriptions.subscription_id.json.delete
Delete a subscription for the user and get a response in the format requested.


```js
fitbit.user._collection_pathapiSubscriptions.subscription_id.json.delete({
  "collection-path": "",
  "subscription-id": ""
}, context)
```

#### Input
* input `object`
  * collection-path **required** `string` (values: /, /activities/, /foods/, /body/, /sleep/)
  * subscription-id **required** `string`

#### Output
*Output schema unknown*

### user._collection_pathapiSubscriptions.subscription_id.json.post
Add a subscription for the user to get notifications and get a response in the format requested.


```js
fitbit.user._collection_pathapiSubscriptions.subscription_id.json.post({
  "collection-path": "",
  "subscription-id": ""
}, context)
```

#### Input
* input `object`
  * collection-path **required** `string` (values: /, /activities/, /foods/, /body/, /sleep/)
  * subscription-id **required** `string`

#### Output
*Output schema unknown*

### user._.friends.invitations.json.get
Retrieve the list of invites to become freinds for a user in the format requested.


```js
fitbit.user._.friends.invitations.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### foods.units.json.get
Get list of all valid Fitbit food units in the format requested.


```js
fitbit.foods.units.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### foods.food_id.json.get
Get the details of a specific food in Fitbit Food database (or private food for the user) in the format requested. Note, that nutritional values currently included in response only for the private foods.


```js
fitbit.foods.food_id.json.get({
  "food-id": ""
}, context)
```

#### Input
* input `object`
  * food-id **required** `string`

#### Output
*Output schema unknown*

### activities.id.json.get
Get the details of a specific activity in Fitbit activities database in the format requested. If activity has levels, also get list of activity level details.


```js
fitbit.activities.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### activities.json.get
Get a tree of all valid Fitbit public activities from the activities catalog as well as private custom activities the user created in the format requested. If activity has levels, also get a list of activity level details.


```js
fitbit.activities.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.devices.json.get
Retrieve the list of Fitbit devices for a user in the format requested.


```js
fitbit.user._.devices.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.foods.log.goal.json.post
Update (create) a user's daily calorie consumption goal or Food Plan and get a response in the format requested. Food Plan could not be created unless user already has active goal (Update-Weight-Goal). Depending on the weight goal setup only either MAINTENANCE (in case start weight is close to target weight or smaller) or one of the four other "lose" food plans could be created via intensity POST parameter.


```js
fitbit.user._.foods.log.goal.json.post({
  "intensity": ""
}, context)
```

#### Input
* input `object`
  * intensity **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.goal.json.get
Get a user's current daily calorie consumption goal and/or Food Plan in the format requested.


```js
fitbit.user._.foods.log.goal.json.get({
  "intensity": ""
}, context)
```

#### Input
* input `object`
  * intensity **required** `string`

#### Output
*Output schema unknown*

### user._.meals.json.get
Get a list of meals user created in his food log in the format requested.


```js
fitbit.user._.meals.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### foods.json.post
Create new private food for a user and get a response in a format requested. Created private food could be found in results of Search Foods call.


```js
fitbit.foods.json.post({
  "name": "",
  "defaultFoodMeasurementUnitId": "",
  "defaultServingSize": "",
  "calories": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * defaultFoodMeasurementUnitId **required** `string`
  * defaultServingSize **required** `string`
  * calories **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.water.water_log_id.json.delete
Delete user's water log entry with the given id.


```js
fitbit.user._.foods.log.water.water_log_id.json.delete({
  "water-log-id": ""
}, context)
```

#### Input
* input `object`
  * water-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.water.json.post
Create log entry for a water using units in the unit system that corresponds to the Accept-Language header provided (or waterUnit) and get a response in the format requested.


```js
fitbit.user._.foods.log.water.json.post({
  "amount": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.water.date.date.json.get
Get a summary and list of a user's water log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user._.foods.log.water.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.favorite.id.json.delete
Delete the food with the given id from user's list of favorite foods.


```js
fitbit.user._.foods.log.favorite.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.favorite.id.json.post
Add the food with the given id to user's list of favorite foods.


```js
fitbit.user._.foods.log.favorite.id.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### user._.activities.goals.weekly.json.get
Get a user's current weekly activity goals in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user._.activities.goals.weekly.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.goals.daily.json.get
Get a user's current daily activity goals in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user._.activities.goals.daily.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.log.favorite.id.json.delete
Delete the activity with the given id from user's list of favorite activities.


```js
fitbit.user._.activities.log.favorite.id.json.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### user._.activities.log.favorite.id.json.post
Adds the activity with the given id to user's list of favorite activities.


```js
fitbit.user._.activities.log.favorite.id.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.favorite.json.get
Get a list of a user's favorite foods in the format requested. A user marks a food as favorite on the user's Food Tab tab. A favorite food in the list provides a quick way to log the food via the Log Food endpoint.


```js
fitbit.user._.foods.log.favorite.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.foods.log.frequent.json.get
Get a list of a user's frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.


```js
fitbit.user._.foods.log.frequent.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.foods.log.recent.json.get
Get a list of a user's recent foods in the format requested. A recent food provides a quick way to log the food via the Log Food endpoint.


```js
fitbit.user._.foods.log.recent.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.favorite.json.get
Get a list of a user's favorite activities in the format requested. A user marks an activity as favorite on the user's Activities Tab. The activity ids in the list can be used to create a new activity log entry via the Log Activity.


```js
fitbit.user._.activities.favorite.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.frequent.json.get
Get a list of a user's frequent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided. A frequent activity record contains the distance and duration values recorded the last time the activity was logged. The record retrieved can therefore be used to log the activity via the Log Activity with the same or adjusted values for distance and duration.


```js
fitbit.user._.activities.frequent.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.recent.json.get
Get a list of a user's recent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided. A recent activity record contains the distance and duration values recorded the last time the activity was logged. The record retrieved can therefore be used to log the activity via the Log Activity with the same or adjusted values for distance and duration.


```js
fitbit.user._.activities.recent.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user.user_id.sleep.minutesAsleep.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.sleep.minutesAsleep.date.start_date_or_end_date.end_date_or_period.json.get({
  "user-id": "",
  "start-date-or-end-date": "",
  "end-date-or-period": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * start-date-or-end-date **required** `string`
  * end-date-or-period **required** `string`

#### Output
*Output schema unknown*

### user.user_id.foods.log.caloriesIn.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.foods.log.caloriesIn.date.start_date_or_end_date.end_date_or_period.json.get({
  "user-id": "",
  "start-date-or-end-date": "",
  "end-date-or-period": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * start-date-or-end-date **required** `string`
  * end-date-or-period **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.goal.json.post
Create or updates user's fat goal and get a response in the format requested.


```js
fitbit.user._.body.log.fat.goal.json.post({
  "fat": ""
}, context)
```

#### Input
* input `object`
  * fat **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.goal.json.get
Get a user's current fat goal in the format requested.


```js
fitbit.user._.body.log.fat.goal.json.get({
  "fat": ""
}, context)
```

#### Input
* input `object`
  * fat **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.weight.goal.json.post
Create or update user's weight goal using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.


```js
fitbit.user._.body.log.weight.goal.json.post({
  "weight": "",
  "startWeight": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * weight **required** `string`
  * startWeight **required** `string`
  * startDate **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.weight.goal.json.get
Get a user's current weight goal using units in the unit system that corresponds to the Accept-Language header provided in the format requested.


```js
fitbit.user._.body.log.weight.goal.json.get({
  "weight": "",
  "startWeight": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * weight **required** `string`
  * startWeight **required** `string`
  * startDate **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.body_fat_log_id.json.delete
Delete user's body fat log entry with the given id.


```js
fitbit.user._.body.log.fat.body_fat_log_id.json.delete({
  "body-fat-log-id": ""
}, context)
```

#### Input
* input `object`
  * body-fat-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.body_weight_log_id.json.delete
Delete user's body weight log entry with the given id.


```js
fitbit.user._.body.log.fat.body_weight_log_id.json.delete({
  "body-weight-log-id": ""
}, context)
```

#### Input
* input `object`
  * body-weight-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.json.post
Create log entry for a body fat and get a response in the format requested.


```js
fitbit.user._.body.log.fat.json.post({
  "fat": "",
  "time": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * fat **required** `string`
  * time **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.weight.json.post
Create log entry for a body weight using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.


```js
fitbit.user._.body.log.weight.json.post({
  "weight": "",
  "time": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * weight **required** `string`
  * time **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.body.json.post
Log body measurements using units in the unit system that corresponds to the Accept-Language header provided.


```js
fitbit.user._.body.json.post({
  "date": ""
}, context)
```

#### Input
* input `object`
  * weight `string`
  * fat `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user.user_id.body.weight.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.body.weight.date.start_date_or_end_date.end_date_or_period.json.get({
  "user-id": "",
  "start-date-or-end-date": "",
  "end-date-or-period": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * start-date-or-end-date **required** `string`
  * end-date-or-period **required** `string`

#### Output
*Output schema unknown*

### user.user_id.activities.calories.date.start_date_or_end_date.end_date_or_period.json.get
Get time series in the specified range for a given resource in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.activities.calories.date.start_date_or_end_date.end_date_or_period.json.get({
  "user-id": "",
  "start-date-or-end-date": "",
  "end-date-or-period": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * start-date-or-end-date **required** `string`
  * end-date-or-period **required** `string`

#### Output
*Output schema unknown*

### user._.bp.bp_log_id.json.delete
Delete user's blood pressure log entry with the given id.


```js
fitbit.user._.bp.bp_log_id.json.delete({
  "bp-log-id": ""
}, context)
```

#### Input
* input `object`
  * bp-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.heart.heart_log_id.json.delete
Delete user's heart rate log entry with the given id.


```js
fitbit.user._.heart.heart_log_id.json.delete({
  "heart-log-id": ""
}, context)
```

#### Input
* input `object`
  * heart-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.sleep.sleep_log_id.json.delete
Delete user's sleep log entry with the given id.


```js
fitbit.user._.sleep.sleep_log_id.json.delete({
  "sleep-log-id": ""
}, context)
```

#### Input
* input `object`
  * sleep-log-id **required** `string`

#### Output
*Output schema unknown*

### user.user_id.badges.json.get
Get user's badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related). We return weight and distance badges based on the user's unit profile preference as on the website.


```js
fitbit.user.user_id.badges.json.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`

#### Output
*Output schema unknown*

### user._.activities.activity_log_id.json.delete
Delete user's activity log entry with the given id.


```js
fitbit.user._.activities.activity_log_id.json.delete({
  "activity-log-id": ""
}, context)
```

#### Input
* input `object`
  * activity-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.food_log_id.json.delete
Delete the user's food log entry with the given id.


```js
fitbit.user._.foods.log.food_log_id.json.delete({
  "food-log-id": ""
}, context)
```

#### Input
* input `object`
  * food-log-id **required** `string`

#### Output
*Output schema unknown*

### user._.glucose.json.post
Create log entry for a blood glucose measurement and/or HbA1c using units in the unit system which corresponds to the Accept-Language header provided and get a response in the format requested.


```js
fitbit.user._.glucose.json.post({
  "tracker": "",
  "glucose": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * hba1c `string`
  * tracker **required** `string`
  * glucose **required** `string`
  * time `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.bp.json.post
Create log entry for a blood pressure measurement and get a response in the format requested.


```js
fitbit.user._.bp.json.post({
  "systolic": "",
  "diastolic": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * systolic **required** `string`
  * diastolic **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.heart.json.post
Create log entry for a heart rate measurement and get a response in the format requested.


```js
fitbit.user._.heart.json.post({
  "tracker": "",
  "heartRate": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * tracker **required** `string`
  * heartRate **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.sleep.json.post
Create log entry for a sleep and get a response in the format requested.


```js
fitbit.user._.sleep.json.post({
  "startTime": "",
  "duration": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * startTime **required** `string`
  * duration **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.foods.log.json.post
Create log entry for a food. You need to select one of the unit ids to create a food log entry. It is possible to fetch unit ids allowed for specific food via previous calls to endpoints that retrieve food lists of the user. Each unit id maps to a unit in the list returned via the Get Food Units API call.


```js
fitbit.user._.foods.log.json.post({
  "foodId": "",
  "mealTypeId": "",
  "unitId": "",
  "amount": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * foodId **required** `string`
  * mealTypeId **required** `string`
  * unitId **required** `string`
  * amount **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.activities.json.get
Get user's activity statistics in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Response contains both lifetime statistics from the tracker device and total numbers including the manual activity log entries as seen on the Fitbit website dashboard.


```js
fitbit.user._.activities.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.activities.json.post
Create log entry for an activity using units in the unit system which corresponds to the Accept-Language header provided (or using optional custom distanceUnit).


```js
fitbit.user._.activities.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user._.friends.leaderboard.json.get
Get a leaderboard of user's friends progress in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Authorized user himself is also included in the response.


```js
fitbit.user._.friends.leaderboard.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user.user_id.friends.json.get
Get user's friends in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.friends.json.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`

#### Output
*Output schema unknown*

### user._.glucose.date.date.json.get
Get a list of user's blood glucose and HbA1C measurements for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided. Glucose measurement log entries are available only to authorized user. We always include all glucose trackers in the response body (with zero glucose value for the days with no measurements) to allow to seamlessly fetch a list of all additional user created custom trackers.


```js
fitbit.user._.glucose.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.bp.date.date.json.get
Get an average value and a list of user's blood pressure log entries for a given day in the format requested. Blood pressure log entries are available only to authorized user. Blood pressure log entries in response are sorted exactly the same as they are presented on the Fitbit website.


```js
fitbit.user._.bp.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.heart.date.date.json.get
Get an average values and a list of user's heart rate log entries for a given day in the format requested. Heart rate data available only to the authorized user. Heart rate log entries in response are sorted exactly the same as they are presented on the Fitbit website. We always include all heart rate trackers in the "average" section of the response body (with zero average values for the days with no measurements) to allow to seamlessly fetch a list of all additional user created custom trackers.


```js
fitbit.user._.heart.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user.user_id.sleep.date.date.json.get
Get a summary and list of a user's sleep log entries for a given day in the format requested. Endpoint returns summary for all sleep log entries for the given day (including naps). If you need data only for the main sleep you can fetch entry with "isMainSleep" = true or use Get-Time-Series calls.


```js
fitbit.user.user_id.sleep.date.date.json.get({
  "user-id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user.user_id.foods.log.date.date.json.get
Get a summary and list of a user's food log entries for a given day in the format requested.


```js
fitbit.user.user_id.foods.log.date.date.json.get({
  "user-id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user.user_id.activities.date.date.json.get
Get a summary and list of a user's activities and activity log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.activities.date.date.json.get({
  "user-id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.fat.date.date.json.get
Get a list of all user's body fat log entries for a given day in the format requested.


```js
fitbit.user._.body.log.fat.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.body.log.weight.date.date.json.get
Get a list of all user's body weight log entries for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user._.body.log.weight.date.date.json.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`

#### Output
*Output schema unknown*

### user.user_id.body.date.date.json.get
Get a summary of a user's body measurements for a given day in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.body.date.date.json.get({
  "user-id": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`
  * date **required** `string`

#### Output
*Output schema unknown*

### user._.profile.json.post
Update user's profile using units in the unit system that corresponds to the Accept-Language header provided and get a response in the format requested.


```js
fitbit.user._.profile.json.post({}, context)
```

#### Input
* input `object`
  * gender `string`
  * birthday `string`
  * height `string`
  * nickname `string`
  * fullname `string`

#### Output
*Output schema unknown*

### user.user_id.profile.json.get
Get user's profile in the format requested using units in the unit system which corresponds to the Accept-Language header provided.


```js
fitbit.user.user_id.profile.json.get({
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * user-id **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
