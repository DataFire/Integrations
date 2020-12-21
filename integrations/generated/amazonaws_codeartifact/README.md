# @datafire/amazonaws_codeartifact

Client library for CodeArtifact

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codeartifact
```
```js
let amazonaws_codeartifact = require('@datafire/amazonaws_codeartifact').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p> AWS CodeArtifact is a fully managed artifact repository compatible with language-native package managers and build tools such as npm, Apache Maven, NuGet, and pip. You can use CodeArtifact to share packages with development teams and pull packages. Packages can be pulled from both public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact repository and another repository, which effectively merges their contents from the point of view of a package manager client. </p> <p> <b>AWS CodeArtifact Components</b> </p> <p>Use the information in this guide to help you work with the following CodeArtifact components:</p> <ul> <li> <p> <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package versions</a>, each of which maps to a set of assets, or files. Repositories are polyglot, so a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <b> <code>npm</code> </b> CLI, the <b> <code>NuGet</code> </b> CLI, the Maven CLI (<b> <code>mvn</code> </b>), and <b> <code>pip</code> </b>.</p> </li> <li> <p> <b>Domain</b>: Repositories are aggregated into a higher-level entity known as a <i>domain</i>. All package assets and metadata are stored in the domain, but are consumed through repositories. A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it's present in. All of the assets and metadata in a domain are encrypted with the same customer master key (CMK) stored in AWS Key Management Service (AWS KMS).</p> <p>Each repository is a member of a single domain and can't be moved to a different domain.</p> <p>The domain allows organizational policy to be applied across multiple repositories, such as which accounts can access repositories in the domain, and which public repositories can be used as sources of packages.</p> <p>Although an organization can have multiple domains, we recommend a single production domain that contains all published artifacts so that teams can find and share packages across their organization.</p> </li> <li> <p> <b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-nuget">NuGet</a> package formats.</p> <p>In CodeArtifact, a package consists of:</p> <ul> <li> <p>A <i>name</i> (for example, <code>webpack</code> is the name of a popular npm package)</p> </li> <li> <p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p> </li> <li> <p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>, <code>1.0.2</code>, etc.)</p> </li> <li> <p> Package-level metadata (for example, npm tags)</p> </li> </ul> </li> <li> <p> <b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number format and semantics vary for different package formats. For example, npm package versions must conform to the <a href="https://semver.org/">Semantic Versioning specification</a>. In CodeArtifact, a package version consists of the version identifier, metadata at the package version level, and a set of assets.</p> </li> <li> <p> <b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in it can be accessed from the repository endpoint of the downstream repository, effectively merging the contents of the two repositories from the point of view of a client. CodeArtifact allows creating an upstream relationship between two repositories.</p> </li> <li> <p> <b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm <code>.tgz</code> file or Maven POM and JAR files.</p> </li> </ul> <p>CodeArtifact supports these operations:</p> <ul> <li> <p> <code>AssociateExternalConnection</code>: Adds an existing external connection to a repository. </p> </li> <li> <p> <code>CopyPackageVersions</code>: Copies package versions from one repository to another repository in the same domain.</p> </li> <li> <p> <code>CreateDomain</code>: Creates a domain</p> </li> <li> <p> <code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p> </li> <li> <p> <code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains repositories. </p> </li> <li> <p> <code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p> </li> <li> <p> <code>DeletePackageVersions</code>: Deletes versions of a package. After a package has been deleted, it can be republished, but its assets and metadata cannot be restored because they have been permanently removed from storage.</p> </li> <li> <p> <code>DeleteRepository</code>: Deletes a repository. </p> </li> <li> <p> <code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p> </li> <li> <p> <code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that contains information about the requested domain.</p> </li> <li> <p> <code>DescribePackageVersion</code>: Returns a <code> <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> </code> object that contains details about a package version. </p> </li> <li> <p> <code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository. </p> </li> <li> <p> <code>DisposePackageVersions</code>: Disposes versions of a package. A package version with the status <code>Disposed</code> cannot be restored because they have been permanently removed from storage.</p> </li> <li> <p> <code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository. </p> </li> <li> <p> <code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed. The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p> </li> <li> <p> <code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource that is attached to the specified domain. </p> </li> <li> <p> <code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p> </li> <li> <p> <code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p> </li> <li> <p> <code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> </ul> </li> <li> <p> <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository. </p> </li> <li> <p> <code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each returned <code>DomainSummary</code> object contains information about a domain.</p> </li> <li> <p> <code>ListPackages</code>: Lists the packages in a repository.</p> </li> <li> <p> <code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p> </li> <li> <p> <code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a package version. </p> </li> <li> <p> <code>ListPackageVersions</code>: Returns a list of package versions for a specified package in a repository.</p> </li> <li> <p> <code>ListRepositories</code>: Returns a list of repositories owned by the AWS account that called this method.</p> </li> <li> <p> <code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p> </li> <li> <p> <code>ListTagsForResource</code>: Returns a list of the tags associated with a resource.</p> </li> <li> <p> <code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p> </li> <li> <p> <code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository that specifies permissions to access it. </p> </li> <li> <p> <code>TagResource</code>: Adds or updates tags for a resource.</p> </li> <li> <p> <code>UntagResource</code>: Removes a tag from a resource. </p> </li> <li> <p> <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p> </li> <li> <p> <code>UpdateRepository</code>: Updates the properties of a repository.</p> </li> </ul>

## Actions

### GetAuthorizationToken



```js
amazonaws_codeartifact.GetAuthorizationToken({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * duration `integer`

#### Output
* output [GetAuthorizationTokenResult](#getauthorizationtokenresult)

### DeleteDomain



```js
amazonaws_codeartifact.DeleteDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`

#### Output
* output [DeleteDomainResult](#deletedomainresult)

### DescribeDomain



```js
amazonaws_codeartifact.DescribeDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`

#### Output
* output [DescribeDomainResult](#describedomainresult)

### CreateDomain



```js
amazonaws_codeartifact.CreateDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * tags `array`: One or more tag key-value pairs for the domain.
    * items [Tag](#tag)
  * encryptionKey `string`: <p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>AWS Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">AWS KMS API Permissions Reference</a> in the <i>AWS Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>AWS Key Management Service Developer Guide</i>. </p> </important>

#### Output
* output [CreateDomainResult](#createdomainresult)

### PutDomainPermissionsPolicy



```js
amazonaws_codeartifact.PutDomainPermissionsPolicy({
  "domain": "",
  "policyDocument": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`:  The name of the domain on which to set the resource policy. 
  * domainOwner `string`:  The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces. 
  * policyDocument **required** `string`:  A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain. 
  * policyRevision `string`:  The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. 

#### Output
* output [PutDomainPermissionsPolicyResult](#putdomainpermissionspolicyresult)

### DeleteDomainPermissionsPolicy



```js
amazonaws_codeartifact.DeleteDomainPermissionsPolicy({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * policy-revision `string`

#### Output
* output [DeleteDomainPermissionsPolicyResult](#deletedomainpermissionspolicyresult)

### GetDomainPermissionsPolicy



```js
amazonaws_codeartifact.GetDomainPermissionsPolicy({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`

#### Output
* output [GetDomainPermissionsPolicyResult](#getdomainpermissionspolicyresult)

### ListRepositoriesInDomain



```js
amazonaws_codeartifact.ListRepositoriesInDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * administrator-account `string`
  * repository-prefix `string`
  * max-results `integer`
  * next-token `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListRepositoriesInDomainResult](#listrepositoriesindomainresult)

### ListDomains



```js
amazonaws_codeartifact.ListDomains({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`:  The maximum number of results to return per page. 
  * nextToken `string`:  The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 

#### Output
* output [ListDomainsResult](#listdomainsresult)

### DescribePackageVersion



```js
amazonaws_codeartifact.DescribePackageVersion({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * version **required** `string`

#### Output
* output [DescribePackageVersionResult](#describepackageversionresult)

### GetPackageVersionAsset



```js
amazonaws_codeartifact.GetPackageVersionAsset({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "version": "",
  "asset": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * version **required** `string`
  * asset **required** `string`
  * revision `string`

#### Output
* output [GetPackageVersionAssetResult](#getpackageversionassetresult)

### ListPackageVersionAssets



```js
amazonaws_codeartifact.ListPackageVersionAssets({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * version **required** `string`
  * max-results `integer`
  * next-token `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListPackageVersionAssetsResult](#listpackageversionassetsresult)

### ListPackageVersionDependencies



```js
amazonaws_codeartifact.ListPackageVersionDependencies({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * version **required** `string`
  * next-token `string`

#### Output
* output [ListPackageVersionDependenciesResult](#listpackageversiondependenciesresult)

### GetPackageVersionReadme



```js
amazonaws_codeartifact.GetPackageVersionReadme({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * version **required** `string`

#### Output
* output [GetPackageVersionReadmeResult](#getpackageversionreadmeresult)

### ListPackageVersions



```js
amazonaws_codeartifact.ListPackageVersions({
  "domain": "",
  "repository": "",
  "format": "",
  "package": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * status `string`
  * sortBy `string`
  * max-results `integer`
  * next-token `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListPackageVersionsResult](#listpackageversionsresult)

### CopyPackageVersions



```js
amazonaws_codeartifact.CopyPackageVersions({
  "domain": "",
  "source-repository": "",
  "destination-repository": "",
  "format": "",
  "package": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * source-repository **required** `string`
  * destination-repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * allowOverwrite `boolean`:  Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. 
  * includeFromUpstream `boolean`:  Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. 
  * versionRevisions `object`: <p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>
  * versions `array`: <p> The versions of the package to copy. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>
    * items [PackageVersion](#packageversion)

#### Output
* output [CopyPackageVersionsResult](#copypackageversionsresult)

### DeletePackageVersions



```js
amazonaws_codeartifact.DeletePackageVersions({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "versions": []
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * expectedStatus `string` (values: Published, Unfinished, Unlisted, Archived, Disposed, Deleted): <p> The expected status of the package version to delete. Valid values are: </p> <ul> <li> <p> <code>Published</code> </p> </li> <li> <p> <code>Unfinished</code> </p> </li> <li> <p> <code>Unlisted</code> </p> </li> <li> <p> <code>Archived</code> </p> </li> <li> <p> <code>Disposed</code> </p> </li> </ul>
  * versions **required** `array`:  An array of strings that specify the versions of the package to delete. 
    * items [PackageVersion](#packageversion)

#### Output
* output [DeletePackageVersionsResult](#deletepackageversionsresult)

### DisposePackageVersions



```js
amazonaws_codeartifact.DisposePackageVersions({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "versions": []
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * expectedStatus `string` (values: Published, Unfinished, Unlisted, Archived, Disposed, Deleted): <p> The expected status of the package version to dispose. Valid values are: </p> <ul> <li> <p> <code>Published</code> </p> </li> <li> <p> <code>Unfinished</code> </p> </li> <li> <p> <code>Unlisted</code> </p> </li> <li> <p> <code>Archived</code> </p> </li> <li> <p> <code>Disposed</code> </p> </li> </ul>
  * versionRevisions `object`:  The revisions of the package versions you want to dispose. 
  * versions **required** `array`:  The versions of the package you want to dispose. 
    * items [PackageVersion](#packageversion)

#### Output
* output [DisposePackageVersionsResult](#disposepackageversionsresult)

### UpdatePackageVersionsStatus



```js
amazonaws_codeartifact.UpdatePackageVersionsStatus({
  "domain": "",
  "repository": "",
  "format": "",
  "package": "",
  "versions": [],
  "targetStatus": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`
  * namespace `string`
  * package **required** `string`
  * expectedStatus `string` (values: Published, Unfinished, Unlisted, Archived, Disposed, Deleted):  The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. 
  * targetStatus **required** `string` (values: Published, Unfinished, Unlisted, Archived, Disposed, Deleted):  The status you want to change the package version status to. 
  * versionRevisions `object`:  A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. 
  * versions **required** `array`:  An array of strings that specify the versions of the package with the statuses to update. 
    * items [PackageVersion](#packageversion)

#### Output
* output [UpdatePackageVersionsStatusResult](#updatepackageversionsstatusresult)

### ListPackages



```js
amazonaws_codeartifact.ListPackages({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format `string`
  * namespace `string`
  * package-prefix `string`
  * max-results `integer`
  * next-token `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListPackagesResult](#listpackagesresult)

### ListRepositories



```js
amazonaws_codeartifact.ListRepositories({}, context)
```

#### Input
* input `object`
  * repository-prefix `string`
  * max-results `integer`
  * next-token `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListRepositoriesResult](#listrepositoriesresult)

### DeleteRepository



```js
amazonaws_codeartifact.DeleteRepository({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`

#### Output
* output [DeleteRepositoryResult](#deleterepositoryresult)

### DescribeRepository



```js
amazonaws_codeartifact.DescribeRepository({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`

#### Output
* output [DescribeRepositoryResult](#describerepositoryresult)

### CreateRepository



```js
amazonaws_codeartifact.CreateRepository({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * tags `array`: One or more tag key-value pairs for the repository.
    * items [Tag](#tag)
  * description `string`:  A description of the created repository. 
  * upstreams `array`:  A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. 
    * items [UpstreamRepository](#upstreamrepository)

#### Output
* output [CreateRepositoryResult](#createrepositoryresult)

### UpdateRepository



```js
amazonaws_codeartifact.UpdateRepository({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * description `string`:  An updated repository description. 
  * upstreams `array`:  A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. 
    * items [UpstreamRepository](#upstreamrepository)

#### Output
* output [UpdateRepositoryResult](#updaterepositoryresult)

### GetRepositoryEndpoint



```js
amazonaws_codeartifact.GetRepositoryEndpoint({
  "domain": "",
  "repository": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * format **required** `string`

#### Output
* output [GetRepositoryEndpointResult](#getrepositoryendpointresult)

### DisassociateExternalConnection



```js
amazonaws_codeartifact.DisassociateExternalConnection({
  "domain": "",
  "repository": "",
  "external-connection": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * external-connection **required** `string`

#### Output
* output [DisassociateExternalConnectionResult](#disassociateexternalconnectionresult)

### AssociateExternalConnection



```js
amazonaws_codeartifact.AssociateExternalConnection({
  "domain": "",
  "repository": "",
  "external-connection": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * external-connection **required** `string`

#### Output
* output [AssociateExternalConnectionResult](#associateexternalconnectionresult)

### DeleteRepositoryPermissionsPolicy



```js
amazonaws_codeartifact.DeleteRepositoryPermissionsPolicy({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * policy-revision `string`

#### Output
* output [DeleteRepositoryPermissionsPolicyResult](#deleterepositorypermissionspolicyresult)

### GetRepositoryPermissionsPolicy



```js
amazonaws_codeartifact.GetRepositoryPermissionsPolicy({
  "domain": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`

#### Output
* output [GetRepositoryPermissionsPolicyResult](#getrepositorypermissionspolicyresult)

### PutRepositoryPermissionsPolicy



```js
amazonaws_codeartifact.PutRepositoryPermissionsPolicy({
  "domain": "",
  "repository": "",
  "policyDocument": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * domain-owner `string`
  * repository **required** `string`
  * policyDocument **required** `string`:  A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository. 
  * policyRevision `string`:  Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy. 

#### Output
* output [PutRepositoryPermissionsPolicyResult](#putrepositorypermissionspolicyresult)

### TagResource



```js
amazonaws_codeartifact.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `array`: The tags you want to modify or add to the resource.
    * items [Tag](#tag)

#### Output
* output [TagResourceResult](#tagresourceresult)

### ListTagsForResource



```js
amazonaws_codeartifact.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### UntagResource



```js
amazonaws_codeartifact.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`: The tag key for each tag that you want to remove from the resource.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResult](#untagresourceresult)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`

### Arn
* Arn `string`

### Asset
* Asset `string`

### AssetHashes
* AssetHashes `object`

### AssetName
* AssetName `string`

### AssetSummary
* AssetSummary `object`:  Contains details about a package version asset. 
  * hashes
  * name **required**
  * size

### AssetSummaryList
* AssetSummaryList `array`
  * items [AssetSummary](#assetsummary)

### AssociateExternalConnectionRequest
* AssociateExternalConnectionRequest `object`

### AssociateExternalConnectionResult
* AssociateExternalConnectionResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### AuthorizationTokenDurationSeconds
* AuthorizationTokenDurationSeconds `integer`

### BooleanOptional
* BooleanOptional `boolean`

### ConflictException


### CopyPackageVersionsRequest
* CopyPackageVersionsRequest `object`
  * allowOverwrite
  * includeFromUpstream
  * versionRevisions
  * versions
    * items [PackageVersion](#packageversion)

### CopyPackageVersionsResult
* CopyPackageVersionsResult `object`
  * failedVersions
  * successfulVersions

### CreateDomainRequest
* CreateDomainRequest `object`
  * tags
    * items [Tag](#tag)
  * encryptionKey

### CreateDomainResult
* CreateDomainResult `object`
  * domain
    * arn
    * assetSizeBytes
    * createdTime
    * encryptionKey
    * name
    * owner
    * repositoryCount
    * s3BucketArn
    * status

### CreateRepositoryRequest
* CreateRepositoryRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * upstreams
    * items [UpstreamRepository](#upstreamrepository)

### CreateRepositoryResult
* CreateRepositoryResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### DeleteDomainPermissionsPolicyRequest
* DeleteDomainPermissionsPolicyRequest `object`

### DeleteDomainPermissionsPolicyResult
* DeleteDomainPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### DeleteDomainRequest
* DeleteDomainRequest `object`

### DeleteDomainResult
* DeleteDomainResult `object`
  * domain
    * arn
    * assetSizeBytes
    * createdTime
    * encryptionKey
    * name
    * owner
    * repositoryCount
    * s3BucketArn
    * status

### DeletePackageVersionsRequest
* DeletePackageVersionsRequest `object`
  * expectedStatus
  * versions **required**
    * items [PackageVersion](#packageversion)

### DeletePackageVersionsResult
* DeletePackageVersionsResult `object`
  * failedVersions
  * successfulVersions

### DeleteRepositoryPermissionsPolicyRequest
* DeleteRepositoryPermissionsPolicyRequest `object`

### DeleteRepositoryPermissionsPolicyResult
* DeleteRepositoryPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### DeleteRepositoryRequest
* DeleteRepositoryRequest `object`

### DeleteRepositoryResult
* DeleteRepositoryResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### DescribeDomainRequest
* DescribeDomainRequest `object`

### DescribeDomainResult
* DescribeDomainResult `object`
  * domain [DomainDescription](#domaindescription)

### DescribePackageVersionRequest
* DescribePackageVersionRequest `object`

### DescribePackageVersionResult
* DescribePackageVersionResult `object`
  * packageVersion **required**
    * displayName
    * format
    * homePage
    * licenses
      * items [LicenseInfo](#licenseinfo)
    * namespace
    * packageName
    * publishedTime
    * revision
    * sourceCodeRepository
    * status
    * summary
    * version

### DescribeRepositoryRequest
* DescribeRepositoryRequest `object`

### DescribeRepositoryResult
* DescribeRepositoryResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### Description
* Description `string`

### DisassociateExternalConnectionRequest
* DisassociateExternalConnectionRequest `object`

### DisassociateExternalConnectionResult
* DisassociateExternalConnectionResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### DisposePackageVersionsRequest
* DisposePackageVersionsRequest `object`
  * expectedStatus
  * versionRevisions
  * versions **required**
    * items [PackageVersion](#packageversion)

### DisposePackageVersionsResult
* DisposePackageVersionsResult `object`
  * failedVersions
  * successfulVersions

### DomainDescription
* DomainDescription `object`:  Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories. 
  * arn
  * assetSizeBytes
  * createdTime
  * encryptionKey
  * name
  * owner
  * repositoryCount
  * s3BucketArn
  * status

### DomainName
* DomainName `string`

### DomainStatus
* DomainStatus `string` (values: Active, Deleted)

### DomainSummary
* DomainSummary `object`:  Information about a domain, including its name, Amazon Resource Name (ARN), and status. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html"> <code>ListDomains</code> </a> operation returns a list of <code>DomainSummary</code> objects. 
  * arn
  * createdTime
  * encryptionKey
  * name
  * owner
  * status

### DomainSummaryList
* DomainSummaryList `array`
  * items [DomainSummary](#domainsummary)

### ErrorMessage
* ErrorMessage `string`

### ExternalConnectionName
* ExternalConnectionName `string`

### ExternalConnectionStatus
* ExternalConnectionStatus `string` (values: Available)

### GetAuthorizationTokenRequest
* GetAuthorizationTokenRequest `object`

### GetAuthorizationTokenResult
* GetAuthorizationTokenResult `object`
  * authorizationToken
  * expiration

### GetDomainPermissionsPolicyRequest
* GetDomainPermissionsPolicyRequest `object`

### GetDomainPermissionsPolicyResult
* GetDomainPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### GetPackageVersionAssetRequest
* GetPackageVersionAssetRequest `object`

### GetPackageVersionAssetResult
* GetPackageVersionAssetResult `object`
  * asset

### GetPackageVersionReadmeRequest
* GetPackageVersionReadmeRequest `object`

### GetPackageVersionReadmeResult
* GetPackageVersionReadmeResult `object`
  * format
  * namespace
  * package
  * readme
  * version
  * versionRevision

### GetRepositoryEndpointRequest
* GetRepositoryEndpointRequest `object`

### GetRepositoryEndpointResult
* GetRepositoryEndpointResult `object`
  * repositoryEndpoint

### GetRepositoryPermissionsPolicyRequest
* GetRepositoryPermissionsPolicyRequest `object`

### GetRepositoryPermissionsPolicyResult
* GetRepositoryPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### HashAlgorithm
* HashAlgorithm `string` (values: MD5, SHA-1, SHA-256, SHA-512)

### HashValue
* HashValue `string`

### Integer
* Integer `integer`

### InternalServerException


### LicenseInfo
* LicenseInfo `object`:  Details of the license data. 
  * name
  * url

### LicenseInfoList
* LicenseInfoList `array`
  * items [LicenseInfo](#licenseinfo)

### ListDomainsMaxResults
* ListDomainsMaxResults `integer`

### ListDomainsRequest
* ListDomainsRequest `object`
  * maxResults
  * nextToken

### ListDomainsResult
* ListDomainsResult `object`
  * domains
    * items [DomainSummary](#domainsummary)
  * nextToken

### ListPackageVersionAssetsMaxResults
* ListPackageVersionAssetsMaxResults `integer`

### ListPackageVersionAssetsRequest
* ListPackageVersionAssetsRequest `object`

### ListPackageVersionAssetsResult
* ListPackageVersionAssetsResult `object`
  * assets
    * items [AssetSummary](#assetsummary)
  * format
  * namespace
  * nextToken
  * package
  * version
  * versionRevision

### ListPackageVersionDependenciesRequest
* ListPackageVersionDependenciesRequest `object`

### ListPackageVersionDependenciesResult
* ListPackageVersionDependenciesResult `object`
  * dependencies
    * items [PackageDependency](#packagedependency)
  * format
  * namespace
  * nextToken
  * package
  * version
  * versionRevision

### ListPackageVersionsMaxResults
* ListPackageVersionsMaxResults `integer`

### ListPackageVersionsRequest
* ListPackageVersionsRequest `object`

### ListPackageVersionsResult
* ListPackageVersionsResult `object`
  * defaultDisplayVersion
  * format
  * namespace
  * nextToken
  * package
  * versions
    * items [PackageVersionSummary](#packageversionsummary)

### ListPackagesMaxResults
* ListPackagesMaxResults `integer`

### ListPackagesRequest
* ListPackagesRequest `object`

### ListPackagesResult
* ListPackagesResult `object`
  * nextToken
  * packages
    * items [PackageSummary](#packagesummary)

### ListRepositoriesInDomainMaxResults
* ListRepositoriesInDomainMaxResults `integer`

### ListRepositoriesInDomainRequest
* ListRepositoriesInDomainRequest `object`

### ListRepositoriesInDomainResult
* ListRepositoriesInDomainResult `object`
  * nextToken
  * repositories
    * items [RepositorySummary](#repositorysummary)

### ListRepositoriesMaxResults
* ListRepositoriesMaxResults `integer`

### ListRepositoriesRequest
* ListRepositoriesRequest `object`

### ListRepositoriesResult
* ListRepositoriesResult `object`
  * nextToken
  * repositories
    * items [RepositorySummary](#repositorysummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * tags
    * items [Tag](#tag)

### Long
* Long `integer`

### LongOptional
* LongOptional `integer`

### PackageDependency
* PackageDependency `object`:  Details about a package dependency. 
  * dependencyType
  * namespace
  * package
  * versionRequirement

### PackageDependencyList
* PackageDependencyList `array`
  * items [PackageDependency](#packagedependency)

### PackageFormat
* PackageFormat `string` (values: npm, pypi, maven, nuget)

### PackageName
* PackageName `string`

### PackageNamespace
* PackageNamespace `string`

### PackageSummary
* PackageSummary `object`:  Details about a package, including its format, namespace, and name. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html"> <code>ListPackages</code> </a> operation returns a list of <code>PackageSummary</code> objects. 
  * format
  * namespace
  * package

### PackageSummaryList
* PackageSummaryList `array`
  * items [PackageSummary](#packagesummary)

### PackageVersion
* PackageVersion `string`

### PackageVersionDescription
* PackageVersionDescription `object`:  Details about a package version. 
  * displayName
  * format
  * homePage
  * licenses
    * items [LicenseInfo](#licenseinfo)
  * namespace
  * packageName
  * publishedTime
  * revision
  * sourceCodeRepository
  * status
  * summary
  * version

### PackageVersionError
* PackageVersionError `object`:  An error associated with package. 
  * errorCode
  * errorMessage

### PackageVersionErrorCode
* PackageVersionErrorCode `string` (values: ALREADY_EXISTS, MISMATCHED_REVISION, MISMATCHED_STATUS, NOT_ALLOWED, NOT_FOUND, SKIPPED)

### PackageVersionErrorMap
* PackageVersionErrorMap `object`

### PackageVersionList
* PackageVersionList `array`
  * items [PackageVersion](#packageversion)

### PackageVersionRevision
* PackageVersionRevision `string`

### PackageVersionRevisionMap
* PackageVersionRevisionMap `object`

### PackageVersionSortType
* PackageVersionSortType `string` (values: PUBLISHED_TIME)

### PackageVersionStatus
* PackageVersionStatus `string` (values: Published, Unfinished, Unlisted, Archived, Disposed, Deleted)

### PackageVersionSummary
* PackageVersionSummary `object`:  Details about a package version, including its status, version, and revision. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html"> <code>ListPackageVersions</code> </a> operation returns a list of <code>PackageVersionSummary</code> objects. 
  * revision
  * status **required**
  * version **required**

### PackageVersionSummaryList
* PackageVersionSummaryList `array`
  * items [PackageVersionSummary](#packageversionsummary)

### PaginationToken
* PaginationToken `string`

### PolicyDocument
* PolicyDocument `string`

### PolicyRevision
* PolicyRevision `string`

### PutDomainPermissionsPolicyRequest
* PutDomainPermissionsPolicyRequest `object`
  * domain **required**
  * domainOwner
  * policyDocument **required**
  * policyRevision

### PutDomainPermissionsPolicyResult
* PutDomainPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### PutRepositoryPermissionsPolicyRequest
* PutRepositoryPermissionsPolicyRequest `object`
  * policyDocument **required**
  * policyRevision

### PutRepositoryPermissionsPolicyResult
* PutRepositoryPermissionsPolicyResult `object`
  * policy
    * document
    * resourceArn
    * revision

### RepositoryDescription
* RepositoryDescription `object`:  The details of a repository stored in AWS CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per AWS account. 
  * administratorAccount
  * arn
  * description
  * domainName
  * domainOwner
  * externalConnections
    * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
  * name
  * upstreams
    * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### RepositoryExternalConnectionInfo
* RepositoryExternalConnectionInfo `object`:  Contains information about the external connection of a repository. 
  * externalConnectionName
  * packageFormat
  * status

### RepositoryExternalConnectionInfoList
* RepositoryExternalConnectionInfoList `array`
  * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)

### RepositoryName
* RepositoryName `string`

### RepositorySummary
* RepositorySummary `object`:  Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html"> <code>ListRepositories</code> </a> operation returns a list of <code>RepositorySummary</code> objects. 
  * administratorAccount
  * arn
  * description
  * domainName
  * domainOwner
  * name

### RepositorySummaryList
* RepositorySummaryList `array`
  * items [RepositorySummary](#repositorysummary)

### ResourceNotFoundException


### ResourcePolicy
* ResourcePolicy `object`:  An AWS CodeArtifact resource policy that contains a resource ARN, document details, and a revision. 
  * document
  * resourceArn
  * revision

### ServiceQuotaExceededException


### String
* String `string`

### String255
* String255 `string`

### SuccessfulPackageVersionInfo
* SuccessfulPackageVersionInfo `object`:  Contains the revision and status of a package version. 
  * revision
  * status

### SuccessfulPackageVersionInfoMap
* SuccessfulPackageVersionInfoMap `object`

### Tag
* Tag `object`: A tag is a key-value pair that can be used to manage, search for, or filter resources in AWS CodeArtifact.
  * key **required**
  * value **required**

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
  * tags **required**
    * items [Tag](#tag)

### TagResourceResult
* TagResourceResult `object`

### TagValue
* TagValue `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResult
* UntagResourceResult `object`

### UpdatePackageVersionsStatusRequest
* UpdatePackageVersionsStatusRequest `object`
  * expectedStatus
  * targetStatus **required**
  * versionRevisions
  * versions **required**
    * items [PackageVersion](#packageversion)

### UpdatePackageVersionsStatusResult
* UpdatePackageVersionsStatusResult `object`
  * failedVersions
  * successfulVersions

### UpdateRepositoryRequest
* UpdateRepositoryRequest `object`
  * description
  * upstreams
    * items [UpstreamRepository](#upstreamrepository)

### UpdateRepositoryResult
* UpdateRepositoryResult `object`
  * repository
    * administratorAccount
    * arn
    * description
    * domainName
    * domainOwner
    * externalConnections
      * items [RepositoryExternalConnectionInfo](#repositoryexternalconnectioninfo)
    * name
    * upstreams
      * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### UpstreamRepository
* UpstreamRepository `object`:  Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html"> <code>CreateRepository</code> </a> and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html"> <code>UpdateRepository</code> </a>. 
  * repositoryName **required**

### UpstreamRepositoryInfo
* UpstreamRepositoryInfo `object`:  Information about an upstream repository. 
  * repositoryName

### UpstreamRepositoryInfoList
* UpstreamRepositoryInfoList `array`
  * items [UpstreamRepositoryInfo](#upstreamrepositoryinfo)

### UpstreamRepositoryList
* UpstreamRepositoryList `array`
  * items [UpstreamRepository](#upstreamrepository)

### ValidationException



