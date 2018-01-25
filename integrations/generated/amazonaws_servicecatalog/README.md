# @datafire/amazonaws_servicecatalog

Client library for AWS Service Catalog

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_servicecatalog
```
```js
let amazonaws_servicecatalog = require('@datafire/amazonaws_servicecatalog').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_servicecatalog.AcceptPortfolioShare({
  "PortfolioId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Service Catalog</fullname> <p> <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for use on AWS. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p>

## Actions

### AcceptPortfolioShare



```js
amazonaws_servicecatalog.AcceptPortfolioShare({
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

#### Output
* output [AcceptPortfolioShareOutput](#acceptportfolioshareoutput)

### AssociatePrincipalWithPortfolio



```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({
  "PortfolioId": "",
  "PrincipalARN": "",
  "PrincipalType": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * PrincipalARN **required** [PrincipalARN](#principalarn)
  * PrincipalType **required** [PrincipalType](#principaltype)

#### Output
* output [AssociatePrincipalWithPortfolioOutput](#associateprincipalwithportfoliooutput)

### AssociateProductWithPortfolio



```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({
  "ProductId": "",
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)
  * SourcePortfolioId [Id](#id)

#### Output
* output [AssociateProductWithPortfolioOutput](#associateproductwithportfoliooutput)

### AssociateTagOptionWithResource



```js
amazonaws_servicecatalog.AssociateTagOptionWithResource({
  "ResourceId": "",
  "TagOptionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

#### Output
* output [AssociateTagOptionWithResourceOutput](#associatetagoptionwithresourceoutput)

### CopyProduct



```js
amazonaws_servicecatalog.CopyProduct({
  "SourceProductArn": "",
  "IdempotencyToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * CopyOptions [CopyOptions](#copyoptions)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * SourceProductArn **required** [ProductArn](#productarn)
  * SourceProvisioningArtifactIdentifiers [SourceProvisioningArtifactProperties](#sourceprovisioningartifactproperties)
  * TargetProductId [Id](#id)
  * TargetProductName [ProductViewName](#productviewname)

#### Output
* output [CopyProductOutput](#copyproductoutput)

### CreateConstraint



```js
amazonaws_servicecatalog.CreateConstraint({
  "PortfolioId": "",
  "ProductId": "",
  "Parameters": "",
  "Type": "",
  "IdempotencyToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ConstraintDescription](#constraintdescription)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Parameters **required** [ConstraintParameters](#constraintparameters)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)
  * Type **required** [ConstraintType](#constrainttype)

#### Output
* output [CreateConstraintOutput](#createconstraintoutput)

### CreatePortfolio



```js
amazonaws_servicecatalog.CreatePortfolio({
  "DisplayName": "",
  "ProviderName": "",
  "IdempotencyToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [PortfolioDescription](#portfoliodescription)
  * DisplayName **required** [PortfolioDisplayName](#portfoliodisplayname)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * ProviderName **required** [ProviderName](#providername)
  * Tags [AddTags](#addtags)

#### Output
* output [CreatePortfolioOutput](#createportfoliooutput)

### CreatePortfolioShare



```js
amazonaws_servicecatalog.CreatePortfolioShare({
  "PortfolioId": "",
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccountId **required** [AccountId](#accountid)
  * PortfolioId **required** [Id](#id)

#### Output
* output [CreatePortfolioShareOutput](#createportfolioshareoutput)

### CreateProduct



```js
amazonaws_servicecatalog.CreateProduct({
  "Name": "",
  "Owner": "",
  "ProductType": "",
  "ProvisioningArtifactParameters": {
    "Info": []
  },
  "IdempotencyToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ProductViewShortDescription](#productviewshortdescription)
  * Distributor [ProductViewOwner](#productviewowner)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Name **required** [ProductViewName](#productviewname)
  * Owner **required** [ProductViewOwner](#productviewowner)
  * ProductType **required** [ProductType](#producttype)
  * ProvisioningArtifactParameters **required** [ProvisioningArtifactProperties](#provisioningartifactproperties)
  * SupportDescription [SupportDescription](#supportdescription)
  * SupportEmail [SupportEmail](#supportemail)
  * SupportUrl [SupportUrl](#supporturl)
  * Tags [AddTags](#addtags)

#### Output
* output [CreateProductOutput](#createproductoutput)

### CreateProvisioningArtifact



```js
amazonaws_servicecatalog.CreateProvisioningArtifact({
  "ProductId": "",
  "Parameters": {
    "Info": []
  },
  "IdempotencyToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Parameters **required** [ProvisioningArtifactProperties](#provisioningartifactproperties)
  * ProductId **required** [Id](#id)

#### Output
* output [CreateProvisioningArtifactOutput](#createprovisioningartifactoutput)

### CreateTagOption



```js
amazonaws_servicecatalog.CreateTagOption({
  "Key": "",
  "Value": ""
}, context)
```

#### Input
* input `object`
  * Key **required** [TagOptionKey](#tagoptionkey)
  * Value **required** [TagOptionValue](#tagoptionvalue)

#### Output
* output [CreateTagOptionOutput](#createtagoptionoutput)

### DeleteConstraint



```js
amazonaws_servicecatalog.DeleteConstraint({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DeleteConstraintOutput](#deleteconstraintoutput)

### DeletePortfolio



```js
amazonaws_servicecatalog.DeletePortfolio({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DeletePortfolioOutput](#deleteportfoliooutput)

### DeletePortfolioShare



```js
amazonaws_servicecatalog.DeletePortfolioShare({
  "PortfolioId": "",
  "AccountId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccountId **required** [AccountId](#accountid)
  * PortfolioId **required** [Id](#id)

#### Output
* output [DeletePortfolioShareOutput](#deleteportfolioshareoutput)

### DeleteProduct



```js
amazonaws_servicecatalog.DeleteProduct({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DeleteProductOutput](#deleteproductoutput)

### DeleteProvisioningArtifact



```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

#### Output
* output [DeleteProvisioningArtifactOutput](#deleteprovisioningartifactoutput)

### DescribeConstraint



```js
amazonaws_servicecatalog.DescribeConstraint({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribeConstraintOutput](#describeconstraintoutput)

### DescribeCopyProductStatus



```js
amazonaws_servicecatalog.DescribeCopyProductStatus({
  "CopyProductToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * CopyProductToken **required** [Id](#id)

#### Output
* output [DescribeCopyProductStatusOutput](#describecopyproductstatusoutput)

### DescribePortfolio



```js
amazonaws_servicecatalog.DescribePortfolio({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribePortfolioOutput](#describeportfoliooutput)

### DescribeProduct



```js
amazonaws_servicecatalog.DescribeProduct({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribeProductOutput](#describeproductoutput)

### DescribeProductAsAdmin



```js
amazonaws_servicecatalog.DescribeProductAsAdmin({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribeProductAsAdminOutput](#describeproductasadminoutput)

### DescribeProductView



```js
amazonaws_servicecatalog.DescribeProductView({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribeProductViewOutput](#describeproductviewoutput)

### DescribeProvisionedProduct



```js
amazonaws_servicecatalog.DescribeProvisionedProduct({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

#### Output
* output [DescribeProvisionedProductOutput](#describeprovisionedproductoutput)

### DescribeProvisioningArtifact



```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({
  "ProvisioningArtifactId": "",
  "ProductId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)
  * Verbose [Verbose](#verbose)

#### Output
* output [DescribeProvisioningArtifactOutput](#describeprovisioningartifactoutput)

### DescribeProvisioningParameters



```js
amazonaws_servicecatalog.DescribeProvisioningParameters({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PathId [Id](#id)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

#### Output
* output [DescribeProvisioningParametersOutput](#describeprovisioningparametersoutput)

### DescribeRecord



```js
amazonaws_servicecatalog.DescribeRecord({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

#### Output
* output [DescribeRecordOutput](#describerecordoutput)

### DescribeTagOption



```js
amazonaws_servicecatalog.DescribeTagOption({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [TagOptionId](#tagoptionid)

#### Output
* output [DescribeTagOptionOutput](#describetagoptionoutput)

### DisassociatePrincipalFromPortfolio



```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({
  "PortfolioId": "",
  "PrincipalARN": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * PrincipalARN **required** [PrincipalARN](#principalarn)

#### Output
* output [DisassociatePrincipalFromPortfolioOutput](#disassociateprincipalfromportfoliooutput)

### DisassociateProductFromPortfolio



```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({
  "ProductId": "",
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)

#### Output
* output [DisassociateProductFromPortfolioOutput](#disassociateproductfromportfoliooutput)

### DisassociateTagOptionFromResource



```js
amazonaws_servicecatalog.DisassociateTagOptionFromResource({
  "ResourceId": "",
  "TagOptionId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

#### Output
* output [DisassociateTagOptionFromResourceOutput](#disassociatetagoptionfromresourceoutput)

### ListAcceptedPortfolioShares



```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

#### Output
* output [ListAcceptedPortfolioSharesOutput](#listacceptedportfoliosharesoutput)

### ListConstraintsForPortfolio



```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId **required** [Id](#id)
  * ProductId [Id](#id)

#### Output
* output [ListConstraintsForPortfolioOutput](#listconstraintsforportfoliooutput)

### ListLaunchPaths



```js
amazonaws_servicecatalog.ListLaunchPaths({
  "ProductId": ""
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ProductId **required** [Id](#id)

#### Output
* output [ListLaunchPathsOutput](#listlaunchpathsoutput)

### ListPortfolioAccess



```js
amazonaws_servicecatalog.ListPortfolioAccess({
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

#### Output
* output [ListPortfolioAccessOutput](#listportfolioaccessoutput)

### ListPortfolios



```js
amazonaws_servicecatalog.ListPortfolios({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

#### Output
* output [ListPortfoliosOutput](#listportfoliosoutput)

### ListPortfoliosForProduct



```js
amazonaws_servicecatalog.ListPortfoliosForProduct({
  "ProductId": ""
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ProductId **required** [Id](#id)

#### Output
* output [ListPortfoliosForProductOutput](#listportfoliosforproductoutput)

### ListPrincipalsForPortfolio



```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId **required** [Id](#id)

#### Output
* output [ListPrincipalsForPortfolioOutput](#listprincipalsforportfoliooutput)

### ListProvisioningArtifacts



```js
amazonaws_servicecatalog.ListProvisioningArtifacts({
  "ProductId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)

#### Output
* output [ListProvisioningArtifactsOutput](#listprovisioningartifactsoutput)

### ListRecordHistory



```js
amazonaws_servicecatalog.ListRecordHistory({}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccessLevelFilter [AccessLevelFilter](#accesslevelfilter)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * SearchFilter [ListRecordHistorySearchFilter](#listrecordhistorysearchfilter)

#### Output
* output [ListRecordHistoryOutput](#listrecordhistoryoutput)

### ListResourcesForTagOption



```js
amazonaws_servicecatalog.ListResourcesForTagOption({
  "TagOptionId": ""
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ResourceType [ResourceType](#resourcetype)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

#### Output
* output [ListResourcesForTagOptionOutput](#listresourcesfortagoptionoutput)

### ListTagOptions



```js
amazonaws_servicecatalog.ListTagOptions({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * Filters [ListTagOptionsFilters](#listtagoptionsfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

#### Output
* output [ListTagOptionsOutput](#listtagoptionsoutput)

### ProvisionProduct



```js
amazonaws_servicecatalog.ProvisionProduct({
  "ProductId": "",
  "ProvisioningArtifactId": "",
  "ProvisionedProductName": "",
  "ProvisionToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * NotificationArns [NotificationArns](#notificationarns)
  * PathId [Id](#id)
  * ProductId **required** [Id](#id)
  * ProvisionToken **required** [IdempotencyToken](#idempotencytoken)
  * ProvisionedProductName **required** [ProvisionedProductName](#provisionedproductname)
  * ProvisioningArtifactId **required** [Id](#id)
  * ProvisioningParameters [ProvisioningParameters](#provisioningparameters)
  * Tags [Tags](#tags)

#### Output
* output [ProvisionProductOutput](#provisionproductoutput)

### RejectPortfolioShare



```js
amazonaws_servicecatalog.RejectPortfolioShare({
  "PortfolioId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

#### Output
* output [RejectPortfolioShareOutput](#rejectportfolioshareoutput)

### ScanProvisionedProducts



```js
amazonaws_servicecatalog.ScanProvisionedProducts({}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccessLevelFilter [AccessLevelFilter](#accesslevelfilter)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

#### Output
* output [ScanProvisionedProductsOutput](#scanprovisionedproductsoutput)

### SearchProducts



```js
amazonaws_servicecatalog.SearchProducts({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Filters [ProductViewFilters](#productviewfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * SortBy [ProductViewSortBy](#productviewsortby)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [SearchProductsOutput](#searchproductsoutput)

### SearchProductsAsAdmin



```js
amazonaws_servicecatalog.SearchProductsAsAdmin({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Filters [ProductViewFilters](#productviewfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId [Id](#id)
  * ProductSource [ProductSource](#productsource)
  * SortBy [ProductViewSortBy](#productviewsortby)
  * SortOrder [SortOrder](#sortorder)

#### Output
* output [SearchProductsAsAdminOutput](#searchproductsasadminoutput)

### TerminateProvisionedProduct



```js
amazonaws_servicecatalog.TerminateProvisionedProduct({
  "TerminateToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * IgnoreErrors [IgnoreErrors](#ignoreerrors)
  * ProvisionedProductId [Id](#id)
  * ProvisionedProductName [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * TerminateToken **required** [IdempotencyToken](#idempotencytoken)

#### Output
* output [TerminateProvisionedProductOutput](#terminateprovisionedproductoutput)

### UpdateConstraint



```js
amazonaws_servicecatalog.UpdateConstraint({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ConstraintDescription](#constraintdescription)
  * Id **required** [Id](#id)

#### Output
* output [UpdateConstraintOutput](#updateconstraintoutput)

### UpdatePortfolio



```js
amazonaws_servicecatalog.UpdatePortfolio({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AddTags [AddTags](#addtags)
  * Description [PortfolioDescription](#portfoliodescription)
  * DisplayName [PortfolioDisplayName](#portfoliodisplayname)
  * Id **required** [Id](#id)
  * ProviderName [ProviderName](#providername)
  * RemoveTags [TagKeys](#tagkeys)

#### Output
* output [UpdatePortfolioOutput](#updateportfoliooutput)

### UpdateProduct



```js
amazonaws_servicecatalog.UpdateProduct({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AddTags [AddTags](#addtags)
  * Description [ProductViewShortDescription](#productviewshortdescription)
  * Distributor [ProductViewOwner](#productviewowner)
  * Id **required** [Id](#id)
  * Name [ProductViewName](#productviewname)
  * Owner [ProductViewOwner](#productviewowner)
  * RemoveTags [TagKeys](#tagkeys)
  * SupportDescription [SupportDescription](#supportdescription)
  * SupportEmail [SupportEmail](#supportemail)
  * SupportUrl [SupportUrl](#supporturl)

#### Output
* output [UpdateProductOutput](#updateproductoutput)

### UpdateProvisionedProduct



```js
amazonaws_servicecatalog.UpdateProvisionedProduct({
  "UpdateToken": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PathId [Id](#id)
  * ProductId [Id](#id)
  * ProvisionedProductId [Id](#id)
  * ProvisionedProductName [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * ProvisioningArtifactId [Id](#id)
  * ProvisioningParameters [UpdateProvisioningParameters](#updateprovisioningparameters)
  * UpdateToken **required** [IdempotencyToken](#idempotencytoken)

#### Output
* output [UpdateProvisionedProductOutput](#updateprovisionedproductoutput)

### UpdateProvisioningArtifact



```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Input
* input `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ProvisioningArtifactDescription](#provisioningartifactdescription)
  * Name [ProvisioningArtifactName](#provisioningartifactname)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

#### Output
* output [UpdateProvisioningArtifactOutput](#updateprovisioningartifactoutput)

### UpdateTagOption



```js
amazonaws_servicecatalog.UpdateTagOption({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Active [TagOptionActive](#tagoptionactive)
  * Id **required** [TagOptionId](#tagoptionid)
  * Value [TagOptionValue](#tagoptionvalue)

#### Output
* output [UpdateTagOptionOutput](#updatetagoptionoutput)



## Definitions

### AcceptLanguage
* AcceptLanguage `string`

### AcceptPortfolioShareInput
* AcceptPortfolioShareInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

### AcceptPortfolioShareOutput
* AcceptPortfolioShareOutput `object`

### AccessLevelFilter
* AccessLevelFilter `object`: The access level to limit results.
  * Key [AccessLevelFilterKey](#accesslevelfilterkey)
  * Value [AccessLevelFilterValue](#accesslevelfiltervalue)

### AccessLevelFilterKey
* AccessLevelFilterKey `string` (values: Account, Role, User)

### AccessLevelFilterValue
* AccessLevelFilterValue `string`

### AccountId
* AccountId `string`

### AccountIds
* AccountIds `array`
  * items [AccountId](#accountid)

### AddTags
* AddTags `array`
  * items [Tag](#tag)

### AllowedValue
* AllowedValue `string`

### AllowedValues
* AllowedValues `array`
  * items [AllowedValue](#allowedvalue)

### ApproximateCount
* ApproximateCount `integer`

### AssociatePrincipalWithPortfolioInput
* AssociatePrincipalWithPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * PrincipalARN **required** [PrincipalARN](#principalarn)
  * PrincipalType **required** [PrincipalType](#principaltype)

### AssociatePrincipalWithPortfolioOutput
* AssociatePrincipalWithPortfolioOutput `object`

### AssociateProductWithPortfolioInput
* AssociateProductWithPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)
  * SourcePortfolioId [Id](#id)

### AssociateProductWithPortfolioOutput
* AssociateProductWithPortfolioOutput `object`

### AssociateTagOptionWithResourceInput
* AssociateTagOptionWithResourceInput `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

### AssociateTagOptionWithResourceOutput
* AssociateTagOptionWithResourceOutput `object`

### AttributeValue
* AttributeValue `string`

### ConstraintDescription
* ConstraintDescription `string`

### ConstraintDetail
* ConstraintDetail `object`: Detailed constraint information.
  * ConstraintId [Id](#id)
  * Description [ConstraintDescription](#constraintdescription)
  * Owner [AccountId](#accountid)
  * Type [ConstraintType](#constrainttype)

### ConstraintDetails
* ConstraintDetails `array`
  * items [ConstraintDetail](#constraintdetail)

### ConstraintParameters
* ConstraintParameters `string`

### ConstraintSummaries
* ConstraintSummaries `array`
  * items [ConstraintSummary](#constraintsummary)

### ConstraintSummary
* ConstraintSummary `object`: An administrator-specified constraint to apply when provisioning a product.
  * Description [ConstraintDescription](#constraintdescription)
  * Type [ConstraintType](#constrainttype)

### ConstraintType
* ConstraintType `string`

### CopyOption
* CopyOption `string` (values: CopyTags)

### CopyOptions
* CopyOptions `array`
  * items [CopyOption](#copyoption)

### CopyProductInput
* CopyProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * CopyOptions [CopyOptions](#copyoptions)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * SourceProductArn **required** [ProductArn](#productarn)
  * SourceProvisioningArtifactIdentifiers [SourceProvisioningArtifactProperties](#sourceprovisioningartifactproperties)
  * TargetProductId [Id](#id)
  * TargetProductName [ProductViewName](#productviewname)

### CopyProductOutput
* CopyProductOutput `object`
  * CopyProductToken [Id](#id)

### CopyProductStatus
* CopyProductStatus `string` (values: SUCCEEDED, IN_PROGRESS, FAILED)

### CreateConstraintInput
* CreateConstraintInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ConstraintDescription](#constraintdescription)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Parameters **required** [ConstraintParameters](#constraintparameters)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)
  * Type **required** [ConstraintType](#constrainttype)

### CreateConstraintOutput
* CreateConstraintOutput `object`
  * ConstraintDetail [ConstraintDetail](#constraintdetail)
  * ConstraintParameters [ConstraintParameters](#constraintparameters)
  * Status [Status](#status)

### CreatePortfolioInput
* CreatePortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [PortfolioDescription](#portfoliodescription)
  * DisplayName **required** [PortfolioDisplayName](#portfoliodisplayname)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * ProviderName **required** [ProviderName](#providername)
  * Tags [AddTags](#addtags)

### CreatePortfolioOutput
* CreatePortfolioOutput `object`
  * PortfolioDetail [PortfolioDetail](#portfoliodetail)
  * Tags [Tags](#tags)

### CreatePortfolioShareInput
* CreatePortfolioShareInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccountId **required** [AccountId](#accountid)
  * PortfolioId **required** [Id](#id)

### CreatePortfolioShareOutput
* CreatePortfolioShareOutput `object`

### CreateProductInput
* CreateProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ProductViewShortDescription](#productviewshortdescription)
  * Distributor [ProductViewOwner](#productviewowner)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Name **required** [ProductViewName](#productviewname)
  * Owner **required** [ProductViewOwner](#productviewowner)
  * ProductType **required** [ProductType](#producttype)
  * ProvisioningArtifactParameters **required** [ProvisioningArtifactProperties](#provisioningartifactproperties)
  * SupportDescription [SupportDescription](#supportdescription)
  * SupportEmail [SupportEmail](#supportemail)
  * SupportUrl [SupportUrl](#supporturl)
  * Tags [AddTags](#addtags)

### CreateProductOutput
* CreateProductOutput `object`
  * ProductViewDetail [ProductViewDetail](#productviewdetail)
  * ProvisioningArtifactDetail [ProvisioningArtifactDetail](#provisioningartifactdetail)
  * Tags [Tags](#tags)

### CreateProvisioningArtifactInput
* CreateProvisioningArtifactInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * IdempotencyToken **required** [IdempotencyToken](#idempotencytoken)
  * Parameters **required** [ProvisioningArtifactProperties](#provisioningartifactproperties)
  * ProductId **required** [Id](#id)

### CreateProvisioningArtifactOutput
* CreateProvisioningArtifactOutput `object`
  * Info [ProvisioningArtifactInfo](#provisioningartifactinfo)
  * ProvisioningArtifactDetail [ProvisioningArtifactDetail](#provisioningartifactdetail)
  * Status [Status](#status)

### CreateTagOptionInput
* CreateTagOptionInput `object`
  * Key **required** [TagOptionKey](#tagoptionkey)
  * Value **required** [TagOptionValue](#tagoptionvalue)

### CreateTagOptionOutput
* CreateTagOptionOutput `object`
  * TagOptionDetail [TagOptionDetail](#tagoptiondetail)

### CreatedTime
* CreatedTime `string`

### CreationTime
* CreationTime `string`

### DefaultValue
* DefaultValue `string`

### DeleteConstraintInput
* DeleteConstraintInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DeleteConstraintOutput
* DeleteConstraintOutput `object`

### DeletePortfolioInput
* DeletePortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DeletePortfolioOutput
* DeletePortfolioOutput `object`

### DeletePortfolioShareInput
* DeletePortfolioShareInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccountId **required** [AccountId](#accountid)
  * PortfolioId **required** [Id](#id)

### DeletePortfolioShareOutput
* DeletePortfolioShareOutput `object`

### DeleteProductInput
* DeleteProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DeleteProductOutput
* DeleteProductOutput `object`

### DeleteProvisioningArtifactInput
* DeleteProvisioningArtifactInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

### DeleteProvisioningArtifactOutput
* DeleteProvisioningArtifactOutput `object`

### DescribeConstraintInput
* DescribeConstraintInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribeConstraintOutput
* DescribeConstraintOutput `object`
  * ConstraintDetail [ConstraintDetail](#constraintdetail)
  * ConstraintParameters [ConstraintParameters](#constraintparameters)
  * Status [Status](#status)

### DescribeCopyProductStatusInput
* DescribeCopyProductStatusInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * CopyProductToken **required** [Id](#id)

### DescribeCopyProductStatusOutput
* DescribeCopyProductStatusOutput `object`
  * CopyProductStatus [CopyProductStatus](#copyproductstatus)
  * StatusDetail [StatusDetail](#statusdetail)
  * TargetProductId [Id](#id)

### DescribePortfolioInput
* DescribePortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribePortfolioOutput
* DescribePortfolioOutput `object`
  * PortfolioDetail [PortfolioDetail](#portfoliodetail)
  * TagOptions [TagOptionDetails](#tagoptiondetails)
  * Tags [Tags](#tags)

### DescribeProductAsAdminInput
* DescribeProductAsAdminInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribeProductAsAdminOutput
* DescribeProductAsAdminOutput `object`
  * ProductViewDetail [ProductViewDetail](#productviewdetail)
  * ProvisioningArtifactSummaries [ProvisioningArtifactSummaries](#provisioningartifactsummaries)
  * TagOptions [TagOptionDetails](#tagoptiondetails)
  * Tags [Tags](#tags)

### DescribeProductInput
* DescribeProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribeProductOutput
* DescribeProductOutput `object`
  * ProductViewSummary [ProductViewSummary](#productviewsummary)
  * ProvisioningArtifacts [ProvisioningArtifacts](#provisioningartifacts)

### DescribeProductViewInput
* DescribeProductViewInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribeProductViewOutput
* DescribeProductViewOutput `object`
  * ProductViewSummary [ProductViewSummary](#productviewsummary)
  * ProvisioningArtifacts [ProvisioningArtifacts](#provisioningartifacts)

### DescribeProvisionedProductInput
* DescribeProvisionedProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)

### DescribeProvisionedProductOutput
* DescribeProvisionedProductOutput `object`
  * ProvisionedProductDetail [ProvisionedProductDetail](#provisionedproductdetail)

### DescribeProvisioningArtifactInput
* DescribeProvisioningArtifactInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)
  * Verbose [Verbose](#verbose)

### DescribeProvisioningArtifactOutput
* DescribeProvisioningArtifactOutput `object`
  * Info [ProvisioningArtifactInfo](#provisioningartifactinfo)
  * ProvisioningArtifactDetail [ProvisioningArtifactDetail](#provisioningartifactdetail)
  * Status [Status](#status)

### DescribeProvisioningParametersInput
* DescribeProvisioningParametersInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PathId [Id](#id)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

### DescribeProvisioningParametersOutput
* DescribeProvisioningParametersOutput `object`
  * ConstraintSummaries [ConstraintSummaries](#constraintsummaries)
  * ProvisioningArtifactParameters [ProvisioningArtifactParameters](#provisioningartifactparameters)
  * TagOptions [TagOptionSummaries](#tagoptionsummaries)
  * UsageInstructions [UsageInstructions](#usageinstructions)

### DescribeRecordInput
* DescribeRecordInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Id **required** [Id](#id)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

### DescribeRecordOutput
* DescribeRecordOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * RecordDetail [RecordDetail](#recorddetail)
  * RecordOutputs [RecordOutputs](#recordoutputs)

### DescribeTagOptionInput
* DescribeTagOptionInput `object`
  * Id **required** [TagOptionId](#tagoptionid)

### DescribeTagOptionOutput
* DescribeTagOptionOutput `object`
  * TagOptionDetail [TagOptionDetail](#tagoptiondetail)

### Description
* Description `string`

### DisassociatePrincipalFromPortfolioInput
* DisassociatePrincipalFromPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * PrincipalARN **required** [PrincipalARN](#principalarn)

### DisassociatePrincipalFromPortfolioOutput
* DisassociatePrincipalFromPortfolioOutput `object`

### DisassociateProductFromPortfolioInput
* DisassociateProductFromPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)
  * ProductId **required** [Id](#id)

### DisassociateProductFromPortfolioOutput
* DisassociateProductFromPortfolioOutput `object`

### DisassociateTagOptionFromResourceInput
* DisassociateTagOptionFromResourceInput `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

### DisassociateTagOptionFromResourceOutput
* DisassociateTagOptionFromResourceOutput `object`

### DuplicateResourceException
* DuplicateResourceException `object`: The specified resource is a duplicate.

### ErrorCode
* ErrorCode `string`

### ErrorDescription
* ErrorDescription `string`

### HasDefaultPath
* HasDefaultPath `boolean`

### Id
* Id `string`

### IdempotencyToken
* IdempotencyToken `string`

### IgnoreErrors
* IgnoreErrors `boolean`

### InstructionType
* InstructionType `string`

### InstructionValue
* InstructionValue `string`

### InvalidParametersException
* InvalidParametersException `object`: One or more parameters provided to the operation are invalid.

### InvalidStateException
* InvalidStateException `object`: An attempt was made to modify a resource that is in an invalid state. Inspect the resource you are using for this operation to ensure that all resource states are valid before retrying the operation.

### LastRequestId
* LastRequestId `string`

### LaunchPathSummaries
* LaunchPathSummaries `array`
  * items [LaunchPathSummary](#launchpathsummary)

### LaunchPathSummary
* LaunchPathSummary `object`: Summary information about a path for a user to have access to a specified product.
  * ConstraintSummaries [ConstraintSummaries](#constraintsummaries)
  * Id [Id](#id)
  * Name [PortfolioName](#portfolioname)
  * Tags [Tags](#tags)

### LimitExceededException
* LimitExceededException `object`: The current limits of the service would have been exceeded by this operation. Reduce the resource use or increase the service limits and retry the operation.

### ListAcceptedPortfolioSharesInput
* ListAcceptedPortfolioSharesInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

### ListAcceptedPortfolioSharesOutput
* ListAcceptedPortfolioSharesOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * PortfolioDetails [PortfolioDetails](#portfoliodetails)

### ListConstraintsForPortfolioInput
* ListConstraintsForPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId **required** [Id](#id)
  * ProductId [Id](#id)

### ListConstraintsForPortfolioOutput
* ListConstraintsForPortfolioOutput `object`
  * ConstraintDetails [ConstraintDetails](#constraintdetails)
  * NextPageToken [PageToken](#pagetoken)

### ListLaunchPathsInput
* ListLaunchPathsInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ProductId **required** [Id](#id)

### ListLaunchPathsOutput
* ListLaunchPathsOutput `object`
  * LaunchPathSummaries [LaunchPathSummaries](#launchpathsummaries)
  * NextPageToken [PageToken](#pagetoken)

### ListPortfolioAccessInput
* ListPortfolioAccessInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

### ListPortfolioAccessOutput
* ListPortfolioAccessOutput `object`
  * AccountIds [AccountIds](#accountids)
  * NextPageToken [PageToken](#pagetoken)

### ListPortfoliosForProductInput
* ListPortfoliosForProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ProductId **required** [Id](#id)

### ListPortfoliosForProductOutput
* ListPortfoliosForProductOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * PortfolioDetails [PortfolioDetails](#portfoliodetails)

### ListPortfoliosInput
* ListPortfoliosInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

### ListPortfoliosOutput
* ListPortfoliosOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * PortfolioDetails [PortfolioDetails](#portfoliodetails)

### ListPrincipalsForPortfolioInput
* ListPrincipalsForPortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId **required** [Id](#id)

### ListPrincipalsForPortfolioOutput
* ListPrincipalsForPortfolioOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * Principals [Principals](#principals)

### ListProvisioningArtifactsInput
* ListProvisioningArtifactsInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * ProductId **required** [Id](#id)

### ListProvisioningArtifactsOutput
* ListProvisioningArtifactsOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * ProvisioningArtifactDetails [ProvisioningArtifactDetails](#provisioningartifactdetails)

### ListRecordHistoryInput
* ListRecordHistoryInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccessLevelFilter [AccessLevelFilter](#accesslevelfilter)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * SearchFilter [ListRecordHistorySearchFilter](#listrecordhistorysearchfilter)

### ListRecordHistoryOutput
* ListRecordHistoryOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * RecordDetails [RecordDetails](#recorddetails)

### ListRecordHistorySearchFilter
* ListRecordHistorySearchFilter `object`: The search filter to limit results when listing request history records.
  * Key [SearchFilterKey](#searchfilterkey)
  * Value [SearchFilterValue](#searchfiltervalue)

### ListResourcesForTagOptionInput
* ListResourcesForTagOptionInput `object`
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * ResourceType [ResourceType](#resourcetype)
  * TagOptionId **required** [TagOptionId](#tagoptionid)

### ListResourcesForTagOptionOutput
* ListResourcesForTagOptionOutput `object`
  * PageToken [PageToken](#pagetoken)
  * ResourceDetails [ResourceDetails](#resourcedetails)

### ListTagOptionsFilters
* ListTagOptionsFilters `object`: The ListTagOptions filters.
  * Active [TagOptionActive](#tagoptionactive)
  * Key [TagOptionKey](#tagoptionkey)
  * Value [TagOptionValue](#tagoptionvalue)

### ListTagOptionsInput
* ListTagOptionsInput `object`
  * Filters [ListTagOptionsFilters](#listtagoptionsfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

### ListTagOptionsOutput
* ListTagOptionsOutput `object`
  * PageToken [PageToken](#pagetoken)
  * TagOptionDetails [TagOptionDetails](#tagoptiondetails)

### NoEcho
* NoEcho `boolean`

### NotificationArn
* NotificationArn `string`

### NotificationArns
* NotificationArns `array`
  * items [NotificationArn](#notificationarn)

### OutputKey
* OutputKey `string`

### OutputValue
* OutputValue `string`

### PageSize
* PageSize `integer`

### PageToken
* PageToken `string`

### ParameterConstraints
* ParameterConstraints `object`: The constraints that the administrator has put on the parameter.
  * AllowedValues [AllowedValues](#allowedvalues)

### ParameterKey
* ParameterKey `string`

### ParameterType
* ParameterType `string`

### ParameterValue
* ParameterValue `string`

### PortfolioDescription
* PortfolioDescription `string`

### PortfolioDetail
* PortfolioDetail `object`: Detailed portfolio information.
  * ARN [ResourceARN](#resourcearn)
  * CreatedTime [CreationTime](#creationtime)
  * Description [PortfolioDescription](#portfoliodescription)
  * DisplayName [PortfolioDisplayName](#portfoliodisplayname)
  * Id [Id](#id)
  * ProviderName [ProviderName](#providername)

### PortfolioDetails
* PortfolioDetails `array`
  * items [PortfolioDetail](#portfoliodetail)

### PortfolioDisplayName
* PortfolioDisplayName `string`

### PortfolioName
* PortfolioName `string`

### Principal
* Principal `object`: A principal's ARN and type.
  * PrincipalARN [PrincipalARN](#principalarn)
  * PrincipalType [PrincipalType](#principaltype)

### PrincipalARN
* PrincipalARN `string`

### PrincipalType
* PrincipalType `string` (values: IAM)

### Principals
* Principals `array`
  * items [Principal](#principal)

### ProductArn
* ProductArn `string`

### ProductSource
* ProductSource `string` (values: ACCOUNT)

### ProductType
* ProductType `string` (values: CLOUD_FORMATION_TEMPLATE, MARKETPLACE)

### ProductViewAggregationType
* ProductViewAggregationType `string`

### ProductViewAggregationValue
* ProductViewAggregationValue `object`: A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
  * ApproximateCount [ApproximateCount](#approximatecount)
  * Value [AttributeValue](#attributevalue)

### ProductViewAggregationValues
* ProductViewAggregationValues `array`
  * items [ProductViewAggregationValue](#productviewaggregationvalue)

### ProductViewAggregations
* ProductViewAggregations `array`
  * items `object`
    * key [ProductViewAggregationType](#productviewaggregationtype)
    * value [ProductViewAggregationValues](#productviewaggregationvalues)

### ProductViewDetail
* ProductViewDetail `object`: Detailed product view information.
  * CreatedTime [CreatedTime](#createdtime)
  * ProductARN [ResourceARN](#resourcearn)
  * ProductViewSummary [ProductViewSummary](#productviewsummary)
  * Status [Status](#status)

### ProductViewDetails
* ProductViewDetails `array`
  * items [ProductViewDetail](#productviewdetail)

### ProductViewDistributor
* ProductViewDistributor `string`

### ProductViewFilterBy
* ProductViewFilterBy `string` (values: FullTextSearch, Owner, ProductType, SourceProductId)

### ProductViewFilterValue
* ProductViewFilterValue `string`

### ProductViewFilterValues
* ProductViewFilterValues `array`
  * items [ProductViewFilterValue](#productviewfiltervalue)

### ProductViewFilters
* ProductViewFilters `array`
  * items `object`
    * key [ProductViewFilterBy](#productviewfilterby)
    * value [ProductViewFilterValues](#productviewfiltervalues)

### ProductViewName
* ProductViewName `string`

### ProductViewOwner
* ProductViewOwner `string`

### ProductViewShortDescription
* ProductViewShortDescription `string`

### ProductViewSortBy
* ProductViewSortBy `string` (values: Title, VersionCount, CreationDate)

### ProductViewSummaries
* ProductViewSummaries `array`
  * items [ProductViewSummary](#productviewsummary)

### ProductViewSummary
* ProductViewSummary `object`: The summary metadata about the specified product.
  * Distributor [ProductViewDistributor](#productviewdistributor)
  * HasDefaultPath [HasDefaultPath](#hasdefaultpath)
  * Id [Id](#id)
  * Name [ProductViewName](#productviewname)
  * Owner [ProductViewOwner](#productviewowner)
  * ProductId [Id](#id)
  * ShortDescription [ProductViewShortDescription](#productviewshortdescription)
  * SupportDescription [SupportDescription](#supportdescription)
  * SupportEmail [SupportEmail](#supportemail)
  * SupportUrl [SupportUrl](#supporturl)
  * Type [ProductType](#producttype)

### ProviderName
* ProviderName `string`

### ProvisionProductInput
* ProvisionProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * NotificationArns [NotificationArns](#notificationarns)
  * PathId [Id](#id)
  * ProductId **required** [Id](#id)
  * ProvisionToken **required** [IdempotencyToken](#idempotencytoken)
  * ProvisionedProductName **required** [ProvisionedProductName](#provisionedproductname)
  * ProvisioningArtifactId **required** [Id](#id)
  * ProvisioningParameters [ProvisioningParameters](#provisioningparameters)
  * Tags [Tags](#tags)

### ProvisionProductOutput
* ProvisionProductOutput `object`
  * RecordDetail [RecordDetail](#recorddetail)

### ProvisionedProductDetail
* ProvisionedProductDetail `object`: Detailed information about a ProvisionedProduct object.
  * Arn [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * CreatedTime [CreatedTime](#createdtime)
  * Id [ProvisionedProductId](#provisionedproductid)
  * IdempotencyToken [IdempotencyToken](#idempotencytoken)
  * LastRecordId [LastRequestId](#lastrequestid)
  * Name [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * Status [ProvisionedProductStatus](#provisionedproductstatus)
  * StatusMessage [ProvisionedProductStatusMessage](#provisionedproductstatusmessage)
  * Type [ProvisionedProductType](#provisionedproducttype)

### ProvisionedProductDetails
* ProvisionedProductDetails `array`
  * items [ProvisionedProductDetail](#provisionedproductdetail)

### ProvisionedProductId
* ProvisionedProductId `string`

### ProvisionedProductName
* ProvisionedProductName `string`

### ProvisionedProductNameOrArn
* ProvisionedProductNameOrArn `string`

### ProvisionedProductStatus
* ProvisionedProductStatus `string` (values: AVAILABLE, UNDER_CHANGE, TAINTED, ERROR)

### ProvisionedProductStatusMessage
* ProvisionedProductStatusMessage `string`

### ProvisionedProductType
* ProvisionedProductType `string`

### ProvisioningArtifact
* ProvisioningArtifact `object`: Contains information indicating the ways in which a product can be provisioned.
  * CreatedTime [ProvisioningArtifactCreatedTime](#provisioningartifactcreatedtime)
  * Description [ProvisioningArtifactDescription](#provisioningartifactdescription)
  * Id [Id](#id)
  * Name [ProvisioningArtifactName](#provisioningartifactname)

### ProvisioningArtifactCreatedTime
* ProvisioningArtifactCreatedTime `string`

### ProvisioningArtifactDescription
* ProvisioningArtifactDescription `string`

### ProvisioningArtifactDetail
* ProvisioningArtifactDetail `object`: Detailed provisioning artifact information.
  * CreatedTime [CreationTime](#creationtime)
  * Description [ProvisioningArtifactName](#provisioningartifactname)
  * Id [Id](#id)
  * Name [ProvisioningArtifactName](#provisioningartifactname)
  * Type [ProvisioningArtifactType](#provisioningartifacttype)

### ProvisioningArtifactDetails
* ProvisioningArtifactDetails `array`
  * items [ProvisioningArtifactDetail](#provisioningartifactdetail)

### ProvisioningArtifactInfo
* ProvisioningArtifactInfo `array`
  * items `object`
    * key [ProvisioningArtifactInfoKey](#provisioningartifactinfokey)
    * value [ProvisioningArtifactInfoValue](#provisioningartifactinfovalue)

### ProvisioningArtifactInfoKey
* ProvisioningArtifactInfoKey `string`

### ProvisioningArtifactInfoValue
* ProvisioningArtifactInfoValue `string`

### ProvisioningArtifactName
* ProvisioningArtifactName `string`

### ProvisioningArtifactParameter
* ProvisioningArtifactParameter `object`: A parameter used to successfully provision the product. This value includes a list of allowable values and additional metadata. 
  * DefaultValue [DefaultValue](#defaultvalue)
  * Description [Description](#description)
  * IsNoEcho [NoEcho](#noecho)
  * ParameterConstraints [ParameterConstraints](#parameterconstraints)
  * ParameterKey [ParameterKey](#parameterkey)
  * ParameterType [ParameterType](#parametertype)

### ProvisioningArtifactParameters
* ProvisioningArtifactParameters `array`
  * items [ProvisioningArtifactParameter](#provisioningartifactparameter)

### ProvisioningArtifactProperties
* ProvisioningArtifactProperties `object`: Provisioning artifact properties. For example request JSON, see <a>CreateProvisioningArtifact</a>.
  * Description [ProvisioningArtifactDescription](#provisioningartifactdescription)
  * Info **required** [ProvisioningArtifactInfo](#provisioningartifactinfo)
  * Name [ProvisioningArtifactName](#provisioningartifactname)
  * Type [ProvisioningArtifactType](#provisioningartifacttype)

### ProvisioningArtifactPropertyName
* ProvisioningArtifactPropertyName `string` (values: Id)

### ProvisioningArtifactPropertyValue
* ProvisioningArtifactPropertyValue `string`

### ProvisioningArtifactSummaries
* ProvisioningArtifactSummaries `array`
  * items [ProvisioningArtifactSummary](#provisioningartifactsummary)

### ProvisioningArtifactSummary
* ProvisioningArtifactSummary `object`: Stores summary information about a provisioning artifact.
  * CreatedTime [ProvisioningArtifactCreatedTime](#provisioningartifactcreatedtime)
  * Description [ProvisioningArtifactDescription](#provisioningartifactdescription)
  * Id [Id](#id)
  * Name [ProvisioningArtifactName](#provisioningartifactname)
  * ProvisioningArtifactMetadata [ProvisioningArtifactInfo](#provisioningartifactinfo)

### ProvisioningArtifactType
* ProvisioningArtifactType `string` (values: CLOUD_FORMATION_TEMPLATE, MARKETPLACE_AMI, MARKETPLACE_CAR)

### ProvisioningArtifacts
* ProvisioningArtifacts `array`
  * items [ProvisioningArtifact](#provisioningartifact)

### ProvisioningParameter
* ProvisioningParameter `object`: The parameter key-value pairs used to provision a product.
  * Key [ParameterKey](#parameterkey)
  * Value [ParameterValue](#parametervalue)

### ProvisioningParameters
* ProvisioningParameters `array`
  * items [ProvisioningParameter](#provisioningparameter)

### RecordDetail
* RecordDetail `object`: The full details of a specific ProvisionedProduct object.
  * CreatedTime [CreatedTime](#createdtime)
  * PathId [Id](#id)
  * ProductId [Id](#id)
  * ProvisionedProductId [Id](#id)
  * ProvisionedProductName [ProvisionedProductName](#provisionedproductname)
  * ProvisionedProductType [ProvisionedProductType](#provisionedproducttype)
  * ProvisioningArtifactId [Id](#id)
  * RecordErrors [RecordErrors](#recorderrors)
  * RecordId [Id](#id)
  * RecordTags [RecordTags](#recordtags)
  * RecordType [RecordType](#recordtype)
  * Status [RecordStatus](#recordstatus)
  * UpdatedTime [UpdatedTime](#updatedtime)

### RecordDetails
* RecordDetails `array`
  * items [RecordDetail](#recorddetail)

### RecordError
* RecordError `object`: The error code and description resulting from an operation.
  * Code [ErrorCode](#errorcode)
  * Description [ErrorDescription](#errordescription)

### RecordErrors
* RecordErrors `array`
  * items [RecordError](#recorderror)

### RecordOutput
* RecordOutput `object`: An output for the specified Product object created as the result of a request. For example, a CloudFormation-backed product that creates an S3 bucket would have an output for the S3 bucket URL.
  * Description [Description](#description)
  * OutputKey [OutputKey](#outputkey)
  * OutputValue [OutputValue](#outputvalue)

### RecordOutputs
* RecordOutputs `array`
  * items [RecordOutput](#recordoutput)

### RecordStatus
* RecordStatus `string` (values: CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED)

### RecordTag
* RecordTag `object`: A tag associated with the record, stored as a key-value pair.
  * Key [RecordTagKey](#recordtagkey)
  * Value [RecordTagValue](#recordtagvalue)

### RecordTagKey
* RecordTagKey `string`

### RecordTagValue
* RecordTagValue `string`

### RecordTags
* RecordTags `array`
  * items [RecordTag](#recordtag)

### RecordType
* RecordType `string`

### RejectPortfolioShareInput
* RejectPortfolioShareInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PortfolioId **required** [Id](#id)

### RejectPortfolioShareOutput
* RejectPortfolioShareOutput `object`

### ResourceARN
* ResourceARN `string`

### ResourceDetail
* ResourceDetail `object`: Detailed resource information.
  * ARN [ResourceDetailARN](#resourcedetailarn)
  * CreatedTime [ResourceDetailCreatedTime](#resourcedetailcreatedtime)
  * Description [ResourceDetailDescription](#resourcedetaildescription)
  * Id [ResourceDetailId](#resourcedetailid)
  * Name [ResourceDetailName](#resourcedetailname)

### ResourceDetailARN
* ResourceDetailARN `string`

### ResourceDetailCreatedTime
* ResourceDetailCreatedTime `string`

### ResourceDetailDescription
* ResourceDetailDescription `string`

### ResourceDetailId
* ResourceDetailId `string`

### ResourceDetailName
* ResourceDetailName `string`

### ResourceDetails
* ResourceDetails `array`
  * items [ResourceDetail](#resourcedetail)

### ResourceId
* ResourceId `string`

### ResourceInUseException
* ResourceInUseException `object`: The operation was requested against a resource that is currently in use. Free the resource from use and retry the operation.

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource was not found.

### ResourceType
* ResourceType `string`

### ScanProvisionedProductsInput
* ScanProvisionedProductsInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AccessLevelFilter [AccessLevelFilter](#accesslevelfilter)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)

### ScanProvisionedProductsOutput
* ScanProvisionedProductsOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * ProvisionedProducts [ProvisionedProductDetails](#provisionedproductdetails)

### SearchFilterKey
* SearchFilterKey `string`

### SearchFilterValue
* SearchFilterValue `string`

### SearchProductsAsAdminInput
* SearchProductsAsAdminInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Filters [ProductViewFilters](#productviewfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * PortfolioId [Id](#id)
  * ProductSource [ProductSource](#productsource)
  * SortBy [ProductViewSortBy](#productviewsortby)
  * SortOrder [SortOrder](#sortorder)

### SearchProductsAsAdminOutput
* SearchProductsAsAdminOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * ProductViewDetails [ProductViewDetails](#productviewdetails)

### SearchProductsInput
* SearchProductsInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Filters [ProductViewFilters](#productviewfilters)
  * PageSize [PageSize](#pagesize)
  * PageToken [PageToken](#pagetoken)
  * SortBy [ProductViewSortBy](#productviewsortby)
  * SortOrder [SortOrder](#sortorder)

### SearchProductsOutput
* SearchProductsOutput `object`
  * NextPageToken [PageToken](#pagetoken)
  * ProductViewAggregations [ProductViewAggregations](#productviewaggregations)
  * ProductViewSummaries [ProductViewSummaries](#productviewsummaries)

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### SourceProvisioningArtifactProperties
* SourceProvisioningArtifactProperties `array`
  * items [SourceProvisioningArtifactPropertiesMap](#sourceprovisioningartifactpropertiesmap)

### SourceProvisioningArtifactPropertiesMap
* SourceProvisioningArtifactPropertiesMap `array`
  * items `object`
    * key [ProvisioningArtifactPropertyName](#provisioningartifactpropertyname)
    * value [ProvisioningArtifactPropertyValue](#provisioningartifactpropertyvalue)

### Status
* Status `string` (values: AVAILABLE, CREATING, FAILED)

### StatusDetail
* StatusDetail `string`

### SupportDescription
* SupportDescription `string`

### SupportEmail
* SupportEmail `string`

### SupportUrl
* SupportUrl `string`

### Tag
* Tag `object`: Key-value pairs to associate with this provisioning. These tags are entirely discretionary and are propagated to the resources created in the provisioning.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagOptionActive
* TagOptionActive `boolean`

### TagOptionDetail
* TagOptionDetail `object`: The TagOption details.
  * Active [TagOptionActive](#tagoptionactive)
  * Id [TagOptionId](#tagoptionid)
  * Key [TagOptionKey](#tagoptionkey)
  * Value [TagOptionValue](#tagoptionvalue)

### TagOptionDetails
* TagOptionDetails `array`
  * items [TagOptionDetail](#tagoptiondetail)

### TagOptionId
* TagOptionId `string`

### TagOptionKey
* TagOptionKey `string`

### TagOptionNotMigratedException
* TagOptionNotMigratedException `object`: An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Please use the AWS console to perform the migration process before retrying the operation.

### TagOptionSummaries
* TagOptionSummaries `array`
  * items [TagOptionSummary](#tagoptionsummary)

### TagOptionSummary
* TagOptionSummary `object`: The TagOption summary key-value pair.
  * Key [TagOptionKey](#tagoptionkey)
  * Values [TagOptionValues](#tagoptionvalues)

### TagOptionValue
* TagOptionValue `string`

### TagOptionValues
* TagOptionValues `array`
  * items [TagOptionValue](#tagoptionvalue)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TerminateProvisionedProductInput
* TerminateProvisionedProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * IgnoreErrors [IgnoreErrors](#ignoreerrors)
  * ProvisionedProductId [Id](#id)
  * ProvisionedProductName [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * TerminateToken **required** [IdempotencyToken](#idempotencytoken)

### TerminateProvisionedProductOutput
* TerminateProvisionedProductOutput `object`
  * RecordDetail [RecordDetail](#recorddetail)

### UpdateConstraintInput
* UpdateConstraintInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ConstraintDescription](#constraintdescription)
  * Id **required** [Id](#id)

### UpdateConstraintOutput
* UpdateConstraintOutput `object`
  * ConstraintDetail [ConstraintDetail](#constraintdetail)
  * ConstraintParameters [ConstraintParameters](#constraintparameters)
  * Status [Status](#status)

### UpdatePortfolioInput
* UpdatePortfolioInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AddTags [AddTags](#addtags)
  * Description [PortfolioDescription](#portfoliodescription)
  * DisplayName [PortfolioDisplayName](#portfoliodisplayname)
  * Id **required** [Id](#id)
  * ProviderName [ProviderName](#providername)
  * RemoveTags [TagKeys](#tagkeys)

### UpdatePortfolioOutput
* UpdatePortfolioOutput `object`
  * PortfolioDetail [PortfolioDetail](#portfoliodetail)
  * Tags [Tags](#tags)

### UpdateProductInput
* UpdateProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * AddTags [AddTags](#addtags)
  * Description [ProductViewShortDescription](#productviewshortdescription)
  * Distributor [ProductViewOwner](#productviewowner)
  * Id **required** [Id](#id)
  * Name [ProductViewName](#productviewname)
  * Owner [ProductViewOwner](#productviewowner)
  * RemoveTags [TagKeys](#tagkeys)
  * SupportDescription [SupportDescription](#supportdescription)
  * SupportEmail [SupportEmail](#supportemail)
  * SupportUrl [SupportUrl](#supporturl)

### UpdateProductOutput
* UpdateProductOutput `object`
  * ProductViewDetail [ProductViewDetail](#productviewdetail)
  * Tags [Tags](#tags)

### UpdateProvisionedProductInput
* UpdateProvisionedProductInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * PathId [Id](#id)
  * ProductId [Id](#id)
  * ProvisionedProductId [Id](#id)
  * ProvisionedProductName [ProvisionedProductNameOrArn](#provisionedproductnameorarn)
  * ProvisioningArtifactId [Id](#id)
  * ProvisioningParameters [UpdateProvisioningParameters](#updateprovisioningparameters)
  * UpdateToken **required** [IdempotencyToken](#idempotencytoken)

### UpdateProvisionedProductOutput
* UpdateProvisionedProductOutput `object`
  * RecordDetail [RecordDetail](#recorddetail)

### UpdateProvisioningArtifactInput
* UpdateProvisioningArtifactInput `object`
  * AcceptLanguage [AcceptLanguage](#acceptlanguage)
  * Description [ProvisioningArtifactDescription](#provisioningartifactdescription)
  * Name [ProvisioningArtifactName](#provisioningartifactname)
  * ProductId **required** [Id](#id)
  * ProvisioningArtifactId **required** [Id](#id)

### UpdateProvisioningArtifactOutput
* UpdateProvisioningArtifactOutput `object`
  * Info [ProvisioningArtifactInfo](#provisioningartifactinfo)
  * ProvisioningArtifactDetail [ProvisioningArtifactDetail](#provisioningartifactdetail)
  * Status [Status](#status)

### UpdateProvisioningParameter
* UpdateProvisioningParameter `object`: The parameter key-value pair used to update a ProvisionedProduct object. If <code>UsePreviousValue</code> is set to true, <code>Value</code> is ignored and the value for <code>Key</code> is kept as previously set (current value).
  * Key [ParameterKey](#parameterkey)
  * UsePreviousValue [UsePreviousValue](#usepreviousvalue)
  * Value [ParameterValue](#parametervalue)

### UpdateProvisioningParameters
* UpdateProvisioningParameters `array`
  * items [UpdateProvisioningParameter](#updateprovisioningparameter)

### UpdateTagOptionInput
* UpdateTagOptionInput `object`
  * Active [TagOptionActive](#tagoptionactive)
  * Id **required** [TagOptionId](#tagoptionid)
  * Value [TagOptionValue](#tagoptionvalue)

### UpdateTagOptionOutput
* UpdateTagOptionOutput `object`
  * TagOptionDetail [TagOptionDetail](#tagoptiondetail)

### UpdatedTime
* UpdatedTime `string`

### UsageInstruction
* UsageInstruction `object`: Additional information provided by the administrator.
  * Type [InstructionType](#instructiontype)
  * Value [InstructionValue](#instructionvalue)

### UsageInstructions
* UsageInstructions `array`
  * items [UsageInstruction](#usageinstruction)

### UsePreviousValue
* UsePreviousValue `boolean`

### Verbose
* Verbose `boolean`


