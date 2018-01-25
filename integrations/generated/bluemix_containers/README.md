# @datafire/bluemix_containers

Client library for IBM Containers

## Installation and Usage
```bash
npm install --save @datafire/bluemix_containers
```
```js
let bluemix_containers = require('@datafire/bluemix_containers').create();

bluemix_containers.build.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "t": "",
  "file": null
}).then(data => {
  console.log(data);
});
```

## Description

Containers are virtual software objects that include all the elements that an app needs to run. A container has the benefits of resource isolation and allocation but is more portable and efficient than, for example, a virtual machine.

 This documentation describes the IBM Containers API, which is based on the Docker Remote API. The API provides endpoints that you can use to create and manage your single containers and container groups in Bluemix. Endpoints are summarized under the following tags:

- **Authentication**: Retrieve and refresh your TLS certificates.
- **Private Docker images registry**: Create your own private Docker images registry in Bluemix by setting a namespace for your organization.
- **Images**: View, build, and push your images to your private Bluemix registry so you can use them with IBM Containers. You can also scan your container images with the Vulnerability Advisor against standard policies set by the organization manager and a database of known Ubuntu issues.
- **Single Containers**: Create and manage single containers in Bluemix. Use a single container to implement short-lived processes or to run simple tests as you develop an app or service. To make your single container available from the internet, review the `Public IP addresses` endpoints.
- **Container Groups**: Create and manage your container groups in Bluemix. A container group consists of multiple single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer further options at no cost to make your app highly available. These options include in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage. Map a public route to your container group to make your app accessible from the internet.
- **Public IP addresses**: Use these endpoints to request public IP addresses for your space. You can bind this IP address to your container to make your container accessible from the internet.
- **File shares**: Create, list and delete file shares in a space. A file share is a NFS storage system that hosts Docker volumes.
- **Volumes**: Create and manage container volumes in your space to persist the data of your containers.


 Each API request requires an HTTP header that includes the 'X-Auth-Token’ and 'X-Auth-Project-Id’ parameter.

- **X-Auth-Token**: The JSON web token (JWT) that you receive when logging into the Bluemix platform. It allows you to use the IBM Containers REST API, access services, and resources. Run `cf oauth-token` to retrieve your access token information.
- **X-Auth-Project-Id**: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.


 For further information about how containers work in the IBM Containers service, review the documentation under https://new-console.ng.bluemix.net/docs/containers/container_index.html.

## Actions

### build.post
This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).

 To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.


```js
bluemix_containers.build.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "t": "",
  "file": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * t **required** `string`: Tag the image with the full path to your private Bluemix registry in the following format: `t=registry.ng.bluemix.net/<namespace>/<image_name>:<tag>`. This path is used to push the image to the private Bluemix registry after it is built.
  * q `boolean`: You can choose whether or not to show the verbose build output to review every step during the container image build. If you set the query parameter to `q=false`, `q=False`, or `q=0`, the verbose build output is suppressed. To show the verbose build output, enter `q=true`, `q=True`, or `q=1`.
  * nocache `boolean`: If you set the query parameter to `nocache=true`, `nocache=True`, or `nocache=1`, the cache will not be used to build your image. To use the cache, enter `nocache=false`, `nocache=False`, or `nocache=0`.
  * pull `boolean`: If set to pull=true, pull=True, or pull=1, then a newer version of the image is always attempted to be pulled even though an older version of the image exists locally. If set to pull=false, pull=False, or pull=0, then the local image will be used if one exists.

#### Output
*Output schema unknown*

### containers.create.post
This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app.

 In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container.

 To create a container with IBM Containers, you must at least define the image that the container is based on.

- Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.


```js
bluemix_containers.containers.create.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "Param": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * Param **required** [CreateContainer](#createcontainer)
  * name `string`: Choose a name for your container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.

#### Output
* output [ContainerId](#containerid)

### containers.floating_ips.get
This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).


```js
bluemix_containers.containers.floating_ips.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * all `boolean`: If this option is set to `all=1`, `all=True`, or `all=true`, all public IP addresses that are allocated to a space are returned. If this option is set to `all=0`, `all=False`, or `all=false`, only available public IP addresses that are allocated but not bound to a container are returned. By default, only available public IP addresses are returned.

#### Output
* output `array`
  * items [FloatingIP](#floatingip)

### containers.floating_ips.request.post
This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.


```js
bluemix_containers.containers.floating_ips.request.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output `string`: New public IP address that is allocated to your space.

### containers.floating_ips.ip.release.post
This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.


```js
bluemix_containers.containers.floating_ips.ip.release.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * ip **required** `string`: The public IP address that you want to release. Run `cf ic ip list` or call the `GET /containers/floating-ips?all=true` endpoint to review all public IP address that are allocated to your space. After a public IP address is released, it will no longer be allocated to your space.

#### Output
*Output schema unknown*

### containers.groups.get
This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).


```js
bluemix_containers.containers.groups.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output `array`
  * items [ContainersGroupsGetListItem](#containersgroupsgetlistitem)

### containers.groups.post
This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.

To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
















- Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
- Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.


```js
bluemix_containers.containers.groups.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "RequiredAttributes": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * RequiredAttributes **required** [ContainersGroupsPostRequiredAttributes](#containersgroupspostrequiredattributes)

#### Output
* output [ContainersGroupsPostCreatedInfo](#containersgroupspostcreatedinfo)

### containers.groups.name_or_id.delete
Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.


```js
bluemix_containers.containers.groups.name_or_id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or unique ID of the container group that you want to delete. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
  * force `string`: If you want to force the deletion of a container group that has running container instances, use the force option. This parameter needs to be set to either true or false. If set to `force=true`, `force=True`, or `force=1`, running container instances are deleted. If set to `force=false`, `force=False`, or `force=0`, running container instances are not deleted. If you do not specify this paramater, running container instances are not deleted by default. 

#### Output
*Output schema unknown*

### containers.groups.name_or_id.get
This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).


```js
bluemix_containers.containers.groups.name_or_id.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or unique ID of the container group that you want to inspect. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.

#### Output
* output [ContainersGroupsNameOrIdGetDetails](#containersgroupsnameoridgetdetails)

### containers.groups.name_or_id.patch
Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`).

Note: You can run only one update at a time.

 The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances.


```js
bluemix_containers.containers.groups.name_or_id.patch({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "Updates": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or unique ID of the container group that you want to update.
  * Updates **required** [ContainersGroupsNameOrIdPatchUpdatedInfo](#containersgroupsnameoridpatchupdatedinfo)

#### Output
*Output schema unknown*

### containers.groups.name_or_id.maproute.post
If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.


```js
bluemix_containers.containers.groups.name_or_id.maproute.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "Route": {}
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or unique ID of the container group to which you want to map a public route. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
  * Route **required** [Route](#route)

#### Output
* output [ContainersGroupsNameOrIdMaproutePostInfo](#containersgroupsnameoridmaproutepostinfo)

### containers.groups.name_or_id.unmaproute.post
This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet.

 When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups.


```js
bluemix_containers.containers.groups.name_or_id.unmaproute.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "Route": {}
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or unique ID (UUID) of the container group that you want to inspect.
  * Route **required** [Route](#route)

#### Output
* output [ContainersGroupsNameOrIdMaproutePostInfo](#containersgroupsnameoridmaproutepostinfo)

### containers.json.get
This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.


```js
bluemix_containers.containers.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * all `string`: By default, the `GET /containers/json` endpoint returns a list of all single containers in a space that are in a running state. To request a list of all containers independent of their current state, set the `all` query parameter to true. Allowed values are: `all=true`, `all=True`, and `all=1`. 
  * filters `string`: You can filter your containers by any environment variable key or value that is listed in the `Env` section of your CLI/ API response when you run the `cf ic inspect <container>` command, or call the `GET /containers/{id}/json` endpoint. Your search criteria does not need to be an exact match. It can also be a part of the key or value you are looking for. For example, to filter all containers with an environment variable that contains `id` in one of their environment variables, use `filter=id`.

#### Output
* output `array`
  * items [Container](#container)

### containers.messages.get
This endpoint retrieves all IBM Containers system messages for the user.


```js
bluemix_containers.containers.messages.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. To retrieve your space ID, run `cf space <space_name> --guid` and replace `<space_name>` with the name of the space where you want to create or work with your container. 

#### Output
* output `object`
  * created_date `string`: Timestamp when the message was created.
  * message `string`: Important information for the IBM Containers user.

### containers.quota.get
Retrieve the quota that is assigned to the organization and space.


```js
bluemix_containers.containers.quota.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [ContainersQuotaInfo](#containersquotainfo)

### containers.quota.put
This endpoint updates the quota that is allocated to a Bluemix space.

 **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.


```js
bluemix_containers.containers.quota.put({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "ContainersQuotaList": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * ContainersQuotaList **required** [ContainersQuotaList](#containersquotalist)

#### Output
*Output schema unknown*

### containers.usage.get
This endpoint returns a list of available container sizes and the quota limit and usage for the space.

- Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
- Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space.
- Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit.


```js
bluemix_containers.containers.usage.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [ContainersUsageInfo](#containersusageinfo)

### containers.version.get
This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.


```js
bluemix_containers.containers.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ContainersVersionGetInfo](#containersversiongetinfo)

### containers.id.status.get
This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.


```js
bluemix_containers.containers.id.status.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * id **required** `string`: The unique identifier that represents the container. Run `cf ic ps`, or call the `GET /containers/json` endpoint to retrieve the ID of the container.

#### Output
* output [getContainerStatus](#getcontainerstatus)

### containers.name_or_id.delete
Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.


```js
bluemix_containers.containers.name_or_id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to delete. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
  * force `boolean`: Use the `force` query parameter if you want to delete the container independent of their current state. The container does not need to be stopped first. To force the deletion of a container, enter `force=true`, `force=True`, or `force=1`. If you want to delete containers that are in a non-running state only, do either not set this query parameter, or enter `force=false`, `force=False`, or `force=0`.

#### Output
*Output schema unknown*

### containers.name_or_id.floating_ips.ip.bind.post
This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.


```js
bluemix_containers.containers.name_or_id.floating_ips.ip.bind.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
  * ip **required** `string`: The public IP address that you want to bind to your container.

#### Output
*Output schema unknown*

### containers.name_or_id.floating_ips.ip.unbind.post
This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 


```js
bluemix_containers.containers.name_or_id.floating_ips.ip.unbind.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space. 
  * ip **required** `string`: The public IP address that you want to unbind from your container.

#### Output
*Output schema unknown*

### containers.name_or_id.json.get
This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).


```js
bluemix_containers.containers.name_or_id.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The name or ID of the container that you want to inspect. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.

#### Output
* output [ContainerInfo](#containerinfo)

### containers.name_or_id.pause.post
Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).


```js
bluemix_containers.containers.name_or_id.pause.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to pause. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space that are currently in a running state.

#### Output
*Output schema unknown*

### containers.name_or_id.rename.post
Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 


```js
bluemix_containers.containers.name_or_id.rename.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to rename. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
  * name **required** `string`: The new name for the container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.

#### Output
*Output schema unknown*

### containers.name_or_id.restart.post
Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).


```js
bluemix_containers.containers.name_or_id.restart.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to restart. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space.
  * t `integer`: The number of seconds to wait before the container is restarted. For example, if you want a container to restart after 10 seconds, enter `t=10`.

#### Output
*Output schema unknown*

### containers.name_or_id.start.post
Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).


```js
bluemix_containers.containers.name_or_id.start.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to start. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review the containers in your space that are currently not in a running state.

#### Output
*Output schema unknown*

### containers.name_or_id.stop.post
Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).


```js
bluemix_containers.containers.name_or_id.stop.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to stop. Run `cf ic ps` or call the `GET /containers/json` endpoint to review the containers in your space that are currently in a running state.
  * t `integer`: The number of seconds to wait before the container is stopped. For example, if you want a container to stop after 10 seconds, enter `t=10`.

#### Output
*Output schema unknown*

### containers.name_or_id.unpause.post
Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).


```js
bluemix_containers.containers.name_or_id.unpause.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The unique identifier or name of the container that you want to unpause. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.

#### Output
*Output schema unknown*

### images.json.get
This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.


```js
bluemix_containers.images.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [ImageInfo](#imageinfo)

### images.id.delete
Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).


```js
bluemix_containers.images.id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * id **required** `string`: The unique identifier representing a Docker image. Run `cf ic images`, or call the `GET /images/json` endpoint to review the Docker images that are available in your private Bluemix registry.

#### Output
*Output schema unknown*

### images.name_or_id.json.get
This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).


```js
bluemix_containers.images.name_or_id.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name_or_id **required** `string`: The full private Bluemix registry path to your image or the unique ID of the image that you want to inspect. Run `cf ic images` or call the `GET /images/json` endpoint to review the images in your private Bluemix registry. 

#### Output
* output [ImageDetail](#imagedetail)

### registry.namespaces.get
This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).


```js
bluemix_containers.registry.namespaces.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [Namespace](#namespace)

### registry.namespaces.namespace.get
This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization.

 Consider the following rules when choosing a namespace for your organization:

- Every organization can have one namespace at a time only
- The namespace must be unique in Bluemix.
- The namespace can be 4-30 characters long.
- The namespace must start with at least one letter or number.
- The namespace can only contain lowercase letters, numbers or underscores (_).


```js
bluemix_containers.registry.namespaces.namespace.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * namespace **required** `string`: The name of the namespace that you would like to use for your organization and for which you would like to check availability in Bluemix.

#### Output
* output [Namespace](#namespace)

### registry.namespaces.namespace.put
Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry.

 The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization:

- Every organization can have one namespace at a time only
- The namespace must be unique in Bluemix.
- The namespace can be 4-30 characters long.
- The namespace must start with at least one letter or number.
- The namespace can only contain lowercase letters, numbers or underscores (_).


```js
bluemix_containers.registry.namespaces.namespace.put({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "namespace": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * namespace **required** `string`: The name for your namespace to create your private Docker images registry in Bluemix. You cannot change the name afterward. The namespace can be 4-30 characters long, must start with at least one letter or number, and can only contain lowercase letters, numbers or underscores (_). You can test the availability of your namespace by calling the `GET /registry/namespaces/<namespace>` endpoint. When a HTTP code `404 Not Found` is returned, the namespace is available in Bluemix. 

#### Output
* output [Namespace](#namespace)

### tlskey.get
This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.


```js
bluemix_containers.tlskey.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [Certificate](#certificate)

### tlskey.refresh.put
This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).


```js
bluemix_containers.tlskey.refresh.put({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token. 
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output [CertificateRefresh](#certificaterefresh)

### volumes.create.post
This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS).

 After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints.

 Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.


```js
bluemix_containers.volumes.create.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the volume. The name must be unique for a space and can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
  * fsName `string`: The name of the file share that the volume is hosted on. File shares can have different storage sizes and IOPS based on the required workload. If this field is left blank, the volume is hosted on the default file share.

#### Output
* output [Volume](#volume)

### volumes.fs.create.post
This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`).

 A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.

 As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost.

The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.


```js
bluemix_containers.volumes.fs.create.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "FileshareParam": {
    "fsName": "",
    "fsSize": 0,
    "fsIOPS": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * FileshareParam **required** [FileshareParam](#fileshareparam)

#### Output
*Output schema unknown*

### volumes.fs.flavors.json.get
This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).


```js
bluemix_containers.volumes.fs.flavors.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output `array`
  * items `integer`

### volumes.fs.json.get
This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).


```js
bluemix_containers.volumes.fs.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output `array`
  * items [Fileshare](#fileshare)

### volumes.fs.name.delete
This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).

 Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint.

 **Note:** To delete a file share you must have been granted organization developer rights.


```js
bluemix_containers.volumes.fs.name.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the file share that you want to delete. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` API endpoint to retrieve a list of available file shares in your space.

#### Output
*Output schema unknown*

### volumes.fs.name.json.get
This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).


```js
bluemix_containers.volumes.fs.name.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the file share that you want to inspect. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` endpoint to retrieve a list of available file shares in your space.

#### Output
* output `array`
  * items [GetFileshareDetails](#getfilesharedetails)

### volumes.json.get
This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).


```js
bluemix_containers.volumes.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

#### Output
* output `array`
  * items [Volume](#volume)

### volumes.name.delete
Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 


```js
bluemix_containers.volumes.name.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the volume that you want to delete. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.

#### Output
*Output schema unknown*

### volumes.name.post
This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.


```js
bluemix_containers.volumes.name.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": "",
  "volumeParam": null
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the volume that you want to share with another space in your organization.
  * volumeParam **required** [UpdateVolume](#updatevolume)

#### Output
* output [Volume](#volume)

### volumes.name.json.get
Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).


```js
bluemix_containers.volumes.name.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Auth-Token **required** `string`: The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
  * X-Auth-Project-Id **required** `string`: The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
  * name **required** `string`: The name of the volume, for which you want to retrieve detailed information. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.

#### Output
* output [Volume](#volume)



## Definitions

### Binding
* Binding `object`
  * ContainerId `string`: Unique identifier representing a container

### Certificate
* Certificate `object`
  * ca_cert **required** `string`: Certificate Authority (CA) certificate including the CA public key.
  * server_cert **required** `string`: Server certificate including the server's public key.
  * user_cert **required** `string`: User certificate including the user's public key.
  * user_key **required** `string`: User's private key.

### CertificateRefresh
* CertificateRefresh `object`
  * ca_cert `string`: Certificate Authority (CA) certificate including the CA public key.
  * reg_host `string`: Full URL to the IBM Bluemix registry.
  * server_cert `string`: Server certificate including the server's public key.
  * user_cert `string`: User certificate including the user's public key.
  * user_key `string`: User's private key.

### Container
* Container `object`
  * Command `string`: The command and arguments that were passed to the container during container creation. This command is executed when the container is started.
  * ContainerState `string`: The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED. 
  * Created `number`: The time when the container was created.
  * Env `array`: A list of all the environment variables of the container.
    * items `string`
  * Group [Group](#group)
  * Id `string`: Unique identifier representing a container.
  * Image `string`: Full path to the container image in your private Bluemix registry.
  * ImageId `string`: Unique identifier representing a container image.
  * Labels `object`: List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair.
  * Memory `integer`: The amount of container memory in Megabyte that was assigned to your container. The memory is counted towards the quota that is allocated for the space.
  * Name `string`: The name of the container. 
  * Names `array`: The name of the container.
    * items `string`
  * NetworkSettings [NetworkSetting](#networksetting)
  * Ports [Port](#port)
  * SizeRootFs `integer`: Total size of all the files in the container, in bytes. 
  * SizeRw `integer`: The size of the files which have been created or changed, if you compare the container to its base image. Just after creation, this should be zero. Ass you modify (or create) files, this size will increase.
  * Started `number`: Time when the container was started.
  * Status `string`: The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED
  * VCPU `integer`: Number of virtual CPUs that are assigned to the container.

### ContainerConfig
* ContainerConfig `object`
  * ArgsEscaped `boolean`
  * AttachStderr `string`: Attaches the container to stderr.
  * AttachStdin `string`: Attaches the container to sdtin.
  * AttachStdout `string`: Attaches the container to stdout.
  * Cmd `array`: The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
    * items `string`
  * Domainname `string`: The domain name to be used for the container.
  * Env `array`: A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
    * items `string`
  * ExposedPorts `array`: List of public ports that were exposed during container creation. 
    * items `string`
  * Hostname `string`: The host name to be used for the container.
  * Image `string`: Full path to the image that the container is based on in your private Bluemix registry.
  * ImageArchitecture `string`: The hardware architecture the image is based on. It can either be 'amd64' indicating an Intel-based architecture, or 'ppc64le' representing a Power-based architecture.
  * Labels `array`: List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair.
    * items `string`
  * Memory `integer`: The amount of container memory that is assigned to the container in Megabyte.
  * MemorySwap `string`: The total container memory limit (memory + swap)
  * OpenStdin `string`: When set to true, it opens stdin. 
  * PortSpecs `string`: Not supported by IBM Containers, empty string.
  * StdinOnce `string`: When set to true it closes stdin after the attached client disconnects.
  * Tty `string`: When set to true, attach standard streams to a tty, including stdin if it is not closed.
  * User `string`: User to be used inside the container.
  * VCPU `integer`: Number of virtual CPUs that are assigned to the container.
  * VolumesFrom `string`: List of volumes to inherit from another container. This feature is not supported in IBM Containers.
  * WorkingDir `string`: The working directory inside the container where specified commands are executed. 

### ContainerId
* ContainerId `object`
  * Id `string`: Unique ID representing a container.
  * flavor_id `integer`: The ID of the container size.
  * mem `integer`: The amount of container memory that has been assigned to the container. If the container memory was not specified in the API request, a container with 64 Megabyte container memory is created by default.
  * vcpu `integer`: Number of virtual CPUs that are assigned to the container.

### ContainerInfo
* ContainerInfo `object`
  * BluemixApp `string`: The name of the Cloud Foundry app that was bound to the container during creation.
  * BluemixServices `string`: The name of the Bluemix service instance that was bound to the container during creation.
  * Config [ContainerConfig](#containerconfig)
  * ContainerState `string`: The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
  * Created `string`: The date and time the container was created.
  * Group [Group](#group)
  * HostConfig [HostConfig](#hostconfig)
  * HostId `string`: The ID representing the physical compute host.
  * Human_Id `string`: The name of the container. 
  * Id `string`: Unique identifier representing a container.
  * Image `string`: Unique identifier representing a container image.
  * Mounts `array`: A list of volumes that are mounted to the container.
    * items `string`
  * Name `string`: The name of the container.
  * NetworkSettings [NetworkSetting](#networksetting)
  * Path `string`: The environment variable indicating the binary location.
  * ResolveConfPath `string`: Path to the resolve.conf file inside the container. The resolve.conf file is used to resolve the DNS servers.
  * State [ContainerState](#containerstate)
  * Volumes [Volume](#volume)
  * VolumesRW `array`: LIst of volumes that is mounted to the container.
    * items `string`

### ContainerState
* ContainerState `object`
  * ExitCode `string`: The exit code indicating the root cause of why the container exited. Review the Docker API documentation to find a list of exit codes and their meaning. 
  * FinishedAt `string`: Time when the container stopped.
  * Ghost `string`: Not supported by IBM Containers, empty string
  * Pid `integer`: The process ID on the compute host that runs the container process.
  * Running `boolean`: If set to true, the container is in a RUNNING state. If set to false, the container has stopped or crashed. 
  * StartedAt `string`: Time when the container started.
  * Status `string`: The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.

### ContainersGroupsGetListItem
* ContainersGroupsGetListItem `object`
  * Creation_time `string`: Time when the container group is created.
  * Id `string`: Unique identifier of the container group.
  * Name `string`: Name of the container group.
  * Port `integer`: The port number that is exposed to the public during container group creation.
  * Routes `array`: The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
    * items `string`
  * Status `string`: Current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE)
  * Updated_time `string`: Time when the container group is changed and updated.

### ContainersGroupsNameOrIdGetDetails
* ContainersGroupsNameOrIdGetDetails `object`
  * Anti-affinity `string`: If set to `true` the container instances in the group are spread across separate physical compute nodes, which reduces the likelihood of containers crashing due to hardware failures. If set to `false`, the container instances in the group share the same physical compute node. 
  * Autorecovery `string`: Can be either true or false. If set to true, the Autorecovery mode is enabled for your container group. In case a container instance crashes or stops, this instance is removed and a new one is automatically recreated. If set to false, the Autorecovery mode is disabled. In case a container instances crashes or stops, it is not automatically recreated by IBM Containers.
  * AvailabilityZone `string`: Current IBM Containers availability zone on Openstack. 
  * Cmd `array`: The Docker command that was specified to be run when the container instances are started. 
    * items `string`
  * Creation_time `string`: Timestamp when the container group was created.
  * Env `array`: The list of environmental variables that were defined for the container group. Each environment variable consists of a unique key and a value.
    * items `string`
  * Id `string`: Unique identifier representing a specific container group.
  * Image `string`: The unique ID of the container image your container group instances are based on.
  * ImageName `string`: The full path to the container image in your private Bluemix repository.
  * Memory `integer`: The size of each container instance that runs in the container group in MegaByte.
  * Name `string`: The name of the container group.
  * NumberInstances `object`
    * CurrentSize `integer`: The current number of container instances that are running in your container group. 
    * Desired `integer`: The number of container instances that you require.
    * Max `integer`: The maximum number of container instance that you want to run in your container group.
    * Min `integer`: The minimum number of container instances that you want to run in your container group.
  * Port `integer`: The public port that has been exposed. If you specified a route, your container group is accessible from the Internet. 
  * Route_Status `object`
    * in_progress `boolean`: Can be either true or false. If set to true, then the route is in the process of being mapped to the container group and set up in the GoRouter. Is set to false, then the set up of the route is completed.
    * message `string`: Info message for the user.
    * successful `boolean`: Can be either true or false. If set to true, then the route is successfully registrered with the GoRouter. If set to false, then the route registration has not yet finished yet or could not be completed without errors.
  * Routes `array`: The public route that is mapped to the container group. When you expose a public port, you can use the route to access your container group from the Internet.
    * items `string`
  * Status `string`: The current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE)
  * UpdatedTime `string`: Timestamp when the container group was updated. If the container group was not updated before, `null` is returned.
  * Volumes `array`: List of volumes to be associated with the container, in the format of volume name:path:mode where mode can be ro or rw.
    * items `string`

### ContainersGroupsNameOrIdMaproutePostInfo
* ContainersGroupsNameOrIdMaproutePostInfo
  * Id `string`: Unique identifier representing a specific container group.
  * Warnings `array`: Warning information (Initial warning is empty).
    * items `string`

### ContainersGroupsNameOrIdPatchUpdatedInfo
* ContainersGroupsNameOrIdPatchUpdatedInfo `object`
  * Autorecovery `string`: Enable or disable the Autorecovery mode for your container group. To enable it, enter true. If you want to disable it, enter false. Note: You can only enable/ disable Autorecovery mode if your container group was initially created with Autorecovery mode enabled.
  * Environment `array`: A list of environment variables that you want to add to your container group. Every environment variable needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,)
    * items `string`
  * NumberInstances `object`
    * Desired `integer`: The number of container instances that you require.
    * Max `integer`: The maximum number of container instances that you want to run in your container group.
    * Min `integer`: The minimum number of container instances that you want to run in your container group.

### ContainersGroupsPostCreatedInfo
* ContainersGroupsPostCreatedInfo `object`
  * Id `string`: Unique identifier representing a specific container group.
  * Warnings `array`: Warning information (Initial warning is empty).
    * items `string`

### ContainersGroupsPostRequiredAttributes
* ContainersGroupsPostRequiredAttributes `object`
  * Autorecovery `string`: (Optional) Enable the Auto-recovery mode for your container group. If set to true, IBM Containers checks the health of each instance with an HTTP request to the port that is assigned. If the health check does not receive a TCP response from a container instance in two subsequent 90-second intervals, the instance is removed and replaced with a new instance. If set to false and container instances crash, they are not recovered by IBM Containers.
  * BluemixApp `string`: (Optional) The name of the Cloud Foundry app that you created in your organization space.
  * Cmd `array`: (Optional) Docker command that is passed to the container group to be run when the container instances are started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash.
    * items `string`
  * Env `array`: (Optional) List of environmental variables. Every environment variable that is listed here needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,).
    * items `string`
  * Image **required** `string`: (Required) The full path to your private Bluemix repository. If you want to use an image in your private Bluemix repository, specify the image in the following format: registry.ng.bluemix.net/NAMESPACE/IMAGE. If you want to use an IBM Containers provided image, do not include your organization's namespace. Specify the image in the following format: registry.ng.bluemix.net/IMAGE
  * Memory `integer`: (Optional) The size of each container instance in the container group. The size of each container instance in the group. Choose one of the following sizes and enter the size in MegaBytes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB). If you do not specify a size, all container instances in this group are created with 256 MB.
  * Name **required** `string`: (Required) Name of the container group that you want to create. The name needs to be unique in your organization space and must start with a letter. Then, you can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
  * NumberInstances `object`
    * Desired `integer`: (Optional) The number of container instances that you require.
    * Max `integer`: (Optional) The maximum number of container instances that you want to run in your container group.
    * Min `integer`: (Optional) The minimum number of container instances that need to run in your container group.
  * Port `integer`: (Optional) Expose a port for HTTP traffic to make your container group available from the Internet. Every container instance that is started for this group, listens on this port. Container groups cannot expose multiple ports. Note: You need to expose a port, when "Autorecovery" is set to true.
  * Route `object`
    * domain `string`: The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration.
    * host `string`: The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net. 
  * Volumes `array`: (Optional) List of volumes to be mounted to the container instances of your container group. You need to create the volume first by using the cf ic volume-create command before you can mount a volume to a container group. When you specify a volume, use the following format: NAME:PATH:MODE. For NAME, use either the name or ID of the volume. For the PATH, enter the absolute path to the volume directory in the container. For MODE, enter either ro (read-only) or rw (read-write).
    * items `string`

### ContainersQuotaInfo
* ContainersQuotaInfo `object`
  * account_type `string`: The Bluemix account type indicating the quota limits and how the organization is billed.
  * country_code `string`: The country in which the account was opened.
  * org_quota `object`
    * floating_ips_max `string`: The number of public IP addresses that can be assigned across all spaces of the organization.
    * floating_ips_space_default `string`: The number of public IP addresses that are required for one space. If the number of public IP addresses is not available, then a new space cannot be created to be used with IBM Containers. 
    * floating_ips_usage `integer`: The number of public IP addresses that are currently assigned to the spaces of the organization.
    * ram_max `integer`: The maximum amount of container memory on the compute host that can be assigned across the spaces of the organization.
    * ram_space_default `integer`: The amount of container memory that is required to be used for one space. If this amount is not available, then a new space cannot be created to be used with IBM Containers. 
    * ram_usage `integer`: The amount of container memory that is currently used across all spaces of the organization.
    * subnet_usage `integer`: The number of subnets that were created across all spaces of the organization.
    * subnets_default `integer`: The number of subnets that is required to create a new space. If this number is not available, then a new space cannot be created to be used with IBM Containers.
    * subnets_max `integer`: The maximum number of container private subnet that can be created across all spaces of the organization.
  * space_quota `object`
    * floating_ips_max `string`: The maximum number of public IP addresses that can be allocated to a space.
    * ram_max `integer`: The maximum amount of container memory that can be shared across all containers that are created in a space.
    * subnets_max `integer`: The maximum number of private subnets that can be created in one space.

### ContainersQuotaList
* ContainersQuotaList `object`
  * floating_ips `integer`: The new number of public IP addresses that you want to assign to your space.
  * ram `integer`: The amount of container memory that you want to assign to your space.

### ContainersUsageInfo
* ContainersUsageInfo `object`
  * AvailableSizes `array`
    * items [ContainersUsageInfoAvailableSizes](#containersusageinfoavailablesizes)
  * Environment `string`: The IBM Containers machine where the space is located
  * Limits `object`
    * containers `integer`: The number of containers that can be created in the space. If -1 is returned, then an unlimited number of containers can be created. The number however is counted towards and limited by the container memory. 
    * floating_ips `integer`: The number of public IP addresses that can be allocated to the space.
    * memory_MB `integer`: The amount of container memory that can be used in the space in megabyte.
    * vcpu `integer`: The number of virtual CPUs that are assigned to the space.
  * Usage `object`
    * containers `integer`: The number of containers that were created in the space. All containers that count towards the quota limit are listed independent on their current state.
    * floating_ips `integer`: The number of public IP addresses that are allocated to the space.
    * floating_ips_bound `integer`: The number of public IP addresses that are bound to a container in the space.
    * images `integer`: The number of private images that were added to the private Bluemix registry.
    * memory_MB `integer`: The amount of container memory that is already used by the containers that were created in the space in megabyte.
    * running `integer`: The number of containers that are currently in a running state.
    * vcpu `integer`: The number of virtual CPUs that are allocated to the space.

### ContainersUsageInfoAvailableSizes
* ContainersUsageInfoAvailableSizes `object`
  * disk `integer`: The amount of disk space on the compute host that is assigned to the container in gigabyte
  * id `string`: The ID of the container size.
  * memory_MB `integer`: The amount of container memory on the compute host that is assigned to the container in megabyte.
  * name `string`: The IBM Containers name of the container size.
  * vcpus `integer`: The number of virtual CPUs that can be assigned to the container.

### ContainersVersionGetInfo
* ContainersVersionGetInfo `object`
  * ApiVersion `string`: The current API version.
  * Arch `string`: The current Arch version.
  * BuildDetail `object`
    * api `string`: The build ID of the current API version.
    * automount `string`: The build ID of the current automount microservice version.
    * grupdater `string`: The build ID of the current grupdater microservice version.
    * harmony `string`: The build ID of the current harmony microservice version.
    * health-monitor `string`: The build ID of the current health-monitor microservice version.
    * hijack `string`: The build ID of the current hijack microservice version.
    * ldap `string`: The build ID of the current ldap microservice version.
    * logmet `string`: The build ID of the current logmet microservice version.
    * lumberjack `string`: The build ID of the current lumberjack microservice version.
    * redis-cluster `string`: The build ID of the current redis-cluster version.
    * sgwatcher `string`: The build ID of the current sgwatcher microservice version.
    * volmgr `string`: The build ID of the current volumes manager microservice version.
  * BuildID `string`
  * BuildNumber `string`
  * BuildTime `string`: Timestamp when the API version and all attached microservices were built.
  * GitCommit `string`
  * GoVersion `string`: The latest Go version.
  * KernelVersion `string`: The latest Kernel version.
  * Os `string`: Bluemix Containers
  * Version `string`: The latest API version.

### CreateContainer
* CreateContainer `object`
  * BluemixApp `string`: The name of the Cloud Foundry app that you want to bind to your container. The Cloud Foundry app must be created in the same space where you want to create your container.
  * Cmd `array`: The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
    * items `string`
  * Cpuset `string`: Pins the container processes to a specific CPU core on the compute host. For example: 0 means that processes are executed on the first core only.
  * Env `array`: A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
    * items `string`
  * ExposedPorts `array`: All public ports that need to be exposed for the container, so the container can be accessed from the Internet.
    * items `string`
  * HostConfig [HostConfig](#hostconfig)
  * Image **required** `string`: Full path to the image in your private Bluemix registry in the format `registry.ng.bluemix.net/namespace/image`. 
  * Memory `integer`: The container memory that is set for the container in Megabyte. Choose one of the following sizes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB).
  * NumberCpus `integer`: Number of virtual CPUs that are allocated to the container.
  * Volumes `string`: Mount a volume to a container by specifying the details in the following format: `VOLUME_NAME:/DIRECTORY_PATH[:ro]`. Example: testvolume:/volumedata/temp:rw. By default, all volumes will be set up with read-write access inside the container (rw). If you wish to set up your volume with read-only access, enter `ro`.  Note: To mount a volume to a container, you must create the volume in your space first by using the `cf ic volume-create` command, or calling the `POST /volumes/create endpoint`.

### Fileshare
* Fileshare `object`
  * capacity `integer`: The size of the file share in gigabyte.
  * created_date `string`: The timestamp when the file share was created.
  * fsName `string`: The name of the file share.
  * hostPath `string`: The path to the volume on the host node.
  * iops `number`: The number of Input/Output operations per second. 
  * iopsTotal `integer`: The total number of IOPS considering the size of the file share. The size of your file share in gigabyte multiplied with the number of IOPS indicates the total number of IOPS. The higher the number of IOPS the faster you can read from and write to your volumes.
  * orderId `string`: The ID received from softlayer when the file share was ordered to be set up in softlayer.
  * provider `string`: The provider of the file share.
  * spaceGuid `string`: The unique ID representing a Bluemix space in which the file share was created.
  * state `string`: The current state of the file share. When the file share is ready to be used, this attribute is set to `READY`.
  * updated_date `string`: The timestamp when the file share last was updated.

### FileshareParam
* FileshareParam `object`
  * fsIOPS **required** `number`: The number of input/output transactions per second. Available values are 0.25, 2 or 4.
  * fsName **required** `string`: The name of the new file share that you want to create. The name can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
  * fsSize **required** `integer`: The size of the file share in gigabyte. Run `cf ic volume fs-flavor-list` or call the GET /volumes/fs/flavors/json API endpoint to retrieve a list of available file share sizes. 

### FileshareUsage
* FileshareUsage `object`
  * available_space `string`: The amount of space that is available in the file share in gigabytes.
  * total_space `string`: The total size of the file share in gigabytes.
  * used_space `string`: The amount of space that is currently used from the file share. 
  * used_space_percentage `string`: The amount of space that is currently used from the file share in percentage.

### FloatingIP
* FloatingIP `object`
  * Bindings [Binding](#binding)
  * IpAddress `string`: The public IP address that is allocated to the organization space.

### GetFileshareDetails
* GetFileshareDetails `object`
  * fs `array`
    * items [Fileshare](#fileshare)
  * fsUsage `array`
    * items [FileshareUsage](#fileshareusage)
  * volnames `array`: A list of volume names that are mounted to the file share.
    * items `string`

### Group
* Group `object`
  * Id `string`: Unique identifier representing a group.
  * Name `string`: Name of the group.

### HostConfig
* HostConfig `object`
  * Binds `array`: A list of volumes to be bound to the container. Each volume must be listed in the following format: VOLNAME:/CONTAINER_PATH:rw [ro]. 
    * items `string`
  * ExtraHosts `array`: A list of hostnames/IP mappings to be added to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
    * items `string`
  * Links `array`: A list of containers that need to be linked.
    * items `string`
  * PortBindings `array`: The container ports that you want to expose to the public. Ports need to be specified in the form of &lt;port&gt;/&lt;protocol&gt;: [{ "HostIp": "&lt;IP&gt;", "HostPort": "&lt;port&gt;" }]
    * items `string`

### ImageDetail
* ImageDetail `object`
  * Architecture `string`: The hardware architecture for which the image was built for. The architecture can either be Intel (amd64) or Power (ppc64le). 
  * Config `object`
    * ArgsEscaped `boolean`
    * AttachStderr `boolean`: Attaches the container to stderr.
    * AttachStdin `boolean`: Attaches the container to stdin.
    * AttachStdout `boolean`: Attaches the container to stdout.
    * Cmd `array`: The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
      * items `string`
    * Domainmame `string`: The domain name to be used for the container.
    * Entrypoint `string`: The entrypoint specifies a command that will always be executed when the container starts.
    * Env `array`: A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value.
      * items `string`
    * ExposedPorts `array`: A list of all udp and tcp ports that have been publicly exposed during the container creation.
      * items `string`
    * Hostname `string`: The host name of the container provided by Openstack. 
    * Image `string`: The unique ID of the image. 
    * Labels `array`: List of custom metadata that was added to the image. Labels serve a wide range of uses, such as adding notes or license requirements to an image. Every label is a key/ value pair.
      * items `string`
    * OnBuild `array`: ???
      * items `string`
    * OpenStdin `boolean`: When set to true, it opens stdin.
    * StdinOnce `boolean`: When set to true it closes stdin after the attached client disconnects.
    * Tty `boolean`: When set to true, attach standard streams to a tty, including stdin if it is not closed.
    * User `string`: The user to be used inside the container.
    * Volumes `string`: Docker specific. Not supported by IBM Containers. The path to the volume that is created when deploying a container from the image. To use a volume in IBM Containers, you must first create a volume and then mount it to your container during creation.
    * WorkingDir `string`: The working directory inside the container where specified commands are executed.
  * Container `string`: ???
  * ContainerConfig [ContainerConfig](#containerconfig)
  * Created `string`: The time when the image was created.
  * DockerVersion `string`: ???
  * Id `string`: Unique ID of the image that you inspected. 
  * Os `string`: ???
  * Parent `string`: The ID of the parent image that was used to build this image.
  * Size `integer`: The real size of the image. 
  * Tag `string`: The version of the image 
  * Throwaway `string`: ???
  * VirtualSize `integer`: The virtual size of the image.

### ImageInfo
* ImageInfo `object`
  * Created `number`: The time when your container image was created. 
  * Id `string`: The unique identifier representing a container image. 
  * Image `string`: The name of your container image.
  * RepoTags `array`: The full path to the private Bluemix registry where the image is stored including the registry name, the organization namespace, and image tag.
    * items `string`
  * Size `integer`: The real size of the container image.
  * VirtualSize `integer`: The virtual size of the container image.

### Namespace
* Namespace `object`
  * namespace `string`: The namespace that is either set for an organization, or a namespace that is not available to be used in Bluemix.

### Network
* Network `object`
  * Aliases `string`: Alternative name of the private container network the container is connected to.
  * EndpointID `string`: Unique ID representing a container.
  * Gateway `string`: The private IP address of the network gateway in IPv4 format.
  * GlobalIPv6Address `string`: Private IP address of the container in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty.
  * GlobalIPv6PrefixLen `integer`: Not supported by IBM Containers, empty string.
  * IPAMConfig `string`: Specific configurations for the network driver.
  * IPPrefixLen `string`: The prefix of the subnet in the private container network. The prefix indicates that 16 bits out of 32 bits are used to address the network. As every IPv4 IP adress consists of 32 bits, the last 16 bits are used to assign private IP addresses to the container. 
  * IPv6Gateway `string`: The private IP address of the network gateway in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty.
  * Links `string`: List of container names that are linked to the container. 
  * MacAddress `string`: The MAC address that is assigned to the container.
  * NetworkID `string`: Unique identifier representing the private container network.

### NetworkSetting
* NetworkSetting `object`
  * Bridge `string`: The name of the private network bridge.
  * Gateway `string`: The IP address of the private network gateway in IPv4 format.
  * IpAddress **required** `string`: The private IP address that is assigned to the container.
  * IpPrefixLen `integer`
  * MacAddress `string`: The MAC address that was assigned to the container. 
  * Network [Network](#network)
  * PortMapping `string`: Specific to Docker. List of private container ports and their mapping to the host ports. In IBM Containers all container ports are exposed on the host by default. This attribute is returned as an empty list. 
  * Ports `array`: All ports of the container that were exposed to the public.
    * items `string`
  * PublicIpAddress **required** `string`: The Public IP address that was bound to the container.

### Port
* Port `object`
  * IP `string`: Public IP address that was bound to the container in IPv4 format.
  * PrivatePort `string`: The private port of the container on which the container listens during run time.
  * PublicPort `string`: The public port that was exposed during container creation. When a public port is exposed, a public IP address can be bound to the container which makes the container accessible from the internet.
  * Type `string`: The type of IP protocol that is used for the port. It can either be `udp` or `tcp`.  

### Route
* Route `object`: The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
  * domain `string`: The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration.
  * host `string`: The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net.

### UpdateVolume
* UpdateVolume `object`
  * addSpaces `array`: The name or ID of the space where you want to provision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID. 
    * items `string`
  * removeSpaces `array`: The name or ID of the space from which you want to unprovision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID.
    * items `string`

### Volume
* Volume `object`
  * fsID `string`:  Unique identifier representing the file share on which the volume is hosted. 
  * hostPath `string`: Full path to the mounted volume inside the container.
  * otherSpaceVisibility `array`: List of space IDs in which the volume is visible and can be used by all the single containers and container groups. 
    * items `string`
  * spaceGuid `string`: Unique identifier representing the space where the volume got created.
  * volName `string`: The name of the volume.

### getContainerStatus
* getContainerStatus `object`
  * NameOrId **required** `string`: The unique identifier of the container. 
  * Status `string`: The current status of the container. The status can either be a transient one, such as BUILDING or NETWORKING, or a non-transient one, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. 
  * Transient `boolean`: When set to true, the current container state is temporary and will change soon. An example for a transient state is the BUILDING state. A container that is created will be set to the BUILDING state until all container layers are created and the container is started. When set to false, the container state is permanent, such as CRASHED.


