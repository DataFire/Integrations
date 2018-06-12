# @datafire/docker_engine

Client library for Docker Engine

## Installation and Usage
```bash
npm install --save @datafire/docker_engine
```
```js
let docker_engine = require('@datafire/docker_engine').create();

docker_engine.VolumePrune({}).then(data => {
  console.log(data);
});
```

## Description

The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.

Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.

# Errors

The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:

```
{
  "message": "page not found"
}
```

# Versioning

The API is usually changed in each release of Docker, so API calls are versioned to ensure that clients don't break.

For Docker Engine 17.09, the API version is 1.32. To lock to this version, you prefix the URL with `/v1.32`. For example, calling `/info` is the same as calling `/v1.32/info`.

Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.

In previous versions of Docker, it was possible to access the API without providing a version. This behaviour is now deprecated will be removed in a future version of Docker.

The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer Docker daemons.

This documentation is for version 1.33 of the API. Use this table to find documentation for previous versions of the API:

Docker version  | API version | Changes
----------------|-------------|---------
17.09.x | [1.31](https://docs.docker.com/engine/api/v1.32/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-32-api-changes)
17.07.x | [1.31](https://docs.docker.com/engine/api/v1.31/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-31-api-changes)
17.06.x | [1.30](https://docs.docker.com/engine/api/v1.30/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-30-api-changes)
17.05.x | [1.29](https://docs.docker.com/engine/api/v1.29/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-29-api-changes)
17.04.x | [1.28](https://docs.docker.com/engine/api/v1.28/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-28-api-changes)
17.03.1 | [1.27](https://docs.docker.com/engine/api/v1.27/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-27-api-changes)
1.13.1 & 17.03.0 | [1.26](https://docs.docker.com/engine/api/v1.26/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-26-api-changes)
1.13.0 | [1.25](https://docs.docker.com/engine/api/v1.25/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-25-api-changes)
1.12.x | [1.24](https://docs.docker.com/engine/api/v1.24/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-24-api-changes)
1.11.x | [1.23](https://docs.docker.com/engine/api/v1.23/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-23-api-changes)
1.10.x | [1.22](https://docs.docker.com/engine/api/v1.22/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-22-api-changes)
1.9.x | [1.21](https://docs.docker.com/engine/api/v1.21/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-21-api-changes)
1.8.x | [1.20](https://docs.docker.com/engine/api/v1.20/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-20-api-changes)
1.7.x | [1.19](https://docs.docker.com/engine/api/v1.19/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-19-api-changes)
1.6.x | [1.18](https://docs.docker.com/engine/api/v1.18/) | [API changes](https://docs.docker.com/engine/api/version-history/#v1-18-api-changes)

# Authentication

Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a Base64 encoded (JSON) string with the following structure:

```
{
  "username": "string",
  "password": "string",
  "email": "string",
  "serveraddress": "string"
}
```

The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.

If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:

```
{
  "identitytoken": "9cbaf023786cd7..."
}
```


## Actions

### SystemPing
This is a dummy endpoint you can use to test if the server is accessible.


```js
docker_engine.SystemPing(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### SystemAuth
Validate credentials for a registry and, if available, get an identity token for accessing the registry without password.


```js
docker_engine.SystemAuth({}, context)
```

#### Input
* input `object`
  * authConfig [AuthConfig](#authconfig)

#### Output
* output `object`
  * IdentityToken `string`: An opaque token used to authenticate a user after a successful login
  * Status **required** `string`: The status of the authentication

### ImageBuild
Build an image from a tar archive with a `Dockerfile` in it.

The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).

The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.

The build is canceled if the client drops the connection by quitting or being killed.



```js
docker_engine.ImageBuild({}, context)
```

#### Input
* input `object`
  * inputStream `string`
  * dockerfile `string`: Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
  * t `string`: A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
  * extrahosts `string`: Extra hosts to add to /etc/hosts
  * remote `string`: A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
  * q `boolean`: Suppress verbose build output.
  * nocache `boolean`: Do not use the cache when building the image.
  * cachefrom `string`: JSON array of images used for build cache resolution.
  * pull `string`: Attempt to pull the image even if an older image exists locally.
  * rm `boolean`: Remove intermediate containers after a successful build.
  * forcerm `boolean`: Always remove intermediate containers, even upon failure.
  * memory `integer`: Set memory limit for build.
  * memswap `integer`: Total memory (memory + swap). Set as `-1` to disable swap.
  * cpushares `integer`: CPU shares (relative weight).
  * cpusetcpus `string`: CPUs in which to allow execution (e.g., `0-3`, `0,1`).
  * cpuperiod `integer`: The length of a CPU period in microseconds.
  * cpuquota `integer`: Microseconds of CPU time that the container can get in a CPU period.
  * buildargs `integer`: JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values. [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)
  * shmsize `integer`: Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
  * squash `boolean`: Squash the resulting images layers into a single layer. *(Experimental release only.)*
  * labels `string`: Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
  * networkmode `string`: Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.
  * Content-type `string` (values: application/x-tar)
  * X-Registry-Config `string`: This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.

#### Output
*Output schema unknown*

### BuildPrune
Delete builder cache


```js
docker_engine.BuildPrune(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * SpaceReclaimed `integer`: Disk space reclaimed in bytes

### ImageCommit
Create a new image from a container


```js
docker_engine.ImageCommit({}, context)
```

#### Input
* input `object`
  * containerConfig [ContainerConfig](#containerconfig)
  * container `string`: The ID or name of the container to commit
  * repo `string`: Repository name for the created image
  * tag `string`: Tag name for the create image
  * comment `string`: Commit message
  * author `string`: Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
  * pause `boolean`: Whether to pause the container before committing
  * changes `string`: `Dockerfile` instructions to apply while committing

#### Output
* output [IdResponse](#idresponse)

### ConfigList
List configs


```js
docker_engine.ConfigList({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list. Available filters:

#### Output
* output `array`
  * items [Config](#config)

### ConfigCreate
Create a config


```js
docker_engine.ConfigCreate({}, context)
```

#### Input
* input `object`
  * body
    * Data `string`: Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))
    * Labels `object`: User-defined key/value metadata.
    * Name `string`: User-defined name of the config.

#### Output
* output `object`
  * ID `string`: The ID of the created config.

### ConfigDelete
Delete a config


```js
docker_engine.ConfigDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the config

#### Output
*Output schema unknown*

### ConfigInspect
Inspect a config


```js
docker_engine.ConfigInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the config

#### Output
* output [Config](#config)

### ConfigUpdate
Update a Config


```js
docker_engine.ConfigUpdate({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID or name of the config
  * body [ConfigSpec](#configspec)
  * version **required** `integer`: The version number of the config object being updated. This is required to avoid conflicting writes.

#### Output
*Output schema unknown*

### ContainerCreate
Create a container


```js
docker_engine.ContainerCreate({
  "body": null
}, context)
```

#### Input
* input `object`
  * name `string`: Assign the specified name to the container. Must match `/?[a-zA-Z0-9_-]+`.
  * body **required**
    * ArgsEscaped `boolean`: Command is already escaped (Windows only)
    * AttachStderr `boolean`: Whether to attach to `stderr`.
    * AttachStdin `boolean`: Whether to attach to `stdin`.
    * AttachStdout `boolean`: Whether to attach to `stdout`.
    * Cmd `array`, `string`: Command to run specified as a string or an array of strings.
      * items `string`
    * Domainname `string`: The domain name to use for the container.
    * Entrypoint `array`, `string`: The entry point for the container as a string or an array of strings.
      * items `string`
    * Env `array`: A list of environment variables to set inside the container in the form `["VAR=value", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.
      * items `string`
    * ExposedPorts `object`: An object mapping ports to an empty object in the form:
    * Healthcheck [HealthConfig](#healthconfig)
    * Hostname `string`: The hostname to use for the container, as a valid RFC 1123 hostname.
    * Image `string`: The name of the image to use when creating the container
    * Labels `object`: User-defined key/value metadata.
    * MacAddress `string`: MAC address of the container.
    * NetworkDisabled `boolean`: Disable networking for the container.
    * OnBuild `array`: `ONBUILD` metadata that were defined in the image's `Dockerfile`.
      * items `string`
    * OpenStdin `boolean`: Open `stdin`
    * Shell `array`: Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
      * items `string`
    * StdinOnce `boolean`: Close `stdin` after one attached client disconnects
    * StopSignal `string`: Signal to stop a container as a string or unsigned integer.
    * StopTimeout `integer`: Timeout to stop a container in seconds.
    * Tty `boolean`: Attach standard streams to a TTY, including `stdin` if it is not closed.
    * User `string`: The user that commands are run as inside the container.
    * Volumes `object`: An object mapping mount point paths inside the container to empty objects.
      * additionalProperties `object` (values: [object Object])
    * WorkingDir `string`: The working directory for commands to run in.
    * HostConfig [HostConfig](#hostconfig)
    * NetworkingConfig `object`: This container's networking configuration.
      * EndpointsConfig `object`: A mapping of network name to endpoint configuration for that network.

#### Output
* output `object`
  * Id **required** `string`: The ID of the created container
  * Warnings **required** `array`: Warnings encountered when creating the container
    * items `string`

### ContainerList
Returns a list of containers. For details on the format, see [the inspect endpoint](#operation/ContainerInspect).

Note that it uses a different, smaller representation of a container than inspecting a single container. For example,
the list of linked containers is not propagated .



```js
docker_engine.ContainerList({}, context)
```

#### Input
* input `object`
  * all `boolean`: Return all containers. By default, only running containers are shown
  * limit `integer`: Return this number of most recently created containers, including non-running ones.
  * size `boolean`: Return the size of container as fields `SizeRw` and `SizeRootFs`.
  * filters `string`: Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{"status": ["paused"]}` will only return paused containers. Available filters:

#### Output
* output [ContainerSummary](#containersummary)

### ContainerPrune
Delete stopped containers


```js
docker_engine.ContainerPrune({}, context)
```

#### Input
* input `object`
  * filters `string`: Filters to process on the prune list, encoded as JSON (a `map[string][]string`).

#### Output
* output `object`
  * ContainersDeleted `array`: Container IDs that were deleted
    * items `string`
  * SpaceReclaimed `integer`: Disk space reclaimed in bytes

### ContainerDelete
Remove a container


```js
docker_engine.ContainerDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * v `boolean`: Remove the volumes associated with the container.
  * force `boolean`: If the container is running, kill it before removing it.
  * link `boolean`: Remove the specified link associated with the container.

#### Output
*Output schema unknown*

### ContainerArchive
Get a tar archive of a resource in the filesystem of container id.


```js
docker_engine.ContainerArchive({
  "id": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * path **required** `string`: Resource in the container’s filesystem to archive.

#### Output
*Output schema unknown*

### ContainerArchiveInfo
A response header `X-Docker-Container-Path-Stat` is return containing a base64 - encoded JSON object with some filesystem header information about the path.


```js
docker_engine.ContainerArchiveInfo({
  "id": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * path **required** `string`: Resource in the container’s filesystem to archive.

#### Output
*Output schema unknown*

### PutContainerArchive
Upload a tar archive to be extracted to a path in the filesystem of container id.


```js
docker_engine.PutContainerArchive({
  "id": "",
  "path": "",
  "inputStream": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * path **required** `string`: Path to a directory in the container to extract the archive’s contents into. 
  * noOverwriteDirNonDir `string`: If “1”, “true”, or “True” then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa.
  * inputStream **required** `string`

#### Output
*Output schema unknown*

### ContainerAttach
Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.

Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.

See [the documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.

### Hijacking

This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.

This is the response from the daemon for an attach request:

```
HTTP/1.1 200 OK
Content-Type: application/vnd.docker.raw-stream

[STREAM]
```

After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.

To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.

For example, the client sends this request to upgrade the connection:

```
POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
Upgrade: tcp
Connection: Upgrade
```

The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:

```
HTTP/1.1 101 UPGRADED
Content-Type: application/vnd.docker.raw-stream
Connection: Upgrade
Upgrade: tcp

[STREAM]
```

### Stream format

When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.

The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).

It is encoded on the first eight bytes like this:

```go
header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
```

`STREAM_TYPE` can be:

- 0: `stdin` (is written on `stdout`)
- 1: `stdout`
- 2: `stderr`

`SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.

Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.

The simplest way to implement this protocol is the following:

1. Read 8 bytes.
2. Choose `stdout` or `stderr` depending on the first byte.
3. Extract the frame size from the last four bytes.
4. Read the extracted size and output it on the correct output.
5. Goto 1.

### Stream format when using a TTY

When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client's `stdin`.



```js
docker_engine.ContainerAttach({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * detachKeys `string`: Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
  * logs `boolean`: Replay previous logs from the container.
  * stream `boolean`: Stream attached streams from the time the request was made onwards
  * stdin `boolean`: Attach to `stdin`
  * stdout `boolean`: Attach to `stdout`
  * stderr `boolean`: Attach to `stderr`

#### Output
*Output schema unknown*

### ContainerAttachWebsocket
Attach to a container via a websocket


```js
docker_engine.ContainerAttachWebsocket({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * detachKeys `string`: Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`.
  * logs `boolean`: Return logs
  * stream `boolean`: Return stream
  * stdin `boolean`: Attach to `stdin`
  * stdout `boolean`: Attach to `stdout`
  * stderr `boolean`: Attach to `stderr`

#### Output
*Output schema unknown*

### ContainerChanges
Returns which files in a container's filesystem have been added, deleted,
or modified. The `Kind` of modification can be one of:

- `0`: Modified
- `1`: Added
- `2`: Deleted



```js
docker_engine.ContainerChanges({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container

#### Output
* output `array`
  * items `object`
    * Kind **required** `integer` (values: 0, 1, 2): Kind of change
    * Path **required** `string`: Path to file that has changed

### ContainerExec
Run a command inside a running container.


```js
docker_engine.ContainerExec({
  "execConfig": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * execConfig **required** `object`
    * AttachStderr `boolean`: Attach to `stderr` of the exec command.
    * AttachStdin `boolean`: Attach to `stdin` of the exec command.
    * AttachStdout `boolean`: Attach to `stdout` of the exec command.
    * Cmd `array`: Command to run, as a string or array of strings.
      * items `string`
    * DetachKeys `string`: Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
    * Env `array`: A list of environment variables in the form `["VAR=value", ...]`.
      * items `string`
    * Privileged `boolean`: Runs the exec process with extended privileges.
    * Tty `boolean`: Allocate a pseudo-TTY.
    * User `string`: The user, and optionally, group to run the exec process inside the container. Format is one of: `user`, `user:group`, `uid`, or `uid:gid`.
  * id **required** `string`: ID or name of container

#### Output
* output [IdResponse](#idresponse)

### ContainerExport
Export the contents of a container as a tarball.


```js
docker_engine.ContainerExport({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container

#### Output
*Output schema unknown*

### ContainerInspect
Return low-level information about a container.


```js
docker_engine.ContainerInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * size `boolean`: Return the size of container as fields `SizeRw` and `SizeRootFs`

#### Output
* output `object`
  * AppArmorProfile `string`
  * Args `array`: The arguments to the command being run
    * items `string`
  * Config [ContainerConfig](#containerconfig)
  * Created `string`: The time the container was created
  * Driver `string`
  * ExecIDs `string`
  * GraphDriver [GraphDriverData](#graphdriverdata)
  * HostConfig [HostConfig](#hostconfig)
  * HostnamePath `string`
  * HostsPath `string`
  * Id `string`: The ID of the container
  * Image `string`: The container's image
  * LogPath `string`
  * MountLabel `string`
  * Mounts `array`
    * items [MountPoint](#mountpoint)
  * Name `string`
  * NetworkSettings [NetworkSettings](#networksettings)
  * Node `object`: TODO
  * Path `string`: The path to the command being run
  * ProcessLabel `string`
  * ResolvConfPath `string`
  * RestartCount `integer`
  * SizeRootFs `integer`: The total size of all the files in this container.
  * SizeRw `integer`: The size of files that have been created or changed by this container.
  * State `object`: The state of the container.
    * Dead `boolean`
    * Error `string`
    * ExitCode `integer`: The last exit code of this container
    * FinishedAt `string`: The time when this container last exited.
    * OOMKilled `boolean`: Whether this container has been killed because it ran out of memory.
    * Paused `boolean`: Whether this container is paused.
    * Pid `integer`: The process ID of this container
    * Restarting `boolean`: Whether this container is restarting.
    * Running `boolean`: Whether this container is running.
    * StartedAt `string`: The time when this container was last started.
    * Status `string` (values: created, running, paused, restarting, removing, exited, dead): The status of the container. For example, `"running"` or `"exited"`.

### ContainerKill
Send a POSIX signal to a container, defaulting to killing to the container.


```js
docker_engine.ContainerKill({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * signal `string`: Signal to send to the container as an integer or string (e.g. `SIGINT`)

#### Output
*Output schema unknown*

### ContainerLogs
Get `stdout` and `stderr` logs from a container.

Note: This endpoint works only for containers with the `json-file` or `journald` logging driver.



```js
docker_engine.ContainerLogs({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * follow `boolean`: Return the logs as a stream.
  * stdout `boolean`: Return logs from `stdout`
  * stderr `boolean`: Return logs from `stderr`
  * since `integer`: Only return logs since this time, as a UNIX timestamp
  * timestamps `boolean`: Add timestamps to every log line
  * tail `string`: Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.

#### Output
* output `string`

### ContainerPause
Use the cgroups freezer to suspend all processes in a container.

Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the cgroups freezer the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed.



```js
docker_engine.ContainerPause({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container

#### Output
*Output schema unknown*

### ContainerRename
Rename a container


```js
docker_engine.ContainerRename({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * name **required** `string`: New name for the container

#### Output
*Output schema unknown*

### ContainerResize
Resize the TTY for a container. You must restart the container for the resize to take effect.


```js
docker_engine.ContainerResize({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * h `integer`: Height of the tty session in characters
  * w `integer`: Width of the tty session in characters

#### Output
*Output schema unknown*

### ContainerRestart
Restart a container


```js
docker_engine.ContainerRestart({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * t `integer`: Number of seconds to wait before killing the container

#### Output
*Output schema unknown*

### ContainerStart
Start a container


```js
docker_engine.ContainerStart({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * detachKeys `string`: Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.

#### Output
*Output schema unknown*

### ContainerStats
This endpoint returns a live stream of a container’s resource usage
statistics.

The `precpu_stats` is the CPU statistic of last read, which is used
for calculating the CPU usage percentage. It is not the same as the
`cpu_stats` field.

If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is
nil then for compatibility with older daemons the length of the
corresponding `cpu_usage.percpu_usage` array should be used.



```js
docker_engine.ContainerStats({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * stream `boolean`: Stream the output. If false, the stats will be output once and then it will disconnect.

#### Output
* output `object`

### ContainerStop
Stop a container


```js
docker_engine.ContainerStop({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * t `integer`: Number of seconds to wait before killing the container

#### Output
*Output schema unknown*

### ContainerTop
On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows.


```js
docker_engine.ContainerTop({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * ps_args `string`: The arguments to pass to `ps`. For example, `aux`

#### Output
* output `object`
  * Processes `array`: Each process running in the container, where each is process is an array of values corresponding to the titles
    * items `array`
      * items `string`
  * Titles `array`: The ps column titles
    * items `string`

### ContainerUnpause
Resume a container which has been paused.


```js
docker_engine.ContainerUnpause({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container

#### Output
*Output schema unknown*

### ContainerUpdate
Change various configuration options of a container without having to recreate it.


```js
docker_engine.ContainerUpdate({
  "id": "",
  "update": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * update **required**
    * BlkioDeviceReadBps `array`: Limit read rate (bytes per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
      * items [ThrottleDevice](#throttledevice)
    * BlkioDeviceReadIOps `array`: Limit read rate (IO per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
      * items [ThrottleDevice](#throttledevice)
    * BlkioDeviceWriteBps `array`: Limit write rate (bytes per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
      * items [ThrottleDevice](#throttledevice)
    * BlkioDeviceWriteIOps `array`: Limit write rate (IO per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
      * items [ThrottleDevice](#throttledevice)
    * BlkioWeight `integer`: Block IO weight (relative weight).
    * BlkioWeightDevice `array`: Block IO weight (relative device weight) in the form `[{"Path": "device_path", "Weight": weight}]`.
      * items `object`
        * Path `string`
        * Weight `integer`
    * CgroupParent `string`: Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.
    * CpuCount `integer`: The number of usable CPUs (Windows only).
    * CpuPercent `integer`: The usable percentage of the available CPUs (Windows only).
    * CpuPeriod `integer`: The length of a CPU period in microseconds.
    * CpuQuota `integer`: Microseconds of CPU time that the container can get in a CPU period.
    * CpuRealtimePeriod `integer`: The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
    * CpuRealtimeRuntime `integer`: The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
    * CpuShares `integer`: An integer value representing this container's relative CPU weight versus other containers.
    * CpusetCpus `string`: CPUs in which to allow execution (e.g., `0-3`, `0,1`)
    * CpusetMems `string`: Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.
    * DeviceCgroupRules `array`: a list of cgroup rules to apply to the container
      * items `string`
    * Devices `array`: A list of devices to add to the container.
      * items [DeviceMapping](#devicemapping)
    * DiskQuota `integer`: Disk limit (in bytes).
    * IOMaximumBandwidth `integer`: Maximum IO in bytes per second for the container system drive (Windows only)
    * IOMaximumIOps `integer`: Maximum IOps for the container system drive (Windows only)
    * KernelMemory `integer`: Kernel memory limit in bytes.
    * Memory `integer`: Memory limit in bytes.
    * MemoryReservation `integer`: Memory soft limit in bytes.
    * MemorySwap `integer`: Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.
    * MemorySwappiness `integer`: Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.
    * NanoCPUs `integer`: CPU quota in units of 10<sup>-9</sup> CPUs.
    * OomKillDisable `boolean`: Disable OOM Killer for the container.
    * PidsLimit `integer`: Tune a container's pids limit. Set -1 for unlimited.
    * Ulimits `array`: A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
      * items `object`
        * Hard `integer`: Hard limit
        * Name `string`: Name of ulimit
        * Soft `integer`: Soft limit
    * RestartPolicy [RestartPolicy](#restartpolicy)

#### Output
* output `object`
  * Warnings `array`
    * items `string`

### ContainerWait
Block until a container stops, then returns the exit code.


```js
docker_engine.ContainerWait({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the container
  * condition `string`: Wait until a container state reaches the given condition, either 'not-running' (default), 'next-exit', or 'removed'.

#### Output
* output `object`
  * StatusCode **required** `integer`: Exit code of the container

### DistributionInspect
Return image digest and platform information by contacting the registry.


```js
docker_engine.DistributionInspect({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or id

#### Output
* output `object`
  * Descriptor **required** `object`: A descriptor struct containing digest, media type, and size
    * Digest `string`
    * MediaType `string`
    * Size `integer`
    * URLs `array`
      * items `string`
  * Platforms **required** `array`: An array containing all platforms supported by the image
    * items `object`
      * Architecture `string`
      * Features `array`
        * items `string`
      * OS `string`
      * OSFeatures `array`
        * items `string`
      * OSVersion `string`
      * Variant `string`

### SystemEvents
Stream real-time events from the server.

Various objects within Docker report events when something happens to them.

Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, and `update`

Images report these events: `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, and `untag`

Volumes report these events: `create`, `mount`, `unmount`, and `destroy`

Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, and `remove`

The Docker daemon reports these events: `reload`

Services report these events: `create`, `update`, and `remove`

Nodes report these events: `create`, `update`, and `remove`

Secrets report these events: `create`, `update`, and `remove`

Configs report these events: `create`, `update`, and `remove`



```js
docker_engine.SystemEvents({}, context)
```

#### Input
* input `object`
  * since `string`: Show events created since this timestamp then stream new events.
  * until `string`: Show events created until this timestamp then stop streaming.
  * filters `string`: A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:

#### Output
* output `object`
  * Action `string`: The type of event
  * Actor `object`
    * Attributes `object`: Various key/value attributes of the object, depending on its type
    * ID `string`: The ID of the object emitting the event
  * Type `string`: The type of object emitting the event
  * time `integer`: Timestamp of event
  * timeNano `integer`: Timestamp of event, with nanosecond accuracy

### ExecInspect
Return low-level information about an exec instance.


```js
docker_engine.ExecInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Exec instance ID

#### Output
* output `object`
  * ContainerID `string`
  * ExitCode `integer`
  * ID `string`
  * OpenStderr `boolean`
  * OpenStdin `boolean`
  * OpenStdout `boolean`
  * Pid `integer`: The system process ID for the exec process.
  * ProcessConfig [ProcessConfig](#processconfig)
  * Running `boolean`

### ExecResize
Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance.


```js
docker_engine.ExecResize({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Exec instance ID
  * h `integer`: Height of the TTY session in characters
  * w `integer`: Width of the TTY session in characters

#### Output
*Output schema unknown*

### ExecStart
Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.


```js
docker_engine.ExecStart({
  "id": ""
}, context)
```

#### Input
* input `object`
  * execStartConfig `object`
    * Detach `boolean`: Detach from the command.
    * Tty `boolean`: Allocate a pseudo-TTY.
  * id **required** `string`: Exec instance ID

#### Output
*Output schema unknown*

### ImageCreate
Create an image by either pulling it from a registry or importing it.


```js
docker_engine.ImageCreate({}, context)
```

#### Input
* input `object`
  * fromImage `string`: Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
  * fromSrc `string`: Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
  * repo `string`: Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
  * tag `string`: Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
  * inputImage `string`
  * X-Registry-Auth `string`: A base64-encoded auth configuration. [See the authentication section for details.](#section/Authentication)

#### Output
*Output schema unknown*

### ImageGetAll
Get a tarball containing all images and metadata for several image repositories.

For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the 'repositories' file for this image ID.

For details on the format, see [the export image endpoint](#operation/ImageGet).



```js
docker_engine.ImageGetAll({}, context)
```

#### Input
* input `object`
  * names `array`: Image names to filter by

#### Output
* output `string`

### ImageList
Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.


```js
docker_engine.ImageList({}, context)
```

#### Input
* input `object`
  * all `boolean`: Show all images. Only images from a final layer (no children) are shown by default.
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
  * digests `boolean`: Show digest information as a `RepoDigests` field on each image.

#### Output
* output `array`
  * items [ImageSummary](#imagesummary)

### ImageLoad
Load a set of images and tags into a repository.

For details on the format, see [the export image endpoint](#operation/ImageGet).



```js
docker_engine.ImageLoad({}, context)
```

#### Input
* input `object`
  * imagesTarball `string`
  * quiet `boolean`: Suppress progress details during load.

#### Output
*Output schema unknown*

### ImagePrune
Delete unused images


```js
docker_engine.ImagePrune({}, context)
```

#### Input
* input `object`
  * filters `string`: Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:

#### Output
* output `object`
  * ImagesDeleted `array`: Images that were deleted
    * items [ImageDeleteResponseItem](#imagedeleteresponseitem)
  * SpaceReclaimed `integer`: Disk space reclaimed in bytes

### ImageSearch
Search for an image on Docker Hub.


```js
docker_engine.ImageSearch({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Term to search
  * limit `integer`: Maximum number of results to return
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:

#### Output
* output `array`
  * items `object`
    * description `string`
    * is_automated `boolean`
    * is_official `boolean`
    * name `string`
    * star_count `integer`

### ImageDelete
Remove an image, along with any untagged parent images that were
referenced by that image.

Images can't be removed if they have descendant images, are being
used by a running container or are being used by a build.



```js
docker_engine.ImageDelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or ID
  * force `boolean`: Remove the image even if it is being used by stopped containers or has other tags
  * noprune `boolean`: Do not delete untagged parent images

#### Output
* output `array`
  * items [ImageDeleteResponseItem](#imagedeleteresponseitem)

### ImageGet
Get a tarball containing all images and metadata for a repository.

If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.

### Image tarball format

An image tarball contains one directory per image layer (named using its long ID), each containing these files:

- `VERSION`: currently `1.0` - the file format version
- `json`: detailed layer information, similar to `docker inspect layer_id`
- `layer.tar`: A tarfile containing the filesystem changes in this layer

The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.

If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.

```json
{
  "hello-world": {
    "latest": "565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1"
  }
}
```



```js
docker_engine.ImageGet({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or ID

#### Output
* output `string`

### ImageHistory
Return parent layers of an image.


```js
docker_engine.ImageHistory({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or ID

#### Output
* output `array`
  * items `object`
    * Comment **required** `string`
    * Created **required** `integer`
    * CreatedBy **required** `string`
    * Id **required** `string`
    * Size **required** `integer`
    * Tags **required** `array`
      * items `string`

### ImageInspect
Return low-level information about an image.


```js
docker_engine.ImageInspect({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or id

#### Output
* output [Image](#image)

### ImagePush
Push an image to a registry.

If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.

The push is cancelled if the HTTP connection is closed.



```js
docker_engine.ImagePush({
  "name": "",
  "X-Registry-Auth": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or ID.
  * tag `string`: The tag to associate with the image on the registry.
  * X-Registry-Auth **required** `string`: A base64-encoded auth configuration. [See the authentication section for details.](#section/Authentication)

#### Output
*Output schema unknown*

### ImageTag
Tag an image so that it becomes part of a repository.


```js
docker_engine.ImageTag({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Image name or ID to tag.
  * repo `string`: The repository to tag in. For example, `someuser/someimage`.
  * tag `string`: The name of the new tag.

#### Output
*Output schema unknown*

### SystemInfo
Get system information


```js
docker_engine.SystemInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemInfo](#systeminfo)

### NetworkList
Returns a list of networks. For details on the format, see [the network inspect endpoint](#operation/NetworkInspect).

Note that it uses a different, smaller representation of a network than inspecting a single network. For example,
the list of containers attached to the network is not propagated in API versions 1.28 and up.



```js
docker_engine.NetworkList({}, context)
```

#### Input
* input `object`
  * filters `string`: JSON encoded value of the filters (a `map[string][]string`) to process on the networks list. Available filters:

#### Output
* output `array`
  * items [Network](#network)

### NetworkCreate
Create a network


```js
docker_engine.NetworkCreate({
  "networkConfig": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * networkConfig **required** `object`
    * Attachable `boolean`: Globally scoped network is manually attachable by regular containers from workers in swarm mode.
    * CheckDuplicate `boolean`: Check for networks with duplicate names. Since Network is primarily keyed based on a random ID and not on the name, and network name is strictly a user-friendly alias to the network which is uniquely identified using ID, there is no guaranteed way to check for duplicates. CheckDuplicate is there to provide a best effort checking of any networks which has the same name but it is not guaranteed to catch all name collisions.
    * Driver `string`: Name of the network driver plugin to use.
    * EnableIPv6 `boolean`: Enable IPv6 on the network.
    * IPAM [IPAM](#ipam)
    * Ingress `boolean`: Ingress network is the network which provides the routing-mesh in swarm mode.
    * Internal `boolean`: Restrict external access to the network.
    * Labels `object`: User-defined key/value metadata.
    * Name **required** `string`: The network's name.
    * Options `object`: Network specific options to be used by the drivers.

#### Output
* output `object`
  * Id `string`: The ID of the created network.
  * Warning `string`

### NetworkPrune
Delete unused networks


```js
docker_engine.NetworkPrune({}, context)
```

#### Input
* input `object`
  * filters `string`: Filters to process on the prune list, encoded as JSON (a `map[string][]string`).

#### Output
* output `object`
  * NetworksDeleted `array`: Networks that were deleted
    * items `string`

### NetworkDelete
Remove a network


```js
docker_engine.NetworkDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Network ID or name

#### Output
*Output schema unknown*

### NetworkInspect
Inspect a network


```js
docker_engine.NetworkInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Network ID or name
  * verbose `boolean`: Detailed inspect output for troubleshooting
  * scope `string`: Filter the network by scope (swarm, global, or local)

#### Output
* output [Network](#network)

### NetworkConnect
Connect a container to a network


```js
docker_engine.NetworkConnect({
  "id": "",
  "container": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Network ID or name
  * container **required** `object`
    * Container `string`: The ID or name of the container to connect to the network.
    * EndpointConfig [EndpointSettings](#endpointsettings)

#### Output
*Output schema unknown*

### NetworkDisconnect
Disconnect a container from a network


```js
docker_engine.NetworkDisconnect({
  "id": "",
  "container": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Network ID or name
  * container **required** `object`
    * Container `string`: The ID or name of the container to disconnect from the network.
    * Force `boolean`: Force the container to disconnect from the network.

#### Output
*Output schema unknown*

### NodeList
List nodes


```js
docker_engine.NodeList({}, context)
```

#### Input
* input `object`
  * filters `string`: Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).

#### Output
* output `array`
  * items [Node](#node)

### NodeDelete
Delete a node


```js
docker_engine.NodeDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID or name of the node
  * force `boolean`: Force remove a node from the swarm

#### Output
*Output schema unknown*

### NodeInspect
Inspect a node


```js
docker_engine.NodeInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID or name of the node

#### Output
* output [Node](#node)

### NodeUpdate
Update a node


```js
docker_engine.NodeUpdate({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the node
  * body [NodeSpec](#nodespec)
  * version **required** `integer`: The version number of the node object being updated. This is required to avoid conflicting writes.

#### Output
*Output schema unknown*

### PluginList
Returns information about installed plugins.


```js
docker_engine.PluginList({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list. Available filters:

#### Output
* output `array`
  * items [Plugin](#plugin)

### PluginCreate
Create a plugin


```js
docker_engine.PluginCreate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
  * tarContext `string`

#### Output
*Output schema unknown*

### GetPluginPrivileges
Get plugin privileges


```js
docker_engine.GetPluginPrivileges({
  "remote": ""
}, context)
```

#### Input
* input `object`
  * remote **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.

#### Output
* output `array`
  * items `object`: Describes a permission the user has to accept upon installing the plugin.
    * Description `string`
    * Name `string`
    * Value `array`
      * items `string`

### PluginPull
Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable).



```js
docker_engine.PluginPull({
  "remote": ""
}, context)
```

#### Input
* input `object`
  * remote **required** `string`: Remote reference for plugin to install.
  * name `string`: Local name for the pulled plugin.
  * X-Registry-Auth `string`: A base64-encoded auth configuration to use when pulling a plugin from a registry. [See the authentication section for details.](#section/Authentication)
  * body `array`
    * items `object`: Describes a permission accepted by the user upon installing the plugin.
      * Description `string`
      * Name `string`
      * Value `array`
        * items `string`

#### Output
*Output schema unknown*

### PluginDelete
Remove a plugin


```js
docker_engine.PluginDelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
  * force `boolean`: Disable the plugin before removing. This may result in issues if the plugin is in use by a container.

#### Output
* output [Plugin](#plugin)

### PluginDisable
Disable a plugin


```js
docker_engine.PluginDisable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.

#### Output
*Output schema unknown*

### PluginEnable
Enable a plugin


```js
docker_engine.PluginEnable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
  * timeout `integer`: Set the HTTP client timeout (in seconds)

#### Output
*Output schema unknown*

### PluginInspect
Inspect a plugin


```js
docker_engine.PluginInspect({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.

#### Output
* output [Plugin](#plugin)

### PluginPush
Push a plugin to the registry.



```js
docker_engine.PluginPush({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.

#### Output
*Output schema unknown*

### PluginSet
Configure a plugin


```js
docker_engine.PluginSet({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
  * body `array`
    * items `string`

#### Output
*Output schema unknown*

### PluginUpgrade
Upgrade a plugin


```js
docker_engine.PluginUpgrade({
  "name": "",
  "remote": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
  * remote **required** `string`: Remote reference to upgrade to.
  * X-Registry-Auth `string`: A base64-encoded auth configuration to use when pulling a plugin from a registry. [See the authentication section for details.](#section/Authentication)
  * body `array`
    * items `object`: Describes a permission accepted by the user upon installing the plugin.
      * Description `string`
      * Name `string`
      * Value `array`
        * items `string`

#### Output
*Output schema unknown*

### SecretList
List secrets


```js
docker_engine.SecretList({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Available filters:

#### Output
* output `array`
  * items [Secret](#secret)

### SecretCreate
Create a secret


```js
docker_engine.SecretCreate({}, context)
```

#### Input
* input `object`
  * body
    * Data `string`: Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))
    * Driver [Driver](#driver)
    * Labels `object`: User-defined key/value metadata.
    * Name `string`: User-defined name of the secret.

#### Output
* output `object`
  * ID `string`: The ID of the created secret.

### SecretDelete
Delete a secret


```js
docker_engine.SecretDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the secret

#### Output
*Output schema unknown*

### SecretInspect
Inspect a secret


```js
docker_engine.SecretInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the secret

#### Output
* output [Secret](#secret)

### SecretUpdate
Update a Secret


```js
docker_engine.SecretUpdate({
  "id": "",
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID or name of the secret
  * body [SecretSpec](#secretspec)
  * version **required** `integer`: The version number of the secret object being updated. This is required to avoid conflicting writes.

#### Output
*Output schema unknown*

### ServiceList
List services


```js
docker_engine.ServiceList({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the services list. Available filters:

#### Output
* output `array`
  * items [Service](#service)

### ServiceCreate
Create a service


```js
docker_engine.ServiceCreate({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required**
    * EndpointSpec [EndpointSpec](#endpointspec)
    * Labels `object`: User-defined key/value metadata.
    * Mode `object`: Scheduling mode for the service.
      * Global `object`
      * Replicated `object`
        * Replicas `integer`
    * Name `string`: Name of the service.
    * Networks `array`: Array of network names or IDs to attach the service to.
      * items `object`
        * Aliases `array`
          * items `string`
        * Target `string`
    * RollbackConfig `object`: Specification for the rollback strategy of the service.
      * Delay `integer`: Amount of time between rollback iterations, in nanoseconds.
      * FailureAction `string` (values: continue, pause): Action to take if an rolled back task fails to run, or stops running during the rollback.
      * MaxFailureRatio `number`: The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1.
      * Monitor `integer`: Amount of time to monitor each rolled back task for failures, in nanoseconds.
      * Order `string` (values: stop-first, start-first): The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
      * Parallelism `integer`: Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism).
    * TaskTemplate [TaskSpec](#taskspec)
    * UpdateConfig `object`: Specification for the update strategy of the service.
      * Delay `integer`: Amount of time between updates, in nanoseconds.
      * FailureAction `string` (values: continue, pause, rollback): Action to take if an updated task fails to run, or stops running during the update.
      * MaxFailureRatio `number`: The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1.
      * Monitor `integer`: Amount of time to monitor each updated task for failures, in nanoseconds.
      * Order `string` (values: stop-first, start-first): The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
      * Parallelism `integer`: Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism).
  * X-Registry-Auth `string`: A base64-encoded auth configuration for pulling from private registries. [See the authentication section for details.](#section/Authentication)

#### Output
* output `object`
  * ID `string`: The ID of the created service.
  * Warning `string`: Optional warning message

### ServiceDelete
Delete a service


```js
docker_engine.ServiceDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of service.

#### Output
*Output schema unknown*

### ServiceInspect
Inspect a service


```js
docker_engine.ServiceInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of service.
  * insertDefaults `boolean`: Fill empty fields with default values.

#### Output
* output [Service](#service)

### ServiceLogs
Get `stdout` and `stderr` logs from a service.

**Note**: This endpoint works only for services with the `json-file` or `journald` logging drivers.



```js
docker_engine.ServiceLogs({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of the service
  * details `boolean`: Show service context and extra details provided to logs.
  * follow `boolean`: Return the logs as a stream.
  * stdout `boolean`: Return logs from `stdout`
  * stderr `boolean`: Return logs from `stderr`
  * since `integer`: Only return logs since this time, as a UNIX timestamp
  * timestamps `boolean`: Add timestamps to every log line
  * tail `string`: Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.

#### Output
* output `string`

### ServiceUpdate
Update a service


```js
docker_engine.ServiceUpdate({
  "id": "",
  "body": null,
  "version": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID or name of service.
  * body **required**
    * EndpointSpec [EndpointSpec](#endpointspec)
    * Labels `object`: User-defined key/value metadata.
    * Mode `object`: Scheduling mode for the service.
      * Global `object`
      * Replicated `object`
        * Replicas `integer`
    * Name `string`: Name of the service.
    * Networks `array`: Array of network names or IDs to attach the service to.
      * items `object`
        * Aliases `array`
          * items `string`
        * Target `string`
    * RollbackConfig `object`: Specification for the rollback strategy of the service.
      * Delay `integer`: Amount of time between rollback iterations, in nanoseconds.
      * FailureAction `string` (values: continue, pause): Action to take if an rolled back task fails to run, or stops running during the rollback.
      * MaxFailureRatio `number`: The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1.
      * Monitor `integer`: Amount of time to monitor each rolled back task for failures, in nanoseconds.
      * Order `string` (values: stop-first, start-first): The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
      * Parallelism `integer`: Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism).
    * TaskTemplate [TaskSpec](#taskspec)
    * UpdateConfig `object`: Specification for the update strategy of the service.
      * Delay `integer`: Amount of time between updates, in nanoseconds.
      * FailureAction `string` (values: continue, pause, rollback): Action to take if an updated task fails to run, or stops running during the update.
      * MaxFailureRatio `number`: The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1.
      * Monitor `integer`: Amount of time to monitor each updated task for failures, in nanoseconds.
      * Order `string` (values: stop-first, start-first): The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
      * Parallelism `integer`: Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism).
  * version **required** `integer`: The version number of the service object being updated. This is required to avoid conflicting writes.
  * registryAuthFrom `string`: If the X-Registry-Auth header is not specified, this parameter indicates where to find registry authorization credentials. The valid values are `spec` and `previous-spec`.
  * rollback `string`: Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.
  * X-Registry-Auth `string`: A base64-encoded auth configuration for pulling from private registries. [See the authentication section for details.](#section/Authentication)

#### Output
* output [ServiceUpdateResponse](#serviceupdateresponse)

### Session
Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.

> **Note**: This endpoint is *experimental* and only available if the daemon is started with experimental
> features enabled. The specifications for this endpoint may still change in a future version of the API.

### Hijacking

This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.

For example, the client sends this request to upgrade the connection:

```
POST /session HTTP/1.1
Upgrade: h2c
Connection: Upgrade
```

The Docker daemon will respond with a `101 UPGRADED` response follow with the raw stream:

```
HTTP/1.1 101 UPGRADED
Connection: Upgrade
Upgrade: h2c
```



```js
docker_engine.Session(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### SwarmInspect
Inspect swarm


```js
docker_engine.SwarmInspect(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Swarm](#swarm)

### SwarmInit
Initialize a new swarm


```js
docker_engine.SwarmInit({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * AdvertiseAddr `string`: Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.
    * DataPathAddr `string`: Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,
    * ForceNewCluster `boolean`: Force creation of a new swarm.
    * ListenAddr `string`: Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the default swarm listening port is used.
    * Spec [SwarmSpec](#swarmspec)

#### Output
* output `string`: The node ID

### SwarmJoin
Join an existing swarm


```js
docker_engine.SwarmJoin({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * AdvertiseAddr `string`: Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.
    * DataPathAddr `string`: Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`,
    * JoinToken `string`: Secret token for joining this swarm.
    * ListenAddr `string`: Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP).
    * RemoteAddrs `string`: Addresses of manager nodes already participating in the swarm.

#### Output
*Output schema unknown*

### SwarmLeave
Leave a swarm


```js
docker_engine.SwarmLeave({}, context)
```

#### Input
* input `object`
  * force `boolean`: Force leave swarm, even if this is the last manager or that it will break the cluster.

#### Output
*Output schema unknown*

### SwarmUnlock
Unlock a locked manager


```js
docker_engine.SwarmUnlock({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * UnlockKey `string`: The swarm's unlock key.

#### Output
*Output schema unknown*

### SwarmUnlockkey
Get the unlock key


```js
docker_engine.SwarmUnlockkey(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * UnlockKey `string`: The swarm's unlock key.

### SwarmUpdate
Update a swarm


```js
docker_engine.SwarmUpdate({
  "body": {},
  "version": 0
}, context)
```

#### Input
* input `object`
  * body **required** [SwarmSpec](#swarmspec)
  * version **required** `integer`: The version number of the swarm object being updated. This is required to avoid conflicting writes.
  * rotateWorkerToken `boolean`: Rotate the worker join token.
  * rotateManagerToken `boolean`: Rotate the manager join token.
  * rotateManagerUnlockKey `boolean`: Rotate the manager unlock key.

#### Output
*Output schema unknown*

### SystemDataUsage
Get data usage information


```js
docker_engine.SystemDataUsage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * Containers `array`
    * items [ContainerSummary](#containersummary)
  * Images `array`
    * items [ImageSummary](#imagesummary)
  * LayersSize `integer`
  * Volumes `array`
    * items [Volume](#volume)

### TaskList
List tasks


```js
docker_engine.TaskList({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list. Available filters:

#### Output
* output `array`
  * items [Task](#task)

### TaskInspect
Inspect a task


```js
docker_engine.TaskInspect({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the task

#### Output
* output [Task](#task)

### TaskLogs
Get `stdout` and `stderr` logs from a task.

**Note**: This endpoint works only for services with the `json-file` or `journald` logging drivers.



```js
docker_engine.TaskLogs({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the task
  * details `boolean`: Show task context and extra details provided to logs.
  * follow `boolean`: Return the logs as a stream.
  * stdout `boolean`: Return logs from `stdout`
  * stderr `boolean`: Return logs from `stderr`
  * since `integer`: Only return logs since this time, as a UNIX timestamp
  * timestamps `boolean`: Add timestamps to every log line
  * tail `string`: Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.

#### Output
* output `string`

### SystemVersion
Returns the version of Docker that is running and various information about the system that Docker is running on.


```js
docker_engine.SystemVersion(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * ApiVersion `string`
  * Arch `string`
  * BuildTime `string`
  * Experimental `boolean`
  * GitCommit `string`
  * GoVersion `string`
  * KernelVersion `string`
  * MinAPIVersion `string`
  * Os `string`
  * Version `string`

### VolumeList
List volumes


```js
docker_engine.VolumeList({}, context)
```

#### Input
* input `object`
  * filters `string`: JSON encoded value of the filters (a `map[string][]string`) to

#### Output
* output `object`
  * Volumes **required** `array`: List of volumes
    * items [Volume](#volume)
  * Warnings **required** `array`: Warnings that occurred when fetching the list of volumes
    * items `string`

### VolumeCreate
Create a volume


```js
docker_engine.VolumeCreate({
  "volumeConfig": {}
}, context)
```

#### Input
* input `object`
  * volumeConfig **required** `object`
    * Driver `string`: Name of the volume driver to use.
    * DriverOpts `object`: A mapping of driver options and values. These options are passed directly to the driver and are driver specific.
    * Labels `object`: User-defined key/value metadata.
    * Name `string`: The new volume's name. If not specified, Docker generates a name.

#### Output
* output [Volume](#volume)

### VolumePrune
Delete unused volumes


```js
docker_engine.VolumePrune({}, context)
```

#### Input
* input `object`
  * filters `string`: Filters to process on the prune list, encoded as JSON (a `map[string][]string`).

#### Output
* output `object`
  * SpaceReclaimed `integer`: Disk space reclaimed in bytes
  * VolumesDeleted `array`: Volumes that were deleted
    * items `string`

### VolumeDelete
Instruct the driver to remove the volume.


```js
docker_engine.VolumeDelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Volume name or ID
  * force `boolean`: Force the removal of the volume

#### Output
*Output schema unknown*

### VolumeInspect
Inspect a volume


```js
docker_engine.VolumeInspect({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Volume name or ID

#### Output
* output [Volume](#volume)



## Definitions

### Address
* Address `object`: Address represents an IPv4 or IPv6 IP address.
  * Addr `string`: IP address.
  * PrefixLen `integer`: Mask length of the IP address.

### AuthConfig
* AuthConfig `object`
  * email `string`
  * password `string`
  * serveraddress `string`
  * username `string`

### BuildInfo
* BuildInfo `object`
  * error `string`
  * errorDetail [ErrorDetail](#errordetail)
  * id `string`
  * progress `string`
  * progressDetail [ProgressDetail](#progressdetail)
  * status `string`
  * stream `string`

### ClusterInfo
* ClusterInfo `object`: ClusterInfo represents information about the swarm as is returned by the
  * CreatedAt `string`: Date and time at which the swarm was initialised in
  * ID `string`: The ID of the swarm.
  * RootRotationInProgress `boolean`: Whether there is currently a root CA rotation in progress for the swarm
  * Spec [SwarmSpec](#swarmspec)
  * TLSInfo [TLSInfo](#tlsinfo)
  * UpdatedAt `string`: Date and time at which the swarm was last updated in
  * Version [ObjectVersion](#objectversion)

### Commit
* Commit `object`: Commit holds the Git-commit (SHA1) that a binary was built from, as
  * Expected `string`: Commit ID of external tool expected by dockerd as set at build time.
  * ID `string`: Actual commit ID of external tool.

### Config
* Config `object`
  * CreatedAt `string`
  * ID `string`
  * Spec [ConfigSpec](#configspec)
  * UpdatedAt `string`
  * Version [ObjectVersion](#objectversion)

### ConfigSpec
* ConfigSpec `object`
  * Data `string`: Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))
  * Labels `object`: User-defined key/value metadata.
  * Name `string`: User-defined name of the config.

### ContainerConfig
* ContainerConfig `object`: Configuration for a container that is portable between hosts
  * ArgsEscaped `boolean`: Command is already escaped (Windows only)
  * AttachStderr `boolean`: Whether to attach to `stderr`.
  * AttachStdin `boolean`: Whether to attach to `stdin`.
  * AttachStdout `boolean`: Whether to attach to `stdout`.
  * Cmd `array`, `string`: Command to run specified as a string or an array of strings.
    * items `string`
  * Domainname `string`: The domain name to use for the container.
  * Entrypoint `array`, `string`: The entry point for the container as a string or an array of strings.
    * items `string`
  * Env `array`: A list of environment variables to set inside the container in the form `["VAR=value", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.
    * items `string`
  * ExposedPorts `object`: An object mapping ports to an empty object in the form:
  * Healthcheck [HealthConfig](#healthconfig)
  * Hostname `string`: The hostname to use for the container, as a valid RFC 1123 hostname.
  * Image `string`: The name of the image to use when creating the container
  * Labels `object`: User-defined key/value metadata.
  * MacAddress `string`: MAC address of the container.
  * NetworkDisabled `boolean`: Disable networking for the container.
  * OnBuild `array`: `ONBUILD` metadata that were defined in the image's `Dockerfile`.
    * items `string`
  * OpenStdin `boolean`: Open `stdin`
  * Shell `array`: Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
    * items `string`
  * StdinOnce `boolean`: Close `stdin` after one attached client disconnects
  * StopSignal `string`: Signal to stop a container as a string or unsigned integer.
  * StopTimeout `integer`: Timeout to stop a container in seconds.
  * Tty `boolean`: Attach standard streams to a TTY, including `stdin` if it is not closed.
  * User `string`: The user that commands are run as inside the container.
  * Volumes `object`: An object mapping mount point paths inside the container to empty objects.
    * additionalProperties `object` (values: [object Object])
  * WorkingDir `string`: The working directory for commands to run in.

### ContainerSummary
* ContainerSummary `array`
  * items `object`
    * Command `string`: Command to run when starting the container
    * Created `integer`: When the container was created
    * HostConfig `object`
      * NetworkMode `string`
    * Id `string`: The ID of this container
    * Image `string`: The name of the image used when creating this container
    * ImageID `string`: The ID of the image that this container was created from
    * Labels `object`: User-defined key/value metadata.
    * Mounts `array`
      * items [Mount](#mount)
    * Names `array`: The names that this container has been given
      * items `string`
    * NetworkSettings `object`: A summary of the container's network settings
      * Networks `object`
    * Ports `array`: The ports exposed by this container
      * items [Port](#port)
    * SizeRootFs `integer`: The total size of all the files in this container
    * SizeRw `integer`: The size of files that have been created or changed by this container
    * State `string`: The state of this container (e.g. `Exited`)
    * Status `string`: Additional human-readable status of this container (e.g. `Exit 0`)

### CreateImageInfo
* CreateImageInfo `object`
  * error `string`
  * progress `string`
  * progressDetail [ProgressDetail](#progressdetail)
  * status `string`

### DeviceMapping
* DeviceMapping `object`: A device mapping between the host and container
  * CgroupPermissions `string`
  * PathInContainer `string`
  * PathOnHost `string`

### Driver
* Driver `object`: Driver represents a driver (network, logging, secrets).
  * Name **required** `string`: Name of the driver.
  * Options `object`: Key/value map of driver-specific options.

### EndpointIPAMConfig
* EndpointIPAMConfig `object`: EndpointIPAMConfig represents an endpoint's IPAM configuration.
  * IPv4Address `string`
  * IPv6Address `string`
  * LinkLocalIPs `array`
    * items `string`

### EndpointPortConfig
* EndpointPortConfig `object`
  * Name `string`
  * Protocol `string` (values: tcp, udp)
  * PublishedPort `integer`: The port on the swarm hosts.
  * TargetPort `integer`: The port inside the container.

### EndpointSettings
* EndpointSettings `object`: Configuration for a network endpoint.
  * Aliases `array`
    * items `string`
  * DriverOpts `object`: DriverOpts is a mapping of driver options and values. These options
  * EndpointID `string`: Unique ID for the service endpoint in a Sandbox.
  * Gateway `string`: Gateway address for this network.
  * GlobalIPv6Address `string`: Global IPv6 address.
  * GlobalIPv6PrefixLen `integer`: Mask length of the global IPv6 address.
  * IPAMConfig [EndpointIPAMConfig](#endpointipamconfig)
  * IPAddress `string`: IPv4 address.
  * IPPrefixLen `integer`: Mask length of the IPv4 address.
  * IPv6Gateway `string`: IPv6 gateway address.
  * Links `array`
    * items `string`
  * MacAddress `string`: MAC address for the endpoint on this network.
  * NetworkID `string`: Unique ID of the network.

### EndpointSpec
* EndpointSpec `object`: Properties that can be configured to access and load balance a service.
  * Mode `string` (values: vip, dnsrr): The mode of resolution to use for internal load balancing between tasks.
  * Ports `array`: List of exposed ports that this service is accessible on from the outside. Ports can only be provided if `vip` resolution mode is used.
    * items [EndpointPortConfig](#endpointportconfig)

### EngineDescription
* EngineDescription `object`: EngineDescription provides information about an engine.
  * EngineVersion `string`
  * Labels `object`
  * Plugins `array`
    * items `object`
      * Name `string`
      * Type `string`

### ErrorDetail
* ErrorDetail `object`
  * code `integer`
  * message `string`

### ErrorResponse
* ErrorResponse `object`: Represents an error.
  * message **required** `string`: The error message.

### GenericResources
* GenericResources `array`: User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)
  * items `object`
    * DiscreteResourceSpec `object`
      * Kind `string`
      * Value `integer`
    * NamedResourceSpec `object`
      * Kind `string`
      * Value `string`

### GraphDriverData
* GraphDriverData `object`: Information about a container's graph driver.
  * Data **required** `object`
  * Name **required** `string`

### HealthConfig
* HealthConfig `object`: A test to perform to check that the container is healthy.
  * Interval `integer`: The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.
  * Retries `integer`: The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit.
  * StartPeriod `integer`: Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.
  * Test `array`: The test to perform. Possible values are:
    * items `string`
  * Timeout `integer`: The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit.

### HostConfig
* HostConfig: Container configuration that depends on the host we are running on
  * BlkioDeviceReadBps `array`: Limit read rate (bytes per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceReadIOps `array`: Limit read rate (IO per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceWriteBps `array`: Limit write rate (bytes per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceWriteIOps `array`: Limit write rate (IO per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioWeight `integer`: Block IO weight (relative weight).
  * BlkioWeightDevice `array`: Block IO weight (relative device weight) in the form `[{"Path": "device_path", "Weight": weight}]`.
    * items `object`
      * Path `string`
      * Weight `integer`
  * CgroupParent `string`: Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.
  * CpuCount `integer`: The number of usable CPUs (Windows only).
  * CpuPercent `integer`: The usable percentage of the available CPUs (Windows only).
  * CpuPeriod `integer`: The length of a CPU period in microseconds.
  * CpuQuota `integer`: Microseconds of CPU time that the container can get in a CPU period.
  * CpuRealtimePeriod `integer`: The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
  * CpuRealtimeRuntime `integer`: The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
  * CpuShares `integer`: An integer value representing this container's relative CPU weight versus other containers.
  * CpusetCpus `string`: CPUs in which to allow execution (e.g., `0-3`, `0,1`)
  * CpusetMems `string`: Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.
  * DeviceCgroupRules `array`: a list of cgroup rules to apply to the container
    * items `string`
  * Devices `array`: A list of devices to add to the container.
    * items [DeviceMapping](#devicemapping)
  * DiskQuota `integer`: Disk limit (in bytes).
  * IOMaximumBandwidth `integer`: Maximum IO in bytes per second for the container system drive (Windows only)
  * IOMaximumIOps `integer`: Maximum IOps for the container system drive (Windows only)
  * KernelMemory `integer`: Kernel memory limit in bytes.
  * Memory `integer`: Memory limit in bytes.
  * MemoryReservation `integer`: Memory soft limit in bytes.
  * MemorySwap `integer`: Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.
  * MemorySwappiness `integer`: Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.
  * NanoCPUs `integer`: CPU quota in units of 10<sup>-9</sup> CPUs.
  * OomKillDisable `boolean`: Disable OOM Killer for the container.
  * PidsLimit `integer`: Tune a container's pids limit. Set -1 for unlimited.
  * Ulimits `array`: A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
    * items `object`
      * Hard `integer`: Hard limit
      * Name `string`: Name of ulimit
      * Soft `integer`: Soft limit
  * AutoRemove `boolean`: Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.
  * Binds `array`: A list of volume bindings for this container. Each volume binding is a string in one of these forms:
    * items `string`
  * CapAdd `array`: A list of kernel capabilities to add to the container.
    * items `string`
  * CapDrop `array`: A list of kernel capabilities to drop from the container.
    * items `string`
  * Cgroup `string`: Cgroup to use for the container.
  * ConsoleSize `array`: Initial console size, as an `[height, width]` array. (Windows only)
    * items `integer`
  * ContainerIDFile `string`: Path to a file where the container ID is written
  * Dns `array`: A list of DNS servers for the container to use.
    * items `string`
  * DnsOptions `array`: A list of DNS options.
    * items `string`
  * DnsSearch `array`: A list of DNS search domains.
    * items `string`
  * ExtraHosts `array`: A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `["hostname:IP"]`.
    * items `string`
  * GroupAdd `array`: A list of additional groups that the container process will run as.
    * items `string`
  * IpcMode `string`: IPC sharing mode for the container. Possible values are:
  * Isolation `string` (values: default, process, hyperv): Isolation technology of the container. (Windows only)
  * Links `array`: A list of links for the container in the form `container_name:alias`.
    * items `string`
  * LogConfig `object`: The logging configuration for this container
    * Config `object`
    * Type `string` (values: json-file, syslog, journald, gelf, fluentd, awslogs, splunk, etwlogs, none)
  * Mounts `array`: Specification for mounts to be added to the container.
    * items [Mount](#mount)
  * NetworkMode `string`: Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.
  * OomScoreAdj `integer`: An integer value containing the score given to the container in order to tune OOM killer preferences.
  * PidMode `string`: Set the PID (Process) Namespace mode for the container. It can be either:
  * PortBindings `object`: A map of exposed container ports and the host port they should map to.
  * Privileged `boolean`: Gives the container full access to the host.
  * PublishAllPorts `boolean`: Allocates a random host port for all of a container's exposed ports.
  * ReadonlyRootfs `boolean`: Mount the container's root filesystem as read only.
  * RestartPolicy [RestartPolicy](#restartpolicy)
  * Runtime `string`: Runtime to use with this container.
  * SecurityOpt `array`: A list of string values to customize labels for MLS systems, such as SELinux.
    * items `string`
  * ShmSize `integer`: Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.
  * StorageOpt `object`: Storage driver options for this container, in the form `{"size": "120G"}`.
  * Sysctls `object`: A list of kernel parameters (sysctls) to set in the container. For example: `{"net.ipv4.ip_forward": "1"}`
  * Tmpfs `object`: A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example: `{ "/run": "rw,noexec,nosuid,size=65536k" }`.
  * UTSMode `string`: UTS namespace to use for the container.
  * UsernsMode `string`: Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
  * VolumeDriver `string`: Driver that this container uses to mount volumes.
  * VolumesFrom `array`: A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`.
    * items `string`

### IPAM
* IPAM `object`
  * Config `array`: List of IPAM configuration options, specified as a map: `{"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}`
    * items `object`
  * Driver `string`: Name of the IPAM driver to use.
  * Options `array`: Driver-specific options, specified as a map.
    * items `object`

### IdResponse
* IdResponse `object`: Response to an API call that returns just an Id
  * Id **required** `string`: The id of the newly created object.

### Image
* Image `object`
  * Architecture **required** `string`
  * Author **required** `string`
  * Comment **required** `string`
  * Config [ContainerConfig](#containerconfig)
  * Container **required** `string`
  * ContainerConfig [ContainerConfig](#containerconfig)
  * Created **required** `string`
  * DockerVersion **required** `string`
  * GraphDriver **required** [GraphDriverData](#graphdriverdata)
  * Id **required** `string`
  * Metadata `object`
    * LastTagTime `string`
  * Os **required** `string`
  * OsVersion `string`
  * Parent **required** `string`
  * RepoDigests `array`
    * items `string`
  * RepoTags `array`
    * items `string`
  * RootFS **required** `object`
    * BaseLayer `string`
    * Layers `array`
      * items `string`
    * Type **required** `string`
  * Size **required** `integer`
  * VirtualSize **required** `integer`

### ImageDeleteResponseItem
* ImageDeleteResponseItem `object`
  * Deleted `string`: The image ID of an image that was deleted
  * Untagged `string`: The image ID of an image that was untagged

### ImageSummary
* ImageSummary `object`
  * Containers **required** `integer`
  * Created **required** `integer`
  * Id **required** `string`
  * Labels **required** `object`
  * ParentId **required** `string`
  * RepoDigests **required** `array`
    * items `string`
  * RepoTags **required** `array`
    * items `string`
  * SharedSize **required** `integer`
  * Size **required** `integer`
  * VirtualSize **required** `integer`

### IndexInfo
* IndexInfo `object`: IndexInfo contains information about a registry.
  * Mirrors `array`: List of mirrors, expressed as URIs.
    * items `string`
  * Name `string`: Name of the registry, such as "docker.io".
  * Official `boolean`: Indicates whether this is an official registry (i.e., Docker Hub / docker.io)
  * Secure `boolean`: Indicates if the the registry is part of the list of insecure

### JoinTokens
* JoinTokens `object`: JoinTokens contains the tokens workers and managers need to join the swarm.
  * Manager `string`: The token managers can use to join the swarm.
  * Worker `string`: The token workers can use to join the swarm.

### LocalNodeState
* LocalNodeState `string` (values: , inactive, pending, active, error, locked): Current local status of this node.

### ManagerStatus
* ManagerStatus `object`: ManagerStatus represents the status of a manager.
  * Addr `string`: The IP address and port at which the manager is reachable.
  * Leader `boolean`
  * Reachability [Reachability](#reachability)

### Mount
* Mount `object`
  * BindOptions `object`: Optional configuration for the `bind` type.
    * Propagation `string` (values: private, rprivate, shared, rshared, slave, rslave): A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.
  * Consistency `string`: The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.
  * ReadOnly `boolean`: Whether the mount should be read-only.
  * Source `string`: Mount source (e.g. a volume name, a host path).
  * Target `string`: Container path.
  * TmpfsOptions `object`: Optional configuration for the `tmpfs` type.
    * Mode `integer`: The permission mode for the tmpfs mount in an integer.
    * SizeBytes `integer`: The size for the tmpfs mount in bytes.
  * Type `string` (values: bind, volume, tmpfs): The mount type. Available types:
  * VolumeOptions `object`: Optional configuration for the `volume` type.
    * DriverConfig `object`: Map of driver specific options
      * Name `string`: Name of the driver to use to create the volume.
      * Options `object`: key/value map of driver specific options.
    * Labels `object`: User-defined key/value metadata.
    * NoCopy `boolean`: Populate volume with data from the target.

### MountPoint
* MountPoint `object`: A mount point inside a container
  * Destination `string`
  * Driver `string`
  * Mode `string`
  * Name `string`
  * Propagation `string`
  * RW `boolean`
  * Source `string`
  * Type `string`

### Network
* Network `object`
  * Attachable `boolean`
  * Containers `object`
  * Created `string`
  * Driver `string`
  * EnableIPv6 `boolean`
  * IPAM [IPAM](#ipam)
  * Id `string`
  * Ingress `boolean`
  * Internal `boolean`
  * Labels `object`
  * Name `string`
  * Options `object`
  * Scope `string`

### NetworkContainer
* NetworkContainer `object`
  * EndpointID `string`
  * IPv4Address `string`
  * IPv6Address `string`
  * MacAddress `string`
  * Name `string`

### NetworkSettings
* NetworkSettings `object`: NetworkSettings exposes the network settings in the API
  * Bridge `string`: Name of the network'a bridge (for example, `docker0`).
  * EndpointID `string`: EndpointID uniquely represents a service endpoint in a Sandbox.
  * Gateway `string`: Gateway address for the default "bridge" network.
  * GlobalIPv6Address `string`: Global IPv6 address for the default "bridge" network.
  * GlobalIPv6PrefixLen `integer`: Mask length of the global IPv6 address.
  * HairpinMode `boolean`: Indicates if hairpin NAT should be enabled on the virtual interface.
  * IPAddress `string`: IPv4 address for the default "bridge" network.
  * IPPrefixLen `integer`: Mask length of the IPv4 address.
  * IPv6Gateway `string`: IPv6 gateway address for this network.
  * LinkLocalIPv6Address `string`: IPv6 unicast address using the link-local prefix.
  * LinkLocalIPv6PrefixLen `integer`: Prefix length of the IPv6 unicast address.
  * MacAddress `string`: MAC address for the container on the default "bridge" network.
  * Networks `object`: Information about all networks that the container is connected to.
  * Ports [PortMap](#portmap)
  * SandboxID `string`: SandboxID uniquely represents a container's network stack.
  * SandboxKey `string`: SandboxKey identifies the sandbox
  * SecondaryIPAddresses `array`
    * items [Address](#address)
  * SecondaryIPv6Addresses `array`
    * items [Address](#address)

### Node
* Node `object`
  * CreatedAt `string`: Date and time at which the node was added to the swarm in
  * Description [NodeDescription](#nodedescription)
  * ID `string`
  * ManagerStatus [ManagerStatus](#managerstatus)
  * Spec [NodeSpec](#nodespec)
  * Status [NodeStatus](#nodestatus)
  * UpdatedAt `string`: Date and time at which the node was last updated in
  * Version [ObjectVersion](#objectversion)

### NodeDescription
* NodeDescription `object`: NodeDescription encapsulates the properties of the Node as reported by the
  * Engine [EngineDescription](#enginedescription)
  * Hostname `string`
  * Platform [Platform](#platform)
  * Resources [ResourceObject](#resourceobject)
  * TLSInfo [TLSInfo](#tlsinfo)

### NodeSpec
* NodeSpec `object`
  * Availability `string` (values: active, pause, drain): Availability of the node.
  * Labels `object`: User-defined key/value metadata.
  * Name `string`: Name for the node.
  * Role `string` (values: worker, manager): Role of the node.

### NodeState
* NodeState `string` (values: unknown, down, ready, disconnected): NodeState represents the state of a node.

### NodeStatus
* NodeStatus `object`: NodeStatus represents the status of a node.
  * Addr `string`: IP address of the node.
  * Message `string`
  * State [NodeState](#nodestate)

### ObjectVersion
* ObjectVersion `object`: The version number of the object such as node, service, etc. This is needed to avoid conflicting writes.
  * Index `integer`

### PeerNode
* PeerNode `object`: Represents a peer-node in the swarm
  * Addr `string`: IP address and ports at which this node can be reached.
  * NodeID `string`: Unique identifier of for this node in the swarm.

### Platform
* Platform `object`: Platform represents the platform (Arch/OS).
  * Architecture `string`: Architecture represents the hardware architecture (for example,
  * OS `string`: OS represents the Operating System (for example, `linux` or `windows`).

### Plugin
* Plugin `object`: A plugin for the Engine API
  * Config **required** `object`: The config of a plugin.
    * Args **required** `object`
      * Description **required** `string`
      * Name **required** `string`
      * Settable **required** `array`
        * items `string`
      * Value **required** `array`
        * items `string`
    * Description **required** `string`
    * DockerVersion `string`: Docker Version used to create the plugin
    * Documentation **required** `string`
    * Entrypoint **required** `array`
      * items `string`
    * Env **required** `array`
      * items [PluginEnv](#pluginenv)
    * Interface **required** `object`: The interface between Docker and the plugin
      * Socket **required** `string`
      * Types **required** `array`
        * items [PluginInterfaceType](#plugininterfacetype)
    * IpcHost **required** `boolean`
    * Linux **required** `object`
      * AllowAllDevices **required** `boolean`
      * Capabilities **required** `array`
        * items `string`
      * Devices **required** `array`
        * items [PluginDevice](#plugindevice)
    * Mounts **required** `array`
      * items [PluginMount](#pluginmount)
    * Network **required** `object`
      * Type **required** `string`
    * PidHost **required** `boolean`
    * PropagatedMount **required** `string`
    * User `object`
      * GID `integer`
      * UID `integer`
    * WorkDir **required** `string`
    * rootfs `object`
      * diff_ids `array`
        * items `string`
      * type `string`
  * Enabled **required** `boolean`: True if the plugin is running. False if the plugin is not running, only installed.
  * Id `string`
  * Name **required** `string`
  * PluginReference `string`: plugin remote reference used to push/pull the plugin
  * Settings **required** `object`: Settings that can be modified by users.
    * Args **required** `array`
      * items `string`
    * Devices **required** `array`
      * items [PluginDevice](#plugindevice)
    * Env **required** `array`
      * items `string`
    * Mounts **required** `array`
      * items [PluginMount](#pluginmount)

### PluginDevice
* PluginDevice `object`
  * Description **required** `string`
  * Name **required** `string`
  * Path **required** `string`
  * Settable **required** `array`
    * items `string`

### PluginEnv
* PluginEnv `object`
  * Description **required** `string`
  * Name **required** `string`
  * Settable **required** `array`
    * items `string`
  * Value **required** `string`

### PluginInterfaceType
* PluginInterfaceType `object`
  * Capability **required** `string`
  * Prefix **required** `string`
  * Version **required** `string`

### PluginMount
* PluginMount `object`
  * Description **required** `string`
  * Destination **required** `string`
  * Name **required** `string`
  * Options **required** `array`
    * items `string`
  * Settable **required** `array`
    * items `string`
  * Source **required** `string`
  * Type **required** `string`

### PluginsInfo
* PluginsInfo `object`: Available plugins per type.
  * Authorization `array`: Names of available authorization plugins.
    * items `string`
  * Log `array`: Names of available logging-drivers, and logging-driver plugins.
    * items `string`
  * Network `array`: Names of available network-drivers, and network-driver plugins.
    * items `string`
  * Volume `array`: Names of available volume-drivers, and network-driver plugins.
    * items `string`

### Port
* Port `object`: An open port on a container
  * IP `string`
  * PrivatePort **required** `integer`: Port on the container
  * PublicPort `integer`: Port exposed on the host
  * Type **required** `string` (values: tcp, udp)

### PortBinding
* PortBinding `object`: PortBinding represents a binding between a host IP address and a host
  * HostIp `string`: Host IP address that the container's port is mapped to.
  * HostPort `string`: Host port number that the container's port is mapped to.

### PortMap
* PortMap `object`: PortMap describes the mapping of container ports to host ports, using the

### ProcessConfig
* ProcessConfig `object`
  * arguments `array`
    * items `string`
  * entrypoint `string`
  * privileged `boolean`
  * tty `boolean`
  * user `string`

### ProgressDetail
* ProgressDetail `object`
  * code `integer`
  * message `integer`

### PushImageInfo
* PushImageInfo `object`
  * error `string`
  * progress `string`
  * progressDetail [ProgressDetail](#progressdetail)
  * status `string`

### Reachability
* Reachability `string` (values: unknown, unreachable, reachable): Reachability represents the reachability of a node.

### RegistryServiceConfig
* RegistryServiceConfig `object`: RegistryServiceConfig stores daemon registry services configuration.
  * AllowNondistributableArtifactsCIDRs `array`: List of IP ranges to which nondistributable artifacts can be pushed,
    * items `string`
  * AllowNondistributableArtifactsHostnames `array`: List of registry hostnames to which nondistributable artifacts can be
    * items `string`
  * IndexConfigs `object`
  * InsecureRegistryCIDRs `array`: List of IP ranges of insecure registries, using the CIDR syntax
    * items `string`
  * Mirrors `array`: List of registry URLs that act as a mirror for the official
    * items `string`

### ResourceObject
* ResourceObject `object`: An object describing the resources which can be advertised by a node and requested by a task
  * GenericResources [GenericResources](#genericresources)
  * MemoryBytes `integer`
  * NanoCPUs `integer`

### Resources
* Resources `object`: A container's resources (cgroups config, ulimits, etc)
  * BlkioDeviceReadBps `array`: Limit read rate (bytes per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceReadIOps `array`: Limit read rate (IO per second) from a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceWriteBps `array`: Limit write rate (bytes per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioDeviceWriteIOps `array`: Limit write rate (IO per second) to a device, in the form `[{"Path": "device_path", "Rate": rate}]`.
    * items [ThrottleDevice](#throttledevice)
  * BlkioWeight `integer`: Block IO weight (relative weight).
  * BlkioWeightDevice `array`: Block IO weight (relative device weight) in the form `[{"Path": "device_path", "Weight": weight}]`.
    * items `object`
      * Path `string`
      * Weight `integer`
  * CgroupParent `string`: Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.
  * CpuCount `integer`: The number of usable CPUs (Windows only).
  * CpuPercent `integer`: The usable percentage of the available CPUs (Windows only).
  * CpuPeriod `integer`: The length of a CPU period in microseconds.
  * CpuQuota `integer`: Microseconds of CPU time that the container can get in a CPU period.
  * CpuRealtimePeriod `integer`: The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
  * CpuRealtimeRuntime `integer`: The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.
  * CpuShares `integer`: An integer value representing this container's relative CPU weight versus other containers.
  * CpusetCpus `string`: CPUs in which to allow execution (e.g., `0-3`, `0,1`)
  * CpusetMems `string`: Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.
  * DeviceCgroupRules `array`: a list of cgroup rules to apply to the container
    * items `string`
  * Devices `array`: A list of devices to add to the container.
    * items [DeviceMapping](#devicemapping)
  * DiskQuota `integer`: Disk limit (in bytes).
  * IOMaximumBandwidth `integer`: Maximum IO in bytes per second for the container system drive (Windows only)
  * IOMaximumIOps `integer`: Maximum IOps for the container system drive (Windows only)
  * KernelMemory `integer`: Kernel memory limit in bytes.
  * Memory `integer`: Memory limit in bytes.
  * MemoryReservation `integer`: Memory soft limit in bytes.
  * MemorySwap `integer`: Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.
  * MemorySwappiness `integer`: Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.
  * NanoCPUs `integer`: CPU quota in units of 10<sup>-9</sup> CPUs.
  * OomKillDisable `boolean`: Disable OOM Killer for the container.
  * PidsLimit `integer`: Tune a container's pids limit. Set -1 for unlimited.
  * Ulimits `array`: A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
    * items `object`
      * Hard `integer`: Hard limit
      * Name `string`: Name of ulimit
      * Soft `integer`: Soft limit

### RestartPolicy
* RestartPolicy `object`: The behavior to apply when the container exits. The default is not to restart.
  * MaximumRetryCount `integer`: If `on-failure` is used, the number of times to retry before giving up
  * Name `string` (values: , always, unless-stopped, on-failure): - Empty string means not to restart

### Runtime
* Runtime `object`: Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)
  * path `string`: Name and, optional, path, of the OCI executable binary.
  * runtimeArgs `array`: List of command-line arguments to pass to the runtime when invoked.
    * items `string`

### Secret
* Secret `object`
  * CreatedAt `string`
  * ID `string`
  * Spec [SecretSpec](#secretspec)
  * UpdatedAt `string`
  * Version [ObjectVersion](#objectversion)

### SecretSpec
* SecretSpec `object`
  * Data `string`: Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-3.2))
  * Driver [Driver](#driver)
  * Labels `object`: User-defined key/value metadata.
  * Name `string`: User-defined name of the secret.

### Service
* Service `object`
  * CreatedAt `string`
  * Endpoint `object`
    * Ports `array`
      * items [EndpointPortConfig](#endpointportconfig)
    * Spec [EndpointSpec](#endpointspec)
    * VirtualIPs `array`
      * items `object`
        * Addr `string`
        * NetworkID `string`
  * ID `string`
  * Spec [ServiceSpec](#servicespec)
  * UpdateStatus `object`: The status of a service update.
    * CompletedAt `string`
    * Message `string`
    * StartedAt `string`
    * State `string` (values: updating, paused, completed)
  * UpdatedAt `string`
  * Version [ObjectVersion](#objectversion)

### ServiceSpec
* ServiceSpec `object`: User modifiable configuration for a service.
  * EndpointSpec [EndpointSpec](#endpointspec)
  * Labels `object`: User-defined key/value metadata.
  * Mode `object`: Scheduling mode for the service.
    * Global `object`
    * Replicated `object`
      * Replicas `integer`
  * Name `string`: Name of the service.
  * Networks `array`: Array of network names or IDs to attach the service to.
    * items `object`
      * Aliases `array`
        * items `string`
      * Target `string`
  * RollbackConfig `object`: Specification for the rollback strategy of the service.
    * Delay `integer`: Amount of time between rollback iterations, in nanoseconds.
    * FailureAction `string` (values: continue, pause): Action to take if an rolled back task fails to run, or stops running during the rollback.
    * MaxFailureRatio `number`: The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1.
    * Monitor `integer`: Amount of time to monitor each rolled back task for failures, in nanoseconds.
    * Order `string` (values: stop-first, start-first): The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
    * Parallelism `integer`: Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism).
  * TaskTemplate [TaskSpec](#taskspec)
  * UpdateConfig `object`: Specification for the update strategy of the service.
    * Delay `integer`: Amount of time between updates, in nanoseconds.
    * FailureAction `string` (values: continue, pause, rollback): Action to take if an updated task fails to run, or stops running during the update.
    * MaxFailureRatio `number`: The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1.
    * Monitor `integer`: Amount of time to monitor each updated task for failures, in nanoseconds.
    * Order `string` (values: stop-first, start-first): The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.
    * Parallelism `integer`: Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism).

### ServiceUpdateResponse
* ServiceUpdateResponse `object`
  * Warnings `array`: Optional warning messages
    * items `string`

### Swarm
* Swarm `object`
  * CreatedAt `string`: Date and time at which the swarm was initialised in
  * ID `string`: The ID of the swarm.
  * RootRotationInProgress `boolean`: Whether there is currently a root CA rotation in progress for the swarm
  * Spec [SwarmSpec](#swarmspec)
  * TLSInfo [TLSInfo](#tlsinfo)
  * UpdatedAt `string`: Date and time at which the swarm was last updated in
  * Version [ObjectVersion](#objectversion)
  * JoinTokens [JoinTokens](#jointokens)

### SwarmInfo
* SwarmInfo `object`: Represents generic information about swarm.
  * Cluster [ClusterInfo](#clusterinfo)
  * ControlAvailable `boolean`
  * Error `string`
  * LocalNodeState [LocalNodeState](#localnodestate)
  * Managers `integer`: Total number of managers in the swarm.
  * NodeAddr `string`: IP address at which this node can be reached by other nodes in the
  * NodeID `string`: Unique identifier of for this node in the swarm.
  * Nodes `integer`: Total number of nodes in the swarm.
  * RemoteManagers `array`: List of ID's and addresses of other managers in the swarm.
    * items [PeerNode](#peernode)

### SwarmSpec
* SwarmSpec `object`: User modifiable swarm configuration.
  * CAConfig `object`: CA configuration.
    * ExternalCAs `array`: Configuration for forwarding signing requests to an external certificate authority.
      * items `object`
        * CACert `string`: The root CA certificate (in PEM format) this external CA uses to issue TLS certificates (assumed to be to the current swarm root CA certificate if not provided).
        * Options `object`: An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver.
        * Protocol `string` (values: cfssl): Protocol for communication with the external CA (currently only `cfssl` is supported).
        * URL `string`: URL where certificate signing requests should be sent.
    * ForceRotate `integer`: An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified in `SigningCACert` and `SigningCAKey`
    * NodeCertExpiry `integer`: The duration node certificates are issued for.
    * SigningCACert `string`: The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format.
    * SigningCAKey `string`: The desired signing CA key for all swarm node TLS leaf certificates, in PEM format.
  * Dispatcher `object`: Dispatcher configuration.
    * HeartbeatPeriod `integer`: The delay for an agent to send a heartbeat to the dispatcher.
  * EncryptionConfig `object`: Parameters related to encryption-at-rest.
    * AutoLockManagers `boolean`: If set, generate a key and use it to lock data stored on the managers.
  * Labels `object`: User-defined key/value metadata.
  * Name `string`: Name of the swarm.
  * Orchestration `object`: Orchestration configuration.
    * TaskHistoryRetentionLimit `integer`: The number of historic tasks to keep per instance or node. If negative, never remove completed or failed tasks.
  * Raft `object`: Raft configuration.
    * ElectionTick `integer`: The number of ticks that a follower will wait for a message from the leader before becoming a candidate and starting an election. `ElectionTick` must be greater than `HeartbeatTick`.
    * HeartbeatTick `integer`: The number of ticks between heartbeats. Every HeartbeatTick ticks, the leader will send a heartbeat to the followers.
    * KeepOldSnapshots `integer`: The number of snapshots to keep beyond the current snapshot.
    * LogEntriesForSlowFollowers `integer`: The number of log entries to keep around to sync up slow followers after a snapshot is created.
    * SnapshotInterval `integer`: The number of log entries between snapshots.
  * TaskDefaults `object`: Defaults for creating tasks in this cluster.
    * LogDriver `object`: The log driver to use for tasks created in the orchestrator if
      * Name `string`: The log driver to use as a default for new tasks.
      * Options `object`: Driver-specific options for the selectd log driver, specified

### SystemInfo
* SystemInfo `object`
  * Architecture `string`: Hardware architecture of the host, as returned by the Go runtime
  * BridgeNfIp6tables `boolean`: Indicates if `bridge-nf-call-ip6tables` is available on the host.
  * BridgeNfIptables `boolean`: Indicates if `bridge-nf-call-iptables` is available on the host.
  * CPUSet `boolean`: Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.
  * CPUShares `boolean`: Indicates if CPU Shares limiting is supported by the host.
  * CgroupDriver `string` (values: cgroupfs, systemd): The driver to use for managing cgroups.
  * ClusterAdvertise `string`: The network endpoint that the Engine advertises for the purpose of
  * ClusterStore `string`: URL of the distributed storage backend.
  * ContainerdCommit [Commit](#commit)
  * Containers `integer`: Total number of containers on the host.
  * ContainersPaused `integer`: Number of containers with status `"paused"`.
  * ContainersRunning `integer`: Number of containers with status `"running"`.
  * ContainersStopped `integer`: Number of containers with status `"stopped"`.
  * CpuCfsPeriod `boolean`: Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host.
  * CpuCfsQuota `boolean`: Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host.
  * Debug `boolean`: Indicates if the daemon is running in debug-mode / with debug-level logging enabled.
  * DefaultRuntime `string`: Name of the default OCI runtime that is used when starting containers.
  * DockerRootDir `string`: Root directory of persistent Docker state.
  * Driver `string`: Name of the storage driver in use.
  * DriverStatus `array`: Information specific to the storage driver, provided as
    * items `array`
      * items `string`
  * ExperimentalBuild `boolean`: Indicates if experimental features are enabled on the daemon.
  * GenericResources [GenericResources](#genericresources)
  * HttpProxy `string`: HTTP-proxy configured for the daemon. This value is obtained from the
  * HttpsProxy `string`: HTTPS-proxy configured for the daemon. This value is obtained from the
  * ID `string`: Unique identifier of the daemon.
  * IPv4Forwarding `boolean`: Indicates IPv4 forwarding is enabled.
  * Images `integer`: Total number of images on the host.
  * IndexServerAddress `string`: Address / URL of the index server that is used for image search,
  * InitBinary `string`: Name and, optional, path of the the `docker-init` binary.
  * InitCommit [Commit](#commit)
  * Isolation `string` (values: default, hyperv, process): Represents the isolation technology to use as a default for containers.
  * KernelMemory `boolean`: Indicates if the host has kernel memory limit support enabled.
  * KernelVersion `string`: Kernel version of the host.
  * Labels `array`: User-defined labels (key/value metadata) as set on the daemon.
    * items `string`
  * LiveRestoreEnabled `boolean`: Indicates if live restore is enabled.
  * LoggingDriver `string`: The logging driver to use as a default for new containers.
  * MemTotal `integer`: Total amount of physical memory available on the host, in kilobytes (kB).
  * MemoryLimit `boolean`: Indicates if the host has memory limit support enabled.
  * NCPU `integer`: The number of logical CPUs usable by the daemon.
  * NEventsListener `integer`: Number of event listeners subscribed.
  * NFd `integer`: The total number of file Descriptors in use by the daemon process.
  * NGoroutines `integer`: The  number of goroutines that currently exist.
  * Name `string`: Hostname of the host.
  * NoProxy `string`: Comma-separated list of domain extensions for which no proxy should be
  * OSType `string`: Generic type of the operating system of the host, as returned by the
  * OomKillDisable `boolean`: Indicates if OOM killer disable is supported on the host.
  * OperatingSystem `string`: Name of the host's operating system, for example: "Ubuntu 16.04.2 LTS"
  * Plugins [PluginsInfo](#pluginsinfo)
  * RegistryConfig [RegistryServiceConfig](#registryserviceconfig)
  * RuncCommit [Commit](#commit)
  * Runtimes `object`: List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
  * SecurityOptions `array`: List of security features that are enabled on the daemon, such as
    * items `string`
  * ServerVersion `string`: Version string of the daemon.
  * SwapLimit `boolean`: Indicates if the host has memory swap limit support enabled.
  * Swarm [SwarmInfo](#swarminfo)
  * SystemStatus `array`: Status information about this node (standalone Swarm API).
    * items `array`
      * items `string`
  * SystemTime `string`: Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)

### TLSInfo
* TLSInfo `object`: Information about the issuer of leaf TLS certificates and the trusted root CA certificate
  * CertIssuerPublicKey `string`: The base64-url-safe-encoded raw public key bytes of the issuer
  * CertIssuerSubject `string`: The base64-url-safe-encoded raw subject bytes of the issuer
  * TrustRoot `string`: The root CA certificate(s) that are used to validate leaf TLS certificates

### Task
* Task `object`
  * AssignedGenericResources [GenericResources](#genericresources)
  * CreatedAt `string`
  * DesiredState [TaskState](#taskstate)
  * ID `string`: The ID of the task.
  * Labels `object`: User-defined key/value metadata.
  * Name `string`: Name of the task.
  * NodeID `string`: The ID of the node that this task is on.
  * ServiceID `string`: The ID of the service this task is part of.
  * Slot `integer`
  * Spec [TaskSpec](#taskspec)
  * Status `object`
    * ContainerStatus `object`
      * ContainerID `string`
      * ExitCode `integer`
      * PID `integer`
    * Err `string`
    * Message `string`
    * State [TaskState](#taskstate)
    * Timestamp `string`
  * UpdatedAt `string`
  * Version [ObjectVersion](#objectversion)

### TaskSpec
* TaskSpec `object`: User modifiable task configuration.
  * ContainerSpec `object`: Invalid when specified with `PluginSpec`.
    * Args `array`: Arguments to the command.
      * items `string`
    * Command `array`: The command to be run in the image.
      * items `string`
    * Configs `array`: Configs contains references to zero or more configs that will be exposed to the service.
      * items `object`
        * ConfigID `string`: ConfigID represents the ID of the specific config that we're referencing.
        * ConfigName `string`: ConfigName is the name of the config that this references, but this is just provided for
        * File `object`: File represents a specific target that is backed by a file.
          * GID `string`: GID represents the file GID.
          * Mode `integer`: Mode represents the FileMode of the file.
          * Name `string`: Name represents the final filename in the filesystem.
          * UID `string`: UID represents the file UID.
    * DNSConfig `object`: Specification for DNS related configurations in resolver configuration file (`resolv.conf`).
      * Nameservers `array`: The IP addresses of the name servers.
        * items `string`
      * Options `array`: A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).
        * items `string`
      * Search `array`: A search list for host-name lookup.
        * items `string`
    * Dir `string`: The working directory for commands to run in.
    * Env `array`: A list of environment variables in the form `VAR=value`.
      * items `string`
    * Groups `array`: A list of additional groups that the container process will run as.
      * items `string`
    * HealthCheck [HealthConfig](#healthconfig)
    * Hostname `string`: The hostname to use for the container, as a valid RFC 1123 hostname.
    * Hosts `array`: A list of hostname/IP mappings to add to the container's `hosts`
      * items `string`
    * Image `string`: The image name to use for the container
    * Labels `object`: User-defined key/value data.
    * Mounts `array`: Specification for mounts to be added to containers created as part of the service.
      * items [Mount](#mount)
    * OpenStdin `boolean`: Open `stdin`
    * Privileges `object`: Security options for the container
      * CredentialSpec `object`: CredentialSpec for managed service account (Windows only)
        * File `string`: Load credential spec from this file. The file is read by the daemon, and must be present in the
        * Registry `string`: Load credential spec from this value in the Windows registry. The specified registry value must be
      * SELinuxContext `object`: SELinux labels of the container
        * Disable `boolean`: Disable SELinux
        * Level `string`: SELinux level label
        * Role `string`: SELinux role label
        * Type `string`: SELinux type label
        * User `string`: SELinux user label
    * ReadOnly `boolean`: Mount the container's root filesystem as read only.
    * Secrets `array`: Secrets contains references to zero or more secrets that will be exposed to the service.
      * items `object`
        * File `object`: File represents a specific target that is backed by a file.
          * GID `string`: GID represents the file GID.
          * Mode `integer`: Mode represents the FileMode of the file.
          * Name `string`: Name represents the final filename in the filesystem.
          * UID `string`: UID represents the file UID.
        * SecretID `string`: SecretID represents the ID of the specific secret that we're referencing.
        * SecretName `string`: SecretName is the name of the secret that this references, but this is just provided for
    * StopGracePeriod `integer`: Amount of time to wait for the container to terminate before forcefully killing it.
    * StopSignal `string`: Signal to stop the container.
    * TTY `boolean`: Whether a pseudo-TTY should be allocated.
    * User `string`: The user inside the container.
  * ForceUpdate `integer`: A counter that triggers an update even if no relevant parameters have been changed.
  * LogDriver `object`: Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified.
    * Name `string`
    * Options `object`
  * Networks `array`
    * items `object`
      * Aliases `array`
        * items `string`
      * Target `string`
  * Placement `object`
    * Constraints `array`: An array of constraints.
      * items `string`
    * Platforms `array`: Platforms stores all the platforms that the service's image can
      * items [Platform](#platform)
    * Preferences `array`: Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence.
      * items `object`
        * Spread `object`
          * SpreadDescriptor `string`: label descriptor, such as engine.labels.az
  * PluginSpec `object`: Invalid when specified with `ContainerSpec`. *(Experimental release only.)*
    * Disabled `boolean`: Disable the plugin once scheduled.
    * Name `string`: The name or 'alias' to use for the plugin.
    * PluginPrivilege `array`
      * items `object`: Describes a permission accepted by the user upon installing the plugin.
        * Description `string`
        * Name `string`
        * Value `array`
          * items `string`
    * Remote `string`: The plugin image reference to use.
  * Resources `object`: Resource requirements which apply to each individual container created as part of the service.
    * Limits [ResourceObject](#resourceobject)
    * Reservation [ResourceObject](#resourceobject)
  * RestartPolicy `object`: Specification for the restart policy which applies to containers created as part of this service.
    * Condition `string` (values: none, on-failure, any): Condition for restart.
    * Delay `integer`: Delay between restart attempts.
    * MaxAttempts `integer`: Maximum attempts to restart a given container before giving up (default value is 0, which is ignored).
    * Window `integer`: Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded).
  * Runtime `string`: Runtime is the type of runtime specified for the task executor.

### TaskState
* TaskState `string` (values: new, allocated, pending, assigned, accepted, preparing, ready, starting, running, complete, shutdown, failed, rejected)

### ThrottleDevice
* ThrottleDevice `object`
  * Path `string`: Device path
  * Rate `integer`: Rate

### Volume
* Volume `object`
  * CreatedAt `string`: Date/Time the volume was created.
  * Driver **required** `string`: Name of the volume driver used by the volume.
  * Labels **required** `object`: User-defined key/value metadata.
  * Mountpoint **required** `string`: Mount path of the volume on the host.
  * Name **required** `string`: Name of the volume.
  * Options **required** `object`: The driver specific options used when creating the volume.
  * Scope **required** `string` (values: local, global): The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.
  * Status `object`: Low-level details about the volume, provided by the volume driver.
  * UsageData `object`: Usage details about the volume. This information is used by the
    * RefCount **required** `integer`: The number of containers referencing this volume. This field
    * Size **required** `integer`: Amount of disk space used by the volume (in bytes). This information


