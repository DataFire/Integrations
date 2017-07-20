# @datafire/amazonaws_discovery

Client library for AWS Application Discovery Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_discovery
```

```js
let datafire = require('datafire');
let amazonaws_discovery = require('@datafire/amazonaws_discovery').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_discovery: account,
  }
})

amazonaws_discovery.AssociateConfigurationItemsToApplication({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Application Discovery Service</fullname> <p>AWS Application Discovery Service helps you plan application migration projects by automatically identifying servers, virtual machines (VMs), software, and software dependencies running in your on-premises data centers. Application Discovery Service also collects application performance data, which can help you assess the outcome of your migration. The data collected by Application Discovery Service is securely retained in an Amazon-hosted and managed database in the cloud. You can export the data as a CSV or XML file into your preferred visualization tool or cloud-migration solution to plan your migration. For more information, see the Application Discovery Service <a href="http://aws.amazon.com/application-discovery/faqs/">FAQ</a>.</p> <p>Application Discovery Service offers two modes of operation.</p> <ul> <li> <p> <b>Agentless discovery</b> mode is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment. Agentless discovery doesn't collect information about software and software dependencies. It also doesn't work in non-VMware environments. We recommend that you use agent-based discovery for non-VMware environments and if you want to collect information about software and software dependencies. You can also run agent-based and agentless discovery simultaneously. Use agentless discovery to quickly complete the initial infrastructure assessment and then install agents on select hosts to gather information about software and software dependencies.</p> </li> <li> <p> <b>Agent-based discovery</b> mode collects a richer set of data than agentless discovery by using Amazon software, the AWS Application Discovery Agent, which you install on one or more hosts in your data center. The agent captures infrastructure and application information, including an inventory of installed software applications, system and process performance, resource utilization, and network dependencies between workloads. The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> <p>Application Discovery Service integrates with application discovery solutions from AWS Partner Network (APN) partners. Third-party application discovery tools can query Application Discovery Service and write to the Application Discovery Service database using a public API. You can then import the data into either a visualization tool or cloud-migration solution.</p> <important> <p>Application Discovery Service doesn't gather sensitive information. All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS Privacy Policy</a>. You can operate Application Discovery Service using offline mode to inspect collected data before it is shared with the service.</p> </important> <p>Your AWS account must be granted access to Application Discovery Service, a process called <i>whitelisting</i>. This is true for AWS partners and customers alike. To request access, sign up for AWS Application Discovery Service <a href="http://aws.amazon.com/application-discovery/preview/">here</a>. We send you information about how to get started.</p> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/"> <i>AWS Application Discovery Service User Guide</i> </a>.</p>

## Actions
### AssociateConfigurationItemsToApplication
Associates one or more configuration items with an application.


```js
amazonaws_discovery.AssociateConfigurationItemsToApplication({
  "body": {
    "applicationConfigurationId": "",
    "configurationIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateApplication
Creates an application with the given name and description.


```js
amazonaws_discovery.CreateApplication({
  "body": {
    "name": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateTags
Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.


```js
amazonaws_discovery.CreateTags({
  "body": {
    "configurationIds": [],
    "tags": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteApplications
Deletes a list of applications and their associations with configuration items.


```js
amazonaws_discovery.DeleteApplications({
  "body": {
    "configurationIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteTags
Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.


```js
amazonaws_discovery.DeleteTags({
  "body": {
    "configurationIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeAgents
Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.


```js
amazonaws_discovery.DescribeAgents({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeConfigurations
<p>Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards.</p> <p>For a complete list of outputs for each asset type, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a>.</p>


```js
amazonaws_discovery.DescribeConfigurations({
  "body": {
    "configurationIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeExportConfigurations
<p>Deprecated. Use <code>DescribeExportTasks</code> instead.</p> <p>Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.</p>


```js
amazonaws_discovery.DescribeExportConfigurations({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeExportTasks
Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.


```js
amazonaws_discovery.DescribeExportTasks({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeTags
Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.


```js
amazonaws_discovery.DescribeTags({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisassociateConfigurationItemsFromApplication
Disassociates one or more configuration items from an application.


```js
amazonaws_discovery.DisassociateConfigurationItemsFromApplication({
  "body": {
    "applicationConfigurationId": "",
    "configurationIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ExportConfigurations
<p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>


```js
amazonaws_discovery.ExportConfigurations({
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDiscoverySummary
Retrieves a short summary of discovered assets.


```js
amazonaws_discovery.GetDiscoverySummary({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListConfigurations
Retrieves a list of configuration items according to criteria that you specify in a filter. The filter criteria identifies the relationship requirements.


```js
amazonaws_discovery.ListConfigurations({
  "body": {
    "configurationType": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListServerNeighbors
Retrieves a list of servers that are one network hop away from a specified server.


```js
amazonaws_discovery.ListServerNeighbors({
  "body": {
    "configurationId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartDataCollectionByAgentIds
Instructs the specified agents or connectors to start collecting data.


```js
amazonaws_discovery.StartDataCollectionByAgentIds({
  "body": {
    "agentIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartExportTask
Export the configuration data about discovered configuration items and relationships to an S3 bucket in a specified format.


```js
amazonaws_discovery.StartExportTask({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StopDataCollectionByAgentIds
Instructs the specified agents or connectors to stop collecting data.


```js
amazonaws_discovery.StopDataCollectionByAgentIds({
  "body": {
    "agentIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateApplication
Updates metadata about an application.


```js
amazonaws_discovery.UpdateApplication({
  "body": {
    "configurationId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

