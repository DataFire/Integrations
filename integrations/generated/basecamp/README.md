# @datafire/basecamp

Client library for The Basecamp 3 API

## Installation and Usage
```bash
npm install --save @datafire/basecamp
```
```js
let basecamp = require('@datafire/basecamp').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Basecamp 3 API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
basecamp.oauthCallback({
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
basecamp.oauthRefresh(null, context)
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

### buckets.bucketId.client.approvals.json.get



```js
basecamp.buckets.bucketId.client.approvals.json.get({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * approval_status `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * replies_url `string`
    * created_at `string`
    * approver `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * due_on `null`
    * replies_count `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`
    * subject `string`

### attachments.json.post



```js
basecamp.attachments.json.post({}, context)
```

#### Input
* input `object`
  * name `string`: name as the file name.

#### Output
* output `object`
  * attachable_sgid `string`

### buckets.bucketId.client.recordings.recordingId.replies.json.get



```js
basecamp.buckets.bucketId.client.recordings.recordingId.replies.json.get({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.todos.todoId.json.put



```js
basecamp.buckets.bucketId.todos.todoId.json.put({
  "bucketId": "",
  "todoId": ""
}, context)
```

#### Input
* input `object`
  * assignee_ids `string`: assignee_ids clears existing assignees.
  * body `object`
    * content `string`
    * due_on `string`
    * description `string`
  * bucketId **required** `string`
  * todoId **required** `string`

#### Output
* output `object`
  * content `string`
  * due_on `string`
  * description `string`

### buckets.bucketId.todos.todoId.json.get



```js
basecamp.buckets.bucketId.todos.todoId.json.get({
  "bucketId": "",
  "todoId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todoId **required** `string`

#### Output
* output `object`
  * starts_on `null`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * subscription_url `string`
  * updated_at `string`
  * due_on `null`
  * id `integer`
  * app_url `string`
  * title `string`
  * content `string`
  * completion_url `string`
  * type `string`
  * status `string`
  * completion `object`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * description `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * completed `boolean`
  * comments_url `string`
  * completion_subscribers `array`
    * items `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * bookmark_url `string`
  * url `string`
  * created_at `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * assignees `array`
    * items `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * comments_count `integer`
  * inherits_status `boolean`

### buckets.bucketId.comments.commentId.json.put



```js
basecamp.buckets.bucketId.comments.commentId.json.put({
  "bucketId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * content `string`
  * bucketId **required** `string`
  * commentId **required** `string`

#### Output
* output `object`
  * content `string`

### buckets.bucketId.comments.commentId.json.get



```js
basecamp.buckets.bucketId.comments.commentId.json.get({
  "bucketId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * commentId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### buckets.bucketId.chats.chatId.integrations.json.post



```js
basecamp.buckets.bucketId.chats.chatId.integrations.json.post({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * service_name `string`: service_name for the chatbot name, which will be used to invoke queries and commands on interactive bots. No spaces, emoji or non-word characters are allowed, as you need to be able to call it like
  * !tally myCommand `string`: !tally myCommand Optional parameters :
  * command_url `string`: command_url for the HTTPS url that Basecamp should call when the bot is addressed.
  * body `object`
    * service_name `string`
    * command_url `string`
  * bucketId **required** `string`
  * chatId **required** `string`

#### Output
* output `object`
  * service_name `string`
  * command_url `string`

### buckets.bucketId.chats.chatId.integrations.json.get



```js
basecamp.buckets.bucketId.chats.chatId.integrations.json.get({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * app_url `string`
    * url `string`
    * service_name `string`
    * created_at `string`
    * updated_at `string`
    * lines_url `string`
    * command_url `string`
    * id `integer`

### buckets.bucketId.questions.questionId.json.get



```js
basecamp.buckets.bucketId.questions.questionId.json.get({
  "bucketId": "",
  "questionId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * questionId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * url `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * created_at `string`
  * title `string`
  * answers_url `string`
  * updated_at `string`
  * schedule `object`
    * hour `integer`
    * frequency `string`
    * start_date `string`
    * minute `integer`
    * days `array`
      * items `integer`
  * id `integer`
  * paused `boolean`
  * type `string`
  * inherits_status `boolean`
  * answers_count `integer`

### buckets.bucketId.inboxes.inboxId.forwards.json.get



```js
basecamp.buckets.bucketId.inboxes.inboxId.forwards.json.get({
  "bucketId": "",
  "inboxId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * inboxId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * from `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * subscription_url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * replies_url `string`
    * replies_count `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`
    * subject `string`

### buckets.bucketId.questionnaires.questionnaireId.json.get



```js
basecamp.buckets.bucketId.questionnaires.questionnaireId.json.get({
  "bucketId": "",
  "questionnaireId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * questionnaireId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * name `string`
  * title `string`
  * url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * questions_count `integer`
  * position `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * questions_url `string`

### buckets.bucketId.questionnaires.questionnaireId.questions.json.get



```js
basecamp.buckets.bucketId.questionnaires.questionnaireId.questions.json.get({
  "bucketId": "",
  "questionnaireId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * questionnaireId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * answers_url `string`
    * updated_at `string`
    * schedule `object`
      * hour `integer`
      * frequency `string`
      * start_date `string`
      * minute `integer`
      * days `array`
        * items `integer`
    * id `integer`
    * paused `boolean`
    * bookmark_url `string`
    * type `string`
    * inherits_status `boolean`
    * answers_count `integer`

### buckets.bucketId.todos.todoId.completion.json.post



```js
basecamp.buckets.bucketId.todos.todoId.completion.json.post({
  "bucketId": "",
  "todoId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todoId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.todos.todoId.completion.json.delete



```js
basecamp.buckets.bucketId.todos.todoId.completion.json.delete({
  "bucketId": "",
  "todoId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todoId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.inbox_forwards.inbox_forwardId.replies.replyId.json.get



```js
basecamp.buckets.bucketId.inbox_forwards.inbox_forwardId.replies.replyId.json.get({
  "bucketId": "",
  "inbox_forwardId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * inbox_forwardId **required** `string`
  * replyId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * client `boolean`
    * owner `boolean`
    * email_address `string`
    * id `integer`
    * personable_type `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * content `string`
  * inherits_status `boolean`
  * visible_to_clients `boolean`
  * type `string`
  * id `integer`
  * bookmark_url `string`

### buckets.bucketId.recordings.recordingId.client_visibility.json.put



```js
basecamp.buckets.bucketId.recordings.recordingId.client_visibility.json.put({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * visible_to_clients `boolean`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
* output `object`
  * visible_to_clients `boolean`

### buckets.bucketId.recordings.recordingId.status.archived.json.put



```js
basecamp.buckets.bucketId.recordings.recordingId.status.archived.json.put({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.categories.json.post



```js
basecamp.buckets.bucketId.categories.json.post({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * name `string`: name and
  * icon `string`: icon for the new message type.
  * body `object`
    * name `string`
    * icon `string`
  * bucketId **required** `string`

#### Output
* output `object`
  * name `string`
  * icon `string`

### buckets.bucketId.categories.json.get



```js
basecamp.buckets.bucketId.categories.json.get({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * created_at `string`
    * icon `string`
    * id `integer`
    * name `string`
    * updated_at `string`

### templates.templateId.project_constructions.project_constructionId.json.get



```js
basecamp.templates.templateId.project_constructions.project_constructionId.json.get({
  "templateId": "",
  "project_constructionId": ""
}, context)
```

#### Input
* input `object`
  * templateId **required** `string`
  * project_constructionId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.chats.chatId.integrations.integrationId.json.put



```js
basecamp.buckets.bucketId.chats.chatId.integrations.integrationId.json.put({
  "bucketId": "",
  "chatId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * service_name `string`: service_name for the chatbot name, which will be used to invoke queries and commands on interactive bots. No spaces, emoji or non-word characters are allowed, as you need to be able to call it like
  * !tally myCommand `string`: !tally myCommand Optional parameters :
  * command_url `string`: command_url for the HTTPS url that Basecamp should call when the bot is addressed.
  * body `object`
    * service_name `string`
    * command_url `string`
  * bucketId **required** `string`
  * chatId **required** `string`
  * integrationId **required** `string`

#### Output
* output `object`
  * service_name `string`
  * command_url `string`

### buckets.bucketId.chats.chatId.integrations.integrationId.json.delete



```js
basecamp.buckets.bucketId.chats.chatId.integrations.integrationId.json.delete({
  "bucketId": "",
  "chatId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * integrationId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.chats.chatId.integrations.integrationId.json.get



```js
basecamp.buckets.bucketId.chats.chatId.integrations.integrationId.json.get({
  "bucketId": "",
  "chatId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * integrationId **required** `string`

#### Output
* output `array`
  * items `object`
    * app_url `string`
    * url `string`
    * service_name `string`
    * created_at `string`
    * updated_at `string`
    * lines_url `string`
    * command_url `string`
    * id `integer`

### buckets.bucketId.question_answers.question_answerId.json.get



```js
basecamp.buckets.bucketId.question_answers.question_answerId.json.get({
  "bucketId": "",
  "question_answerId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * question_answerId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `null`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * comments_url `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * comments_count `integer`
  * group_on `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### my.profile.json.get



```js
basecamp.my.profile.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### buckets.bucketId.inbox_forwards.inbox_forwardId.replies.json.get



```js
basecamp.buckets.bucketId.inbox_forwards.inbox_forwardId.replies.json.get({
  "bucketId": "",
  "inbox_forwardId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * inbox_forwardId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * client `boolean`
      * owner `boolean`
      * email_address `string`
      * id `integer`
      * personable_type `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * content `string`
    * inherits_status `boolean`
    * visible_to_clients `boolean`
    * type `string`
    * id `integer`
    * bookmark_url `string`

### buckets.bucketId.chats.chatId.lines.lineId.json.delete



```js
basecamp.buckets.bucketId.chats.chatId.lines.lineId.json.delete({
  "bucketId": "",
  "chatId": "",
  "lineId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * lineId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.chats.chatId.lines.lineId.json.get



```js
basecamp.buckets.bucketId.chats.chatId.lines.lineId.json.get({
  "bucketId": "",
  "chatId": "",
  "lineId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * lineId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * url `string`
  * created_at `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * type `string`
  * inherits_status `boolean`

### buckets.bucketId.todolists.todolistId.json.get



```js
basecamp.buckets.bucketId.todolists.todolistId.json.get({
  "bucketId": "",
  "todolistId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todolistId **required** `string`

#### Output
* output `object`
  * creator `object`
    * attachable_sgid `string`
    * bio `null`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * subscription_url `string`
  * updated_at `string`
  * id `integer`
  * app_url `string`
  * title `string`
  * app_todos_url `string`
  * comments_count `integer`
  * type `string`
  * status `string`
  * description `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * todos_url `string`
  * completed `boolean`
  * comments_url `string`
  * bookmark_url `string`
  * group_position_url `string`
  * name `string`
  * url `string`
  * created_at `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * completed_ratio `string`
  * position `integer`
  * inherits_status `boolean`

### buckets.bucketId.recordings.recordingId.status.trashed.json.put



```js
basecamp.buckets.bucketId.recordings.recordingId.status.trashed.json.put({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
*Output schema unknown*

### projects.projectId.people.users.json.put



```js
basecamp.projects.projectId.people.users.json.put({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * create `array`
      * items `object`
        * email_address `string`
        * company_name `string`
        * name `string`
        * title `string`
    * revoke `array`
      * items `integer`
    * grant `array`
      * items `integer`
  * projectId **required** `string`

#### Output
* output `object`
  * granted `array`
    * items `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * id `integer`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * company `object`
        * id `integer`
        * name `string`
  * revoked `array`
    * items `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`

### buckets.bucketId.uploads.uploadId.json.put



```js
basecamp.buckets.bucketId.uploads.uploadId.json.put({
  "bucketId": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`
    * base_name `string`
  * bucketId **required** `string`
  * uploadId **required** `string`

#### Output
* output `object`
  * description `string`
  * base_name `string`

### buckets.bucketId.uploads.uploadId.json.get



```js
basecamp.buckets.bucketId.uploads.uploadId.json.get({
  "bucketId": "",
  "uploadId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * uploadId **required** `string`

#### Output
* output `object`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * updated_at `string`
  * height `integer`
  * id `integer`
  * app_url `string`
  * title `string`
  * download_url `string`
  * filename `string`
  * width `integer`
  * app_download_url `string`
  * type `string`
  * status `string`
  * description `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * comments_url `string`
  * content_type `string`
  * bookmark_url `string`
  * url `string`
  * created_at `string`
  * byte_size `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * comments_count `integer`
  * position `integer`
  * inherits_status `boolean`

### people.json.get



```js
basecamp.people.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`

### buckets.bucketId.recordings.recordingId.status.active.json.put



```js
basecamp.buckets.bucketId.recordings.recordingId.status.active.json.put({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
*Output schema unknown*

### people.peopleId.json.get



```js
basecamp.people.peopleId.json.get({
  "peopleId": ""
}, context)
```

#### Input
* input `object`
  * peopleId **required** `string`

#### Output
* output `object`
  * attachable_sgid `string`
  * bio `string`
  * name `string`
  * title `string`
  * admin `boolean`
  * created_at `string`
  * updated_at `string`
  * time_zone `string`
  * avatar_url `string`
  * personable_type `string`
  * owner `boolean`
  * email_address `string`
  * id `integer`

### buckets.bucketId.inbox_forwards.inbox_forwardId.json.get



```js
basecamp.buckets.bucketId.inbox_forwards.inbox_forwardId.json.get({
  "bucketId": "",
  "inbox_forwardId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * inbox_forwardId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * from `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * subscription_url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * replies_url `string`
  * replies_count `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * subject `string`

### circles.people.json.get



```js
basecamp.circles.people.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
*Output schema unknown*

### buckets.bucketId.todosets.todosetId.json.get



```js
basecamp.buckets.bucketId.todosets.todosetId.json.get({
  "bucketId": "",
  "todosetId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todosetId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * name `string`
  * title `string`
  * url `string`
  * todolists_count `integer`
  * inherits_status `boolean`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * todolists_url `string`
  * completed `boolean`
  * completed_ratio `string`
  * app_todoslists_url `string`
  * id `integer`
  * position `integer`
  * type `string`
  * created_at `string`
  * bookmark_url `string`

### projects.projectId.json.put



```js
basecamp.projects.projectId.json.put({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`
    * description `string`
  * projectId **required** `string`

#### Output
*Output schema unknown*

### projects.projectId.json.delete



```js
basecamp.projects.projectId.json.delete({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
*Output schema unknown*

### projects.projectId.json.get



```js
basecamp.projects.projectId.json.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * description `string`
  * url `string`
  * created_at `string`
  * updated_at `string`
  * dock `array`
    * items `object`
      * app_url `string`
      * name `string`
      * title `string`
      * url `string`
      * enabled `boolean`
      * position `integer`
      * id `integer`
  * purpose `string`
  * id `integer`
  * bookmark_url `string`
  * name `string`

### buckets.bucketId.inboxes.inboxId.json.get



```js
basecamp.buckets.bucketId.inboxes.inboxId.json.get({
  "bucketId": "",
  "inboxId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * inboxId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * forwards_url `string`
  * title `string`
  * url `string`
  * forwards_count `integer`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * position `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### buckets.bucketId.todolists.todolistId.todos.json.post



```js
basecamp.buckets.bucketId.todolists.todolistId.todos.json.post({
  "bucketId": "",
  "todolistId": ""
}, context)
```

#### Input
* input `object`
  * content `string`: content for what the to-do is for.
  * body `object`
    * content `string`
    * due_on `string`
    * description `string`
  * bucketId **required** `string`
  * todolistId **required** `string`

#### Output
* output `object`
  * content `string`
  * due_on `string`
  * description `string`

### buckets.bucketId.todolists.todolistId.todos.json.get



```js
basecamp.buckets.bucketId.todolists.todolistId.todos.json.get({
  "bucketId": "",
  "todolistId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todolistId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * starts_on `null`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * subscription_url `string`
    * updated_at `string`
    * due_on `null`
    * id `integer`
    * app_url `string`
    * title `string`
    * content `string`
    * completion_url `string`
    * type `string`
    * status `string`
    * description `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * completed `boolean`
    * comments_url `string`
    * completion_subscribers `array`
    * bookmark_url `string`
    * url `string`
    * created_at `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * assignees `array`
    * comments_count `integer`
    * position `integer`
    * inherits_status `boolean`

### buckets.bucketId.client.correspondences.correspondenceId.json.get



```js
basecamp.buckets.bucketId.client.correspondences.correspondenceId.json.get({
  "bucketId": "",
  "correspondenceId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * correspondenceId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * replies_url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `null`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * replies_count `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * subject `string`

### buckets.bucketId.message_boards.message_boardId.messages.json.post



```js
basecamp.buckets.bucketId.message_boards.message_boardId.messages.json.post({
  "bucketId": "",
  "message_boardId": ""
}, context)
```

#### Input
* input `object`
  * subject `string`: subject as the title of the message, and
  * status `string`: status , set to
  * active `string`: active to publish immediately.
  * body `object`
    * content `string`
    * status `string`
    * subject `string`
  * bucketId **required** `string`
  * message_boardId **required** `string`

#### Output
* output `object`
  * content `string`
  * status `string`
  * subject `string`

### buckets.bucketId.message_boards.message_boardId.messages.json.get



```js
basecamp.buckets.bucketId.message_boards.message_boardId.messages.json.get({
  "bucketId": "",
  "message_boardId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * message_boardId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * creator `object`
      * attachable_sgid `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * url `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * created_at `string`
    * comments_url `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * comments_count `integer`
    * subscription_url `string`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`
    * subject `string`

### buckets.bucketId.todolists.groups.groupId.position.json.put



```js
basecamp.buckets.bucketId.todolists.groups.groupId.position.json.put({
  "bucketId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * position `string`: position greater than or equal to one.
  * body `object`
    * position `integer`
  * bucketId **required** `string`
  * groupId **required** `string`

#### Output
* output `object`
  * position `integer`

### templates.template_id.project_constructions.json.post



```js
basecamp.templates.template_id.project_constructions.json.post({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * project `object`
      * name `string`
      * description `string`
  * template_id **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.client.correspondences.json.get



```js
basecamp.buckets.bucketId.client.correspondences.json.get({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * replies_url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * replies_count `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`
    * subject `string`

### buckets.bucketId.chats.chatId.lines.json.post



```js
basecamp.buckets.bucketId.chats.chatId.lines.json.post({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * content `string`: content as the plain text body for the Campfire line.
  * body `object`
    * content `string`
  * bucketId **required** `string`
  * chatId **required** `string`

#### Output
* output `object`
  * content `string`

### buckets.bucketId.chats.chatId.lines.json.get



```js
basecamp.buckets.bucketId.chats.chatId.lines.json.get({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.webhooks.json.post



```js
basecamp.buckets.bucketId.webhooks.json.post({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * payload_url `string`: payload_url for the HTTPS url that Basecamp should call. Optional parameters :
  * types `string`: types as an array of types, options given in the introduction.
  * body `object`
    * types `array`
      * items `string`
    * payload_url `string`
  * bucketId **required** `string`

#### Output
* output `object`
  * types `array`
    * items `string`
  * payload_url `string`

### buckets.bucketId.webhooks.json.get



```js
basecamp.buckets.bucketId.webhooks.json.get({
  "bucketId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * app_url `string`
    * payload_url `string`
    * url `string`
    * created_at `string`
    * updated_at `string`
    * active `string`
    * id `integer`
    * types `array`
      * items `string`

### chats.json.get



```js
basecamp.chats.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * title `string`
    * url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * lines_url `string`
    * id `integer`
    * topic `string`
    * position `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.recordings.recordingId.events.json.get



```js
basecamp.buckets.bucketId.recordings.recordingId.events.json.get({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * created_at `string`
    * details `object`
    * recording_id `integer`
    * action `string`
    * id `integer`

### buckets.bucketId.questions.questionId.answers.json.get



```js
basecamp.buckets.bucketId.questions.questionId.answers.json.get({
  "bucketId": "",
  "questionId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * questionId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * comments_url `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * comments_count `integer`
    * group_on `string`
    * position `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.vaults.vaultId.documents.json.post



```js
basecamp.buckets.bucketId.vaults.vaultId.documents.json.post({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * title `string`: title as the title of the document, and
  * content `string`: content as the body of the document. See our Rich text guide for what HTML tags are allowed.
  * body `object`
    * content `string`
    * status `string`
    * title `string`
  * bucketId **required** `string`
  * vaultId **required** `string`

#### Output
* output `object`
  * content `string`
  * status `string`
  * title `string`

### buckets.bucketId.vaults.vaultId.documents.json.get



```js
basecamp.buckets.bucketId.vaults.vaultId.documents.json.get({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * vaultId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * comments_url `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * comments_count `integer`
    * position `integer`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.recordings.recordingId.subscription.json.put



```js
basecamp.buckets.bucketId.recordings.recordingId.subscription.json.put({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * unsubscriptions `array`
      * items `integer`
    * subscriptions `array`
      * items `integer`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
* output `object`
  * count `integer`
  * url `string`
  * subscribers `array`
    * items `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * subscribed `boolean`

### buckets.bucketId.recordings.recordingId.subscription.json.post



```js
basecamp.buckets.bucketId.recordings.recordingId.subscription.json.post({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.recordings.recordingId.subscription.json.delete



```js
basecamp.buckets.bucketId.recordings.recordingId.subscription.json.delete({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.recordings.recordingId.subscription.json.get



```js
basecamp.buckets.bucketId.recordings.recordingId.subscription.json.get({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
* output `object`
  * count `integer`
  * url `string`
  * subscribers `array`
    * items `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * subscribed `boolean`

### buckets.bucketId.client.approvals.approvalId.json.get



```js
basecamp.buckets.bucketId.client.approvals.approvalId.json.get({
  "bucketId": "",
  "approvalId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * approvalId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * responses `array`
    * items `object`
      * status `string`
      * app_url `string`
      * parent `object`
        * url `string`
        * app_url `string`
        * type `string`
        * id `integer`
        * title `string`
      * title `string`
      * created_at `string`
      * creator `object`
        * attachable_sgid `string`
        * bio `null`
        * name `string`
        * title `string`
        * admin `boolean`
        * created_at `string`
        * updated_at `string`
        * time_zone `string`
        * company `object`
          * id `integer`
          * name `string`
        * avatar_url `string`
        * personable_type `string`
        * owner `boolean`
        * email_address `string`
        * id `integer`
      * bucket `object`
        * type `string`
        * id `integer`
        * name `string`
      * updated_at `string`
      * id `integer`
      * content `string`
      * inherits_status `boolean`
      * type `string`
      * approved `boolean`
      * bookmark_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * replies_url `string`
  * created_at `string`
  * approver `object`
    * attachable_sgid `string`
    * bio `null`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * approval_status `string`
  * id `integer`
  * content `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * due_on `null`
  * replies_count `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * subject `string`

### templates.json.post



```js
basecamp.templates.json.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`
    * description `string`

#### Output
*Output schema unknown*

### templates.json.get



```js
basecamp.templates.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * description `string`
    * url `string`
    * created_at `string`
    * updated_at `string`
    * id `integer`
    * name `string`

### projects.projectId.people.json.get



```js
basecamp.projects.projectId.people.json.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * page `integer`

#### Output
*Output schema unknown*

### buckets.bucketId.recordings.recordingId.comments.json.post



```js
basecamp.buckets.bucketId.recordings.recordingId.comments.json.post({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * content `string`: content as the body of the message. See our Rich text guide for what HTML tags are allowed.
  * body `object`
    * content `string`
  * bucketId **required** `string`
  * recordingId **required** `string`

#### Output
* output `object`
  * content `string`

### buckets.bucketId.recordings.recordingId.comments.json.get



```js
basecamp.buckets.bucketId.recordings.recordingId.comments.json.get({
  "bucketId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * created_at `string`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * id `integer`
    * content `string`
    * type `string`
    * inherits_status `boolean`
    * bookmark_url `string`

### buckets.bucketId.documents.documentId.json.put



```js
basecamp.buckets.bucketId.documents.documentId.json.put({
  "bucketId": "",
  "documentId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * content `string`
    * title `string`
  * bucketId **required** `string`
  * documentId **required** `string`

#### Output
* output `object`
  * content `string`
  * title `string`

### buckets.bucketId.documents.documentId.json.get



```js
basecamp.buckets.bucketId.documents.documentId.json.get({
  "bucketId": "",
  "documentId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * documentId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `null`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * comments_url `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * comments_count `integer`
  * position `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### buckets.bucketId.client.recordings.recordingId.replies.replyId.json.get



```js
basecamp.buckets.bucketId.client.recordings.recordingId.replies.replyId.json.get({
  "bucketId": "",
  "recordingId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * recordingId **required** `string`
  * replyId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * title `string`
  * url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### templates.templateId.json.put



```js
basecamp.templates.templateId.json.put({
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`
    * description `string`
  * templateId **required** `string`

#### Output
*Output schema unknown*

### templates.templateId.json.delete



```js
basecamp.templates.templateId.json.delete({
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * templateId **required** `string`

#### Output
*Output schema unknown*

### templates.templateId.json.get



```js
basecamp.templates.templateId.json.get({
  "templateId": ""
}, context)
```

#### Input
* input `object`
  * templateId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * description `string`
  * url `string`
  * created_at `string`
  * updated_at `string`
  * dock `array`
    * items `object`
      * app_url `string`
      * name `string`
      * title `string`
      * url `string`
      * enabled `boolean`
      * position `integer`
      * id `integer`
  * id `integer`
  * name `string`

### projects.recordings.json.get



```js
basecamp.projects.recordings.json.get({}, context)
```

#### Input
* input `object`
  * type `string`: type , which must be
  * Comment `string`: Comment ,
  * Document `string`: Document ,
  * Message `string`: Message ,
  * Question::Answer `string`: Question::Answer ,
  * Schedule::Entry `string`: Schedule::Entry ,
  * Todo `string`: Todo ,
  * Todolist `string`: Todolist , or
  * Upload `string`: Upload .
  * page `integer`

#### Output
*Output schema unknown*

### integrations.chatbotKey.buckets.bucketId.chats.chatId.lines.json.post



```js
basecamp.integrations.chatbotKey.buckets.bucketId.chats.chatId.lines.json.post({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * content `string`: content as the body for the Campfire line. See our Rich text guide for what HTML tags are allowed.
  * body `object`
    * content `string`
  * bucketId **required** `string`
  * chatId **required** `string`

#### Output
* output `object`
  * content `string`

### buckets.bucketId.vaults.vaultId.uploads.json.post



```js
basecamp.buckets.bucketId.vaults.vaultId.uploads.json.post({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * attachable_sgid `string`: attachable_sgid for an uploaded attachment. See the Create an attachment endpoint for more info on uploading attachments.
  * body `object`
    * attachable_sgid `string`
    * description `string`
    * base_name `string`
  * bucketId **required** `string`
  * vaultId **required** `string`

#### Output
* output `object`
  * attachable_sgid `string`
  * description `string`
  * base_name `string`

### buckets.bucketId.vaults.vaultId.uploads.json.get



```js
basecamp.buckets.bucketId.vaults.vaultId.uploads.json.get({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * vaultId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * updated_at `string`
    * height `integer`
    * id `integer`
    * app_url `string`
    * title `string`
    * download_url `string`
    * filename `string`
    * width `integer`
    * app_download_url `string`
    * type `string`
    * status `string`
    * description `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * comments_url `string`
    * content_type `string`
    * bookmark_url `string`
    * url `string`
    * created_at `string`
    * byte_size `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * comments_count `integer`
    * position `integer`
    * inherits_status `boolean`

### buckets.bucketId.todolists.todolistId.groups.json.post



```js
basecamp.buckets.bucketId.todolists.todolistId.groups.json.post({
  "bucketId": "",
  "todolistId": ""
}, context)
```

#### Input
* input `object`
  * name `string`: name of the to-do list group.
  * body `object`
    * name `string`
  * bucketId **required** `string`
  * todolistId **required** `string`

#### Output
* output `object`
  * name `string`

### buckets.bucketId.todolists.todolistId.groups.json.get



```js
basecamp.buckets.bucketId.todolists.todolistId.groups.json.get({
  "bucketId": "",
  "todolistId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todolistId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * creator `object`
      * attachable_sgid `string`
      * bio `null`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * subscription_url `string`
    * updated_at `string`
    * id `integer`
    * app_url `string`
    * title `string`
    * app_todos_url `string`
    * comments_count `integer`
    * type `string`
    * status `string`
    * description `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * todos_url `string`
    * completed `boolean`
    * comments_url `string`
    * bookmark_url `string`
    * group_position_url `string`
    * name `string`
    * url `string`
    * created_at `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * completed_ratio `string`
    * position `integer`
    * inherits_status `boolean`

### buckets.bucketId.message_boards.message_boardId.json.get



```js
basecamp.buckets.bucketId.message_boards.message_boardId.json.get({
  "bucketId": "",
  "message_boardId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * message_boardId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * messages_url `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * url `string`
  * created_at `string`
  * title `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * messages_count `integer`
  * position `integer`
  * app_messages_url `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### buckets.bucketId.categories.categoryId.json.put



```js
basecamp.buckets.bucketId.categories.categoryId.json.put({
  "bucketId": "",
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`
    * icon `string`
  * bucketId **required** `string`
  * categoryId **required** `string`

#### Output
* output `object`
  * name `string`
  * icon `string`

### buckets.bucketId.categories.categoryId.json.delete



```js
basecamp.buckets.bucketId.categories.categoryId.json.delete({
  "bucketId": "",
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * categoryId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.categories.categoryId.json.get



```js
basecamp.buckets.bucketId.categories.categoryId.json.get({
  "bucketId": "",
  "categoryId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * categoryId **required** `string`

#### Output
* output `object`
  * created_at `string`
  * icon `string`
  * id `integer`
  * name `string`
  * updated_at `string`

### buckets.bucketId.vaults.vaultId.vaults.json.post



```js
basecamp.buckets.bucketId.vaults.vaultId.vaults.json.post({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * title `string`: title for the name of the vault.
  * body `object`
    * title `string`
  * bucketId **required** `string`
  * vaultId **required** `string`

#### Output
* output `object`
  * title `string`

### buckets.bucketId.vaults.vaultId.vaults.json.get



```js
basecamp.buckets.bucketId.vaults.vaultId.vaults.json.get({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * vaultId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * title `string`
    * url `string`
    * documents_count `integer`
    * inherits_status `boolean`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * updated_at `string`
    * uploads_url `string`
    * documents_url `string`
    * uploads_count `integer`
    * vaults_count `integer`
    * id `integer`
    * position `integer`
    * type `string`
    * created_at `string`
    * bookmark_url `string`
    * vaults_url `string`

### buckets.bucketId.messages.messageId.json.put



```js
basecamp.buckets.bucketId.messages.messageId.json.put({
  "bucketId": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * content `string`
    * subject `string`
  * bucketId **required** `string`
  * messageId **required** `string`

#### Output
* output `object`
  * content `string`
  * subject `string`

### buckets.bucketId.messages.messageId.json.get



```js
basecamp.buckets.bucketId.messages.messageId.json.get({
  "bucketId": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * messageId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * url `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * created_at `string`
  * comments_url `string`
  * updated_at `string`
  * id `integer`
  * content `string`
  * comments_count `integer`
  * subscription_url `string`
  * category `object`
    * icon `string`
    * id `integer`
    * name `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * subject `string`

### buckets.bucketId.chats.chatId.json.get



```js
basecamp.buckets.bucketId.chats.chatId.json.get({
  "bucketId": "",
  "chatId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * chatId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * title `string`
  * url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * lines_url `string`
  * id `integer`
  * topic `string`
  * position `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### buckets.bucketId.todosets.todosetId.todolists.json.post



```js
basecamp.buckets.bucketId.todosets.todosetId.todolists.json.post({
  "bucketId": "",
  "todosetId": ""
}, context)
```

#### Input
* input `object`
  * name `string`: name of the to-do list.
  * body `object`
    * name `string`
    * description `string`
  * bucketId **required** `string`
  * todosetId **required** `string`

#### Output
* output `object`
  * name `string`
  * description `string`

### buckets.bucketId.todosets.todosetId.todolists.json.get



```js
basecamp.buckets.bucketId.todosets.todosetId.todolists.json.get({
  "bucketId": "",
  "todosetId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * todosetId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * subscription_url `string`
    * updated_at `string`
    * id `integer`
    * app_url `string`
    * title `string`
    * app_todos_url `string`
    * comments_count `integer`
    * type `string`
    * status `string`
    * description `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * todos_url `string`
    * completed `boolean`
    * comments_url `string`
    * bookmark_url `string`
    * name `string`
    * groups_url `string`
    * created_at `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * url `string`
    * completed_ratio `string`
    * position `integer`
    * inherits_status `boolean`

### buckets.bucketId.schedule_entries.schedule_entryId.json.put



```js
basecamp.buckets.bucketId.schedule_entries.schedule_entryId.json.put({
  "bucketId": "",
  "schedule_entryId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * starts_at `string`
    * ends_at `string`
    * all_day `boolean`
    * summary `string`
  * bucketId **required** `string`
  * schedule_entryId **required** `string`

#### Output
* output `object`
  * starts_at `string`
  * ends_at `string`
  * all_day `boolean`
  * summary `string`

### buckets.bucketId.schedule_entries.schedule_entryId.json.get



```js
basecamp.buckets.bucketId.schedule_entries.schedule_entryId.json.get({
  "bucketId": "",
  "schedule_entryId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * schedule_entryId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * description `string`
  * parent `object`
    * url `string`
    * app_url `string`
    * type `string`
    * id `integer`
    * title `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * url `string`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * created_at `string`
  * comments_url `string`
  * updated_at `string`
  * id `integer`
  * summary `string`
  * participants `array`
    * items `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
  * comments_count `integer`
  * subscription_url `string`
  * starts_at `string`
  * ends_at `string`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`
  * all_day `boolean`

### buckets.bucketId.todos.todoId.position.json.put



```js
basecamp.buckets.bucketId.todos.todoId.position.json.put({
  "bucketId": "",
  "todoId": ""
}, context)
```

#### Input
* input `object`
  * position `string`: position greater than or equal to one.
  * body `object`
    * position `integer`
  * bucketId **required** `string`
  * todoId **required** `string`

#### Output
* output `object`
  * position `integer`

### buckets.bucketId.vaults.vaultId.json.put



```js
basecamp.buckets.bucketId.vaults.vaultId.json.put({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * title `string`
  * bucketId **required** `string`
  * vaultId **required** `string`

#### Output
* output `object`
  * title `string`

### buckets.bucketId.vaults.vaultId.json.get



```js
basecamp.buckets.bucketId.vaults.vaultId.json.get({
  "bucketId": "",
  "vaultId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * vaultId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * title `string`
  * url `string`
  * documents_count `integer`
  * inherits_status `boolean`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * uploads_url `string`
  * documents_url `string`
  * uploads_count `integer`
  * vaults_count `integer`
  * id `integer`
  * position `integer`
  * type `string`
  * created_at `string`
  * bookmark_url `string`
  * vaults_url `string`

### buckets.bucketId.schedules.scheduleId.entries.json.post



```js
basecamp.buckets.bucketId.schedules.scheduleId.entries.json.post({
  "bucketId": "",
  "scheduleId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * starts_at `string`
    * ends_at `string`
    * summary `string`
  * bucketId **required** `string`
  * scheduleId **required** `string`

#### Output
* output `object`
  * starts_at `string`
  * ends_at `string`
  * summary `string`

### buckets.bucketId.schedules.scheduleId.entries.json.get



```js
basecamp.buckets.bucketId.schedules.scheduleId.entries.json.get({
  "bucketId": "",
  "scheduleId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * scheduleId **required** `string`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * creator `object`
      * attachable_sgid `string`
      * bio `string`
      * name `string`
      * title `string`
      * admin `boolean`
      * created_at `string`
      * updated_at `string`
      * time_zone `string`
      * company `object`
        * id `integer`
        * name `string`
      * avatar_url `string`
      * personable_type `string`
      * owner `boolean`
      * email_address `string`
      * id `integer`
    * subscription_url `string`
    * updated_at `string`
    * id `integer`
    * app_url `string`
    * title `string`
    * participants `array`
      * items `object`
        * attachable_sgid `string`
        * bio `string`
        * name `string`
        * title `string`
        * admin `boolean`
        * created_at `string`
        * updated_at `string`
        * time_zone `string`
        * company `object`
          * id `integer`
          * name `string`
        * avatar_url `string`
        * personable_type `string`
        * owner `boolean`
        * email_address `string`
        * id `integer`
    * type `string`
    * status `string`
    * description `string`
    * parent `object`
      * url `string`
      * app_url `string`
      * type `string`
      * id `integer`
      * title `string`
    * comments_url `string`
    * bookmark_url `string`
    * ends_at `string`
    * url `string`
    * created_at `string`
    * bucket `object`
      * type `string`
      * id `integer`
      * name `string`
    * all_day `boolean`
    * summary `string`
    * comments_count `integer`
    * starts_at `string`
    * inherits_status `boolean`

### buckets.bucketId.webhooks.webhookId.json.put



```js
basecamp.buckets.bucketId.webhooks.webhookId.json.put({
  "bucketId": "",
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * payload_url `string`: payload_url for the HTTPS url that Basecamp will call. Optional parameters :
  * types `string`: types as an array of types, options given in the introduction.
  * active `string`: active as a boolean whether this webhook should be matching.
  * body `object`
    * active `boolean`
    * types `array`
      * items `string`
    * payload_url `string`
  * bucketId **required** `string`
  * webhookId **required** `string`

#### Output
* output `object`
  * active `boolean`
  * types `array`
    * items `string`
  * payload_url `string`

### buckets.bucketId.webhooks.webhookId.json.delete



```js
basecamp.buckets.bucketId.webhooks.webhookId.json.delete({
  "bucketId": "",
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * webhookId **required** `string`

#### Output
*Output schema unknown*

### buckets.bucketId.webhooks.webhookId.json.get



```js
basecamp.buckets.bucketId.webhooks.webhookId.json.get({
  "bucketId": "",
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * webhookId **required** `string`

#### Output
* output `object`
  * app_url `string`
  * payload_url `string`
  * url `string`
  * recent_deliveries `array`
    * items `object`
      * created_at `string`
      * request `object`
        * body `object`
          * recording `object`
          * created_at `string`
          * details `object`
          * kind `string`
          * id `integer`
        * headers `object`
          * X-Request-Id `string`
          * Content-Type `string`
          * User-Agent `string`
      * id `integer`
      * response `object`
        * body `string`
        * headers `object`
          * Content-Length `string`
          * Content-Type `string`
        * message `string`
        * code `integer`
  * created_at `string`
  * updated_at `string`
  * active `string`
  * id `integer`
  * types `array`
    * items `string`

### buckets.bucketId.schedules.scheduleId.json.get



```js
basecamp.buckets.bucketId.schedules.scheduleId.json.get({
  "bucketId": "",
  "scheduleId": ""
}, context)
```

#### Input
* input `object`
  * bucketId **required** `string`
  * scheduleId **required** `string`

#### Output
* output `object`
  * status `string`
  * app_url `string`
  * title `string`
  * url `string`
  * entries_url `string`
  * created_at `string`
  * creator `object`
    * attachable_sgid `string`
    * bio `string`
    * name `string`
    * title `string`
    * admin `boolean`
    * created_at `string`
    * updated_at `string`
    * time_zone `string`
    * company `object`
      * id `integer`
      * name `string`
    * avatar_url `string`
    * personable_type `string`
    * owner `boolean`
    * email_address `string`
    * id `integer`
  * bucket `object`
    * type `string`
    * id `integer`
    * name `string`
  * updated_at `string`
  * id `integer`
  * entries_count `integer`
  * position `integer`
  * type `string`
  * inherits_status `boolean`
  * bookmark_url `string`

### projects.json.post



```js
basecamp.projects.json.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`
    * description `string`

#### Output
*Output schema unknown*

### projects.json.get



```js
basecamp.projects.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
* output `array`
  * items `object`
    * status `string`
    * app_url `string`
    * client_company `object`
      * id `integer`
      * name `string`
    * description `string`
    * clientside `object`
      * url `string`
      * app_url `string`
    * bookmarked `boolean`
    * url `string`
    * created_at `string`
    * updated_at `string`
    * dock `array`
      * items `object`
        * app_url `string`
        * name `string`
        * title `string`
        * url `string`
        * enabled `boolean`
        * position `integer`
        * id `integer`
    * purpose `string`
    * id `integer`
    * bookmark_url `string`
    * name `string`



## Definitions

*This integration has no definitions*
