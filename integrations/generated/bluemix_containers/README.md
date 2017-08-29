# @datafire/bluemix_containers

Client library for IBM Containers

## Installation and Usage
```bash
npm install --save datafire @datafire/bluemix_containers
```

```js
let datafire = require('datafire');
let bluemix_containers = require('@datafire/bluemix_containers').create();

bluemix_containers.build.post({}).then(data => {
  console.log(data);
})
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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* t (string) **required** - Tag the image with the full path to your private Bluemix registry in the following format: `t=registry.ng.bluemix.net/<namespace>/<image_name>:<tag>`. This path is used to push the image to the private Bluemix registry after it is built.
* q (boolean) - You can choose whether or not to show the verbose build output to review every step during the container image build. If you set the query parameter to `q=false`, `q=False`, or `q=0`, the verbose build output is suppressed. To show the verbose build output, enter `q=true`, `q=True`, or `q=1`.
* nocache (boolean) - If you set the query parameter to `nocache=true`, `nocache=True`, or `nocache=1`, the cache will not be used to build your image. To use the cache, enter `nocache=false`, `nocache=False`, or `nocache=0`.
* pull (boolean) - If set to pull=true, pull=True, or pull=1, then a newer version of the image is always attempted to be pulled even though an older version of the image exists locally. If set to pull=false, pull=False, or pull=0, then the local image will be used if one exists.
* file (undefined) **required**

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* Param (undefined) **required**
* name (string) - Choose a name for your container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.

### containers.floating_ips.get
This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).


```js
bluemix_containers.containers.floating_ips.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* all (boolean) - If this option is set to `all=1`, `all=True`, or `all=true`, all public IP addresses that are allocated to a space are returned. If this option is set to `all=0`, `all=False`, or `all=false`, only available public IP addresses that are allocated but not bound to a container are returned. By default, only available public IP addresses are returned.

### containers.floating_ips.request.post
This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.


```js
bluemix_containers.containers.floating_ips.request.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### containers.floating_ips.ip.release.post
This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.


```js
bluemix_containers.containers.floating_ips.ip.release.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "ip": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* ip (string) **required** - The public IP address that you want to release. Run `cf ic ip list` or call the `GET /containers/floating-ips?all=true` endpoint to review all public IP address that are allocated to your space. After a public IP address is released, it will no longer be allocated to your space.

### containers.groups.get
This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).


```js
bluemix_containers.containers.groups.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* RequiredAttributes (undefined) **required**

### containers.groups.name_or_id.delete
Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.


```js
bluemix_containers.containers.groups.name_or_id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or unique ID of the container group that you want to delete. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
* force (string) - If you want to force the deletion of a container group that has running container instances, use the force option. This parameter needs to be set to either true or false. If set to `force=true`, `force=True`, or `force=1`, running container instances are deleted. If set to `force=false`, `force=False`, or `force=0`, running container instances are not deleted. If you do not specify this paramater, running container instances are not deleted by default. 

### containers.groups.name_or_id.get
This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).


```js
bluemix_containers.containers.groups.name_or_id.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or unique ID of the container group that you want to inspect. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or unique ID of the container group that you want to update.
* Updates (undefined) **required**

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or unique ID of the container group to which you want to map a public route. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
* Route (object) **required** - The public route that is mapped to the container group. You can use this route to access your container group from the Internet.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or unique ID (UUID) of the container group that you want to inspect.
* Route (object) **required** - The public route that is mapped to the container group. You can use this route to access your container group from the Internet.

### containers.json.get
This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.


```js
bluemix_containers.containers.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* all (string) - By default, the `GET /containers/json` endpoint returns a list of all single containers in a space that are in a running state. To request a list of all containers independent of their current state, set the `all` query parameter to true. Allowed values are: `all=true`, `all=True`, and `all=1`. 
* filters (string) - You can filter your containers by any environment variable key or value that is listed in the `Env` section of your CLI/ API response when you run the `cf ic inspect <container>` command, or call the `GET /containers/{id}/json` endpoint. Your search criteria does not need to be an exact match. It can also be a part of the key or value you are looking for. For example, to filter all containers with an environment variable that contains `id` in one of their environment variables, use `filter=id`.

### containers.messages.get
This endpoint retrieves all IBM Containers system messages for the user.


```js
bluemix_containers.containers.messages.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. To retrieve your space ID, run `cf space <space_name> --guid` and replace `<space_name>` with the name of the space where you want to create or work with your container. 

### containers.quota.get
Retrieve the quota that is assigned to the organization and space.


```js
bluemix_containers.containers.quota.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* ContainersQuotaList (undefined) **required**

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### containers.version.get
This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.


```js
bluemix_containers.containers.version.get(null, context)
```


### containers.id.status.get
This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.


```js
bluemix_containers.containers.id.status.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* id (string) **required** - The unique identifier that represents the container. Run `cf ic ps`, or call the `GET /containers/json` endpoint to retrieve the ID of the container.

### containers.name_or_id.delete
Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.


```js
bluemix_containers.containers.name_or_id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to delete. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
* force (boolean) - Use the `force` query parameter if you want to delete the container independent of their current state. The container does not need to be stopped first. To force the deletion of a container, enter `force=true`, `force=True`, or `force=1`. If you want to delete containers that are in a non-running state only, do either not set this query parameter, or enter `force=false`, `force=False`, or `force=0`.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
* ip (string) **required** - The public IP address that you want to bind to your container. 

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space. 
* ip (string) **required** - The public IP address that you want to unbind from your container. 

### containers.name_or_id.json.get
This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).


```js
bluemix_containers.containers.name_or_id.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The name or ID of the container that you want to inspect. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.

### containers.name_or_id.pause.post
Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).


```js
bluemix_containers.containers.name_or_id.pause.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to pause. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space that are currently in a running state.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to rename. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
* name (string) **required** - The new name for the container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.

### containers.name_or_id.restart.post
Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).


```js
bluemix_containers.containers.name_or_id.restart.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to restart. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space.
* t (integer) - The number of seconds to wait before the container is restarted. For example, if you want a container to restart after 10 seconds, enter `t=10`.

### containers.name_or_id.start.post
Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).


```js
bluemix_containers.containers.name_or_id.start.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to start. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review the containers in your space that are currently not in a running state.

### containers.name_or_id.stop.post
Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).


```js
bluemix_containers.containers.name_or_id.stop.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to stop. Run `cf ic ps` or call the `GET /containers/json` endpoint to review the containers in your space that are currently in a running state.
* t (integer) - The number of seconds to wait before the container is stopped. For example, if you want a container to stop after 10 seconds, enter `t=10`.

### containers.name_or_id.unpause.post
Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).


```js
bluemix_containers.containers.name_or_id.unpause.post({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The unique identifier or name of the container that you want to unpause. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.

### images.json.get
This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.


```js
bluemix_containers.images.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### images.id.delete
Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).


```js
bluemix_containers.images.id.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* id (string) **required** - The unique identifier representing a Docker image. Run `cf ic images`, or call the `GET /images/json` endpoint to review the Docker images that are available in your private Bluemix registry.

### images.name_or_id.json.get
This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).


```js
bluemix_containers.images.name_or_id.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name_or_id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name_or_id (string) **required** - The full private Bluemix registry path to your image or the unique ID of the image that you want to inspect. Run `cf ic images` or call the `GET /images/json` endpoint to review the images in your private Bluemix registry. 

### registry.namespaces.get
This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).


```js
bluemix_containers.registry.namespaces.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* namespace (string) **required** - The name of the namespace that you would like to use for your organization and for which you would like to check availability in Bluemix.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* namespace (string) **required** - The name for your namespace to create your private Docker images registry in Bluemix. You cannot change the name afterward. The namespace can be 4-30 characters long, must start with at least one letter or number, and can only contain lowercase letters, numbers or underscores (_). You can test the availability of your namespace by calling the `GET /registry/namespaces/<namespace>` endpoint. When a HTTP code `404 Not Found` is returned, the namespace is available in Bluemix. 

### tlskey.get
This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.


```js
bluemix_containers.tlskey.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### tlskey.refresh.put
This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).


```js
bluemix_containers.tlskey.refresh.put({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token. 
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the volume. The name must be unique for a space and can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
* fsName (string) - The name of the file share that the volume is hosted on. File shares can have different storage sizes and IOPS based on the required workload. If this field is left blank, the volume is hosted on the default file share.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* FileshareParam (object) **required**

### volumes.fs.flavors.json.get
This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).


```js
bluemix_containers.volumes.fs.flavors.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### volumes.fs.json.get
This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).


```js
bluemix_containers.volumes.fs.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the file share that you want to delete. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` API endpoint to retrieve a list of available file shares in your space.

### volumes.fs.name.json.get
This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).


```js
bluemix_containers.volumes.fs.name.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the file share that you want to inspect. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` endpoint to retrieve a list of available file shares in your space.

### volumes.json.get
This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).


```js
bluemix_containers.volumes.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.

### volumes.name.delete
Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 


```js
bluemix_containers.volumes.name.delete({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the volume that you want to delete. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.

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

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the volume that you want to share with another space in your organization.
* volumeParam (undefined) **required**

### volumes.name.json.get
Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).


```js
bluemix_containers.volumes.name.json.get({
  "X-Auth-Token": "",
  "X-Auth-Project-Id": "",
  "name": ""
}, context)
```

#### Parameters
* X-Auth-Token (string) **required** - The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
* X-Auth-Project-Id (string) **required** - The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
* name (string) **required** - The name of the volume, for which you want to retrieve detailed information. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.

