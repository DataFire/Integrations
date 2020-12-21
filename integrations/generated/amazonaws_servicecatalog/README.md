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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Service Catalog</fullname> <p> <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for AWS. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p>

## Actions

### AcceptPortfolioShare



```js
amazonaws_servicecatalog.AcceptPortfolioShare({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PortfolioShareType

#### Output
* output [AcceptPortfolioShareOutput](#acceptportfolioshareoutput)

### AssociateBudgetWithResource



```js
amazonaws_servicecatalog.AssociateBudgetWithResource({
  "BudgetName": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * BudgetName **required**
  * ResourceId **required**

#### Output
* output [AssociateBudgetWithResourceOutput](#associatebudgetwithresourceoutput)

### AssociatePrincipalWithPortfolio



```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({
  "PortfolioId": null,
  "PrincipalARN": null,
  "PrincipalType": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PrincipalARN **required**
  * PrincipalType **required**

#### Output
* output [AssociatePrincipalWithPortfolioOutput](#associateprincipalwithportfoliooutput)

### AssociateProductWithPortfolio



```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({
  "ProductId": null,
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * ProductId **required**
  * SourcePortfolioId

#### Output
* output [AssociateProductWithPortfolioOutput](#associateproductwithportfoliooutput)

### AssociateServiceActionWithProvisioningArtifact



```js
amazonaws_servicecatalog.AssociateServiceActionWithProvisioningArtifact({
  "ProductId": null,
  "ProvisioningArtifactId": null,
  "ServiceActionId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ServiceActionId **required**

#### Output
* output [AssociateServiceActionWithProvisioningArtifactOutput](#associateserviceactionwithprovisioningartifactoutput)

### AssociateTagOptionWithResource



```js
amazonaws_servicecatalog.AssociateTagOptionWithResource({
  "ResourceId": null,
  "TagOptionId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagOptionId **required**

#### Output
* output [AssociateTagOptionWithResourceOutput](#associatetagoptionwithresourceoutput)

### BatchAssociateServiceActionWithProvisioningArtifact



```js
amazonaws_servicecatalog.BatchAssociateServiceActionWithProvisioningArtifact({
  "ServiceActionAssociations": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ServiceActionAssociations **required**
    * items [ServiceActionAssociation](#serviceactionassociation)

#### Output
* output [BatchAssociateServiceActionWithProvisioningArtifactOutput](#batchassociateserviceactionwithprovisioningartifactoutput)

### BatchDisassociateServiceActionFromProvisioningArtifact



```js
amazonaws_servicecatalog.BatchDisassociateServiceActionFromProvisioningArtifact({
  "ServiceActionAssociations": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ServiceActionAssociations **required**
    * items [ServiceActionAssociation](#serviceactionassociation)

#### Output
* output [BatchDisassociateServiceActionFromProvisioningArtifactOutput](#batchdisassociateserviceactionfromprovisioningartifactoutput)

### CopyProduct



```js
amazonaws_servicecatalog.CopyProduct({
  "SourceProductArn": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * CopyOptions
    * items [CopyOption](#copyoption)
  * IdempotencyToken **required**
  * SourceProductArn **required**
  * SourceProvisioningArtifactIdentifiers
    * items [SourceProvisioningArtifactPropertiesMap](#sourceprovisioningartifactpropertiesmap)
  * TargetProductId
  * TargetProductName

#### Output
* output [CopyProductOutput](#copyproductoutput)

### CreateConstraint



```js
amazonaws_servicecatalog.CreateConstraint({
  "PortfolioId": null,
  "ProductId": null,
  "Parameters": null,
  "Type": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Description
  * IdempotencyToken **required**
  * Parameters **required**
  * PortfolioId **required**
  * ProductId **required**
  * Type **required**

#### Output
* output [CreateConstraintOutput](#createconstraintoutput)

### CreatePortfolio



```js
amazonaws_servicecatalog.CreatePortfolio({
  "DisplayName": null,
  "ProviderName": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Description
  * DisplayName **required**
  * IdempotencyToken **required**
  * ProviderName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePortfolioOutput](#createportfoliooutput)

### CreatePortfolioShare



```js
amazonaws_servicecatalog.CreatePortfolioShare({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode
    * Type
    * Value
  * PortfolioId **required**
  * ShareTagOptions

#### Output
* output [CreatePortfolioShareOutput](#createportfolioshareoutput)

### CreateProduct



```js
amazonaws_servicecatalog.CreateProduct({
  "Name": null,
  "Owner": null,
  "ProductType": null,
  "ProvisioningArtifactParameters": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Description
  * Distributor
  * IdempotencyToken **required**
  * Name **required**
  * Owner **required**
  * ProductType **required**
  * ProvisioningArtifactParameters **required**
    * Description
    * DisableTemplateValidation
    * Info **required**
    * Name
    * Type
  * SupportDescription
  * SupportEmail
  * SupportUrl
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateProductOutput](#createproductoutput)

### CreateProvisionedProductPlan



```js
amazonaws_servicecatalog.CreateProvisionedProductPlan({
  "PlanName": null,
  "PlanType": null,
  "ProductId": null,
  "ProvisionedProductName": null,
  "ProvisioningArtifactId": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * NotificationArns
    * items [NotificationArn](#notificationarn)
  * PathId
  * PlanName **required**
  * PlanType **required**
  * ProductId **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId **required**
  * ProvisioningParameters
    * items [UpdateProvisioningParameter](#updateprovisioningparameter)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateProvisionedProductPlanOutput](#createprovisionedproductplanoutput)

### CreateProvisioningArtifact



```js
amazonaws_servicecatalog.CreateProvisioningArtifact({
  "ProductId": null,
  "Parameters": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * Parameters **required**
    * Description
    * DisableTemplateValidation
    * Info **required**
    * Name
    * Type
  * ProductId **required**

#### Output
* output [CreateProvisioningArtifactOutput](#createprovisioningartifactoutput)

### CreateServiceAction



```js
amazonaws_servicecatalog.CreateServiceAction({
  "Name": null,
  "DefinitionType": null,
  "Definition": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Definition **required**
  * DefinitionType **required**
  * Description
  * IdempotencyToken **required**
  * Name **required**

#### Output
* output [CreateServiceActionOutput](#createserviceactionoutput)

### CreateTagOption



```js
amazonaws_servicecatalog.CreateTagOption({
  "Key": null,
  "Value": null
}, context)
```

#### Input
* input `object`
  * Key **required**
  * Value **required**

#### Output
* output [CreateTagOptionOutput](#createtagoptionoutput)

### DeleteConstraint



```js
amazonaws_servicecatalog.DeleteConstraint({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DeleteConstraintOutput](#deleteconstraintoutput)

### DeletePortfolio



```js
amazonaws_servicecatalog.DeletePortfolio({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DeletePortfolioOutput](#deleteportfoliooutput)

### DeletePortfolioShare



```js
amazonaws_servicecatalog.DeletePortfolioShare({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode
    * Type
    * Value
  * PortfolioId **required**

#### Output
* output [DeletePortfolioShareOutput](#deleteportfolioshareoutput)

### DeleteProduct



```js
amazonaws_servicecatalog.DeleteProduct({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DeleteProductOutput](#deleteproductoutput)

### DeleteProvisionedProductPlan



```js
amazonaws_servicecatalog.DeleteProvisionedProductPlan({
  "PlanId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IgnoreErrors
  * PlanId **required**

#### Output
* output [DeleteProvisionedProductPlanOutput](#deleteprovisionedproductplanoutput)

### DeleteProvisioningArtifact



```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({
  "ProductId": null,
  "ProvisioningArtifactId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**

#### Output
* output [DeleteProvisioningArtifactOutput](#deleteprovisioningartifactoutput)

### DeleteServiceAction



```js
amazonaws_servicecatalog.DeleteServiceAction({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DeleteServiceActionOutput](#deleteserviceactionoutput)

### DeleteTagOption



```js
amazonaws_servicecatalog.DeleteTagOption({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DeleteTagOptionOutput](#deletetagoptionoutput)

### DescribeConstraint



```js
amazonaws_servicecatalog.DescribeConstraint({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DescribeConstraintOutput](#describeconstraintoutput)

### DescribeCopyProductStatus



```js
amazonaws_servicecatalog.DescribeCopyProductStatus({
  "CopyProductToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * CopyProductToken **required**

#### Output
* output [DescribeCopyProductStatusOutput](#describecopyproductstatusoutput)

### DescribePortfolio



```js
amazonaws_servicecatalog.DescribePortfolio({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DescribePortfolioOutput](#describeportfoliooutput)

### DescribePortfolioShareStatus



```js
amazonaws_servicecatalog.DescribePortfolioShareStatus({
  "PortfolioShareToken": null
}, context)
```

#### Input
* input `object`
  * PortfolioShareToken **required**

#### Output
* output [DescribePortfolioShareStatusOutput](#describeportfoliosharestatusoutput)

### DescribePortfolioShares



```js
amazonaws_servicecatalog.DescribePortfolioShares({
  "PortfolioId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * PageSize
  * PageToken
  * PortfolioId **required**
  * Type **required**

#### Output
* output [DescribePortfolioSharesOutput](#describeportfoliosharesoutput)

### DescribeProduct



```js
amazonaws_servicecatalog.DescribeProduct({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id
  * Name

#### Output
* output [DescribeProductOutput](#describeproductoutput)

### DescribeProductAsAdmin



```js
amazonaws_servicecatalog.DescribeProductAsAdmin({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id
  * Name
  * SourcePortfolioId

#### Output
* output [DescribeProductAsAdminOutput](#describeproductasadminoutput)

### DescribeProductView



```js
amazonaws_servicecatalog.DescribeProductView({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DescribeProductViewOutput](#describeproductviewoutput)

### DescribeProvisionedProduct



```js
amazonaws_servicecatalog.DescribeProvisionedProduct({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id
  * Name

#### Output
* output [DescribeProvisionedProductOutput](#describeprovisionedproductoutput)

### DescribeProvisionedProductPlan



```js
amazonaws_servicecatalog.DescribeProvisionedProductPlan({
  "PlanId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PlanId **required**

#### Output
* output [DescribeProvisionedProductPlanOutput](#describeprovisionedproductplanoutput)

### DescribeProvisioningArtifact



```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProductId
  * ProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * Verbose

#### Output
* output [DescribeProvisioningArtifactOutput](#describeprovisioningartifactoutput)

### DescribeProvisioningParameters



```js
amazonaws_servicecatalog.DescribeProvisioningParameters({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName

#### Output
* output [DescribeProvisioningParametersOutput](#describeprovisioningparametersoutput)

### DescribeRecord



```js
amazonaws_servicecatalog.DescribeRecord({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**
  * PageSize
  * PageToken

#### Output
* output [DescribeRecordOutput](#describerecordoutput)

### DescribeServiceAction



```js
amazonaws_servicecatalog.DescribeServiceAction({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Id **required**

#### Output
* output [DescribeServiceActionOutput](#describeserviceactionoutput)

### DescribeServiceActionExecutionParameters



```js
amazonaws_servicecatalog.DescribeServiceActionExecutionParameters({
  "ProvisionedProductId": null,
  "ServiceActionId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProvisionedProductId **required**
  * ServiceActionId **required**

#### Output
* output [DescribeServiceActionExecutionParametersOutput](#describeserviceactionexecutionparametersoutput)

### DescribeTagOption



```js
amazonaws_servicecatalog.DescribeTagOption({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DescribeTagOptionOutput](#describetagoptionoutput)

### DisableAWSOrganizationsAccess



```js
amazonaws_servicecatalog.DisableAWSOrganizationsAccess({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableAWSOrganizationsAccessOutput](#disableawsorganizationsaccessoutput)

### DisassociateBudgetFromResource



```js
amazonaws_servicecatalog.DisassociateBudgetFromResource({
  "BudgetName": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * BudgetName **required**
  * ResourceId **required**

#### Output
* output [DisassociateBudgetFromResourceOutput](#disassociatebudgetfromresourceoutput)

### DisassociatePrincipalFromPortfolio



```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({
  "PortfolioId": null,
  "PrincipalARN": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PrincipalARN **required**

#### Output
* output [DisassociatePrincipalFromPortfolioOutput](#disassociateprincipalfromportfoliooutput)

### DisassociateProductFromPortfolio



```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({
  "ProductId": null,
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * ProductId **required**

#### Output
* output [DisassociateProductFromPortfolioOutput](#disassociateproductfromportfoliooutput)

### DisassociateServiceActionFromProvisioningArtifact



```js
amazonaws_servicecatalog.DisassociateServiceActionFromProvisioningArtifact({
  "ProductId": null,
  "ProvisioningArtifactId": null,
  "ServiceActionId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ServiceActionId **required**

#### Output
* output [DisassociateServiceActionFromProvisioningArtifactOutput](#disassociateserviceactionfromprovisioningartifactoutput)

### DisassociateTagOptionFromResource



```js
amazonaws_servicecatalog.DisassociateTagOptionFromResource({
  "ResourceId": null,
  "TagOptionId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagOptionId **required**

#### Output
* output [DisassociateTagOptionFromResourceOutput](#disassociatetagoptionfromresourceoutput)

### EnableAWSOrganizationsAccess



```js
amazonaws_servicecatalog.EnableAWSOrganizationsAccess({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableAWSOrganizationsAccessOutput](#enableawsorganizationsaccessoutput)

### ExecuteProvisionedProductPlan



```js
amazonaws_servicecatalog.ExecuteProvisionedProductPlan({
  "PlanId": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * PlanId **required**

#### Output
* output [ExecuteProvisionedProductPlanOutput](#executeprovisionedproductplanoutput)

### ExecuteProvisionedProductServiceAction



```js
amazonaws_servicecatalog.ExecuteProvisionedProductServiceAction({
  "ProvisionedProductId": null,
  "ServiceActionId": null,
  "ExecuteToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ExecuteToken **required**
  * Parameters
  * ProvisionedProductId **required**
  * ServiceActionId **required**

#### Output
* output [ExecuteProvisionedProductServiceActionOutput](#executeprovisionedproductserviceactionoutput)

### GetAWSOrganizationsAccessStatus



```js
amazonaws_servicecatalog.GetAWSOrganizationsAccessStatus({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAWSOrganizationsAccessStatusOutput](#getawsorganizationsaccessstatusoutput)

### GetProvisionedProductOutputs



```js
amazonaws_servicecatalog.GetProvisionedProductOutputs({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * OutputKeys
    * items [OutputKey](#outputkey)
  * PageSize
  * PageToken
  * ProvisionedProductId
  * ProvisionedProductName

#### Output
* output [GetProvisionedProductOutputsOutput](#getprovisionedproductoutputsoutput)

### ImportAsProvisionedProduct



```js
amazonaws_servicecatalog.ImportAsProvisionedProduct({
  "ProductId": null,
  "ProvisioningArtifactId": null,
  "ProvisionedProductName": null,
  "PhysicalId": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * PhysicalId **required**
  * ProductId **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId **required**

#### Output
* output [ImportAsProvisionedProductOutput](#importasprovisionedproductoutput)

### ListAcceptedPortfolioShares



```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioShareType

#### Output
* output [ListAcceptedPortfolioSharesOutput](#listacceptedportfoliosharesoutput)

### ListBudgetsForResource



```js
amazonaws_servicecatalog.ListBudgetsForResource({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ResourceId **required**

#### Output
* output [ListBudgetsForResourceOutput](#listbudgetsforresourceoutput)

### ListConstraintsForPortfolio



```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioId **required**
  * ProductId

#### Output
* output [ListConstraintsForPortfolioOutput](#listconstraintsforportfoliooutput)

### ListLaunchPaths



```js
amazonaws_servicecatalog.ListLaunchPaths({
  "ProductId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**

#### Output
* output [ListLaunchPathsOutput](#listlaunchpathsoutput)

### ListOrganizationPortfolioAccess



```js
amazonaws_servicecatalog.ListOrganizationPortfolioAccess({
  "PortfolioId": null,
  "OrganizationNodeType": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * OrganizationNodeType **required**
  * PageSize
  * PageToken
  * PortfolioId **required**

#### Output
* output [ListOrganizationPortfolioAccessOutput](#listorganizationportfolioaccessoutput)

### ListPortfolioAccess



```js
amazonaws_servicecatalog.ListPortfolioAccess({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * OrganizationParentId
  * PageSize
  * PageToken
  * PortfolioId **required**

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
  * AcceptLanguage
  * PageSize
  * PageToken

#### Output
* output [ListPortfoliosOutput](#listportfoliosoutput)

### ListPortfoliosForProduct



```js
amazonaws_servicecatalog.ListPortfoliosForProduct({
  "ProductId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**

#### Output
* output [ListPortfoliosForProductOutput](#listportfoliosforproductoutput)

### ListPrincipalsForPortfolio



```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioId **required**

#### Output
* output [ListPrincipalsForPortfolioOutput](#listprincipalsforportfoliooutput)

### ListProvisionedProductPlans



```js
amazonaws_servicecatalog.ListProvisionedProductPlans({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken
  * ProvisionProductId

#### Output
* output [ListProvisionedProductPlansOutput](#listprovisionedproductplansoutput)

### ListProvisioningArtifacts



```js
amazonaws_servicecatalog.ListProvisioningArtifacts({
  "ProductId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * ProductId **required**

#### Output
* output [ListProvisioningArtifactsOutput](#listprovisioningartifactsoutput)

### ListProvisioningArtifactsForServiceAction



```js
amazonaws_servicecatalog.ListProvisioningArtifactsForServiceAction({
  "ServiceActionId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ServiceActionId **required**

#### Output
* output [ListProvisioningArtifactsForServiceActionOutput](#listprovisioningartifactsforserviceactionoutput)

### ListRecordHistory



```js
amazonaws_servicecatalog.ListRecordHistory({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken
  * SearchFilter
    * Key
    * Value

#### Output
* output [ListRecordHistoryOutput](#listrecordhistoryoutput)

### ListResourcesForTagOption



```js
amazonaws_servicecatalog.ListResourcesForTagOption({
  "TagOptionId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * PageSize
  * PageToken
  * ResourceType
  * TagOptionId **required**

#### Output
* output [ListResourcesForTagOptionOutput](#listresourcesfortagoptionoutput)

### ListServiceActions



```js
amazonaws_servicecatalog.ListServiceActions({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken

#### Output
* output [ListServiceActionsOutput](#listserviceactionsoutput)

### ListServiceActionsForProvisioningArtifact



```js
amazonaws_servicecatalog.ListServiceActionsForProvisioningArtifact({
  "ProductId": null,
  "ProvisioningArtifactId": null
}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**
  * ProvisioningArtifactId **required**

#### Output
* output [ListServiceActionsForProvisioningArtifactOutput](#listserviceactionsforprovisioningartifactoutput)

### ListStackInstancesForProvisionedProduct



```js
amazonaws_servicecatalog.ListStackInstancesForProvisionedProduct({
  "ProvisionedProductId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProvisionedProductId **required**

#### Output
* output [ListStackInstancesForProvisionedProductOutput](#liststackinstancesforprovisionedproductoutput)

### ListTagOptions



```js
amazonaws_servicecatalog.ListTagOptions({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * Filters
    * Active
    * Key
    * Value
  * PageSize
  * PageToken

#### Output
* output [ListTagOptionsOutput](#listtagoptionsoutput)

### ProvisionProduct



```js
amazonaws_servicecatalog.ProvisionProduct({
  "ProvisionedProductName": null,
  "ProvisionToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * NotificationArns
    * items [NotificationArn](#notificationarn)
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisionToken **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * ProvisioningParameters
    * items [ProvisioningParameter](#provisioningparameter)
  * ProvisioningPreferences
    * StackSetAccounts
      * items [AccountId](#accountid)
    * StackSetFailureToleranceCount
    * StackSetFailureTolerancePercentage
    * StackSetMaxConcurrencyCount
    * StackSetMaxConcurrencyPercentage
    * StackSetRegions
      * items [Region](#region)
  * Tags
    * items [Tag](#tag)

#### Output
* output [ProvisionProductOutput](#provisionproductoutput)

### RejectPortfolioShare



```js
amazonaws_servicecatalog.RejectPortfolioShare({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PortfolioShareType

#### Output
* output [RejectPortfolioShareOutput](#rejectportfolioshareoutput)

### ScanProvisionedProducts



```js
amazonaws_servicecatalog.ScanProvisionedProducts({}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken

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
  * AcceptLanguage
  * Filters
  * PageSize
  * PageToken
  * SortBy
  * SortOrder

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
  * AcceptLanguage
  * Filters
  * PageSize
  * PageToken
  * PortfolioId
  * ProductSource
  * SortBy
  * SortOrder

#### Output
* output [SearchProductsAsAdminOutput](#searchproductsasadminoutput)

### SearchProvisionedProducts



```js
amazonaws_servicecatalog.SearchProvisionedProducts({}, context)
```

#### Input
* input `object`
  * PageSize `string`
  * PageToken `string`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * Filters
  * PageSize
  * PageToken
  * SortBy
  * SortOrder

#### Output
* output [SearchProvisionedProductsOutput](#searchprovisionedproductsoutput)

### TerminateProvisionedProduct



```js
amazonaws_servicecatalog.TerminateProvisionedProduct({
  "TerminateToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IgnoreErrors
  * ProvisionedProductId
  * ProvisionedProductName
  * RetainPhysicalResources
  * TerminateToken **required**

#### Output
* output [TerminateProvisionedProductOutput](#terminateprovisionedproductoutput)

### UpdateConstraint



```js
amazonaws_servicecatalog.UpdateConstraint({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Description
  * Id **required**
  * Parameters

#### Output
* output [UpdateConstraintOutput](#updateconstraintoutput)

### UpdatePortfolio



```js
amazonaws_servicecatalog.UpdatePortfolio({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AddTags
    * items [Tag](#tag)
  * Description
  * DisplayName
  * Id **required**
  * ProviderName
  * RemoveTags
    * items [TagKey](#tagkey)

#### Output
* output [UpdatePortfolioOutput](#updateportfoliooutput)

### UpdatePortfolioShare



```js
amazonaws_servicecatalog.UpdatePortfolioShare({
  "PortfolioId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode [OrganizationNode](#organizationnode)
  * PortfolioId **required**
  * ShareTagOptions

#### Output
* output [UpdatePortfolioShareOutput](#updateportfolioshareoutput)

### UpdateProduct



```js
amazonaws_servicecatalog.UpdateProduct({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * AddTags
    * items [Tag](#tag)
  * Description
  * Distributor
  * Id **required**
  * Name
  * Owner
  * RemoveTags
    * items [TagKey](#tagkey)
  * SupportDescription
  * SupportEmail
  * SupportUrl

#### Output
* output [UpdateProductOutput](#updateproductoutput)

### UpdateProvisionedProduct



```js
amazonaws_servicecatalog.UpdateProvisionedProduct({
  "UpdateToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisionedProductId
  * ProvisionedProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * ProvisioningParameters
    * items [UpdateProvisioningParameter](#updateprovisioningparameter)
  * ProvisioningPreferences
    * StackSetAccounts
      * items [AccountId](#accountid)
    * StackSetFailureToleranceCount
    * StackSetFailureTolerancePercentage
    * StackSetMaxConcurrencyCount
    * StackSetMaxConcurrencyPercentage
    * StackSetOperationType
    * StackSetRegions
      * items [Region](#region)
  * Tags
    * items [Tag](#tag)
  * UpdateToken **required**

#### Output
* output [UpdateProvisionedProductOutput](#updateprovisionedproductoutput)

### UpdateProvisionedProductProperties



```js
amazonaws_servicecatalog.UpdateProvisionedProductProperties({
  "ProvisionedProductId": null,
  "ProvisionedProductProperties": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * ProvisionedProductId **required**
  * ProvisionedProductProperties **required**

#### Output
* output [UpdateProvisionedProductPropertiesOutput](#updateprovisionedproductpropertiesoutput)

### UpdateProvisioningArtifact



```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({
  "ProductId": null,
  "ProvisioningArtifactId": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Active
  * Description
  * Guidance
  * Name
  * ProductId **required**
  * ProvisioningArtifactId **required**

#### Output
* output [UpdateProvisioningArtifactOutput](#updateprovisioningartifactoutput)

### UpdateServiceAction



```js
amazonaws_servicecatalog.UpdateServiceAction({
  "Id": null
}, context)
```

#### Input
* input `object`
  * AcceptLanguage
  * Definition
  * Description
  * Id **required**
  * Name

#### Output
* output [UpdateServiceActionOutput](#updateserviceactionoutput)

### UpdateTagOption



```js
amazonaws_servicecatalog.UpdateTagOption({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Active
  * Id **required**
  * Value

#### Output
* output [UpdateTagOptionOutput](#updatetagoptionoutput)



## Definitions

### AcceptLanguage
* AcceptLanguage `string`

### AcceptPortfolioShareInput
* AcceptPortfolioShareInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PortfolioShareType

### AcceptPortfolioShareOutput
* AcceptPortfolioShareOutput `object`

### AccessLevelFilter
* AccessLevelFilter `object`: The access level to use to filter results.
  * Key
  * Value

### AccessLevelFilterKey
* AccessLevelFilterKey `string` (values: Account, Role, User)

### AccessLevelFilterValue
* AccessLevelFilterValue `string`

### AccessStatus
* AccessStatus `string` (values: ENABLED, UNDER_CHANGE, DISABLED)

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

### AssociateBudgetWithResourceInput
* AssociateBudgetWithResourceInput `object`
  * BudgetName **required**
  * ResourceId **required**

### AssociateBudgetWithResourceOutput
* AssociateBudgetWithResourceOutput `object`

### AssociatePrincipalWithPortfolioInput
* AssociatePrincipalWithPortfolioInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PrincipalARN **required**
  * PrincipalType **required**

### AssociatePrincipalWithPortfolioOutput
* AssociatePrincipalWithPortfolioOutput `object`

### AssociateProductWithPortfolioInput
* AssociateProductWithPortfolioInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * ProductId **required**
  * SourcePortfolioId

### AssociateProductWithPortfolioOutput
* AssociateProductWithPortfolioOutput `object`

### AssociateServiceActionWithProvisioningArtifactInput
* AssociateServiceActionWithProvisioningArtifactInput `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ServiceActionId **required**

### AssociateServiceActionWithProvisioningArtifactOutput
* AssociateServiceActionWithProvisioningArtifactOutput `object`

### AssociateTagOptionWithResourceInput
* AssociateTagOptionWithResourceInput `object`
  * ResourceId **required**
  * TagOptionId **required**

### AssociateTagOptionWithResourceOutput
* AssociateTagOptionWithResourceOutput `object`

### AttributeValue
* AttributeValue `string`

### BatchAssociateServiceActionWithProvisioningArtifactInput
* BatchAssociateServiceActionWithProvisioningArtifactInput `object`
  * AcceptLanguage
  * ServiceActionAssociations **required**
    * items [ServiceActionAssociation](#serviceactionassociation)

### BatchAssociateServiceActionWithProvisioningArtifactOutput
* BatchAssociateServiceActionWithProvisioningArtifactOutput `object`
  * FailedServiceActionAssociations
    * items [FailedServiceActionAssociation](#failedserviceactionassociation)

### BatchDisassociateServiceActionFromProvisioningArtifactInput
* BatchDisassociateServiceActionFromProvisioningArtifactInput `object`
  * AcceptLanguage
  * ServiceActionAssociations **required**
    * items [ServiceActionAssociation](#serviceactionassociation)

### BatchDisassociateServiceActionFromProvisioningArtifactOutput
* BatchDisassociateServiceActionFromProvisioningArtifactOutput `object`
  * FailedServiceActionAssociations
    * items [FailedServiceActionAssociation](#failedserviceactionassociation)

### Boolean
* Boolean `boolean`

### BudgetDetail
* BudgetDetail `object`: Information about a budget.
  * BudgetName

### BudgetName
* BudgetName `string`

### Budgets
* Budgets `array`
  * items [BudgetDetail](#budgetdetail)

### CausingEntity
* CausingEntity `string`

### ChangeAction
* ChangeAction `string` (values: ADD, MODIFY, REMOVE)

### CloudWatchDashboard
* CloudWatchDashboard `object`: Information about a CloudWatch dashboard.
  * Name

### CloudWatchDashboardName
* CloudWatchDashboardName `string`

### CloudWatchDashboards
* CloudWatchDashboards `array`
  * items [CloudWatchDashboard](#cloudwatchdashboard)

### ConstraintDescription
* ConstraintDescription `string`

### ConstraintDetail
* ConstraintDetail `object`: Information about a constraint.
  * ConstraintId
  * Description
  * Owner
  * PortfolioId
  * ProductId
  * Type

### ConstraintDetails
* ConstraintDetails `array`
  * items [ConstraintDetail](#constraintdetail)

### ConstraintParameters
* ConstraintParameters `string`

### ConstraintSummaries
* ConstraintSummaries `array`
  * items [ConstraintSummary](#constraintsummary)

### ConstraintSummary
* ConstraintSummary `object`: Summary information about a constraint.
  * Description
  * Type

### ConstraintType
* ConstraintType `string`

### CopyOption
* CopyOption `string` (values: CopyTags)

### CopyOptions
* CopyOptions `array`
  * items [CopyOption](#copyoption)

### CopyProductInput
* CopyProductInput `object`
  * AcceptLanguage
  * CopyOptions
    * items [CopyOption](#copyoption)
  * IdempotencyToken **required**
  * SourceProductArn **required**
  * SourceProvisioningArtifactIdentifiers
    * items [SourceProvisioningArtifactPropertiesMap](#sourceprovisioningartifactpropertiesmap)
  * TargetProductId
  * TargetProductName

### CopyProductOutput
* CopyProductOutput `object`
  * CopyProductToken

### CopyProductStatus
* CopyProductStatus `string` (values: SUCCEEDED, IN_PROGRESS, FAILED)

### CreateConstraintInput
* CreateConstraintInput `object`
  * AcceptLanguage
  * Description
  * IdempotencyToken **required**
  * Parameters **required**
  * PortfolioId **required**
  * ProductId **required**
  * Type **required**

### CreateConstraintOutput
* CreateConstraintOutput `object`
  * ConstraintDetail
    * ConstraintId
    * Description
    * Owner
    * PortfolioId
    * ProductId
    * Type
  * ConstraintParameters
  * Status

### CreatePortfolioInput
* CreatePortfolioInput `object`
  * AcceptLanguage
  * Description
  * DisplayName **required**
  * IdempotencyToken **required**
  * ProviderName **required**
  * Tags
    * items [Tag](#tag)

### CreatePortfolioOutput
* CreatePortfolioOutput `object`
  * PortfolioDetail
    * ARN
    * CreatedTime
    * Description
    * DisplayName
    * Id
    * ProviderName
  * Tags
    * items [Tag](#tag)

### CreatePortfolioShareInput
* CreatePortfolioShareInput `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode
    * Type
    * Value
  * PortfolioId **required**
  * ShareTagOptions

### CreatePortfolioShareOutput
* CreatePortfolioShareOutput `object`
  * PortfolioShareToken

### CreateProductInput
* CreateProductInput `object`
  * AcceptLanguage
  * Description
  * Distributor
  * IdempotencyToken **required**
  * Name **required**
  * Owner **required**
  * ProductType **required**
  * ProvisioningArtifactParameters **required**
    * Description
    * DisableTemplateValidation
    * Info **required**
    * Name
    * Type
  * SupportDescription
  * SupportEmail
  * SupportUrl
  * Tags
    * items [Tag](#tag)

### CreateProductOutput
* CreateProductOutput `object`
  * ProductViewDetail
    * CreatedTime
    * ProductARN
    * ProductViewSummary
      * Distributor
      * HasDefaultPath
      * Id
      * Name
      * Owner
      * ProductId
      * ShortDescription
      * SupportDescription
      * SupportEmail
      * SupportUrl
      * Type
    * Status
  * ProvisioningArtifactDetail
    * Active
    * CreatedTime
    * Description
    * Guidance
    * Id
    * Name
    * Type
  * Tags
    * items [Tag](#tag)

### CreateProvisionedProductPlanInput
* CreateProvisionedProductPlanInput `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * NotificationArns
    * items [NotificationArn](#notificationarn)
  * PathId
  * PlanName **required**
  * PlanType **required**
  * ProductId **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId **required**
  * ProvisioningParameters
    * items [UpdateProvisioningParameter](#updateprovisioningparameter)
  * Tags
    * items [Tag](#tag)

### CreateProvisionedProductPlanOutput
* CreateProvisionedProductPlanOutput `object`
  * PlanId
  * PlanName
  * ProvisionProductId
  * ProvisionedProductName
  * ProvisioningArtifactId

### CreateProvisioningArtifactInput
* CreateProvisioningArtifactInput `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * Parameters **required**
    * Description
    * DisableTemplateValidation
    * Info **required**
    * Name
    * Type
  * ProductId **required**

### CreateProvisioningArtifactOutput
* CreateProvisioningArtifactOutput `object`
  * Info
  * ProvisioningArtifactDetail
    * Active
    * CreatedTime
    * Description
    * Guidance
    * Id
    * Name
    * Type
  * Status

### CreateServiceActionInput
* CreateServiceActionInput `object`
  * AcceptLanguage
  * Definition **required**
  * DefinitionType **required**
  * Description
  * IdempotencyToken **required**
  * Name **required**

### CreateServiceActionOutput
* CreateServiceActionOutput `object`
  * ServiceActionDetail
    * Definition
    * ServiceActionSummary
      * DefinitionType
      * Description
      * Id
      * Name

### CreateTagOptionInput
* CreateTagOptionInput `object`
  * Key **required**
  * Value **required**

### CreateTagOptionOutput
* CreateTagOptionOutput `object`
  * TagOptionDetail
    * Active
    * Id
    * Key
    * Owner
    * Value

### CreatedTime
* CreatedTime `string`

### CreationTime
* CreationTime `string`

### DefaultValue
* DefaultValue `string`

### DeleteConstraintInput
* DeleteConstraintInput `object`
  * AcceptLanguage
  * Id **required**

### DeleteConstraintOutput
* DeleteConstraintOutput `object`

### DeletePortfolioInput
* DeletePortfolioInput `object`
  * AcceptLanguage
  * Id **required**

### DeletePortfolioOutput
* DeletePortfolioOutput `object`

### DeletePortfolioShareInput
* DeletePortfolioShareInput `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode
    * Type
    * Value
  * PortfolioId **required**

### DeletePortfolioShareOutput
* DeletePortfolioShareOutput `object`
  * PortfolioShareToken

### DeleteProductInput
* DeleteProductInput `object`
  * AcceptLanguage
  * Id **required**

### DeleteProductOutput
* DeleteProductOutput `object`

### DeleteProvisionedProductPlanInput
* DeleteProvisionedProductPlanInput `object`
  * AcceptLanguage
  * IgnoreErrors
  * PlanId **required**

### DeleteProvisionedProductPlanOutput
* DeleteProvisionedProductPlanOutput `object`

### DeleteProvisioningArtifactInput
* DeleteProvisioningArtifactInput `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**

### DeleteProvisioningArtifactOutput
* DeleteProvisioningArtifactOutput `object`

### DeleteServiceActionInput
* DeleteServiceActionInput `object`
  * AcceptLanguage
  * Id **required**

### DeleteServiceActionOutput
* DeleteServiceActionOutput `object`

### DeleteTagOptionInput
* DeleteTagOptionInput `object`
  * Id **required**

### DeleteTagOptionOutput
* DeleteTagOptionOutput `object`

### DescribeConstraintInput
* DescribeConstraintInput `object`
  * AcceptLanguage
  * Id **required**

### DescribeConstraintOutput
* DescribeConstraintOutput `object`
  * ConstraintDetail
    * ConstraintId
    * Description
    * Owner
    * PortfolioId
    * ProductId
    * Type
  * ConstraintParameters
  * Status

### DescribeCopyProductStatusInput
* DescribeCopyProductStatusInput `object`
  * AcceptLanguage
  * CopyProductToken **required**

### DescribeCopyProductStatusOutput
* DescribeCopyProductStatusOutput `object`
  * CopyProductStatus
  * StatusDetail
  * TargetProductId

### DescribePortfolioInput
* DescribePortfolioInput `object`
  * AcceptLanguage
  * Id **required**

### DescribePortfolioOutput
* DescribePortfolioOutput `object`
  * Budgets
    * items [BudgetDetail](#budgetdetail)
  * PortfolioDetail
    * ARN
    * CreatedTime
    * Description
    * DisplayName
    * Id
    * ProviderName
  * TagOptions
    * items [TagOptionDetail](#tagoptiondetail)
  * Tags
    * items [Tag](#tag)

### DescribePortfolioShareStatusInput
* DescribePortfolioShareStatusInput `object`
  * PortfolioShareToken **required**

### DescribePortfolioShareStatusOutput
* DescribePortfolioShareStatusOutput `object`
  * OrganizationNodeValue
  * PortfolioId
  * PortfolioShareToken
  * ShareDetails
    * ShareErrors
      * items [ShareError](#shareerror)
    * SuccessfulShares
      * items [AccountId](#accountid)
  * Status

### DescribePortfolioShareType
* DescribePortfolioShareType `string` (values: ACCOUNT, ORGANIZATION, ORGANIZATIONAL_UNIT, ORGANIZATION_MEMBER_ACCOUNT)

### DescribePortfolioSharesInput
* DescribePortfolioSharesInput `object`
  * PageSize
  * PageToken
  * PortfolioId **required**
  * Type **required**

### DescribePortfolioSharesOutput
* DescribePortfolioSharesOutput `object`
  * NextPageToken
  * PortfolioShareDetails
    * items [PortfolioShareDetail](#portfoliosharedetail)

### DescribeProductAsAdminInput
* DescribeProductAsAdminInput `object`
  * AcceptLanguage
  * Id
  * Name
  * SourcePortfolioId

### DescribeProductAsAdminOutput
* DescribeProductAsAdminOutput `object`
  * Budgets
    * items [BudgetDetail](#budgetdetail)
  * ProductViewDetail
    * CreatedTime
    * ProductARN
    * ProductViewSummary
      * Distributor
      * HasDefaultPath
      * Id
      * Name
      * Owner
      * ProductId
      * ShortDescription
      * SupportDescription
      * SupportEmail
      * SupportUrl
      * Type
    * Status
  * ProvisioningArtifactSummaries
    * items [ProvisioningArtifactSummary](#provisioningartifactsummary)
  * TagOptions
    * items [TagOptionDetail](#tagoptiondetail)
  * Tags
    * items [Tag](#tag)

### DescribeProductInput
* DescribeProductInput `object`
  * AcceptLanguage
  * Id
  * Name

### DescribeProductOutput
* DescribeProductOutput `object`
  * Budgets
    * items [BudgetDetail](#budgetdetail)
  * LaunchPaths
    * items [LaunchPath](#launchpath)
  * ProductViewSummary
    * Distributor
    * HasDefaultPath
    * Id
    * Name
    * Owner
    * ProductId
    * ShortDescription
    * SupportDescription
    * SupportEmail
    * SupportUrl
    * Type
  * ProvisioningArtifacts
    * items [ProvisioningArtifact](#provisioningartifact)

### DescribeProductViewInput
* DescribeProductViewInput `object`
  * AcceptLanguage
  * Id **required**

### DescribeProductViewOutput
* DescribeProductViewOutput `object`
  * ProductViewSummary
    * Distributor
    * HasDefaultPath
    * Id
    * Name
    * Owner
    * ProductId
    * ShortDescription
    * SupportDescription
    * SupportEmail
    * SupportUrl
    * Type
  * ProvisioningArtifacts
    * items [ProvisioningArtifact](#provisioningartifact)

### DescribeProvisionedProductInput
* DescribeProvisionedProductInput `object`: DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.
  * AcceptLanguage
  * Id
  * Name

### DescribeProvisionedProductOutput
* DescribeProvisionedProductOutput `object`
  * CloudWatchDashboards
    * items [CloudWatchDashboard](#cloudwatchdashboard)
  * ProvisionedProductDetail
    * Arn
    * CreatedTime
    * Id
    * IdempotencyToken
    * LastProvisioningRecordId
    * LastRecordId
    * LastSuccessfulProvisioningRecordId
    * LaunchRoleArn
    * Name
    * ProductId
    * ProvisioningArtifactId
    * Status
    * StatusMessage
    * Type

### DescribeProvisionedProductPlanInput
* DescribeProvisionedProductPlanInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PlanId **required**

### DescribeProvisionedProductPlanOutput
* DescribeProvisionedProductPlanOutput `object`
  * NextPageToken
  * ProvisionedProductPlanDetails
    * CreatedTime
    * NotificationArns
      * items [NotificationArn](#notificationarn)
    * PathId
    * PlanId
    * PlanName
    * PlanType
    * ProductId
    * ProvisionProductId
    * ProvisionProductName
    * ProvisioningArtifactId
    * ProvisioningParameters
      * items [UpdateProvisioningParameter](#updateprovisioningparameter)
    * Status
    * StatusMessage
    * Tags
      * items [Tag](#tag)
    * UpdatedTime
  * ResourceChanges
    * items [ResourceChange](#resourcechange)

### DescribeProvisioningArtifactInput
* DescribeProvisioningArtifactInput `object`
  * AcceptLanguage
  * ProductId
  * ProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * Verbose

### DescribeProvisioningArtifactOutput
* DescribeProvisioningArtifactOutput `object`
  * Info
  * ProvisioningArtifactDetail
    * Active
    * CreatedTime
    * Description
    * Guidance
    * Id
    * Name
    * Type
  * Status

### DescribeProvisioningParametersInput
* DescribeProvisioningParametersInput `object`
  * AcceptLanguage
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName

### DescribeProvisioningParametersOutput
* DescribeProvisioningParametersOutput `object`
  * ConstraintSummaries
    * items [ConstraintSummary](#constraintsummary)
  * ProvisioningArtifactOutputs
    * items [ProvisioningArtifactOutput](#provisioningartifactoutput)
  * ProvisioningArtifactParameters
    * items [ProvisioningArtifactParameter](#provisioningartifactparameter)
  * ProvisioningArtifactPreferences
    * StackSetAccounts
      * items [AccountId](#accountid)
    * StackSetRegions
      * items [Region](#region)
  * TagOptions
    * items [TagOptionSummary](#tagoptionsummary)
  * UsageInstructions
    * items [UsageInstruction](#usageinstruction)

### DescribeRecordInput
* DescribeRecordInput `object`
  * AcceptLanguage
  * Id **required**
  * PageSize
  * PageToken

### DescribeRecordOutput
* DescribeRecordOutput `object`
  * NextPageToken
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime
  * RecordOutputs
    * items [RecordOutput](#recordoutput)

### DescribeServiceActionExecutionParametersInput
* DescribeServiceActionExecutionParametersInput `object`
  * AcceptLanguage
  * ProvisionedProductId **required**
  * ServiceActionId **required**

### DescribeServiceActionExecutionParametersOutput
* DescribeServiceActionExecutionParametersOutput `object`
  * ServiceActionParameters
    * items [ExecutionParameter](#executionparameter)

### DescribeServiceActionInput
* DescribeServiceActionInput `object`
  * AcceptLanguage
  * Id **required**

### DescribeServiceActionOutput
* DescribeServiceActionOutput `object`
  * ServiceActionDetail
    * Definition
    * ServiceActionSummary
      * DefinitionType
      * Description
      * Id
      * Name

### DescribeTagOptionInput
* DescribeTagOptionInput `object`
  * Id **required**

### DescribeTagOptionOutput
* DescribeTagOptionOutput `object`
  * TagOptionDetail
    * Active
    * Id
    * Key
    * Owner
    * Value

### Description
* Description `string`

### DisableAWSOrganizationsAccessInput
* DisableAWSOrganizationsAccessInput `object`

### DisableAWSOrganizationsAccessOutput
* DisableAWSOrganizationsAccessOutput `object`

### DisableTemplateValidation
* DisableTemplateValidation `boolean`

### DisassociateBudgetFromResourceInput
* DisassociateBudgetFromResourceInput `object`
  * BudgetName **required**
  * ResourceId **required**

### DisassociateBudgetFromResourceOutput
* DisassociateBudgetFromResourceOutput `object`

### DisassociatePrincipalFromPortfolioInput
* DisassociatePrincipalFromPortfolioInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PrincipalARN **required**

### DisassociatePrincipalFromPortfolioOutput
* DisassociatePrincipalFromPortfolioOutput `object`

### DisassociateProductFromPortfolioInput
* DisassociateProductFromPortfolioInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * ProductId **required**

### DisassociateProductFromPortfolioOutput
* DisassociateProductFromPortfolioOutput `object`

### DisassociateServiceActionFromProvisioningArtifactInput
* DisassociateServiceActionFromProvisioningArtifactInput `object`
  * AcceptLanguage
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ServiceActionId **required**

### DisassociateServiceActionFromProvisioningArtifactOutput
* DisassociateServiceActionFromProvisioningArtifactOutput `object`

### DisassociateTagOptionFromResourceInput
* DisassociateTagOptionFromResourceInput `object`
  * ResourceId **required**
  * TagOptionId **required**

### DisassociateTagOptionFromResourceOutput
* DisassociateTagOptionFromResourceOutput `object`

### DuplicateResourceException


### EnableAWSOrganizationsAccessInput
* EnableAWSOrganizationsAccessInput `object`

### EnableAWSOrganizationsAccessOutput
* EnableAWSOrganizationsAccessOutput `object`

### Error
* Error `string`

### ErrorCode
* ErrorCode `string`

### ErrorDescription
* ErrorDescription `string`

### EvaluationType
* EvaluationType `string` (values: STATIC, DYNAMIC)

### ExecuteProvisionedProductPlanInput
* ExecuteProvisionedProductPlanInput `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * PlanId **required**

### ExecuteProvisionedProductPlanOutput
* ExecuteProvisionedProductPlanOutput `object`
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime

### ExecuteProvisionedProductServiceActionInput
* ExecuteProvisionedProductServiceActionInput `object`
  * AcceptLanguage
  * ExecuteToken **required**
  * Parameters
  * ProvisionedProductId **required**
  * ServiceActionId **required**

### ExecuteProvisionedProductServiceActionOutput
* ExecuteProvisionedProductServiceActionOutput `object`
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime

### ExecutionParameter
* ExecutionParameter `object`: Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.
  * DefaultValues
    * items [ExecutionParameterValue](#executionparametervalue)
  * Name
  * Type

### ExecutionParameterKey
* ExecutionParameterKey `string`

### ExecutionParameterMap
* ExecutionParameterMap `object`

### ExecutionParameterType
* ExecutionParameterType `string`

### ExecutionParameterValue
* ExecutionParameterValue `string`

### ExecutionParameterValueList
* ExecutionParameterValueList `array`
  * items [ExecutionParameterValue](#executionparametervalue)

### ExecutionParameters
* ExecutionParameters `array`
  * items [ExecutionParameter](#executionparameter)

### FailedServiceActionAssociation
* FailedServiceActionAssociation `object`: An object containing information about the error, along with identifying information about the self-service action and its associations.
  * ErrorCode
  * ErrorMessage
  * ProductId
  * ProvisioningArtifactId
  * ServiceActionId

### FailedServiceActionAssociations
* FailedServiceActionAssociations `array`
  * items [FailedServiceActionAssociation](#failedserviceactionassociation)

### GetAWSOrganizationsAccessStatusInput
* GetAWSOrganizationsAccessStatusInput `object`

### GetAWSOrganizationsAccessStatusOutput
* GetAWSOrganizationsAccessStatusOutput `object`
  * AccessStatus

### GetProvisionedProductOutputsInput
* GetProvisionedProductOutputsInput `object`
  * AcceptLanguage
  * OutputKeys
    * items [OutputKey](#outputkey)
  * PageSize
  * PageToken
  * ProvisionedProductId
  * ProvisionedProductName

### GetProvisionedProductOutputsOutput
* GetProvisionedProductOutputsOutput `object`
  * NextPageToken
  * Outputs
    * items [RecordOutput](#recordoutput)

### HasDefaultPath
* HasDefaultPath `boolean`

### Id
* Id `string`

### IdempotencyToken
* IdempotencyToken `string`

### IgnoreErrors
* IgnoreErrors `boolean`

### ImportAsProvisionedProductInput
* ImportAsProvisionedProductInput `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * PhysicalId **required**
  * ProductId **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId **required**

### ImportAsProvisionedProductOutput
* ImportAsProvisionedProductOutput `object`
  * RecordDetail [RecordDetail](#recorddetail)

### InstructionType
* InstructionType `string`

### InstructionValue
* InstructionValue `string`

### InvalidParametersException


### InvalidStateException


### LastRequestId
* LastRequestId `string`

### LaunchPath
* LaunchPath `object`: A launch path object.
  * Id
  * Name

### LaunchPathSummaries
* LaunchPathSummaries `array`
  * items [LaunchPathSummary](#launchpathsummary)

### LaunchPathSummary
* LaunchPathSummary `object`: Summary information about a product path for a user.
  * ConstraintSummaries
    * items [ConstraintSummary](#constraintsummary)
  * Id
  * Name
  * Tags
    * items [Tag](#tag)

### LaunchPaths
* LaunchPaths `array`
  * items [LaunchPath](#launchpath)

### LimitExceededException


### ListAcceptedPortfolioSharesInput
* ListAcceptedPortfolioSharesInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioShareType

### ListAcceptedPortfolioSharesOutput
* ListAcceptedPortfolioSharesOutput `object`
  * NextPageToken
  * PortfolioDetails
    * items [PortfolioDetail](#portfoliodetail)

### ListBudgetsForResourceInput
* ListBudgetsForResourceInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ResourceId **required**

### ListBudgetsForResourceOutput
* ListBudgetsForResourceOutput `object`
  * Budgets
    * items [BudgetDetail](#budgetdetail)
  * NextPageToken

### ListConstraintsForPortfolioInput
* ListConstraintsForPortfolioInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioId **required**
  * ProductId

### ListConstraintsForPortfolioOutput
* ListConstraintsForPortfolioOutput `object`
  * ConstraintDetails
    * items [ConstraintDetail](#constraintdetail)
  * NextPageToken

### ListLaunchPathsInput
* ListLaunchPathsInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**

### ListLaunchPathsOutput
* ListLaunchPathsOutput `object`
  * LaunchPathSummaries
    * items [LaunchPathSummary](#launchpathsummary)
  * NextPageToken

### ListOrganizationPortfolioAccessInput
* ListOrganizationPortfolioAccessInput `object`
  * AcceptLanguage
  * OrganizationNodeType **required**
  * PageSize
  * PageToken
  * PortfolioId **required**

### ListOrganizationPortfolioAccessOutput
* ListOrganizationPortfolioAccessOutput `object`
  * NextPageToken
  * OrganizationNodes
    * items [OrganizationNode](#organizationnode)

### ListPortfolioAccessInput
* ListPortfolioAccessInput `object`
  * AcceptLanguage
  * OrganizationParentId
  * PageSize
  * PageToken
  * PortfolioId **required**

### ListPortfolioAccessOutput
* ListPortfolioAccessOutput `object`
  * AccountIds
    * items [AccountId](#accountid)
  * NextPageToken

### ListPortfoliosForProductInput
* ListPortfoliosForProductInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**

### ListPortfoliosForProductOutput
* ListPortfoliosForProductOutput `object`
  * NextPageToken
  * PortfolioDetails
    * items [PortfolioDetail](#portfoliodetail)

### ListPortfoliosInput
* ListPortfoliosInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken

### ListPortfoliosOutput
* ListPortfoliosOutput `object`
  * NextPageToken
  * PortfolioDetails
    * items [PortfolioDetail](#portfoliodetail)

### ListPrincipalsForPortfolioInput
* ListPrincipalsForPortfolioInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * PortfolioId **required**

### ListPrincipalsForPortfolioOutput
* ListPrincipalsForPortfolioOutput `object`
  * NextPageToken
  * Principals
    * items [Principal](#principal)

### ListProvisionedProductPlansInput
* ListProvisionedProductPlansInput `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken
  * ProvisionProductId

### ListProvisionedProductPlansOutput
* ListProvisionedProductPlansOutput `object`
  * NextPageToken
  * ProvisionedProductPlans
    * items [ProvisionedProductPlanSummary](#provisionedproductplansummary)

### ListProvisioningArtifactsForServiceActionInput
* ListProvisioningArtifactsForServiceActionInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ServiceActionId **required**

### ListProvisioningArtifactsForServiceActionOutput
* ListProvisioningArtifactsForServiceActionOutput `object`
  * NextPageToken
  * ProvisioningArtifactViews
    * items [ProvisioningArtifactView](#provisioningartifactview)

### ListProvisioningArtifactsInput
* ListProvisioningArtifactsInput `object`
  * AcceptLanguage
  * ProductId **required**

### ListProvisioningArtifactsOutput
* ListProvisioningArtifactsOutput `object`
  * NextPageToken
  * ProvisioningArtifactDetails
    * items [ProvisioningArtifactDetail](#provisioningartifactdetail)

### ListRecordHistoryInput
* ListRecordHistoryInput `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken
  * SearchFilter
    * Key
    * Value

### ListRecordHistoryOutput
* ListRecordHistoryOutput `object`
  * NextPageToken
  * RecordDetails
    * items [RecordDetail](#recorddetail)

### ListRecordHistorySearchFilter
* ListRecordHistorySearchFilter `object`: The search filter to use when listing history records.
  * Key
  * Value

### ListResourcesForTagOptionInput
* ListResourcesForTagOptionInput `object`
  * PageSize
  * PageToken
  * ResourceType
  * TagOptionId **required**

### ListResourcesForTagOptionOutput
* ListResourcesForTagOptionOutput `object`
  * PageToken
  * ResourceDetails
    * items [ResourceDetail](#resourcedetail)

### ListServiceActionsForProvisioningArtifactInput
* ListServiceActionsForProvisioningArtifactInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProductId **required**
  * ProvisioningArtifactId **required**

### ListServiceActionsForProvisioningArtifactOutput
* ListServiceActionsForProvisioningArtifactOutput `object`
  * NextPageToken
  * ServiceActionSummaries
    * items [ServiceActionSummary](#serviceactionsummary)

### ListServiceActionsInput
* ListServiceActionsInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken

### ListServiceActionsOutput
* ListServiceActionsOutput `object`
  * NextPageToken
  * ServiceActionSummaries
    * items [ServiceActionSummary](#serviceactionsummary)

### ListStackInstancesForProvisionedProductInput
* ListStackInstancesForProvisionedProductInput `object`
  * AcceptLanguage
  * PageSize
  * PageToken
  * ProvisionedProductId **required**

### ListStackInstancesForProvisionedProductOutput
* ListStackInstancesForProvisionedProductOutput `object`
  * NextPageToken
  * StackInstances
    * items [StackInstance](#stackinstance)

### ListTagOptionsFilters
* ListTagOptionsFilters `object`: Filters to use when listing TagOptions.
  * Active
  * Key
  * Value

### ListTagOptionsInput
* ListTagOptionsInput `object`
  * Filters
    * Active
    * Key
    * Value
  * PageSize
  * PageToken

### ListTagOptionsOutput
* ListTagOptionsOutput `object`
  * PageToken
  * TagOptionDetails
    * items [TagOptionDetail](#tagoptiondetail)

### LogicalResourceId
* LogicalResourceId `string`

### Message
* Message `string`

### Namespaces
* Namespaces `array`
  * items [AccountId](#accountid)

### NoEcho
* NoEcho `boolean`

### NotificationArn
* NotificationArn `string`

### NotificationArns
* NotificationArns `array`
  * items [NotificationArn](#notificationarn)

### NullableBoolean
* NullableBoolean `boolean`

### OperationNotSupportedException


### OrganizationNode
* OrganizationNode `object`: Information about the organization node.
  * Type
  * Value

### OrganizationNodeType
* OrganizationNodeType `string` (values: ORGANIZATION, ORGANIZATIONAL_UNIT, ACCOUNT)

### OrganizationNodeValue
* OrganizationNodeValue `string`

### OrganizationNodes
* OrganizationNodes `array`
  * items [OrganizationNode](#organizationnode)

### OutputDescription
* OutputDescription `string`

### OutputKey
* OutputKey `string`

### OutputKeys
* OutputKeys `array`
  * items [OutputKey](#outputkey)

### OutputValue
* OutputValue `string`

### Owner
* Owner `string`

### PageSize
* PageSize `integer`

### PageSizeMax100
* PageSizeMax100 `integer`

### PageToken
* PageToken `string`

### ParameterConstraints
* ParameterConstraints `object`: The constraints that the administrator has put on the parameter.
  * AllowedValues
    * items [AllowedValue](#allowedvalue)

### ParameterKey
* ParameterKey `string`

### ParameterType
* ParameterType `string`

### ParameterValue
* ParameterValue `string`

### PhysicalId
* PhysicalId `string`

### PhysicalResourceId
* PhysicalResourceId `string`

### PlanResourceType
* PlanResourceType `string`

### PortfolioDescription
* PortfolioDescription `string`

### PortfolioDetail
* PortfolioDetail `object`: Information about a portfolio.
  * ARN
  * CreatedTime
  * Description
  * DisplayName
  * Id
  * ProviderName

### PortfolioDetails
* PortfolioDetails `array`
  * items [PortfolioDetail](#portfoliodetail)

### PortfolioDisplayName
* PortfolioDisplayName `string`

### PortfolioName
* PortfolioName `string`

### PortfolioShareDetail
* PortfolioShareDetail `object`: Information about the portfolio share.
  * Accepted
  * PrincipalId
  * ShareTagOptions
  * Type

### PortfolioShareDetails
* PortfolioShareDetails `array`
  * items [PortfolioShareDetail](#portfoliosharedetail)

### PortfolioShareType
* PortfolioShareType `string` (values: IMPORTED, AWS_SERVICECATALOG, AWS_ORGANIZATIONS)

### Principal
* Principal `object`: Information about a principal.
  * PrincipalARN
  * PrincipalType

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
  * ApproximateCount
  * Value

### ProductViewAggregationValues
* ProductViewAggregationValues `array`
  * items [ProductViewAggregationValue](#productviewaggregationvalue)

### ProductViewAggregations
* ProductViewAggregations `object`

### ProductViewDetail
* ProductViewDetail `object`: Information about a product view.
  * CreatedTime
  * ProductARN
  * ProductViewSummary
    * Distributor
    * HasDefaultPath
    * Id
    * Name
    * Owner
    * ProductId
    * ShortDescription
    * SupportDescription
    * SupportEmail
    * SupportUrl
    * Type
  * Status

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
* ProductViewFilters `object`

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
* ProductViewSummary `object`: Summary information about a product view.
  * Distributor
  * HasDefaultPath
  * Id
  * Name
  * Owner
  * ProductId
  * ShortDescription
  * SupportDescription
  * SupportEmail
  * SupportUrl
  * Type

### PropertyKey
* PropertyKey `string` (values: OWNER, LAUNCH_ROLE)

### PropertyName
* PropertyName `string`

### PropertyValue
* PropertyValue `string`

### ProviderName
* ProviderName `string`

### ProvisionProductInput
* ProvisionProductInput `object`
  * AcceptLanguage
  * NotificationArns
    * items [NotificationArn](#notificationarn)
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisionToken **required**
  * ProvisionedProductName **required**
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * ProvisioningParameters
    * items [ProvisioningParameter](#provisioningparameter)
  * ProvisioningPreferences
    * StackSetAccounts
      * items [AccountId](#accountid)
    * StackSetFailureToleranceCount
    * StackSetFailureTolerancePercentage
    * StackSetMaxConcurrencyCount
    * StackSetMaxConcurrencyPercentage
    * StackSetRegions
      * items [Region](#region)
  * Tags
    * items [Tag](#tag)

### ProvisionProductOutput
* ProvisionProductOutput `object`
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime

### ProvisionedProductAttribute
* ProvisionedProductAttribute `object`: Information about a provisioned product.
  * Arn
  * CreatedTime
  * Id
  * IdempotencyToken
  * LastProvisioningRecordId
  * LastRecordId
  * LastSuccessfulProvisioningRecordId
  * Name
  * PhysicalId
  * ProductId
  * ProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * Status
  * StatusMessage
  * Tags
    * items [Tag](#tag)
  * Type
  * UserArn
  * UserArnSession

### ProvisionedProductAttributes
* ProvisionedProductAttributes `array`
  * items [ProvisionedProductAttribute](#provisionedproductattribute)

### ProvisionedProductDetail
* ProvisionedProductDetail `object`: Information about a provisioned product.
  * Arn
  * CreatedTime
  * Id
  * IdempotencyToken
  * LastProvisioningRecordId
  * LastRecordId
  * LastSuccessfulProvisioningRecordId
  * LaunchRoleArn
  * Name
  * ProductId
  * ProvisioningArtifactId
  * Status
  * StatusMessage
  * Type

### ProvisionedProductDetails
* ProvisionedProductDetails `array`
  * items [ProvisionedProductDetail](#provisionedproductdetail)

### ProvisionedProductFilters
* ProvisionedProductFilters `object`

### ProvisionedProductId
* ProvisionedProductId `string`

### ProvisionedProductName
* ProvisionedProductName `string`

### ProvisionedProductNameOrArn
* ProvisionedProductNameOrArn `string`

### ProvisionedProductPlanDetails
* ProvisionedProductPlanDetails `object`: Information about a plan.
  * CreatedTime
  * NotificationArns
    * items [NotificationArn](#notificationarn)
  * PathId
  * PlanId
  * PlanName
  * PlanType
  * ProductId
  * ProvisionProductId
  * ProvisionProductName
  * ProvisioningArtifactId
  * ProvisioningParameters
    * items [UpdateProvisioningParameter](#updateprovisioningparameter)
  * Status
  * StatusMessage
  * Tags
    * items [Tag](#tag)
  * UpdatedTime

### ProvisionedProductPlanName
* ProvisionedProductPlanName `string`

### ProvisionedProductPlanStatus
* ProvisionedProductPlanStatus `string` (values: CREATE_IN_PROGRESS, CREATE_SUCCESS, CREATE_FAILED, EXECUTE_IN_PROGRESS, EXECUTE_SUCCESS, EXECUTE_FAILED)

### ProvisionedProductPlanSummary
* ProvisionedProductPlanSummary `object`: Summary information about a plan.
  * PlanId
  * PlanName
  * PlanType
  * ProvisionProductId
  * ProvisionProductName
  * ProvisioningArtifactId

### ProvisionedProductPlanType
* ProvisionedProductPlanType `string` (values: CLOUDFORMATION)

### ProvisionedProductPlans
* ProvisionedProductPlans `array`
  * items [ProvisionedProductPlanSummary](#provisionedproductplansummary)

### ProvisionedProductProperties
* ProvisionedProductProperties `object`

### ProvisionedProductStatus
* ProvisionedProductStatus `string` (values: AVAILABLE, UNDER_CHANGE, TAINTED, ERROR, PLAN_IN_PROGRESS)

### ProvisionedProductStatusMessage
* ProvisionedProductStatusMessage `string`

### ProvisionedProductType
* ProvisionedProductType `string`

### ProvisionedProductViewFilterBy
* ProvisionedProductViewFilterBy `string` (values: SearchQuery)

### ProvisionedProductViewFilterValue
* ProvisionedProductViewFilterValue `string`

### ProvisionedProductViewFilterValues
* ProvisionedProductViewFilterValues `array`
  * items [ProvisionedProductViewFilterValue](#provisionedproductviewfiltervalue)

### ProvisioningArtifact
* ProvisioningArtifact `object`: Information about a provisioning artifact. A provisioning artifact is also known as a product version.
  * CreatedTime
  * Description
  * Guidance
  * Id
  * Name

### ProvisioningArtifactActive
* ProvisioningArtifactActive `boolean`

### ProvisioningArtifactCreatedTime
* ProvisioningArtifactCreatedTime `string`

### ProvisioningArtifactDescription
* ProvisioningArtifactDescription `string`

### ProvisioningArtifactDetail
* ProvisioningArtifactDetail `object`: Information about a provisioning artifact (also known as a version) for a product.
  * Active
  * CreatedTime
  * Description
  * Guidance
  * Id
  * Name
  * Type

### ProvisioningArtifactDetails
* ProvisioningArtifactDetails `array`
  * items [ProvisioningArtifactDetail](#provisioningartifactdetail)

### ProvisioningArtifactGuidance
* ProvisioningArtifactGuidance `string` (values: DEFAULT, DEPRECATED)

### ProvisioningArtifactInfo
* ProvisioningArtifactInfo `object`

### ProvisioningArtifactInfoKey
* ProvisioningArtifactInfoKey `string`

### ProvisioningArtifactInfoValue
* ProvisioningArtifactInfoValue `string`

### ProvisioningArtifactName
* ProvisioningArtifactName `string`

### ProvisioningArtifactOutput
* ProvisioningArtifactOutput `object`: Provisioning artifact output.
  * Description
  * Key

### ProvisioningArtifactOutputKey
* ProvisioningArtifactOutputKey `string`

### ProvisioningArtifactOutputs
* ProvisioningArtifactOutputs `array`
  * items [ProvisioningArtifactOutput](#provisioningartifactoutput)

### ProvisioningArtifactParameter
* ProvisioningArtifactParameter `object`: Information about a parameter used to provision a product.
  * DefaultValue
  * Description
  * IsNoEcho
  * ParameterConstraints
    * AllowedValues
      * items [AllowedValue](#allowedvalue)
  * ParameterKey
  * ParameterType

### ProvisioningArtifactParameters
* ProvisioningArtifactParameters `array`
  * items [ProvisioningArtifactParameter](#provisioningartifactparameter)

### ProvisioningArtifactPreferences
* ProvisioningArtifactPreferences `object`: <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
  * StackSetAccounts
    * items [AccountId](#accountid)
  * StackSetRegions
    * items [Region](#region)

### ProvisioningArtifactProperties
* ProvisioningArtifactProperties `object`: Information about a provisioning artifact (also known as a version) for a product.
  * Description
  * DisableTemplateValidation
  * Info **required**
  * Name
  * Type

### ProvisioningArtifactPropertyName
* ProvisioningArtifactPropertyName `string` (values: Id)

### ProvisioningArtifactPropertyValue
* ProvisioningArtifactPropertyValue `string`

### ProvisioningArtifactSummaries
* ProvisioningArtifactSummaries `array`
  * items [ProvisioningArtifactSummary](#provisioningartifactsummary)

### ProvisioningArtifactSummary
* ProvisioningArtifactSummary `object`: Summary information about a provisioning artifact (also known as a version) for a product.
  * CreatedTime
  * Description
  * Id
  * Name
  * ProvisioningArtifactMetadata

### ProvisioningArtifactType
* ProvisioningArtifactType `string` (values: CLOUD_FORMATION_TEMPLATE, MARKETPLACE_AMI, MARKETPLACE_CAR)

### ProvisioningArtifactView
* ProvisioningArtifactView `object`: An object that contains summary information about a product view and a provisioning artifact.
  * ProductViewSummary
    * Distributor
    * HasDefaultPath
    * Id
    * Name
    * Owner
    * ProductId
    * ShortDescription
    * SupportDescription
    * SupportEmail
    * SupportUrl
    * Type
  * ProvisioningArtifact
    * CreatedTime
    * Description
    * Guidance
    * Id
    * Name

### ProvisioningArtifactViews
* ProvisioningArtifactViews `array`
  * items [ProvisioningArtifactView](#provisioningartifactview)

### ProvisioningArtifacts
* ProvisioningArtifacts `array`
  * items [ProvisioningArtifact](#provisioningartifact)

### ProvisioningParameter
* ProvisioningParameter `object`: Information about a parameter used to provision a product.
  * Key
  * Value

### ProvisioningParameters
* ProvisioningParameters `array`
  * items [ProvisioningParameter](#provisioningparameter)

### ProvisioningPreferences
* ProvisioningPreferences `object`: <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
  * StackSetAccounts
    * items [AccountId](#accountid)
  * StackSetFailureToleranceCount
  * StackSetFailureTolerancePercentage
  * StackSetMaxConcurrencyCount
  * StackSetMaxConcurrencyPercentage
  * StackSetRegions
    * items [Region](#region)

### RecordDetail
* RecordDetail `object`: Information about a request operation.
  * CreatedTime
  * LaunchRoleArn
  * PathId
  * ProductId
  * ProvisionedProductId
  * ProvisionedProductName
  * ProvisionedProductType
  * ProvisioningArtifactId
  * RecordErrors
    * items [RecordError](#recorderror)
  * RecordId
  * RecordTags
    * items [RecordTag](#recordtag)
  * RecordType
  * Status
  * UpdatedTime

### RecordDetails
* RecordDetails `array`
  * items [RecordDetail](#recorddetail)

### RecordError
* RecordError `object`: The error code and description resulting from an operation.
  * Code
  * Description

### RecordErrors
* RecordErrors `array`
  * items [RecordError](#recorderror)

### RecordOutput
* RecordOutput `object`: The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
  * Description
  * OutputKey
  * OutputValue

### RecordOutputs
* RecordOutputs `array`
  * items [RecordOutput](#recordoutput)

### RecordStatus
* RecordStatus `string` (values: CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED)

### RecordTag
* RecordTag `object`: Information about a tag, which is a key-value pair.
  * Key
  * Value

### RecordTagKey
* RecordTagKey `string`

### RecordTagValue
* RecordTagValue `string`

### RecordTags
* RecordTags `array`
  * items [RecordTag](#recordtag)

### RecordType
* RecordType `string`

### Region
* Region `string`

### RejectPortfolioShareInput
* RejectPortfolioShareInput `object`
  * AcceptLanguage
  * PortfolioId **required**
  * PortfolioShareType

### RejectPortfolioShareOutput
* RejectPortfolioShareOutput `object`

### Replacement
* Replacement `string` (values: TRUE, FALSE, CONDITIONAL)

### RequiresRecreation
* RequiresRecreation `string` (values: NEVER, CONDITIONALLY, ALWAYS)

### ResourceARN
* ResourceARN `string`

### ResourceAttribute
* ResourceAttribute `string` (values: PROPERTIES, METADATA, CREATIONPOLICY, UPDATEPOLICY, DELETIONPOLICY, TAGS)

### ResourceChange
* ResourceChange `object`: Information about a resource change that will occur when a plan is executed.
  * Action
  * Details
    * items [ResourceChangeDetail](#resourcechangedetail)
  * LogicalResourceId
  * PhysicalResourceId
  * Replacement
  * ResourceType
  * Scope
    * items [ResourceAttribute](#resourceattribute)

### ResourceChangeDetail
* ResourceChangeDetail `object`: Information about a change to a resource attribute.
  * CausingEntity
  * Evaluation
  * Target
    * Attribute
    * Name
    * RequiresRecreation

### ResourceChangeDetails
* ResourceChangeDetails `array`
  * items [ResourceChangeDetail](#resourcechangedetail)

### ResourceChanges
* ResourceChanges `array`
  * items [ResourceChange](#resourcechange)

### ResourceDetail
* ResourceDetail `object`: Information about a resource.
  * ARN
  * CreatedTime
  * Description
  * Id
  * Name

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


### ResourceNotFoundException


### ResourceTargetDefinition
* ResourceTargetDefinition `object`: Information about a change to a resource attribute.
  * Attribute
  * Name
  * RequiresRecreation

### ResourceType
* ResourceType `string`

### RetainPhysicalResources
* RetainPhysicalResources `boolean`

### RoleArn
* RoleArn `string`

### ScanProvisionedProductsInput
* ScanProvisionedProductsInput `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * PageSize
  * PageToken

### ScanProvisionedProductsOutput
* ScanProvisionedProductsOutput `object`
  * NextPageToken
  * ProvisionedProducts
    * items [ProvisionedProductDetail](#provisionedproductdetail)

### Scope
* Scope `array`
  * items [ResourceAttribute](#resourceattribute)

### SearchFilterKey
* SearchFilterKey `string`

### SearchFilterValue
* SearchFilterValue `string`

### SearchProductsAsAdminInput
* SearchProductsAsAdminInput `object`
  * AcceptLanguage
  * Filters
  * PageSize
  * PageToken
  * PortfolioId
  * ProductSource
  * SortBy
  * SortOrder

### SearchProductsAsAdminOutput
* SearchProductsAsAdminOutput `object`
  * NextPageToken
  * ProductViewDetails
    * items [ProductViewDetail](#productviewdetail)

### SearchProductsInput
* SearchProductsInput `object`
  * AcceptLanguage
  * Filters
  * PageSize
  * PageToken
  * SortBy
  * SortOrder

### SearchProductsOutput
* SearchProductsOutput `object`
  * NextPageToken
  * ProductViewAggregations
  * ProductViewSummaries
    * items [ProductViewSummary](#productviewsummary)

### SearchProvisionedProductsInput
* SearchProvisionedProductsInput `object`
  * AcceptLanguage
  * AccessLevelFilter
    * Key
    * Value
  * Filters
  * PageSize
  * PageToken
  * SortBy
  * SortOrder

### SearchProvisionedProductsOutput
* SearchProvisionedProductsOutput `object`
  * NextPageToken
  * ProvisionedProducts
    * items [ProvisionedProductAttribute](#provisionedproductattribute)
  * TotalResultsCount

### SearchProvisionedProductsPageSize
* SearchProvisionedProductsPageSize `integer`

### ServiceActionAssociation
* ServiceActionAssociation `object`: A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ServiceActionId **required**

### ServiceActionAssociationErrorCode
* ServiceActionAssociationErrorCode `string` (values: DUPLICATE_RESOURCE, INTERNAL_FAILURE, LIMIT_EXCEEDED, RESOURCE_NOT_FOUND, THROTTLING)

### ServiceActionAssociationErrorMessage
* ServiceActionAssociationErrorMessage `string`

### ServiceActionAssociations
* ServiceActionAssociations `array`
  * items [ServiceActionAssociation](#serviceactionassociation)

### ServiceActionDefinitionKey
* ServiceActionDefinitionKey `string` (values: Name, Version, AssumeRole, Parameters)

### ServiceActionDefinitionMap
* ServiceActionDefinitionMap `object`

### ServiceActionDefinitionType
* ServiceActionDefinitionType `string` (values: SSM_AUTOMATION)

### ServiceActionDefinitionValue
* ServiceActionDefinitionValue `string`

### ServiceActionDescription
* ServiceActionDescription `string`

### ServiceActionDetail
* ServiceActionDetail `object`: An object containing detailed information about the self-service action.
  * Definition
  * ServiceActionSummary
    * DefinitionType
    * Description
    * Id
    * Name

### ServiceActionName
* ServiceActionName `string`

### ServiceActionSummaries
* ServiceActionSummaries `array`
  * items [ServiceActionSummary](#serviceactionsummary)

### ServiceActionSummary
* ServiceActionSummary `object`: Detailed information about the self-service action.
  * DefinitionType
  * Description
  * Id
  * Name

### ShareDetails
* ShareDetails `object`: Information about the portfolio share operation.
  * ShareErrors
    * items [ShareError](#shareerror)
  * SuccessfulShares
    * items [AccountId](#accountid)

### ShareError
* ShareError `object`: Errors that occurred during the portfolio share operation.
  * Accounts
    * items [AccountId](#accountid)
  * Error
  * Message

### ShareErrors
* ShareErrors `array`
  * items [ShareError](#shareerror)

### ShareStatus
* ShareStatus `string` (values: NOT_STARTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, ERROR)

### SortField
* SortField `string`

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### SourceProvisioningArtifactProperties
* SourceProvisioningArtifactProperties `array`
  * items [SourceProvisioningArtifactPropertiesMap](#sourceprovisioningartifactpropertiesmap)

### SourceProvisioningArtifactPropertiesMap
* SourceProvisioningArtifactPropertiesMap `object`

### StackInstance
* StackInstance `object`: An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. 
  * Account
  * Region
  * StackInstanceStatus

### StackInstanceStatus
* StackInstanceStatus `string` (values: CURRENT, OUTDATED, INOPERABLE)

### StackInstances
* StackInstances `array`
  * items [StackInstance](#stackinstance)

### StackSetAccounts
* StackSetAccounts `array`
  * items [AccountId](#accountid)

### StackSetFailureToleranceCount
* StackSetFailureToleranceCount `integer`

### StackSetFailureTolerancePercentage
* StackSetFailureTolerancePercentage `integer`

### StackSetMaxConcurrencyCount
* StackSetMaxConcurrencyCount `integer`

### StackSetMaxConcurrencyPercentage
* StackSetMaxConcurrencyPercentage `integer`

### StackSetOperationType
* StackSetOperationType `string` (values: CREATE, UPDATE, DELETE)

### StackSetRegions
* StackSetRegions `array`
  * items [Region](#region)

### Status
* Status `string` (values: AVAILABLE, CREATING, FAILED)

### StatusDetail
* StatusDetail `string`

### StatusMessage
* StatusMessage `string`

### SuccessfulShares
* SuccessfulShares `array`
  * items [AccountId](#accountid)

### SupportDescription
* SupportDescription `string`

### SupportEmail
* SupportEmail `string`

### SupportUrl
* SupportUrl `string`

### Tag
* Tag `object`: Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagOptionActive
* TagOptionActive `boolean`

### TagOptionDetail
* TagOptionDetail `object`: Information about a TagOption.
  * Active
  * Id
  * Key
  * Owner
  * Value

### TagOptionDetails
* TagOptionDetails `array`
  * items [TagOptionDetail](#tagoptiondetail)

### TagOptionId
* TagOptionId `string`

### TagOptionKey
* TagOptionKey `string`

### TagOptionNotMigratedException


### TagOptionSummaries
* TagOptionSummaries `array`
  * items [TagOptionSummary](#tagoptionsummary)

### TagOptionSummary
* TagOptionSummary `object`: Summary information about a TagOption.
  * Key
  * Values
    * items [TagOptionValue](#tagoptionvalue)

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
  * AcceptLanguage
  * IgnoreErrors
  * ProvisionedProductId
  * ProvisionedProductName
  * RetainPhysicalResources
  * TerminateToken **required**

### TerminateProvisionedProductOutput
* TerminateProvisionedProductOutput `object`
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime

### TotalResultsCount
* TotalResultsCount `integer`

### UpdateConstraintInput
* UpdateConstraintInput `object`
  * AcceptLanguage
  * Description
  * Id **required**
  * Parameters

### UpdateConstraintOutput
* UpdateConstraintOutput `object`
  * ConstraintDetail
    * ConstraintId
    * Description
    * Owner
    * PortfolioId
    * ProductId
    * Type
  * ConstraintParameters
  * Status

### UpdatePortfolioInput
* UpdatePortfolioInput `object`
  * AcceptLanguage
  * AddTags
    * items [Tag](#tag)
  * Description
  * DisplayName
  * Id **required**
  * ProviderName
  * RemoveTags
    * items [TagKey](#tagkey)

### UpdatePortfolioOutput
* UpdatePortfolioOutput `object`
  * PortfolioDetail
    * ARN
    * CreatedTime
    * Description
    * DisplayName
    * Id
    * ProviderName
  * Tags
    * items [Tag](#tag)

### UpdatePortfolioShareInput
* UpdatePortfolioShareInput `object`
  * AcceptLanguage
  * AccountId
  * OrganizationNode [OrganizationNode](#organizationnode)
  * PortfolioId **required**
  * ShareTagOptions

### UpdatePortfolioShareOutput
* UpdatePortfolioShareOutput `object`
  * PortfolioShareToken
  * Status

### UpdateProductInput
* UpdateProductInput `object`
  * AcceptLanguage
  * AddTags
    * items [Tag](#tag)
  * Description
  * Distributor
  * Id **required**
  * Name
  * Owner
  * RemoveTags
    * items [TagKey](#tagkey)
  * SupportDescription
  * SupportEmail
  * SupportUrl

### UpdateProductOutput
* UpdateProductOutput `object`
  * ProductViewDetail
    * CreatedTime
    * ProductARN
    * ProductViewSummary
      * Distributor
      * HasDefaultPath
      * Id
      * Name
      * Owner
      * ProductId
      * ShortDescription
      * SupportDescription
      * SupportEmail
      * SupportUrl
      * Type
    * Status
  * Tags
    * items [Tag](#tag)

### UpdateProvisionedProductInput
* UpdateProvisionedProductInput `object`
  * AcceptLanguage
  * PathId
  * PathName
  * ProductId
  * ProductName
  * ProvisionedProductId
  * ProvisionedProductName
  * ProvisioningArtifactId
  * ProvisioningArtifactName
  * ProvisioningParameters
    * items [UpdateProvisioningParameter](#updateprovisioningparameter)
  * ProvisioningPreferences
    * StackSetAccounts
      * items [AccountId](#accountid)
    * StackSetFailureToleranceCount
    * StackSetFailureTolerancePercentage
    * StackSetMaxConcurrencyCount
    * StackSetMaxConcurrencyPercentage
    * StackSetOperationType
    * StackSetRegions
      * items [Region](#region)
  * Tags
    * items [Tag](#tag)
  * UpdateToken **required**

### UpdateProvisionedProductOutput
* UpdateProvisionedProductOutput `object`
  * RecordDetail
    * CreatedTime
    * LaunchRoleArn
    * PathId
    * ProductId
    * ProvisionedProductId
    * ProvisionedProductName
    * ProvisionedProductType
    * ProvisioningArtifactId
    * RecordErrors
      * items [RecordError](#recorderror)
    * RecordId
    * RecordTags
      * items [RecordTag](#recordtag)
    * RecordType
    * Status
    * UpdatedTime

### UpdateProvisionedProductPropertiesInput
* UpdateProvisionedProductPropertiesInput `object`
  * AcceptLanguage
  * IdempotencyToken **required**
  * ProvisionedProductId **required**
  * ProvisionedProductProperties **required**

### UpdateProvisionedProductPropertiesOutput
* UpdateProvisionedProductPropertiesOutput `object`
  * ProvisionedProductId
  * ProvisionedProductProperties
  * RecordId
  * Status

### UpdateProvisioningArtifactInput
* UpdateProvisioningArtifactInput `object`
  * AcceptLanguage
  * Active
  * Description
  * Guidance
  * Name
  * ProductId **required**
  * ProvisioningArtifactId **required**

### UpdateProvisioningArtifactOutput
* UpdateProvisioningArtifactOutput `object`
  * Info
  * ProvisioningArtifactDetail
    * Active
    * CreatedTime
    * Description
    * Guidance
    * Id
    * Name
    * Type
  * Status

### UpdateProvisioningParameter
* UpdateProvisioningParameter `object`: The parameter key-value pair used to update a provisioned product.
  * Key
  * UsePreviousValue
  * Value

### UpdateProvisioningParameters
* UpdateProvisioningParameters `array`
  * items [UpdateProvisioningParameter](#updateprovisioningparameter)

### UpdateProvisioningPreferences
* UpdateProvisioningPreferences `object`: The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
  * StackSetAccounts
    * items [AccountId](#accountid)
  * StackSetFailureToleranceCount
  * StackSetFailureTolerancePercentage
  * StackSetMaxConcurrencyCount
  * StackSetMaxConcurrencyPercentage
  * StackSetOperationType
  * StackSetRegions
    * items [Region](#region)

### UpdateServiceActionInput
* UpdateServiceActionInput `object`
  * AcceptLanguage
  * Definition
  * Description
  * Id **required**
  * Name

### UpdateServiceActionOutput
* UpdateServiceActionOutput `object`
  * ServiceActionDetail
    * Definition
    * ServiceActionSummary
      * DefinitionType
      * Description
      * Id
      * Name

### UpdateTagOptionInput
* UpdateTagOptionInput `object`
  * Active
  * Id **required**
  * Value

### UpdateTagOptionOutput
* UpdateTagOptionOutput `object`
  * TagOptionDetail
    * Active
    * Id
    * Key
    * Owner
    * Value

### UpdatedTime
* UpdatedTime `string`

### UsageInstruction
* UsageInstruction `object`: Additional information provided by the administrator.
  * Type
  * Value

### UsageInstructions
* UsageInstructions `array`
  * items [UsageInstruction](#usageinstruction)

### UsePreviousValue
* UsePreviousValue `boolean`

### UserArn
* UserArn `string`

### UserArnSession
* UserArnSession `string`

### Verbose
* Verbose `boolean`


