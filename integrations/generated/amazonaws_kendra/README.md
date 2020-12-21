# @datafire/amazonaws_kendra

Client library for AWSKendraFrontendService

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kendra
```
```js
let amazonaws_kendra = require('@datafire/amazonaws_kendra').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Kendra is a service for indexing large document sets.

## Actions

### BatchDeleteDocument



```js
amazonaws_kendra.BatchDeleteDocument({
  "IndexId": null,
  "DocumentIdList": null
}, context)
```

#### Input
* input `object`
  * DataSourceSyncJobMetricTarget [DataSourceSyncJobMetricTarget](#datasourcesyncjobmetrictarget)
  * DocumentIdList **required**
    * items [DocumentId](#documentid)
  * IndexId **required**

#### Output
* output [BatchDeleteDocumentResponse](#batchdeletedocumentresponse)

### BatchPutDocument



```js
amazonaws_kendra.BatchPutDocument({
  "IndexId": null,
  "Documents": null
}, context)
```

#### Input
* input `object`
  * Documents **required**
    * items [Document](#document)
  * IndexId **required**
  * RoleArn

#### Output
* output [BatchPutDocumentResponse](#batchputdocumentresponse)

### CreateDataSource



```js
amazonaws_kendra.CreateDataSource({
  "Name": null,
  "IndexId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Configuration
    * ConfluenceConfiguration
      * AttachmentConfiguration
        * AttachmentFieldMappings
          * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
        * CrawlAttachments
      * BlogConfiguration
        * BlogFieldMappings
          * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * PageConfiguration
        * PageFieldMappings
          * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)
      * SecretArn **required**
      * ServerUrl **required**
      * SpaceConfiguration
        * CrawlArchivedSpaces
        * CrawlPersonalSpaces
        * ExcludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * IncludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * SpaceFieldMappings
          * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)
      * Version **required**
      * VpcConfiguration
        * SecurityGroupIds **required**
          * items [VpcSecurityGroupId](#vpcsecuritygroupid)
        * SubnetIds **required**
          * items [SubnetId](#subnetid)
    * DatabaseConfiguration
      * AclConfiguration
        * AllowedGroupsColumnName **required**
      * ColumnConfiguration **required**
        * ChangeDetectingColumns **required**
          * items [ColumnName](#columnname)
        * DocumentDataColumnName **required**
        * DocumentIdColumnName **required**
        * DocumentTitleColumnName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * ConnectionConfiguration **required**
        * DatabaseHost **required**
        * DatabaseName **required**
        * DatabasePort **required**
        * SecretArn **required**
        * TableName **required**
      * DatabaseEngineType **required**
      * SqlConfiguration
        * QueryIdentifiersEnclosingOption
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
    * GoogleDriveConfiguration
      * ExcludeMimeTypes
        * items [MimeType](#mimetype)
      * ExcludeSharedDrives
        * items [SharedDriveId](#shareddriveid)
      * ExcludeUserAccounts
        * items [UserAccount](#useraccount)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
    * OneDriveConfiguration
      * DisableLocalGroups
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * OneDriveUsers **required**
        * OneDriveUserList
          * items [OneDriveUser](#onedriveuser)
        * OneDriveUserS3Path
          * Bucket **required**
          * Key **required**
      * SecretArn **required**
      * TenantDomain **required**
    * S3Configuration
      * AccessControlListConfiguration
        * KeyPath
      * BucketName **required**
      * DocumentsMetadataConfiguration [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPrefixes
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SalesforceConfiguration
      * ChatterFeedConfiguration
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeFilterTypes
          * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)
      * CrawlAttachments
      * ExcludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * IncludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * KnowledgeArticleConfiguration
        * CustomKnowledgeArticleTypeConfigurations
          * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
        * IncludedStates **required**
          * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
        * StandardKnowledgeArticleTypeConfiguration
          * DocumentDataFieldName **required**
          * DocumentTitleFieldName
          * FieldMappings
      * SecretArn **required**
      * ServerUrl **required**
      * StandardObjectAttachmentConfiguration
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * StandardObjectConfigurations
        * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)
    * ServiceNowConfiguration
      * HostUrl **required**
      * KnowledgeArticleConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * ServiceCatalogConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * ServiceNowBuildVersion **required**
    * SharePointConfiguration
      * CrawlAttachments
      * DisableLocalGroups
      * DocumentTitleFieldName
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * SharePointVersion **required**
      * Urls **required**
        * items [Url](#url)
      * UseChangeLog
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
  * Description
  * IndexId **required**
  * Name **required**
  * RoleArn
  * Schedule
  * Tags
    * items [Tag](#tag)
  * Type **required**

#### Output
* output [CreateDataSourceResponse](#createdatasourceresponse)

### CreateFaq



```js
amazonaws_kendra.CreateFaq({
  "IndexId": null,
  "Name": null,
  "S3Path": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * FileFormat
  * IndexId **required**
  * Name **required**
  * RoleArn **required**
  * S3Path **required**
    * Bucket **required**
    * Key **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateFaqResponse](#createfaqresponse)

### CreateIndex



```js
amazonaws_kendra.CreateIndex({
  "Name": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * Edition
  * Name **required**
  * RoleArn **required**
  * ServerSideEncryptionConfiguration
    * KmsKeyId
  * Tags
    * items [Tag](#tag)
  * UserContextPolicy
  * UserTokenConfigurations
    * items [UserTokenConfiguration](#usertokenconfiguration)

#### Output
* output [CreateIndexResponse](#createindexresponse)

### CreateThesaurus



```js
amazonaws_kendra.CreateThesaurus({
  "IndexId": null,
  "Name": null,
  "RoleArn": null,
  "SourceS3Path": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * IndexId **required**
  * Name **required**
  * RoleArn **required**
  * SourceS3Path **required**
    * Bucket **required**
    * Key **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateThesaurusResponse](#createthesaurusresponse)

### DeleteDataSource



```js
amazonaws_kendra.DeleteDataSource({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
*Output schema unknown*

### DeleteFaq



```js
amazonaws_kendra.DeleteFaq({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
*Output schema unknown*

### DeleteIndex



```js
amazonaws_kendra.DeleteIndex({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
*Output schema unknown*

### DeleteThesaurus



```js
amazonaws_kendra.DeleteThesaurus({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
*Output schema unknown*

### DescribeDataSource



```js
amazonaws_kendra.DescribeDataSource({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
* output [DescribeDataSourceResponse](#describedatasourceresponse)

### DescribeFaq



```js
amazonaws_kendra.DescribeFaq({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
* output [DescribeFaqResponse](#describefaqresponse)

### DescribeIndex



```js
amazonaws_kendra.DescribeIndex({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DescribeIndexResponse](#describeindexresponse)

### DescribeThesaurus



```js
amazonaws_kendra.DescribeThesaurus({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
* output [DescribeThesaurusResponse](#describethesaurusresponse)

### ListDataSourceSyncJobs



```js
amazonaws_kendra.ListDataSourceSyncJobs({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Id **required**
  * IndexId **required**
  * MaxResults
  * NextToken
  * StartTimeFilter
    * EndTime
    * StartTime
  * StatusFilter

#### Output
* output [ListDataSourceSyncJobsResponse](#listdatasourcesyncjobsresponse)

### ListDataSources



```js
amazonaws_kendra.ListDataSources({
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * IndexId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListDataSourcesResponse](#listdatasourcesresponse)

### ListFaqs



```js
amazonaws_kendra.ListFaqs({
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * IndexId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListFaqsResponse](#listfaqsresponse)

### ListIndices



```js
amazonaws_kendra.ListIndices({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListIndicesResponse](#listindicesresponse)

### ListTagsForResource



```js
amazonaws_kendra.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListThesauri



```js
amazonaws_kendra.ListThesauri({
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * IndexId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListThesauriResponse](#listthesauriresponse)

### Query



```js
amazonaws_kendra.Query({
  "IndexId": null,
  "QueryText": null
}, context)
```

#### Input
* input `object`
  * AttributeFilter
    * AndAllFilters
      * items [AttributeFilter](#attributefilter)
    * ContainsAll
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * ContainsAny
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * EqualsTo
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * NotFilter
      * AndAllFilters
        * items [AttributeFilter](#attributefilter)
      * ContainsAll
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * ContainsAny
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * EqualsTo
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * NotFilter
        * AndAllFilters
          * items [AttributeFilter](#attributefilter)
        * ContainsAll
          * Key **required**
          * Value **required**
        * ContainsAny
          * Key **required**
          * Value **required**
        * EqualsTo
          * Key **required**
          * Value **required**
        * GreaterThan
          * Key **required**
          * Value **required**
        * GreaterThanOrEquals
          * Key **required**
          * Value **required**
        * LessThan
          * Key **required**
          * Value **required**
        * LessThanOrEquals
          * Key **required**
          * Value **required**
        * NotFilter
          * AndAllFilters
          * ContainsAll
          * ContainsAny
          * EqualsTo
          * GreaterThan
          * GreaterThanOrEquals
          * LessThan
          * LessThanOrEquals
          * NotFilter
          * OrAllFilters
        * OrAllFilters
          * items [AttributeFilter](#attributefilter)
      * OrAllFilters
        * items [AttributeFilter](#attributefilter)
    * OrAllFilters
      * items [AttributeFilter](#attributefilter)
  * Facets
    * items [Facet](#facet)
  * IndexId **required**
  * PageNumber
  * PageSize
  * QueryResultTypeFilter
  * QueryText **required**
  * RequestedDocumentAttributes
    * items [DocumentAttributeKey](#documentattributekey)
  * SortingConfiguration
    * DocumentAttributeKey **required**
    * SortOrder **required**
  * UserContext
    * Token
  * VisitorId

#### Output
* output [QueryResult](#queryresult)

### StartDataSourceSyncJob



```js
amazonaws_kendra.StartDataSourceSyncJob({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
* output [StartDataSourceSyncJobResponse](#startdatasourcesyncjobresponse)

### StopDataSourceSyncJob



```js
amazonaws_kendra.StopDataSourceSyncJob({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * IndexId **required**

#### Output
*Output schema unknown*

### SubmitFeedback



```js
amazonaws_kendra.SubmitFeedback({
  "IndexId": null,
  "QueryId": null
}, context)
```

#### Input
* input `object`
  * ClickFeedbackItems
    * items [ClickFeedback](#clickfeedback)
  * IndexId **required**
  * QueryId **required**
  * RelevanceFeedbackItems
    * items [RelevanceFeedback](#relevancefeedback)

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_kendra.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_kendra.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDataSource



```js
amazonaws_kendra.UpdateDataSource({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Configuration [DataSourceConfiguration](#datasourceconfiguration)
  * Description
  * Id **required**
  * IndexId **required**
  * Name
  * RoleArn
  * Schedule

#### Output
*Output schema unknown*

### UpdateIndex



```js
amazonaws_kendra.UpdateIndex({
  "Id": null
}, context)
```

#### Input
* input `object`
  * CapacityUnits
    * QueryCapacityUnits **required**
    * StorageCapacityUnits **required**
  * Description
  * DocumentMetadataConfigurationUpdates
    * items [DocumentMetadataConfiguration](#documentmetadataconfiguration)
  * Id **required**
  * Name
  * RoleArn
  * UserContextPolicy
  * UserTokenConfigurations
    * items [UserTokenConfiguration](#usertokenconfiguration)

#### Output
*Output schema unknown*

### UpdateThesaurus



```js
amazonaws_kendra.UpdateThesaurus({
  "Id": null,
  "IndexId": null
}, context)
```

#### Input
* input `object`
  * Description
  * Id **required**
  * IndexId **required**
  * Name
  * RoleArn
  * SourceS3Path [S3Path](#s3path)

#### Output
*Output schema unknown*



## Definitions

### AccessControlListConfiguration
* AccessControlListConfiguration `object`: Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.
  * KeyPath

### AccessDeniedException


### AclConfiguration
* AclConfiguration `object`: Provides information about the column that should be used for filtering the query response by groups.
  * AllowedGroupsColumnName **required**

### AdditionalResultAttribute
* AdditionalResultAttribute `object`: An attribute returned from an index query.
  * Key **required**
  * Value **required**
    * TextWithHighlightsValue
      * Highlights
        * items [Highlight](#highlight)
      * Text
  * ValueType **required**

### AdditionalResultAttributeList
* AdditionalResultAttributeList `array`
  * items [AdditionalResultAttribute](#additionalresultattribute)

### AdditionalResultAttributeValue
* AdditionalResultAttributeValue `object`: An attribute returned with a document from a search.
  * TextWithHighlightsValue
    * Highlights
      * items [Highlight](#highlight)
    * Text

### AdditionalResultAttributeValueType
* AdditionalResultAttributeValueType `string` (values: TEXT_WITH_HIGHLIGHTS_VALUE)

### AmazonResourceName
* AmazonResourceName `string`

### AttributeFilter
* AttributeFilter `object`: <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p>
  * AndAllFilters
    * items [AttributeFilter](#attributefilter)
  * ContainsAll
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * ContainsAny
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * EqualsTo
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * GreaterThan
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * GreaterThanOrEquals
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * LessThan
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * LessThanOrEquals
    * Key **required**
    * Value **required**
      * DateValue
      * LongValue
      * StringListValue
        * items [String](#string)
      * StringValue
  * NotFilter
    * AndAllFilters
      * items [AttributeFilter](#attributefilter)
    * ContainsAll
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * ContainsAny
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * EqualsTo
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * NotFilter
      * AndAllFilters
        * items [AttributeFilter](#attributefilter)
      * ContainsAll
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * ContainsAny
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * EqualsTo
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * NotFilter
        * AndAllFilters
          * items [AttributeFilter](#attributefilter)
        * ContainsAll
          * Key **required**
          * Value **required**
        * ContainsAny
          * Key **required**
          * Value **required**
        * EqualsTo
          * Key **required**
          * Value **required**
        * GreaterThan
          * Key **required**
          * Value **required**
        * GreaterThanOrEquals
          * Key **required**
          * Value **required**
        * LessThan
          * Key **required**
          * Value **required**
        * LessThanOrEquals
          * Key **required**
          * Value **required**
        * NotFilter
          * AndAllFilters
          * ContainsAll
          * ContainsAny
          * EqualsTo
          * GreaterThan
          * GreaterThanOrEquals
          * LessThan
          * LessThanOrEquals
          * NotFilter
          * OrAllFilters
        * OrAllFilters
          * items [AttributeFilter](#attributefilter)
      * OrAllFilters
        * items [AttributeFilter](#attributefilter)
    * OrAllFilters
      * items [AttributeFilter](#attributefilter)
  * OrAllFilters
    * items [AttributeFilter](#attributefilter)

### AttributeFilterList
* AttributeFilterList `array`
  * items [AttributeFilter](#attributefilter)

### BatchDeleteDocumentRequest
* BatchDeleteDocumentRequest `object`
  * DataSourceSyncJobMetricTarget [DataSourceSyncJobMetricTarget](#datasourcesyncjobmetrictarget)
  * DocumentIdList **required**
    * items [DocumentId](#documentid)
  * IndexId **required**

### BatchDeleteDocumentResponse
* BatchDeleteDocumentResponse `object`
  * FailedDocuments
    * items [BatchDeleteDocumentResponseFailedDocument](#batchdeletedocumentresponsefaileddocument)

### BatchDeleteDocumentResponseFailedDocument
* BatchDeleteDocumentResponseFailedDocument `object`: Provides information about documents that could not be removed from an index by the <a>BatchDeleteDocument</a> operation.
  * ErrorCode
  * ErrorMessage
  * Id

### BatchDeleteDocumentResponseFailedDocuments
* BatchDeleteDocumentResponseFailedDocuments `array`
  * items [BatchDeleteDocumentResponseFailedDocument](#batchdeletedocumentresponsefaileddocument)

### BatchPutDocumentRequest
* BatchPutDocumentRequest `object`
  * Documents **required**
    * items [Document](#document)
  * IndexId **required**
  * RoleArn

### BatchPutDocumentResponse
* BatchPutDocumentResponse `object`
  * FailedDocuments
    * items [BatchPutDocumentResponseFailedDocument](#batchputdocumentresponsefaileddocument)

### BatchPutDocumentResponseFailedDocument
* BatchPutDocumentResponseFailedDocument `object`: Provides information about a document that could not be indexed.
  * ErrorCode
  * ErrorMessage
  * Id

### BatchPutDocumentResponseFailedDocuments
* BatchPutDocumentResponseFailedDocuments `array`
  * items [BatchPutDocumentResponseFailedDocument](#batchputdocumentresponsefaileddocument)

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### CapacityUnitsConfiguration
* CapacityUnitsConfiguration `object`: Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements.
  * QueryCapacityUnits **required**
  * StorageCapacityUnits **required**

### ChangeDetectingColumns
* ChangeDetectingColumns `array`
  * items [ColumnName](#columnname)

### ClaimRegex
* ClaimRegex `string`

### ClickFeedback
* ClickFeedback `object`: Gathers information about when a particular result was clicked by a user. Your application uses the <a>SubmitFeedback</a> operation to provide click information.
  * ClickTime **required**
  * ResultId **required**

### ClickFeedbackList
* ClickFeedbackList `array`
  * items [ClickFeedback](#clickfeedback)

### ClientTokenName
* ClientTokenName `string`

### ColumnConfiguration
* ColumnConfiguration `object`: Provides information about how Amazon Kendra should use the columns of a database in an index.
  * ChangeDetectingColumns **required**
    * items [ColumnName](#columnname)
  * DocumentDataColumnName **required**
  * DocumentIdColumnName **required**
  * DocumentTitleColumnName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)

### ColumnName
* ColumnName `string`

### ConflictException


### ConfluenceAttachmentConfiguration
* ConfluenceAttachmentConfiguration `object`: Specifies the attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
  * AttachmentFieldMappings
    * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
  * CrawlAttachments

### ConfluenceAttachmentFieldMappingsList
* ConfluenceAttachmentFieldMappingsList `array`
  * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)

### ConfluenceAttachmentFieldName
* ConfluenceAttachmentFieldName `string` (values: AUTHOR, CONTENT_TYPE, CREATED_DATE, DISPLAY_URL, FILE_SIZE, ITEM_TYPE, PARENT_ID, SPACE_KEY, SPACE_NAME, URL, VERSION)

### ConfluenceAttachmentToIndexFieldMapping
* ConfluenceAttachmentToIndexFieldMapping `object`: <p>Defines the mapping between a field in the Confluence data source to a Amazon Kendra index field.</p> <p>You must first create the index field using the operation. </p>
  * DataSourceFieldName
  * DateFieldFormat
  * IndexFieldName

### ConfluenceBlogConfiguration
* ConfluenceBlogConfiguration `object`: Specifies the blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the data type.
  * BlogFieldMappings
    * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)

### ConfluenceBlogFieldMappingsList
* ConfluenceBlogFieldMappingsList `array`
  * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)

### ConfluenceBlogFieldName
* ConfluenceBlogFieldName `string` (values: AUTHOR, DISPLAY_URL, ITEM_TYPE, LABELS, PUBLISH_DATE, SPACE_KEY, SPACE_NAME, URL, VERSION)

### ConfluenceBlogToIndexFieldMapping
* ConfluenceBlogToIndexFieldMapping `object`: <p>Defines the mapping between a blog field in the Confluence data source to a Amazon Kendra index field.</p> <p>You must first create the index field using the operation. </p>
  * DataSourceFieldName
  * DateFieldFormat
  * IndexFieldName

### ConfluenceConfiguration
* ConfluenceConfiguration `object`: Provides configuration information for data sources that connect to Confluence.
  * AttachmentConfiguration
    * AttachmentFieldMappings
      * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
    * CrawlAttachments
  * BlogConfiguration
    * BlogFieldMappings
      * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)
  * ExclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * InclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * PageConfiguration
    * PageFieldMappings
      * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)
  * SecretArn **required**
  * ServerUrl **required**
  * SpaceConfiguration
    * CrawlArchivedSpaces
    * CrawlPersonalSpaces
    * ExcludeSpaces
      * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
    * IncludeSpaces
      * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
    * SpaceFieldMappings
      * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)
  * Version **required**
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [VpcSecurityGroupId](#vpcsecuritygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)

### ConfluencePageConfiguration
* ConfluencePageConfiguration `object`: Specifies the page settings for the Confluence data source.
  * PageFieldMappings
    * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)

### ConfluencePageFieldMappingsList
* ConfluencePageFieldMappingsList `array`
  * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)

### ConfluencePageFieldName
* ConfluencePageFieldName `string` (values: AUTHOR, CONTENT_STATUS, CREATED_DATE, DISPLAY_URL, ITEM_TYPE, LABELS, MODIFIED_DATE, PARENT_ID, SPACE_KEY, SPACE_NAME, URL, VERSION)

### ConfluencePageToIndexFieldMapping
* ConfluencePageToIndexFieldMapping `object`: <p>Defines the mapping between a field in the Confluence data source to a Amazon Kendra index field.</p> <p>You must first create the index field using the operation. </p>
  * DataSourceFieldName
  * DateFieldFormat
  * IndexFieldName

### ConfluenceSpaceConfiguration
* ConfluenceSpaceConfiguration `object`: Specifies the configuration for indexing Confluence spaces.
  * CrawlArchivedSpaces
  * CrawlPersonalSpaces
  * ExcludeSpaces
    * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
  * IncludeSpaces
    * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
  * SpaceFieldMappings
    * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)

### ConfluenceSpaceFieldMappingsList
* ConfluenceSpaceFieldMappingsList `array`
  * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)

### ConfluenceSpaceFieldName
* ConfluenceSpaceFieldName `string` (values: DISPLAY_URL, ITEM_TYPE, SPACE_KEY, URL)

### ConfluenceSpaceIdentifier
* ConfluenceSpaceIdentifier `string`

### ConfluenceSpaceList
* ConfluenceSpaceList `array`
  * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)

### ConfluenceSpaceToIndexFieldMapping
* ConfluenceSpaceToIndexFieldMapping `object`: <p>Defines the mapping between a field in the Confluence data source to a Amazon Kendra index field.</p> <p>You must first create the index field using the operation. </p>
  * DataSourceFieldName
  * DateFieldFormat
  * IndexFieldName

### ConfluenceVersion
* ConfluenceVersion `string` (values: CLOUD, SERVER)

### ConnectionConfiguration
* ConnectionConfiguration `object`: Provides the information necessary to connect to a database.
  * DatabaseHost **required**
  * DatabaseName **required**
  * DatabasePort **required**
  * SecretArn **required**
  * TableName **required**

### ContentType
* ContentType `string` (values: PDF, HTML, MS_WORD, PLAIN_TEXT, PPT)

### CreateDataSourceRequest
* CreateDataSourceRequest `object`
  * ClientToken
  * Configuration
    * ConfluenceConfiguration
      * AttachmentConfiguration
        * AttachmentFieldMappings
          * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
        * CrawlAttachments
      * BlogConfiguration
        * BlogFieldMappings
          * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * PageConfiguration
        * PageFieldMappings
          * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)
      * SecretArn **required**
      * ServerUrl **required**
      * SpaceConfiguration
        * CrawlArchivedSpaces
        * CrawlPersonalSpaces
        * ExcludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * IncludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * SpaceFieldMappings
          * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)
      * Version **required**
      * VpcConfiguration
        * SecurityGroupIds **required**
          * items [VpcSecurityGroupId](#vpcsecuritygroupid)
        * SubnetIds **required**
          * items [SubnetId](#subnetid)
    * DatabaseConfiguration
      * AclConfiguration
        * AllowedGroupsColumnName **required**
      * ColumnConfiguration **required**
        * ChangeDetectingColumns **required**
          * items [ColumnName](#columnname)
        * DocumentDataColumnName **required**
        * DocumentIdColumnName **required**
        * DocumentTitleColumnName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * ConnectionConfiguration **required**
        * DatabaseHost **required**
        * DatabaseName **required**
        * DatabasePort **required**
        * SecretArn **required**
        * TableName **required**
      * DatabaseEngineType **required**
      * SqlConfiguration
        * QueryIdentifiersEnclosingOption
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
    * GoogleDriveConfiguration
      * ExcludeMimeTypes
        * items [MimeType](#mimetype)
      * ExcludeSharedDrives
        * items [SharedDriveId](#shareddriveid)
      * ExcludeUserAccounts
        * items [UserAccount](#useraccount)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
    * OneDriveConfiguration
      * DisableLocalGroups
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * OneDriveUsers **required**
        * OneDriveUserList
          * items [OneDriveUser](#onedriveuser)
        * OneDriveUserS3Path
          * Bucket **required**
          * Key **required**
      * SecretArn **required**
      * TenantDomain **required**
    * S3Configuration
      * AccessControlListConfiguration
        * KeyPath
      * BucketName **required**
      * DocumentsMetadataConfiguration [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPrefixes
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SalesforceConfiguration
      * ChatterFeedConfiguration
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeFilterTypes
          * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)
      * CrawlAttachments
      * ExcludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * IncludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * KnowledgeArticleConfiguration
        * CustomKnowledgeArticleTypeConfigurations
          * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
        * IncludedStates **required**
          * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
        * StandardKnowledgeArticleTypeConfiguration
          * DocumentDataFieldName **required**
          * DocumentTitleFieldName
          * FieldMappings
      * SecretArn **required**
      * ServerUrl **required**
      * StandardObjectAttachmentConfiguration
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * StandardObjectConfigurations
        * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)
    * ServiceNowConfiguration
      * HostUrl **required**
      * KnowledgeArticleConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * ServiceCatalogConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * ServiceNowBuildVersion **required**
    * SharePointConfiguration
      * CrawlAttachments
      * DisableLocalGroups
      * DocumentTitleFieldName
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * SharePointVersion **required**
      * Urls **required**
        * items [Url](#url)
      * UseChangeLog
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
  * Description
  * IndexId **required**
  * Name **required**
  * RoleArn
  * Schedule
  * Tags
    * items [Tag](#tag)
  * Type **required**

### CreateDataSourceResponse
* CreateDataSourceResponse `object`
  * Id **required**

### CreateFaqRequest
* CreateFaqRequest `object`
  * ClientToken
  * Description
  * FileFormat
  * IndexId **required**
  * Name **required**
  * RoleArn **required**
  * S3Path **required**
    * Bucket **required**
    * Key **required**
  * Tags
    * items [Tag](#tag)

### CreateFaqResponse
* CreateFaqResponse `object`
  * Id

### CreateIndexRequest
* CreateIndexRequest `object`
  * ClientToken
  * Description
  * Edition
  * Name **required**
  * RoleArn **required**
  * ServerSideEncryptionConfiguration
    * KmsKeyId
  * Tags
    * items [Tag](#tag)
  * UserContextPolicy
  * UserTokenConfigurations
    * items [UserTokenConfiguration](#usertokenconfiguration)

### CreateIndexResponse
* CreateIndexResponse `object`
  * Id

### CreateThesaurusRequest
* CreateThesaurusRequest `object`
  * ClientToken
  * Description
  * IndexId **required**
  * Name **required**
  * RoleArn **required**
  * SourceS3Path **required**
    * Bucket **required**
    * Key **required**
  * Tags
    * items [Tag](#tag)

### CreateThesaurusResponse
* CreateThesaurusResponse `object`
  * Id

### DataSourceConfiguration
* DataSourceConfiguration `object`: Configuration information for a Amazon Kendra data source.
  * ConfluenceConfiguration
    * AttachmentConfiguration
      * AttachmentFieldMappings
        * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
      * CrawlAttachments
    * BlogConfiguration
      * BlogFieldMappings
        * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)
    * ExclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * InclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * PageConfiguration
      * PageFieldMappings
        * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)
    * SecretArn **required**
    * ServerUrl **required**
    * SpaceConfiguration
      * CrawlArchivedSpaces
      * CrawlPersonalSpaces
      * ExcludeSpaces
        * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
      * IncludeSpaces
        * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
      * SpaceFieldMappings
        * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)
    * Version **required**
    * VpcConfiguration
      * SecurityGroupIds **required**
        * items [VpcSecurityGroupId](#vpcsecuritygroupid)
      * SubnetIds **required**
        * items [SubnetId](#subnetid)
  * DatabaseConfiguration
    * AclConfiguration
      * AllowedGroupsColumnName **required**
    * ColumnConfiguration **required**
      * ChangeDetectingColumns **required**
        * items [ColumnName](#columnname)
      * DocumentDataColumnName **required**
      * DocumentIdColumnName **required**
      * DocumentTitleColumnName
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * ConnectionConfiguration **required**
      * DatabaseHost **required**
      * DatabaseName **required**
      * DatabasePort **required**
      * SecretArn **required**
      * TableName **required**
    * DatabaseEngineType **required**
    * SqlConfiguration
      * QueryIdentifiersEnclosingOption
    * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
  * GoogleDriveConfiguration
    * ExcludeMimeTypes
      * items [MimeType](#mimetype)
    * ExcludeSharedDrives
      * items [SharedDriveId](#shareddriveid)
    * ExcludeUserAccounts
      * items [UserAccount](#useraccount)
    * ExclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * InclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SecretArn **required**
  * OneDriveConfiguration
    * DisableLocalGroups
    * ExclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * InclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * OneDriveUsers **required**
      * OneDriveUserList
        * items [OneDriveUser](#onedriveuser)
      * OneDriveUserS3Path
        * Bucket **required**
        * Key **required**
    * SecretArn **required**
    * TenantDomain **required**
  * S3Configuration
    * AccessControlListConfiguration
      * KeyPath
    * BucketName **required**
    * DocumentsMetadataConfiguration [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
    * ExclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * InclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * InclusionPrefixes
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * SalesforceConfiguration
    * ChatterFeedConfiguration
      * DocumentDataFieldName **required**
      * DocumentTitleFieldName
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * IncludeFilterTypes
        * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)
    * CrawlAttachments
    * ExcludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * IncludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * KnowledgeArticleConfiguration
      * CustomKnowledgeArticleTypeConfigurations
        * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
      * IncludedStates **required**
        * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
      * StandardKnowledgeArticleTypeConfiguration
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * SecretArn **required**
    * ServerUrl **required**
    * StandardObjectAttachmentConfiguration
      * DocumentTitleFieldName
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * StandardObjectConfigurations
      * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)
  * ServiceNowConfiguration
    * HostUrl **required**
    * KnowledgeArticleConfiguration
      * CrawlAttachments
      * DocumentDataFieldName **required**
      * DocumentTitleFieldName
      * ExcludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * IncludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SecretArn **required**
    * ServiceCatalogConfiguration
      * CrawlAttachments
      * DocumentDataFieldName **required**
      * DocumentTitleFieldName
      * ExcludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * IncludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * ServiceNowBuildVersion **required**
  * SharePointConfiguration
    * CrawlAttachments
    * DisableLocalGroups
    * DocumentTitleFieldName
    * ExclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * InclusionPatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SecretArn **required**
    * SharePointVersion **required**
    * Urls **required**
      * items [Url](#url)
    * UseChangeLog
    * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

### DataSourceDateFieldFormat
* DataSourceDateFieldFormat `string`

### DataSourceFieldName
* DataSourceFieldName `string`

### DataSourceId
* DataSourceId `string`

### DataSourceInclusionsExclusionsStrings
* DataSourceInclusionsExclusionsStrings `array`
  * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)

### DataSourceInclusionsExclusionsStringsMember
* DataSourceInclusionsExclusionsStringsMember `string`

### DataSourceName
* DataSourceName `string`

### DataSourceStatus
* DataSourceStatus `string` (values: CREATING, DELETING, FAILED, UPDATING, ACTIVE)

### DataSourceSummary
* DataSourceSummary `object`: Summary information for a Amazon Kendra data source. Returned in a call to .
  * CreatedAt
  * Id
  * Name
  * Status
  * Type
  * UpdatedAt

### DataSourceSummaryList
* DataSourceSummaryList `array`
  * items [DataSourceSummary](#datasourcesummary)

### DataSourceSyncJob
* DataSourceSyncJob `object`: Provides information about a synchronization job.
  * DataSourceErrorCode
  * EndTime
  * ErrorCode
  * ErrorMessage
  * ExecutionId
  * Metrics
    * DocumentsAdded
    * DocumentsDeleted
    * DocumentsFailed
    * DocumentsModified
    * DocumentsScanned
  * StartTime
  * Status

### DataSourceSyncJobHistoryList
* DataSourceSyncJobHistoryList `array`
  * items [DataSourceSyncJob](#datasourcesyncjob)

### DataSourceSyncJobId
* DataSourceSyncJobId `string`

### DataSourceSyncJobMetricTarget
* DataSourceSyncJobMetricTarget `object`: Maps a particular data source sync job to a particular data source.
  * DataSourceId **required**
  * DataSourceSyncJobId **required**

### DataSourceSyncJobMetrics
* DataSourceSyncJobMetrics `object`: Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
  * DocumentsAdded
  * DocumentsDeleted
  * DocumentsFailed
  * DocumentsModified
  * DocumentsScanned

### DataSourceSyncJobStatus
* DataSourceSyncJobStatus `string` (values: FAILED, SUCCEEDED, SYNCING, INCOMPLETE, STOPPING, ABORTED, SYNCING_INDEXING)

### DataSourceToIndexFieldMapping
* DataSourceToIndexFieldMapping `object`: Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <a>UpdateIndex</a> operation.
  * DataSourceFieldName **required**
  * DateFieldFormat
  * IndexFieldName **required**

### DataSourceToIndexFieldMappingList
* DataSourceToIndexFieldMappingList `array`
  * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)

### DataSourceType
* DataSourceType `string` (values: S3, SHAREPOINT, DATABASE, SALESFORCE, ONEDRIVE, SERVICENOW, CUSTOM, CONFLUENCE, GOOGLEDRIVE)

### DataSourceVpcConfiguration
* DataSourceVpcConfiguration `object`: Provides information for connecting to an Amazon VPC.
  * SecurityGroupIds **required**
    * items [VpcSecurityGroupId](#vpcsecuritygroupid)
  * SubnetIds **required**
    * items [SubnetId](#subnetid)

### DatabaseConfiguration
* DatabaseConfiguration `object`: Provides the information necessary to connect a database to an index. 
  * AclConfiguration
    * AllowedGroupsColumnName **required**
  * ColumnConfiguration **required**
    * ChangeDetectingColumns **required**
      * items [ColumnName](#columnname)
    * DocumentDataColumnName **required**
    * DocumentIdColumnName **required**
    * DocumentTitleColumnName
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * ConnectionConfiguration **required**
    * DatabaseHost **required**
    * DatabaseName **required**
    * DatabasePort **required**
    * SecretArn **required**
    * TableName **required**
  * DatabaseEngineType **required**
  * SqlConfiguration
    * QueryIdentifiersEnclosingOption
  * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

### DatabaseEngineType
* DatabaseEngineType `string` (values: RDS_AURORA_MYSQL, RDS_AURORA_POSTGRESQL, RDS_MYSQL, RDS_POSTGRESQL)

### DatabaseHost
* DatabaseHost `string`

### DatabaseName
* DatabaseName `string`

### DatabasePort
* DatabasePort `integer`

### DeleteDataSourceRequest
* DeleteDataSourceRequest `object`
  * Id **required**
  * IndexId **required**

### DeleteFaqRequest
* DeleteFaqRequest `object`
  * Id **required**
  * IndexId **required**

### DeleteIndexRequest
* DeleteIndexRequest `object`
  * Id **required**

### DeleteThesaurusRequest
* DeleteThesaurusRequest `object`
  * Id **required**
  * IndexId **required**

### DescribeDataSourceRequest
* DescribeDataSourceRequest `object`
  * Id **required**
  * IndexId **required**

### DescribeDataSourceResponse
* DescribeDataSourceResponse `object`
  * Configuration
    * ConfluenceConfiguration
      * AttachmentConfiguration
        * AttachmentFieldMappings
          * items [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)
        * CrawlAttachments
      * BlogConfiguration
        * BlogFieldMappings
          * items [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * PageConfiguration
        * PageFieldMappings
          * items [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)
      * SecretArn **required**
      * ServerUrl **required**
      * SpaceConfiguration
        * CrawlArchivedSpaces
        * CrawlPersonalSpaces
        * ExcludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * IncludeSpaces
          * items [ConfluenceSpaceIdentifier](#confluencespaceidentifier)
        * SpaceFieldMappings
          * items [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)
      * Version **required**
      * VpcConfiguration
        * SecurityGroupIds **required**
          * items [VpcSecurityGroupId](#vpcsecuritygroupid)
        * SubnetIds **required**
          * items [SubnetId](#subnetid)
    * DatabaseConfiguration
      * AclConfiguration
        * AllowedGroupsColumnName **required**
      * ColumnConfiguration **required**
        * ChangeDetectingColumns **required**
          * items [ColumnName](#columnname)
        * DocumentDataColumnName **required**
        * DocumentIdColumnName **required**
        * DocumentTitleColumnName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * ConnectionConfiguration **required**
        * DatabaseHost **required**
        * DatabaseName **required**
        * DatabasePort **required**
        * SecretArn **required**
        * TableName **required**
      * DatabaseEngineType **required**
      * SqlConfiguration
        * QueryIdentifiersEnclosingOption
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
    * GoogleDriveConfiguration
      * ExcludeMimeTypes
        * items [MimeType](#mimetype)
      * ExcludeSharedDrives
        * items [SharedDriveId](#shareddriveid)
      * ExcludeUserAccounts
        * items [UserAccount](#useraccount)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
    * OneDriveConfiguration
      * DisableLocalGroups
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * OneDriveUsers **required**
        * OneDriveUserList
          * items [OneDriveUser](#onedriveuser)
        * OneDriveUserS3Path
          * Bucket **required**
          * Key **required**
      * SecretArn **required**
      * TenantDomain **required**
    * S3Configuration
      * AccessControlListConfiguration
        * KeyPath
      * BucketName **required**
      * DocumentsMetadataConfiguration [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * InclusionPrefixes
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * SalesforceConfiguration
      * ChatterFeedConfiguration
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeFilterTypes
          * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)
      * CrawlAttachments
      * ExcludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * IncludeAttachmentFilePatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * KnowledgeArticleConfiguration
        * CustomKnowledgeArticleTypeConfigurations
          * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
        * IncludedStates **required**
          * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
        * StandardKnowledgeArticleTypeConfiguration
          * DocumentDataFieldName **required**
          * DocumentTitleFieldName
          * FieldMappings
      * SecretArn **required**
      * ServerUrl **required**
      * StandardObjectAttachmentConfiguration
        * DocumentTitleFieldName
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * StandardObjectConfigurations
        * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)
    * ServiceNowConfiguration
      * HostUrl **required**
      * KnowledgeArticleConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * ServiceCatalogConfiguration
        * CrawlAttachments
        * DocumentDataFieldName **required**
        * DocumentTitleFieldName
        * ExcludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
        * FieldMappings
          * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
        * IncludeAttachmentFilePatterns
          * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * ServiceNowBuildVersion **required**
    * SharePointConfiguration
      * CrawlAttachments
      * DisableLocalGroups
      * DocumentTitleFieldName
      * ExclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
      * InclusionPatterns
        * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
      * SecretArn **required**
      * SharePointVersion **required**
      * Urls **required**
        * items [Url](#url)
      * UseChangeLog
      * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)
  * CreatedAt
  * Description
  * ErrorMessage
  * Id
  * IndexId
  * Name
  * RoleArn
  * Schedule
  * Status
  * Type
  * UpdatedAt

### DescribeFaqRequest
* DescribeFaqRequest `object`
  * Id **required**
  * IndexId **required**

### DescribeFaqResponse
* DescribeFaqResponse `object`
  * CreatedAt
  * Description
  * ErrorMessage
  * FileFormat
  * Id
  * IndexId
  * Name
  * RoleArn
  * S3Path [S3Path](#s3path)
  * Status
  * UpdatedAt

### DescribeIndexRequest
* DescribeIndexRequest `object`
  * Id **required**

### DescribeIndexResponse
* DescribeIndexResponse `object`
  * CapacityUnits
    * QueryCapacityUnits **required**
    * StorageCapacityUnits **required**
  * CreatedAt
  * Description
  * DocumentMetadataConfigurations
    * items [DocumentMetadataConfiguration](#documentmetadataconfiguration)
  * Edition
  * ErrorMessage
  * Id
  * IndexStatistics
    * FaqStatistics **required**
      * IndexedQuestionAnswersCount **required**
    * TextDocumentStatistics **required**
      * IndexedTextBytes **required**
      * IndexedTextDocumentsCount **required**
  * Name
  * RoleArn
  * ServerSideEncryptionConfiguration
    * KmsKeyId
  * Status
  * UpdatedAt
  * UserContextPolicy
  * UserTokenConfigurations
    * items [UserTokenConfiguration](#usertokenconfiguration)

### DescribeThesaurusRequest
* DescribeThesaurusRequest `object`
  * Id **required**
  * IndexId **required**

### DescribeThesaurusResponse
* DescribeThesaurusResponse `object`
  * CreatedAt
  * Description
  * ErrorMessage
  * FileSizeBytes
  * Id
  * IndexId
  * Name
  * RoleArn
  * SourceS3Path [S3Path](#s3path)
  * Status
  * SynonymRuleCount
  * TermCount
  * UpdatedAt

### Description
* Description `string`

### Document
* Document `object`: A document in an index.
  * AccessControlList
    * items [Principal](#principal)
  * Attributes
    * items [DocumentAttribute](#documentattribute)
  * Blob
  * ContentType
  * Id **required**
  * S3Path [S3Path](#s3path)
  * Title

### DocumentAttribute
* DocumentAttribute `object`: A custom attribute value assigned to a document. 
  * Key **required**
  * Value **required**
    * DateValue
    * LongValue
    * StringListValue
      * items [String](#string)
    * StringValue

### DocumentAttributeKey
* DocumentAttributeKey `string`

### DocumentAttributeKeyList
* DocumentAttributeKeyList `array`
  * items [DocumentAttributeKey](#documentattributekey)

### DocumentAttributeList
* DocumentAttributeList `array`
  * items [DocumentAttribute](#documentattribute)

### DocumentAttributeStringListValue
* DocumentAttributeStringListValue `array`
  * items [String](#string)

### DocumentAttributeStringValue
* DocumentAttributeStringValue `string`

### DocumentAttributeValue
* DocumentAttributeValue `object`: The value of a custom document attribute. You can only provide one value for a custom attribute.
  * DateValue
  * LongValue
  * StringListValue
    * items [String](#string)
  * StringValue

### DocumentAttributeValueCountPair
* DocumentAttributeValueCountPair `object`: Provides the count of documents that match a particular attribute when doing a faceted search.
  * Count
  * DocumentAttributeValue
    * DateValue
    * LongValue
    * StringListValue
      * items [String](#string)
    * StringValue

### DocumentAttributeValueCountPairList
* DocumentAttributeValueCountPairList `array`
  * items [DocumentAttributeValueCountPair](#documentattributevaluecountpair)

### DocumentAttributeValueType
* DocumentAttributeValueType `string` (values: STRING_VALUE, STRING_LIST_VALUE, LONG_VALUE, DATE_VALUE)

### DocumentId
* DocumentId `string`

### DocumentIdList
* DocumentIdList `array`
  * items [DocumentId](#documentid)

### DocumentList
* DocumentList `array`
  * items [Document](#document)

### DocumentMetadataBoolean
* DocumentMetadataBoolean `boolean`

### DocumentMetadataConfiguration
* DocumentMetadataConfiguration `object`: Specifies the properties of a custom index field.
  * Name **required**
  * Relevance
    * Duration
    * Freshness
    * Importance
    * RankOrder
    * ValueImportanceMap
  * Search
    * Displayable
    * Facetable
    * Searchable
    * Sortable
  * Type **required**

### DocumentMetadataConfigurationList
* DocumentMetadataConfigurationList `array`
  * items [DocumentMetadataConfiguration](#documentmetadataconfiguration)

### DocumentMetadataConfigurationName
* DocumentMetadataConfigurationName `string`

### DocumentsMetadataConfiguration
* DocumentsMetadataConfiguration `object`: Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
  * S3Prefix

### Duration
* Duration `string`

### ErrorCode
* ErrorCode `string` (values: InternalError, InvalidRequest)

### ErrorMessage
* ErrorMessage `string`

### ExcludeMimeTypesList
* ExcludeMimeTypesList `array`
  * items [MimeType](#mimetype)

### ExcludeSharedDrivesList
* ExcludeSharedDrivesList `array`
  * items [SharedDriveId](#shareddriveid)

### ExcludeUserAccountsList
* ExcludeUserAccountsList `array`
  * items [UserAccount](#useraccount)

### Facet
* Facet `object`: Information about a document attribute
  * DocumentAttributeKey

### FacetList
* FacetList `array`
  * items [Facet](#facet)

### FacetResult
* FacetResult `object`: The facet values for the documents in the response.
  * DocumentAttributeKey
  * DocumentAttributeValueCountPairs
    * items [DocumentAttributeValueCountPair](#documentattributevaluecountpair)
  * DocumentAttributeValueType

### FacetResultList
* FacetResultList `array`
  * items [FacetResult](#facetresult)

### FaqFileFormat
* FaqFileFormat `string` (values: CSV, CSV_WITH_HEADER, JSON)

### FaqId
* FaqId `string`

### FaqName
* FaqName `string`

### FaqStatistics
* FaqStatistics `object`: Provides statistical information about the FAQ questions and answers contained in an index.
  * IndexedQuestionAnswersCount **required**

### FaqStatus
* FaqStatus `string` (values: CREATING, UPDATING, ACTIVE, DELETING, FAILED)

### FaqSummary
* FaqSummary `object`: Provides information about a frequently asked questions and answer contained in an index.
  * CreatedAt
  * FileFormat
  * Id
  * Name
  * Status
  * UpdatedAt

### FaqSummaryItems
* FaqSummaryItems `array`
  * items [FaqSummary](#faqsummary)

### FeedbackToken
* FeedbackToken `string`

### GoogleDriveConfiguration
* GoogleDriveConfiguration `object`: Provides configuration information for data sources that connect to Google Drive.
  * ExcludeMimeTypes
    * items [MimeType](#mimetype)
  * ExcludeSharedDrives
    * items [SharedDriveId](#shareddriveid)
  * ExcludeUserAccounts
    * items [UserAccount](#useraccount)
  * ExclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * InclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * SecretArn **required**

### GroupAttributeField
* GroupAttributeField `string`

### Highlight
* Highlight `object`: Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response.
  * BeginOffset **required**
  * EndOffset **required**
  * TopAnswer
  * Type

### HighlightList
* HighlightList `array`
  * items [Highlight](#highlight)

### HighlightType
* HighlightType `string` (values: STANDARD, THESAURUS_SYNONYM)

### Importance
* Importance `integer`

### IndexConfigurationSummary
* IndexConfigurationSummary `object`: A summary of information about an index.
  * CreatedAt **required**
  * Edition
  * Id
  * Name
  * Status **required**
  * UpdatedAt **required**

### IndexConfigurationSummaryList
* IndexConfigurationSummaryList `array`
  * items [IndexConfigurationSummary](#indexconfigurationsummary)

### IndexEdition
* IndexEdition `string` (values: DEVELOPER_EDITION, ENTERPRISE_EDITION)

### IndexFieldName
* IndexFieldName `string`

### IndexId
* IndexId `string`

### IndexName
* IndexName `string`

### IndexStatistics
* IndexStatistics `object`: Provides information about the number of documents and the number of questions and answers in an index.
  * FaqStatistics **required**
    * IndexedQuestionAnswersCount **required**
  * TextDocumentStatistics **required**
    * IndexedTextBytes **required**
    * IndexedTextDocumentsCount **required**

### IndexStatus
* IndexStatus `string` (values: CREATING, ACTIVE, DELETING, FAILED, UPDATING, SYSTEM_UPDATING)

### IndexedQuestionAnswersCount
* IndexedQuestionAnswersCount `integer`

### IndexedTextBytes
* IndexedTextBytes `integer`

### IndexedTextDocumentsCount
* IndexedTextDocumentsCount `integer`

### Integer
* Integer `integer`

### InternalServerException


### Issuer
* Issuer `string`

### JsonTokenTypeConfiguration
* JsonTokenTypeConfiguration `object`: Configuration information for the JSON token type.
  * GroupAttributeField **required**
  * UserNameAttributeField **required**

### JwtTokenTypeConfiguration
* JwtTokenTypeConfiguration `object`: Configuration information for the JWT token type.
  * ClaimRegex
  * GroupAttributeField
  * Issuer
  * KeyLocation **required**
  * SecretManagerArn
  * URL
  * UserNameAttributeField

### KeyLocation
* KeyLocation `string` (values: URL, SECRET_MANAGER)

### KmsKeyId
* KmsKeyId `string`

### ListDataSourceSyncJobsRequest
* ListDataSourceSyncJobsRequest `object`
  * Id **required**
  * IndexId **required**
  * MaxResults
  * NextToken
  * StartTimeFilter
    * EndTime
    * StartTime
  * StatusFilter

### ListDataSourceSyncJobsResponse
* ListDataSourceSyncJobsResponse `object`
  * History
    * items [DataSourceSyncJob](#datasourcesyncjob)
  * NextToken

### ListDataSourcesRequest
* ListDataSourcesRequest `object`
  * IndexId **required**
  * MaxResults
  * NextToken

### ListDataSourcesResponse
* ListDataSourcesResponse `object`
  * NextToken
  * SummaryItems
    * items [DataSourceSummary](#datasourcesummary)

### ListFaqsRequest
* ListFaqsRequest `object`
  * IndexId **required**
  * MaxResults
  * NextToken

### ListFaqsResponse
* ListFaqsResponse `object`
  * FaqSummaryItems
    * items [FaqSummary](#faqsummary)
  * NextToken

### ListIndicesRequest
* ListIndicesRequest `object`
  * MaxResults
  * NextToken

### ListIndicesResponse
* ListIndicesResponse `object`
  * IndexConfigurationSummaryItems
    * items [IndexConfigurationSummary](#indexconfigurationsummary)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListThesauriRequest
* ListThesauriRequest `object`
  * IndexId **required**
  * MaxResults
  * NextToken

### ListThesauriResponse
* ListThesauriResponse `object`
  * NextToken
  * ThesaurusSummaryItems
    * items [ThesaurusSummary](#thesaurussummary)

### Long
* Long `integer`

### MaxResultsIntegerForListDataSourceSyncJobsRequest
* MaxResultsIntegerForListDataSourceSyncJobsRequest `integer`

### MaxResultsIntegerForListDataSourcesRequest
* MaxResultsIntegerForListDataSourcesRequest `integer`

### MaxResultsIntegerForListFaqsRequest
* MaxResultsIntegerForListFaqsRequest `integer`

### MaxResultsIntegerForListIndicesRequest
* MaxResultsIntegerForListIndicesRequest `integer`

### MaxResultsIntegerForListThesauriRequest
* MaxResultsIntegerForListThesauriRequest `integer`

### MetricValue
* MetricValue `string`

### MimeType
* MimeType `string`

### NextToken
* NextToken `string`

### OneDriveConfiguration
* OneDriveConfiguration `object`: Provides configuration information for data sources that connect to OneDrive.
  * DisableLocalGroups
  * ExclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * InclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * OneDriveUsers **required**
    * OneDriveUserList
      * items [OneDriveUser](#onedriveuser)
    * OneDriveUserS3Path
      * Bucket **required**
      * Key **required**
  * SecretArn **required**
  * TenantDomain **required**

### OneDriveUser
* OneDriveUser `string`

### OneDriveUserList
* OneDriveUserList `array`
  * items [OneDriveUser](#onedriveuser)

### OneDriveUsers
* OneDriveUsers `object`: User accounts whose documents should be indexed.
  * OneDriveUserList
    * items [OneDriveUser](#onedriveuser)
  * OneDriveUserS3Path
    * Bucket **required**
    * Key **required**

### Order
* Order `string` (values: ASCENDING, DESCENDING)

### Principal
* Principal `object`: Provides user and group information for document access filtering.
  * Access **required**
  * Name **required**
  * Type **required**

### PrincipalList
* PrincipalList `array`
  * items [Principal](#principal)

### PrincipalName
* PrincipalName `string`

### PrincipalType
* PrincipalType `string` (values: USER, GROUP)

### QueryCapacityUnit
* QueryCapacityUnit `integer`

### QueryId
* QueryId `string`

### QueryIdentifiersEnclosingOption
* QueryIdentifiersEnclosingOption `string` (values: DOUBLE_QUOTES, NONE)

### QueryRequest
* QueryRequest `object`
  * AttributeFilter
    * AndAllFilters
      * items [AttributeFilter](#attributefilter)
    * ContainsAll
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * ContainsAny
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * EqualsTo
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * GreaterThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThan
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * LessThanOrEquals
      * Key **required**
      * Value **required**
        * DateValue
        * LongValue
        * StringListValue
          * items [String](#string)
        * StringValue
    * NotFilter
      * AndAllFilters
        * items [AttributeFilter](#attributefilter)
      * ContainsAll
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * ContainsAny
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * EqualsTo
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * GreaterThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThan
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * LessThanOrEquals
        * Key **required**
        * Value **required**
          * DateValue
          * LongValue
          * StringListValue
          * StringValue
      * NotFilter
        * AndAllFilters
          * items [AttributeFilter](#attributefilter)
        * ContainsAll
          * Key **required**
          * Value **required**
        * ContainsAny
          * Key **required**
          * Value **required**
        * EqualsTo
          * Key **required**
          * Value **required**
        * GreaterThan
          * Key **required**
          * Value **required**
        * GreaterThanOrEquals
          * Key **required**
          * Value **required**
        * LessThan
          * Key **required**
          * Value **required**
        * LessThanOrEquals
          * Key **required**
          * Value **required**
        * NotFilter
          * AndAllFilters
          * ContainsAll
          * ContainsAny
          * EqualsTo
          * GreaterThan
          * GreaterThanOrEquals
          * LessThan
          * LessThanOrEquals
          * NotFilter
          * OrAllFilters
        * OrAllFilters
          * items [AttributeFilter](#attributefilter)
      * OrAllFilters
        * items [AttributeFilter](#attributefilter)
    * OrAllFilters
      * items [AttributeFilter](#attributefilter)
  * Facets
    * items [Facet](#facet)
  * IndexId **required**
  * PageNumber
  * PageSize
  * QueryResultTypeFilter
  * QueryText **required**
  * RequestedDocumentAttributes
    * items [DocumentAttributeKey](#documentattributekey)
  * SortingConfiguration
    * DocumentAttributeKey **required**
    * SortOrder **required**
  * UserContext
    * Token
  * VisitorId

### QueryResult
* QueryResult `object`
  * FacetResults
    * items [FacetResult](#facetresult)
  * QueryId
  * ResultItems
    * items [QueryResultItem](#queryresultitem)
  * TotalNumberOfResults

### QueryResultItem
* QueryResultItem `object`: <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p>
  * AdditionalAttributes
    * items [AdditionalResultAttribute](#additionalresultattribute)
  * DocumentAttributes
    * items [DocumentAttribute](#documentattribute)
  * DocumentExcerpt
    * Highlights
      * items [Highlight](#highlight)
    * Text
  * DocumentId
  * DocumentTitle
    * Highlights
      * items [Highlight](#highlight)
    * Text
  * DocumentURI
  * FeedbackToken
  * Id
  * ScoreAttributes
    * ScoreConfidence
  * Type

### QueryResultItemList
* QueryResultItemList `array`
  * items [QueryResultItem](#queryresultitem)

### QueryResultType
* QueryResultType `string` (values: DOCUMENT, QUESTION_ANSWER, ANSWER)

### QueryText
* QueryText `string`

### ReadAccessType
* ReadAccessType `string` (values: ALLOW, DENY)

### Relevance
* Relevance `object`: Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.
  * Duration
  * Freshness
  * Importance
  * RankOrder
  * ValueImportanceMap

### RelevanceFeedback
* RelevanceFeedback `object`: Provides feedback on how relevant a document is to a search. Your application uses the <a>SubmitFeedback</a> operation to provide relevance information.
  * RelevanceValue **required**
  * ResultId **required**

### RelevanceFeedbackList
* RelevanceFeedbackList `array`
  * items [RelevanceFeedback](#relevancefeedback)

### RelevanceType
* RelevanceType `string` (values: RELEVANT, NOT_RELEVANT)

### ResourceAlreadyExistException


### ResourceInUseException


### ResourceNotFoundException


### ResourceUnavailableException


### ResultId
* ResultId `string`

### RoleArn
* RoleArn `string`

### S3BucketName
* S3BucketName `string`

### S3DataSourceConfiguration
* S3DataSourceConfiguration `object`: Provides configuration information for a data source to index documents in an Amazon S3 bucket.
  * AccessControlListConfiguration
    * KeyPath
  * BucketName **required**
  * DocumentsMetadataConfiguration [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
  * ExclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * InclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * InclusionPrefixes
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)

### S3ObjectKey
* S3ObjectKey `string`

### S3Path
* S3Path `object`: Information required to find a specific file in an Amazon S3 bucket.
  * Bucket **required**
  * Key **required**

### SalesforceChatterFeedConfiguration
* SalesforceChatterFeedConfiguration `object`: Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * IncludeFilterTypes
    * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)

### SalesforceChatterFeedIncludeFilterType
* SalesforceChatterFeedIncludeFilterType `string` (values: ACTIVE_USER, STANDARD_USER)

### SalesforceChatterFeedIncludeFilterTypes
* SalesforceChatterFeedIncludeFilterTypes `array`
  * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)

### SalesforceConfiguration
* SalesforceConfiguration `object`: Provides configuration information for connecting to a Salesforce data source.
  * ChatterFeedConfiguration
    * DocumentDataFieldName **required**
    * DocumentTitleFieldName
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * IncludeFilterTypes
      * items [SalesforceChatterFeedIncludeFilterType](#salesforcechatterfeedincludefiltertype)
  * CrawlAttachments
  * ExcludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * IncludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * KnowledgeArticleConfiguration
    * CustomKnowledgeArticleTypeConfigurations
      * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
    * IncludedStates **required**
      * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
    * StandardKnowledgeArticleTypeConfiguration
      * DocumentDataFieldName **required**
      * DocumentTitleFieldName
      * FieldMappings
        * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * SecretArn **required**
  * ServerUrl **required**
  * StandardObjectAttachmentConfiguration
    * DocumentTitleFieldName
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * StandardObjectConfigurations
    * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)

### SalesforceCustomKnowledgeArticleTypeConfiguration
* SalesforceCustomKnowledgeArticleTypeConfiguration `object`: Provides configuration information for indexing Salesforce custom articles.
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * Name **required**

### SalesforceCustomKnowledgeArticleTypeConfigurationList
* SalesforceCustomKnowledgeArticleTypeConfigurationList `array`
  * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)

### SalesforceCustomKnowledgeArticleTypeName
* SalesforceCustomKnowledgeArticleTypeName `string`

### SalesforceKnowledgeArticleConfiguration
* SalesforceKnowledgeArticleConfiguration `object`: Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both 
  * CustomKnowledgeArticleTypeConfigurations
    * items [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)
  * IncludedStates **required**
    * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)
  * StandardKnowledgeArticleTypeConfiguration
    * DocumentDataFieldName **required**
    * DocumentTitleFieldName
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)

### SalesforceKnowledgeArticleState
* SalesforceKnowledgeArticleState `string` (values: DRAFT, PUBLISHED, ARCHIVED)

### SalesforceKnowledgeArticleStateList
* SalesforceKnowledgeArticleStateList `array`
  * items [SalesforceKnowledgeArticleState](#salesforceknowledgearticlestate)

### SalesforceStandardKnowledgeArticleTypeConfiguration
* SalesforceStandardKnowledgeArticleTypeConfiguration `object`: Provides configuration information for standard Salesforce knowledge articles.
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)

### SalesforceStandardObjectAttachmentConfiguration
* SalesforceStandardObjectAttachmentConfiguration `object`: Provides configuration information for processing attachments to Salesforce standard objects. 
  * DocumentTitleFieldName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)

### SalesforceStandardObjectConfiguration
* SalesforceStandardObjectConfiguration `object`: Specifies confguration information for indexing a single standard object.
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * Name **required**

### SalesforceStandardObjectConfigurationList
* SalesforceStandardObjectConfigurationList `array`
  * items [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)

### SalesforceStandardObjectName
* SalesforceStandardObjectName `string` (values: ACCOUNT, CAMPAIGN, CASE, CONTACT, CONTRACT, DOCUMENT, GROUP, IDEA, LEAD, OPPORTUNITY, PARTNER, PRICEBOOK, PRODUCT, PROFILE, SOLUTION, TASK, USER)

### ScanSchedule
* ScanSchedule `string`

### ScoreAttributes
* ScoreAttributes `object`: Provides a relative ranking that indicates how confident Amazon Kendra is that the response matches the query.
  * ScoreConfidence

### ScoreConfidence
* ScoreConfidence `string` (values: VERY_HIGH, HIGH, MEDIUM, LOW): Enumeration for query score confidence.

### Search
* Search `object`: Provides information about how a custom index field is used during a search.
  * Displayable
  * Facetable
  * Searchable
  * Sortable

### SecretArn
* SecretArn `string`

### SecurityGroupIdList
* SecurityGroupIdList `array`
  * items [VpcSecurityGroupId](#vpcsecuritygroupid)

### ServerSideEncryptionConfiguration
* ServerSideEncryptionConfiguration `object`: Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
  * KmsKeyId

### ServiceNowBuildVersionType
* ServiceNowBuildVersionType `string` (values: LONDON, OTHERS)

### ServiceNowConfiguration
* ServiceNowConfiguration `object`: Provides configuration information required to connect to a ServiceNow data source.
  * HostUrl **required**
  * KnowledgeArticleConfiguration
    * CrawlAttachments
    * DocumentDataFieldName **required**
    * DocumentTitleFieldName
    * ExcludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * IncludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * SecretArn **required**
  * ServiceCatalogConfiguration
    * CrawlAttachments
    * DocumentDataFieldName **required**
    * DocumentTitleFieldName
    * ExcludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
    * FieldMappings
      * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
    * IncludeAttachmentFilePatterns
      * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * ServiceNowBuildVersion **required**

### ServiceNowHostUrl
* ServiceNowHostUrl `string`

### ServiceNowKnowledgeArticleConfiguration
* ServiceNowKnowledgeArticleConfiguration `object`: Provides configuration information for crawling knowledge articles in the ServiceNow site.
  * CrawlAttachments
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * ExcludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * IncludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)

### ServiceNowServiceCatalogConfiguration
* ServiceNowServiceCatalogConfiguration `object`: Provides configuration information for crawling service catalog items in the ServiceNow site
  * CrawlAttachments
  * DocumentDataFieldName **required**
  * DocumentTitleFieldName
  * ExcludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * IncludeAttachmentFilePatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)

### ServiceQuotaExceededException


### SharePointConfiguration
* SharePointConfiguration `object`: Provides configuration information for connecting to a Microsoft SharePoint data source.
  * CrawlAttachments
  * DisableLocalGroups
  * DocumentTitleFieldName
  * ExclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * FieldMappings
    * items [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)
  * InclusionPatterns
    * items [DataSourceInclusionsExclusionsStringsMember](#datasourceinclusionsexclusionsstringsmember)
  * SecretArn **required**
  * SharePointVersion **required**
  * Urls **required**
    * items [Url](#url)
  * UseChangeLog
  * VpcConfiguration [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

### SharePointUrlList
* SharePointUrlList `array`
  * items [Url](#url)

### SharePointVersion
* SharePointVersion `string` (values: SHAREPOINT_ONLINE)

### SharedDriveId
* SharedDriveId `string`

### SortOrder
* SortOrder `string` (values: DESC, ASC)

### SortingConfiguration
* SortingConfiguration `object`: <p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul>
  * DocumentAttributeKey **required**
  * SortOrder **required**

### SqlConfiguration
* SqlConfiguration `object`: Provides information that configures Amazon Kendra to use a SQL database.
  * QueryIdentifiersEnclosingOption

### StartDataSourceSyncJobRequest
* StartDataSourceSyncJobRequest `object`
  * Id **required**
  * IndexId **required**

### StartDataSourceSyncJobResponse
* StartDataSourceSyncJobResponse `object`
  * ExecutionId

### StopDataSourceSyncJobRequest
* StopDataSourceSyncJobRequest `object`
  * Id **required**
  * IndexId **required**

### StorageCapacityUnit
* StorageCapacityUnit `integer`

### String
* String `string`

### SubmitFeedbackRequest
* SubmitFeedbackRequest `object`
  * ClickFeedbackItems
    * items [ClickFeedback](#clickfeedback)
  * IndexId **required**
  * QueryId **required**
  * RelevanceFeedbackItems
    * items [RelevanceFeedback](#relevancefeedback)

### SubnetId
* SubnetId `string`

### SubnetIdList
* SubnetIdList `array`
  * items [SubnetId](#subnetid)

### TableName
* TableName `string`

### Tag
* Tag `object`: A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
  * Key **required**
  * Value **required**

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
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TenantDomain
* TenantDomain `string`

### TextDocumentStatistics
* TextDocumentStatistics `object`: Provides information about text documents indexed in an index.
  * IndexedTextBytes **required**
  * IndexedTextDocumentsCount **required**

### TextWithHighlights
* TextWithHighlights `object`: Provides text and information about where to highlight the text.
  * Highlights
    * items [Highlight](#highlight)
  * Text

### ThesaurusId
* ThesaurusId `string`

### ThesaurusName
* ThesaurusName `string`

### ThesaurusStatus
* ThesaurusStatus `string` (values: CREATING, ACTIVE, DELETING, UPDATING, ACTIVE_BUT_UPDATE_FAILED, FAILED)

### ThesaurusSummary
* ThesaurusSummary `object`: An array of summary information for one or more thesauruses.
  * CreatedAt
  * Id
  * Name
  * Status
  * UpdatedAt

### ThesaurusSummaryItems
* ThesaurusSummaryItems `array`
  * items [ThesaurusSummary](#thesaurussummary)

### ThrottlingException


### TimeRange
* TimeRange `object`: Provides a range of time.
  * EndTime
  * StartTime

### Timestamp
* Timestamp `string`

### Title
* Title `string`

### Token
* Token `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`
  * Configuration [DataSourceConfiguration](#datasourceconfiguration)
  * Description
  * Id **required**
  * IndexId **required**
  * Name
  * RoleArn
  * Schedule

### UpdateIndexRequest
* UpdateIndexRequest `object`
  * CapacityUnits
    * QueryCapacityUnits **required**
    * StorageCapacityUnits **required**
  * Description
  * DocumentMetadataConfigurationUpdates
    * items [DocumentMetadataConfiguration](#documentmetadataconfiguration)
  * Id **required**
  * Name
  * RoleArn
  * UserContextPolicy
  * UserTokenConfigurations
    * items [UserTokenConfiguration](#usertokenconfiguration)

### UpdateThesaurusRequest
* UpdateThesaurusRequest `object`
  * Description
  * Id **required**
  * IndexId **required**
  * Name
  * RoleArn
  * SourceS3Path [S3Path](#s3path)

### Url
* Url `string`

### UserAccount
* UserAccount `string`

### UserContext
* UserContext `object`: Provides information about the user context for a Amazon Kendra index.
  * Token

### UserContextPolicy
* UserContextPolicy `string` (values: ATTRIBUTE_FILTER, USER_TOKEN)

### UserNameAttributeField
* UserNameAttributeField `string`

### UserTokenConfiguration
* UserTokenConfiguration `object`: Provides configuration information for a token configuration.
  * JsonTokenTypeConfiguration
    * GroupAttributeField **required**
    * UserNameAttributeField **required**
  * JwtTokenTypeConfiguration
    * ClaimRegex
    * GroupAttributeField
    * Issuer
    * KeyLocation **required**
    * SecretManagerArn
    * URL
    * UserNameAttributeField

### UserTokenConfigurationList
* UserTokenConfigurationList `array`
  * items [UserTokenConfiguration](#usertokenconfiguration)

### ValidationException


### ValueImportanceMap
* ValueImportanceMap `object`

### ValueImportanceMapKey
* ValueImportanceMapKey `string`

### VisitorId
* VisitorId `string`

### VpcSecurityGroupId
* VpcSecurityGroupId `string`


