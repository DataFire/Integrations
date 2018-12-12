# @datafire/dropbox_data

Client library for Dropbox API

## Installation and Usage
```bash
npm install --save @datafire/dropbox_data
```
```js
let dropbox_data = require('@datafire/dropbox_data').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

dropbox_data.team.features.get_values.post({}).then(data => {
  console.log(data);
});
```

## Description

Dropbox API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
dropbox_data.oauthCallback({
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
dropbox_data.oauthRefresh(null, context)
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

### team.reports.get_devices.post
Retrieves reporting data about a team's linked devices.


```js
dropbox_data.team.reports.get_devices.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * start_date `string`: Optional starting date (inclusive). This field is optional.
    * end_date `string`: Optional ending date (exclusive). This field is optional.

#### Output
*Output schema unknown*

### files.move.post
Move a file or folder to a different location in the user's Dropbox. If the source path is a folder all its contents will be moved.


```js
dropbox_data.files.move.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * allow_ownership_transfer `boolean`: Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies. The default for this field is False.
    * from_path `string`: Path in the user's Dropbox to be copied or moved.
    * to_path `string`: Path in the user's Dropbox that is the destination.
    * autorename `boolean`: If there's a conflict, have the Dropbox server try to autorename the file to avoid the conflict. The default for this field is False.
    * allow_shared_folder `boolean`: If true, will copy contents in shared folder, otherwise RelocationError.cant_copy_shared_folder will be returned if from_path contains shared folder. This field is always true for . The default for this field is False.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### sharing.relinquish_file_membership.post
The current user relinquishes their membership in the designated file. Note that the current user may still have inherited access to this file through the parent folder.


```js
dropbox_data.sharing.relinquish_file_membership.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * file `string`: The path or id for the file.

#### Output
*Output schema unknown*

### sharing.mount_folder.post
The current user mounts the designated folder. Mount a shared folder for a user after they have been added as a member. Once mounted, the shared folder will appear in their Dropbox.


```js
dropbox_data.sharing.mount_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID of the shared folder to mount.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * shared_folder_id **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### sharing.get_folder_metadata.post
Returns shared folder metadata by its folder ID.


```js
dropbox_data.sharing.get_folder_metadata.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * actions `string`: A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. Change folder options, such as who can be invited to join the folder. Disable viewer information for this folder. Change or edit contents of the folder. Enable viewer information on the folder. Invite a user or group to join the folder with read and write permission. Invite a user or group to join the folder with read permission. Invite a user or group to join the folder with read permission but no comment permissions. Relinquish one's own membership in the folder. Unmount the folder. Stop sharing this folder. Keep a copy of the contents upon leaving or being kicked from the folder. Field is deprecated. Use create_link instead. Create a shared link for folder. Set whether the folder inherits permissions from its parent.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * shared_folder_id **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### users.get_current_account.post
Get information about the current user's account.


```js
dropbox_data.users.get_current_account.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * referral_link **required** `string`
  * account_type **required** `object`
    * .tag **required** `string`
  * account_id **required** `string`
  * locale **required** `string`
  * email_verified **required** `boolean`
  * team_member_id **required** `string`
  * root_info **required** `object`
    * root_namespace_id **required** `string`
    * .tag **required** `string`
    * home_namespace_id **required** `string`
  * disabled **required** `boolean`
  * is_paired **required** `boolean`
  * team **required** `object`
    * sharing_policies **required** `object`
      * shared_folder_join_policy **required** `object`
        * .tag **required** `string`
      * shared_folder_member_policy **required** `object`
        * .tag **required** `string`
      * shared_link_create_policy **required** `object`
        * .tag **required** `string`
    * office_addin_policy **required** `object`
      * .tag **required** `string`
    * id **required** `string`
    * name **required** `string`
  * country **required** `string`
  * email **required** `string`
  * name **required** `object`
    * familiar_name **required** `string`
    * display_name **required** `string`
    * surname **required** `string`
    * given_name **required** `string`
    * abbreviated_name **required** `string`

### paper.docs.users.list.post
Lists all users who visited the Paper doc or users with explicit access. This call excludes users who have been removed. The list is sorted by the date of the visit or the share date. The list will include both users, the explicitly shared ones as well as those who came in using the Paper url link.


```js
dropbox_data.paper.docs.users.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Size limit per batch. The maximum number of users that can be retrieved per batch is 1000. Higher value results in invalid arguments error. The default for this field is 1000.
    * doc_id `string`: The Paper doc ID.
    * filter_by `string`: Specify this attribute if you want to obtain users that have already accessed the Paper doc. The default for this union is shared. all users who have visited the Paper doc. All uses who are shared on the Paper doc. This includes all users who have visited the Paper doc as well as those who have not.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * doc_owner **required** `object`
    * team_member_id **required** `string`
    * same_team **required** `boolean`
    * display_name **required** `string`
    * email **required** `string`
    * account_id **required** `string`
  * users **required** `array`
    * items `object`
      * permission_level **required** `object`
        * .tag **required** `string`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
  * invitees **required** `array`
    * items `object`
      * permission_level **required** `object`
        * .tag **required** `string`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`

### users.get_space_usage.post
Get the space usage information for the current user's account.


```js
dropbox_data.users.get_space_usage.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * allocation **required** `object`
    * .tag **required** `string`
    * allocated **required** `integer`
  * used **required** `integer`

### paper.docs.sharing_policy.get.post
Gets the default sharing policy for the given Paper doc.


```js
dropbox_data.paper.docs.sharing_policy.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.

#### Output
* output `object`
  * team_sharing_policy **required** `object`
    * .tag **required** `string`
  * public_sharing_policy **required** `object`
    * .tag **required** `string`

### team.groups.update.post
Updates a group's name and/or external ID. Permission : Team member management.


```js
dropbox_data.team.groups.update.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * return_members `boolean`: Whether to return the list of members in the group. Note that the default value will cause all the group members to be returned in the response. This may take a long time for large groups. The default for this field is True.
    * new_group_name `string`: Optional argument. Set group name to this if provided. This field is optional.
    * group `string`: Specify a group. Group ID. External ID of the group.
    * new_group_management_type `string`: Set new group management type, if provided. This field is optional. A group which is managed by selected users. A group which is managed by team admins only. A group which is managed automatically by Dropbox.
    * new_group_external_id `string`: Optional argument. New group external ID. If the argument is None, the group's external_id won't be updated. If the argument is empty string, the group's external id will be cleared. This field is optional.

#### Output
* output `object`
  * member_count **required** `integer`
  * created **required** `integer`
  * group_management_type **required** `object`
    * .tag **required** `string`
  * group_name **required** `string`
  * members **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * joined_on **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
  * group_id **required** `string`

### sharing.revoke_shared_link.post
Revoke a shared link. Note that even after revoking a shared link to a file, the file may be accessible if there are shared links leading to any of the file parent folders. To list all shared links that enable access to a specific file, you can use the list_shared_links with the file as the ListSharedLinksArg.path argument.


```js
dropbox_data.sharing.revoke_shared_link.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * url `string`: URL of the shared link.

#### Output
*Output schema unknown*

### team.team_folder.permanently_delete.post
Permanently deletes an archived team folder. Permission : Team member file access.


```js
dropbox_data.team.team_folder.permanently_delete.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_id `string`: The ID of the team folder.

#### Output
*Output schema unknown*

### sharing.update_file_member.post
Changes a member's access on a shared file.


```js
dropbox_data.sharing.update_file_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: The member whose access we are changing. Dropbox account, team member, or group ID of member. E-mail address of member.
    * access_level `string`: The new access level for the member. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments.
    * file `string`: File for which we are changing a member's access.

#### Output
*Output schema unknown*

### team.members.send_welcome_email.post
Sends welcome email to pending team member. Permission : Team member management Exactly one of team_member_id, email, or external_id must be provided to identify the user account. No-op if team member is not pending.


```js
dropbox_data.team.members.send_welcome_email.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_member_id `string`
    * external_id `string`
    * email `string`

#### Output
*Output schema unknown*

### team.members.suspend.post
Suspend a member from a team. Permission : Team member management Exactly one of team_member_id, email, or external_id must be provided to identify the user account.


```js
dropbox_data.team.members.suspend.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * user `string`: Identity of user to remove/suspend/have their files moved.
    * wipe_data `boolean`: If provided, controls if the user's data will be deleted on their linked devices. The default for this field is True.

#### Output
*Output schema unknown*

### files.upload_session.finish_batch.check.post
Returns the status of an asynchronous job for upload_session/finish_batch . If success, it returns list of result for each entry.


```js
dropbox_data.files.upload_session.finish_batch.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * client_modified **required** `string`
      * rev **required** `string`
      * .tag **required** `string`
      * path_display **required** `string`
      * has_explicit_shared_members **required** `boolean`
      * path_lower **required** `string`
      * server_modified **required** `string`
      * sharing_info **required** `object`
        * read_only **required** `boolean`
        * parent_shared_folder_id **required** `string`
        * modified_by **required** `string`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`
      * content_hash **required** `string`
      * id **required** `string`
      * size **required** `integer`

### sharing.list_folder_members.continue.post
Once a cursor has been retrieved from list_folder_members , use this to paginate through all shared folder members.


```js
dropbox_data.sharing.list_folder_members.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by your last call to or .

#### Output
* output `object`
  * cursor **required** `string`
  * users **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * groups **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * group **required** `object`
        * is_owner **required** `boolean`
        * member_count **required** `integer`
        * same_team **required** `boolean`
        * is_member **required** `boolean`
        * group_management_type **required** `object`
          * .tag **required** `string`
        * group_name **required** `string`
        * group_id **required** `string`
        * group_type **required** `object`
          * .tag **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * invitees **required** `array`
    * items `object`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`
      * is_inherited **required** `boolean`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`

### team.members.list.post
Lists members of a team. Permission : Team information.


```js
dropbox_data.team.members.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * include_removed `boolean`: Whether to return removed members. The default for this field is False.
    * limit `integer`: Number of results to return per call. The default for this field is 1000.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * members **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * member_folder_id **required** `string`
        * groups **required** `array`
          * items `string`
        * joined_on **required** `string`
        * external_id **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * role **required** `object`
        * .tag **required** `string`

### deprecated.properties.template.list.post



```js
dropbox_data.deprecated.properties.template.list.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * template_ids **required** `array`
    * items `string`

### files.create_folder_batch.check.post
Returns the status of an asynchronous job for create_folder_batch . If success, it returns list of result for each entry.


```js
dropbox_data.files.create_folder_batch.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * .tag **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * path_display **required** `string`
        * path_lower **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * traverse_only **required** `boolean`
          * no_access **required** `boolean`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * id **required** `string`

### team.devices.revoke_device_session_batch.post
Revoke a list of device sessions of team members.


```js
dropbox_data.team.devices.revoke_device_session_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * revoke_devices `string`: End an active session. The session id. The unique id of the member owning the device. Unlink a linked desktop device. The session id. The unique id of the member owning the device. Whether to delete all files of the account (this is possible only if supported by the desktop client and will be made the next time the client access the account). The default for this field is False. Unlink a linked mobile device. The session id. The unique id of the member owning the device.

#### Output
*Output schema unknown*

### files.restore.post
Restore a specific revision of a file to the given path.


```js
dropbox_data.files.restore.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to save the restored file.
    * rev `string`: The revision to restore.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### file_requests.update.post
Update a file request.


```js
dropbox_data.file_requests.update.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * open `boolean`: Whether to set this file request as open or closed. This field is optional.
    * destination `string`: The new path of the folder in the Dropbox where uploaded files will be sent. For apps with the app folder permission, this will be relative to the app folder. This field is optional.
    * deadline `string`: The new deadline for the file request. Deadlines can only be set by Professional and Business accounts. The default for this union is no_update. Do not change the file request's deadline. If None, the file request's deadline is cleared. This field is optional. The deadline for this file request. If set, allow uploads after the deadline has passed. These uploads will be marked overdue. This field is optional.
    * id `string`: The ID of the file request to update.
    * title `string`: The new title of the file request. Must not be empty. This field is optional.

#### Output
* output `object`
  * created **required** `string`
  * url **required** `string`
  * title **required** `string`
  * destination **required** `string`
  * file_count **required** `integer`
  * is_open **required** `boolean`
  * id **required** `string`
  * deadline **required** `object`
    * deadline **required** `string`
    * allow_late_uploads **required** `object`
      * .tag **required** `string`

### file_properties.templates.remove_for_team.post
Permanently removes the specified template created from templates/add_for_user . All properties associated with the template will also be removed. This action cannot be undone.


```js
dropbox_data.file_properties.templates.remove_for_team.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_id `string`: An identifier for a template created by or .

#### Output
*Output schema unknown*

### paper.docs.get_folder_info.post
Retrieves folder information for the given Paper doc. This includes: - folder sharing policy; permissions for subfolders are set by the top-level folder. - full 'filepath', i.e. the list of folders (both folderId and folderName) from the root folder to the folder directly containing the Paper doc. Note: If the Paper doc is not in any folder (aka unfiled) the response will be empty.


```js
dropbox_data.paper.docs.get_folder_info.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.

#### Output
* output `object`
  * folders **required** `array`
    * items `object`
      * id **required** `string`
      * name **required** `string`
  * folder_sharing_policy_type **required** `object`
    * .tag **required** `string`

### files.copy_batch.post
Copy multiple files or folders to different locations at once in the user's Dropbox. This route will replace copy_batch . The main difference is this route will return stutus for each entry, while copy_batch raises failure if any entry fails. This route will either finish synchronously, or return a job ID and do the async copy job in background. Please use copy_batch/check:2 to check the job status.


```js
dropbox_data.files.copy_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * autorename `boolean`: If there's a conflict with any file, have the Dropbox server try to autorename that file to avoid the conflict. The default for this field is False.
    * entries `string`: List of entries to be moved or copied. Each entry is RelocationPath. Path in the user's Dropbox to be copied or moved. Path in the user's Dropbox that is the destination.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### file_properties.properties.search.post
Search across property templates for particular property field values.


```js
dropbox_data.file_properties.properties.search.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_filter `string`: Filter results to contain only properties associated with these template IDs. The default for this union is filter_none. Only templates with an ID in the supplied list will be returned (a subset of templates will be returned). No templates will be filtered from the result (all templates will be returned).
    * queries `string`: Queries to search. The property field value for which to search across templates. The mode with which to perform the search. Search for a value associated with this field name. The logical operator with which to append the query. The default for this union is or_operator. Append a query with an "or" operator.

#### Output
* output `object`
  * matches **required** `array`
    * items `object`
      * path **required** `string`
      * is_deleted **required** `boolean`
      * id **required** `string`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`

### team.groups.delete.post
Deletes a group. The group is deleted immediately. However the revoking of group-owned resources may take additional time. Use the groups/job_status/get to determine whether this process has completed. Permission : Team member management.


```js
dropbox_data.team.groups.delete.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * group_external_id `string`: External ID of the group.
    * group_id `string`: Group ID.

#### Output
* output `object`
  * .tag **required** `string`

### team.linked_apps.revoke_linked_app.post
Revoke a linked application of the team member.


```js
dropbox_data.team.linked_apps.revoke_linked_app.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * keep_app_folder `boolean`: Whether to keep the application dedicated folder (in case the application uses one). The default for this field is True.
    * team_member_id `string`: The unique id of the member owning the device.
    * app_id `string`: The application's unique id.

#### Output
*Output schema unknown*

### team.groups.get_info.post
Retrieves information about one or more groups. Note that the optional field GroupFullInfo.members is not returned for system-managed groups. Permission : Team Information.


```js
dropbox_data.team.groups.get_info.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * group_external_ids `string`: List of external IDs of groups.
    * group_ids `string`: List of group IDs.

#### Output
*Output schema unknown*

### files.delete.post
Delete the file or folder at a given path. If the path is a folder, all its contents will be deleted too. A successful response indicates that the file or folder was deleted. The returned metadata will be the corresponding FileMetadata or FolderMetadata for the item at time of deletion, and not a DeletedMetadata object.


```js
dropbox_data.files.delete.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: Path in the user's Dropbox to delete.
    * parent_rev `string`: Perform delete if given "rev" matches the existing file's latest "rev". This field does not support deleting a folder. This field is optional.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### oauth2.authorize.get
This starts the OAuth 2.0 authorization flow. This isn't an API call—it's the web page that lets the user sign in to Dropbox and authorize your app. After the user decides whether or not to authorize your app, they will be redirected to the URI specified by redirect_uri . OAuth 2.0 supports two authorization flows: The code flow returns a code via the redirect_uri callback which should then be converted into a bearer token using the /oauth2/token call . This is the recommended flow for apps that are running on a server. The token or implicit grant flow returns the bearer token via the redirect_uri callback, rather than requiring your app to make a second call to a server. This is useful for pure client-side apps, such as mobile apps or JavaScript-based apps. For more information on the two flows, see Section 1.3 of the OAuth 2 spec . If the user isn't already signed in to the Dropbox web site, they will be prompted to do so on this web page. Note that some users use their Google account to sign in to Dropbox. In order to comply with Google's policy against processing the OAuth flow inside a web-view , you should not display this web page inside a web-view.


```js
dropbox_data.oauth2.authorize.get({}, context)
```

#### Input
* input `object`
  * response_type `string`: The grant type requested, either or .
  * client_id `string`: The app's key, found in the .
  * redirect_uri `string`: Where to redirect the user after authorization has completed. This must be the exact URI registered in the ; even 'localhost' must be listed if it is used for testing. All redirect URIs must be HTTPS except for localhost URIs. A redirect URI is required for the flow, but optional for the flow. If the redirect URI is omitted, the will be presented directly to the user and they will be invited to enter the information in your app.
  * state `string`: Up to 500 bytes of arbitrary data that will be passed back to your redirect URI. This parameter should be used to protect against cross-site request forgery (CSRF). See Sections and of the OAuth 2.0 threat model spec.
  * require_role `string`: If this parameter is specified, the user will be asked to authorize with a particular type of Dropbox account, either for a team account or for a personal account. Your app should still verify the type of Dropbox account after authorization since the user could modify or remove the parameter.
  * force_reapprove `boolean`: Whether or not to force the user to approve the app again if they've already done so. If (default), a user who has already approved the application may be automatically redirected to the URI specified by . If , the user will not be automatically redirected and will have to approve the app again.
  * disable_signup `boolean`: When true (default is false) users will not be able to sign up for a Dropbox account via the authorization page. Instead, the authorization page will show a link to the Dropbox iOS app in the App Store. This is only intended for use when necessary for compliance with App Store policies.
  * locale `string`: If the locale specified is a , Dropbox will direct users to a translated version of the authorization website. Locale tags should be .
  * force_reauthentication `boolean`: When (default is ) users will be signed out if they are currently signed in. This will make sure the user is brought to a page where they can create a new account or sign in to another account. This should only be used when there is a definite reason to believe that the user needs to sign in to a new or different account.

#### Output
*Output schema unknown*

### sharing.check_share_job_status.post
Returns the status of an asynchronous job for sharing a folder.


```js
dropbox_data.sharing.check_share_job_status.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * shared_folder_id **required** `string`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### files.get_thumbnail_batch.post
Get thumbnails for a list of images. We allow up to 25 thumbnails in a single batch. This method currently supports files with the following file extensions: jpg, jpeg, png, tiff, tif, gif and bmp. Photos that are larger than 20MB in size won't be converted to a thumbnail.


```js
dropbox_data.files.get_thumbnail_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * entries `string`: List of files to get thumbnails. The path to the image file you want to thumbnail. The format for the thumbnail image, jpeg (default) or png. For images that are photos, jpeg should be preferred, while png is better for screenshots and digital arts. The default for this union is jpeg. The size for the thumbnail image. The default for this union is w64h64. 32 by 32 px. 64 by 64 px. 128 by 128 px. 256 by 256 px. 480 by 320 px. 640 by 480 px. 960 by 640 px. 1024 by 768 px. 2048 by 1536 px. How to resize and crop the image to achieve the desired size. The default for this union is strict. Scale down the image to fit within the given size. Scale down the image to fit within the given size or its transpose. Scale down the image to completely cover the given size or its transpose.

#### Output
* output `object`
  * entries **required** `array`
    * items `object`
      * .tag **required** `string`
      * thumbnail **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### sharing.remove_folder_member.post
Allows an owner or editor (if the ACL update policy allows) of a shared folder to remove another member.


```js
dropbox_data.sharing.remove_folder_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: The member to remove from the folder. Dropbox account, team member, or group ID of member. E-mail address of member.
    * shared_folder_id `string`: The ID for the shared folder.
    * leave_a_copy `boolean`: If true, the removed user will keep their copy of the folder after it's unshared, assuming it was mounted. Otherwise, it will be removed from their Dropbox. Also, this must be set to false when kicking a group.

#### Output
* output `object`
  * .tag **required** `string`
  * async_job_id **required** `string`

### team.token.get_authenticated_admin.post
Returns the member profile of the admin who generated the team access token used to make the call.


```js
dropbox_data.team.token.get_authenticated_admin.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * admin_profile **required** `object`
    * status **required** `object`
      * .tag **required** `string`
    * membership_type **required** `object`
      * .tag **required** `string`
    * name **required** `object`
      * familiar_name **required** `string`
      * display_name **required** `string`
      * surname **required** `string`
      * given_name **required** `string`
      * abbreviated_name **required** `string`
    * email_verified **required** `boolean`
    * team_member_id **required** `string`
    * member_folder_id **required** `string`
    * groups **required** `array`
      * items `string`
    * joined_on **required** `string`
    * external_id **required** `string`
    * email **required** `string`
    * account_id **required** `string`

### sharing.update_folder_member.post
Allows an owner or editor of a shared folder to update another member's permissions.


```js
dropbox_data.sharing.update_folder_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: The member of the shared folder to update. Only the MemberSelector.dropbox_id may be set at this time. Dropbox account, team member, or group ID of member. E-mail address of member.
    * access_level `string`: The new access level for member. AccessLevel.owner is disallowed. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments.
    * shared_folder_id `string`: The ID for the shared folder.

#### Output
*Output schema unknown*

### sharing.create_shared_link_with_settings.post
Create a shared link with custom settings. If no settings are given then the default visibility is RequestedVisibility.public (The resolved visibility, though, may depend on other aspects such as team and shared folder settings).


```js
dropbox_data.sharing.create_shared_link_with_settings.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to be shared by the shared link.
    * settings `string`: The requested settings for the newly created shared link. This field is optional. The requested access for this shared link. This field is optional. Anyone who has received the link can access it. No login required. Only members of the same team can access the link. Login is required. A link-specific password is required to access the link. Login is not required. If requested_visibility is RequestedVisibility.password this is needed to specify the password to access the link. This field is optional. Expiration time of the shared link. By default the link won't expire. This field is optional.

#### Output
* output `object`
  * name **required** `string`
  * url **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * link_permissions **required** `object`
    * resolved_visibility **required** `object`
      * .tag **required** `string`
    * can_revoke **required** `boolean`
    * revoke_failure_reason **required** `object`
      * .tag **required** `string`
  * team_member_info **required** `object`
    * member_id **required** `string`
    * display_name **required** `string`
    * team_info **required** `object`
      * id **required** `string`
      * name **required** `string`
  * id **required** `string`
  * size **required** `integer`

### file_properties.properties.update.post
Add, update or remove properties associated with the supplied file and templates. This endpoint should be used instead of properties/overwrite when property groups are being updated via a "delta" instead of via a "snapshot" . In other words, this endpoint will not delete any omitted fields from a property group, whereas properties/overwrite will delete any fields that are omitted from a property group.


```js
dropbox_data.file_properties.properties.update.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * update_property_groups `string`: The property groups "delta" updates to apply. A unique identifier for a property template. Property fields to update. If the property field already exists, it is updated. If the property field doesn't exist, the property group is added. This field is optional. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes. Property fields to remove (by name), provided they exist. This field is optional.

#### Output
*Output schema unknown*

### team_log.get_events.continue.post
Once a cursor has been retrieved from get_events , use this to paginate through all events. Permission : Team Auditing.


```js
dropbox_data.team_log.get_events.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of events.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * events **required** `array`
    * items `object`
      * origin **required** `object`
        * geo_location **required** `object`
          * city **required** `string`
          * region **required** `string`
          * ip_address **required** `string`
          * country **required** `string`
        * access_method **required** `object`
          * .tag **required** `string`
          * end_user **required** `object`
            * .tag **required** `string`
            * session_id **required** `string`
      * event_type **required** `object`
        * .tag **required** `string`
        * description **required** `string`
      * timestamp **required** `string`
      * actor **required** `object`
        * .tag **required** `string`
        * user **required** `object`
          * display_name **required** `string`
          * account_id **required** `string`
          * team_member_id **required** `string`
          * .tag **required** `string`
          * member_external_id **required** `string`
          * email **required** `string`
      * participants **required** `array`
        * items `object`
          * .tag **required** `string`
          * user **required** `object`
            * display_name **required** `string`
            * account_id **required** `string`
            * team_member_id **required** `string`
            * .tag **required** `string`
            * member_external_id **required** `string`
            * email **required** `string`
      * event_category **required** `object`
        * .tag **required** `string`
      * context **required** `object`
        * display_name **required** `string`
        * account_id **required** `string`
        * team_member_id **required** `string`
        * .tag **required** `string`
        * member_external_id **required** `string`
        * email **required** `string`
      * details **required** `object`
        * shared_content_owner **required** `object`
          * display_name **required** `string`
          * account_id **required** `string`
          * team_member_id **required** `string`
          * .tag **required** `string`
          * member_external_id **required** `string`
          * email **required** `string`
        * .tag **required** `string`
        * shared_content_link **required** `string`
        * shared_content_access_level **required** `object`
          * .tag **required** `string`
      * assets **required** `array`
        * items `object`
          * path **required** `object`
            * namespace_relative **required** `object`
              * ns_id **required** `string`
              * relative_path **required** `string`
            * contextual **required** `string`
          * .tag **required** `string`
          * display_name **required** `string`
          * file_id **required** `string`
      * involve_non_team_member **required** `boolean`

### team.members.add.post
Adds members to a team. Permission : Team member management A maximum of 20 members can be specified in a single call. If no Dropbox account exists with the email address specified, a new Dropbox account will be created with the given email address, and that account will be invited to the team. If a personal Dropbox account exists with the email address specified in the call, this call will create a placeholder Dropbox account for the user on the team and send an email inviting the user to migrate their existing personal account onto the team. Team member management apps are required to set an initial given_name and surname for a user to use in the team invitation and for 'Perform as team member' actions taken on the user before they become 'active'.


```js
dropbox_data.team.members.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * new_members `string`: Details of new members to be added to the team. Member's first name. This field is optional. Member's last name. This field is optional. External ID for member. This field is optional. Persistent ID for member. This field is only available to teams using persistent ID SAML configuration. This field is optional. Whether to send a welcome email to the member. If send_welcome_email is false, no email invitation will be sent to the user. This may be useful for apps using single sign-on (SSO) flows for onboarding that want to handle announcements themselves. The default for this field is True. The default for this union is member_only. User is an administrator of the team - has all permissions. User can do most user provisioning, de-provisioning and management. User can do a limited set of common support tasks for existing users. User is not an admin of the team. Whether a user is directory restricted. This field is optional.
    * force_async `boolean`: Whether to force the add to happen asynchronously. The default for this field is False.

#### Output
* output `object`
  * .tag **required** `string`
  * complete **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * member_folder_id **required** `string`
        * groups **required** `array`
          * items `string`
        * joined_on **required** `string`
        * external_id **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * .tag **required** `string`
      * role **required** `object`
        * .tag **required** `string`

### team.namespaces.list.post
Returns a list of all team-accessible namespaces. This list includes team folders, shared folders containing team members, team members' home namespaces, and team members' app folders. Home namespaces and app folders are always owned by this team or members of the team, but shared folders may be owned by other users or other teams. Duplicates may occur in the list.


```js
dropbox_data.team.namespaces.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit deprecated `integer`: Field is deprecated. Specifying a value here has no effect. The default for this field is 1000.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * namespaces **required** `array`
    * items `object`
      * team_member_id `string`
      * namespace_id **required** `string`
      * name **required** `string`
      * namespace_type **required** `object`
        * .tag **required** `string`

### team.team_folder.archive.post
Sets an active team folder's status to archived and removes all folder and file members. Permission : Team member file access.


```js
dropbox_data.team.team_folder.archive.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_id `string`: The ID of the team folder.
    * force_async_off `boolean`: Whether to force the archive to happen synchronously. The default for this field is False.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * .tag **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`

### sharing.unmount_folder.post
The current user unmounts the designated folder. They can re-mount the folder at a later time using mount_folder .


```js
dropbox_data.sharing.unmount_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.

#### Output
*Output schema unknown*

### sharing.list_received_files.post
Returns a list of all files shared with current user. Does not include files the user has received via shared folders, and does not include unclaimed invitations.


```js
dropbox_data.sharing.list_received_files.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Number of files to return max per query. Defaults to 100 if no limit is specified. The default for this field is 100.
    * actions `string`: A list of `FileAction`s corresponding to `FilePermission`s that should appear in the response's SharedFileMetadata.permissions field describing the actions the authenticated user can perform on the file. This field is optional. Disable viewer information on the file. Change or edit contents of the file. Enable viewer information on the file. Add a member with view permissions. Add a member with view permissions but no comment permissions. Add a member with edit permissions. Stop sharing this file. Relinquish one's own membership to the file. Field is deprecated. Use create_link instead. Create a shared link to the file.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * owner_team **required** `object`
        * id **required** `string`
        * name **required** `string`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * owner_display_names **required** `array`
        * items `string`
      * path_display **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * id **required** `string`
      * permissions **required** `array`

### team.member_space_limits.excluded_users.add.post
Add users to member space limits excluded users list.


```js
dropbox_data.team.member_space_limits.excluded_users.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * users `string`: List of users to be added/removed. This field is optional.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`

### paper.docs.sharing_policy.set.post
Sets the default sharing policy for the given Paper doc. The default 'team_sharing_policy' can be changed only by teams, omit this field for personal accounts. Note: 'public_sharing_policy' cannot be set to the value 'disabled' because this setting can be changed only via the team admin console.


```js
dropbox_data.paper.docs.sharing_policy.set.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.
    * sharing_policy `string`: The default sharing policy to be set for the Paper doc. This value applies to the non-team members. This field is optional. Users who have a link to this doc can edit it. Users who have a link to this doc can view and comment on it. Users must be explicitly invited to this doc. Value used to indicate that doc sharing is enabled only within team. This value applies to the team members only. The value is null for all personal accounts. This field is optional. Users who have a link to this doc can edit it. Users who have a link to this doc can view and comment on it. Users must be explicitly invited to this doc.

#### Output
*Output schema unknown*

### file_requests.get.post
Returns the specified file request.


```js
dropbox_data.file_requests.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * id `string`: The ID of the file request to retrieve.

#### Output
* output `object`
  * created **required** `string`
  * url **required** `string`
  * title **required** `string`
  * destination **required** `string`
  * file_count **required** `integer`
  * is_open **required** `boolean`
  * id **required** `string`
  * deadline **required** `object`
    * deadline **required** `string`
    * allow_late_uploads **required** `object`
      * .tag **required** `string`

### file_requests.create.post
Creates a file request for this user.


```js
dropbox_data.file_requests.create.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * open `boolean`: Whether or not the file request should be open. If the file request is closed, it will not accept any file submissions, but it can be opened later. The default for this field is True.
    * destination `string`: The path of the folder in the Dropbox where uploaded files will be sent. For apps with the app folder permission, this will be relative to the app folder.
    * deadline `string`: The deadline for the file request. Deadlines can only be set by Professional and Business accounts. This field is optional. The deadline for this file request. If set, allow uploads after the deadline has passed. These uploads will be marked overdue. This field is optional.
    * title `string`: The title of the file request. Must not be empty.

#### Output
* output `object`
  * created **required** `string`
  * url **required** `string`
  * title **required** `string`
  * destination **required** `string`
  * file_count **required** `integer`
  * is_open **required** `boolean`
  * id **required** `string`
  * deadline **required** `object`
    * deadline **required** `string`
    * allow_late_uploads **required** `object`
      * .tag **required** `string`

### files.copy_batch.check.post
Returns the status of an asynchronous job for copy_batch:2 . It returns list of results for each entry.


```js
dropbox_data.files.copy_batch.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### files.move_batch.check.post
Returns the status of an asynchronous job for move_batch:2 . It returns list of results for each entry.


```js
dropbox_data.files.move_batch.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### deprecated.remove_file_member.post
Identical to remove_file_member_2 but with less information returned.


```js
dropbox_data.deprecated.remove_file_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: Member to remove from this file. Note that even if an email is specified, it may result in the removal of a user (not an invitee) if the user's main account corresponds to that email address. Dropbox account, team member, or group ID of member. E-mail address of member.
    * file `string`: File from which to remove members.

#### Output
* output `object`
  * .tag **required** `string`

### team.namespaces.list.continue.post
Once a cursor has been retrieved from namespaces/list , use this to paginate through all team-accessible namespaces. Duplicates may occur in the list.


```js
dropbox_data.team.namespaces.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of team-accessible namespaces.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * namespaces **required** `array`
    * items `object`
      * team_member_id `string`
      * namespace_id **required** `string`
      * name **required** `string`
      * namespace_type **required** `object`
        * .tag **required** `string`

### team.groups.members.list.continue.post
Once a cursor has been retrieved from groups/members/list , use this to paginate through all members of the group. Permission : Team information.


```js
dropbox_data.team.groups.members.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of groups.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * members **required** `array`

### sharing.share_folder.post
Share a folder with collaborators. Most sharing will be completed synchronously. Large folders will be completed asynchronously. To make testing the async case repeatable, set `ShareFolderArg.force_async`. If a ShareFolderLaunch.async_job_id is returned, you'll need to call check_share_job_status until the action completes to get the metadata for the folder.


```js
dropbox_data.sharing.share_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * viewer_info_policy `string`: Who can enable/disable viewer info for this shared folder. This field is optional. Viewer information is available on this file. Viewer information is disabled on this file.
    * force_async `boolean`: Whether to force the share to happen asynchronously. The default for this field is False.
    * acl_update_policy `string`: Who can add and remove members of this shared folder. This field is optional. Only the owner can update the ACL. Any editor can update the ACL. This may be further restricted to editors on the same team.
    * actions `string`: A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. Change folder options, such as who can be invited to join the folder. Disable viewer information for this folder. Change or edit contents of the folder. Enable viewer information on the folder. Invite a user or group to join the folder with read and write permission. Invite a user or group to join the folder with read permission. Invite a user or group to join the folder with read permission but no comment permissions. Relinquish one's own membership in the folder. Unmount the folder. Stop sharing this folder. Keep a copy of the contents upon leaving or being kicked from the folder. Field is deprecated. Use create_link instead. Create a shared link for folder. Set whether the folder inherits permissions from its parent.
    * access_inheritance `string`: The access inheritance settings for the folder. The default for this union is inherit. The shared folder inherits its members from the parent folder. The shared folder does not inherit its members from the parent folder.
    * shared_link_policy `string`: The policy to apply to shared links created for content inside this shared folder. The current user must be on a team to set this policy to SharedLinkPolicy.members. This field is optional. Links can be shared with anyone. Links can be shared with anyone on the same team as the owner. Links can only be shared among members of the shared folder.
    * path `string`: The path to the folder to share. If it does not exist, then a new one is created.
    * link_settings `string`: Settings on the link for this folder. This field is optional. The access level on the link for this file. Currently, it only accepts 'viewer' and 'viewer_no_comment'. This field is optional. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments. The type of audience on the link for this file. This field is optional. Link is accessible by anyone. Link is accessible only by team members. The link can be used by no one. The link merely points the user to the content, and does not grant additional rights to the user. Members of the content who use this link can only access the content with their pre-existing access rights. Field is deprecated. Link is accessible only by members of the content. An expiry timestamp to set on a link. This field is optional. Remove the currently set expiry for the link. Set a new expiry or change an existing expiry. The password for the link. This field is optional. Remove the currently set password for the link. Set a new password or change an existing password.
    * member_policy `string`: Who can be a member of this shared folder. Only applicable if the current user is on a team. This field is optional. Only a teammate can become a member. Anyone can become a member.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * shared_folder_id **required** `string`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### team.groups.members.remove.post
Removes members from a group. The members are removed immediately. However the revoking of group-owned resources may take additional time. Use the groups/job_status/get to determine whether this process has completed. This method permits removing the only owner of a group, even in cases where this is not possible via the web client. Permission : Team member management.


```js
dropbox_data.team.groups.members.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * return_members `boolean`: Whether to return the list of members in the group. Note that the default value will cause all the group members to be returned in the response. This may take a long time for large groups. The default for this field is True.
    * group `string`: Group from which users will be removed. Group ID. External ID of the group.
    * users `string`: List of users to be removed from the group.

#### Output
* output `object`
  * group_info **required** `object`
    * member_count **required** `integer`
    * created **required** `integer`
    * group_management_type **required** `object`
      * .tag **required** `string`
    * group_name **required** `string`
    * members **required** `array`
      * items `object`
        * profile **required** `object`
          * status **required** `object`
            * .tag **required** `string`
          * membership_type **required** `object`
            * .tag **required** `string`
          * name **required** `object`
            * familiar_name **required** `string`
            * display_name **required** `string`
            * surname **required** `string`
            * given_name **required** `string`
            * abbreviated_name **required** `string`
          * email_verified **required** `boolean`
          * team_member_id **required** `string`
          * joined_on **required** `string`
          * email **required** `string`
          * account_id **required** `string`
        * access_type **required** `object`
          * .tag **required** `string`
    * group_id **required** `string`
  * async_job_id **required** `string`

### files.save_url.check_job_status.post
Check the status of a save_url job.


```js
dropbox_data.files.save_url.check_job_status.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### files.copy_reference.save.post
Save a copy reference returned by copy_reference/get to the user's Dropbox.


```js
dropbox_data.files.copy_reference.save.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: Path in the user's Dropbox that is the destination.
    * copy_reference `string`: A copy reference returned by .

#### Output
* output `object`
  * metadata **required** `object`
    * name **required** `string`
    * client_modified **required** `string`
    * rev **required** `string`
    * .tag **required** `string`
    * path_display **required** `string`
    * has_explicit_shared_members **required** `boolean`
    * path_lower **required** `string`
    * server_modified **required** `string`
    * sharing_info **required** `object`
      * read_only **required** `boolean`
      * parent_shared_folder_id **required** `string`
      * modified_by **required** `string`
    * property_groups **required** `array`
      * items `object`
        * fields **required** `array`
          * items `object`
            * name **required** `string`
            * value **required** `string`
        * template_id **required** `string`
    * content_hash **required** `string`
    * id **required** `string`
    * size **required** `integer`

### team.members.get_info.post
Returns information about multiple team members. Permission : Team information This endpoint will return MembersGetInfoItem.id_not_found, for IDs (or emails) that cannot be matched to a valid team member.


```js
dropbox_data.team.members.get_info.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * members `string`: List of team members.

#### Output
*Output schema unknown*

### paper.docs.users.add.post
Allows an owner or editor to add users to a Paper doc or change their permissions using their email address or Dropbox account ID. Note: The Doc owner's permissions cannot be changed.


```js
dropbox_data.paper.docs.users.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.
    * quiet `boolean`: Clients should set this to true if no email message shall be sent to added users. The default for this field is False.
    * members `string`: User which should be added to the Paper doc. Specify only email address or Dropbox account ID. User which should be added to the Paper doc. Specify only email address or Dropbox account ID. Dropbox account, team member, or group ID of member. E-mail address of member. Permission for the user. The default for this union is edit. User will be granted edit permissions. User will be granted view and comment permissions.
    * custom_message `string`: A personal message that will be emailed to each successfully added member. This field is optional.

#### Output
*Output schema unknown*

### team.team_folder.rename.post
Changes an active team folder's name. Permission : Team member file access.


```js
dropbox_data.team.team_folder.rename.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_id `string`: The ID of the team folder.
    * name `string`: New team folder name.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`

### sharing.list_folder_members.post
Returns shared folder membership by its folder ID.


```js
dropbox_data.sharing.list_folder_members.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * limit `integer`: The maximum number of results that include members, groups and invitees to return per request. The default for this field is 1000.
    * actions `string`: This is a list indicating whether each returned member will include a boolean value MemberPermission.allow that describes whether the current user can perform the MemberAction on the member. This field is optional. Allow the member to keep a copy of the folder when removing. Make the member an editor of the folder. Make the member an owner of the folder. Make the member a viewer of the folder. Make the member a viewer of the folder without commenting permissions. Remove the member from the folder.

#### Output
* output `object`
  * cursor **required** `string`
  * users **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * groups **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * group **required** `object`
        * is_owner **required** `boolean`
        * member_count **required** `integer`
        * same_team **required** `boolean`
        * is_member **required** `boolean`
        * group_management_type **required** `object`
          * .tag **required** `string`
        * group_name **required** `string`
        * group_id **required** `string`
        * group_type **required** `object`
          * .tag **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * invitees **required** `array`
    * items `object`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`
      * is_inherited **required** `boolean`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`

### sharing.add_file_member.post
Adds specified members to a file.


```js
dropbox_data.sharing.add_file_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * file `string`: File to which to add members.
    * quiet `boolean`: Whether added members should be notified via device notifications of their invitation. The default for this field is False.
    * access_level `string`: AccessLevel union object, describing what access level we want to give new members. The default for this union is viewer. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments.
    * add_message_as_comment deprecated `boolean`: Field is deprecated. If the custom message should be added as a comment on the file. The default for this field is False.
    * members `string`: Members to add. Note that even an email address is given, this may result in a user being directy added to the membership if that email is the user's main account email. Dropbox account, team member, or group ID of member. E-mail address of member.
    * custom_message `string`: Message to send to added members in their invitation. This field is optional.

#### Output
*Output schema unknown*

### team.groups.job_status.get.post
Once an async_job_id is returned from groups/delete , groups/members/add , or groups/members/remove use this method to poll the status of granting/revoking group members' access to group-owned resources. Permission : Team member management.


```js
dropbox_data.team.groups.job_status.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### sharing.list_folders.continue.post
Once a cursor has been retrieved from list_folders , use this to paginate through all shared folders. The cursor must come from a previous call to list_folders or list_folders/continue .


```js
dropbox_data.sharing.list_folders.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by the previous API call specified in the endpoint description.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * access_inheritance **required** `object`
        * .tag **required** `string`
      * shared_folder_id **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * is_inside_team_folder **required** `boolean`
      * permissions **required** `array`
      * is_team_folder **required** `boolean`
      * link_metadata **required** `object`
        * url **required** `string`
        * link_permissions **required** `array`
          * items `object`
            * action **required** `object`
              * .tag **required** `string`
            * allow **required** `boolean`
        * password_protected **required** `boolean`
        * current_audience **required** `object`
          * .tag **required** `string`
        * audience_options **required** `array`
          * items `object`
            * .tag **required** `string`

### files.list_folder.get_latest_cursor.post
A way to quickly get a cursor for the folder's state. Unlike list_folder , list_folder/get_latest_cursor doesn't return any entries. This endpoint is for app which only needs to know about new files and modifications and doesn't need to know about files that already exist in Dropbox.


```js
dropbox_data.files.list_folder.get_latest_cursor.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_link `string`: A shared link to list the contents of. If the link is password-protected, the password must be provided. If this field is present, ListFolderArg.path will be relative to root of the shared link. Only non-recursive mode is supported for shared link. This field is optional. Shared link url. Password for the shared link. This field is optional.
    * include_property_groups `string`: If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates. This field is optional. Only templates with an ID in the supplied list will be returned (a subset of templates will be returned).
    * recursive `boolean`: If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.
    * include_has_explicit_shared_members `boolean`: If true, the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.
    * include_deleted `boolean`: If true, the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.
    * limit `integer`: The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. This field is optional.
    * include_media_info `boolean`: If true, FileMetadata.media_info is set for photo and video. The default for this field is False.
    * include_mounted_folders `boolean`: If true, the results will include entries under mounted folders which includes app folder, shared folder and team folder. The default for this field is True.
    * path `string`: A unique identifier for the file.

#### Output
* output `object`
  * cursor **required** `string`

### sharing.unshare_file.post
Remove all members from this file. Does not remove inherited members.


```js
dropbox_data.sharing.unshare_file.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * file `string`: The file to unshare.

#### Output
*Output schema unknown*

### files.list_folder.longpoll.post
A longpoll endpoint to wait for changes on an account. In conjunction with list_folder/continue , this call gives you a low-latency way to monitor an account for file changes. The connection will block until there are changes available or a timeout occurs. This endpoint is useful mostly for client-side apps. If you're looking for server-side notifications, check out our webhooks documentation .


```js
dropbox_data.files.list_folder.longpoll.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: A cursor as returned by or . Cursors retrieved by setting ListFolderArg.include_media_info to true are not supported.
    * timeout `integer`: A timeout in seconds. The request will block for at most this length of time, plus up to 90 seconds of random jitter added to avoid the thundering herd problem. Care should be taken when using this parameter, as some network infrastructure does not support long timeouts. The default for this field is 30.

#### Output
* output `object`
  * changes **required** `boolean`

### deprecated.change_file_member_access.post
Identical to update_file_member but with less information returned.


```js
dropbox_data.deprecated.change_file_member_access.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: The member whose access we are changing. Dropbox account, team member, or group ID of member. E-mail address of member.
    * access_level `string`: The new access level for the member. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments.
    * file `string`: File for which we are changing a member's access.

#### Output
* output `object`
  * member **required** `object`
    * .tag **required** `string`
    * email **required** `string`
  * result **required** `object`
    * .tag **required** `string`

### file_properties.templates.remove_for_user.post
Permanently removes the specified template created from templates/add_for_user . All properties associated with the template will also be removed. This action cannot be undone.


```js
dropbox_data.file_properties.templates.remove_for_user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_id `string`: An identifier for a template created by or .

#### Output
*Output schema unknown*

### team.devices.list_member_devices.post
List all device sessions of a team's member.


```js
dropbox_data.team.devices.list_member_devices.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_member_id `string`: The team's member id.
    * include_desktop_clients `boolean`: Whether to list linked desktop devices of the team's member. The default for this field is True.
    * include_web_sessions `boolean`: Whether to list web sessions of the team's member. The default for this field is True.
    * include_mobile_clients `boolean`: Whether to list linked mobile devices of the team's member. The default for this field is True.

#### Output
*Output schema unknown*

### files.delete_batch.post
Delete multiple files/folders at once. This route is asynchronous, which returns a job ID immediately and runs the delete batch asynchronously. Use delete_batch/check to check the job status.


```js
dropbox_data.files.delete_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * entries `string`: Path in the user's Dropbox to delete. Perform delete if given "rev" matches the existing file's latest "rev". This field does not support deleting a folder. This field is optional.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * .tag **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### team.reports.get_activity.post
Retrieves reporting data about a team's user activity.


```js
dropbox_data.team.reports.get_activity.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * start_date `string`: Optional starting date (inclusive). This field is optional.
    * end_date `string`: Optional ending date (exclusive). This field is optional.

#### Output
*Output schema unknown*

### team.member_space_limits.excluded_users.list.post
List member space limits excluded users.


```js
dropbox_data.team.member_space_limits.excluded_users.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Number of results to return per call. The default for this field is 1000.

#### Output
* output `object`
  * has_more **required** `boolean`
  * cursor **required** `string`
  * users **required** `array`

### file_properties.templates.add_for_user.post
Add a template associated with a user. See properties/add to add properties to a file. This endpoint can't be called on a team member or admin's behalf.


```js
dropbox_data.file_properties.templates.add_for_user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `string`: Definitions of the property fields associated with this template. There can be up to 32 properties in a single template. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * name `string`: Display name for the template. Template names can be up to 256 bytes.
    * description `string`: Description for the template. Template descriptions can be up to 1024 bytes.

#### Output
* output `object`
  * template_id **required** `string`

### files.upload_session.finish_batch.post
This route helps you commit many files at once into a user's Dropbox. Use upload_session/start and upload_session/append:2 to upload file contents. We recommend uploading many files in parallel to increase throughput. Once the file contents have been uploaded, rather than calling upload_session/finish , use this route to finish all your upload sessions in a single request. UploadSessionStartArg.close or UploadSessionAppendArg.close needs to be true for the last upload_session/start or upload_session/append:2 call. The maximum size of a file one can upload to an upload session is 350 GB. This route will return a job_id immediately and do the async commit job in background. Use upload_session/finish_batch/check to check the job status. For the same account, this route should be executed serially. That means you should not start the next job before current job finishes. We allow up to 1000 entries in a single request. Calls to this endpoint will count as data transport calls for any Dropbox Business teams with a limit on the number of data transport calls allowed per month. For more information, see the Data transport limit page .


```js
dropbox_data.files.upload_session.finish_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * entries `string`: Commit information for each file in the batch. Contains the upload session ID and the offset. The upload session ID (returned by ). The amount of data that has been uploaded so far. We use this to make sure upload data isn't lost or duplicated in the event of a network error. Contains the path and other optional modifiers for the commit. Path in the user's Dropbox to save the file. Selects what to do if the file already exists. The default for this union is add. Do not overwrite an existing file if there is a conflict. The autorename strategy is to append a number to the file name. For example, "document.txt" might become "document (2).txt". Always overwrite the existing file. The autorename strategy is the same as it is for add. Overwrite if the given "rev" matches the existing file's "rev". The autorename strategy is to append the string "conflicted copy" to the file name. For example, "document.txt" might become "document (conflicted copy).txt" or "document (Panda's conflicted copy).txt". If there's a conflict, as determined by mode, have the Dropbox server try to autorename the file to avoid conflict. The default for this field is False. The value to store as the client_modified timestamp. Dropbox automatically records the time at which the file was written to the Dropbox servers. It can also record an additional timestamp, provided by Dropbox desktop clients, mobile clients, and API apps of when the file was actually created or modified. This field is optional. Normally, users are made aware of any file modifications in their Dropbox account via notifications in the client software. If true, this tells the clients that this modification shouldn't result in a user notification. The default for this field is False. List of custom properties to add to file. This field is optional. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes. Be more strict about how each WriteMode detects conflict. For example, always return a conflict error when mode = WriteMode.update and the given "rev" doesn't match the existing file's "rev", even if the existing file has been deleted. The default for this field is False.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * client_modified **required** `string`
      * rev **required** `string`
      * .tag **required** `string`
      * path_display **required** `string`
      * has_explicit_shared_members **required** `boolean`
      * path_lower **required** `string`
      * server_modified **required** `string`
      * sharing_info **required** `object`
        * read_only **required** `boolean`
        * parent_shared_folder_id **required** `string`
        * modified_by **required** `string`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`
      * content_hash **required** `string`
      * id **required** `string`
      * size **required** `integer`

### team.member_space_limits.get_custom_quota.post
Get users custom quota. Returns none as the custom quota if none was set. A maximum of 1000 members can be specified in a single call.


```js
dropbox_data.team.member_space_limits.get_custom_quota.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * users `string`: List of users.

#### Output
*Output schema unknown*

### files.copy_reference.get.post
Get a copy reference to a file or folder. This reference string can be used to save that file or folder to another user's Dropbox by passing it to copy_reference/save .


```js
dropbox_data.files.copy_reference.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to the file or folder you want to get a copy reference to.

#### Output
* output `object`
  * expires **required** `string`
  * copy_reference **required** `string`
  * metadata **required** `object`
    * name **required** `string`
    * client_modified **required** `string`
    * rev **required** `string`
    * .tag **required** `string`
    * path_display **required** `string`
    * has_explicit_shared_members **required** `boolean`
    * path_lower **required** `string`
    * server_modified **required** `string`
    * sharing_info **required** `object`
      * read_only **required** `boolean`
      * parent_shared_folder_id **required** `string`
      * modified_by **required** `string`
    * property_groups **required** `array`
      * items `object`
        * fields **required** `array`
          * items `object`
            * name **required** `string`
            * value **required** `string`
        * template_id **required** `string`
    * content_hash **required** `string`
    * id **required** `string`
    * size **required** `integer`

### team.groups.members.list.post
Lists members of a group. Permission : Team Information.


```js
dropbox_data.team.groups.members.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Number of results to return per call. The default for this field is 1000.
    * group `string`: The group whose members are to be listed. Group ID. External ID of the group.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * members **required** `array`

### paper.docs.users.list.continue.post
Once a cursor has been retrieved from docs/users/list , use this to paginate through all users on the Paper doc.


```js
dropbox_data.paper.docs.users.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor obtained from or . Allows for pagination.
    * doc_id `string`: The Paper doc ID.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * doc_owner **required** `object`
    * team_member_id **required** `string`
    * same_team **required** `boolean`
    * display_name **required** `string`
    * email **required** `string`
    * account_id **required** `string`
  * users **required** `array`
    * items `object`
      * permission_level **required** `object`
        * .tag **required** `string`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
  * invitees **required** `array`
    * items `object`
      * permission_level **required** `object`
        * .tag **required** `string`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`

### sharing.list_file_members.continue.post
Once a cursor has been retrieved from list_file_members or list_file_members/batch , use this to paginate through all shared file members.


```js
dropbox_data.sharing.list_file_members.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by your last call to , , or .

#### Output
* output `object`
  * users **required** `array`
    * items `object`
      * access_type **required** `object`
        * .tag **required** `string`
      * platform_type **required** `object`
        * .tag **required** `string`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * time_last_seen **required** `string`
      * is_inherited **required** `boolean`
      * permissions **required** `array`
  * groups **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * group **required** `object`
        * is_owner **required** `boolean`
        * member_count **required** `integer`
        * same_team **required** `boolean`
        * is_member **required** `boolean`
        * group_management_type **required** `object`
          * .tag **required** `string`
        * group_name **required** `string`
        * group_id **required** `string`
        * group_type **required** `object`
          * .tag **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * invitees **required** `array`
    * items `object`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`
      * is_inherited **required** `boolean`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`

### deprecated.alpha.get_metadata.post
Returns the metadata for a file or folder. This is an alpha endpoint compatible with the properties API. Note: Metadata for the root folder is unsupported.


```js
dropbox_data.deprecated.alpha.get_metadata.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * include_property_templates deprecated `string`: Field is deprecated. If set to a valid list of template IDs, FileMetadata.property_groups is set for files with custom properties. This field is optional.
    * include_property_groups `string`: If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates. This field is optional. Only templates with an ID in the supplied list will be returned (a subset of templates will be returned).
    * include_has_explicit_shared_members `boolean`: If true, the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.
    * include_deleted `boolean`: If true, DeletedMetadata will be returned for deleted file or folder, otherwise LookupError.not_found will be returned. The default for this field is False.
    * include_media_info `boolean`: If true, FileMetadata.media_info is set for photo and video. The default for this field is False.
    * path `string`: The path of a file or folder on Dropbox.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### file_properties.properties.search.continue.post
Once a cursor has been retrieved from properties/search , use this to paginate through all search results.


```js
dropbox_data.file_properties.properties.search.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by your last call to or .

#### Output
* output `object`
  * matches **required** `array`
    * items `object`
      * path **required** `string`
      * is_deleted **required** `boolean`
      * id **required** `string`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`

### files.list_folder.post
Starts returning the contents of a folder. If the result's ListFolderResult.has_more field is true, call list_folder/continue with the returned ListFolderResult.cursor to retrieve more entries. If you're using ListFolderArg.recursive set to true to keep a local cache of the contents of a Dropbox account, iterate through each entry in order and process them as follows to keep your local state in sync: For each FileMetadata, store the new entry at the given path in your local state. If the required parent folders don't exist yet, create them. If there's already something else at the given path, replace it and remove all its children. For each FolderMetadata, store the new entry at the given path in your local state. If the required parent folders don't exist yet, create them. If there's already something else at the given path, replace it but leave the children as they are. Check the new entry's FolderSharingInfo.read_only and set all its children's read-only statuses to match. For each DeletedMetadata, if your local state has something at the given path, remove it and all its children. If there's nothing at the given path, ignore this entry. Note: auth.RateLimitError may be returned if multiple list_folder or list_folder/continue calls with same parameters are made simultaneously by same API app for same user. If your app implements retry logic, please hold off the retry until the previous request finishes.


```js
dropbox_data.files.list_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_link `string`: A shared link to list the contents of. If the link is password-protected, the password must be provided. If this field is present, ListFolderArg.path will be relative to root of the shared link. Only non-recursive mode is supported for shared link. This field is optional. Shared link url. Password for the shared link. This field is optional.
    * include_property_groups `string`: If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates. This field is optional. Only templates with an ID in the supplied list will be returned (a subset of templates will be returned).
    * recursive `boolean`: If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.
    * include_has_explicit_shared_members `boolean`: If true, the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.
    * include_deleted `boolean`: If true, the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.
    * limit `integer`: The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. This field is optional.
    * include_media_info `boolean`: If true, FileMetadata.media_info is set for photo and video. The default for this field is False.
    * include_mounted_folders `boolean`: If true, the results will include entries under mounted folders which includes app folder, shared folder and team folder. The default for this field is True.
    * path `string`: A unique identifier for the file.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * client_modified `string`
      * rev `string`
      * .tag **required** `string`
      * path_display **required** `string`
      * has_explicit_shared_members `boolean`
      * path_lower **required** `string`
      * server_modified `string`
      * sharing_info **required** `object`
        * read_only **required** `boolean`
        * parent_shared_folder_id **required** `string`
        * modified_by `string`
        * traverse_only `boolean`
        * no_access `boolean`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`
      * content_hash `string`
      * id **required** `string`
      * size `integer`

### team.get_info.post
Retrieves information about a team.


```js
dropbox_data.team.get_info.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * team_id **required** `string`
  * num_provisioned_users **required** `integer`
  * name **required** `string`
  * policies **required** `object`
    * sharing **required** `object`
      * shared_folder_join_policy **required** `object`
        * .tag **required** `string`
      * shared_folder_member_policy **required** `object`
        * .tag **required** `string`
      * shared_link_create_policy **required** `object`
        * .tag **required** `string`
    * emm_state **required** `object`
      * .tag **required** `string`
    * office_addin **required** `object`
      * .tag **required** `string`
  * num_licensed_users **required** `integer`

### files.move_batch.post
Move multiple files or folders to different locations at once in the user's Dropbox. This route will replace move_batch:2 . The main difference is this route will return stutus for each entry, while move_batch raises failure if any entry fails. This route will either finish synchronously, or return a job ID and do the async move job in background. Please use move_batch/check:2 to check the job status.


```js
dropbox_data.files.move_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * allow_ownership_transfer `boolean`: Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies. The default for this field is False.
    * autorename `boolean`: If there's a conflict with any file, have the Dropbox server try to autorename that file to avoid the conflict. The default for this field is False.
    * entries `string`: List of entries to be moved or copied. Each entry is RelocationPath. Path in the user's Dropbox to be copied or moved. Path in the user's Dropbox that is the destination.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### deprecated.properties.remove.post



```js
dropbox_data.deprecated.properties.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_template_ids `string`: A list of identifiers for a template created by or .

#### Output
*Output schema unknown*

### team.team_folder.activate.post
Sets an archived team folder's status to active. Permission : Team member file access.


```js
dropbox_data.team.team_folder.activate.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_id `string`: The ID of the team folder.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`

### files.list_folder.continue.post
Once a cursor has been retrieved from list_folder , use this to paginate through all files and retrieve updates to the folder, following the same rules as documented for list_folder .


```js
dropbox_data.files.list_folder.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by your last call to or .

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * client_modified `string`
      * rev `string`
      * .tag **required** `string`
      * path_display **required** `string`
      * has_explicit_shared_members `boolean`
      * path_lower **required** `string`
      * server_modified `string`
      * sharing_info **required** `object`
        * read_only **required** `boolean`
        * parent_shared_folder_id **required** `string`
        * modified_by `string`
        * traverse_only `boolean`
        * no_access `boolean`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`
      * content_hash `string`
      * id **required** `string`
      * size `integer`

### sharing.modify_shared_link_settings.post
Modify the shared link's settings. If the requested visibility conflict with the shared links policy of the team or the shared folder (in case the linked file is part of a shared folder) then the LinkPermissions.resolved_visibility of the returned SharedLinkMetadata will reflect the actual visibility of the shared link and the LinkPermissions.requested_visibility will reflect the requested visibility.


```js
dropbox_data.sharing.modify_shared_link_settings.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * url `string`: URL of the shared link to change its settings.
    * remove_expiration `boolean`: If set to true, removes the expiration of the shared link. The default for this field is False.
    * settings `string`: Set of settings for the shared link. The requested access for this shared link. This field is optional. Anyone who has received the link can access it. No login required. Only members of the same team can access the link. Login is required. A link-specific password is required to access the link. Login is not required. If requested_visibility is RequestedVisibility.password this is needed to specify the password to access the link. This field is optional. Expiration time of the shared link. By default the link won't expire. This field is optional.

#### Output
* output `object`
  * name **required** `string`
  * url **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * link_permissions **required** `object`
    * resolved_visibility **required** `object`
      * .tag **required** `string`
    * can_revoke **required** `boolean`
    * revoke_failure_reason **required** `object`
      * .tag **required** `string`
  * team_member_info **required** `object`
    * member_id **required** `string`
    * display_name **required** `string`
    * team_info **required** `object`
      * id **required** `string`
      * name **required** `string`
  * id **required** `string`
  * size **required** `integer`

### deprecated.devices.list_team_devices.post
List all device sessions of a team. Permission : Team member file access.


```js
dropbox_data.deprecated.devices.list_team_devices.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: At the first call to the the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of team devices. This field is optional.
    * include_desktop_clients `boolean`: Whether to list desktop clients of the team members. The default for this field is True.
    * include_web_sessions `boolean`: Whether to list web sessions of the team members. The default for this field is True.
    * include_mobile_clients `boolean`: Whether to list mobile clients of the team members. The default for this field is True.

#### Output
* output `object`
  * has_more **required** `boolean`
  * devices **required** `array`
    * items `object`
      * team_member_id **required** `string`

### team.members.set_profile.post
Updates a team member's profile. Permission : Team member management.


```js
dropbox_data.team.members.set_profile.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * new_email `string`: New email for member. This field is optional.
    * new_surname `string`: New surname for member. This field is optional.
    * new_persistent_id `string`: New persistent ID. This field only available to teams using persistent ID SAML configuration. This field is optional.
    * new_is_directory_restricted `boolean`: New value for whether the user is a directory restricted user. This field is optional.
    * user `string`: Identity of user whose profile will be set.
    * new_external_id `string`: New external ID for member. This field is optional.
    * new_given_name `string`: New given name for member. This field is optional.

#### Output
* output `object`
  * profile **required** `object`
    * status **required** `object`
      * .tag **required** `string`
    * membership_type **required** `object`
      * .tag **required** `string`
    * name **required** `object`
      * familiar_name **required** `string`
      * display_name **required** `string`
      * surname **required** `string`
      * given_name **required** `string`
      * abbreviated_name **required** `string`
    * email_verified **required** `boolean`
    * team_member_id **required** `string`
    * member_folder_id **required** `string`
    * groups **required** `array`
      * items `string`
    * joined_on **required** `string`
    * external_id **required** `string`
    * email **required** `string`
    * account_id **required** `string`
  * role **required** `object`
    * .tag **required** `string`

### file_properties.properties.add.post
Add property groups to a Dropbox file. See templates/add_for_user or templates/add_for_team to create new templates.


```js
dropbox_data.file_properties.properties.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_groups `string`: The property groups which are to be added to a Dropbox file. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes.

#### Output
*Output schema unknown*

### sharing.add_folder_member.post
Allows an owner or editor (if the ACL update policy allows) of a shared folder to add another member. For the new member to get access to all the functionality for this folder, you will need to call mount_folder on their behalf.


```js
dropbox_data.sharing.add_folder_member.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * quiet `boolean`: Whether added members should be notified via email and device notifications of their invite. The default for this field is False.
    * members `string`: The intended list of members to add. Added members will receive invites to join the shared folder. The member to add to the shared folder. Dropbox account, team member, or group ID of member. E-mail address of member. The access level to grant member to the shared folder. AccessLevel.owner is disallowed. The default for this union is viewer. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments.
    * custom_message `string`: Optional message to display to added members in their invitation. This field is optional.

#### Output
*Output schema unknown*

### team.members.set_admin_permissions.post
Updates a team member's permissions. Permission : Team member management.


```js
dropbox_data.team.members.set_admin_permissions.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * user `string`: Identity of user whose role will be set.
    * new_role `integer`: The new role of the member. User is an administrator of the team - has all permissions. User can do most user provisioning, de-provisioning and management. User can do a limited set of common support tasks for existing users. User is not an admin of the team.

#### Output
* output `object`
  * team_member_id **required** `string`
  * role **required** `object`
    * .tag **required** `string`

### deprecated.properties.add.post



```js
dropbox_data.deprecated.properties.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_groups `string`: The property groups which are to be added to a Dropbox file. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes.

#### Output
*Output schema unknown*

### sharing.list_shared_links.post
List shared links of this user. If no path is given, returns a list of all shared links for the current user. If a non-empty path is given, returns a list of all shared links that allow access to the given path - direct links to the given path and links to parent folders of the given path. Links to parent folders can be suppressed by setting direct_only to true.


```js
dropbox_data.sharing.list_shared_links.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by your last call to . This field is optional.
    * path `string`: See description. This field is optional.
    * direct_only `boolean`: See description. This field is optional.

#### Output
* output `object`
  * has_more **required** `boolean`
  * cursor **required** `string`
  * links **required** `array`
    * items `object`
      * name **required** `string`
      * url **required** `string`
      * client_modified **required** `string`
      * rev **required** `string`
      * .tag **required** `string`
      * path_lower **required** `string`
      * server_modified **required** `string`
      * link_permissions **required** `object`
        * resolved_visibility **required** `object`
          * .tag **required** `string`
        * can_revoke **required** `boolean`
        * revoke_failure_reason **required** `object`
          * .tag **required** `string`
      * team_member_info **required** `object`
        * member_id **required** `string`
        * display_name **required** `string`
        * team_info **required** `object`
          * id **required** `string`
          * name **required** `string`
      * id **required** `string`
      * size **required** `integer`

### team.devices.list_members_devices.post
List all device sessions of a team. Permission : Team member file access.


```js
dropbox_data.team.devices.list_members_devices.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: At the first call to the the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of team devices. This field is optional.
    * include_desktop_clients `boolean`: Whether to list desktop clients of the team members. The default for this field is True.
    * include_web_sessions `boolean`: Whether to list web sessions of the team members. The default for this field is True.
    * include_mobile_clients `boolean`: Whether to list mobile clients of the team members. The default for this field is True.

#### Output
*Output schema unknown*

### file_properties.templates.update_for_user.post
Update a template associated with a user. This route can update the template name, the template description and add optional properties to templates. This endpoint can't be called on a team member or admin's behalf.


```js
dropbox_data.file_properties.templates.update_for_user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * add_fields `string`: Property field templates to be added to the group template. There can be up to 32 properties in a single template. This field is optional. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * description `string`: Description for the new template. Template descriptions can be up to 1024 bytes. This field is optional.
    * template_id `string`: An identifier for template added by See or .
    * name `string`: A display name for the template. template names can be up to 256 bytes. This field is optional.

#### Output
* output `object`
  * template_id **required** `string`

### sharing.list_received_files.continue.post
Get more results with a cursor from list_received_files .


```js
dropbox_data.sharing.list_received_files.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Cursor in ListFilesResult.cursor.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * owner_team **required** `object`
        * id **required** `string`
        * name **required** `string`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * owner_display_names **required** `array`
        * items `string`
      * path_display **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * id **required** `string`
      * permissions **required** `array`

### team.team_folder.get_info.post
Retrieves metadata for team folders. Permission : Team member file access.


```js
dropbox_data.team.team_folder.get_info.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_ids `string`: The list of team folder IDs.

#### Output
*Output schema unknown*

### deprecated.create_shared_link.post
Create a shared link. If a shared link already exists for the given path, that link is returned. Note that in the returned PathLinkMetadata, the PathLinkMetadata.url field is the shortened URL if CreateSharedLinkArg.short_url argument is set to true. Previously, it was technically possible to break a shared link by moving or renaming the corresponding file or folder. In the future, this will no longer be the case, so your app shouldn't rely on this behavior. Instead, if your app needs to revoke a shared link, use revoke_shared_link .


```js
dropbox_data.deprecated.create_shared_link.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to share.
    * pending_upload `string`: If it's okay to share a path that does not yet exist, set this to either PendingUploadMode.file or PendingUploadMode.folder to indicate whether to assume it's a file or folder. This field is optional. Assume pending uploads are files. Assume pending uploads are folders.
    * short_url `boolean`: Whether to return a shortened URL. The default for this field is False.

#### Output
* output `object`
  * url **required** `string`
  * path **required** `string`
  * visibility **required** `object`
    * .tag **required** `string`

### file_properties.templates.add_for_team.post
Add a template associated with a team. See properties/add to add properties to a file or folder. Note: this endpoint will create team-owned templates.


```js
dropbox_data.file_properties.templates.add_for_team.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `string`: Definitions of the property fields associated with this template. There can be up to 32 properties in a single template. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * name `string`: Display name for the template. Template names can be up to 256 bytes.
    * description `string`: Description for the template. Template descriptions can be up to 1024 bytes.

#### Output
* output `object`
  * template_id **required** `string`

### paper.docs.permanently_delete.post
Permanently deletes the given Paper doc. This operation is final as the doc cannot be recovered. Note: This action can be performed only by the doc owner.


```js
dropbox_data.paper.docs.permanently_delete.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.

#### Output
*Output schema unknown*

### sharing.check_remove_member_job_status.post
Returns the status of an asynchronous job for sharing a folder.


```js
dropbox_data.sharing.check_remove_member_job_status.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### team.member_space_limits.remove_custom_quota.post
Remove users custom quota. A maximum of 1000 members can be specified in a single call.


```js
dropbox_data.team.member_space_limits.remove_custom_quota.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * users `string`: List of users.

#### Output
*Output schema unknown*

### team.members.remove.post
Removes a member from a team. Permission : Team member management Exactly one of team_member_id, email, or external_id must be provided to identify the user account. Accounts can be recovered via members/recover for a 7 day period or until the account has been permanently deleted or transferred to another account (whichever comes first). Calling members/add while a user is still recoverable on your team will return with MemberAddResult.user_already_on_team. Accounts can have their files transferred via the admin console for a limited time, based on the version history length associated with the team (120 days for most teams). This endpoint may initiate an asynchronous job. To obtain the final result of the job, the client should periodically poll members/remove/job_status/get .


```js
dropbox_data.team.members.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * transfer_dest_id `string`: If provided, files from the deleted member account will be transferred to this user. This field is optional.
    * transfer_admin_id `string`: If provided, errors during the transfer process will be sent via email to this user. If the transfer_dest_id argument was provided, then this argument must be provided as well. This field is optional.
    * keep_account `boolean`: Downgrade the member to a Basic account. The user will retain the email address associated with their Dropbox account and data in their account that is not restricted to team members. In order to keep the account the argument wipe_data should be set to False. The default for this field is False.
    * user `string`: Identity of user to remove/suspend/have their files moved.
    * wipe_data `boolean`: If provided, controls if the user's data will be deleted on their linked devices. The default for this field is True.

#### Output
* output `object`
  * .tag **required** `string`

### auth.token.revoke.post
Disables the access token used to authenticate the call.


```js
dropbox_data.auth.token.revoke.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### files.copy.post
Copy a file or folder to a different location in the user's Dropbox. If the source path is a folder all its contents will be copied.


```js
dropbox_data.files.copy.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * allow_ownership_transfer `boolean`: Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies. The default for this field is False.
    * from_path `string`: Path in the user's Dropbox to be copied or moved.
    * to_path `string`: Path in the user's Dropbox that is the destination.
    * autorename `boolean`: If there's a conflict, have the Dropbox server try to autorename the file to avoid the conflict. The default for this field is False.
    * allow_shared_folder `boolean`: If true, will copy contents in shared folder, otherwise RelocationError.cant_copy_shared_folder will be returned if from_path contains shared folder. This field is always true for . The default for this field is False.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### sharing.get_shared_link_metadata.post
Get the shared link's metadata.


```js
dropbox_data.sharing.get_shared_link_metadata.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * url `string`: URL of the shared link.
    * path `string`: If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used. This field is optional.
    * link_password `string`: If the shared link has a password, this parameter can be used. This field is optional.

#### Output
* output `object`
  * name **required** `string`
  * url **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * link_permissions **required** `object`
    * resolved_visibility **required** `object`
      * .tag **required** `string`
    * can_revoke **required** `boolean`
    * revoke_failure_reason **required** `object`
      * .tag **required** `string`
  * team_member_info **required** `object`
    * member_id **required** `string`
    * display_name **required** `string`
    * team_info **required** `object`
      * id **required** `string`
      * name **required** `string`
  * id **required** `string`
  * size **required** `integer`

### file_properties.properties.overwrite.post
Overwrite property groups associated with a file. This endpoint should be used instead of properties/update when property groups are being updated via a "snapshot" instead of via a "delta". In other words, this endpoint will delete all omitted fields from a property group, whereas properties/update will only delete fields that are explicitly marked for deletion.


```js
dropbox_data.file_properties.properties.overwrite.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_groups `string`: The property groups "snapshot" updates to force apply. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes.

#### Output
*Output schema unknown*

### deprecated.get_shared_links.post
Returns a list of LinkMetadata objects for this user, including collection links. If no path is given, returns a list of all shared links for the current user, including collection links, up to a maximum of 1000 links. If a non-empty path is given, returns a list of all shared links that allow access to the given path. Collection links are never returned in this case. Note that the url field in the response is never the shortened URL.


```js
dropbox_data.deprecated.get_shared_links.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: See description. This field is optional.

#### Output
* output `object`
  * links **required** `array`
    * items `object`
      * url **required** `string`
      * path **required** `string`
      * .tag **required** `string`
      * visibility **required** `object`
        * .tag **required** `string`

### oauth2.token.post
This endpoint only applies to apps using the authorization code flow . An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/token need to be authenticated using the apps's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication . If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.


```js
dropbox_data.oauth2.token.post({}, context)
```

#### Input
* input `object`
  * code `string`: The code acquired by directing users to .
  * grant_type `string`: The grant type, which must be .
  * client_id `string`: If credentials are passed in parameters, this parameter should be present and should be the app's key (found in the ).
  * client_secret `string`: If credentials are passed in parameters, this parameter should be present and should be the app's secret.
  * redirect_uri `string`: Only used to validate that it matches the original , not used to redirect again.

#### Output
* output `object`
  * access_token **required** `string`
  * token_type **required** `string`
  * account_id **required** `string`
  * uid **required** `string`

### files.permanently_delete.post
Permanently delete the file or folder at a given path (see https://www.dropbox.com/en/help/40). Note: This endpoint is only available for Dropbox Business apps.


```js
dropbox_data.files.permanently_delete.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: Path in the user's Dropbox to delete.
    * parent_rev `string`: Perform delete if given "rev" matches the existing file's latest "rev". This field does not support deleting a folder. This field is optional.

#### Output
*Output schema unknown*

### contacts.delete_manual_contacts_batch.post
Removes manually added contacts from the given list.


```js
dropbox_data.contacts.delete_manual_contacts_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * email_addresses `string`: List of manually added contacts to be deleted.

#### Output
*Output schema unknown*

### team.members.move_former_member_files.post
Moves removed member's files to a different member. This endpoint initiates an asynchronous job. To obtain the final result of the job, the client should periodically poll members/move_former_member_files/job_status/check . Permission : Team member management.


```js
dropbox_data.team.members.move_former_member_files.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * transfer_dest_id `string`: Files from the deleted member account will be transferred to this user.
    * transfer_admin_id `string`: Errors during the transfer process will be sent via email to this user.
    * user `string`: Identity of user to remove/suspend/have their files moved.

#### Output
* output `object`
  * .tag **required** `string`

### sharing.list_mountable_folders.continue.post
Once a cursor has been retrieved from list_mountable_folders , use this to paginate through all mountable shared folders. The cursor must come from a previous call to list_mountable_folders or list_mountable_folders/continue .


```js
dropbox_data.sharing.list_mountable_folders.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor returned by the previous API call specified in the endpoint description.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * access_inheritance **required** `object`
        * .tag **required** `string`
      * shared_folder_id **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * is_inside_team_folder **required** `boolean`
      * permissions **required** `array`
      * is_team_folder **required** `boolean`
      * link_metadata **required** `object`
        * url **required** `string`
        * link_permissions **required** `array`
          * items `object`
            * action **required** `object`
              * .tag **required** `string`
            * allow **required** `boolean`
        * password_protected **required** `boolean`
        * current_audience **required** `object`
          * .tag **required** `string`
        * audience_options **required** `array`
          * items `object`
            * .tag **required** `string`

### file_properties.templates.get_for_team.post
Get the schema for a specified template.


```js
dropbox_data.file_properties.templates.get_for_team.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_id `string`: An identifier for template added by route See or .

#### Output
* output `object`
  * fields **required** `array`
    * items `object`
      * type **required** `object`
        * .tag **required** `string`
      * name **required** `string`
      * description **required** `string`
  * name **required** `string`
  * description **required** `string`

### team.linked_apps.list_members_linked_apps.post
List all applications linked to the team members' accounts. Note, this endpoint does not list any team-linked applications.


```js
dropbox_data.team.linked_apps.list_members_linked_apps.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: At the first call to the the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of the team applications. This field is optional.

#### Output
*Output schema unknown*

### sharing.relinquish_folder_membership.post
The current user relinquishes their membership in the designated shared folder and will no longer have access to the folder. A folder owner cannot relinquish membership in their own folder. This will run synchronously if leave_a_copy is false, and asynchronously if leave_a_copy is true.


```js
dropbox_data.sharing.relinquish_folder_membership.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * leave_a_copy `boolean`: Keep a copy of the folder's contents upon relinquishing membership. The default for this field is False.

#### Output
* output `object`
  * .tag **required** `string`

### files.get_metadata.post
Returns the metadata for a file or folder. Note: Metadata for the root folder is unsupported.


```js
dropbox_data.files.get_metadata.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path of a file or folder on Dropbox.
    * include_has_explicit_shared_members `boolean`: If true, the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.
    * include_property_groups `string`: If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates. This field is optional. Only templates with an ID in the supplied list will be returned (a subset of templates will be returned).
    * include_deleted `boolean`: If true, DeletedMetadata will be returned for deleted file or folder, otherwise LookupError.not_found will be returned. The default for this field is False.
    * include_media_info `boolean`: If true, FileMetadata.media_info is set for photo and video. The default for this field is False.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### team.members.list.continue.post
Once a cursor has been retrieved from members/list , use this to paginate through all team members. Permission : Team information.


```js
dropbox_data.team.members.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of members.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * members **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * member_folder_id **required** `string`
        * groups **required** `array`
          * items `string`
        * joined_on **required** `string`
        * external_id **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * role **required** `object`
        * .tag **required** `string`

### sharing.get_file_metadata.post
Returns shared file metadata.


```js
dropbox_data.sharing.get_file_metadata.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * actions `string`: A list of `FileAction`s corresponding to `FilePermission`s that should appear in the response's SharedFileMetadata.permissions field describing the actions the authenticated user can perform on the file. This field is optional. Disable viewer information on the file. Change or edit contents of the file. Enable viewer information on the file. Add a member with view permissions. Add a member with view permissions but no comment permissions. Add a member with edit permissions. Stop sharing this file. Relinquish one's own membership to the file. Field is deprecated. Use create_link instead. Create a shared link to the file.
    * file `string`: The file to query.

#### Output
* output `object`
  * owner_team **required** `object`
    * id **required** `string`
    * name **required** `string`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * owner_display_names **required** `array`
    * items `string`
  * path_display **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * id **required** `string`
  * permissions **required** `array`

### team.team_folder.update_sync_settings.post
Updates the sync settings on a team folder or its contents. Use of this endpoint requires that the team has team selective sync enabled.


```js
dropbox_data.team.team_folder.update_sync_settings.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_folder_id `string`: The ID of the team folder.
    * content_sync_settings `string`: Sync settings to apply to contents of this team folder. This field is optional. Id of the item this setting is applied to. Setting for this item. On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior. On first sync to members' computers, the specified folder will be set to not sync with selective sync.
    * sync_setting `string`: Sync setting to apply to the team folder itself. Only meaningful if the team folder is not a shared team root. This field is optional. On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior. On first sync to members' computers, the specified folder will be set to not sync with selective sync.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`

### team.groups.members.add.post
Adds members to a group. The members are added immediately. However the granting of group-owned resources may take additional time. Use the groups/job_status/get to determine whether this process has completed. Permission : Team member management.


```js
dropbox_data.team.groups.members.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * return_members `boolean`: Whether to return the list of members in the group. Note that the default value will cause all the group members to be returned in the response. This may take a long time for large groups. The default for this field is True.
    * group `string`: Group to which users will be added. Group ID. External ID of the group.
    * members `string`: List of users to be added to the group. Identity of a user. Access type. User is a member of the group, but has no special permissions. User can rename the group, and add/remove members.

#### Output
* output `object`
  * group_info **required** `object`
    * member_count **required** `integer`
    * created **required** `integer`
    * group_management_type **required** `object`
      * .tag **required** `string`
    * group_name **required** `string`
    * members **required** `array`
      * items `object`
        * profile **required** `object`
          * status **required** `object`
            * .tag **required** `string`
          * membership_type **required** `object`
            * .tag **required** `string`
          * name **required** `object`
            * familiar_name **required** `string`
            * display_name **required** `string`
            * surname **required** `string`
            * given_name **required** `string`
            * abbreviated_name **required** `string`
          * email_verified **required** `boolean`
          * team_member_id **required** `string`
          * joined_on **required** `string`
          * email **required** `string`
          * account_id **required** `string`
        * access_type **required** `object`
          * .tag **required** `string`
    * group_id **required** `string`
  * async_job_id **required** `string`

### file_properties.templates.list_for_team.post
Get the template identifiers for a team. To get the schema of each template use templates/get_for_team .


```js
dropbox_data.file_properties.templates.list_for_team.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * template_ids **required** `array`
    * items `string`

### team.members.remove.job_status.get.post
Once an async_job_id is returned from members/remove , use this to poll the status of the asynchronous request. Permission : Team member management.


```js
dropbox_data.team.members.remove.job_status.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### file_properties.properties.remove.post
Permanently removes the specified property group from the file. To remove specific property field key value pairs, see properties/update . To update a template, see templates/update_for_user or templates/update_for_team . To remove a template, see templates/remove_for_user or templates/remove_for_team .


```js
dropbox_data.file_properties.properties.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_template_ids `string`: A list of identifiers for a template created by or .

#### Output
*Output schema unknown*

### files.create_folder.post
Create a folder at a given path.


```js
dropbox_data.files.create_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: Path in the user's Dropbox to create.
    * autorename `boolean`: If there's a conflict, have the Dropbox server try to autorename the folder to avoid the conflict. The default for this field is False.

#### Output
* output `object`
  * name **required** `string`
  * path_display **required** `string`
  * path_lower **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * traverse_only **required** `boolean`
    * no_access **required** `boolean`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * id **required** `string`

### file_requests.list.post
Returns a list of file requests owned by this user. For apps with the app folder permission, this will only return file requests with destinations in the app folder.


```js
dropbox_data.file_requests.list.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * file_requests **required** `array`
    * items `object`
      * created **required** `string`
      * url **required** `string`
      * title **required** `string`
      * destination **required** `string`
      * file_count **required** `integer`
      * is_open **required** `boolean`
      * id **required** `string`
      * deadline `object`
        * deadline **required** `string`
        * allow_late_uploads `object`
          * .tag **required** `string`

### paper.docs.archive.post
Marks the given Paper doc as archived. Note: This action can be performed or undone by anyone with edit permissions to the doc.


```js
dropbox_data.paper.docs.archive.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * doc_id `string`: The Paper doc ID.

#### Output
*Output schema unknown*

### users.get_account_batch.post
Get information about multiple user accounts. At most 300 accounts may be queried per request.


```js
dropbox_data.users.get_account_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * account_ids `string`: List of user account identifiers. Should not contain any duplicate account IDs.

#### Output
*Output schema unknown*

### team.members.move_former_member_files.job_status.check.post
Once an async_job_id is returned from members/move_former_member_files , use this to poll the status of the asynchronous request. Permission : Team member management.


```js
dropbox_data.team.members.move_former_member_files.job_status.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### contacts.delete_manual_contacts.post
Removes all manually added contacts. You'll still keep contacts who are on your team or who you imported. New contacts will be added when you share.


```js
dropbox_data.contacts.delete_manual_contacts.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### team_log.get_events.post
Retrieves team events. Events have a lifespan of two years. Events older than two years will not be returned. Many attributes note 'may be missing due to historical data gap'. Note that the file_operations category and & analogous paper events are not available on all Dropbox Business plans . Use features/get_values to check for this feature. Permission : Team Auditing.


```js
dropbox_data.team_log.get_events.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * category `string`: Filter the returned events to a single category. This field is optional. Events that apply to management of linked apps. Events that have to do with comments on files and Paper documents. Events that apply to linked devices on mobile, desktop and Web platforms. Events that involve domain management feature: domain verification, invite enforcement and account capture. Events that have to do with filesystem operations on files and folders: copy, move, delete, etc. Events that apply to the file requests feature. Events that involve group management. Events that involve users signing in to or out of Dropbox. Events that involve team member management. Events that apply to Dropbox Paper. Events that involve using, changing or resetting passwords. Events that concern generation of admin reports, including team activity and device usage. Events that apply to all types of sharing and collaboration. Events that apply to Dropbox Showcase. Events that involve using or configuring single sign-on as well as administrative policies concerning single sign-on. Events that involve team folder management. Events that involve a change in team-wide policies. Events that involve a change in the team profile. Events that involve using or configuring two factor authentication as well as administrative policies concerning two factor authentication. Events that apply to cross teams trust establishment.
    * limit `integer`: The maximal number of results to return per call. Note that some calls may not return limit number of events, and may even return no events, even with `has_more` set to true. In this case, callers should fetch again using . The default for this field is 1000.
    * account_id `string`: Filter the events by account ID. Return ony events with this account_id as either Actor, Context, or Participants. This field is optional.
    * time `string`: Filter by time range. This field is optional. Optional starting time (inclusive). This field is optional. Optional ending time (exclusive). This field is optional.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * events **required** `array`
    * items `object`
      * origin **required** `object`
        * geo_location **required** `object`
          * city **required** `string`
          * region **required** `string`
          * ip_address **required** `string`
          * country **required** `string`
        * access_method **required** `object`
          * .tag **required** `string`
          * end_user **required** `object`
            * .tag **required** `string`
            * session_id **required** `string`
      * event_type **required** `object`
        * .tag **required** `string`
        * description **required** `string`
      * timestamp **required** `string`
      * actor **required** `object`
        * .tag **required** `string`
        * user **required** `object`
          * display_name **required** `string`
          * account_id **required** `string`
          * team_member_id **required** `string`
          * .tag **required** `string`
          * member_external_id **required** `string`
          * email **required** `string`
      * participants **required** `array`
        * items `object`
          * .tag **required** `string`
          * user **required** `object`
            * display_name **required** `string`
            * account_id **required** `string`
            * team_member_id **required** `string`
            * .tag **required** `string`
            * member_external_id **required** `string`
            * email **required** `string`
      * event_category **required** `object`
        * .tag **required** `string`
      * context **required** `object`
        * display_name **required** `string`
        * account_id **required** `string`
        * team_member_id **required** `string`
        * .tag **required** `string`
        * member_external_id **required** `string`
        * email **required** `string`
      * details **required** `object`
        * shared_content_owner **required** `object`
          * display_name **required** `string`
          * account_id **required** `string`
          * team_member_id **required** `string`
          * .tag **required** `string`
          * member_external_id **required** `string`
          * email **required** `string`
        * .tag **required** `string`
        * shared_content_link **required** `string`
        * shared_content_access_level **required** `object`
          * .tag **required** `string`
      * assets **required** `array`
        * items `object`
          * path **required** `object`
            * namespace_relative **required** `object`
              * ns_id **required** `string`
              * relative_path **required** `string`
            * contextual **required** `string`
          * .tag **required** `string`
          * display_name **required** `string`
          * file_id **required** `string`
      * involve_non_team_member **required** `boolean`

### sharing.list_file_members.post
Use to obtain the members who have been invited to a file, both inherited and uninherited members.


```js
dropbox_data.sharing.list_file_members.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * include_inherited `boolean`: Whether to include members who only have access from a parent shared folder. The default for this field is True.
    * limit `integer`: Number of members to return max per query. Defaults to 100 if no limit is specified. The default for this field is 100.
    * actions `string`: The actions for which to return permissions on a member. This field is optional. Allow the member to keep a copy of the folder when removing. Make the member an editor of the folder. Make the member an owner of the folder. Make the member a viewer of the folder. Make the member a viewer of the folder without commenting permissions. Remove the member from the folder.
    * file `string`: The file for which you want to see members.

#### Output
* output `object`
  * users **required** `array`
    * items `object`
      * access_type **required** `object`
        * .tag **required** `string`
      * platform_type **required** `object`
        * .tag **required** `string`
      * user **required** `object`
        * team_member_id **required** `string`
        * same_team **required** `boolean`
        * display_name **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * time_last_seen **required** `string`
      * is_inherited **required** `boolean`
      * permissions **required** `array`
  * groups **required** `array`
    * items `object`
      * is_inherited **required** `boolean`
      * group **required** `object`
        * is_owner **required** `boolean`
        * member_count **required** `integer`
        * same_team **required** `boolean`
        * is_member **required** `boolean`
        * group_management_type **required** `object`
          * .tag **required** `string`
        * group_name **required** `string`
        * group_id **required** `string`
        * group_type **required** `object`
          * .tag **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`
  * invitees **required** `array`
    * items `object`
      * invitee **required** `object`
        * .tag **required** `string`
        * email **required** `string`
      * is_inherited **required** `boolean`
      * access_type **required** `object`
        * .tag **required** `string`
      * permissions **required** `array`

### deprecated.properties.template.add.post
Permission : Team member file access.


```js
dropbox_data.deprecated.properties.template.add.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `string`: Definitions of the property fields associated with this template. There can be up to 32 properties in a single template. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * name `string`: Display name for the template. Template names can be up to 256 bytes.
    * description `string`: Description for the template. Template descriptions can be up to 1024 bytes.

#### Output
* output `object`
  * template_id **required** `string`

### team.reports.get_membership.post
Retrieves reporting data about a team's membership.


```js
dropbox_data.team.reports.get_membership.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * start_date `string`: Optional starting date (inclusive). This field is optional.
    * end_date `string`: Optional ending date (exclusive). This field is optional.

#### Output
*Output schema unknown*

### file_properties.templates.update_for_team.post
Update a template associated with a team. This route can update the template name, the template description and add optional properties to templates.


```js
dropbox_data.file_properties.templates.update_for_team.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * add_fields `string`: Property field templates to be added to the group template. There can be up to 32 properties in a single template. This field is optional. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * description `string`: Description for the new template. Template descriptions can be up to 1024 bytes. This field is optional.
    * template_id `string`: An identifier for template added by See or .
    * name `string`: A display name for the template. template names can be up to 256 bytes. This field is optional.

#### Output
* output `object`
  * template_id **required** `string`

### team.member_space_limits.excluded_users.list.continue.post
Continue listing member space limits excluded users.


```js
dropbox_data.team.member_space_limits.excluded_users.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of users.

#### Output
* output `object`
  * has_more **required** `boolean`
  * cursor **required** `string`
  * users **required** `array`

### files.save_url.post
Save the data from a specified URL into a file in user's Dropbox. Note that the transfer from the URL must complete within 5 minutes, or the operation will time out and the job will fail. If the given path already exists, the file will be renamed to avoid the conflict (e.g. myfile (1).txt).


```js
dropbox_data.files.save_url.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * url `string`: The URL to be saved.
    * path `string`: The path in Dropbox where the URL will be saved to.

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### auth.token.from_oauth1.post
Creates an OAuth 2.0 access token from the supplied OAuth 1.0 access token.


```js
dropbox_data.auth.token.from_oauth1.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * oauth1_token `string`: The supplied OAuth 1.0 access token.
    * oauth1_token_secret `string`: The token secret associated with the supplied access token.

#### Output
* output `object`
  * oauth2_token **required** `string`

### deprecated.properties.template.update.post
Permission : Team member file access.


```js
dropbox_data.deprecated.properties.template.update.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * add_fields `string`: Property field templates to be added to the group template. There can be up to 32 properties in a single template. This field is optional. Key of the property field being described. Property field keys can be up to 256 bytes. Description of the property field. Property field descriptions can be up to 1024 bytes. Data type of the value of this property field. This type will be enforced upon property creation and modifications. The associated property field will be of type string. Unicode is supported.
    * description `string`: Description for the new template. Template descriptions can be up to 1024 bytes. This field is optional.
    * template_id `string`: An identifier for template added by See or .
    * name `string`: A display name for the template. template names can be up to 256 bytes. This field is optional.

#### Output
* output `object`
  * template_id **required** `string`

### team.team_folder.create.post
Creates a new, active, team folder with no members. Permission : Team member file access.


```js
dropbox_data.team.team_folder.create.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * sync_setting `string`: The sync setting to apply to this team folder. Only permitted if the team has team selective sync enabled. This field is optional. On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior. On first sync to members' computers, the specified folder will be set to not sync with selective sync.
    * name `string`: Name for the new team folder.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`

### team.team_folder.list.post
Lists all team folders. Permission : Team member file access.


```js
dropbox_data.team.team_folder.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: The maximum number of results to return per request. The default for this field is 1000.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * team_folders **required** `array`
    * items `object`
      * status **required** `object`
        * .tag **required** `string`
      * name **required** `string`
      * team_folder_id **required** `string`
      * is_team_shared_dropbox **required** `boolean`
      * content_sync_settings **required** `array`
        * items `object`
          * sync_setting **required** `object`
            * .tag **required** `string`
          * id **required** `string`
      * sync_setting **required** `object`
        * .tag **required** `string`

### team.groups.create.post
Creates a new, empty group, with a requested name. Permission : Team member management.


```js
dropbox_data.team.groups.create.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * group_external_id `string`: The creator of a team can associate an arbitrary external ID to the group. This field is optional.
    * group_management_type `string`: Whether the team can be managed by selected users, or only by team admins. This field is optional. A group which is managed by selected users. A group which is managed by team admins only. A group which is managed automatically by Dropbox.
    * group_name `string`: Group name.

#### Output
* output `object`
  * member_count **required** `integer`
  * created **required** `integer`
  * group_management_type **required** `object`
    * .tag **required** `string`
  * group_name **required** `string`
  * members **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * joined_on **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
  * group_id **required** `string`

### paper.docs.list.continue.post
Once a cursor has been retrieved from docs/list , use this to paginate through all Paper doc.


```js
dropbox_data.paper.docs.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor obtained from or . Allows for pagination.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * doc_ids **required** `array`
    * items `string`

### sharing.unshare_folder.post
Allows a shared folder owner to unshare the folder. You'll need to call check_job_status to determine if the action has completed successfully.


```js
dropbox_data.sharing.unshare_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * leave_a_copy `boolean`: If true, members of this shared folder will get a copy of this folder after it's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, will always retain their copy. The default for this field is False.

#### Output
* output `object`
  * .tag **required** `string`

### team.devices.revoke_device_session.post
Revoke a device session of a team's member.


```js
dropbox_data.team.devices.revoke_device_session.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * desktop_client `string`: Unlink a linked desktop device. The session id. The unique id of the member owning the device. Whether to delete all files of the account (this is possible only if supported by the desktop client and will be made the next time the client access the account). The default for this field is False.
    * web_session `string`: End an active session. The session id. The unique id of the member owning the device.
    * mobile_client `string`: Unlink a linked mobile device. The session id. The unique id of the member owning the device.

#### Output
*Output schema unknown*

### sharing.list_mountable_folders.post
Return the list of all shared folders the current user can mount or unmount.


```js
dropbox_data.sharing.list_mountable_folders.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: The maximum number of results to return per request. The default for this field is 1000.
    * actions `string`: A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. Change folder options, such as who can be invited to join the folder. Disable viewer information for this folder. Change or edit contents of the folder. Enable viewer information on the folder. Invite a user or group to join the folder with read and write permission. Invite a user or group to join the folder with read permission. Invite a user or group to join the folder with read permission but no comment permissions. Relinquish one's own membership in the folder. Unmount the folder. Stop sharing this folder. Keep a copy of the contents upon leaving or being kicked from the folder. Field is deprecated. Use create_link instead. Create a shared link for folder. Set whether the folder inherits permissions from its parent.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * access_inheritance **required** `object`
        * .tag **required** `string`
      * shared_folder_id **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * is_inside_team_folder **required** `boolean`
      * permissions **required** `array`
      * is_team_folder **required** `boolean`
      * link_metadata **required** `object`
        * url **required** `string`
        * link_permissions **required** `array`
          * items `object`
            * action **required** `object`
              * .tag **required** `string`
            * allow **required** `boolean`
        * password_protected **required** `boolean`
        * current_audience **required** `object`
          * .tag **required** `string`
        * audience_options **required** `array`
          * items `object`
            * .tag **required** `string`

### sharing.set_access_inheritance.post
Change the inheritance policy of an existing Shared Folder. Only permitted for shared folders in a shared team root. If a ShareFolderLaunch.async_job_id is returned, you'll need to call check_share_job_status until the action completes to get the metadata for the folder.


```js
dropbox_data.sharing.set_access_inheritance.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * access_inheritance `string`: The access inheritance settings for the folder. The default for this union is inherit. The shared folder inherits its members from the parent folder. The shared folder does not inherit its members from the parent folder.
    * shared_folder_id `string`: The ID for the shared folder.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * shared_folder_id **required** `string`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### sharing.update_folder_policy.post
Update the sharing policies for a shared folder. User must have AccessLevel.owner access to the shared folder to update its policies.


```js
dropbox_data.sharing.update_folder_policy.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * viewer_info_policy `string`: Who can enable/disable viewer info for this shared folder. This field is optional. Viewer information is available on this file. Viewer information is disabled on this file.
    * acl_update_policy `string`: Who can add and remove members of this shared folder. This field is optional. Only the owner can update the ACL. Any editor can update the ACL. This may be further restricted to editors on the same team.
    * actions `string`: A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. Change folder options, such as who can be invited to join the folder. Disable viewer information for this folder. Change or edit contents of the folder. Enable viewer information on the folder. Invite a user or group to join the folder with read and write permission. Invite a user or group to join the folder with read permission. Invite a user or group to join the folder with read permission but no comment permissions. Relinquish one's own membership in the folder. Unmount the folder. Stop sharing this folder. Keep a copy of the contents upon leaving or being kicked from the folder. Field is deprecated. Use create_link instead. Create a shared link for folder. Set whether the folder inherits permissions from its parent.
    * shared_folder_id `string`: The ID for the shared folder.
    * shared_link_policy `string`: The policy to apply to shared links created for content inside this shared folder. The current user must be on a team to set this policy to SharedLinkPolicy.members. This field is optional. Links can be shared with anyone. Links can be shared with anyone on the same team as the owner. Links can only be shared among members of the shared folder.
    * link_settings `string`: Settings on the link for this folder. This field is optional. The access level on the link for this file. Currently, it only accepts 'viewer' and 'viewer_no_comment'. This field is optional. The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using . The collaborator can both view and edit the shared folder. The collaborator can only view the shared folder. The collaborator can only view the shared folder and does not have any access to comments. The type of audience on the link for this file. This field is optional. Link is accessible by anyone. Link is accessible only by team members. The link can be used by no one. The link merely points the user to the content, and does not grant additional rights to the user. Members of the content who use this link can only access the content with their pre-existing access rights. Field is deprecated. Link is accessible only by members of the content. An expiry timestamp to set on a link. This field is optional. Remove the currently set expiry for the link. Set a new expiry or change an existing expiry. The password for the link. This field is optional. Remove the currently set password for the link. Set a new password or change an existing password.
    * member_policy `string`: Who can be a member of this shared folder. Only applicable if the current user is on a team. This field is optional. Only a teammate can become a member. Anyone can become a member.

#### Output
* output `object`
  * name **required** `string`
  * time_invited **required** `string`
  * preview_url **required** `string`
  * access_type **required** `object`
    * .tag **required** `string`
  * access_inheritance **required** `object`
    * .tag **required** `string`
  * shared_folder_id **required** `string`
  * path_lower **required** `string`
  * policy **required** `object`
    * resolved_member_policy **required** `object`
      * .tag **required** `string`
    * acl_update_policy **required** `object`
      * .tag **required** `string`
    * shared_link_policy **required** `object`
      * .tag **required** `string`
    * member_policy **required** `object`
      * .tag **required** `string`
  * is_inside_team_folder **required** `boolean`
  * permissions **required** `array`
  * is_team_folder **required** `boolean`
  * link_metadata **required** `object`
    * url **required** `string`
    * link_permissions **required** `array`
      * items `object`
        * action **required** `object`
          * .tag **required** `string`
        * allow **required** `boolean`
    * password_protected **required** `boolean`
    * current_audience **required** `object`
      * .tag **required** `string`
    * audience_options **required** `array`
      * items `object`
        * .tag **required** `string`

### team.linked_apps.list_member_linked_apps.post
List all linked applications of the team member. Note, this endpoint does not list any team-linked applications.


```js
dropbox_data.team.linked_apps.list_member_linked_apps.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * team_member_id `string`: The team member id.

#### Output
*Output schema unknown*

### sharing.remove_file_member_2.post
Removes a specified member from the file.


```js
dropbox_data.sharing.remove_file_member_2.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: Member to remove from this file. Note that even if an email is specified, it may result in the removal of a user (not an invitee) if the user's main account corresponds to that email address. Dropbox account, team member, or group ID of member. E-mail address of member.
    * file `string`: File from which to remove members.

#### Output
*Output schema unknown*

### deprecated.properties.update.post



```js
dropbox_data.deprecated.properties.update.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * update_property_groups `string`: The property groups "delta" updates to apply. A unique identifier for a property template. Property fields to update. If the property field already exists, it is updated. If the property field doesn't exist, the property group is added. This field is optional. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes. Property fields to remove (by name), provided they exist. This field is optional.

#### Output
*Output schema unknown*

### team.groups.list.continue.post
Once a cursor has been retrieved from groups/list , use this to paginate through all groups. Permission : Team Information.


```js
dropbox_data.team.groups.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of groups.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * groups **required** `array`
    * items `object`
      * group_id **required** `string`
      * group_management_type **required** `object`
        * .tag **required** `string`
      * member_count **required** `integer`
      * group_name **required** `string`

### deprecated.properties.overwrite.post



```js
dropbox_data.deprecated.properties.overwrite.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: A unique identifier for the file or folder.
    * property_groups `string`: The property groups "snapshot" updates to force apply. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes.

#### Output
*Output schema unknown*

### deprecated.properties.template.get.post



```js
dropbox_data.deprecated.properties.template.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_id `string`: An identifier for template added by route See or .

#### Output
* output `object`
  * fields **required** `array`
    * items `object`
      * type **required** `object`
        * .tag **required** `string`
      * name **required** `string`
      * description **required** `string`
  * name **required** `string`
  * description **required** `string`

### file_properties.templates.list_for_user.post
Get the template identifiers for a team. To get the schema of each template use templates/get_for_user . This endpoint can't be called on a team member or admin's behalf.


```js
dropbox_data.file_properties.templates.list_for_user.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * template_ids **required** `array`
    * items `string`

### files.create_folder_batch.post
Create multiple folders at once. This route is asynchronous for large batches, which returns a job ID immediately and runs the create folder batch asynchronously. Otherwise, creates the folders and returns the result synchronously for smaller inputs. You can force asynchronous behaviour by using the CreateFolderBatchArg.force_async flag. Use create_folder_batch/check to check the job status.


```js
dropbox_data.files.create_folder_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * paths `string`: List of paths to be created in the user's Dropbox. Duplicate path arguments in the batch are considered only once.
    * force_async `boolean`: Whether to force the create to happen asynchronously. The default for this field is False.
    * autorename `boolean`: If there's a conflict, have the Dropbox server try to autorename the folder to avoid the conflict. The default for this field is False.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * .tag **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * path_display **required** `string`
        * path_lower **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * traverse_only **required** `boolean`
          * no_access **required** `boolean`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * id **required** `string`

### users.get_account.post
Get information about a user's account.


```js
dropbox_data.users.get_account.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * account_id `string`: A user's account identifier.

#### Output
* output `object`
  * profile_photo_url **required** `string`
  * is_teammate **required** `boolean`
  * email_verified **required** `boolean`
  * account_id **required** `string`
  * disabled **required** `boolean`
  * email **required** `string`
  * name **required** `object`
    * familiar_name **required** `string`
    * display_name **required** `string`
    * surname **required** `string`
    * given_name **required** `string`
    * abbreviated_name **required** `string`

### team.member_space_limits.excluded_users.remove.post
Remove users from member space limits excluded users list.


```js
dropbox_data.team.member_space_limits.excluded_users.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * users `string`: List of users to be added/removed. This field is optional.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`

### team.team_folder.list.continue.post
Once a cursor has been retrieved from team_folder/list , use this to paginate through all team folders. Permission : Team member file access.


```js
dropbox_data.team.team_folder.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: Indicates from what point to get the next set of team folders.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * team_folders **required** `array`
    * items `object`
      * status **required** `object`
        * .tag **required** `string`
      * name **required** `string`
      * team_folder_id **required** `string`
      * is_team_shared_dropbox **required** `boolean`
      * content_sync_settings **required** `array`
        * items `object`
          * sync_setting **required** `object`
            * .tag **required** `string`
          * id **required** `string`
      * sync_setting **required** `object`
        * .tag **required** `string`

### team.members.add.job_status.get.post
Once an async_job_id is returned from members/add , use this to poll the status of the asynchronous request. Permission : Team member management.


```js
dropbox_data.team.members.add.job_status.get.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * complete **required** `array`
    * items `object`
      * profile **required** `object`
        * status **required** `object`
          * .tag **required** `string`
        * membership_type **required** `object`
          * .tag **required** `string`
        * name **required** `object`
          * familiar_name **required** `string`
          * display_name **required** `string`
          * surname **required** `string`
          * given_name **required** `string`
          * abbreviated_name **required** `string`
        * email_verified **required** `boolean`
        * team_member_id **required** `string`
        * member_folder_id **required** `string`
        * groups **required** `array`
          * items `string`
        * joined_on **required** `string`
        * external_id **required** `string`
        * email **required** `string`
        * account_id **required** `string`
      * .tag **required** `string`
      * role **required** `object`
        * .tag **required** `string`

### sharing.get_file_metadata.batch.post
Returns shared file metadata.


```js
dropbox_data.sharing.get_file_metadata.batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * files `string`: The files to query.
    * actions `string`: A list of `FileAction`s corresponding to `FilePermission`s that should appear in the response's SharedFileMetadata.permissions field describing the actions the authenticated user can perform on the file. This field is optional. Disable viewer information on the file. Change or edit contents of the file. Enable viewer information on the file. Add a member with view permissions. Add a member with view permissions but no comment permissions. Add a member with edit permissions. Stop sharing this file. Relinquish one's own membership to the file. Field is deprecated. Use create_link instead. Create a shared link to the file.

#### Output
*Output schema unknown*

### team.linked_apps.revoke_linked_app_batch.post
Revoke a list of linked applications of the team members.


```js
dropbox_data.team.linked_apps.revoke_linked_app_batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * revoke_linked_app `string`: The application's unique id. The unique id of the member owning the device. Whether to keep the application dedicated folder (in case the application uses one). The default for this field is True.

#### Output
*Output schema unknown*

### paper.docs.users.remove.post
Allows an owner or editor to remove users from a Paper doc using their email address or Dropbox account ID. Note: Doc owner cannot be removed.


```js
dropbox_data.paper.docs.users.remove.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * member `string`: User which should be removed from the Paper doc. Specify only email address or Dropbox account ID. Dropbox account, team member, or group ID of member. E-mail address of member.
    * doc_id `string`: The Paper doc ID.

#### Output
*Output schema unknown*

### files.get_temporary_upload_link.post
Get a one-time use temporary upload link to upload a file to a Dropbox location. This endpoint acts as a delayed upload . The returned temporary upload link may be used to make a POST request with the data to be uploaded. The upload will then be perfomed with the CommitInfo previously provided to get_temporary_upload_link but evaluated only upon consumption. Hence, errors stemming from invalid CommitInfo with respect to the state of the user's Dropbox will only be communicated at consumption time. Additionally, these errors are surfaced as generic HTTP 409 Conflict responses, potentially hiding issue details. The maximum temporary upload link duration is 4 hours. Upon consumption or expiration, a new link will have to be generated. Multiple links may exist for a specific upload path at any given time. The POST request on the temporary upload link must have its Content-Type set to "application/octet-stream". Example temporary upload link consumption request: curl -X POST https://dl.dropboxusercontent.com/apitul/1/bNi2uIYF51cVBND --header "Content-Type: application/octet-stream" --data-binary @local_file.txt A successful temporary upload link consumption request returns the content hash of the uploaded data in JSON format. Example succesful temporary upload link consumption response: {"content-hash": "599d71033d700ac892a0e48fa61b125d2f5994"} An unsuccessful temporary upload link consumption request returns any of the following status codes: HTTP 400 Bad Request: Content-Type is not one of application/octet-stream and text/plain or request is invalid. HTTP 409 Conflict: The temporary upload link does not exist or is currently unavailable, the upload failed, or another error happened. HTTP 410 Gone: The temporary upload link is expired or consumed. Example unsuccessful temporary upload link consumption response: Temporary upload link has been recently consumed.


```js
dropbox_data.files.get_temporary_upload_link.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * duration `integer`: How long before this link expires, in seconds. Attempting to start an upload with this link longer than this period of time after link creation will result in an error. The default for this field is 14400.0.
    * commit_info `string`: Contains the path and other optional modifiers for the future upload commit. Equivalent to the parameters provided to . Path in the user's Dropbox to save the file. Selects what to do if the file already exists. The default for this union is add. Do not overwrite an existing file if there is a conflict. The autorename strategy is to append a number to the file name. For example, "document.txt" might become "document (2).txt". Always overwrite the existing file. The autorename strategy is the same as it is for add. Overwrite if the given "rev" matches the existing file's "rev". The autorename strategy is to append the string "conflicted copy" to the file name. For example, "document.txt" might become "document (conflicted copy).txt" or "document (Panda's conflicted copy).txt". If there's a conflict, as determined by mode, have the Dropbox server try to autorename the file to avoid conflict. The default for this field is False. The value to store as the client_modified timestamp. Dropbox automatically records the time at which the file was written to the Dropbox servers. It can also record an additional timestamp, provided by Dropbox desktop clients, mobile clients, and API apps of when the file was actually created or modified. This field is optional. Normally, users are made aware of any file modifications in their Dropbox account via notifications in the client software. If true, this tells the clients that this modification shouldn't result in a user notification. The default for this field is False. List of custom properties to add to file. This field is optional. A unique identifier for the associated template. The actual properties associated with the template. There can be up to 32 property types per template. Key of the property field associated with a file and template. Keys can be up to 256 bytes. Value of the property field associated with a file and template. Values can be up to 1024 bytes. Be more strict about how each WriteMode detects conflict. For example, always return a conflict error when mode = WriteMode.update and the given "rev" doesn't match the existing file's "rev", even if the existing file has been deleted. The default for this field is False.

#### Output
* output `object`
  * link **required** `string`

### paper.docs.folder_users.list.post
Lists the users who are explicitly invited to the Paper folder in which the Paper doc is contained. For private folders all users (including owner) shared on the folder are listed and for team folders all non-team users shared on the folder are returned.


```js
dropbox_data.paper.docs.folder_users.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Size limit per batch. The maximum number of users that can be retrieved per batch is 1000. Higher value results in invalid arguments error. The default for this field is 1000.
    * doc_id `string`: The Paper doc ID.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * users **required** `array`
    * items `object`
      * team_member_id **required** `string`
      * same_team **required** `boolean`
      * display_name **required** `string`
      * email **required** `string`
      * account_id **required** `string`
  * invitees **required** `array`
    * items `object`
      * .tag **required** `string`
      * email **required** `string`

### team.members.unsuspend.post
Unsuspend a member from a team. Permission : Team member management Exactly one of team_member_id, email, or external_id must be provided to identify the user account.


```js
dropbox_data.team.members.unsuspend.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * user `string`: Identity of user to unsuspend.

#### Output
*Output schema unknown*

### team.groups.members.set_access_type.post
Sets a member's access type in a group. Permission : Team member management.


```js
dropbox_data.team.groups.members.set_access_type.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * return_members `boolean`: Whether to return the list of members in the group. Note that the default value will cause all the group members to be returned in the response. This may take a long time for large groups. The default for this field is True.
    * group `string`: Specify a group. Group ID. External ID of the group.
    * user `string`: Identity of a user that is a member of group.
    * access_type `string`: New group access type the user will have. User is a member of the group, but has no special permissions. User can rename the group, and add/remove members.

#### Output
*Output schema unknown*

### team.members.recover.post
Recover a deleted member. Permission : Team member management Exactly one of team_member_id, email, or external_id must be provided to identify the user account.


```js
dropbox_data.team.members.recover.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * user `string`: Identity of user to recover.

#### Output
*Output schema unknown*

### team.team_folder.archive.check.post
Returns the status of an asynchronous job for archiving a team folder. Permission : Team member file access.


```js
dropbox_data.team.team_folder.archive.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * status **required** `object`
    * .tag **required** `string`
  * name **required** `string`
  * team_folder_id **required** `string`
  * is_team_shared_dropbox **required** `boolean`
  * .tag **required** `string`
  * sync_setting **required** `object`
    * .tag **required** `string`
  * content_sync_settings **required** `array`
    * items `object`
      * sync_setting **required** `object`
        * .tag **required** `string`
      * id **required** `string`

### sharing.list_folders.post
Return the list of all shared folders the current user has access to.


```js
dropbox_data.sharing.list_folders.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: The maximum number of results to return per request. The default for this field is 1000.
    * actions `string`: A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. Change folder options, such as who can be invited to join the folder. Disable viewer information for this folder. Change or edit contents of the folder. Enable viewer information on the folder. Invite a user or group to join the folder with read and write permission. Invite a user or group to join the folder with read permission. Invite a user or group to join the folder with read permission but no comment permissions. Relinquish one's own membership in the folder. Unmount the folder. Stop sharing this folder. Keep a copy of the contents upon leaving or being kicked from the folder. Field is deprecated. Use create_link instead. Create a shared link for folder. Set whether the folder inherits permissions from its parent.

#### Output
* output `object`
  * cursor **required** `string`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * time_invited **required** `string`
      * preview_url **required** `string`
      * access_type **required** `object`
        * .tag **required** `string`
      * access_inheritance **required** `object`
        * .tag **required** `string`
      * shared_folder_id **required** `string`
      * path_lower **required** `string`
      * policy **required** `object`
        * resolved_member_policy **required** `object`
          * .tag **required** `string`
        * acl_update_policy **required** `object`
          * .tag **required** `string`
        * shared_link_policy **required** `object`
          * .tag **required** `string`
        * member_policy **required** `object`
          * .tag **required** `string`
      * is_inside_team_folder **required** `boolean`
      * permissions **required** `array`
      * is_team_folder **required** `boolean`
      * link_metadata **required** `object`
        * url **required** `string`
        * link_permissions **required** `array`
          * items `object`
            * action **required** `object`
              * .tag **required** `string`
            * allow **required** `boolean`
        * password_protected **required** `boolean`
        * current_audience **required** `object`
          * .tag **required** `string`
        * audience_options **required** `array`
          * items `object`
            * .tag **required** `string`

### paper.docs.folder_users.list.continue.post
Once a cursor has been retrieved from docs/folder_users/list , use this to paginate through all users on the Paper folder.


```js
dropbox_data.paper.docs.folder_users.list.continue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: The cursor obtained from or . Allows for pagination.
    * doc_id `string`: The Paper doc ID.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * users **required** `array`
    * items `object`
      * team_member_id **required** `string`
      * same_team **required** `boolean`
      * display_name **required** `string`
      * email **required** `string`
      * account_id **required** `string`
  * invitees **required** `array`
    * items `object`
      * .tag **required** `string`
      * email **required** `string`

### sharing.list_file_members.batch.post
Get members of multiple files at once. The arguments to this route are more limited, and the limit on query result size per file is more strict. To customize the results more, use the individual file endpoint. Inherited users and groups are not included in the result, and permissions are not returned for this endpoint.


```js
dropbox_data.sharing.list_file_members.batch.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * files `string`: Files for which to return members.
    * limit `integer`: Number of members to return max per query. Defaults to 10 if no limit is specified. The default for this field is 10.

#### Output
*Output schema unknown*

### files.get_temporary_link.post
Get a temporary link to stream content of a file. This link will expire in four hours and afterwards you will get 410 Gone. So this URL should not be used to display content directly in the browser. Content-Type of the link is determined automatically by the file's mime type.


```js
dropbox_data.files.get_temporary_link.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to the file you want a temporary link to.

#### Output
* output `object`
  * link **required** `string`
  * metadata **required** `object`
    * name **required** `string`
    * client_modified **required** `string`
    * rev **required** `string`
    * path_display **required** `string`
    * has_explicit_shared_members **required** `boolean`
    * path_lower **required** `string`
    * server_modified **required** `string`
    * sharing_info **required** `object`
      * read_only **required** `boolean`
      * parent_shared_folder_id **required** `string`
      * modified_by **required** `string`
    * property_groups **required** `array`
      * items `object`
        * fields **required** `array`
          * items `object`
            * name **required** `string`
            * value **required** `string`
        * template_id **required** `string`
    * content_hash **required** `string`
    * id **required** `string`
    * size **required** `integer`

### sharing.transfer_folder.post
Transfer ownership of a shared folder to a member of the shared folder. User must have AccessLevel.owner access to the shared folder to perform a transfer.


```js
dropbox_data.sharing.transfer_folder.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * shared_folder_id `string`: The ID for the shared folder.
    * to_dropbox_id `string`: A account or team member ID to transfer ownership to.

#### Output
*Output schema unknown*

### files.search.post
Searches for files and folders. Note: Recent changes may not immediately be reflected in search results due to a short delay in indexing.


```js
dropbox_data.files.search.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * mode `string`: The search mode (filename, filename_and_content, or deleted_filename). Note that searching file content is only available for Dropbox Business accounts. The default for this union is filename. Search file and folder names. Search file and folder names as well as file contents. Search for deleted file and folder names.
    * path `string`: The path in the user's Dropbox to search. Should probably be a folder.
    * max_results `integer`: The maximum number of search results to return. The default for this field is 100.
    * start `integer`: The starting index within the search results (used for paging). The default for this field is 0.
    * query `string`: The string to search for. The search string is split on spaces into multiple tokens. For file name searching, the last token is used for prefix matching (i.e. "bat c" matches "bat cave" but not "batman car").

#### Output
* output `object`
  * matches **required** `array`
    * items `object`
      * match_type **required** `object`
        * .tag **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`
  * start **required** `integer`
  * more **required** `boolean`

### team.reports.get_storage.post
Retrieves reporting data about a team's storage usage.


```js
dropbox_data.team.reports.get_storage.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * start_date `string`: Optional starting date (inclusive). This field is optional.
    * end_date `string`: Optional ending date (exclusive). This field is optional.

#### Output
*Output schema unknown*

### file_properties.templates.get_for_user.post
Get the schema for a specified template. This endpoint can't be called on a team member or admin's behalf.


```js
dropbox_data.file_properties.templates.get_for_user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * template_id `string`: An identifier for template added by route See or .

#### Output
* output `object`
  * fields **required** `array`
    * items `object`
      * type **required** `object`
        * .tag **required** `string`
      * name **required** `string`
      * description **required** `string`
  * name **required** `string`
  * description **required** `string`

### deprecated.linked_apps.list_team_linked_apps.post
List all applications linked to the team members' accounts. Note, this endpoint doesn't list any team-linked applications.


```js
dropbox_data.deprecated.linked_apps.list_team_linked_apps.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * cursor `string`: At the first call to the the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of the team applications. This field is optional.

#### Output
*Output schema unknown*

### files.list_revisions.post
Returns revisions for files based on a file path or a file id. The file path or file id is identified from the latest file entry at the given file path or id. This end point allows your app to query either by file path or file id by setting the mode parameter appropriately. In the ListRevisionsMode.path (default) mode, all revisions at the same file path as the latest file entry are returned. If revisions with the same file id are desired, then mode must be set to ListRevisionsMode.id. The ListRevisionsMode.id mode is useful to retrieve revisions for a given file across moves or renames.


```js
dropbox_data.files.list_revisions.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * path `string`: The path to the file you want to see the revisions of.
    * limit `integer`: The maximum number of revision entries returned. The default for this field is 10.
    * mode `string`: Determines the behavior of the API in listing the revisions for a given file path or id. The default for this union is path. Returns revisions with the same file path as identified by the latest file entry at the given file path or id. Returns revisions with the same file id as identified by the latest file entry at the given file path or id.

#### Output
* output `object`
  * is_deleted **required** `boolean`
  * entries **required** `array`
    * items `object`
      * name **required** `string`
      * client_modified **required** `string`
      * rev **required** `string`
      * path_display **required** `string`
      * has_explicit_shared_members **required** `boolean`
      * path_lower **required** `string`
      * server_modified **required** `string`
      * sharing_info **required** `object`
        * read_only **required** `boolean`
        * parent_shared_folder_id **required** `string`
        * modified_by **required** `string`
      * property_groups **required** `array`
        * items `object`
          * fields **required** `array`
            * items `object`
              * name **required** `string`
              * value **required** `string`
          * template_id **required** `string`
      * content_hash **required** `string`
      * id **required** `string`
      * size **required** `integer`

### paper.docs.list.post
Return the list of all Paper docs according to the argument specifications. To iterate over through the full pagination, pass the cursor to docs/list/continue .


```js
dropbox_data.paper.docs.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Size limit per batch. The maximum number of docs that can be retrieved per batch is 1000. Higher value results in invalid arguments error. The default for this field is 1000.
    * sort_by `string`: Allows user to specify how the Paper docs should be sorted. The default for this union is accessed. Sorts the Paper docs by the time they were last accessed. Sorts the Paper docs by the time they were last modified. Sorts the Paper docs by the creation time.
    * sort_order `string`: Allows user to specify the sort order of the result. The default for this union is ascending. Sorts the search result in ascending order. Sorts the search result in descending order.
    * filter_by `string`: Allows user to specify how the Paper docs should be filtered. The default for this union is docs_accessed. Fetches all Paper doc IDs that the user has ever accessed. Fetches only the Paper doc IDs that the user has created.

#### Output
* output `object`
  * cursor **required** `object`
    * expiration **required** `string`
    * value **required** `string`
  * has_more **required** `boolean`
  * doc_ids **required** `array`
    * items `string`

### team.member_space_limits.set_custom_quota.post
Set users custom quota. Custom quota has to be at least 15GB. A maximum of 1000 members can be specified in a single call.


```js
dropbox_data.team.member_space_limits.set_custom_quota.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * users_and_quotas `string`: List of users and their custom quotas.

#### Output
*Output schema unknown*

### team.groups.list.post
Lists groups on a team. Permission : Team Information.


```js
dropbox_data.team.groups.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * limit `integer`: Number of results to return per call. The default for this field is 1000.

#### Output
* output `object`
  * cursor **required** `string`
  * has_more **required** `boolean`
  * groups **required** `array`
    * items `object`
      * group_id **required** `string`
      * group_management_type **required** `object`
        * .tag **required** `string`
      * member_count **required** `integer`
      * group_name **required** `string`

### files.delete_batch.check.post
Returns the status of an asynchronous job for delete_batch . If success, it returns list of result for each entry.


```js
dropbox_data.files.delete_batch.check.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`
  * entries **required** `array`
    * items `object`
      * .tag **required** `string`
      * metadata **required** `object`
        * name **required** `string`
        * client_modified **required** `string`
        * rev **required** `string`
        * .tag **required** `string`
        * path_display **required** `string`
        * has_explicit_shared_members **required** `boolean`
        * path_lower **required** `string`
        * server_modified **required** `string`
        * sharing_info **required** `object`
          * read_only **required** `boolean`
          * parent_shared_folder_id **required** `string`
          * modified_by **required** `string`
        * property_groups **required** `array`
          * items `object`
            * fields **required** `array`
              * items `object`
                * name **required** `string`
                * value **required** `string`
            * template_id **required** `string`
        * content_hash **required** `string`
        * id **required** `string`
        * size **required** `integer`

### sharing.check_job_status.post
Returns the status of an asynchronous job.


```js
dropbox_data.sharing.check_job_status.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * async_job_id `string`: Id of the asynchronous job. This is the value of a response returned from the method that launched the job.

#### Output
* output `object`
  * .tag **required** `string`

### team.features.get_values.post
Get the values for one or more featues. This route allows you to check your account's capability for what feature you can access or what value you have for certain features. Permission : Team information.


```js
dropbox_data.team.features.get_values.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * features `string`: A list of features in Feature. If the list is empty, this route will return FeaturesGetValuesBatchError. The number of upload API calls allowed per month. Does this team have a shared team root. Does this team have file events. Does this team have team selective sync enabled.

#### Output
* output `object`
  * values **required** `array`
    * items `object`
      * has_team_shared_dropbox `object`
        * has_team_shared_dropbox **required** `boolean`
        * .tag **required** `string`
      * .tag **required** `string`
      * upload_api_rate_limit `object`
        * .tag **required** `string`
        * limit **required** `integer`



## Definitions

*This integration has no definitions*
