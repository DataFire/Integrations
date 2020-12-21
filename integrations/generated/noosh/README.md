# @datafire/noosh

Client library for Noosh API application

## Installation and Usage
```bash
npm install --save @datafire/noosh
```
```js
let noosh = require('@datafire/noosh').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Full description of Noosh API

## Actions

### 1.1.workgroups.workgroup_id.projects.project_id.teammembers.post
Invite a team member or all the members of team template for the specific project.


```js
noosh.1.1.workgroups.workgroup_id.projects.project_id.teammembers.post({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [TeamMemberPO](#teammemberpo)

#### Output
* output [V1x1InvitedTeamMemberResultsVO](#v1x1invitedteammemberresultsvo)

### getWorkgroupList
List the workgroups


```js
noosh.getWorkgroupList({}, context)
```

#### Input
* input `object`
  * workgroup_name `string`: Workgroup Name
  * workgroup_types `array`: 1000001 for Buyer, 1000002 for supplier, 1000003 for agent, 1000004 for Broker/Outsourcer and 1000005 for Partner

#### Output
* output [WorkgroupListVO](#workgrouplistvo)

### getAutomaticInvitationList
List current user's automatic invitations info 


```js
noosh.getAutomaticInvitationList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [AutomaticInvitationsListVO](#automaticinvitationslistvo)

### getBuyOrderListOfWorkgroup
List the buy orders of workgroup


```js
noosh.getBuyOrderListOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [OrderWorkgroupLevelListVO](#orderworkgrouplevellistvo)

### getBuyOrderOfWorkgroup
Get a specific buy order of workgroup


```js
noosh.getBuyOrderOfWorkgroup({
  "workgroup_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * order_id **required** `string`

#### Output
* output [OrderExpandWorkgroupLevelVO](#orderexpandworkgrouplevelvo)

### getClientWorkgroupList
List client workgroups


```js
noosh.getClientWorkgroupList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ClientWorkgroupListVO](#clientworkgrouplistvo)

### getProjectCategoryListOfClient
List the project categories of client side


```js
noosh.getProjectCategoryListOfClient({
  "workgroup_id": "",
  "client_workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * client_workgroup_id **required** `string`

#### Output
* output [ProjectCategoryListVO](#projectcategorylistvo)

### getProjectHomeUserFieldListOfClient
List projec home user fields of client workgroup


```js
noosh.getProjectHomeUserFieldListOfClient({
  "workgroup_id": "",
  "client_workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * client_workgroup_id **required** `string`

#### Output
* output [ProjectHomeUserFieldsListVO](#projecthomeuserfieldslistvo)

### getProjectStatusOfClient
List the project status of client


```js
noosh.getProjectStatusOfClient({
  "workgroup_id": "",
  "client_workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * client_workgroup_id **required** `string`

#### Output
* output [ProjectStatusListVO](#projectstatuslistvo)

### getContactList
List the contacts


```js
noosh.getContactList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ContactsListVO](#contactslistvo)

### getWgTaskStatusListOfWorkgroup
Get custom task status of workgroup level


```js
noosh.getWgTaskStatusListOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [WgTaskStatusListVO](#wgtaskstatuslistvo)

### getCustomTaskTypesOfWg
Get custom task types of workgroup level


```js
noosh.getCustomTaskTypesOfWg({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TaskTypeListVO](#tasktypelistvo)

### getDeactivationReasonList
List all deactivation resons


```js
noosh.getDeactivationReasonList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [DeactivationReasonListVO](#deactivationreasonlistvo)

### TaskPriorityList
Get default task priority list


```js
noosh.TaskPriorityList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TaskPriorityListVO](#taskprioritylistvo)

### getDefaultTaskStatusList
Get default task status list


```js
noosh.getDefaultTaskStatusList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TaskStatusListVO](#taskstatuslistvo)

### getMyTimeCardList
List my time cards


```js
noosh.getMyTimeCardList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TimeCardListVO](#timecardlistvo)

### getMyTimeCard
Get a specific my time cards


```js
noosh.getMyTimeCard({
  "workgroup_id": "",
  "timeCard_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * timeCard_id **required** `string`

#### Output
* output [TimeCardDetailVO](#timecarddetailvo)

### getProductTypeListOfWorkgroup
Get product type of workgroup level


```js
noosh.getProductTypeListOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [WorkgroupAttributeListVO](#workgroupattributelistvo)

### getProjectCategoryList
List the project categories


```js
noosh.getProjectCategoryList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ProjectCategoryListVO](#projectcategorylistvo)

### getProjectHomeUserFieldsList
List projec home user fields


```js
noosh.getProjectHomeUserFieldsList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ProjectHomeUserFieldsListVO](#projecthomeuserfieldslistvo)

### getProjectStatus
List the project status


```js
noosh.getProjectStatus({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ProjectStatusListVO](#projectstatuslistvo)

### getProjectList
List the projects


```js
noosh.getProjectList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [ProjectListVO](#projectlistvo)

### postProject
Create a Project


```js
noosh.postProject({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * body [ProjectPersistVO](#projectpersistvo)

#### Output
* output [ProjectVO](#projectvo)

### deleteProject
Archieve a specific Project


```js
noosh.deleteProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [HTTPStatusVO](#httpstatusvo)

### getProject
Get a specific Project


```js
noosh.getProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [ProjectExpandVO](#projectexpandvo)

### putProject
Update a specific Project


```js
noosh.putProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [ProjectPersistVO](#projectpersistvo)

#### Output
* output [HTTPStatusVO](#httpstatusvo)

### getBuyOrderList
List the buy orders


```js
noosh.getBuyOrderList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [OrderListVO](#orderlistvo)

### getBuyOrder
Get a specific buy order


```js
noosh.getBuyOrder({
  "workgroup_id": "",
  "project_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * order_id **required** `string`

#### Output
* output [OrderDetailVO](#orderdetailvo)

### getMemberRoles
List all the role options for the user


```js
noosh.getMemberRoles({
  "workgroup_id": "",
  "project_id": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * user_id **required** `string`

#### Output
* output [RoleListVO](#rolelistvo)

### getQuoteList
List the quotes


```js
noosh.getQuoteList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [QuoteListVO](#quotelistvo)

### getQuote
Get a specific quote of project


```js
noosh.getQuote({
  "workgroup_id": "",
  "project_id": "",
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * quote_id **required** `string`

#### Output
* output [QuoteExpandVO](#quoteexpandvo)

### putQuote
Accept / Reject a Quote


```js
noosh.putQuote({
  "workgroup_id": "",
  "project_id": "",
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * quote_id **required** `string`
  * body [QuotePutPersistVO](#quoteputpersistvo)

#### Output
* output [HTTPStatusVO](#httpstatusvo)

### getRfqList
List the rfqs


```js
noosh.getRfqList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [RfqListVO](#rfqlistvo)

### getRfq
Get a specific Rfq


```js
noosh.getRfq({
  "workgroup_id": "",
  "project_id": "",
  "rfq_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * rfq_id **required** `string`

#### Output
* output [RfqExpandVO](#rfqexpandvo)

### getSellOrderList
List the sell orders


```js
noosh.getSellOrderList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [OrderListVO](#orderlistvo)

### getSellOrder
Get a specific sell order


```js
noosh.getSellOrder({
  "workgroup_id": "",
  "project_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * order_id **required** `string`

#### Output
* output [OrderDetailVO](#orderdetailvo)

### putSellOrder
Accept or reject a specific sell change order


```js
noosh.putSellOrder({
  "workgroup_id": "",
  "project_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * order_id **required** `string`
  * body [OrderApprovalVO](#orderapprovalvo)

#### Output
* output [HTTPStatusVO](#httpstatusvo)

### getShipmentList
List shipments of project


```js
noosh.getShipmentList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [ShipmentListVO](#shipmentlistvo)

### postShipment
Create a shipment


```js
noosh.postShipment({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [ShipmentLocationPostPersistVO](#shipmentlocationpostpersistvo)

#### Output
* output [ShipmentLocationsPOSTResultVO](#shipmentlocationspostresultvo)

### getShipment
Get a specific shipment.


```js
noosh.getShipment({
  "workgroup_id": "",
  "project_id": "",
  "shipment_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * shipment_id **required** `string`

#### Output
* output [ShipmentExpandVO](#shipmentexpandvo)

### putShipmentLocation
Update a specific shipment location


```js
noosh.putShipmentLocation({
  "workgroup_id": "",
  "project_id": "",
  "shipment_id": "",
  "location_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * shipment_id **required** `string`
  * location_id **required** `string`
  * body [ShipmentLocationPersistVO](#shipmentlocationpersistvo)

#### Output
* output [HTTPStatusVO](#httpstatusvo)

### getSpecList
List specs of project Level


```js
noosh.getSpecList({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [SpecListVO](#speclistvo)

### postSpec
Create a Spec


```js
noosh.postSpec({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [SpecPersistVO](#specpersistvo)

#### Output
* output [SpecVO](#specvo)

### getSpec
List a specific spec of project Level


```js
noosh.getSpec({
  "workgroup_id": "",
  "project_id": "",
  "spec_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * spec_id **required** `string`

#### Output
* output [SpecListVO](#speclistvo)

### getTaskListOfProject
Get task list of project level


```js
noosh.getTaskListOfProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [TaskListVO](#tasklistvo)

### postTaskForProject
Create a new task


```js
noosh.postTaskForProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [TaskPersistVO](#taskpersistvo)

#### Output
* output [TaskCreatedVO](#taskcreatedvo)

### getTaskOfProject
Get a sepcific task of project level


```js
noosh.getTaskOfProject({
  "workgroup_id": "",
  "project_id": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * task_id **required** `string`

#### Output
* output [TaskExpandVO](#taskexpandvo)

### getTeamMemberListOfProject
List team member of project.


```js
noosh.getTeamMemberListOfProject({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`

#### Output
* output [TeamMemberListVO](#teammemberlistvo)

### v1.workgroups.workgroup_id.projects.project_id.teammembers.post
Deprecated, please use 1.1 Version


```js
noosh.v1.workgroups.workgroup_id.projects.project_id.teammembers.post({
  "workgroup_id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * body [ContactUserVO](#contactuservo)

#### Output
* output [TeamMemberBaseInfVO](#teammemberbaseinfvo)

### deleteTeamMemberOfProject
Delete a team member for the specific project.


```js
noosh.deleteTeamMemberOfProject({
  "workgroup_id": "",
  "project_id": "",
  "teammember_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * project_id **required** `string`
  * teammember_id **required** `string`

#### Output
* output [TeamMemberBaseInfVO](#teammemberbaseinfvo)

### getReceivedTimeCardList
List received time cards


```js
noosh.getReceivedTimeCardList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TimeCardListVO](#timecardlistvo)

### getReceivedTimeCard
List a specific received time cards


```js
noosh.getReceivedTimeCard({
  "workgroup_id": "",
  "timeCard_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * timeCard_id **required** `string`

#### Output
* output [TimeCardReceivedDetailVO](#timecardreceiveddetailvo)

### getSellOrderListOfWorkgroup
List the sell orders of workgrop


```js
noosh.getSellOrderListOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [OrderWorkgroupLevelListVO](#orderworkgrouplevellistvo)

### getSellOrderOfWorkgroup
Get a specific sell order


```js
noosh.getSellOrderOfWorkgroup({
  "workgroup_id": "",
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * order_id **required** `string`

#### Output
* output [OrderExpandWorkgroupLevelVO](#orderexpandworkgrouplevelvo)

### getSpecTemplateList
List Spec Templates of Workgroup Level 


```js
noosh.getSpecTemplateList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [SpecTemplateListVO](#spectemplatelistvo)

### getSpecTemplate
Get a specific Spec Template


```js
noosh.getSpecTemplate({
  "workgroup_id": "",
  "spec_template_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * spec_template_id **required** `string`

#### Output
* output [SpecTemplateExpandVO](#spectemplateexpandvo)

### getSpecTypeFields
Get Spec Type Fields


```js
noosh.getSpecTypeFields({
  "workgroup_id": "",
  "spec_type_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * spec_type_id **required** `string`

#### Output
* output [PropertyParamListVO](#propertyparamlistvo)

### getTaskTypesOfWorkgroup
Get task types of workgroup level


```js
noosh.getTaskTypesOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TaskTypeListVO](#tasktypelistvo)

### getTaskListOfWorkgroup
Get task list of workgroup level


```js
noosh.getTaskListOfWorkgroup({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TaskWorkgroupLevelListVO](#taskworkgrouplevellistvo)

### getTaskOfWorkgroup
Get a sepcific task of workgroup level


```js
noosh.getTaskOfWorkgroup({
  "workgroup_id": "",
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * task_id **required** `string`

#### Output
* output [TaskExpandWorkgroupLevelVO](#taskexpandworkgrouplevelvo)

### getTeamTemplateList
List current user's team templates info 


```js
noosh.getTeamTemplateList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [TeamTemplateListVO](#teamtemplatelistvo)

### getTeamTemplateDetail
Get current user's team template detal info 


```js
noosh.getTeamTemplateDetail({
  "workgroup_id": "",
  "team_template_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`
  * team_template_id **required** `string`

#### Output
* output [TeamTemplateExpandVO](#teamtemplateexpandvo)

### getWorkgroupMemberList
List the workgroup members


```js
noosh.getWorkgroupMemberList({
  "workgroup_id": ""
}, context)
```

#### Input
* input `object`
  * workgroup_id **required** `string`

#### Output
* output [WorkgroupMembersListVO](#workgroupmemberslistvo)



## Definitions

### AutomaticInvitationVO
* AutomaticInvitationVO `object`: Java type: com.noosh.nooshapi.vo.AutomaticInvitationVO
  * automatic_invitation_type_name `string`
  * team_template [TeamTemplateSimpleVO](#teamtemplatesimplevo)

### AutomaticInvitationsListVO
* AutomaticInvitationsListVO `object`: Java type: com.noosh.nooshapi.vo.AutomaticInvitationsListVO
  * results `array`
    * items [AutomaticInvitationVO](#automaticinvitationvo)
  * status_code `integer`
  * status_reason `string`

### BigDecimal


### BreakoutVO
* BreakoutVO `object`: Java type: com.noosh.nooshapi.vo.BreakoutVO
  * breakout_id `integer`
  * breakout_name `string`
  * breakout_pre_markup [BigDecimal](#bigdecimal)
  * breakout_price [BigDecimal](#bigdecimal)

### ClientWorkgroupListVO
* ClientWorkgroupListVO `object`: Java type: com.noosh.nooshapi.vo.ClientWorkgroupListVO
  * results `array`
    * items [ClientWorkgroupSimpleVO](#clientworkgroupsimplevo)
  * status_code `integer`
  * status_reason `string`

### ClientWorkgroupSimpleVO
* ClientWorkgroupSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ClientWorkgroupSimpleVO
  * client_workgroup_id `integer`
  * client_workgroup_name `string`

### ContactUserVO
* ContactUserVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.ContactUserVO
  * role_id **required** `integer`
  * user_id **required** `integer`

### ContactsListVO
* ContactsListVO `object`: Java type: com.noosh.nooshapi.vo.ContactsListVO
  * results `array`
    * items [ContactsSimpleVO](#contactssimplevo)
  * status_code `integer`
  * status_reason `string`

### ContactsSimpleVO
* ContactsSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ContactsSimpleVO
  * address `string`
  * company_name `string`
  * email `string`
  * first_name `string`
  * last_name `string`
  * primary_phone `string`
  * user_id `integer`
  * workgroup_name `string`

### CustomFieldPersistVO
* CustomFieldPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.CustomFieldPersistVO
  * date_value `string`
  * number_value [BigDecimal](#bigdecimal)
  * param_name `string`
  * string_value `string`

### DeactivationReasonListVO
* DeactivationReasonListVO `object`: Java type: com.noosh.nooshapi.vo.DeactivationReasonListVO
  * results `array`
    * items [DeactivationReasonVO](#deactivationreasonvo)
  * status_code `integer`
  * status_reason `string`

### DeactivationReasonVO
* DeactivationReasonVO `object`: Java type: com.noosh.nooshapi.vo.DeactivationReasonVO
  * deactivation_reason_id `integer`
  * deactivation_reason_name `string`

### ErgoSpecSimpleVO
* ErgoSpecSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ergo.ErgoSpecSimpleVO
  * is_active `integer`
  * is_template `integer`
  * quantity_1 `number`
  * quantity_2 `number`
  * quantity_3 `number`
  * quantity_4 `number`
  * quantity_5 `number`
  * reference_number `string`
  * spec_id `integer`
  * spec_name `string`

### HTTPStatusVO
* HTTPStatusVO `object`: Java type: com.noosh.core.vo.HTTPStatusVO
  * status_code `integer`
  * status_reason `string`

### OrderApprovalVO
* OrderApprovalVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.OrderApprovalVO
  * action `string`: accept or reject
  * reject_reason `string`

### OrderDetailBaseVO
* OrderDetailBaseVO `object`: Java type: com.noosh.nooshapi.vo.OrderDetailBaseVO
  * accepted_date `string`
  * annulled_date `string`
  * approved_date `string`
  * awarded_date `string`
  * budget_type `string`
  * buyer [PersonVO](#personvo)
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * classification `string`
  * closed_date `string`
  * completion_date `string`
  * currency `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * grand_total [BigDecimal](#bigdecimal)
  * item_count `integer`
  * last_activity_date `string`
  * last_changed `string`
  * last_status_change `string`
  * misc_cost `number`
  * order_id `integer`
  * order_number `string`
  * order_title `string`
  * order_total [BigDecimal](#bigdecimal)
  * overs_percent `number`
  * parent_order_id `integer`
  * payment_reference `string`
  * shipping [BigDecimal](#bigdecimal)
  * status `string`
  * status_comments `string`
  * supplier [PersonVO](#personvo)
  * supplier_reference `string`
  * supplier_selection_reason `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * tax [BigDecimal](#bigdecimal)
  * unders_percent `number`

### OrderDetailVO
* OrderDetailVO `object`: Java type: com.noosh.nooshapi.vo.OrderDetailVO
  * accepted_date `string`
  * annulled_date `string`
  * approved_date `string`
  * awarded_date `string`
  * budget_type `string`
  * buyer [PersonVO](#personvo)
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * change_orders `array`
    * items [OrderDetailBaseVO](#orderdetailbasevo)
  * classification `string`
  * closed_date `string`
  * closing_change_orders `array`
    * items [OrderDetailBaseVO](#orderdetailbasevo)
  * completion_date `string`
  * currency `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * grand_total [BigDecimal](#bigdecimal)
  * grand_total_with_changes [BigDecimal](#bigdecimal)
  * item_count `integer`
  * last_activity_date `string`
  * last_changed `string`
  * last_status_change `string`
  * misc_cost `number`
  * order_id `integer`
  * order_items `array`
    * items [OrderItemSimpleVO](#orderitemsimplevo)
  * order_number `string`
  * order_title `string`
  * order_total [BigDecimal](#bigdecimal)
  * overs_percent `number`
  * parent_order_id `integer`
  * payment_reference `string`
  * shipping [BigDecimal](#bigdecimal)
  * status `string`
  * status_comments `string`
  * supplier [PersonVO](#personvo)
  * supplier_reference `string`
  * supplier_selection_reason `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * tax [BigDecimal](#bigdecimal)
  * unders_percent `number`

### OrderDetailWorkgroupLevelVO
* OrderDetailWorkgroupLevelVO `object`: Java type: com.noosh.nooshapi.vo.OrderDetailWorkgroupLevelVO
  * accepted_date `string`
  * annulled_date `string`
  * approved_date `string`
  * awarded_date `string`
  * budget_type `string`
  * buyer [PersonVO](#personvo)
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * change_orders `array`
    * items [OrderDetailBaseVO](#orderdetailbasevo)
  * classification `string`
  * closed_date `string`
  * closing_change_orders `array`
    * items [OrderDetailBaseVO](#orderdetailbasevo)
  * completion_date `string`
  * currency `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * grand_total [BigDecimal](#bigdecimal)
  * grand_total_with_changes [BigDecimal](#bigdecimal)
  * item_count `integer`
  * last_activity_date `string`
  * last_changed `string`
  * last_status_change `string`
  * misc_cost `number`
  * order_id `integer`
  * order_items `array`
    * items [OrderItemSimpleVO](#orderitemsimplevo)
  * order_number `string`
  * order_title `string`
  * order_total [BigDecimal](#bigdecimal)
  * overs_percent `number`
  * parent_order_id `integer`
  * payment_reference `string`
  * project [ProjectBaseVO](#projectbasevo)
  * shipping [BigDecimal](#bigdecimal)
  * status `string`
  * status_comments `string`
  * supplier [PersonVO](#personvo)
  * supplier_reference `string`
  * supplier_selection_reason `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * tax [BigDecimal](#bigdecimal)
  * unders_percent `number`

### OrderExpandWorkgroupLevelVO
* OrderExpandWorkgroupLevelVO `object`: Java type: com.noosh.nooshapi.vo.OrderExpandWorkgroupLevelVO
  * result [OrderDetailWorkgroupLevelVO](#orderdetailworkgrouplevelvo)
  * status_code `integer`
  * status_reason `string`

### OrderItemSimpleVO
* OrderItemSimpleVO `object`: Java type: com.noosh.nooshapi.vo.OrderItemSimpleVO
  * comments `string`
  * completion_date `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * item_id `integer`
  * item_price `number`
  * quantity `number`
  * shipping `number`
  * spec [SpecBaseVO](#specbasevo)
  * tax `number`
  * unit_description `string`
  * unit_price [BigDecimal](#bigdecimal)

### OrderListVO
* OrderListVO `object`: Java type: com.noosh.nooshapi.vo.OrderListVO
  * results `array`
    * items [OrderSimpleVO](#ordersimplevo)
  * status_code `integer`
  * status_reason `string`

### OrderSimpleBaseVO
* OrderSimpleBaseVO `object`: Java type: com.noosh.nooshapi.vo.OrderSimpleBaseVO
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * completion_date `string`
  * currency `string`
  * grand_total [BigDecimal](#bigdecimal)
  * last_changed `string`
  * last_status_change `string`
  * order_id `integer`
  * order_number `string`
  * order_title `string`
  * payment_reference `string`
  * status `string`
  * status_comments `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)

### OrderSimpleVO
* OrderSimpleVO `object`: Java type: com.noosh.nooshapi.vo.OrderSimpleVO
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * change_orders `array`
    * items [OrderSimpleBaseVO](#ordersimplebasevo)
  * closing_change_orders `array`
    * items [OrderSimpleBaseVO](#ordersimplebasevo)
  * completion_date `string`
  * currency `string`
  * grand_total [BigDecimal](#bigdecimal)
  * grand_total_with_changes [BigDecimal](#bigdecimal)
  * last_changed `string`
  * last_status_change `string`
  * order_id `integer`
  * order_number `string`
  * order_title `string`
  * payment_reference `string`
  * status `string`
  * status_comments `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)

### OrderWorkgroupLevelListVO
* OrderWorkgroupLevelListVO `object`: Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelListVO
  * results `array`
    * items [OrderWorkgroupLevelSimpleVO](#orderworkgrouplevelsimplevo)
  * status_code `integer`
  * status_reason `string`

### OrderWorkgroupLevelSimpleVO
* OrderWorkgroupLevelSimpleVO `object`: Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelSimpleVO
  * buyer_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * change_orders `array`
    * items [OrderSimpleBaseVO](#ordersimplebasevo)
  * closing_change_orders `array`
    * items [OrderSimpleBaseVO](#ordersimplebasevo)
  * completion_date `string`
  * currency `string`
  * grand_total [BigDecimal](#bigdecimal)
  * grand_total_with_changes [BigDecimal](#bigdecimal)
  * last_changed `string`
  * last_status_change `string`
  * order_id `integer`
  * order_number `string`
  * order_title `string`
  * payment_reference `string`
  * project [ProjectBaseVO](#projectbasevo)
  * status `string`
  * status_comments `string`
  * supplier_workgroup [WorkgroupBaseVO](#workgroupbasevo)

### PersonVO
* PersonVO `object`: Java type: com.noosh.nooshapi.vo.PersonVO
  * email `string`
  * first_name `string`
  * last_name `string`
  * middle_name `string`

### ProjectBaseVO
* ProjectBaseVO `object`: Java type: com.noosh.nooshapi.vo.ProjectBaseVO
  * project_id `integer`
  * project_name `string`
  * project_number `string`

### ProjectCategoryListVO
* ProjectCategoryListVO `object`: Java type: com.noosh.nooshapi.vo.ProjectCategoryListVO
  * results `array`
    * items [ProjectCategorySimpleVO](#projectcategorysimplevo)
  * status_code `integer`
  * status_reason `string`

### ProjectCategorySimpleVO
* ProjectCategorySimpleVO `object`: Java type: com.noosh.nooshapi.vo.ProjectCategorySimpleVO
  * project_category_id `integer`
  * project_category_name `string`

### ProjectDetailVO
* ProjectDetailVO `object`: Java type: com.noosh.nooshapi.vo.ProjectDetailVO
  * category `string`
  * client_account `string`
  * comments `string`
  * completion_date `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * deactivation_reason `string`
  * is_active `boolean`
  * is_hot `boolean`
  * last_spec_update `string`
  * mod_date `string`
  * owner_workgroup `string`
  * parent_project [ProjectParentVO](#projectparentvo)
  * project_create_date `string`
  * project_description `string`
  * project_id `integer`
  * project_name `string`
  * project_number `string`
  * project_status `string`
  * team_owners `string`

### ProjectExpandVO
* ProjectExpandVO `object`: Java type: com.noosh.nooshapi.vo.ProjectExpandVO
  * result [ProjectDetailVO](#projectdetailvo)
  * status_code `integer`
  * status_reason `string`

### ProjectHomeUserFieldsListVO
* ProjectHomeUserFieldsListVO `object`: Java type: com.noosh.nooshapi.vo.ProjectHomeUserFieldsListVO
  * results `array`
    * items [UserFieldsSimpleVO](#userfieldssimplevo)
  * status_code `integer`
  * status_reason `string`

### ProjectListVO
* ProjectListVO `object`: Java type: com.noosh.nooshapi.vo.ProjectListVO
  * results `array`
    * items [ProjectSimpleVO](#projectsimplevo)
  * status_code `integer`
  * status_reason `string`

### ProjectParentVO
* ProjectParentVO `object`: Java type: com.noosh.nooshapi.vo.ProjectParentVO
  * client_account `string`
  * comments `string`
  * created_by [PersonVO](#personvo)
  * project_create_date `string`
  * project_description `string`
  * project_id `integer`
  * project_name `string`
  * project_number `string`

### ProjectPersistVO
* ProjectPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.ProjectPersistVO
  * client_account `string`
  * client_user_id `integer`
  * client_workgroup_id `integer`
  * comments `string`
  * completion_date `string`
  * custom_fields `array`
    * items [CustomFieldPersistVO](#customfieldpersistvo)
  * deactivation_reason_id `integer`
  * is_active `boolean`
  * is_hot `boolean`
  * project_category_id `integer`
  * project_description `string`
  * project_name `string`
  * project_number `string`
  * project_owner_user_id `integer`
  * project_status_id **required** `integer`

### ProjectSimpleVO
* ProjectSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ProjectSimpleVO
  * client_account `string`
  * completion_date `string`
  * is_active `boolean`
  * is_hot `boolean`
  * last_spec_update `string`
  * project_id `integer`
  * project_name `string`
  * project_number `string`
  * project_status `string`

### ProjectStatusListVO
* ProjectStatusListVO `object`: Java type: com.noosh.nooshapi.vo.ProjectStatusListVO
  * results `array`
    * items [ProjectStatusSimpleVO](#projectstatussimplevo)
  * status_code `integer`
  * status_reason `string`

### ProjectStatusSimpleVO
* ProjectStatusSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ProjectStatusSimpleVO
  * project_status_id `integer`
  * project_status_name `string`

### ProjectTimeCardVO
* ProjectTimeCardVO `object`: Java type: com.noosh.nooshapi.vo.ProjectTimeCardVO
  * project_id `integer`
  * project_name `string`

### ProjectVO
* ProjectVO `object`: Java type: com.noosh.nooshapi.vo.ProjectVO
  * project_id `integer`
  * status_code `integer`
  * status_reason `string`

### PropertyPaAndAttVO
* PropertyPaAndAttVO `object`: Java type: com.noosh.nooshapi.vo.PropertyPaAndAttVO
  * date_value `string`
  * number_value [BigDecimal](#bigdecimal)
  * param_id `integer`
  * param_name `string`
  * property_attribute_id `integer`
  * string_value `string`

### PropertyParamListVO
* PropertyParamListVO `object`: Java type: com.noosh.nooshapi.vo.PropertyParamListVO
  * result `array`
    * items [PropertyParamSimpleVO](#propertyparamsimplevo)
  * status_code `integer`
  * status_reason `string`

### PropertyParamSimpleVO
* PropertyParamSimpleVO `object`: Java type: com.noosh.nooshapi.vo.PropertyParamSimpleVO
  * data_type `string`
  * param_name `string`

### QuoteBaseVO
* QuoteBaseVO `object`: Java type: com.noosh.nooshapi.vo.QuoteBaseVO
  * currency `string`
  * grand_total [BigDecimal](#bigdecimal)
  * quote_id `integer`
  * quote_title `string`
  * status `string`
  * submit_date `string`

### QuoteDetailVO
* QuoteDetailVO `object`: Java type: com.noosh.nooshapi.vo.QuoteDetailVO
  * client `string`
  * comments `string`
  * currency `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * description `string`
  * grand_total [BigDecimal](#bigdecimal)
  * is_show_supplier_information `boolean`
  * proposed_order_completion_date `string`
  * quote_expiration_date `string`
  * quote_id `integer`
  * quote_items `array`
    * items [QuoteItemDetailVO](#quoteitemdetailvo)
  * quote_items_total [BigDecimal](#bigdecimal)
  * quote_title `string`
  * shipping [BigDecimal](#bigdecimal)
  * status `string`
  * submit_date `string`
  * tax [BigDecimal](#bigdecimal)

### QuoteExpandVO
* QuoteExpandVO `object`: Java type: com.noosh.nooshapi.vo.QuoteExpandVO
  * result [QuoteDetailVO](#quotedetailvo)
  * status_code `integer`
  * status_reason `string`

### QuoteItemDetailVO
* QuoteItemDetailVO `object`: Java type: com.noosh.nooshapi.vo.QuoteItemDetailVO
  * chosen_quantity [BigDecimal](#bigdecimal)
  * comments `string`
  * completion_date `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * item_id `integer`
  * item_prices `array`
    * items [QuotePriceDetailVO](#quotepricedetailvo)
  * item_shipping_total [BigDecimal](#bigdecimal)
  * item_tax_total [BigDecimal](#bigdecimal)
  * item_total [BigDecimal](#bigdecimal)
  * reason_for_quote_selection `string`
  * spec [SpecBaseVO](#specbasevo)

### QuoteListVO
* QuoteListVO `object`: Java type: com.noosh.nooshapi.vo.QuoteListVO
  * result `array`
    * items [QuoteSimpleVO](#quotesimplevo)
  * status_code `integer`
  * status_reason `string`

### QuotePriceDetailVO
* QuotePriceDetailVO `object`: Java type: com.noosh.nooshapi.vo.QuotePriceDetailVO
  * breakouts `array`
    * items [BreakoutVO](#breakoutvo)
  * cost [BigDecimal](#bigdecimal)
  * fixed [BigDecimal](#bigdecimal)
  * is_included `boolean`
  * is_quoted `boolean`
  * price_id `integer`
  * quantity [BigDecimal](#bigdecimal)
  * sell_price [BigDecimal](#bigdecimal)
  * shipping [BigDecimal](#bigdecimal)
  * source [QuotePriceSourceVO](#quotepricesourcevo)
  * supplier `string`
  * tax [BigDecimal](#bigdecimal)
  * total [BigDecimal](#bigdecimal)
  * variable [BigDecimal](#bigdecimal)
  * variable_percent [BigDecimal](#bigdecimal)

### QuotePriceSourceVO


### QuotePutPersistVO
* QuotePutPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.QuotePutPersistVO
  * action `string`
  * po_number `string`
  * quote_id `integer`
  * state_change_comments `string`

### QuoteSimpleVO
* QuoteSimpleVO `object`: Java type: com.noosh.nooshapi.vo.QuoteSimpleVO
  * currency `string`
  * grand_total [BigDecimal](#bigdecimal)
  * quote_id `integer`
  * quote_title `string`
  * rfq [RfqBaseVO](#rfqbasevo)
  * status `string`
  * submit_date `string`

### RfqBaseVO
* RfqBaseVO `object`: Java type: com.noosh.nooshapi.vo.RfqBaseVO
  * received_date `string`
  * rfq_id `integer`
  * rfq_title `string`
  * status `string`

### RfqDetailsVO
* RfqDetailsVO `object`: Java type: com.noosh.nooshapi.vo.RfqDetailsVO
  * comments `string`
  * description `string`
  * proposed_completion_date `string`
  * quote_due_date `string`
  * quotes `array`
    * items [QuoteBaseVO](#quotebasevo)
  * received_date `string`
  * recipient_name `string`
  * requestor_name `string`
  * rfq_id `integer`
  * rfq_items `array`
    * items [RfqItemBaseVO](#rfqitembasevo)
  * rfq_title `string`
  * status `string`

### RfqExpandVO
* RfqExpandVO `object`: Java type: com.noosh.nooshapi.vo.RfqExpandVO
  * result [RfqDetailsVO](#rfqdetailsvo)
  * status_code `integer`
  * status_reason `string`

### RfqItemBaseVO
* RfqItemBaseVO `object`: Java type: com.noosh.nooshapi.vo.RfqItemBaseVO
  * job_id `integer`
  * rfq_item_id `integer`
  * spec [ErgoSpecSimpleVO](#ergospecsimplevo)

### RfqListVO
* RfqListVO `object`: Java type: com.noosh.nooshapi.vo.RfqListVO
  * result `array`
    * items [RfqSimpleVO](#rfqsimplevo)
  * status_code `integer`
  * status_reason `string`

### RfqSimpleVO
* RfqSimpleVO `object`: Java type: com.noosh.nooshapi.vo.RfqSimpleVO
  * quotes `array`
    * items [QuoteBaseVO](#quotebasevo)
  * received_date `string`
  * rfq_id `integer`
  * rfq_title `string`
  * status `string`

### RoleListVO
* RoleListVO `object`: Java type: com.noosh.nooshapi.vo.RoleListVO
  * result `array`
    * items [RoleSimpleVO](#rolesimplevo)
  * status_code `integer`
  * status_reason `string`

### RoleSimpleVO
* RoleSimpleVO `object`: Java type: com.noosh.nooshapi.vo.RoleSimpleVO
  * role_id `integer`
  * role_name `string`

### ShipmentDetailVO
* ShipmentDetailVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentDetailVO
  * locations `array`
    * items [ShipmentRequestBaseVO](#shipmentrequestbasevo)
  * locations_count `integer`
  * qty_received `integer`
  * qty_requested `integer`
  * qty_shipped `integer`
  * received_date `string`
  * shipment_id `integer`
  * shipment_status `string`
  * shipped_date `string`
  * spec [SpecBaseVO](#specbasevo)

### ShipmentExpandVO
* ShipmentExpandVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentExpandVO
  * resut [ShipmentDetailVO](#shipmentdetailvo)
  * status_code `integer`
  * status_reason `string`

### ShipmentListVO
* ShipmentListVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentListVO
  * result `array`
    * items [ShipmentSimpleVO](#shipmentsimplevo)
  * status_code `integer`
  * status_reason `string`

### ShipmentLocationPersistVO
* ShipmentLocationPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPersistVO
  * due_date `string`
  * qty_received `integer`
  * qty_requested `integer`
  * qty_shipped `integer`
  * received_date `string`
  * shipped_date `string`
  * shipping_cost [BigDecimal](#bigdecimal)
  * type `string`

### ShipmentLocationPostPersistVO
* ShipmentLocationPostPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPostPersistVO
  * address_line1 `string`
  * address_line2 `string`
  * address_line3 `string`
  * batch_label `string`
  * city `string`
  * company_name `string`
  * country_iso_code `string`
  * delivery_date `string`
  * description_or_title `string`
  * email `string`
  * first_name `string`
  * inner_carton_label `string`
  * last_name `string`
  * middle_name `string`
  * outer_carton_label `string`
  * pallet_lablel `string`
  * poof_type `string`
  * postal_code `string`
  * request_type `string`
  * requested_quantity `integer`
  * shipping_carrier `string`
  * shipping_instruction `string`
  * shpping_method `string`
  * spec_ids `string`
  * state `string`
  * work_phone_number `string`
  * workgroup_name `string`

### ShipmentLocationsPOSTResultVO
* ShipmentLocationsPOSTResultVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTResultVO
  * results `array`
    * items [ShipmentLocationsPOSTVO](#shipmentlocationspostvo)
  * status_code `integer`
  * status_reason `string`

### ShipmentLocationsPOSTVO
* ShipmentLocationsPOSTVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTVO
  * location_id `integer`
  * shipment_id `integer`
  * spec_id `integer`

### ShipmentRequestBaseVO
* ShipmentRequestBaseVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentRequestBaseVO
  * city `string`
  * company_name `string`
  * country `string`
  * custom_fields `array`
    * items [PropertyPaAndAttVO](#propertypaandattvo)
  * description_or_title `string`
  * due_date `string`
  * email `string`
  * first_name `string`
  * is_use_spec_packaging `boolean`
  * last_name `string`
  * line_1 `string`
  * line_2 `string`
  * line_3 `string`
  * location_id `integer`
  * middle_name `string`
  * postal `string`
  * proof_type `string`
  * qty_received `integer`
  * qty_requested `integer`
  * qty_shipped `integer`
  * received_comments `string`
  * received_date `string`
  * requested_shipping_carrier `string`
  * requested_shipping_method `string`
  * shipped_comments `string`
  * shipped_date `string`
  * shipped_in_units `integer`
  * shipped_in_uofm `string`
  * shipped_shipping_carrier `string`
  * shipped_shipping_method `string`
  * shipping_cost [BigDecimal](#bigdecimal)
  * shipping_instruction `string`
  * state `string`
  * tax [BigDecimal](#bigdecimal)
  * tracking_number `string`
  * type `string`
  * weight [BigDecimal](#bigdecimal)
  * weight_uofm `string`
  * work_phone_number `string`
  * workgroup_name `string`

### ShipmentSimpleVO
* ShipmentSimpleVO `object`: Java type: com.noosh.nooshapi.vo.ShipmentSimpleVO
  * locations_count `integer`
  * qty_received `integer`
  * qty_requested `integer`
  * qty_shipped `integer`
  * received_date `string`
  * shipment_id `integer`
  * shipment_status `string`
  * shipped_date `string`
  * spec [SpecBaseVO](#specbasevo)

### SpecBaseVO
* SpecBaseVO `object`: Java type: com.noosh.nooshapi.vo.SpecBaseVO
  * job_id `integer`
  * reference_number `string`
  * spec_id `integer`
  * spec_name `string`

### SpecListVO
* SpecListVO `object`: Java type: com.noosh.nooshapi.vo.SpecListVO
  * results `array`
    * items [SpecSimpleVO](#specsimplevo)
  * status_code `integer`
  * status_reason `string`

### SpecPersistVO
* SpecPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.SpecPersistVO
  * jsonBody `boolean`
  * product_type_id `integer`
  * quantity_1 `integer`
  * quantity_2 `integer`
  * quantity_3 `integer`
  * quantity_4 `integer`
  * quantity_5 `integer`
  * sku `string`
  * spec_name `string`
  * spec_template_id `integer`
  * spec_type_id `integer`

### SpecSimpleVO
* SpecSimpleVO `object`: Java type: com.noosh.nooshapi.vo.SpecSimpleVO
  * client_status `string`
  * create_date `string`
  * created_by [PersonVO](#personvo)
  * job_id `integer`
  * last_updated `string`
  * reference_number `string`
  * spec_id `integer`
  * spec_name `string`
  * supplier_status `string`
  * uofms `array`
    * items [UofmSimpleVO](#uofmsimplevo)
  * user_state `string`

### SpecTemplateDetailVO
* SpecTemplateDetailVO `object`: Java type: com.noosh.nooshapi.vo.SpecTemplateDetailVO
  * created_by [PersonVO](#personvo)
  * created_date `string`
  * is_active `boolean`
  * is_externally_published `boolean`
  * is_locked `boolean`
  * last_updated_date `string`
  * product_type `string`
  * spec_template_id `integer`
  * spec_template_name `string`
  * spec_type [SpecTypeVO](#spectypevo)

### SpecTemplateExpandVO
* SpecTemplateExpandVO `object`: Java type: com.noosh.nooshapi.vo.SpecTemplateExpandVO
  * result [SpecTemplateDetailVO](#spectemplatedetailvo)
  * status_code `integer`
  * status_reason `string`

### SpecTemplateListVO
* SpecTemplateListVO `object`: Java type: com.noosh.nooshapi.vo.SpecTemplateListVO
  * results `array`
    * items [SpecTemplateSimpleVO](#spectemplatesimplevo)
  * status_code `integer`
  * status_reason `string`

### SpecTemplateSimpleVO
* SpecTemplateSimpleVO `object`: Java type: com.noosh.nooshapi.vo.SpecTemplateSimpleVO
  * created_by [PersonVO](#personvo)
  * created_date `string`
  * is_active `boolean`
  * is_externally_published `boolean`
  * is_locked `boolean`
  * last_updated_date `string`
  * spec_template_id `integer`
  * spec_template_name `string`

### SpecTypeVO
* SpecTypeVO `object`: Java type: com.noosh.nooshapi.vo.SpecTypeVO
  * spec_type_id `integer`
  * spec_type_name `string`

### SpecVO
* SpecVO `object`: Java type: com.noosh.nooshapi.vo.SpecVO
  * spec_id `integer`
  * status_code `integer`
  * status_reason `string`

### TaskCreatedVO
* TaskCreatedVO `object`: Java type: com.noosh.nooshapi.vo.ne.TaskCreatedVO
  * status_code `integer`
  * status_reason `string`
  * task_id `integer`

### TaskDetailVO
* TaskDetailVO `object`: Java type: com.noosh.nooshapi.vo.TaskDetailVO
  * actual_duration [BigDecimal](#bigdecimal)
  * actual_end `string`
  * actual_hours [BigDecimal](#bigdecimal)
  * actual_start `string`
  * assign_to [PersonVO](#personvo)
  * baseline_duration [BigDecimal](#bigdecimal)
  * baseline_end_date `string`
  * baseline_start_date `string`
  * comments `string`
  * create_date `string`
  * creator_workgroup_name `string`
  * current_duration [BigDecimal](#bigdecimal)
  * description `string`
  * is_milestone `boolean`
  * last_updated_by [PersonVO](#personvo)
  * mod_date `string`
  * percent_complete `integer`
  * plan_duration [BigDecimal](#bigdecimal)
  * plan_end `string`
  * plan_start `string`
  * priority `string`
  * requested_by [PersonVO](#personvo)
  * schedule_code `string`
  * status `string`
  * task_id `integer`
  * task_name `string`
  * task_type `string`

### TaskDetailWorkgroupLevelVO
* TaskDetailWorkgroupLevelVO `object`: Java type: com.noosh.nooshapi.vo.TaskDetailWorkgroupLevelVO
  * actual_duration [BigDecimal](#bigdecimal)
  * actual_end `string`
  * actual_hours [BigDecimal](#bigdecimal)
  * actual_start `string`
  * assign_to [PersonVO](#personvo)
  * baseline_duration [BigDecimal](#bigdecimal)
  * baseline_end_date `string`
  * baseline_start_date `string`
  * comments `string`
  * create_date `string`
  * creator_workgroup_name `string`
  * current_duration [BigDecimal](#bigdecimal)
  * description `string`
  * is_milestone `boolean`
  * last_updated_by [PersonVO](#personvo)
  * mod_date `string`
  * percent_complete `integer`
  * plan_duration [BigDecimal](#bigdecimal)
  * plan_end `string`
  * plan_start `string`
  * priority `string`
  * project [ProjectBaseVO](#projectbasevo)
  * requested_by [PersonVO](#personvo)
  * schedule_code `string`
  * status `string`
  * task_id `integer`
  * task_name `string`
  * task_type `string`

### TaskExpandVO
* TaskExpandVO `object`: Java type: com.noosh.nooshapi.vo.TaskExpandVO
  * result [TaskDetailVO](#taskdetailvo)
  * status_code `integer`
  * status_reason `string`

### TaskExpandWorkgroupLevelVO
* TaskExpandWorkgroupLevelVO `object`: Java type: com.noosh.nooshapi.vo.TaskExpandWorkgroupLevelVO
  * result [TaskDetailWorkgroupLevelVO](#taskdetailworkgrouplevelvo)
  * status_code `integer`
  * status_reason `string`

### TaskListVO
* TaskListVO `object`: Java type: com.noosh.nooshapi.vo.TaskListVO
  * results `array`
    * items [TaskSimpleVO](#tasksimplevo)
  * status_code `integer`
  * status_reason `string`

### TaskPersistVO
* TaskPersistVO `object`: Java type: com.noosh.domain.nooshapi.persist.vo.TaskPersistVO
  * actual_duration `number`
  * actual_duration_hour `number`
  * actual_end_date `string`
  * actual_start_date `string`
  * assign_to_user_id `integer`
  * comments `string`
  * contributors `string`
  * custom_status_id `integer`
  * description `string`
  * name `string`
  * percentage_complete `integer`
  * priority `integer`
  * revised_duration `number`
  * revised_duration_hour `number`
  * revised_end_date `string`
  * revised_start_date `string`
  * status_id `integer`
  * task_id `integer`
  * task_type_id `integer`

### TaskPriorityListVO
* TaskPriorityListVO `object`: Java type: com.noosh.nooshapi.vo.TaskPriorityListVO
  * results `array`
    * items [TaskPriorityVO](#taskpriorityvo)
  * status_code `integer`
  * status_reason `string`

### TaskPriorityVO
* TaskPriorityVO `object`: Java type: com.noosh.nooshapi.vo.TaskPriorityVO
  * task_priority_id `integer`
  * task_priority_name `string`

### TaskSimpleVO
* TaskSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TaskSimpleVO
  * actual_end `string`
  * actual_hours [BigDecimal](#bigdecimal)
  * actual_start `string`
  * assign_to [PersonVO](#personvo)
  * baseline_duration [BigDecimal](#bigdecimal)
  * baseline_end_date `string`
  * baseline_start_date `string`
  * current_duration [BigDecimal](#bigdecimal)
  * is_milestone `boolean`
  * mod_date `string`
  * plan_end `string`
  * plan_start `string`
  * priority `string`
  * schedule_code `string`
  * status `string`
  * task_id `integer`
  * task_name `string`
  * task_type `string`

### TaskStatusListVO
* TaskStatusListVO `object`: Java type: com.noosh.nooshapi.vo.TaskStatusListVO
  * results `array`
    * items [TaskStatusVO](#taskstatusvo)
  * status_code `integer`
  * status_reason `string`

### TaskStatusVO
* TaskStatusVO `object`: Java type: com.noosh.nooshapi.vo.TaskStatusVO
  * task_status_id `integer`
  * task_status_name `string`

### TaskTimeCardVO
* TaskTimeCardVO `object`: Java type: com.noosh.nooshapi.vo.TaskTimeCardVO
  * task_id `integer`
  * task_name `string`

### TaskTypeListVO
* TaskTypeListVO `object`: Java type: com.noosh.nooshapi.vo.TaskTypeListVO
  * results `array`
    * items [TaskTypeSimpleVO](#tasktypesimplevo)
  * status_code `integer`
  * status_reason `string`

### TaskTypeSimpleVO
* TaskTypeSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TaskTypeSimpleVO
  * task_type `string`
  * task_type_id `integer`

### TaskWorkgroupLevelListVO
* TaskWorkgroupLevelListVO `object`: Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelListVO
  * results `array`
    * items [TaskWorkgroupLevelSimpleVO](#taskworkgrouplevelsimplevo)
  * status_code `integer`
  * status_reason `string`

### TaskWorkgroupLevelSimpleVO
* TaskWorkgroupLevelSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelSimpleVO
  * actual_end `string`
  * actual_hours [BigDecimal](#bigdecimal)
  * actual_start `string`
  * assign_to [PersonVO](#personvo)
  * baseline_duration [BigDecimal](#bigdecimal)
  * baseline_end_date `string`
  * baseline_start_date `string`
  * current_duration [BigDecimal](#bigdecimal)
  * is_milestone `boolean`
  * mod_date `string`
  * plan_end `string`
  * plan_start `string`
  * priority `string`
  * project [ProjectBaseVO](#projectbasevo)
  * schedule_code `string`
  * status `string`
  * task_id `integer`
  * task_name `string`
  * task_type `string`

### TeamMemberBaseInfVO
* TeamMemberBaseInfVO `object`: Java type: com.noosh.nooshapi.vo.TeamMemberBaseInfVO
  * status_code `integer`
  * status_reason `string`
  * teammember_id `integer`

### TeamMemberListVO
* TeamMemberListVO `object`: Java type: com.noosh.nooshapi.vo.TeamMemberListVO
  * results `array`
    * items [TeamMemberSimpleVO](#teammembersimplevo)
  * status_code `integer`
  * status_reason `string`

### TeamMemberPO
* TeamMemberPO `object`: Java type: com.noosh.domain.nooshapi.persist.po.TeamMemberPO
  * role_id `integer`
  * team_template_id `integer`
  * user_id `integer`

### TeamMemberSimpleVO
* TeamMemberSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TeamMemberSimpleVO
  * company_name `string`
  * name `string`
  * phone `string`
  * role `string`
  * teammember_id `integer`
  * workgroup_name `string`

### TeamTemplateDetailVO
* TeamTemplateDetailVO `object`: Java type: com.noosh.nooshapi.vo.TeamTemplateDetailVO
  * team_teample_item `array`
    * items [TeamTemplateItemVO](#teamtemplateitemvo)
  * team_template_id `integer`
  * team_template_name `string`

### TeamTemplateExpandVO
* TeamTemplateExpandVO `object`: Java type: com.noosh.nooshapi.vo.TeamTemplateExpandVO
  * results [TeamTemplateDetailVO](#teamtemplatedetailvo)
  * status_code `integer`
  * status_reason `string`

### TeamTemplateItemVO
* TeamTemplateItemVO `object`: Java type: com.noosh.nooshapi.vo.TeamTemplateItemVO
  * role [RoleSimpleVO](#rolesimplevo)
  * user [UserPersonVO](#userpersonvo)

### TeamTemplateListVO
* TeamTemplateListVO `object`: Java type: com.noosh.nooshapi.vo.TeamTemplateListVO
  * results `array`
    * items [TeamTemplateSimpleVO](#teamtemplatesimplevo)
  * status_code `integer`
  * status_reason `string`

### TeamTemplateSimpleVO
* TeamTemplateSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TeamTemplateSimpleVO
  * team_template_id `integer`
  * team_template_name `string`

### TimeCardDetailVO
* TimeCardDetailVO `object`: Java type: com.noosh.nooshapi.vo.TimeCardDetailVO
  * billable_hours [BigDecimal](#bigdecimal)
  * is_submit `boolean`
  * last_updated_date `string`
  * no_of_workdays `integer`
  * nonbillable_hours [BigDecimal](#bigdecimal)
  * submit_date `string`
  * time_card_line `array`
    * items [TimeCardLineVO](#timecardlinevo)
  * timecard_id `integer`
  * total_hours [BigDecimal](#bigdecimal)
  * week_beginning `string`

### TimeCardLineVO
* TimeCardLineVO `object`: Java type: com.noosh.nooshapi.vo.TimeCardLineVO
  * activity_name `string`
  * day1_hours_spent [BigDecimal](#bigdecimal)
  * day2_hours_spent [BigDecimal](#bigdecimal)
  * day3_hours_spent [BigDecimal](#bigdecimal)
  * day4_hours_spent [BigDecimal](#bigdecimal)
  * day5_hours_spent [BigDecimal](#bigdecimal)
  * day6_hours_spent [BigDecimal](#bigdecimal)
  * day7_hours_spent [BigDecimal](#bigdecimal)
  * project [ProjectTimeCardVO](#projecttimecardvo)
  * task [TaskTimeCardVO](#tasktimecardvo)
  * time_card_line_id `integer`
  * total_hours_spent [BigDecimal](#bigdecimal)

### TimeCardListVO
* TimeCardListVO `object`: Java type: com.noosh.nooshapi.vo.TimeCardListVO
  * results `array`
    * items [TimeCardSimpleVO](#timecardsimplevo)
  * status_code `integer`
  * status_reason `string`

### TimeCardReceivedDetailVO
* TimeCardReceivedDetailVO `object`: Java type: com.noosh.nooshapi.vo.TimeCardReceivedDetailVO
  * billable_hours [BigDecimal](#bigdecimal)
  * is_submit `boolean`
  * last_updated_date `string`
  * no_of_workdays `integer`
  * nonbillable_hours [BigDecimal](#bigdecimal)
  * owner [PersonVO](#personvo)
  * submit_date `string`
  * time_card_line `array`
    * items [TimeCardLineVO](#timecardlinevo)
  * timecard_id `integer`
  * total_hours [BigDecimal](#bigdecimal)
  * week_beginning `string`

### TimeCardSimpleVO
* TimeCardSimpleVO `object`: Java type: com.noosh.nooshapi.vo.TimeCardSimpleVO
  * is_submit `boolean`
  * last_updated_date `string`
  * no_of_workdays `integer`
  * submit_date `string`
  * timecard_id `integer`
  * total_hours [BigDecimal](#bigdecimal)
  * week_beginning `string`

### UofmSimpleVO
* UofmSimpleVO `object`: Java type: com.noosh.nooshapi.vo.UofmSimpleVO
  * is_default `boolean`
  * uofm_id `integer`
  * uofm_name `string`

### UserFieldsSimpleVO
* UserFieldsSimpleVO `object`: Java type: com.noosh.nooshapi.vo.UserFieldsSimpleVO
  * is_required `boolean`
  * label `string`
  * ordinal_number `integer`
  * param_name `string`
  * type `string`
  * user_field_id `integer`

### UserPersonVO
* UserPersonVO `object`: Java type: com.noosh.nooshapi.vo.UserPersonVO
  * email `string`
  * first_name `string`
  * last_name `string`
  * middle_name `string`
  * user_id `integer`

### V1x1InvitedTeamMemberResultsVO
* V1x1InvitedTeamMemberResultsVO `object`: Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberResultsVO
  * results `array`
    * items [V1x1InvitedTeamMemberVO](#v1x1invitedteammembervo)
  * status_code `integer`
  * status_reason `string`

### V1x1InvitedTeamMemberVO
* V1x1InvitedTeamMemberVO `object`: Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberVO
  * role [RoleSimpleVO](#rolesimplevo)
  * team_member_id `integer`
  * user [UserPersonVO](#userpersonvo)
  * was_invited_before `boolean`

### WgTaskStatusListVO
* WgTaskStatusListVO `object`: Java type: com.noosh.nooshapi.vo.WgTaskStatusListVO
  * result `array`
    * items [WgTaskStatusVO](#wgtaskstatusvo)
  * status_code `integer`
  * status_reason `string`

### WgTaskStatusVO
* WgTaskStatusVO `object`: Java type: com.noosh.nooshapi.vo.WgTaskStatusVO
  * description `string`
  * is_active `boolean`
  * is_default `boolean`
  * task_status_name `string`
  * tasks_status_id `integer`

### WorkgroupAttributeListVO
* WorkgroupAttributeListVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupAttributeListVO
  * result `array`
    * items [WorkgroupAttributeVO](#workgroupattributevo)
  * status_code `integer`
  * status_reason `string`

### WorkgroupAttributeVO
* WorkgroupAttributeVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupAttributeVO
  * is_checked `boolean`
  * label `string`
  * product_type_id `integer`

### WorkgroupBaseVO
* WorkgroupBaseVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
  * workgroup_id `integer`
  * workgroup_name `string`

### WorkgroupListVO
* WorkgroupListVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupListVO
  * results `array`
    * items [WorkgroupSimpleVO](#workgroupsimplevo)
  * status_code `integer`
  * status_reason `string`

### WorkgroupMembersListVO
* WorkgroupMembersListVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupMembersListVO
  * results `array`
    * items [WorkgroupMembersSimpleVO](#workgroupmemberssimplevo)
  * status_code `integer`
  * status_reason `string`

### WorkgroupMembersSimpleVO
* WorkgroupMembersSimpleVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupMembersSimpleVO
  * email `string`
  * first_name `string`
  * last_name `string`
  * user_id `integer`

### WorkgroupSimpleVO
* WorkgroupSimpleVO `object`: Java type: com.noosh.nooshapi.vo.WorkgroupSimpleVO
  * is_default `boolean`
  * parent_workgroup [WorkgroupBaseVO](#workgroupbasevo)
  * workgroup_id `integer`
  * workgroup_name `string`


