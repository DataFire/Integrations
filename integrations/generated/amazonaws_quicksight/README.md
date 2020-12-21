# @datafire/amazonaws_quicksight

Client library for Amazon QuickSight

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_quicksight
```
```js
let amazonaws_quicksight = require('@datafire/amazonaws_quicksight').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon QuickSight API Reference</fullname> <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS Cloud that makes it easy to extend data and insights to every user in your organization. This API reference contains documentation for a programming interface that you can use to manage Amazon QuickSight. </p>

## Actions

### CreateNamespace



```js
amazonaws_quicksight.CreateNamespace({
  "AwsAccountId": "",
  "Namespace": "",
  "IdentityStore": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * IdentityStore **required** `string` (values: QUICKSIGHT): Specifies the type of your user identity directory. Currently, this supports users with an identity type of <code>QUICKSIGHT</code>.
  * Namespace **required** `string`: The name that you want to use to describe the new namespace.
  * Tags `array`: The tags that you want to associate with the namespace that you're creating.
    * items [Tag](#tag)

#### Output
* output [CreateNamespaceResponse](#createnamespaceresponse)

### ListAnalyses



```js
amazonaws_quicksight.ListAnalyses({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAnalysesResponse](#listanalysesresponse)

### DeleteAnalysis



```js
amazonaws_quicksight.DeleteAnalysis({
  "AwsAccountId": "",
  "AnalysisId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`
  * recovery-window-in-days `integer`
  * force-delete-without-recovery `boolean`

#### Output
* output [DeleteAnalysisResponse](#deleteanalysisresponse)

### DescribeAnalysis



```js
amazonaws_quicksight.DescribeAnalysis({
  "AwsAccountId": "",
  "AnalysisId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`

#### Output
* output [DescribeAnalysisResponse](#describeanalysisresponse)

### CreateAnalysis



```js
amazonaws_quicksight.CreateAnalysis({
  "AwsAccountId": "",
  "AnalysisId": "",
  "Name": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`
  * Name **required** `string`: A descriptive name for the analysis that you're creating. This name displays for the analysis in the QuickSight console. 
  * Parameters `object`: A list of QuickSight parameters and the list's override values.
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * Permissions `array`: <p>A structure that describes the principals and the resource-level permissions on an analysis. You can use the <code>Permissions</code> structure to grant permissions by providing a list of AWS Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN). </p> <p>To specify no permissions, omit <code>Permissions</code>.</p>
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required** `object`: The source entity of an analysis.
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * Tags `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
    * items [Tag](#tag)
  * ThemeArn `string`: The ARN for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.

#### Output
* output [CreateAnalysisResponse](#createanalysisresponse)

### UpdateAnalysis



```js
amazonaws_quicksight.UpdateAnalysis({
  "AwsAccountId": "",
  "AnalysisId": "",
  "Name": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`
  * Name **required** `string`: A descriptive name for the analysis that you're updating. This name displays for the analysis in the QuickSight console.
  * Parameters `object`: A list of QuickSight parameters and the list's override values.
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * SourceEntity **required** `object`: The source entity of an analysis.
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * ThemeArn `string`: The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.

#### Output
* output [UpdateAnalysisResponse](#updateanalysisresponse)

### DescribeAnalysisPermissions



```js
amazonaws_quicksight.DescribeAnalysisPermissions({
  "AwsAccountId": "",
  "AnalysisId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`

#### Output
* output [DescribeAnalysisPermissionsResponse](#describeanalysispermissionsresponse)

### UpdateAnalysisPermissions



```js
amazonaws_quicksight.UpdateAnalysisPermissions({
  "AwsAccountId": "",
  "AnalysisId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`
  * GrantPermissions `array`: A structure that describes the permissions to add and the principal to add them to.
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: A structure that describes the permissions to remove and the principal to remove them from.
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateAnalysisPermissionsResponse](#updateanalysispermissionsresponse)

### DeleteAccountCustomization



```js
amazonaws_quicksight.DeleteAccountCustomization({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * namespace `string`

#### Output
* output [DeleteAccountCustomizationResponse](#deleteaccountcustomizationresponse)

### DescribeAccountCustomization



```js
amazonaws_quicksight.DescribeAccountCustomization({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * namespace `string`
  * resolved `boolean`

#### Output
* output [DescribeAccountCustomizationResponse](#describeaccountcustomizationresponse)

### CreateAccountCustomization



```js
amazonaws_quicksight.CreateAccountCustomization({
  "AwsAccountId": "",
  "AccountCustomization": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * namespace `string`
  * AccountCustomization **required** `object`: The Amazon QuickSight customizations associated with your AWS account or a QuickSight namespace in a specific AWS Region.
    * DefaultTheme
  * Tags `array`: A list of the tags that you want to attach to this resource.
    * items [Tag](#tag)

#### Output
* output [CreateAccountCustomizationResponse](#createaccountcustomizationresponse)

### UpdateAccountCustomization



```js
amazonaws_quicksight.UpdateAccountCustomization({
  "AwsAccountId": "",
  "AccountCustomization": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * namespace `string`
  * AccountCustomization **required** `object`: The Amazon QuickSight customizations associated with your AWS account or a QuickSight namespace in a specific AWS Region.
    * DefaultTheme

#### Output
* output [UpdateAccountCustomizationResponse](#updateaccountcustomizationresponse)

### ListDashboards



```js
amazonaws_quicksight.ListDashboards({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDashboardsResponse](#listdashboardsresponse)

### DeleteDashboard



```js
amazonaws_quicksight.DeleteDashboard({
  "AwsAccountId": "",
  "DashboardId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * version-number `integer`

#### Output
* output [DeleteDashboardResponse](#deletedashboardresponse)

### DescribeDashboard



```js
amazonaws_quicksight.DescribeDashboard({
  "AwsAccountId": "",
  "DashboardId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * version-number `integer`
  * alias-name `string`

#### Output
* output [DescribeDashboardResponse](#describedashboardresponse)

### CreateDashboard



```js
amazonaws_quicksight.CreateDashboard({
  "AwsAccountId": "",
  "DashboardId": "",
  "Name": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * DashboardPublishOptions `object`: Dashboard publish options.
    * AdHocFilteringOption
      * AvailabilityStatus
    * ExportToCSVOption
      * AvailabilityStatus
    * SheetControlsOption
      * VisibilityState
  * Name **required** `string`: The display name of the dashboard.
  * Parameters `object`: A list of QuickSight parameters and the list's override values.
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * Permissions `array`: <p>A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN. </p> <p>To specify no permissions, omit the permissions list.</p>
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required** `object`: Dashboard source entity.
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * Tags `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
    * items [Tag](#tag)
  * ThemeArn `string`: The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same AWS account where you create the dashboard.
  * VersionDescription `string`: A description for the first version of the dashboard being created.

#### Output
* output [CreateDashboardResponse](#createdashboardresponse)

### UpdateDashboard



```js
amazonaws_quicksight.UpdateDashboard({
  "AwsAccountId": "",
  "DashboardId": "",
  "Name": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * DashboardPublishOptions `object`: Dashboard publish options.
    * AdHocFilteringOption
      * AvailabilityStatus
    * ExportToCSVOption
      * AvailabilityStatus
    * SheetControlsOption
      * VisibilityState
  * Name **required** `string`: The display name of the dashboard.
  * Parameters `object`: A list of QuickSight parameters and the list's override values.
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * SourceEntity **required** `object`: Dashboard source entity.
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * ThemeArn `string`: The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same AWS account where you create the dashboard.
  * VersionDescription `string`: A description for the first version of the dashboard being created.

#### Output
* output [UpdateDashboardResponse](#updatedashboardresponse)

### GetDashboardEmbedUrl



```js
amazonaws_quicksight.GetDashboardEmbedUrl({
  "AwsAccountId": "",
  "DashboardId": "",
  "creds-type": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * creds-type **required** `string`
  * session-lifetime `integer`
  * undo-redo-disabled `boolean`
  * reset-disabled `boolean`
  * state-persistence-enabled `boolean`
  * user-arn `string`
  * namespace `string`
  * additional-dashboard-ids `array`

#### Output
* output [GetDashboardEmbedUrlResponse](#getdashboardembedurlresponse)

### DescribeDashboardPermissions



```js
amazonaws_quicksight.DescribeDashboardPermissions({
  "AwsAccountId": "",
  "DashboardId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`

#### Output
* output [DescribeDashboardPermissionsResponse](#describedashboardpermissionsresponse)

### UpdateDashboardPermissions



```js
amazonaws_quicksight.UpdateDashboardPermissions({
  "AwsAccountId": "",
  "DashboardId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * GrantPermissions `array`: The permissions that you want to grant on this resource.
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: The permissions that you want to revoke from this resource.
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateDashboardPermissionsResponse](#updatedashboardpermissionsresponse)

### ListDashboardVersions



```js
amazonaws_quicksight.ListDashboardVersions({
  "AwsAccountId": "",
  "DashboardId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDashboardVersionsResponse](#listdashboardversionsresponse)

### UpdateDashboardPublishedVersion



```js
amazonaws_quicksight.UpdateDashboardPublishedVersion({
  "AwsAccountId": "",
  "DashboardId": "",
  "VersionNumber": 0
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DashboardId **required** `string`
  * VersionNumber **required** `integer`

#### Output
* output [UpdateDashboardPublishedVersionResponse](#updatedashboardpublishedversionresponse)

### ListDataSets



```js
amazonaws_quicksight.ListDataSets({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDataSetsResponse](#listdatasetsresponse)

### CreateDataSet



```js
amazonaws_quicksight.CreateDataSet({
  "AwsAccountId": "",
  "DataSetId": "",
  "Name": "",
  "PhysicalTableMap": {},
  "ImportMode": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ColumnGroups `array`: Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
    * items [ColumnGroup](#columngroup)
  * ColumnLevelPermissionRules `array`: A set of one or more definitions of a <code> <a>ColumnLevelPermissionRule</a> </code>.
    * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
  * DataSetId **required** `string`: An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
  * ImportMode **required** `string` (values: SPICE, DIRECT_QUERY): Indicates whether you want to import the data into SPICE.
  * LogicalTableMap `object`: Configures the combination and transformation of the data from the physical tables.
  * Name **required** `string`: The display name for the dataset.
  * Permissions `array`: A list of resource permissions on the dataset.
    * items [ResourcePermission](#resourcepermission)
  * PhysicalTableMap **required** `object`: Declares the physical tables that are available in the underlying data sources.
  * RowLevelPermissionDataSet `object`: The row-level security configuration for the dataset.
    * Arn
    * Namespace
    * PermissionPolicy
  * Tags `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
    * items [Tag](#tag)

#### Output
* output [CreateDataSetResponse](#createdatasetresponse)

### DeleteDataSet



```js
amazonaws_quicksight.DeleteDataSet({
  "AwsAccountId": "",
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`

#### Output
* output [DeleteDataSetResponse](#deletedatasetresponse)

### DescribeDataSet



```js
amazonaws_quicksight.DescribeDataSet({
  "AwsAccountId": "",
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`

#### Output
* output [DescribeDataSetResponse](#describedatasetresponse)

### UpdateDataSet



```js
amazonaws_quicksight.UpdateDataSet({
  "AwsAccountId": "",
  "DataSetId": "",
  "Name": "",
  "PhysicalTableMap": {},
  "ImportMode": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`
  * ColumnGroups `array`: Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
    * items [ColumnGroup](#columngroup)
  * ColumnLevelPermissionRules `array`: A set of one or more definitions of a <code> <a>ColumnLevelPermissionRule</a> </code>.
    * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
  * ImportMode **required** `string` (values: SPICE, DIRECT_QUERY): Indicates whether you want to import the data into SPICE.
  * LogicalTableMap `object`: Configures the combination and transformation of the data from the physical tables.
  * Name **required** `string`: The display name for the dataset.
  * PhysicalTableMap **required** `object`: Declares the physical tables that are available in the underlying data sources.
  * RowLevelPermissionDataSet `object`: The row-level security configuration for the dataset.
    * Arn
    * Namespace
    * PermissionPolicy

#### Output
* output [UpdateDataSetResponse](#updatedatasetresponse)

### ListIngestions



```js
amazonaws_quicksight.ListIngestions({
  "DataSetId": "",
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * next-token `string`
  * AwsAccountId **required** `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListIngestionsResponse](#listingestionsresponse)

### CancelIngestion



```js
amazonaws_quicksight.CancelIngestion({
  "AwsAccountId": "",
  "DataSetId": "",
  "IngestionId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`
  * IngestionId **required** `string`

#### Output
* output [CancelIngestionResponse](#cancelingestionresponse)

### DescribeIngestion



```js
amazonaws_quicksight.DescribeIngestion({
  "AwsAccountId": "",
  "DataSetId": "",
  "IngestionId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`
  * IngestionId **required** `string`

#### Output
* output [DescribeIngestionResponse](#describeingestionresponse)

### CreateIngestion



```js
amazonaws_quicksight.CreateIngestion({
  "DataSetId": "",
  "IngestionId": "",
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * DataSetId **required** `string`
  * IngestionId **required** `string`
  * AwsAccountId **required** `string`

#### Output
* output [CreateIngestionResponse](#createingestionresponse)

### DescribeDataSetPermissions



```js
amazonaws_quicksight.DescribeDataSetPermissions({
  "AwsAccountId": "",
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`

#### Output
* output [DescribeDataSetPermissionsResponse](#describedatasetpermissionsresponse)

### UpdateDataSetPermissions



```js
amazonaws_quicksight.UpdateDataSetPermissions({
  "AwsAccountId": "",
  "DataSetId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSetId **required** `string`
  * GrantPermissions `array`: The resource permissions that you want to grant to the dataset.
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: The resource permissions that you want to revoke from the dataset.
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateDataSetPermissionsResponse](#updatedatasetpermissionsresponse)

### ListDataSources



```js
amazonaws_quicksight.ListDataSources({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDataSourcesResponse](#listdatasourcesresponse)

### CreateDataSource



```js
amazonaws_quicksight.CreateDataSource({
  "AwsAccountId": "",
  "DataSourceId": "",
  "Name": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Credentials `object`: Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    * CopySourceArn
    * CredentialPair
      * AlternateDataSourceParameters
        * items [DataSourceParameters](#datasourceparameters)
      * Password **required**
      * Username **required**
  * DataSourceId **required** `string`: An ID for the data source. This ID is unique per AWS Region for each AWS account. 
  * DataSourceParameters `object`: The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    * AmazonElasticsearchParameters
      * Domain **required**
    * AthenaParameters
      * WorkGroup
    * AuroraParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AuroraPostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AwsIotAnalyticsParameters
      * DataSetName **required**
    * JiraParameters
      * SiteBaseUrl **required**
    * MariaDbParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * MySqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * OracleParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PrestoParameters
      * Catalog **required**
      * Host **required**
      * Port **required**
    * RdsParameters
      * Database **required**
      * InstanceId **required**
    * RedshiftParameters
      * ClusterId
      * Database **required**
      * Host
      * Port
    * S3Parameters
      * ManifestFileLocation **required**
        * Bucket **required**
        * Key **required**
    * ServiceNowParameters
      * SiteBaseUrl **required**
    * SnowflakeParameters
      * Database **required**
      * Host **required**
      * Warehouse **required**
    * SparkParameters
      * Host **required**
      * Port **required**
    * SqlServerParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TeradataParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TwitterParameters
      * MaxRows **required**
      * Query **required**
  * Name **required** `string`: A display name for the data source.
  * Permissions `array`: A list of resource permissions on the data source.
    * items [ResourcePermission](#resourcepermission)
  * SslProperties `object`: Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source.
    * DisableSsl
  * Tags `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
    * items [Tag](#tag)
  * Type **required** `string` (values: ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM): The type of the data source. Currently, the supported types for this operation are: <code>ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>. Use <code>ListDataSources</code> to return a list of all data sources.
  * VpcConnectionProperties `object`: VPC connection properties.
    * VpcConnectionArn

#### Output
* output [CreateDataSourceResponse](#createdatasourceresponse)

### DeleteDataSource



```js
amazonaws_quicksight.DeleteDataSource({
  "AwsAccountId": "",
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSourceId **required** `string`

#### Output
* output [DeleteDataSourceResponse](#deletedatasourceresponse)

### DescribeDataSource



```js
amazonaws_quicksight.DescribeDataSource({
  "AwsAccountId": "",
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSourceId **required** `string`

#### Output
* output [DescribeDataSourceResponse](#describedatasourceresponse)

### UpdateDataSource



```js
amazonaws_quicksight.UpdateDataSource({
  "AwsAccountId": "",
  "DataSourceId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSourceId **required** `string`
  * Credentials `object`: Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    * CopySourceArn
    * CredentialPair
      * AlternateDataSourceParameters
        * items [DataSourceParameters](#datasourceparameters)
      * Password **required**
      * Username **required**
  * DataSourceParameters `object`: The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    * AmazonElasticsearchParameters
      * Domain **required**
    * AthenaParameters
      * WorkGroup
    * AuroraParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AuroraPostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AwsIotAnalyticsParameters
      * DataSetName **required**
    * JiraParameters
      * SiteBaseUrl **required**
    * MariaDbParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * MySqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * OracleParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PrestoParameters
      * Catalog **required**
      * Host **required**
      * Port **required**
    * RdsParameters
      * Database **required**
      * InstanceId **required**
    * RedshiftParameters
      * ClusterId
      * Database **required**
      * Host
      * Port
    * S3Parameters
      * ManifestFileLocation **required**
        * Bucket **required**
        * Key **required**
    * ServiceNowParameters
      * SiteBaseUrl **required**
    * SnowflakeParameters
      * Database **required**
      * Host **required**
      * Warehouse **required**
    * SparkParameters
      * Host **required**
      * Port **required**
    * SqlServerParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TeradataParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TwitterParameters
      * MaxRows **required**
      * Query **required**
  * Name **required** `string`: A display name for the data source.
  * SslProperties `object`: Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source.
    * DisableSsl
  * VpcConnectionProperties `object`: VPC connection properties.
    * VpcConnectionArn

#### Output
* output [UpdateDataSourceResponse](#updatedatasourceresponse)

### DescribeDataSourcePermissions



```js
amazonaws_quicksight.DescribeDataSourcePermissions({
  "AwsAccountId": "",
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSourceId **required** `string`

#### Output
* output [DescribeDataSourcePermissionsResponse](#describedatasourcepermissionsresponse)

### UpdateDataSourcePermissions



```js
amazonaws_quicksight.UpdateDataSourcePermissions({
  "AwsAccountId": "",
  "DataSourceId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DataSourceId **required** `string`
  * GrantPermissions `array`: A list of resource permissions that you want to grant on the data source.
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: A list of resource permissions that you want to revoke on the data source.
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateDataSourcePermissionsResponse](#updatedatasourcepermissionsresponse)

### DeleteIAMPolicyAssignment



```js
amazonaws_quicksight.DeleteIAMPolicyAssignment({
  "AwsAccountId": "",
  "AssignmentName": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AssignmentName **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteIAMPolicyAssignmentResponse](#deleteiampolicyassignmentresponse)

### ListNamespaces



```js
amazonaws_quicksight.ListNamespaces({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListNamespacesResponse](#listnamespacesresponse)

### DeleteNamespace



```js
amazonaws_quicksight.DeleteNamespace({
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteNamespaceResponse](#deletenamespaceresponse)

### DescribeNamespace



```js
amazonaws_quicksight.DescribeNamespace({
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DescribeNamespaceResponse](#describenamespaceresponse)

### ListGroups



```js
amazonaws_quicksight.ListGroups({
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * Namespace **required** `string`

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### CreateGroup



```js
amazonaws_quicksight.CreateGroup({
  "AwsAccountId": "",
  "Namespace": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * Description `string`: A description for the group that you want to create.
  * GroupName **required** `string`: A name for the group that you want to create.

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### DeleteGroup



```js
amazonaws_quicksight.DeleteGroup({
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteGroupResponse](#deletegroupresponse)

### DescribeGroup



```js
amazonaws_quicksight.DescribeGroup({
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DescribeGroupResponse](#describegroupresponse)

### UpdateGroup



```js
amazonaws_quicksight.UpdateGroup({
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * Description `string`: The description for the group that you want to update.

#### Output
* output [UpdateGroupResponse](#updategroupresponse)

### ListGroupMemberships



```js
amazonaws_quicksight.ListGroupMemberships({
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * next-token `string`
  * max-results `integer`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [ListGroupMembershipsResponse](#listgroupmembershipsresponse)

### DeleteGroupMembership



```js
amazonaws_quicksight.DeleteGroupMembership({
  "MemberName": "",
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * MemberName **required** `string`
  * GroupName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteGroupMembershipResponse](#deletegroupmembershipresponse)

### CreateGroupMembership



```js
amazonaws_quicksight.CreateGroupMembership({
  "MemberName": "",
  "GroupName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * MemberName **required** `string`
  * GroupName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [CreateGroupMembershipResponse](#creategroupmembershipresponse)

### ListIAMPolicyAssignments



```js
amazonaws_quicksight.ListIAMPolicyAssignments({
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * next-token `string`
  * max-results `integer`
  * AssignmentStatus `string` (values: ENABLED, DRAFT, DISABLED): The status of the assignments.

#### Output
* output [ListIAMPolicyAssignmentsResponse](#listiampolicyassignmentsresponse)

### CreateIAMPolicyAssignment



```js
amazonaws_quicksight.CreateIAMPolicyAssignment({
  "AwsAccountId": "",
  "Namespace": "",
  "AssignmentName": "",
  "AssignmentStatus": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * AssignmentName **required** `string`: The name of the assignment, also called a rule. It must be unique within an AWS account.
  * AssignmentStatus **required** `string` (values: ENABLED, DRAFT, DISABLED): <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul>
  * Identities `object`: The QuickSight users, groups, or both that you want to assign the policy to.
  * PolicyArn `string`: The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.

#### Output
* output [CreateIAMPolicyAssignmentResponse](#createiampolicyassignmentresponse)

### DescribeIAMPolicyAssignment



```js
amazonaws_quicksight.DescribeIAMPolicyAssignment({
  "AwsAccountId": "",
  "AssignmentName": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AssignmentName **required** `string`
  * Namespace **required** `string`

#### Output
* output [DescribeIAMPolicyAssignmentResponse](#describeiampolicyassignmentresponse)

### UpdateIAMPolicyAssignment



```js
amazonaws_quicksight.UpdateIAMPolicyAssignment({
  "AwsAccountId": "",
  "AssignmentName": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AssignmentName **required** `string`
  * Namespace **required** `string`
  * AssignmentStatus `string` (values: ENABLED, DRAFT, DISABLED): <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul>
  * Identities `object`: The QuickSight users, groups, or both that you want to assign the policy to.
  * PolicyArn `string`: The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.

#### Output
* output [UpdateIAMPolicyAssignmentResponse](#updateiampolicyassignmentresponse)

### DeleteUserByPrincipalId



```js
amazonaws_quicksight.DeleteUserByPrincipalId({
  "PrincipalId": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * PrincipalId **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteUserByPrincipalIdResponse](#deleteuserbyprincipalidresponse)

### ListUsers



```js
amazonaws_quicksight.ListUsers({
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * Namespace **required** `string`

#### Output
* output [ListUsersResponse](#listusersresponse)

### RegisterUser



```js
amazonaws_quicksight.RegisterUser({
  "AwsAccountId": "",
  "Namespace": "",
  "IdentityType": "",
  "Email": "",
  "UserRole": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * CustomPermissionsName `string`: <p>(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:</p> <ul> <li> <p>Create and update data sources</p> </li> <li> <p>Create and update datasets</p> </li> <li> <p>Create and update email reports</p> </li> <li> <p>Subscribe to email reports</p> </li> </ul> <p>To add custom permissions to an existing user, use <code> <a>UpdateUser</a> </code> instead.</p> <p>A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of permissions to a QuickSight user. </p> <p>QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader).</p> <p>This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).</p>
  * Email **required** `string`: The email address of the user that you want to register.
  * IamArn `string`: The ARN of the IAM user or role that you are registering with Amazon QuickSight. 
  * IdentityType **required** `string` (values: IAM, QUICKSIGHT): <p>Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:</p> <ul> <li> <p> <code>IAM</code>: A user whose identity maps to an existing IAM user or role. </p> </li> <li> <p> <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by Amazon QuickSight. </p> </li> </ul>
  * SessionName `string`: You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see <a href="https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html"> <code>assume-role</code> </a> in the <i>AWS CLI Reference.</i> 
  * UserName `string`: The Amazon QuickSight user name that you want to create for the user you are registering.
  * UserRole **required** `string` (values: ADMIN, AUTHOR, READER, RESTRICTED_AUTHOR, RESTRICTED_READER): <p>The Amazon QuickSight role for the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> <li> <p> <code>RESTRICTED_READER</code>: This role isn't currently available for use.</p> </li> <li> <p> <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for use.</p> </li> </ul>

#### Output
* output [RegisterUserResponse](#registeruserresponse)

### DeleteUser



```js
amazonaws_quicksight.DeleteUser({
  "UserName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DescribeUser



```js
amazonaws_quicksight.DescribeUser({
  "UserName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### UpdateUser



```js
amazonaws_quicksight.UpdateUser({
  "UserName": "",
  "AwsAccountId": "",
  "Namespace": "",
  "Email": "",
  "Role": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * CustomPermissionsName `string`: <p>(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:</p> <ul> <li> <p>Create and update data sources</p> </li> <li> <p>Create and update datasets</p> </li> <li> <p>Create and update email reports</p> </li> <li> <p>Subscribe to email reports</p> </li> </ul> <p>A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of permissions to a QuickSight user. </p> <p>QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader).</p> <p>This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).</p>
  * Email **required** `string`: The email address of the user that you want to update.
  * Role **required** `string` (values: ADMIN, AUTHOR, READER, RESTRICTED_AUTHOR, RESTRICTED_READER): <p>The Amazon QuickSight role of the user. The role can be one of the following default security cohorts:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> </ul> <p>The name of the QuickSight role is invisible to the user except for the console screens dealing with permissions.</p>
  * UnapplyCustomPermissions `boolean`: A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### ListUserGroups



```js
amazonaws_quicksight.ListUserGroups({
  "UserName": "",
  "AwsAccountId": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * UserName **required** `string`
  * AwsAccountId **required** `string`
  * Namespace **required** `string`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListUserGroupsResponse](#listusergroupsresponse)

### ListIAMPolicyAssignmentsForUser



```js
amazonaws_quicksight.ListIAMPolicyAssignmentsForUser({
  "AwsAccountId": "",
  "UserName": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * UserName **required** `string`
  * next-token `string`
  * max-results `integer`
  * Namespace **required** `string`

#### Output
* output [ListIAMPolicyAssignmentsForUserResponse](#listiampolicyassignmentsforuserresponse)

### RestoreAnalysis



```js
amazonaws_quicksight.RestoreAnalysis({
  "AwsAccountId": "",
  "AnalysisId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * AnalysisId **required** `string`

#### Output
* output [RestoreAnalysisResponse](#restoreanalysisresponse)

### SearchAnalyses



```js
amazonaws_quicksight.SearchAnalyses({
  "AwsAccountId": "",
  "Filters": []
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * Filters **required** `array`: The structure for the search filters that you want to apply to your search. 
    * items [AnalysisSearchFilter](#analysissearchfilter)
  * MaxResults `integer`: The maximum number of results to return.
  * NextToken `string`: A pagination token that can be used in a subsequent request.

#### Output
* output [SearchAnalysesResponse](#searchanalysesresponse)

### SearchDashboards



```js
amazonaws_quicksight.SearchDashboards({
  "AwsAccountId": "",
  "Filters": []
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * Filters **required** `array`: The filters to apply to the search. Currently, you can search only by user name, for example, <code>"Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]</code> 
    * items [DashboardSearchFilter](#dashboardsearchfilter)
  * MaxResults `integer`: The maximum number of results to be returned per request.
  * NextToken `string`: The token for the next set of results, or null if there are no more results.

#### Output
* output [SearchDashboardsResponse](#searchdashboardsresponse)

### GetSessionEmbedUrl



```js
amazonaws_quicksight.GetSessionEmbedUrl({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * entry-point `string`
  * session-lifetime `integer`
  * user-arn `string`

#### Output
* output [GetSessionEmbedUrlResponse](#getsessionembedurlresponse)

### DescribeAccountSettings



```js
amazonaws_quicksight.DescribeAccountSettings({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`

#### Output
* output [DescribeAccountSettingsResponse](#describeaccountsettingsresponse)

### UpdateAccountSettings



```js
amazonaws_quicksight.UpdateAccountSettings({
  "AwsAccountId": "",
  "DefaultNamespace": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * DefaultNamespace **required** `string`: The default namespace for this AWS account. Currently, the default is <code>default</code>. AWS Identity and Access Management (IAM) users that register for the first time with QuickSight provide an email that becomes associated with the default namespace.
  * NotificationEmail `string`: The email address that you want QuickSight to send notifications to regarding your AWS account or QuickSight subscription.

#### Output
* output [UpdateAccountSettingsResponse](#updateaccountsettingsresponse)

### ListTemplates



```js
amazonaws_quicksight.ListTemplates({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-result `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListTemplatesResponse](#listtemplatesresponse)

### DeleteTemplate



```js
amazonaws_quicksight.DeleteTemplate({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * version-number `integer`

#### Output
* output [DeleteTemplateResponse](#deletetemplateresponse)

### DescribeTemplate



```js
amazonaws_quicksight.DescribeTemplate({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * version-number `integer`
  * alias-name `string`

#### Output
* output [DescribeTemplateResponse](#describetemplateresponse)

### CreateTemplate



```js
amazonaws_quicksight.CreateTemplate({
  "AwsAccountId": "",
  "TemplateId": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * Name `string`: A display name for the template.
  * Permissions `array`: A list of resource permissions to be set on the template. 
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required** `object`: The source entity of the template.
    * SourceAnalysis
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
    * SourceTemplate
      * Arn **required**
  * Tags `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
    * items [Tag](#tag)
  * VersionDescription `string`: A description of the current template version being created. This API operation creates the first version of the template. Every time <code>UpdateTemplate</code> is called, a new version is created. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.

#### Output
* output [CreateTemplateResponse](#createtemplateresponse)

### UpdateTemplate



```js
amazonaws_quicksight.UpdateTemplate({
  "AwsAccountId": "",
  "TemplateId": "",
  "SourceEntity": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * Name `string`: The name for the template.
  * SourceEntity **required** `object`: The source entity of the template.
    * SourceAnalysis
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
    * SourceTemplate
      * Arn **required**
  * VersionDescription `string`: A description of the current template version that is being updated. Every time you call <code>UpdateTemplate</code>, you create a new version of the template. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.

#### Output
* output [UpdateTemplateResponse](#updatetemplateresponse)

### ListTemplateAliases



```js
amazonaws_quicksight.ListTemplateAliases({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * next-token `string`
  * max-result `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListTemplateAliasesResponse](#listtemplatealiasesresponse)

### DeleteTemplateAlias



```js
amazonaws_quicksight.DeleteTemplateAlias({
  "AwsAccountId": "",
  "TemplateId": "",
  "AliasName": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * AliasName **required** `string`

#### Output
* output [DeleteTemplateAliasResponse](#deletetemplatealiasresponse)

### DescribeTemplateAlias



```js
amazonaws_quicksight.DescribeTemplateAlias({
  "AwsAccountId": "",
  "TemplateId": "",
  "AliasName": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * AliasName **required** `string`

#### Output
* output [DescribeTemplateAliasResponse](#describetemplatealiasresponse)

### CreateTemplateAlias



```js
amazonaws_quicksight.CreateTemplateAlias({
  "AwsAccountId": "",
  "TemplateId": "",
  "AliasName": "",
  "TemplateVersionNumber": 0
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * AliasName **required** `string`
  * TemplateVersionNumber **required** `integer`: The version number of the template.

#### Output
* output [CreateTemplateAliasResponse](#createtemplatealiasresponse)

### UpdateTemplateAlias



```js
amazonaws_quicksight.UpdateTemplateAlias({
  "AwsAccountId": "",
  "TemplateId": "",
  "AliasName": "",
  "TemplateVersionNumber": 0
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * AliasName **required** `string`
  * TemplateVersionNumber **required** `integer`: The version number of the template.

#### Output
* output [UpdateTemplateAliasResponse](#updatetemplatealiasresponse)

### DescribeTemplatePermissions



```js
amazonaws_quicksight.DescribeTemplatePermissions({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`

#### Output
* output [DescribeTemplatePermissionsResponse](#describetemplatepermissionsresponse)

### UpdateTemplatePermissions



```js
amazonaws_quicksight.UpdateTemplatePermissions({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * GrantPermissions `array`: A list of resource permissions to be granted on the template. 
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: A list of resource permissions to be revoked from the template. 
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateTemplatePermissionsResponse](#updatetemplatepermissionsresponse)

### ListTemplateVersions



```js
amazonaws_quicksight.ListTemplateVersions({
  "AwsAccountId": "",
  "TemplateId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * TemplateId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListTemplateVersionsResponse](#listtemplateversionsresponse)

### ListThemes



```js
amazonaws_quicksight.ListThemes({
  "AwsAccountId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * next-token `string`
  * max-results `integer`
  * type `string`

#### Output
* output [ListThemesResponse](#listthemesresponse)

### DeleteTheme



```js
amazonaws_quicksight.DeleteTheme({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * version-number `integer`

#### Output
* output [DeleteThemeResponse](#deletethemeresponse)

### DescribeTheme



```js
amazonaws_quicksight.DescribeTheme({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * version-number `integer`
  * alias-name `string`

#### Output
* output [DescribeThemeResponse](#describethemeresponse)

### CreateTheme



```js
amazonaws_quicksight.CreateTheme({
  "AwsAccountId": "",
  "ThemeId": "",
  "Name": "",
  "BaseThemeId": "",
  "Configuration": {}
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * BaseThemeId **required** `string`: The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use <code>ListThemes</code> or choose <b>Themes</b> from within a QuickSight analysis. 
  * Configuration **required** `object`: The theme configuration. This configuration contains all of the display properties for a theme.
    * DataColorPalette
      * Colors
        * items [HexColor](#hexcolor)
      * EmptyFillColor
      * MinMaxGradient
        * items [HexColor](#hexcolor)
    * Sheet
      * Tile
        * Border
          * Show
      * TileLayout
        * Gutter
          * Show
        * Margin
          * Show
    * UIColorPalette
      * Accent
      * AccentForeground
      * Danger
      * DangerForeground
      * Dimension
      * DimensionForeground
      * Measure
      * MeasureForeground
      * PrimaryBackground
      * PrimaryForeground
      * SecondaryBackground
      * SecondaryForeground
      * Success
      * SuccessForeground
      * Warning
      * WarningForeground
  * Name **required** `string`: A display name for the theme.
  * Permissions `array`: A valid grouping of resource permissions to apply to the new theme. 
    * items [ResourcePermission](#resourcepermission)
  * Tags `array`: A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
    * items [Tag](#tag)
  * VersionDescription `string`: A description of the first version of the theme that you're creating. Every time <code>UpdateTheme</code> is called, a new version is created. Each version of the theme has a description of the version in the <code>VersionDescription</code> field.

#### Output
* output [CreateThemeResponse](#createthemeresponse)

### UpdateTheme



```js
amazonaws_quicksight.UpdateTheme({
  "AwsAccountId": "",
  "ThemeId": "",
  "BaseThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * BaseThemeId **required** `string`: The theme ID, defined by Amazon QuickSight, that a custom theme inherits from. All themes initially inherit from a default QuickSight theme.
  * Configuration `object`: The theme configuration. This configuration contains all of the display properties for a theme.
    * DataColorPalette
      * Colors
        * items [HexColor](#hexcolor)
      * EmptyFillColor
      * MinMaxGradient
        * items [HexColor](#hexcolor)
    * Sheet
      * Tile
        * Border
          * Show
      * TileLayout
        * Gutter
          * Show
        * Margin
          * Show
    * UIColorPalette
      * Accent
      * AccentForeground
      * Danger
      * DangerForeground
      * Dimension
      * DimensionForeground
      * Measure
      * MeasureForeground
      * PrimaryBackground
      * PrimaryForeground
      * SecondaryBackground
      * SecondaryForeground
      * Success
      * SuccessForeground
      * Warning
      * WarningForeground
  * Name `string`: The name for the theme.
  * VersionDescription `string`: A description of the theme version that you're updating Every time that you call <code>UpdateTheme</code>, you create a new version of the theme. Each version of the theme maintains a description of the version in <code>VersionDescription</code>.

#### Output
* output [UpdateThemeResponse](#updatethemeresponse)

### ListThemeAliases



```js
amazonaws_quicksight.ListThemeAliases({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * next-token `string`
  * max-result `integer`

#### Output
* output [ListThemeAliasesResponse](#listthemealiasesresponse)

### DeleteThemeAlias



```js
amazonaws_quicksight.DeleteThemeAlias({
  "AwsAccountId": "",
  "ThemeId": "",
  "AliasName": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * AliasName **required** `string`

#### Output
* output [DeleteThemeAliasResponse](#deletethemealiasresponse)

### DescribeThemeAlias



```js
amazonaws_quicksight.DescribeThemeAlias({
  "AwsAccountId": "",
  "ThemeId": "",
  "AliasName": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * AliasName **required** `string`

#### Output
* output [DescribeThemeAliasResponse](#describethemealiasresponse)

### CreateThemeAlias



```js
amazonaws_quicksight.CreateThemeAlias({
  "AwsAccountId": "",
  "ThemeId": "",
  "AliasName": "",
  "ThemeVersionNumber": 0
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * AliasName **required** `string`
  * ThemeVersionNumber **required** `integer`: The version number of the theme.

#### Output
* output [CreateThemeAliasResponse](#createthemealiasresponse)

### UpdateThemeAlias



```js
amazonaws_quicksight.UpdateThemeAlias({
  "AwsAccountId": "",
  "ThemeId": "",
  "AliasName": "",
  "ThemeVersionNumber": 0
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * AliasName **required** `string`
  * ThemeVersionNumber **required** `integer`: The version number of the theme that the alias should reference.

#### Output
* output [UpdateThemeAliasResponse](#updatethemealiasresponse)

### DescribeThemePermissions



```js
amazonaws_quicksight.DescribeThemePermissions({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`

#### Output
* output [DescribeThemePermissionsResponse](#describethemepermissionsresponse)

### UpdateThemePermissions



```js
amazonaws_quicksight.UpdateThemePermissions({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * GrantPermissions `array`: A list of resource permissions to be granted for the theme.
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions `array`: A list of resource permissions to be revoked from the theme.
    * items [ResourcePermission](#resourcepermission)

#### Output
* output [UpdateThemePermissionsResponse](#updatethemepermissionsresponse)

### ListThemeVersions



```js
amazonaws_quicksight.ListThemeVersions({
  "AwsAccountId": "",
  "ThemeId": ""
}, context)
```

#### Input
* input `object`
  * AwsAccountId **required** `string`
  * ThemeId **required** `string`
  * next-token `string`
  * max-results `integer`

#### Output
* output [ListThemeVersionsResponse](#listthemeversionsresponse)

### ListTagsForResource



```js
amazonaws_quicksight.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_quicksight.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `array`: Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_quicksight.UntagResource({
  "ResourceArn": "",
  "keys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * keys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### AccountCustomization
* AccountCustomization `object`: The Amazon QuickSight customizations associated with your AWS account or a QuickSight namespace in a specific AWS Region.
  * DefaultTheme

### AccountSettings
* AccountSettings `object`: The QuickSight settings associated with your AWS account.
  * AccountName
  * DefaultNamespace
  * Edition
  * NotificationEmail

### ActionList
* ActionList `array`
  * items [String](#string)

### ActiveIAMPolicyAssignment
* ActiveIAMPolicyAssignment `object`: The active AWS Identity and Access Management (IAM) policy assignment.
  * AssignmentName
  * PolicyArn

### ActiveIAMPolicyAssignmentList
* ActiveIAMPolicyAssignmentList `array`
  * items [ActiveIAMPolicyAssignment](#activeiampolicyassignment)

### AdHocFilteringOption
* AdHocFilteringOption `object`: Ad hoc (one-time) filtering option.
  * AvailabilityStatus

### AdditionalDashboardIdList
* AdditionalDashboardIdList `array`
  * items [RestrictiveResourceId](#restrictiveresourceid)

### AliasName
* AliasName `string`

### AmazonElasticsearchParameters
* AmazonElasticsearchParameters `object`: Amazon Elasticsearch Service parameters.
  * Domain **required**

### Analysis
* Analysis `object`: Metadata structure for an analysis in Amazon QuickSight
  * AnalysisId
  * Arn
  * CreatedTime
  * DataSetArns
    * items [Arn](#arn)
  * Errors
    * items [AnalysisError](#analysiserror)
  * LastUpdatedTime
  * Name
  * Sheets
    * items [Sheet](#sheet)
  * Status
  * ThemeArn

### AnalysisError
* AnalysisError `object`: A metadata error structure for an analysis.
  * Message
  * Type

### AnalysisErrorList
* AnalysisErrorList `array`
  * items [AnalysisError](#analysiserror)

### AnalysisErrorType
* AnalysisErrorType `string` (values: ACCESS_DENIED, SOURCE_NOT_FOUND, DATA_SET_NOT_FOUND, INTERNAL_FAILURE, PARAMETER_VALUE_INCOMPATIBLE, PARAMETER_TYPE_INVALID, PARAMETER_NOT_FOUND, COLUMN_TYPE_MISMATCH, COLUMN_GEOGRAPHIC_ROLE_MISMATCH, COLUMN_REPLACEMENT_MISSING)

### AnalysisFilterAttribute
* AnalysisFilterAttribute `string` (values: QUICKSIGHT_USER)

### AnalysisName
* AnalysisName `string`

### AnalysisSearchFilter
* AnalysisSearchFilter `object`: A filter that you apply when searching for one or more analyses.
  * Name
  * Operator
  * Value

### AnalysisSearchFilterList
* AnalysisSearchFilterList `array`
  * items [AnalysisSearchFilter](#analysissearchfilter)

### AnalysisSourceEntity
* AnalysisSourceEntity `object`: The source entity of an analysis.
  * SourceTemplate
    * Arn **required**
    * DataSetReferences **required**
      * items [DataSetReference](#datasetreference)

### AnalysisSourceTemplate
* AnalysisSourceTemplate `object`: The source template of an analysis.
  * Arn **required**
  * DataSetReferences **required**
    * items [DataSetReference](#datasetreference)

### AnalysisSummary
* AnalysisSummary `object`: The summary metadata that describes an analysis.
  * AnalysisId
  * Arn
  * CreatedTime
  * LastUpdatedTime
  * Name
  * Status

### AnalysisSummaryList
* AnalysisSummaryList `array`
  * items [AnalysisSummary](#analysissummary)

### Arn
* Arn `string`

### AssignmentStatus
* AssignmentStatus `string` (values: ENABLED, DRAFT, DISABLED)

### AthenaParameters
* AthenaParameters `object`: Amazon Athena parameters.
  * WorkGroup

### AuroraParameters
* AuroraParameters `object`: Amazon Aurora parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### AuroraPostgreSqlParameters
* AuroraPostgreSqlParameters `object`: Amazon Aurora with PostgreSQL compatibility parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### AwsAccountId
* AwsAccountId `string`

### AwsAndAccountId
* AwsAndAccountId `string`

### AwsIotAnalyticsParameters
* AwsIotAnalyticsParameters `object`: AWS IoT Analytics parameters.
  * DataSetName **required**

### Boolean
* Boolean `boolean`

### BorderStyle
* BorderStyle `object`: The display options for tile borders for visuals.
  * Show

### CalculatedColumn
* CalculatedColumn `object`: A calculated column for a dataset.
  * ColumnId **required**
  * ColumnName **required**
  * Expression **required**

### CalculatedColumnList
* CalculatedColumnList `array`
  * items [CalculatedColumn](#calculatedcolumn)

### CancelIngestionRequest
* CancelIngestionRequest `object`

### CancelIngestionResponse
* CancelIngestionResponse `object`
  * Arn
  * IngestionId
  * RequestId
  * Status

### CastColumnTypeOperation
* CastColumnTypeOperation `object`: A transform operation that casts a column to a different type.
  * ColumnName **required**
  * Format
  * NewColumnType **required**

### Catalog
* Catalog `string`

### ClusterId
* ClusterId `string`

### ColorList
* ColorList `array`
  * items [HexColor](#hexcolor)

### ColumnDataType
* ColumnDataType `string` (values: STRING, INTEGER, DECIMAL, DATETIME)

### ColumnDescription
* ColumnDescription `object`: Metadata that contains a description for a column.
  * Text

### ColumnDescriptiveText
* ColumnDescriptiveText `string`

### ColumnGroup
* ColumnGroup `object`: Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * GeoSpatialColumnGroup
    * Columns **required**
      * items [ColumnName](#columnname)
    * CountryCode **required**
    * Name **required**

### ColumnGroupColumnSchema
* ColumnGroupColumnSchema `object`: A structure describing the name, data type, and geographic role of the columns.
  * Name

### ColumnGroupColumnSchemaList
* ColumnGroupColumnSchemaList `array`
  * items [ColumnGroupColumnSchema](#columngroupcolumnschema)

### ColumnGroupList
* ColumnGroupList `array`
  * items [ColumnGroup](#columngroup)

### ColumnGroupName
* ColumnGroupName `string`

### ColumnGroupSchema
* ColumnGroupSchema `object`: The column group schema.
  * ColumnGroupColumnSchemaList
    * items [ColumnGroupColumnSchema](#columngroupcolumnschema)
  * Name

### ColumnGroupSchemaList
* ColumnGroupSchemaList `array`
  * items [ColumnGroupSchema](#columngroupschema)

### ColumnId
* ColumnId `string`

### ColumnLevelPermissionRule
* ColumnLevelPermissionRule `object`: A rule defined to grant access on one or more restricted columns. Each dataset can have multiple rules. To create a restricted column, you add it to one or more rules. Each rule must contain at least one column and at least one user or group. To be able to see a restricted column, a user or group needs to be added to a rule for that column.
  * ColumnNames
    * items [String](#string)
  * Principals
    * items [String](#string)

### ColumnLevelPermissionRuleList
* ColumnLevelPermissionRuleList `array`
  * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)

### ColumnList
* ColumnList `array`
  * items [ColumnName](#columnname)

### ColumnName
* ColumnName `string`

### ColumnNameList
* ColumnNameList `array`
  * items [String](#string)

### ColumnSchema
* ColumnSchema `object`: The column schema.
  * DataType
  * GeographicRole
  * Name

### ColumnSchemaList
* ColumnSchemaList `array`
  * items [ColumnSchema](#columnschema)

### ColumnTag
* ColumnTag `object`: A tag for a column in a <a>TagColumnOperation</a> structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * ColumnDescription
    * Text
  * ColumnGeographicRole

### ColumnTagList
* ColumnTagList `array`
  * items [ColumnTag](#columntag)

### ConcurrentUpdatingException


### ConflictException


### CopySourceArn
* CopySourceArn `string`

### CreateAccountCustomizationRequest
* CreateAccountCustomizationRequest `object`
  * AccountCustomization **required**
    * DefaultTheme
  * Tags
    * items [Tag](#tag)

### CreateAccountCustomizationResponse
* CreateAccountCustomizationResponse `object`
  * AccountCustomization
    * DefaultTheme
  * Arn
  * AwsAccountId
  * Namespace
  * RequestId
  * Status

### CreateAnalysisRequest
* CreateAnalysisRequest `object`
  * Name **required**
  * Parameters
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required**
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * Tags
    * items [Tag](#tag)
  * ThemeArn

### CreateAnalysisResponse
* CreateAnalysisResponse `object`
  * AnalysisId
  * Arn
  * CreationStatus
  * RequestId
  * Status

### CreateColumnsOperation
* CreateColumnsOperation `object`: A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure.
  * Columns **required**
    * items [CalculatedColumn](#calculatedcolumn)

### CreateDashboardRequest
* CreateDashboardRequest `object`
  * DashboardPublishOptions
    * AdHocFilteringOption
      * AvailabilityStatus
    * ExportToCSVOption
      * AvailabilityStatus
    * SheetControlsOption
      * VisibilityState
  * Name **required**
  * Parameters
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required**
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * Tags
    * items [Tag](#tag)
  * ThemeArn
  * VersionDescription

### CreateDashboardResponse
* CreateDashboardResponse `object`
  * Arn
  * CreationStatus
  * DashboardId
  * RequestId
  * Status
  * VersionArn

### CreateDataSetRequest
* CreateDataSetRequest `object`
  * ColumnGroups
    * items [ColumnGroup](#columngroup)
  * ColumnLevelPermissionRules
    * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
  * DataSetId **required**
  * ImportMode **required**
  * LogicalTableMap
  * Name **required**
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * PhysicalTableMap **required**
  * RowLevelPermissionDataSet
    * Arn **required**
    * Namespace
    * PermissionPolicy **required**
  * Tags
    * items [Tag](#tag)

### CreateDataSetResponse
* CreateDataSetResponse `object`
  * Arn
  * DataSetId
  * IngestionArn
  * IngestionId
  * RequestId
  * Status

### CreateDataSourceRequest
* CreateDataSourceRequest `object`
  * Credentials
    * CopySourceArn
    * CredentialPair
      * AlternateDataSourceParameters
        * items [DataSourceParameters](#datasourceparameters)
      * Password **required**
      * Username **required**
  * DataSourceId **required**
  * DataSourceParameters
    * AmazonElasticsearchParameters
      * Domain **required**
    * AthenaParameters
      * WorkGroup
    * AuroraParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AuroraPostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AwsIotAnalyticsParameters
      * DataSetName **required**
    * JiraParameters
      * SiteBaseUrl **required**
    * MariaDbParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * MySqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * OracleParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PrestoParameters
      * Catalog **required**
      * Host **required**
      * Port **required**
    * RdsParameters
      * Database **required**
      * InstanceId **required**
    * RedshiftParameters
      * ClusterId
      * Database **required**
      * Host
      * Port
    * S3Parameters
      * ManifestFileLocation **required**
        * Bucket **required**
        * Key **required**
    * ServiceNowParameters
      * SiteBaseUrl **required**
    * SnowflakeParameters
      * Database **required**
      * Host **required**
      * Warehouse **required**
    * SparkParameters
      * Host **required**
      * Port **required**
    * SqlServerParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TeradataParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TwitterParameters
      * MaxRows **required**
      * Query **required**
  * Name **required**
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * SslProperties
    * DisableSsl
  * Tags
    * items [Tag](#tag)
  * Type **required**
  * VpcConnectionProperties
    * VpcConnectionArn **required**

### CreateDataSourceResponse
* CreateDataSourceResponse `object`
  * Arn
  * CreationStatus
  * DataSourceId
  * RequestId
  * Status

### CreateGroupMembershipRequest
* CreateGroupMembershipRequest `object`

### CreateGroupMembershipResponse
* CreateGroupMembershipResponse `object`
  * GroupMember
    * Arn
    * MemberName
  * RequestId
  * Status

### CreateGroupRequest
* CreateGroupRequest `object`: The request object for this operation. 
  * Description
  * GroupName **required**

### CreateGroupResponse
* CreateGroupResponse `object`: The response object for this operation.
  * Group
    * Arn
    * Description
    * GroupName
    * PrincipalId
  * RequestId
  * Status

### CreateIAMPolicyAssignmentRequest
* CreateIAMPolicyAssignmentRequest `object`
  * AssignmentName **required**
  * AssignmentStatus **required**
  * Identities
  * PolicyArn

### CreateIAMPolicyAssignmentResponse
* CreateIAMPolicyAssignmentResponse `object`
  * AssignmentId
  * AssignmentName
  * AssignmentStatus
  * Identities
  * PolicyArn
  * RequestId
  * Status

### CreateIngestionRequest
* CreateIngestionRequest `object`

### CreateIngestionResponse
* CreateIngestionResponse `object`
  * Arn
  * IngestionId
  * IngestionStatus
  * RequestId
  * Status

### CreateNamespaceRequest
* CreateNamespaceRequest `object`
  * IdentityStore **required**
  * Namespace **required**
  * Tags
    * items [Tag](#tag)

### CreateNamespaceResponse
* CreateNamespaceResponse `object`
  * Arn
  * CapacityRegion
  * CreationStatus
  * IdentityStore
  * Name
  * RequestId
  * Status

### CreateTemplateAliasRequest
* CreateTemplateAliasRequest `object`
  * TemplateVersionNumber **required**

### CreateTemplateAliasResponse
* CreateTemplateAliasResponse `object`
  * RequestId
  * Status
  * TemplateAlias
    * AliasName
    * Arn
    * TemplateVersionNumber

### CreateTemplateRequest
* CreateTemplateRequest `object`
  * Name
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * SourceEntity **required**
    * SourceAnalysis
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
    * SourceTemplate
      * Arn **required**
  * Tags
    * items [Tag](#tag)
  * VersionDescription

### CreateTemplateResponse
* CreateTemplateResponse `object`
  * Arn
  * CreationStatus
  * RequestId
  * Status
  * TemplateId
  * VersionArn

### CreateThemeAliasRequest
* CreateThemeAliasRequest `object`
  * ThemeVersionNumber **required**

### CreateThemeAliasResponse
* CreateThemeAliasResponse `object`
  * RequestId
  * Status
  * ThemeAlias
    * AliasName
    * Arn
    * ThemeVersionNumber

### CreateThemeRequest
* CreateThemeRequest `object`
  * BaseThemeId **required**
  * Configuration **required**
    * DataColorPalette
      * Colors
        * items [HexColor](#hexcolor)
      * EmptyFillColor
      * MinMaxGradient
        * items [HexColor](#hexcolor)
    * Sheet
      * Tile
        * Border
          * Show
      * TileLayout
        * Gutter
          * Show
        * Margin
          * Show
    * UIColorPalette
      * Accent
      * AccentForeground
      * Danger
      * DangerForeground
      * Dimension
      * DimensionForeground
      * Measure
      * MeasureForeground
      * PrimaryBackground
      * PrimaryForeground
      * SecondaryBackground
      * SecondaryForeground
      * Success
      * SuccessForeground
      * Warning
      * WarningForeground
  * Name **required**
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * Tags
    * items [Tag](#tag)
  * VersionDescription

### CreateThemeResponse
* CreateThemeResponse `object`
  * Arn
  * CreationStatus
  * RequestId
  * Status
  * ThemeId
  * VersionArn

### CredentialPair
* CredentialPair `object`: The combination of user name and password that are used as credentials.
  * AlternateDataSourceParameters
    * items [DataSourceParameters](#datasourceparameters)
  * Password **required**
  * Username **required**

### CustomSql
* CustomSql `object`: A physical table type built from the results of the custom SQL query.
  * Columns
    * items [InputColumn](#inputcolumn)
  * DataSourceArn **required**
  * Name **required**
  * SqlQuery **required**

### CustomSqlName
* CustomSqlName `string`

### Dashboard
* Dashboard `object`: Dashboard.
  * Arn
  * CreatedTime
  * DashboardId
  * LastPublishedTime
  * LastUpdatedTime
  * Name
  * Version
    * Arn
    * CreatedTime
    * DataSetArns
      * items [Arn](#arn)
    * Description
    * Errors
      * items [DashboardError](#dashboarderror)
    * Sheets
      * items [Sheet](#sheet)
    * SourceEntityArn
    * Status
    * ThemeArn
    * VersionNumber

### DashboardBehavior
* DashboardBehavior `string` (values: ENABLED, DISABLED)

### DashboardError
* DashboardError `object`: Dashboard error.
  * Message
  * Type

### DashboardErrorList
* DashboardErrorList `array`
  * items [DashboardError](#dashboarderror)

### DashboardErrorType
* DashboardErrorType `string` (values: ACCESS_DENIED, SOURCE_NOT_FOUND, DATA_SET_NOT_FOUND, INTERNAL_FAILURE, PARAMETER_VALUE_INCOMPATIBLE, PARAMETER_TYPE_INVALID, PARAMETER_NOT_FOUND, COLUMN_TYPE_MISMATCH, COLUMN_GEOGRAPHIC_ROLE_MISMATCH, COLUMN_REPLACEMENT_MISSING)

### DashboardFilterAttribute
* DashboardFilterAttribute `string` (values: QUICKSIGHT_USER)

### DashboardName
* DashboardName `string`

### DashboardPublishOptions
* DashboardPublishOptions `object`: Dashboard publish options.
  * AdHocFilteringOption
    * AvailabilityStatus
  * ExportToCSVOption
    * AvailabilityStatus
  * SheetControlsOption
    * VisibilityState

### DashboardSearchFilter
* DashboardSearchFilter `object`: A filter that you apply when searching for dashboards. 
  * Name
  * Operator **required**
  * Value

### DashboardSearchFilterList
* DashboardSearchFilterList `array`
  * items [DashboardSearchFilter](#dashboardsearchfilter)

### DashboardSourceEntity
* DashboardSourceEntity `object`: Dashboard source entity.
  * SourceTemplate
    * Arn **required**
    * DataSetReferences **required**
      * items [DataSetReference](#datasetreference)

### DashboardSourceTemplate
* DashboardSourceTemplate `object`: Dashboard source template.
  * Arn **required**
  * DataSetReferences **required**
    * items [DataSetReference](#datasetreference)

### DashboardSummary
* DashboardSummary `object`: Dashboard summary.
  * Arn
  * CreatedTime
  * DashboardId
  * LastPublishedTime
  * LastUpdatedTime
  * Name
  * PublishedVersionNumber

### DashboardSummaryList
* DashboardSummaryList `array`
  * items [DashboardSummary](#dashboardsummary)

### DashboardUIState
* DashboardUIState `string` (values: EXPANDED, COLLAPSED)

### DashboardVersion
* DashboardVersion `object`: Dashboard version.
  * Arn
  * CreatedTime
  * DataSetArns
    * items [Arn](#arn)
  * Description
  * Errors
    * items [DashboardError](#dashboarderror)
  * Sheets
    * items [Sheet](#sheet)
  * SourceEntityArn
  * Status
  * ThemeArn
  * VersionNumber

### DashboardVersionSummary
* DashboardVersionSummary `object`: Dashboard version summary.
  * Arn
  * CreatedTime
  * Description
  * SourceEntityArn
  * Status
  * VersionNumber

### DashboardVersionSummaryList
* DashboardVersionSummaryList `array`
  * items [DashboardVersionSummary](#dashboardversionsummary)

### DataColorPalette
* DataColorPalette `object`: The theme colors that are used for data colors in charts. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with <code>#</code>, for example #37BFF5. 
  * Colors
    * items [HexColor](#hexcolor)
  * EmptyFillColor
  * MinMaxGradient
    * items [HexColor](#hexcolor)

### DataSet
* DataSet `object`: Dataset.
  * Arn
  * ColumnGroups
    * items [ColumnGroup](#columngroup)
  * ColumnLevelPermissionRules
    * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
  * ConsumedSpiceCapacityInBytes
  * CreatedTime
  * DataSetId
  * ImportMode
  * LastUpdatedTime
  * LogicalTableMap
  * Name
  * OutputColumns
    * items [OutputColumn](#outputcolumn)
  * PhysicalTableMap
  * RowLevelPermissionDataSet
    * Arn **required**
    * Namespace
    * PermissionPolicy **required**

### DataSetArnsList
* DataSetArnsList `array`
  * items [Arn](#arn)

### DataSetConfiguration
* DataSetConfiguration `object`: Dataset configuration.
  * ColumnGroupSchemaList
    * items [ColumnGroupSchema](#columngroupschema)
  * DataSetSchema
    * ColumnSchemaList
      * items [ColumnSchema](#columnschema)
  * Placeholder

### DataSetConfigurationList
* DataSetConfigurationList `array`
  * items [DataSetConfiguration](#datasetconfiguration)

### DataSetImportMode
* DataSetImportMode `string` (values: SPICE, DIRECT_QUERY)

### DataSetName
* DataSetName `string`

### DataSetReference
* DataSetReference `object`: Dataset reference.
  * DataSetArn **required**
  * DataSetPlaceholder **required**

### DataSetReferenceList
* DataSetReferenceList `array`
  * items [DataSetReference](#datasetreference)

### DataSetSchema
* DataSetSchema `object`: Dataset schema.
  * ColumnSchemaList
    * items [ColumnSchema](#columnschema)

### DataSetSummary
* DataSetSummary `object`: Dataset summary.
  * Arn
  * ColumnLevelPermissionRulesApplied
  * CreatedTime
  * DataSetId
  * ImportMode
  * LastUpdatedTime
  * Name
  * RowLevelPermissionDataSet
    * Arn **required**
    * Namespace
    * PermissionPolicy **required**

### DataSetSummaryList
* DataSetSummaryList `array`
  * items [DataSetSummary](#datasetsummary)

### DataSource
* DataSource `object`: The structure of a data source.
  * AlternateDataSourceParameters
    * items [DataSourceParameters](#datasourceparameters)
  * Arn
  * CreatedTime
  * DataSourceId
  * DataSourceParameters
    * AmazonElasticsearchParameters
      * Domain **required**
    * AthenaParameters
      * WorkGroup
    * AuroraParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AuroraPostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AwsIotAnalyticsParameters
      * DataSetName **required**
    * JiraParameters
      * SiteBaseUrl **required**
    * MariaDbParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * MySqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * OracleParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PrestoParameters
      * Catalog **required**
      * Host **required**
      * Port **required**
    * RdsParameters
      * Database **required**
      * InstanceId **required**
    * RedshiftParameters
      * ClusterId
      * Database **required**
      * Host
      * Port
    * S3Parameters
      * ManifestFileLocation **required**
        * Bucket **required**
        * Key **required**
    * ServiceNowParameters
      * SiteBaseUrl **required**
    * SnowflakeParameters
      * Database **required**
      * Host **required**
      * Warehouse **required**
    * SparkParameters
      * Host **required**
      * Port **required**
    * SqlServerParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TeradataParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TwitterParameters
      * MaxRows **required**
      * Query **required**
  * ErrorInfo
    * Message
    * Type
  * LastUpdatedTime
  * Name
  * SslProperties
    * DisableSsl
  * Status
  * Type
  * VpcConnectionProperties
    * VpcConnectionArn **required**

### DataSourceCredentials
* DataSourceCredentials `object`: Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * CopySourceArn
  * CredentialPair
    * AlternateDataSourceParameters
      * items [DataSourceParameters](#datasourceparameters)
    * Password **required**
    * Username **required**

### DataSourceErrorInfo
* DataSourceErrorInfo `object`: Error information for the data source creation or update.
  * Message
  * Type

### DataSourceErrorInfoType
* DataSourceErrorInfoType `string` (values: ACCESS_DENIED, COPY_SOURCE_NOT_FOUND, TIMEOUT, ENGINE_VERSION_NOT_SUPPORTED, UNKNOWN_HOST, GENERIC_SQL_FAILURE, CONFLICT, UNKNOWN)

### DataSourceList
* DataSourceList `array`
  * items [DataSource](#datasource)

### DataSourceParameters
* DataSourceParameters `object`: The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * AmazonElasticsearchParameters
    * Domain **required**
  * AthenaParameters
    * WorkGroup
  * AuroraParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * AuroraPostgreSqlParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * AwsIotAnalyticsParameters
    * DataSetName **required**
  * JiraParameters
    * SiteBaseUrl **required**
  * MariaDbParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * MySqlParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * OracleParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * PostgreSqlParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * PrestoParameters
    * Catalog **required**
    * Host **required**
    * Port **required**
  * RdsParameters
    * Database **required**
    * InstanceId **required**
  * RedshiftParameters
    * ClusterId
    * Database **required**
    * Host
    * Port
  * S3Parameters
    * ManifestFileLocation **required**
      * Bucket **required**
      * Key **required**
  * ServiceNowParameters
    * SiteBaseUrl **required**
  * SnowflakeParameters
    * Database **required**
    * Host **required**
    * Warehouse **required**
  * SparkParameters
    * Host **required**
    * Port **required**
  * SqlServerParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * TeradataParameters
    * Database **required**
    * Host **required**
    * Port **required**
  * TwitterParameters
    * MaxRows **required**
    * Query **required**

### DataSourceParametersList
* DataSourceParametersList `array`
  * items [DataSourceParameters](#datasourceparameters)

### DataSourceType
* DataSourceType `string` (values: ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM)

### Database
* Database `string`

### DateTimeParameter
* DateTimeParameter `object`: A date-time parameter.
  * Name **required**
  * Values **required**
    * items [Timestamp](#timestamp)

### DateTimeParameterList
* DateTimeParameterList `array`
  * items [DateTimeParameter](#datetimeparameter)

### DecimalParameter
* DecimalParameter `object`: A decimal parameter.
  * Name **required**
  * Values **required**
    * items [Double](#double)

### DecimalParameterList
* DecimalParameterList `array`
  * items [DecimalParameter](#decimalparameter)

### DeleteAccountCustomizationRequest
* DeleteAccountCustomizationRequest `object`

### DeleteAccountCustomizationResponse
* DeleteAccountCustomizationResponse `object`
  * RequestId
  * Status

### DeleteAnalysisRequest
* DeleteAnalysisRequest `object`

### DeleteAnalysisResponse
* DeleteAnalysisResponse `object`
  * AnalysisId
  * Arn
  * DeletionTime
  * RequestId
  * Status

### DeleteDashboardRequest
* DeleteDashboardRequest `object`

### DeleteDashboardResponse
* DeleteDashboardResponse `object`
  * Arn
  * DashboardId
  * RequestId
  * Status

### DeleteDataSetRequest
* DeleteDataSetRequest `object`

### DeleteDataSetResponse
* DeleteDataSetResponse `object`
  * Arn
  * DataSetId
  * RequestId
  * Status

### DeleteDataSourceRequest
* DeleteDataSourceRequest `object`

### DeleteDataSourceResponse
* DeleteDataSourceResponse `object`
  * Arn
  * DataSourceId
  * RequestId
  * Status

### DeleteGroupMembershipRequest
* DeleteGroupMembershipRequest `object`

### DeleteGroupMembershipResponse
* DeleteGroupMembershipResponse `object`
  * RequestId
  * Status

### DeleteGroupRequest
* DeleteGroupRequest `object`

### DeleteGroupResponse
* DeleteGroupResponse `object`
  * RequestId
  * Status

### DeleteIAMPolicyAssignmentRequest
* DeleteIAMPolicyAssignmentRequest `object`

### DeleteIAMPolicyAssignmentResponse
* DeleteIAMPolicyAssignmentResponse `object`
  * AssignmentName
  * RequestId
  * Status

### DeleteNamespaceRequest
* DeleteNamespaceRequest `object`

### DeleteNamespaceResponse
* DeleteNamespaceResponse `object`
  * RequestId
  * Status

### DeleteTemplateAliasRequest
* DeleteTemplateAliasRequest `object`

### DeleteTemplateAliasResponse
* DeleteTemplateAliasResponse `object`
  * AliasName
  * Arn
  * RequestId
  * Status
  * TemplateId

### DeleteTemplateRequest
* DeleteTemplateRequest `object`

### DeleteTemplateResponse
* DeleteTemplateResponse `object`
  * Arn
  * RequestId
  * Status
  * TemplateId

### DeleteThemeAliasRequest
* DeleteThemeAliasRequest `object`

### DeleteThemeAliasResponse
* DeleteThemeAliasResponse `object`
  * AliasName
  * Arn
  * RequestId
  * Status
  * ThemeId

### DeleteThemeRequest
* DeleteThemeRequest `object`

### DeleteThemeResponse
* DeleteThemeResponse `object`
  * Arn
  * RequestId
  * Status
  * ThemeId

### DeleteUserByPrincipalIdRequest
* DeleteUserByPrincipalIdRequest `object`: <p/>

### DeleteUserByPrincipalIdResponse
* DeleteUserByPrincipalIdResponse `object`
  * RequestId
  * Status

### DeleteUserRequest
* DeleteUserRequest `object`

### DeleteUserResponse
* DeleteUserResponse `object`
  * RequestId
  * Status

### Delimiter
* Delimiter `string`

### DescribeAccountCustomizationRequest
* DescribeAccountCustomizationRequest `object`

### DescribeAccountCustomizationResponse
* DescribeAccountCustomizationResponse `object`
  * AccountCustomization
    * DefaultTheme
  * Arn
  * AwsAccountId
  * Namespace
  * RequestId
  * Status

### DescribeAccountSettingsRequest
* DescribeAccountSettingsRequest `object`

### DescribeAccountSettingsResponse
* DescribeAccountSettingsResponse `object`
  * AccountSettings
    * AccountName
    * DefaultNamespace
    * Edition
    * NotificationEmail
  * RequestId
  * Status

### DescribeAnalysisPermissionsRequest
* DescribeAnalysisPermissionsRequest `object`

### DescribeAnalysisPermissionsResponse
* DescribeAnalysisPermissionsResponse `object`
  * AnalysisArn
  * AnalysisId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### DescribeAnalysisRequest
* DescribeAnalysisRequest `object`

### DescribeAnalysisResponse
* DescribeAnalysisResponse `object`
  * Analysis
    * AnalysisId
    * Arn
    * CreatedTime
    * DataSetArns
      * items [Arn](#arn)
    * Errors
      * items [AnalysisError](#analysiserror)
    * LastUpdatedTime
    * Name
    * Sheets
      * items [Sheet](#sheet)
    * Status
    * ThemeArn
  * RequestId
  * Status

### DescribeDashboardPermissionsRequest
* DescribeDashboardPermissionsRequest `object`

### DescribeDashboardPermissionsResponse
* DescribeDashboardPermissionsResponse `object`
  * DashboardArn
  * DashboardId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### DescribeDashboardRequest
* DescribeDashboardRequest `object`

### DescribeDashboardResponse
* DescribeDashboardResponse `object`
  * Dashboard
    * Arn
    * CreatedTime
    * DashboardId
    * LastPublishedTime
    * LastUpdatedTime
    * Name
    * Version
      * Arn
      * CreatedTime
      * DataSetArns
        * items [Arn](#arn)
      * Description
      * Errors
        * items [DashboardError](#dashboarderror)
      * Sheets
        * items [Sheet](#sheet)
      * SourceEntityArn
      * Status
      * ThemeArn
      * VersionNumber
  * RequestId
  * Status

### DescribeDataSetPermissionsRequest
* DescribeDataSetPermissionsRequest `object`

### DescribeDataSetPermissionsResponse
* DescribeDataSetPermissionsResponse `object`
  * DataSetArn
  * DataSetId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### DescribeDataSetRequest
* DescribeDataSetRequest `object`

### DescribeDataSetResponse
* DescribeDataSetResponse `object`
  * DataSet
    * Arn
    * ColumnGroups
      * items [ColumnGroup](#columngroup)
    * ColumnLevelPermissionRules
      * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
    * ConsumedSpiceCapacityInBytes
    * CreatedTime
    * DataSetId
    * ImportMode
    * LastUpdatedTime
    * LogicalTableMap
    * Name
    * OutputColumns
      * items [OutputColumn](#outputcolumn)
    * PhysicalTableMap
    * RowLevelPermissionDataSet
      * Arn **required**
      * Namespace
      * PermissionPolicy **required**
  * RequestId
  * Status

### DescribeDataSourcePermissionsRequest
* DescribeDataSourcePermissionsRequest `object`

### DescribeDataSourcePermissionsResponse
* DescribeDataSourcePermissionsResponse `object`
  * DataSourceArn
  * DataSourceId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### DescribeDataSourceRequest
* DescribeDataSourceRequest `object`

### DescribeDataSourceResponse
* DescribeDataSourceResponse `object`
  * DataSource
    * AlternateDataSourceParameters
      * items [DataSourceParameters](#datasourceparameters)
    * Arn
    * CreatedTime
    * DataSourceId
    * DataSourceParameters
      * AmazonElasticsearchParameters
        * Domain **required**
      * AthenaParameters
        * WorkGroup
      * AuroraParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * AuroraPostgreSqlParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * AwsIotAnalyticsParameters
        * DataSetName **required**
      * JiraParameters
        * SiteBaseUrl **required**
      * MariaDbParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * MySqlParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * OracleParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * PostgreSqlParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * PrestoParameters
        * Catalog **required**
        * Host **required**
        * Port **required**
      * RdsParameters
        * Database **required**
        * InstanceId **required**
      * RedshiftParameters
        * ClusterId
        * Database **required**
        * Host
        * Port
      * S3Parameters
        * ManifestFileLocation **required**
          * Bucket **required**
          * Key **required**
      * ServiceNowParameters
        * SiteBaseUrl **required**
      * SnowflakeParameters
        * Database **required**
        * Host **required**
        * Warehouse **required**
      * SparkParameters
        * Host **required**
        * Port **required**
      * SqlServerParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * TeradataParameters
        * Database **required**
        * Host **required**
        * Port **required**
      * TwitterParameters
        * MaxRows **required**
        * Query **required**
    * ErrorInfo
      * Message
      * Type
    * LastUpdatedTime
    * Name
    * SslProperties
      * DisableSsl
    * Status
    * Type
    * VpcConnectionProperties
      * VpcConnectionArn **required**
  * RequestId
  * Status

### DescribeGroupRequest
* DescribeGroupRequest `object`

### DescribeGroupResponse
* DescribeGroupResponse `object`
  * Group
    * Arn
    * Description
    * GroupName
    * PrincipalId
  * RequestId
  * Status

### DescribeIAMPolicyAssignmentRequest
* DescribeIAMPolicyAssignmentRequest `object`

### DescribeIAMPolicyAssignmentResponse
* DescribeIAMPolicyAssignmentResponse `object`
  * IAMPolicyAssignment
    * AssignmentId
    * AssignmentName
    * AssignmentStatus
    * AwsAccountId
    * Identities
    * PolicyArn
  * RequestId
  * Status

### DescribeIngestionRequest
* DescribeIngestionRequest `object`

### DescribeIngestionResponse
* DescribeIngestionResponse `object`
  * Ingestion
    * Arn **required**
    * CreatedTime **required**
    * ErrorInfo
      * Message
      * Type
    * IngestionId
    * IngestionSizeInBytes
    * IngestionStatus **required**
    * IngestionTimeInSeconds
    * QueueInfo [QueueInfo](#queueinfo)
    * RequestSource
    * RequestType
    * RowInfo [RowInfo](#rowinfo)
  * RequestId
  * Status

### DescribeNamespaceRequest
* DescribeNamespaceRequest `object`

### DescribeNamespaceResponse
* DescribeNamespaceResponse `object`
  * Namespace
    * Arn
    * CapacityRegion
    * CreationStatus
    * IdentityStore
    * Name
    * NamespaceError
      * Message
      * Type
  * RequestId
  * Status

### DescribeTemplateAliasRequest
* DescribeTemplateAliasRequest `object`

### DescribeTemplateAliasResponse
* DescribeTemplateAliasResponse `object`
  * RequestId
  * Status
  * TemplateAlias
    * AliasName
    * Arn
    * TemplateVersionNumber

### DescribeTemplatePermissionsRequest
* DescribeTemplatePermissionsRequest `object`

### DescribeTemplatePermissionsResponse
* DescribeTemplatePermissionsResponse `object`
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status
  * TemplateArn
  * TemplateId

### DescribeTemplateRequest
* DescribeTemplateRequest `object`

### DescribeTemplateResponse
* DescribeTemplateResponse `object`
  * RequestId
  * Status
  * Template
    * Arn
    * CreatedTime
    * LastUpdatedTime
    * Name
    * TemplateId
    * Version
      * CreatedTime
      * DataSetConfigurations
        * items [DataSetConfiguration](#datasetconfiguration)
      * Description
      * Errors
        * items [TemplateError](#templateerror)
      * Sheets
        * items [Sheet](#sheet)
      * SourceEntityArn
      * Status
      * ThemeArn
      * VersionNumber

### DescribeThemeAliasRequest
* DescribeThemeAliasRequest `object`

### DescribeThemeAliasResponse
* DescribeThemeAliasResponse `object`
  * RequestId
  * Status
  * ThemeAlias
    * AliasName
    * Arn
    * ThemeVersionNumber

### DescribeThemePermissionsRequest
* DescribeThemePermissionsRequest `object`

### DescribeThemePermissionsResponse
* DescribeThemePermissionsResponse `object`
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status
  * ThemeArn
  * ThemeId

### DescribeThemeRequest
* DescribeThemeRequest `object`

### DescribeThemeResponse
* DescribeThemeResponse `object`
  * RequestId
  * Status
  * Theme
    * Arn
    * CreatedTime
    * LastUpdatedTime
    * Name
    * ThemeId
    * Type
    * Version [ThemeVersion](#themeversion)

### DescribeUserRequest
* DescribeUserRequest `object`

### DescribeUserResponse
* DescribeUserResponse `object`
  * RequestId
  * Status
  * User
    * Active
    * Arn
    * CustomPermissionsName
    * Email
    * IdentityType
    * PrincipalId
    * Role
    * UserName

### Domain
* Domain `string`

### DomainNotWhitelistedException


### Double
* Double `number`

### DoubleList
* DoubleList `array`
  * items [Double](#double)

### Edition
* Edition `string` (values: STANDARD, ENTERPRISE)

### EmbeddingIdentityType
* EmbeddingIdentityType `string` (values: IAM, QUICKSIGHT, ANONYMOUS)

### EmbeddingUrl
* EmbeddingUrl `string`

### EntryPoint
* EntryPoint `string`

### ErrorInfo
* ErrorInfo `object`: Error information for the SPICE ingestion of a dataset.
  * Message
  * Type

### ExportToCSVOption
* ExportToCSVOption `object`: Export to .csv option.
  * AvailabilityStatus

### Expression
* Expression `string`

### FileFormat
* FileFormat `string` (values: CSV, TSV, CLF, ELF, XLSX, JSON)

### FilterOperation
* FilterOperation `object`: A transform operation that filters rows based on a condition.
  * ConditionExpression **required**

### FilterOperator
* FilterOperator `string` (values: StringEquals)

### GeoSpatialColumnGroup
* GeoSpatialColumnGroup `object`: Geospatial column group that denotes a hierarchy.
  * Columns **required**
    * items [ColumnName](#columnname)
  * CountryCode **required**
  * Name **required**

### GeoSpatialCountryCode
* GeoSpatialCountryCode `string` (values: US)

### GeoSpatialDataRole
* GeoSpatialDataRole `string` (values: COUNTRY, STATE, COUNTY, CITY, POSTCODE, LONGITUDE, LATITUDE)

### GetDashboardEmbedUrlRequest
* GetDashboardEmbedUrlRequest `object`

### GetDashboardEmbedUrlResponse
* GetDashboardEmbedUrlResponse `object`: Output returned from the <code>GetDashboardEmbedUrl</code> operation.
  * EmbedUrl
  * RequestId
  * Status

### GetSessionEmbedUrlRequest
* GetSessionEmbedUrlRequest `object`

### GetSessionEmbedUrlResponse
* GetSessionEmbedUrlResponse `object`
  * EmbedUrl
  * RequestId
  * Status

### Group
* Group `object`: A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. 
  * Arn
  * Description
  * GroupName
  * PrincipalId

### GroupDescription
* GroupDescription `string`

### GroupList
* GroupList `array`
  * items [Group](#group)

### GroupMember
* GroupMember `object`: A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. .
  * Arn
  * MemberName

### GroupMemberList
* GroupMemberList `array`
  * items [GroupMember](#groupmember)

### GroupMemberName
* GroupMemberName `string`

### GroupName
* GroupName `string`

### GutterStyle
* GutterStyle `object`: The display options for gutter spacing between tiles on a sheet.
  * Show

### HexColor
* HexColor `string`

### Host
* Host `string`

### IAMPolicyAssignment
* IAMPolicyAssignment `object`: An AWS Identity and Access Management (IAM) policy assignment.
  * AssignmentId
  * AssignmentName
  * AssignmentStatus
  * AwsAccountId
  * Identities
  * PolicyArn

### IAMPolicyAssignmentName
* IAMPolicyAssignmentName `string`

### IAMPolicyAssignmentSummary
* IAMPolicyAssignmentSummary `object`: IAM policy assignment summary.
  * AssignmentName
  * AssignmentStatus

### IAMPolicyAssignmentSummaryList
* IAMPolicyAssignmentSummaryList `array`
  * items [IAMPolicyAssignmentSummary](#iampolicyassignmentsummary)

### IdentityMap
* IdentityMap `object`

### IdentityName
* IdentityName `string`

### IdentityNameList
* IdentityNameList `array`
  * items [IdentityName](#identityname)

### IdentityStore
* IdentityStore `string` (values: QUICKSIGHT)

### IdentityType
* IdentityType `string` (values: IAM, QUICKSIGHT)

### IdentityTypeNotSupportedException


### Ingestion
* Ingestion `object`: Information about the SPICE ingestion for a dataset.
  * Arn **required**
  * CreatedTime **required**
  * ErrorInfo
    * Message
    * Type
  * IngestionId
  * IngestionSizeInBytes
  * IngestionStatus **required**
  * IngestionTimeInSeconds
  * QueueInfo [QueueInfo](#queueinfo)
  * RequestSource
  * RequestType
  * RowInfo [RowInfo](#rowinfo)

### IngestionErrorType
* IngestionErrorType `string` (values: FAILURE_TO_ASSUME_ROLE, INGESTION_SUPERSEDED, INGESTION_CANCELED, DATA_SET_DELETED, DATA_SET_NOT_SPICE, S3_UPLOADED_FILE_DELETED, S3_MANIFEST_ERROR, DATA_TOLERANCE_EXCEPTION, SPICE_TABLE_NOT_FOUND, DATA_SET_SIZE_LIMIT_EXCEEDED, ROW_SIZE_LIMIT_EXCEEDED, ACCOUNT_CAPACITY_LIMIT_EXCEEDED, CUSTOMER_ERROR, DATA_SOURCE_NOT_FOUND, IAM_ROLE_NOT_AVAILABLE, CONNECTION_FAILURE, SQL_TABLE_NOT_FOUND, PERMISSION_DENIED, SSL_CERTIFICATE_VALIDATION_FAILURE, OAUTH_TOKEN_FAILURE, SOURCE_API_LIMIT_EXCEEDED_FAILURE, PASSWORD_AUTHENTICATION_FAILURE, SQL_SCHEMA_MISMATCH_ERROR, INVALID_DATE_FORMAT, INVALID_DATAPREP_SYNTAX, SOURCE_RESOURCE_LIMIT_EXCEEDED, SQL_INVALID_PARAMETER_VALUE, QUERY_TIMEOUT, SQL_NUMERIC_OVERFLOW, UNRESOLVABLE_HOST, UNROUTABLE_HOST, SQL_EXCEPTION, S3_FILE_INACCESSIBLE, IOT_FILE_NOT_FOUND, IOT_DATA_SET_FILE_EMPTY, INVALID_DATA_SOURCE_CONFIG, DATA_SOURCE_AUTH_FAILED, DATA_SOURCE_CONNECTION_FAILED, FAILURE_TO_PROCESS_JSON_FILE, INTERNAL_SERVICE_ERROR)

### IngestionId
* IngestionId `string`

### IngestionMaxResults
* IngestionMaxResults `integer`

### IngestionRequestSource
* IngestionRequestSource `string` (values: MANUAL, SCHEDULED)

### IngestionRequestType
* IngestionRequestType `string` (values: INITIAL_INGESTION, EDIT, INCREMENTAL_REFRESH, FULL_REFRESH)

### IngestionStatus
* IngestionStatus `string` (values: INITIALIZED, QUEUED, RUNNING, FAILED, COMPLETED, CANCELLED)

### Ingestions
* Ingestions `array`
  * items [Ingestion](#ingestion)

### InputColumn
* InputColumn `object`: Metadata for a column that is used as the input of a transform operation.
  * Name **required**
  * Type **required**

### InputColumnDataType
* InputColumnDataType `string` (values: STRING, INTEGER, DECIMAL, DATETIME, BIT, BOOLEAN, JSON)

### InputColumnList
* InputColumnList `array`
  * items [InputColumn](#inputcolumn)

### InstanceId
* InstanceId `string`

### IntegerParameter
* IntegerParameter `object`: An integer parameter.
  * Name **required**
  * Values **required**
    * items [Long](#long)

### IntegerParameterList
* IntegerParameterList `array`
  * items [IntegerParameter](#integerparameter)

### InternalFailureException


### InvalidNextTokenException


### InvalidParameterValueException


### JiraParameters
* JiraParameters `object`: Jira parameters.
  * SiteBaseUrl **required**

### JoinInstruction
* JoinInstruction `object`: The instructions associated with a join. 
  * LeftJoinKeyProperties
    * UniqueKey
  * LeftOperand **required**
  * OnClause **required**
  * RightJoinKeyProperties
    * UniqueKey
  * RightOperand **required**
  * Type **required**

### JoinKeyProperties
* JoinKeyProperties `object`: Properties associated with the columns participating in a join.
  * UniqueKey

### JoinType
* JoinType `string` (values: INNER, OUTER, LEFT, RIGHT)

### LimitExceededException


### ListAnalysesRequest
* ListAnalysesRequest `object`

### ListAnalysesResponse
* ListAnalysesResponse `object`
  * AnalysisSummaryList
    * items [AnalysisSummary](#analysissummary)
  * NextToken
  * RequestId
  * Status

### ListDashboardVersionsRequest
* ListDashboardVersionsRequest `object`

### ListDashboardVersionsResponse
* ListDashboardVersionsResponse `object`
  * DashboardVersionSummaryList
    * items [DashboardVersionSummary](#dashboardversionsummary)
  * NextToken
  * RequestId
  * Status

### ListDashboardsRequest
* ListDashboardsRequest `object`

### ListDashboardsResponse
* ListDashboardsResponse `object`
  * DashboardSummaryList
    * items [DashboardSummary](#dashboardsummary)
  * NextToken
  * RequestId
  * Status

### ListDataSetsRequest
* ListDataSetsRequest `object`

### ListDataSetsResponse
* ListDataSetsResponse `object`
  * DataSetSummaries
    * items [DataSetSummary](#datasetsummary)
  * NextToken
  * RequestId
  * Status

### ListDataSourcesRequest
* ListDataSourcesRequest `object`

### ListDataSourcesResponse
* ListDataSourcesResponse `object`
  * DataSources
    * items [DataSource](#datasource)
  * NextToken
  * RequestId
  * Status

### ListGroupMembershipsRequest
* ListGroupMembershipsRequest `object`

### ListGroupMembershipsResponse
* ListGroupMembershipsResponse `object`
  * GroupMemberList
    * items [GroupMember](#groupmember)
  * NextToken
  * RequestId
  * Status

### ListGroupsRequest
* ListGroupsRequest `object`

### ListGroupsResponse
* ListGroupsResponse `object`
  * GroupList
    * items [Group](#group)
  * NextToken
  * RequestId
  * Status

### ListIAMPolicyAssignmentsForUserRequest
* ListIAMPolicyAssignmentsForUserRequest `object`

### ListIAMPolicyAssignmentsForUserResponse
* ListIAMPolicyAssignmentsForUserResponse `object`
  * ActiveAssignments
    * items [ActiveIAMPolicyAssignment](#activeiampolicyassignment)
  * NextToken
  * RequestId
  * Status

### ListIAMPolicyAssignmentsRequest
* ListIAMPolicyAssignmentsRequest `object`
  * AssignmentStatus

### ListIAMPolicyAssignmentsResponse
* ListIAMPolicyAssignmentsResponse `object`
  * IAMPolicyAssignments
    * items [IAMPolicyAssignmentSummary](#iampolicyassignmentsummary)
  * NextToken
  * RequestId
  * Status

### ListIngestionsRequest
* ListIngestionsRequest `object`

### ListIngestionsResponse
* ListIngestionsResponse `object`
  * Ingestions
    * items [Ingestion](#ingestion)
  * NextToken
  * RequestId
  * Status

### ListNamespacesRequest
* ListNamespacesRequest `object`

### ListNamespacesResponse
* ListNamespacesResponse `object`
  * Namespaces
    * items [NamespaceInfoV2](#namespaceinfov2)
  * NextToken
  * RequestId
  * Status

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * RequestId
  * Status
  * Tags
    * items [Tag](#tag)

### ListTemplateAliasesRequest
* ListTemplateAliasesRequest `object`

### ListTemplateAliasesResponse
* ListTemplateAliasesResponse `object`
  * NextToken
  * RequestId
  * Status
  * TemplateAliasList
    * items [TemplateAlias](#templatealias)

### ListTemplateVersionsRequest
* ListTemplateVersionsRequest `object`

### ListTemplateVersionsResponse
* ListTemplateVersionsResponse `object`
  * NextToken
  * RequestId
  * Status
  * TemplateVersionSummaryList
    * items [TemplateVersionSummary](#templateversionsummary)

### ListTemplatesRequest
* ListTemplatesRequest `object`

### ListTemplatesResponse
* ListTemplatesResponse `object`
  * NextToken
  * RequestId
  * Status
  * TemplateSummaryList
    * items [TemplateSummary](#templatesummary)

### ListThemeAliasesRequest
* ListThemeAliasesRequest `object`

### ListThemeAliasesResponse
* ListThemeAliasesResponse `object`
  * NextToken
  * RequestId
  * Status
  * ThemeAliasList
    * items [ThemeAlias](#themealias)

### ListThemeVersionsRequest
* ListThemeVersionsRequest `object`

### ListThemeVersionsResponse
* ListThemeVersionsResponse `object`
  * NextToken
  * RequestId
  * Status
  * ThemeVersionSummaryList
    * items [ThemeVersionSummary](#themeversionsummary)

### ListThemesRequest
* ListThemesRequest `object`

### ListThemesResponse
* ListThemesResponse `object`
  * NextToken
  * RequestId
  * Status
  * ThemeSummaryList
    * items [ThemeSummary](#themesummary)

### ListUserGroupsRequest
* ListUserGroupsRequest `object`

### ListUserGroupsResponse
* ListUserGroupsResponse `object`
  * GroupList
    * items [Group](#group)
  * NextToken
  * RequestId
  * Status

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * RequestId
  * Status
  * UserList
    * items [User](#user)

### LogicalTable
* LogicalTable `object`: A <i>logical table</i> is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations.
  * Alias **required**
  * DataTransforms
    * items [TransformOperation](#transformoperation)
  * Source **required**
    * JoinInstruction
      * LeftJoinKeyProperties
        * UniqueKey
      * LeftOperand **required**
      * OnClause **required**
      * RightJoinKeyProperties
        * UniqueKey
      * RightOperand **required**
      * Type **required**
    * PhysicalTableId

### LogicalTableAlias
* LogicalTableAlias `string`

### LogicalTableId
* LogicalTableId `string`

### LogicalTableMap
* LogicalTableMap `object`

### LogicalTableSource
* LogicalTableSource `object`: Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * JoinInstruction
    * LeftJoinKeyProperties
      * UniqueKey
    * LeftOperand **required**
    * OnClause **required**
    * RightJoinKeyProperties
      * UniqueKey
    * RightOperand **required**
    * Type **required**
  * PhysicalTableId

### Long
* Long `integer`

### LongList
* LongList `array`
  * items [Long](#long)

### ManifestFileLocation
* ManifestFileLocation `object`: Amazon S3 manifest file location.
  * Bucket **required**
  * Key **required**

### MarginStyle
* MarginStyle `object`: The display options for margins around the outside edge of sheets.
  * Show

### MariaDbParameters
* MariaDbParameters `object`: MariaDB parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### MaxResults
* MaxResults `integer`

### MySqlParameters
* MySqlParameters `object`: MySQL parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### Namespace
* Namespace `string`

### NamespaceError
* NamespaceError `object`: Errors that occur during namespace creation.
  * Message
  * Type

### NamespaceErrorType
* NamespaceErrorType `string` (values: PERMISSION_DENIED, INTERNAL_SERVICE_ERROR)

### NamespaceInfoV2
* NamespaceInfoV2 `object`: The error type.
  * Arn
  * CapacityRegion
  * CreationStatus
  * IdentityStore
  * Name
  * NamespaceError
    * Message
    * Type

### NamespaceStatus
* NamespaceStatus `string` (values: CREATED, CREATING, DELETING, RETRYABLE_FAILURE, NON_RETRYABLE_FAILURE)

### Namespaces
* Namespaces `array`
  * items [NamespaceInfoV2](#namespaceinfov2)

### NonEmptyString
* NonEmptyString `string`

### OnClause
* OnClause `string`

### OptionalPort
* OptionalPort `integer`

### OracleParameters
* OracleParameters `object`: Oracle parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### OutputColumn
* OutputColumn `object`: Output column.
  * Description
  * Name
  * Type

### OutputColumnList
* OutputColumnList `array`
  * items [OutputColumn](#outputcolumn)

### Parameters
* Parameters `object`: A list of QuickSight parameters and the list's override values.
  * DateTimeParameters
    * items [DateTimeParameter](#datetimeparameter)
  * DecimalParameters
    * items [DecimalParameter](#decimalparameter)
  * IntegerParameters
    * items [IntegerParameter](#integerparameter)
  * StringParameters
    * items [StringParameter](#stringparameter)

### Password
* Password `string`

### PhysicalTable
* PhysicalTable `object`: A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * CustomSql
    * Columns
      * items [InputColumn](#inputcolumn)
    * DataSourceArn **required**
    * Name **required**
    * SqlQuery **required**
  * RelationalTable
    * Catalog
    * DataSourceArn **required**
    * InputColumns **required**
      * items [InputColumn](#inputcolumn)
    * Name **required**
    * Schema
  * S3Source
    * DataSourceArn **required**
    * InputColumns **required**
      * items [InputColumn](#inputcolumn)
    * UploadSettings
      * ContainsHeader
      * Delimiter
      * Format
      * StartFromRow
      * TextQualifier

### PhysicalTableId
* PhysicalTableId `string`

### PhysicalTableMap
* PhysicalTableMap `object`

### Port
* Port `integer`

### PositiveInteger
* PositiveInteger `integer`

### PostgreSqlParameters
* PostgreSqlParameters `object`: PostgreSQL parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### PreconditionNotMetException


### PrestoParameters
* PrestoParameters `object`: Presto parameters.
  * Catalog **required**
  * Host **required**
  * Port **required**

### Principal
* Principal `string`

### PrincipalList
* PrincipalList `array`
  * items [String](#string)

### ProjectOperation
* ProjectOperation `object`: A transform operation that projects columns. Operations that come after a projection can only refer to projected columns.
  * ProjectedColumns **required**
    * items [String](#string)

### ProjectedColumnList
* ProjectedColumnList `array`
  * items [String](#string)

### Query
* Query `string`

### QueueInfo
* QueueInfo `object`: Information about a queued dataset SPICE ingestion.
  * QueuedIngestion **required**
  * WaitingOnIngestion **required**

### QuickSightUserNotFoundException


### RdsParameters
* RdsParameters `object`: Amazon RDS parameters.
  * Database **required**
  * InstanceId **required**

### RecoveryWindowInDays
* RecoveryWindowInDays `integer`

### RedshiftParameters
* RedshiftParameters `object`: Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.
  * ClusterId
  * Database **required**
  * Host
  * Port

### RegisterUserRequest
* RegisterUserRequest `object`
  * CustomPermissionsName
  * Email **required**
  * IamArn
  * IdentityType **required**
  * SessionName
  * UserName
  * UserRole **required**

### RegisterUserResponse
* RegisterUserResponse `object`
  * RequestId
  * Status
  * User
    * Active
    * Arn
    * CustomPermissionsName
    * Email
    * IdentityType
    * PrincipalId
    * Role
    * UserName
  * UserInvitationUrl

### RelationalTable
* RelationalTable `object`: A physical table type for relational data sources.
  * Catalog
  * DataSourceArn **required**
  * InputColumns **required**
    * items [InputColumn](#inputcolumn)
  * Name **required**
  * Schema

### RelationalTableCatalog
* RelationalTableCatalog `string`

### RelationalTableName
* RelationalTableName `string`

### RelationalTableSchema
* RelationalTableSchema `string`

### RenameColumnOperation
* RenameColumnOperation `object`: A transform operation that renames a column.
  * ColumnName **required**
  * NewColumnName **required**

### ResourceExistsException


### ResourceId
* ResourceId `string`

### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourcePermission
* ResourcePermission `object`: Permission for the resource.
  * Actions **required**
    * items [String](#string)
  * Principal **required**

### ResourcePermissionList
* ResourcePermissionList `array`
  * items [ResourcePermission](#resourcepermission)

### ResourceStatus
* ResourceStatus `string` (values: CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)

### ResourceUnavailableException


### RestoreAnalysisRequest
* RestoreAnalysisRequest `object`

### RestoreAnalysisResponse
* RestoreAnalysisResponse `object`
  * AnalysisId
  * Arn
  * RequestId
  * Status

### RestrictiveResourceId
* RestrictiveResourceId `string`

### RoleName
* RoleName `string`

### RoleSessionName
* RoleSessionName `string`

### RowInfo
* RowInfo `object`: Information about rows for a data set SPICE ingestion.
  * RowsDropped
  * RowsIngested

### RowLevelPermissionDataSet
* RowLevelPermissionDataSet `object`: The row-level security configuration for the dataset.
  * Arn **required**
  * Namespace
  * PermissionPolicy **required**

### RowLevelPermissionPolicy
* RowLevelPermissionPolicy `string` (values: GRANT_ACCESS, DENY_ACCESS)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### S3Parameters
* S3Parameters `object`: S3 parameters.
  * ManifestFileLocation **required**
    * Bucket **required**
    * Key **required**

### S3Source
* S3Source `object`: A physical table type for as S3 data source.
  * DataSourceArn **required**
  * InputColumns **required**
    * items [InputColumn](#inputcolumn)
  * UploadSettings
    * ContainsHeader
    * Delimiter
    * Format
    * StartFromRow
    * TextQualifier

### SearchAnalysesRequest
* SearchAnalysesRequest `object`
  * Filters **required**
    * items [AnalysisSearchFilter](#analysissearchfilter)
  * MaxResults
  * NextToken

### SearchAnalysesResponse
* SearchAnalysesResponse `object`
  * AnalysisSummaryList
    * items [AnalysisSummary](#analysissummary)
  * NextToken
  * RequestId
  * Status

### SearchDashboardsRequest
* SearchDashboardsRequest `object`
  * Filters **required**
    * items [DashboardSearchFilter](#dashboardsearchfilter)
  * MaxResults
  * NextToken

### SearchDashboardsResponse
* SearchDashboardsResponse `object`
  * DashboardSummaryList
    * items [DashboardSummary](#dashboardsummary)
  * NextToken
  * RequestId
  * Status

### ServiceNowParameters
* ServiceNowParameters `object`: ServiceNow parameters.
  * SiteBaseUrl **required**

### SessionLifetimeInMinutes
* SessionLifetimeInMinutes `integer`

### SessionLifetimeInMinutesInvalidException


### Sheet
* Sheet `object`: A <i>sheet</i>, which is an object that contains a set of visuals that are viewed together on one page in the Amazon QuickSight console. Every analysis and dashboard contains at least one sheet. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight. Sheets can be associated with other components, such as controls, filters, and so on.
  * Name
  * SheetId

### SheetControlsOption
* SheetControlsOption `object`: Sheet controls option.
  * VisibilityState

### SheetList
* SheetList `array`
  * items [Sheet](#sheet)

### SheetStyle
* SheetStyle `object`: The theme display options for sheets. 
  * Tile
    * Border
      * Show
  * TileLayout
    * Gutter
      * Show
    * Margin
      * Show

### SiteBaseUrl
* SiteBaseUrl `string`

### SnowflakeParameters
* SnowflakeParameters `object`: Snowflake parameters.
  * Database **required**
  * Host **required**
  * Warehouse **required**

### SparkParameters
* SparkParameters `object`: Spark parameters.
  * Host **required**
  * Port **required**

### SqlQuery
* SqlQuery `string`

### SqlServerParameters
* SqlServerParameters `object`: SQL Server parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### SslProperties
* SslProperties `object`: Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source.
  * DisableSsl

### StatusCode
* StatusCode `integer`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### StringParameter
* StringParameter `object`: A string parameter.
  * Name **required**
  * Values **required**
    * items [String](#string)

### StringParameterList
* StringParameterList `array`
  * items [StringParameter](#stringparameter)

### Tag
* Tag `object`: The key or keys of the key-value pairs for the resource tag or tags assigned to the resource.
  * Key **required**
  * Value **required**

### TagColumnOperation
* TagColumnOperation `object`: A transform operation that tags a column with additional information.
  * ColumnName **required**
  * Tags **required**
    * items [ColumnTag](#columntag)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`
  * RequestId
  * Status

### TagValue
* TagValue `string`

### Template
* Template `object`: <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with an analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p>
  * Arn
  * CreatedTime
  * LastUpdatedTime
  * Name
  * TemplateId
  * Version
    * CreatedTime
    * DataSetConfigurations
      * items [DataSetConfiguration](#datasetconfiguration)
    * Description
    * Errors
      * items [TemplateError](#templateerror)
    * Sheets
      * items [Sheet](#sheet)
    * SourceEntityArn
    * Status
    * ThemeArn
    * VersionNumber

### TemplateAlias
* TemplateAlias `object`: The template alias.
  * AliasName
  * Arn
  * TemplateVersionNumber

### TemplateAliasList
* TemplateAliasList `array`
  * items [TemplateAlias](#templatealias)

### TemplateError
* TemplateError `object`: List of errors that occurred when the template version creation failed.
  * Message
  * Type

### TemplateErrorList
* TemplateErrorList `array`
  * items [TemplateError](#templateerror)

### TemplateErrorType
* TemplateErrorType `string` (values: SOURCE_NOT_FOUND, DATA_SET_NOT_FOUND, INTERNAL_FAILURE, ACCESS_DENIED)

### TemplateName
* TemplateName `string`

### TemplateSourceAnalysis
* TemplateSourceAnalysis `object`: The source analysis of the template.
  * Arn **required**
  * DataSetReferences **required**
    * items [DataSetReference](#datasetreference)

### TemplateSourceEntity
* TemplateSourceEntity `object`: The source entity of the template.
  * SourceAnalysis
    * Arn **required**
    * DataSetReferences **required**
      * items [DataSetReference](#datasetreference)
  * SourceTemplate
    * Arn **required**

### TemplateSourceTemplate
* TemplateSourceTemplate `object`: The source template of the template.
  * Arn **required**

### TemplateSummary
* TemplateSummary `object`: The template summary.
  * Arn
  * CreatedTime
  * LastUpdatedTime
  * LatestVersionNumber
  * Name
  * TemplateId

### TemplateSummaryList
* TemplateSummaryList `array`
  * items [TemplateSummary](#templatesummary)

### TemplateVersion
* TemplateVersion `object`: A version of a template.
  * CreatedTime
  * DataSetConfigurations
    * items [DataSetConfiguration](#datasetconfiguration)
  * Description
  * Errors
    * items [TemplateError](#templateerror)
  * Sheets
    * items [Sheet](#sheet)
  * SourceEntityArn
  * Status
  * ThemeArn
  * VersionNumber

### TemplateVersionSummary
* TemplateVersionSummary `object`: The template version.
  * Arn
  * CreatedTime
  * Description
  * Status
  * VersionNumber

### TemplateVersionSummaryList
* TemplateVersionSummaryList `array`
  * items [TemplateVersionSummary](#templateversionsummary)

### TeradataParameters
* TeradataParameters `object`: Teradata parameters.
  * Database **required**
  * Host **required**
  * Port **required**

### TextQualifier
* TextQualifier `string` (values: DOUBLE_QUOTE, SINGLE_QUOTE)

### Theme
* Theme `object`: Summary information about a theme.
  * Arn
  * CreatedTime
  * LastUpdatedTime
  * Name
  * ThemeId
  * Type
  * Version [ThemeVersion](#themeversion)

### ThemeAlias
* ThemeAlias `object`: An alias for a theme.
  * AliasName
  * Arn
  * ThemeVersionNumber

### ThemeAliasList
* ThemeAliasList `array`
  * items [ThemeAlias](#themealias)

### ThemeConfiguration
* ThemeConfiguration `object`: The theme configuration. This configuration contains all of the display properties for a theme.
  * DataColorPalette
    * Colors
      * items [HexColor](#hexcolor)
    * EmptyFillColor
    * MinMaxGradient
      * items [HexColor](#hexcolor)
  * Sheet
    * Tile
      * Border
        * Show
    * TileLayout
      * Gutter
        * Show
      * Margin
        * Show
  * UIColorPalette
    * Accent
    * AccentForeground
    * Danger
    * DangerForeground
    * Dimension
    * DimensionForeground
    * Measure
    * MeasureForeground
    * PrimaryBackground
    * PrimaryForeground
    * SecondaryBackground
    * SecondaryForeground
    * Success
    * SuccessForeground
    * Warning
    * WarningForeground

### ThemeError
* ThemeError `object`: Theme error.
  * Message
  * Type

### ThemeErrorList
* ThemeErrorList `array`
  * items [ThemeError](#themeerror)

### ThemeErrorType
* ThemeErrorType `string` (values: INTERNAL_FAILURE)

### ThemeName
* ThemeName `string`

### ThemeSummary
* ThemeSummary `object`: The theme summary.
  * Arn
  * CreatedTime
  * LastUpdatedTime
  * LatestVersionNumber
  * Name
  * ThemeId

### ThemeSummaryList
* ThemeSummaryList `array`
  * items [ThemeSummary](#themesummary)

### ThemeType
* ThemeType `string` (values: QUICKSIGHT, CUSTOM, ALL)

### ThemeVersion
* ThemeVersion `object`: A version of a theme.
  * Arn
  * BaseThemeId
  * Configuration
    * DataColorPalette
      * Colors
        * items [HexColor](#hexcolor)
      * EmptyFillColor
      * MinMaxGradient
        * items [HexColor](#hexcolor)
    * Sheet
      * Tile
        * Border
          * Show
      * TileLayout
        * Gutter
          * Show
        * Margin
          * Show
    * UIColorPalette
      * Accent
      * AccentForeground
      * Danger
      * DangerForeground
      * Dimension
      * DimensionForeground
      * Measure
      * MeasureForeground
      * PrimaryBackground
      * PrimaryForeground
      * SecondaryBackground
      * SecondaryForeground
      * Success
      * SuccessForeground
      * Warning
      * WarningForeground
  * CreatedTime
  * Description
  * Errors
    * items [ThemeError](#themeerror)
  * Status
  * VersionNumber

### ThemeVersionSummary
* ThemeVersionSummary `object`: The theme version.
  * Arn
  * CreatedTime
  * Description
  * Status
  * VersionNumber

### ThemeVersionSummaryList
* ThemeVersionSummaryList `array`
  * items [ThemeVersionSummary](#themeversionsummary)

### ThrottlingException


### TileLayoutStyle
* TileLayoutStyle `object`: The display options for the layout of tiles on a sheet.
  * Gutter
    * Show
  * Margin
    * Show

### TileStyle
* TileStyle `object`: Display options related to tiles on a sheet.
  * Border
    * Show

### Timestamp
* Timestamp `string`

### TimestampList
* TimestampList `array`
  * items [Timestamp](#timestamp)

### TransformOperation
* TransformOperation `object`: A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
  * CastColumnTypeOperation
    * ColumnName **required**
    * Format
    * NewColumnType **required**
  * CreateColumnsOperation
    * Columns **required**
      * items [CalculatedColumn](#calculatedcolumn)
  * FilterOperation
    * ConditionExpression **required**
  * ProjectOperation
    * ProjectedColumns **required**
      * items [String](#string)
  * RenameColumnOperation
    * ColumnName **required**
    * NewColumnName **required**
  * TagColumnOperation
    * ColumnName **required**
    * Tags **required**
      * items [ColumnTag](#columntag)

### TransformOperationList
* TransformOperationList `array`
  * items [TransformOperation](#transformoperation)

### TwitterParameters
* TwitterParameters `object`: Twitter parameters.
  * MaxRows **required**
  * Query **required**

### TypeCastFormat
* TypeCastFormat `string`

### UIColorPalette
* UIColorPalette `object`: The theme colors that apply to UI and to charts, excluding data colors. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide.</i> 
  * Accent
  * AccentForeground
  * Danger
  * DangerForeground
  * Dimension
  * DimensionForeground
  * Measure
  * MeasureForeground
  * PrimaryBackground
  * PrimaryForeground
  * SecondaryBackground
  * SecondaryForeground
  * Success
  * SuccessForeground
  * Warning
  * WarningForeground

### UnsupportedPricingPlanException


### UnsupportedUserEditionException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`
  * RequestId
  * Status

### UpdateAccountCustomizationRequest
* UpdateAccountCustomizationRequest `object`
  * AccountCustomization **required**
    * DefaultTheme

### UpdateAccountCustomizationResponse
* UpdateAccountCustomizationResponse `object`
  * AccountCustomization
    * DefaultTheme
  * Arn
  * AwsAccountId
  * Namespace
  * RequestId
  * Status

### UpdateAccountSettingsRequest
* UpdateAccountSettingsRequest `object`
  * DefaultNamespace **required**
  * NotificationEmail

### UpdateAccountSettingsResponse
* UpdateAccountSettingsResponse `object`
  * RequestId
  * Status

### UpdateAnalysisPermissionsRequest
* UpdateAnalysisPermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateAnalysisPermissionsResponse
* UpdateAnalysisPermissionsResponse `object`
  * AnalysisArn
  * AnalysisId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### UpdateAnalysisRequest
* UpdateAnalysisRequest `object`
  * Name **required**
  * Parameters
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * SourceEntity **required**
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * ThemeArn

### UpdateAnalysisResponse
* UpdateAnalysisResponse `object`
  * AnalysisId
  * Arn
  * RequestId
  * Status
  * UpdateStatus

### UpdateDashboardPermissionsRequest
* UpdateDashboardPermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateDashboardPermissionsResponse
* UpdateDashboardPermissionsResponse `object`
  * DashboardArn
  * DashboardId
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status

### UpdateDashboardPublishedVersionRequest
* UpdateDashboardPublishedVersionRequest `object`

### UpdateDashboardPublishedVersionResponse
* UpdateDashboardPublishedVersionResponse `object`
  * DashboardArn
  * DashboardId
  * RequestId
  * Status

### UpdateDashboardRequest
* UpdateDashboardRequest `object`
  * DashboardPublishOptions
    * AdHocFilteringOption
      * AvailabilityStatus
    * ExportToCSVOption
      * AvailabilityStatus
    * SheetControlsOption
      * VisibilityState
  * Name **required**
  * Parameters
    * DateTimeParameters
      * items [DateTimeParameter](#datetimeparameter)
    * DecimalParameters
      * items [DecimalParameter](#decimalparameter)
    * IntegerParameters
      * items [IntegerParameter](#integerparameter)
    * StringParameters
      * items [StringParameter](#stringparameter)
  * SourceEntity **required**
    * SourceTemplate
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
  * ThemeArn
  * VersionDescription

### UpdateDashboardResponse
* UpdateDashboardResponse `object`
  * Arn
  * CreationStatus
  * DashboardId
  * RequestId
  * Status
  * VersionArn

### UpdateDataSetPermissionsRequest
* UpdateDataSetPermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateDataSetPermissionsResponse
* UpdateDataSetPermissionsResponse `object`
  * DataSetArn
  * DataSetId
  * RequestId
  * Status

### UpdateDataSetRequest
* UpdateDataSetRequest `object`
  * ColumnGroups
    * items [ColumnGroup](#columngroup)
  * ColumnLevelPermissionRules
    * items [ColumnLevelPermissionRule](#columnlevelpermissionrule)
  * ImportMode **required**
  * LogicalTableMap
  * Name **required**
  * PhysicalTableMap **required**
  * RowLevelPermissionDataSet
    * Arn **required**
    * Namespace
    * PermissionPolicy **required**

### UpdateDataSetResponse
* UpdateDataSetResponse `object`
  * Arn
  * DataSetId
  * IngestionArn
  * IngestionId
  * RequestId
  * Status

### UpdateDataSourcePermissionsRequest
* UpdateDataSourcePermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateDataSourcePermissionsResponse
* UpdateDataSourcePermissionsResponse `object`
  * DataSourceArn
  * DataSourceId
  * RequestId
  * Status

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`
  * Credentials
    * CopySourceArn
    * CredentialPair
      * AlternateDataSourceParameters
        * items [DataSourceParameters](#datasourceparameters)
      * Password **required**
      * Username **required**
  * DataSourceParameters
    * AmazonElasticsearchParameters
      * Domain **required**
    * AthenaParameters
      * WorkGroup
    * AuroraParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AuroraPostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * AwsIotAnalyticsParameters
      * DataSetName **required**
    * JiraParameters
      * SiteBaseUrl **required**
    * MariaDbParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * MySqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * OracleParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PostgreSqlParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * PrestoParameters
      * Catalog **required**
      * Host **required**
      * Port **required**
    * RdsParameters
      * Database **required**
      * InstanceId **required**
    * RedshiftParameters
      * ClusterId
      * Database **required**
      * Host
      * Port
    * S3Parameters
      * ManifestFileLocation **required**
        * Bucket **required**
        * Key **required**
    * ServiceNowParameters
      * SiteBaseUrl **required**
    * SnowflakeParameters
      * Database **required**
      * Host **required**
      * Warehouse **required**
    * SparkParameters
      * Host **required**
      * Port **required**
    * SqlServerParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TeradataParameters
      * Database **required**
      * Host **required**
      * Port **required**
    * TwitterParameters
      * MaxRows **required**
      * Query **required**
  * Name **required**
  * SslProperties
    * DisableSsl
  * VpcConnectionProperties
    * VpcConnectionArn **required**

### UpdateDataSourceResponse
* UpdateDataSourceResponse `object`
  * Arn
  * DataSourceId
  * RequestId
  * Status
  * UpdateStatus

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * Description

### UpdateGroupResponse
* UpdateGroupResponse `object`
  * Group
    * Arn
    * Description
    * GroupName
    * PrincipalId
  * RequestId
  * Status

### UpdateIAMPolicyAssignmentRequest
* UpdateIAMPolicyAssignmentRequest `object`
  * AssignmentStatus
  * Identities
  * PolicyArn

### UpdateIAMPolicyAssignmentResponse
* UpdateIAMPolicyAssignmentResponse `object`
  * AssignmentId
  * AssignmentName
  * AssignmentStatus
  * Identities
  * PolicyArn
  * RequestId
  * Status

### UpdateResourcePermissionList
* UpdateResourcePermissionList `array`
  * items [ResourcePermission](#resourcepermission)

### UpdateTemplateAliasRequest
* UpdateTemplateAliasRequest `object`
  * TemplateVersionNumber **required**

### UpdateTemplateAliasResponse
* UpdateTemplateAliasResponse `object`
  * RequestId
  * Status
  * TemplateAlias
    * AliasName
    * Arn
    * TemplateVersionNumber

### UpdateTemplatePermissionsRequest
* UpdateTemplatePermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateTemplatePermissionsResponse
* UpdateTemplatePermissionsResponse `object`
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status
  * TemplateArn
  * TemplateId

### UpdateTemplateRequest
* UpdateTemplateRequest `object`
  * Name
  * SourceEntity **required**
    * SourceAnalysis
      * Arn **required**
      * DataSetReferences **required**
        * items [DataSetReference](#datasetreference)
    * SourceTemplate
      * Arn **required**
  * VersionDescription

### UpdateTemplateResponse
* UpdateTemplateResponse `object`
  * Arn
  * CreationStatus
  * RequestId
  * Status
  * TemplateId
  * VersionArn

### UpdateThemeAliasRequest
* UpdateThemeAliasRequest `object`
  * ThemeVersionNumber **required**

### UpdateThemeAliasResponse
* UpdateThemeAliasResponse `object`
  * RequestId
  * Status
  * ThemeAlias
    * AliasName
    * Arn
    * ThemeVersionNumber

### UpdateThemePermissionsRequest
* UpdateThemePermissionsRequest `object`
  * GrantPermissions
    * items [ResourcePermission](#resourcepermission)
  * RevokePermissions
    * items [ResourcePermission](#resourcepermission)

### UpdateThemePermissionsResponse
* UpdateThemePermissionsResponse `object`
  * Permissions
    * items [ResourcePermission](#resourcepermission)
  * RequestId
  * Status
  * ThemeArn
  * ThemeId

### UpdateThemeRequest
* UpdateThemeRequest `object`
  * BaseThemeId **required**
  * Configuration
    * DataColorPalette
      * Colors
        * items [HexColor](#hexcolor)
      * EmptyFillColor
      * MinMaxGradient
        * items [HexColor](#hexcolor)
    * Sheet
      * Tile
        * Border
          * Show
      * TileLayout
        * Gutter
          * Show
        * Margin
          * Show
    * UIColorPalette
      * Accent
      * AccentForeground
      * Danger
      * DangerForeground
      * Dimension
      * DimensionForeground
      * Measure
      * MeasureForeground
      * PrimaryBackground
      * PrimaryForeground
      * SecondaryBackground
      * SecondaryForeground
      * Success
      * SuccessForeground
      * Warning
      * WarningForeground
  * Name
  * VersionDescription

### UpdateThemeResponse
* UpdateThemeResponse `object`
  * Arn
  * CreationStatus
  * RequestId
  * Status
  * ThemeId
  * VersionArn

### UpdateUserRequest
* UpdateUserRequest `object`
  * CustomPermissionsName
  * Email **required**
  * Role **required**
  * UnapplyCustomPermissions

### UpdateUserResponse
* UpdateUserResponse `object`
  * RequestId
  * Status
  * User
    * Active
    * Arn
    * CustomPermissionsName
    * Email
    * IdentityType
    * PrincipalId
    * Role
    * UserName

### UploadSettings
* UploadSettings `object`: Information about the format for a source file or files.
  * ContainsHeader
  * Delimiter
  * Format
  * StartFromRow
  * TextQualifier

### User
* User `object`: A registered user of Amazon QuickSight. 
  * Active
  * Arn
  * CustomPermissionsName
  * Email
  * IdentityType
  * PrincipalId
  * Role
  * UserName

### UserList
* UserList `array`
  * items [User](#user)

### UserName
* UserName `string`

### UserRole
* UserRole `string` (values: ADMIN, AUTHOR, READER, RESTRICTED_AUTHOR, RESTRICTED_READER)

### Username
* Username `string`

### VersionDescription
* VersionDescription `string`

### VersionNumber
* VersionNumber `integer`

### VpcConnectionProperties
* VpcConnectionProperties `object`: VPC connection properties.
  * VpcConnectionArn **required**

### Warehouse
* Warehouse `string`

### WorkGroup
* WorkGroup `string`

### boolean
* boolean `boolean`

### long
* long `integer`

### string
* string `string`

### timestamp
* timestamp `string`


