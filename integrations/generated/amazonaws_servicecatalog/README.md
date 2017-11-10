# @datafire/amazonaws_servicecatalog

Client library for AWS Service Catalog

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_servicecatalog
```

```js
let datafire = require('datafire');
let amazonaws_servicecatalog = require('@datafire/amazonaws_servicecatalog').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_servicecatalog.AcceptPortfolioShare({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Service Catalog</fullname> <p> <b>Overview</b> </p> <p> <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> allows organizations to create and manage catalogs of IT services that are approved for use on AWS. This documentation provides reference material for the AWS Service Catalog end user API. To get the most out of this documentation, be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p> <p> <i>Additional Resources</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">AWS Service Catalog Administrator Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/userguide/introduction.html">AWS Service Catalog User Guide</a> </p> </li> </ul>

## Actions
### AcceptPortfolioShare



```js
amazonaws_servicecatalog.AcceptPortfolioShare({
  "PortfolioId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**

### AssociatePrincipalWithPortfolio



```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({
  "PortfolioId": "",
  "PrincipalARN": "",
  "PrincipalType": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**
* PrincipalARN (string) **required**
* PrincipalType (string) **required**

### AssociateProductWithPortfolio



```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({
  "ProductId": "",
  "PortfolioId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**
* ProductId (string) **required**
* SourcePortfolioId (string)

### AssociateTagOptionWithResource



```js
amazonaws_servicecatalog.AssociateTagOptionWithResource({
  "ResourceId": "",
  "TagOptionId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagOptionId (string) **required**

### CopyProduct



```js
amazonaws_servicecatalog.CopyProduct({
  "SourceProductArn": "",
  "IdempotencyToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* CopyOptions (array)
* IdempotencyToken (string) **required**
* SourceProductArn (string) **required**
* SourceProvisioningArtifactIdentifiers (array)
* TargetProductId (string)
* TargetProductName (string)

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

#### Parameters
* AcceptLanguage (string)
* Description (string)
* IdempotencyToken (string) **required**
* Parameters (string) **required**
* PortfolioId (string) **required**
* ProductId (string) **required**
* Type (string) **required**

### CreatePortfolio



```js
amazonaws_servicecatalog.CreatePortfolio({
  "DisplayName": "",
  "ProviderName": "",
  "IdempotencyToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Description (string)
* DisplayName (string) **required**
* IdempotencyToken (string) **required**
* ProviderName (string) **required**
* Tags (array)

### CreatePortfolioShare



```js
amazonaws_servicecatalog.CreatePortfolioShare({
  "PortfolioId": "",
  "AccountId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* AccountId (string) **required**
* PortfolioId (string) **required**

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

#### Parameters
* AcceptLanguage (string)
* Description (string)
* Distributor (string)
* IdempotencyToken (string) **required**
* Name (string) **required**
* Owner (string) **required**
* ProductType (string) **required**
* ProvisioningArtifactParameters (object) **required** - Provisioning artifact properties. For example request JSON, see <a>CreateProvisioningArtifact</a>.
* SupportDescription (string)
* SupportEmail (string)
* SupportUrl (string)
* Tags (array)

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

#### Parameters
* AcceptLanguage (string)
* IdempotencyToken (string) **required**
* Parameters (object) **required** - Provisioning artifact properties. For example request JSON, see <a>CreateProvisioningArtifact</a>.
* ProductId (string) **required**

### CreateTagOption



```js
amazonaws_servicecatalog.CreateTagOption({
  "Key": "",
  "Value": ""
}, context)
```

#### Parameters
* Key (string) **required**
* Value (string) **required**

### DeleteConstraint



```js
amazonaws_servicecatalog.DeleteConstraint({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DeletePortfolio



```js
amazonaws_servicecatalog.DeletePortfolio({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DeletePortfolioShare



```js
amazonaws_servicecatalog.DeletePortfolioShare({
  "PortfolioId": "",
  "AccountId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* AccountId (string) **required**
* PortfolioId (string) **required**

### DeleteProduct



```js
amazonaws_servicecatalog.DeleteProduct({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DeleteProvisioningArtifact



```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* ProductId (string) **required**
* ProvisioningArtifactId (string) **required**

### DescribeConstraint



```js
amazonaws_servicecatalog.DescribeConstraint({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeCopyProductStatus



```js
amazonaws_servicecatalog.DescribeCopyProductStatus({
  "CopyProductToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* CopyProductToken (string) **required**

### DescribePortfolio



```js
amazonaws_servicecatalog.DescribePortfolio({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeProduct



```js
amazonaws_servicecatalog.DescribeProduct({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeProductAsAdmin



```js
amazonaws_servicecatalog.DescribeProductAsAdmin({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeProductView



```js
amazonaws_servicecatalog.DescribeProductView({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeProvisionedProduct



```js
amazonaws_servicecatalog.DescribeProvisionedProduct({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**

### DescribeProvisioningArtifact



```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({
  "ProvisioningArtifactId": "",
  "ProductId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* ProductId (string) **required**
* ProvisioningArtifactId (string) **required**
* Verbose (boolean)

### DescribeProvisioningParameters



```js
amazonaws_servicecatalog.DescribeProvisioningParameters({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PathId (string)
* ProductId (string) **required**
* ProvisioningArtifactId (string) **required**

### DescribeRecord



```js
amazonaws_servicecatalog.DescribeRecord({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Id (string) **required**
* PageSize (integer)
* PageToken (string)

### DescribeTagOption



```js
amazonaws_servicecatalog.DescribeTagOption({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### DisassociatePrincipalFromPortfolio



```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({
  "PortfolioId": "",
  "PrincipalARN": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**
* PrincipalARN (string) **required**

### DisassociateProductFromPortfolio



```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({
  "ProductId": "",
  "PortfolioId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**
* ProductId (string) **required**

### DisassociateTagOptionFromResource



```js
amazonaws_servicecatalog.DisassociateTagOptionFromResource({
  "ResourceId": "",
  "TagOptionId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagOptionId (string) **required**

### ListAcceptedPortfolioShares



```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)

### ListConstraintsForPortfolio



```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({
  "PortfolioId": ""
}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)
* PortfolioId (string) **required**
* ProductId (string)

### ListLaunchPaths



```js
amazonaws_servicecatalog.ListLaunchPaths({
  "ProductId": ""
}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)
* ProductId (string) **required**

### ListPortfolioAccess



```js
amazonaws_servicecatalog.ListPortfolioAccess({
  "PortfolioId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**

### ListPortfolios



```js
amazonaws_servicecatalog.ListPortfolios({}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)

### ListPortfoliosForProduct



```js
amazonaws_servicecatalog.ListPortfoliosForProduct({
  "ProductId": ""
}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)
* ProductId (string) **required**

### ListPrincipalsForPortfolio



```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({
  "PortfolioId": ""
}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* PageSize (integer)
* PageToken (string)
* PortfolioId (string) **required**

### ListProvisioningArtifacts



```js
amazonaws_servicecatalog.ListProvisioningArtifacts({
  "ProductId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* ProductId (string) **required**

### ListRecordHistory



```js
amazonaws_servicecatalog.ListRecordHistory({}, context)
```

#### Parameters
* AcceptLanguage (string)
* AccessLevelFilter (object) - The access level to limit results.
* PageSize (integer)
* PageToken (string)
* SearchFilter (object) - The search filter to limit results when listing request history records.

### ListResourcesForTagOption



```js
amazonaws_servicecatalog.ListResourcesForTagOption({
  "TagOptionId": ""
}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* PageSize (integer)
* PageToken (string)
* ResourceType (string)
* TagOptionId (string) **required**

### ListTagOptions



```js
amazonaws_servicecatalog.ListTagOptions({}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* Filters (object) - The ListTagOptions filters.
* PageSize (integer)
* PageToken (string)

### ProvisionProduct



```js
amazonaws_servicecatalog.ProvisionProduct({
  "ProductId": "",
  "ProvisioningArtifactId": "",
  "ProvisionedProductName": "",
  "ProvisionToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* NotificationArns (array)
* PathId (string)
* ProductId (string) **required**
* ProvisionToken (string) **required**
* ProvisionedProductName (string) **required**
* ProvisioningArtifactId (string) **required**
* ProvisioningParameters (array)
* Tags (array)

### RejectPortfolioShare



```js
amazonaws_servicecatalog.RejectPortfolioShare({
  "PortfolioId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PortfolioId (string) **required**

### ScanProvisionedProducts



```js
amazonaws_servicecatalog.ScanProvisionedProducts({}, context)
```

#### Parameters
* AcceptLanguage (string)
* AccessLevelFilter (object) - The access level to limit results.
* PageSize (integer)
* PageToken (string)

### SearchProducts



```js
amazonaws_servicecatalog.SearchProducts({}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* Filters (array)
* PageSize (integer)
* PageToken (string)
* SortBy (string)
* SortOrder (string)

### SearchProductsAsAdmin



```js
amazonaws_servicecatalog.SearchProductsAsAdmin({}, context)
```

#### Parameters
* PageSize (string)
* PageToken (string)
* AcceptLanguage (string)
* Filters (array)
* PageSize (integer)
* PageToken (string)
* PortfolioId (string)
* ProductSource (string)
* SortBy (string)
* SortOrder (string)

### TerminateProvisionedProduct



```js
amazonaws_servicecatalog.TerminateProvisionedProduct({
  "TerminateToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* IgnoreErrors (boolean)
* ProvisionedProductId (string)
* ProvisionedProductName (string)
* TerminateToken (string) **required**

### UpdateConstraint



```js
amazonaws_servicecatalog.UpdateConstraint({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Description (string)
* Id (string) **required**

### UpdatePortfolio



```js
amazonaws_servicecatalog.UpdatePortfolio({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* AddTags (array)
* Description (string)
* DisplayName (string)
* Id (string) **required**
* ProviderName (string)
* RemoveTags (array)

### UpdateProduct



```js
amazonaws_servicecatalog.UpdateProduct({
  "Id": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* AddTags (array)
* Description (string)
* Distributor (string)
* Id (string) **required**
* Name (string)
* Owner (string)
* RemoveTags (array)
* SupportDescription (string)
* SupportEmail (string)
* SupportUrl (string)

### UpdateProvisionedProduct



```js
amazonaws_servicecatalog.UpdateProvisionedProduct({
  "UpdateToken": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* PathId (string)
* ProductId (string)
* ProvisionedProductId (string)
* ProvisionedProductName (string)
* ProvisioningArtifactId (string)
* ProvisioningParameters (array)
* UpdateToken (string) **required**

### UpdateProvisioningArtifact



```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({
  "ProductId": "",
  "ProvisioningArtifactId": ""
}, context)
```

#### Parameters
* AcceptLanguage (string)
* Description (string)
* Name (string)
* ProductId (string) **required**
* ProvisioningArtifactId (string) **required**

### UpdateTagOption



```js
amazonaws_servicecatalog.UpdateTagOption({
  "Id": ""
}, context)
```

#### Parameters
* Active (boolean)
* Id (string) **required**
* Value (string)

