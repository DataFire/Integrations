# @datafire/netboxdemo

Client library for NetBox API

## Installation and Usage
```bash
npm install --save @datafire/netboxdemo
```
```js
let netboxdemo = require('@datafire/netboxdemo').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API to access NetBox

## Actions

### circuits.circuit_terminations.get
Call to super to allow for caching


```js
netboxdemo.circuits.circuit_terminations.get({}, context)
```

#### Input
* input `object`
  * term_side `string`
  * port_speed `string`
  * upstream_speed `string`
  * xconnect_id `string`
  * q `string`
  * circuit_id `string`
  * site_id `string`
  * site `string`
  * term_side__n `string`
  * port_speed__n `string`
  * port_speed__lte `string`
  * port_speed__lt `string`
  * port_speed__gte `string`
  * port_speed__gt `string`
  * upstream_speed__n `string`
  * upstream_speed__lte `string`
  * upstream_speed__lt `string`
  * upstream_speed__gte `string`
  * upstream_speed__gt `string`
  * xconnect_id__n `string`
  * xconnect_id__ic `string`
  * xconnect_id__nic `string`
  * xconnect_id__iew `string`
  * xconnect_id__niew `string`
  * xconnect_id__isw `string`
  * xconnect_id__nisw `string`
  * xconnect_id__ie `string`
  * xconnect_id__nie `string`
  * circuit_id__n `string`
  * site_id__n `string`
  * site__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [CircuitTermination](#circuittermination)

### circuits.circuit_terminations.post



```js
netboxdemo.circuits.circuit_terminations.post({
  "body": {
    "circuit": 0,
    "term_side": "",
    "site": 0,
    "port_speed": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuitTermination](#writablecircuittermination)

#### Output
* output [CircuitTermination](#circuittermination)

### circuits.circuit_terminations.id.delete



```js
netboxdemo.circuits.circuit_terminations.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit termination.

#### Output
*Output schema unknown*

### circuits.circuit_terminations.id.get
Call to super to allow for caching


```js
netboxdemo.circuits.circuit_terminations.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit termination.

#### Output
* output [CircuitTermination](#circuittermination)

### circuits.circuit_terminations.id.patch



```js
netboxdemo.circuits.circuit_terminations.id.patch({
  "body": {
    "circuit": 0,
    "term_side": "",
    "site": 0,
    "port_speed": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuitTermination](#writablecircuittermination)
  * id **required** `integer`: A unique integer value identifying this circuit termination.

#### Output
* output [CircuitTermination](#circuittermination)

### circuits.circuit_terminations.id.put



```js
netboxdemo.circuits.circuit_terminations.id.put({
  "body": {
    "circuit": 0,
    "term_side": "",
    "site": 0,
    "port_speed": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuitTermination](#writablecircuittermination)
  * id **required** `integer`: A unique integer value identifying this circuit termination.

#### Output
* output [CircuitTermination](#circuittermination)

### circuits.circuit_types.get
Call to super to allow for caching


```js
netboxdemo.circuits.circuit_types.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [CircuitType](#circuittype)

### circuits.circuit_types.post



```js
netboxdemo.circuits.circuit_types.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CircuitType](#circuittype)

#### Output
* output [CircuitType](#circuittype)

### circuits.circuit_types.id.delete



```js
netboxdemo.circuits.circuit_types.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit type.

#### Output
*Output schema unknown*

### circuits.circuit_types.id.get
Call to super to allow for caching


```js
netboxdemo.circuits.circuit_types.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit type.

#### Output
* output [CircuitType](#circuittype)

### circuits.circuit_types.id.patch



```js
netboxdemo.circuits.circuit_types.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [CircuitType](#circuittype)
  * id **required** `integer`: A unique integer value identifying this circuit type.

#### Output
* output [CircuitType](#circuittype)

### circuits.circuit_types.id.put



```js
netboxdemo.circuits.circuit_types.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [CircuitType](#circuittype)
  * id **required** `integer`: A unique integer value identifying this circuit type.

#### Output
* output [CircuitType](#circuittype)

### circuits_circuits_list
Call to super to allow for caching


```js
netboxdemo.circuits_circuits_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * cid `string`
  * install_date `string`
  * commit_rate `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * provider_id `string`
  * provider `string`
  * type_id `string`
  * type `string`
  * status `string`
  * site_id `string`
  * site `string`
  * region_id `string`
  * region `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * cid__n `string`
  * cid__ic `string`
  * cid__nic `string`
  * cid__iew `string`
  * cid__niew `string`
  * cid__isw `string`
  * cid__nisw `string`
  * cid__ie `string`
  * cid__nie `string`
  * install_date__n `string`
  * install_date__lte `string`
  * install_date__lt `string`
  * install_date__gte `string`
  * install_date__gt `string`
  * commit_rate__n `string`
  * commit_rate__lte `string`
  * commit_rate__lt `string`
  * commit_rate__gte `string`
  * commit_rate__gt `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * provider_id__n `string`
  * provider__n `string`
  * type_id__n `string`
  * type__n `string`
  * status__n `string`
  * site_id__n `string`
  * site__n `string`
  * region_id__n `string`
  * region__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Circuit](#circuit)

### circuits_circuits_create



```js
netboxdemo.circuits_circuits_create({
  "body": {
    "cid": "",
    "provider": 0,
    "type": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuit](#writablecircuit)

#### Output
* output [Circuit](#circuit)

### circuits_circuits_delete



```js
netboxdemo.circuits_circuits_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit.

#### Output
*Output schema unknown*

### circuits_circuits_read
Call to super to allow for caching


```js
netboxdemo.circuits_circuits_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this circuit.

#### Output
* output [Circuit](#circuit)

### circuits_circuits_partial_update



```js
netboxdemo.circuits_circuits_partial_update({
  "body": {
    "cid": "",
    "provider": 0,
    "type": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuit](#writablecircuit)
  * id **required** `integer`: A unique integer value identifying this circuit.

#### Output
* output [Circuit](#circuit)

### circuits_circuits_update



```js
netboxdemo.circuits_circuits_update({
  "body": {
    "cid": "",
    "provider": 0,
    "type": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCircuit](#writablecircuit)
  * id **required** `integer`: A unique integer value identifying this circuit.

#### Output
* output [Circuit](#circuit)

### circuits_providers_list
Call to super to allow for caching


```js
netboxdemo.circuits_providers_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * asn `string`
  * account `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * asn__n `string`
  * asn__lte `string`
  * asn__lt `string`
  * asn__gte `string`
  * asn__gt `string`
  * account__n `string`
  * account__ic `string`
  * account__nic `string`
  * account__iew `string`
  * account__niew `string`
  * account__isw `string`
  * account__nisw `string`
  * account__ie `string`
  * account__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Provider](#provider)

### circuits_providers_create



```js
netboxdemo.circuits_providers_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Provider](#provider)

#### Output
* output [Provider](#provider)

### circuits_providers_delete



```js
netboxdemo.circuits_providers_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this provider.

#### Output
*Output schema unknown*

### circuits_providers_read
Call to super to allow for caching


```js
netboxdemo.circuits_providers_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this provider.

#### Output
* output [Provider](#provider)

### circuits_providers_partial_update



```js
netboxdemo.circuits_providers_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Provider](#provider)
  * id **required** `integer`: A unique integer value identifying this provider.

#### Output
* output [Provider](#provider)

### circuits_providers_update



```js
netboxdemo.circuits_providers_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Provider](#provider)
  * id **required** `integer`: A unique integer value identifying this provider.

#### Output
* output [Provider](#provider)

### circuits_providers_graphs
A convenience method for rendering graphs for a particular provider.


```js
netboxdemo.circuits_providers_graphs({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this provider.

#### Output
* output [Provider](#provider)

### dcim_cables_list
Call to super to allow for caching


```js
netboxdemo.dcim_cables_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * label `string`
  * length `string`
  * length_unit `string`
  * q `string`
  * type `string`
  * status `string`
  * color `string`
  * device_id `string`
  * device `string`
  * rack_id `string`
  * rack `string`
  * site_id `string`
  * site `string`
  * tenant_id `string`
  * tenant `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * label__n `string`
  * label__ic `string`
  * label__nic `string`
  * label__iew `string`
  * label__niew `string`
  * label__isw `string`
  * label__nisw `string`
  * label__ie `string`
  * label__nie `string`
  * length__n `string`
  * length__lte `string`
  * length__lt `string`
  * length__gte `string`
  * length__gt `string`
  * length_unit__n `string`
  * type__n `string`
  * status__n `string`
  * color__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Cable](#cable)

### dcim_cables_create



```js
netboxdemo.dcim_cables_create({
  "body": {
    "termination_a_type": "",
    "termination_a_id": 0,
    "termination_b_type": "",
    "termination_b_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCable](#writablecable)

#### Output
* output [Cable](#cable)

### dcim_cables_delete



```js
netboxdemo.dcim_cables_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cable.

#### Output
*Output schema unknown*

### dcim_cables_read
Call to super to allow for caching


```js
netboxdemo.dcim_cables_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cable.

#### Output
* output [Cable](#cable)

### dcim_cables_partial_update



```js
netboxdemo.dcim_cables_partial_update({
  "body": {
    "termination_a_type": "",
    "termination_a_id": 0,
    "termination_b_type": "",
    "termination_b_id": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCable](#writablecable)
  * id **required** `integer`: A unique integer value identifying this cable.

#### Output
* output [Cable](#cable)

### dcim_cables_update



```js
netboxdemo.dcim_cables_update({
  "body": {
    "termination_a_type": "",
    "termination_a_id": 0,
    "termination_b_type": "",
    "termination_b_id": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCable](#writablecable)
  * id **required** `integer`: A unique integer value identifying this cable.

#### Output
* output [Cable](#cable)

### dcim.connected_device.get
This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface


```js
netboxdemo.dcim.connected_device.get({
  "peer_device": "",
  "peer_interface": ""
}, context)
```

#### Input
* input `object`
  * peer_device **required** `string`: The name of the peer device
  * peer_interface **required** `string`: The name of the peer interface

#### Output
* output [Device](#device)

### dcim.console_connections.get



```js
netboxdemo.dcim.console_connections.get({}, context)
```

#### Input
* input `object`
  * name `string`
  * connection_status `string`
  * site `string`
  * device_id `string`
  * device `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * connection_status__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConsolePort](#consoleport)

### dcim.console_port_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_port_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConsolePortTemplate](#consoleporttemplate)

### dcim.console_port_templates.post



```js
netboxdemo.dcim.console_port_templates.post({
  "body": {
    "device_type": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePortTemplate](#writableconsoleporttemplate)

#### Output
* output [ConsolePortTemplate](#consoleporttemplate)

### dcim.console_port_templates.id.delete



```js
netboxdemo.dcim.console_port_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console port template.

#### Output
*Output schema unknown*

### dcim.console_port_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_port_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console port template.

#### Output
* output [ConsolePortTemplate](#consoleporttemplate)

### dcim.console_port_templates.id.patch



```js
netboxdemo.dcim.console_port_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePortTemplate](#writableconsoleporttemplate)
  * id **required** `integer`: A unique integer value identifying this console port template.

#### Output
* output [ConsolePortTemplate](#consoleporttemplate)

### dcim.console_port_templates.id.put



```js
netboxdemo.dcim.console_port_templates.id.put({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePortTemplate](#writableconsoleporttemplate)
  * id **required** `integer`: A unique integer value identifying this console port template.

#### Output
* output [ConsolePortTemplate](#consoleporttemplate)

### dcim.console_ports.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_ports.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * description `string`
  * connection_status `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * type `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * connection_status__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * type__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConsolePort](#consoleport)

### dcim.console_ports.post



```js
netboxdemo.dcim.console_ports.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePort](#writableconsoleport)

#### Output
* output [ConsolePort](#consoleport)

### dcim.console_ports.id.delete



```js
netboxdemo.dcim.console_ports.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console port.

#### Output
*Output schema unknown*

### dcim.console_ports.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_ports.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console port.

#### Output
* output [ConsolePort](#consoleport)

### dcim.console_ports.id.patch



```js
netboxdemo.dcim.console_ports.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePort](#writableconsoleport)
  * id **required** `integer`: A unique integer value identifying this console port.

#### Output
* output [ConsolePort](#consoleport)

### dcim.console_ports.id.put



```js
netboxdemo.dcim.console_ports.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsolePort](#writableconsoleport)
  * id **required** `integer`: A unique integer value identifying this console port.

#### Output
* output [ConsolePort](#consoleport)

### dcim.console_ports.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.console_ports.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console port.

#### Output
* output [ConsolePort](#consoleport)

### dcim.console_server_port_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_server_port_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConsoleServerPortTemplate](#consoleserverporttemplate)

### dcim.console_server_port_templates.post



```js
netboxdemo.dcim.console_server_port_templates.post({
  "body": {
    "device_type": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPortTemplate](#writableconsoleserverporttemplate)

#### Output
* output [ConsoleServerPortTemplate](#consoleserverporttemplate)

### dcim.console_server_port_templates.id.delete



```js
netboxdemo.dcim.console_server_port_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console server port template.

#### Output
*Output schema unknown*

### dcim.console_server_port_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_server_port_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console server port template.

#### Output
* output [ConsoleServerPortTemplate](#consoleserverporttemplate)

### dcim.console_server_port_templates.id.patch



```js
netboxdemo.dcim.console_server_port_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPortTemplate](#writableconsoleserverporttemplate)
  * id **required** `integer`: A unique integer value identifying this console server port template.

#### Output
* output [ConsoleServerPortTemplate](#consoleserverporttemplate)

### dcim.console_server_port_templates.id.put



```js
netboxdemo.dcim.console_server_port_templates.id.put({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPortTemplate](#writableconsoleserverporttemplate)
  * id **required** `integer`: A unique integer value identifying this console server port template.

#### Output
* output [ConsoleServerPortTemplate](#consoleserverporttemplate)

### dcim.console_server_ports.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_server_ports.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * description `string`
  * connection_status `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * type `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * connection_status__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * type__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConsoleServerPort](#consoleserverport)

### dcim.console_server_ports.post



```js
netboxdemo.dcim.console_server_ports.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPort](#writableconsoleserverport)

#### Output
* output [ConsoleServerPort](#consoleserverport)

### dcim.console_server_ports.id.delete



```js
netboxdemo.dcim.console_server_ports.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console server port.

#### Output
*Output schema unknown*

### dcim.console_server_ports.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.console_server_ports.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console server port.

#### Output
* output [ConsoleServerPort](#consoleserverport)

### dcim.console_server_ports.id.patch



```js
netboxdemo.dcim.console_server_ports.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPort](#writableconsoleserverport)
  * id **required** `integer`: A unique integer value identifying this console server port.

#### Output
* output [ConsoleServerPort](#consoleserverport)

### dcim.console_server_ports.id.put



```js
netboxdemo.dcim.console_server_ports.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConsoleServerPort](#writableconsoleserverport)
  * id **required** `integer`: A unique integer value identifying this console server port.

#### Output
* output [ConsoleServerPort](#consoleserverport)

### dcim.console_server_ports.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.console_server_ports.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this console server port.

#### Output
* output [ConsoleServerPort](#consoleserverport)

### dcim.device_bay_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_bay_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceBayTemplate](#devicebaytemplate)

### dcim.device_bay_templates.post



```js
netboxdemo.dcim.device_bay_templates.post({
  "body": {
    "device_type": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBayTemplate](#writabledevicebaytemplate)

#### Output
* output [DeviceBayTemplate](#devicebaytemplate)

### dcim.device_bay_templates.id.delete



```js
netboxdemo.dcim.device_bay_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device bay template.

#### Output
*Output schema unknown*

### dcim.device_bay_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_bay_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device bay template.

#### Output
* output [DeviceBayTemplate](#devicebaytemplate)

### dcim.device_bay_templates.id.patch



```js
netboxdemo.dcim.device_bay_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBayTemplate](#writabledevicebaytemplate)
  * id **required** `integer`: A unique integer value identifying this device bay template.

#### Output
* output [DeviceBayTemplate](#devicebaytemplate)

### dcim.device_bay_templates.id.put



```js
netboxdemo.dcim.device_bay_templates.id.put({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBayTemplate](#writabledevicebaytemplate)
  * id **required** `integer`: A unique integer value identifying this device bay template.

#### Output
* output [DeviceBayTemplate](#devicebaytemplate)

### dcim.device_bays.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_bays.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceBay](#devicebay)

### dcim.device_bays.post



```js
netboxdemo.dcim.device_bays.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBay](#writabledevicebay)

#### Output
* output [DeviceBay](#devicebay)

### dcim.device_bays.id.delete



```js
netboxdemo.dcim.device_bays.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device bay.

#### Output
*Output schema unknown*

### dcim.device_bays.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_bays.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device bay.

#### Output
* output [DeviceBay](#devicebay)

### dcim.device_bays.id.patch



```js
netboxdemo.dcim.device_bays.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBay](#writabledevicebay)
  * id **required** `integer`: A unique integer value identifying this device bay.

#### Output
* output [DeviceBay](#devicebay)

### dcim.device_bays.id.put



```js
netboxdemo.dcim.device_bays.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceBay](#writabledevicebay)
  * id **required** `integer`: A unique integer value identifying this device bay.

#### Output
* output [DeviceBay](#devicebay)

### dcim.device_roles.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_roles.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * color `string`
  * vm_role `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * color__n `string`
  * color__ic `string`
  * color__nic `string`
  * color__iew `string`
  * color__niew `string`
  * color__isw `string`
  * color__nisw `string`
  * color__ie `string`
  * color__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceRole](#devicerole)

### dcim.device_roles.post



```js
netboxdemo.dcim.device_roles.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DeviceRole](#devicerole)

#### Output
* output [DeviceRole](#devicerole)

### dcim.device_roles.id.delete



```js
netboxdemo.dcim.device_roles.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device role.

#### Output
*Output schema unknown*

### dcim.device_roles.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_roles.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device role.

#### Output
* output [DeviceRole](#devicerole)

### dcim.device_roles.id.patch



```js
netboxdemo.dcim.device_roles.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [DeviceRole](#devicerole)
  * id **required** `integer`: A unique integer value identifying this device role.

#### Output
* output [DeviceRole](#devicerole)

### dcim.device_roles.id.put



```js
netboxdemo.dcim.device_roles.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [DeviceRole](#devicerole)
  * id **required** `integer`: A unique integer value identifying this device role.

#### Output
* output [DeviceRole](#devicerole)

### dcim.device_types.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_types.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * model `string`
  * slug `string`
  * part_number `string`
  * u_height `string`
  * is_full_depth `string`
  * subdevice_role `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * manufacturer_id `string`
  * manufacturer `string`
  * console_ports `string`
  * console_server_ports `string`
  * power_ports `string`
  * power_outlets `string`
  * interfaces `string`
  * pass_through_ports `string`
  * device_bays `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * model__n `string`
  * model__ic `string`
  * model__nic `string`
  * model__iew `string`
  * model__niew `string`
  * model__isw `string`
  * model__nisw `string`
  * model__ie `string`
  * model__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * part_number__n `string`
  * part_number__ic `string`
  * part_number__nic `string`
  * part_number__iew `string`
  * part_number__niew `string`
  * part_number__isw `string`
  * part_number__nisw `string`
  * part_number__ie `string`
  * part_number__nie `string`
  * u_height__n `string`
  * u_height__lte `string`
  * u_height__lt `string`
  * u_height__gte `string`
  * u_height__gt `string`
  * subdevice_role__n `string`
  * manufacturer_id__n `string`
  * manufacturer__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceType](#devicetype)

### dcim.device_types.post



```js
netboxdemo.dcim.device_types.post({
  "body": {
    "manufacturer": 0,
    "model": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceType](#writabledevicetype)

#### Output
* output [DeviceType](#devicetype)

### dcim.device_types.id.delete



```js
netboxdemo.dcim.device_types.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device type.

#### Output
*Output schema unknown*

### dcim.device_types.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.device_types.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device type.

#### Output
* output [DeviceType](#devicetype)

### dcim.device_types.id.patch



```js
netboxdemo.dcim.device_types.id.patch({
  "body": {
    "manufacturer": 0,
    "model": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceType](#writabledevicetype)
  * id **required** `integer`: A unique integer value identifying this device type.

#### Output
* output [DeviceType](#devicetype)

### dcim.device_types.id.put



```js
netboxdemo.dcim.device_types.id.put({
  "body": {
    "manufacturer": 0,
    "model": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceType](#writabledevicetype)
  * id **required** `integer`: A unique integer value identifying this device type.

#### Output
* output [DeviceType](#devicetype)

### dcim_devices_list
Call to super to allow for caching


```js
netboxdemo.dcim_devices_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * asset_tag `string`
  * face `string`
  * position `string`
  * vc_position `string`
  * vc_priority `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * local_context_data `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * manufacturer_id `string`
  * manufacturer `string`
  * device_type_id `string`
  * role_id `string`
  * role `string`
  * platform_id `string`
  * platform `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * rack_group_id `string`
  * rack_id `string`
  * cluster_id `string`
  * model `string`
  * status `string`
  * is_full_depth `string`
  * mac_address `string`
  * serial `string`
  * has_primary_ip `string`
  * virtual_chassis_id `string`
  * virtual_chassis_member `string`
  * console_ports `string`
  * console_server_ports `string`
  * power_ports `string`
  * power_outlets `string`
  * interfaces `string`
  * pass_through_ports `string`
  * device_bays `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * asset_tag__n `string`
  * asset_tag__ic `string`
  * asset_tag__nic `string`
  * asset_tag__iew `string`
  * asset_tag__niew `string`
  * asset_tag__isw `string`
  * asset_tag__nisw `string`
  * asset_tag__ie `string`
  * asset_tag__nie `string`
  * face__n `string`
  * position__n `string`
  * position__lte `string`
  * position__lt `string`
  * position__gte `string`
  * position__gt `string`
  * vc_position__n `string`
  * vc_position__lte `string`
  * vc_position__lt `string`
  * vc_position__gte `string`
  * vc_position__gt `string`
  * vc_priority__n `string`
  * vc_priority__lte `string`
  * vc_priority__lt `string`
  * vc_priority__gte `string`
  * vc_priority__gt `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * manufacturer_id__n `string`
  * manufacturer__n `string`
  * device_type_id__n `string`
  * role_id__n `string`
  * role__n `string`
  * platform_id__n `string`
  * platform__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * rack_group_id__n `string`
  * rack_id__n `string`
  * cluster_id__n `string`
  * model__n `string`
  * status__n `string`
  * mac_address__n `string`
  * mac_address__ic `string`
  * mac_address__nic `string`
  * mac_address__iew `string`
  * mac_address__niew `string`
  * mac_address__isw `string`
  * mac_address__nisw `string`
  * mac_address__ie `string`
  * mac_address__nie `string`
  * virtual_chassis_id__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_create



```js
netboxdemo.dcim_devices_create({
  "body": {
    "device_type": 0,
    "device_role": 0,
    "site": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceWithConfigContext](#writabledevicewithconfigcontext)

#### Output
* output [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_delete



```js
netboxdemo.dcim_devices_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
*Output schema unknown*

### dcim_devices_read
Call to super to allow for caching


```js
netboxdemo.dcim_devices_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
* output [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_partial_update



```js
netboxdemo.dcim_devices_partial_update({
  "body": {
    "device_type": 0,
    "device_role": 0,
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceWithConfigContext](#writabledevicewithconfigcontext)
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
* output [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_update



```js
netboxdemo.dcim_devices_update({
  "body": {
    "device_type": 0,
    "device_role": 0,
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceWithConfigContext](#writabledevicewithconfigcontext)
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
* output [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_graphs
A convenience method for rendering graphs for a particular Device.


```js
netboxdemo.dcim_devices_graphs({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
* output [DeviceWithConfigContext](#devicewithconfigcontext)

### dcim_devices_napalm
Execute a NAPALM method on a Device


```js
netboxdemo.dcim_devices_napalm({
  "method": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * method **required** `string`
  * id **required** `integer`: A unique integer value identifying this device.

#### Output
* output [DeviceNAPALM](#devicenapalm)

### dcim.front_port_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.front_port_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [FrontPortTemplate](#frontporttemplate)

### dcim.front_port_templates.post



```js
netboxdemo.dcim.front_port_templates.post({
  "body": {
    "device_type": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPortTemplate](#writablefrontporttemplate)

#### Output
* output [FrontPortTemplate](#frontporttemplate)

### dcim.front_port_templates.id.delete



```js
netboxdemo.dcim.front_port_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this front port template.

#### Output
*Output schema unknown*

### dcim.front_port_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.front_port_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this front port template.

#### Output
* output [FrontPortTemplate](#frontporttemplate)

### dcim.front_port_templates.id.patch



```js
netboxdemo.dcim.front_port_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPortTemplate](#writablefrontporttemplate)
  * id **required** `integer`: A unique integer value identifying this front port template.

#### Output
* output [FrontPortTemplate](#frontporttemplate)

### dcim.front_port_templates.id.put



```js
netboxdemo.dcim.front_port_templates.id.put({
  "body": {
    "device_type": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPortTemplate](#writablefrontporttemplate)
  * id **required** `integer`: A unique integer value identifying this front port template.

#### Output
* output [FrontPortTemplate](#frontporttemplate)

### dcim.front_ports.get
Call to super to allow for caching


```js
netboxdemo.dcim.front_ports.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [FrontPort](#frontport)

### dcim.front_ports.post



```js
netboxdemo.dcim.front_ports.post({
  "body": {
    "device": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPort](#writablefrontport)

#### Output
* output [FrontPort](#frontport)

### dcim.front_ports.id.delete



```js
netboxdemo.dcim.front_ports.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this front port.

#### Output
*Output schema unknown*

### dcim.front_ports.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.front_ports.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this front port.

#### Output
* output [FrontPort](#frontport)

### dcim.front_ports.id.patch



```js
netboxdemo.dcim.front_ports.id.patch({
  "body": {
    "device": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPort](#writablefrontport)
  * id **required** `integer`: A unique integer value identifying this front port.

#### Output
* output [FrontPort](#frontport)

### dcim.front_ports.id.put



```js
netboxdemo.dcim.front_ports.id.put({
  "body": {
    "device": 0,
    "name": "",
    "type": "",
    "rear_port": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableFrontPort](#writablefrontport)
  * id **required** `integer`: A unique integer value identifying this front port.

#### Output
* output [FrontPort](#frontport)

### dcim.front_ports.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.front_ports.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this front port.

#### Output
* output [FrontPort](#frontport)

### dcim.interface_connections.get



```js
netboxdemo.dcim.interface_connections.get({}, context)
```

#### Input
* input `object`
  * connection_status `string`
  * site `string`
  * device_id `string`
  * device `string`
  * connection_status__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [InterfaceConnection](#interfaceconnection)

### dcim.interface_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.interface_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * mgmt_only `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [InterfaceTemplate](#interfacetemplate)

### dcim.interface_templates.post



```js
netboxdemo.dcim.interface_templates.post({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInterfaceTemplate](#writableinterfacetemplate)

#### Output
* output [InterfaceTemplate](#interfacetemplate)

### dcim.interface_templates.id.delete



```js
netboxdemo.dcim.interface_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface template.

#### Output
*Output schema unknown*

### dcim.interface_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.interface_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface template.

#### Output
* output [InterfaceTemplate](#interfacetemplate)

### dcim.interface_templates.id.patch



```js
netboxdemo.dcim.interface_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInterfaceTemplate](#writableinterfacetemplate)
  * id **required** `integer`: A unique integer value identifying this interface template.

#### Output
* output [InterfaceTemplate](#interfacetemplate)

### dcim.interface_templates.id.put



```js
netboxdemo.dcim.interface_templates.id.put({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInterfaceTemplate](#writableinterfacetemplate)
  * id **required** `integer`: A unique integer value identifying this interface template.

#### Output
* output [InterfaceTemplate](#interfacetemplate)

### dcim_interfaces_list
Call to super to allow for caching


```js
netboxdemo.dcim_interfaces_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * connection_status `string`
  * type `string`
  * enabled `string`
  * mtu `string`
  * mgmt_only `string`
  * mode `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * cabled `string`
  * kind `string`
  * lag_id `string`
  * mac_address `string`
  * vlan_id `string`
  * vlan `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * connection_status__n `string`
  * type__n `string`
  * mtu__n `string`
  * mtu__lte `string`
  * mtu__lt `string`
  * mtu__gte `string`
  * mtu__gt `string`
  * mode__n `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * tag__n `string`
  * lag_id__n `string`
  * mac_address__n `string`
  * mac_address__ic `string`
  * mac_address__nic `string`
  * mac_address__iew `string`
  * mac_address__niew `string`
  * mac_address__isw `string`
  * mac_address__nisw `string`
  * mac_address__ie `string`
  * mac_address__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [DeviceInterface](#deviceinterface)

### dcim_interfaces_create



```js
netboxdemo.dcim_interfaces_create({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceInterface](#writabledeviceinterface)

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim_interfaces_delete



```js
netboxdemo.dcim_interfaces_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
*Output schema unknown*

### dcim_interfaces_read
Call to super to allow for caching


```js
netboxdemo.dcim_interfaces_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim_interfaces_partial_update



```js
netboxdemo.dcim_interfaces_partial_update({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceInterface](#writabledeviceinterface)
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim_interfaces_update



```js
netboxdemo.dcim_interfaces_update({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableDeviceInterface](#writabledeviceinterface)
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim_interfaces_graphs
A convenience method for rendering graphs for a particular interface.


```js
netboxdemo.dcim_interfaces_graphs({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim_interfaces_trace
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim_interfaces_trace({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [DeviceInterface](#deviceinterface)

### dcim.inventory_items.get
Call to super to allow for caching


```js
netboxdemo.dcim.inventory_items.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * part_id `string`
  * asset_tag `string`
  * discovered `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * parent_id `string`
  * manufacturer_id `string`
  * manufacturer `string`
  * serial `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * part_id__n `string`
  * part_id__ic `string`
  * part_id__nic `string`
  * part_id__iew `string`
  * part_id__niew `string`
  * part_id__isw `string`
  * part_id__nisw `string`
  * part_id__ie `string`
  * part_id__nie `string`
  * asset_tag__n `string`
  * asset_tag__ic `string`
  * asset_tag__nic `string`
  * asset_tag__iew `string`
  * asset_tag__niew `string`
  * asset_tag__isw `string`
  * asset_tag__nisw `string`
  * asset_tag__ie `string`
  * asset_tag__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * parent_id__n `string`
  * manufacturer_id__n `string`
  * manufacturer__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [InventoryItem](#inventoryitem)

### dcim.inventory_items.post



```js
netboxdemo.dcim.inventory_items.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInventoryItem](#writableinventoryitem)

#### Output
* output [InventoryItem](#inventoryitem)

### dcim.inventory_items.id.delete



```js
netboxdemo.dcim.inventory_items.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this inventory item.

#### Output
*Output schema unknown*

### dcim.inventory_items.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.inventory_items.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this inventory item.

#### Output
* output [InventoryItem](#inventoryitem)

### dcim.inventory_items.id.patch



```js
netboxdemo.dcim.inventory_items.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInventoryItem](#writableinventoryitem)
  * id **required** `integer`: A unique integer value identifying this inventory item.

#### Output
* output [InventoryItem](#inventoryitem)

### dcim.inventory_items.id.put



```js
netboxdemo.dcim.inventory_items.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableInventoryItem](#writableinventoryitem)
  * id **required** `integer`: A unique integer value identifying this inventory item.

#### Output
* output [InventoryItem](#inventoryitem)

### dcim_manufacturers_list
Call to super to allow for caching


```js
netboxdemo.dcim_manufacturers_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Manufacturer](#manufacturer)

### dcim_manufacturers_create



```js
netboxdemo.dcim_manufacturers_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Manufacturer](#manufacturer)

#### Output
* output [Manufacturer](#manufacturer)

### dcim_manufacturers_delete



```js
netboxdemo.dcim_manufacturers_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this manufacturer.

#### Output
*Output schema unknown*

### dcim_manufacturers_read
Call to super to allow for caching


```js
netboxdemo.dcim_manufacturers_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this manufacturer.

#### Output
* output [Manufacturer](#manufacturer)

### dcim_manufacturers_partial_update



```js
netboxdemo.dcim_manufacturers_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Manufacturer](#manufacturer)
  * id **required** `integer`: A unique integer value identifying this manufacturer.

#### Output
* output [Manufacturer](#manufacturer)

### dcim_manufacturers_update



```js
netboxdemo.dcim_manufacturers_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Manufacturer](#manufacturer)
  * id **required** `integer`: A unique integer value identifying this manufacturer.

#### Output
* output [Manufacturer](#manufacturer)

### dcim_platforms_list
Call to super to allow for caching


```js
netboxdemo.dcim_platforms_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * napalm_driver `string`
  * description `string`
  * q `string`
  * manufacturer_id `string`
  * manufacturer `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * napalm_driver__n `string`
  * napalm_driver__ic `string`
  * napalm_driver__nic `string`
  * napalm_driver__iew `string`
  * napalm_driver__niew `string`
  * napalm_driver__isw `string`
  * napalm_driver__nisw `string`
  * napalm_driver__ie `string`
  * napalm_driver__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * manufacturer_id__n `string`
  * manufacturer__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Platform](#platform)

### dcim_platforms_create



```js
netboxdemo.dcim_platforms_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePlatform](#writableplatform)

#### Output
* output [Platform](#platform)

### dcim_platforms_delete



```js
netboxdemo.dcim_platforms_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this platform.

#### Output
*Output schema unknown*

### dcim_platforms_read
Call to super to allow for caching


```js
netboxdemo.dcim_platforms_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this platform.

#### Output
* output [Platform](#platform)

### dcim_platforms_partial_update



```js
netboxdemo.dcim_platforms_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePlatform](#writableplatform)
  * id **required** `integer`: A unique integer value identifying this platform.

#### Output
* output [Platform](#platform)

### dcim_platforms_update



```js
netboxdemo.dcim_platforms_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePlatform](#writableplatform)
  * id **required** `integer`: A unique integer value identifying this platform.

#### Output
* output [Platform](#platform)

### dcim.power_connections.get



```js
netboxdemo.dcim.power_connections.get({}, context)
```

#### Input
* input `object`
  * name `string`
  * connection_status `string`
  * site `string`
  * device_id `string`
  * device `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * connection_status__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerPort](#powerport)

### dcim.power_feeds.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_feeds.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * status `string`
  * type `string`
  * supply `string`
  * phase `string`
  * voltage `string`
  * amperage `string`
  * max_utilization `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * power_panel_id `string`
  * rack_id `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * status__n `string`
  * type__n `string`
  * supply__n `string`
  * phase__n `string`
  * voltage__n `string`
  * voltage__lte `string`
  * voltage__lt `string`
  * voltage__gte `string`
  * voltage__gt `string`
  * amperage__n `string`
  * amperage__lte `string`
  * amperage__lt `string`
  * amperage__gte `string`
  * amperage__gt `string`
  * max_utilization__n `string`
  * max_utilization__lte `string`
  * max_utilization__lt `string`
  * max_utilization__gte `string`
  * max_utilization__gt `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * power_panel_id__n `string`
  * rack_id__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerFeed](#powerfeed)

### dcim.power_feeds.post



```js
netboxdemo.dcim.power_feeds.post({
  "body": {
    "power_panel": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerFeed](#writablepowerfeed)

#### Output
* output [PowerFeed](#powerfeed)

### dcim.power_feeds.id.delete



```js
netboxdemo.dcim.power_feeds.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power feed.

#### Output
*Output schema unknown*

### dcim.power_feeds.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_feeds.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power feed.

#### Output
* output [PowerFeed](#powerfeed)

### dcim.power_feeds.id.patch



```js
netboxdemo.dcim.power_feeds.id.patch({
  "body": {
    "power_panel": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerFeed](#writablepowerfeed)
  * id **required** `integer`: A unique integer value identifying this power feed.

#### Output
* output [PowerFeed](#powerfeed)

### dcim.power_feeds.id.put



```js
netboxdemo.dcim.power_feeds.id.put({
  "body": {
    "power_panel": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerFeed](#writablepowerfeed)
  * id **required** `integer`: A unique integer value identifying this power feed.

#### Output
* output [PowerFeed](#powerfeed)

### dcim.power_outlet_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_outlet_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * feed_leg `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * feed_leg__n `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerOutletTemplate](#poweroutlettemplate)

### dcim.power_outlet_templates.post



```js
netboxdemo.dcim.power_outlet_templates.post({
  "body": {
    "device_type": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutletTemplate](#writablepoweroutlettemplate)

#### Output
* output [PowerOutletTemplate](#poweroutlettemplate)

### dcim.power_outlet_templates.id.delete



```js
netboxdemo.dcim.power_outlet_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power outlet template.

#### Output
*Output schema unknown*

### dcim.power_outlet_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_outlet_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power outlet template.

#### Output
* output [PowerOutletTemplate](#poweroutlettemplate)

### dcim.power_outlet_templates.id.patch



```js
netboxdemo.dcim.power_outlet_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutletTemplate](#writablepoweroutlettemplate)
  * id **required** `integer`: A unique integer value identifying this power outlet template.

#### Output
* output [PowerOutletTemplate](#poweroutlettemplate)

### dcim.power_outlet_templates.id.put



```js
netboxdemo.dcim.power_outlet_templates.id.put({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutletTemplate](#writablepoweroutlettemplate)
  * id **required** `integer`: A unique integer value identifying this power outlet template.

#### Output
* output [PowerOutletTemplate](#poweroutlettemplate)

### dcim.power_outlets.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_outlets.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * feed_leg `string`
  * description `string`
  * connection_status `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * type `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * feed_leg__n `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * connection_status__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * type__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerOutlet](#poweroutlet)

### dcim.power_outlets.post



```js
netboxdemo.dcim.power_outlets.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutlet](#writablepoweroutlet)

#### Output
* output [PowerOutlet](#poweroutlet)

### dcim.power_outlets.id.delete



```js
netboxdemo.dcim.power_outlets.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power outlet.

#### Output
*Output schema unknown*

### dcim.power_outlets.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_outlets.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power outlet.

#### Output
* output [PowerOutlet](#poweroutlet)

### dcim.power_outlets.id.patch



```js
netboxdemo.dcim.power_outlets.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutlet](#writablepoweroutlet)
  * id **required** `integer`: A unique integer value identifying this power outlet.

#### Output
* output [PowerOutlet](#poweroutlet)

### dcim.power_outlets.id.put



```js
netboxdemo.dcim.power_outlets.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerOutlet](#writablepoweroutlet)
  * id **required** `integer`: A unique integer value identifying this power outlet.

#### Output
* output [PowerOutlet](#poweroutlet)

### dcim.power_outlets.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.power_outlets.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power outlet.

#### Output
* output [PowerOutlet](#poweroutlet)

### dcim.power_panels.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_panels.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * rack_group_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * rack_group_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerPanel](#powerpanel)

### dcim.power_panels.post



```js
netboxdemo.dcim.power_panels.post({
  "body": {
    "site": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPanel](#writablepowerpanel)

#### Output
* output [PowerPanel](#powerpanel)

### dcim.power_panels.id.delete



```js
netboxdemo.dcim.power_panels.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power panel.

#### Output
*Output schema unknown*

### dcim.power_panels.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_panels.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power panel.

#### Output
* output [PowerPanel](#powerpanel)

### dcim.power_panels.id.patch



```js
netboxdemo.dcim.power_panels.id.patch({
  "body": {
    "site": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPanel](#writablepowerpanel)
  * id **required** `integer`: A unique integer value identifying this power panel.

#### Output
* output [PowerPanel](#powerpanel)

### dcim.power_panels.id.put



```js
netboxdemo.dcim.power_panels.id.put({
  "body": {
    "site": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPanel](#writablepowerpanel)
  * id **required** `integer`: A unique integer value identifying this power panel.

#### Output
* output [PowerPanel](#powerpanel)

### dcim.power_port_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_port_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * maximum_draw `string`
  * allocated_draw `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * maximum_draw__n `string`
  * maximum_draw__lte `string`
  * maximum_draw__lt `string`
  * maximum_draw__gte `string`
  * maximum_draw__gt `string`
  * allocated_draw__n `string`
  * allocated_draw__lte `string`
  * allocated_draw__lt `string`
  * allocated_draw__gte `string`
  * allocated_draw__gt `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerPortTemplate](#powerporttemplate)

### dcim.power_port_templates.post



```js
netboxdemo.dcim.power_port_templates.post({
  "body": {
    "device_type": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPortTemplate](#writablepowerporttemplate)

#### Output
* output [PowerPortTemplate](#powerporttemplate)

### dcim.power_port_templates.id.delete



```js
netboxdemo.dcim.power_port_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power port template.

#### Output
*Output schema unknown*

### dcim.power_port_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_port_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power port template.

#### Output
* output [PowerPortTemplate](#powerporttemplate)

### dcim.power_port_templates.id.patch



```js
netboxdemo.dcim.power_port_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPortTemplate](#writablepowerporttemplate)
  * id **required** `integer`: A unique integer value identifying this power port template.

#### Output
* output [PowerPortTemplate](#powerporttemplate)

### dcim.power_port_templates.id.put



```js
netboxdemo.dcim.power_port_templates.id.put({
  "body": {
    "device_type": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPortTemplate](#writablepowerporttemplate)
  * id **required** `integer`: A unique integer value identifying this power port template.

#### Output
* output [PowerPortTemplate](#powerporttemplate)

### dcim.power_ports.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_ports.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * maximum_draw `string`
  * allocated_draw `string`
  * description `string`
  * connection_status `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * type `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * maximum_draw__n `string`
  * maximum_draw__lte `string`
  * maximum_draw__lt `string`
  * maximum_draw__gte `string`
  * maximum_draw__gt `string`
  * allocated_draw__n `string`
  * allocated_draw__lte `string`
  * allocated_draw__lt `string`
  * allocated_draw__gte `string`
  * allocated_draw__gt `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * connection_status__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * type__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PowerPort](#powerport)

### dcim.power_ports.post



```js
netboxdemo.dcim.power_ports.post({
  "body": {
    "device": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPort](#writablepowerport)

#### Output
* output [PowerPort](#powerport)

### dcim.power_ports.id.delete



```js
netboxdemo.dcim.power_ports.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power port.

#### Output
*Output schema unknown*

### dcim.power_ports.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.power_ports.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power port.

#### Output
* output [PowerPort](#powerport)

### dcim.power_ports.id.patch



```js
netboxdemo.dcim.power_ports.id.patch({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPort](#writablepowerport)
  * id **required** `integer`: A unique integer value identifying this power port.

#### Output
* output [PowerPort](#powerport)

### dcim.power_ports.id.put



```js
netboxdemo.dcim.power_ports.id.put({
  "body": {
    "device": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePowerPort](#writablepowerport)
  * id **required** `integer`: A unique integer value identifying this power port.

#### Output
* output [PowerPort](#powerport)

### dcim.power_ports.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.power_ports.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this power port.

#### Output
* output [PowerPort](#powerport)

### dcim.rack_groups.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_groups.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * parent_id `string`
  * parent `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * parent_id__n `string`
  * parent__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RackGroup](#rackgroup)

### dcim.rack_groups.post



```js
netboxdemo.dcim.rack_groups.post({
  "body": {
    "name": "",
    "slug": "",
    "site": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackGroup](#writablerackgroup)

#### Output
* output [RackGroup](#rackgroup)

### dcim.rack_groups.id.delete



```js
netboxdemo.dcim.rack_groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack group.

#### Output
*Output schema unknown*

### dcim.rack_groups.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_groups.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack group.

#### Output
* output [RackGroup](#rackgroup)

### dcim.rack_groups.id.patch



```js
netboxdemo.dcim.rack_groups.id.patch({
  "body": {
    "name": "",
    "slug": "",
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackGroup](#writablerackgroup)
  * id **required** `integer`: A unique integer value identifying this rack group.

#### Output
* output [RackGroup](#rackgroup)

### dcim.rack_groups.id.put



```js
netboxdemo.dcim.rack_groups.id.put({
  "body": {
    "name": "",
    "slug": "",
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackGroup](#writablerackgroup)
  * id **required** `integer`: A unique integer value identifying this rack group.

#### Output
* output [RackGroup](#rackgroup)

### dcim.rack_reservations.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_reservations.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * created `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * q `string`
  * rack_id `string`
  * site_id `string`
  * site `string`
  * group_id `string`
  * group `string`
  * user_id `string`
  * user `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * created__n `string`
  * created__lte `string`
  * created__lt `string`
  * created__gte `string`
  * created__gt `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * rack_id__n `string`
  * site_id__n `string`
  * site__n `string`
  * group_id__n `string`
  * group__n `string`
  * user_id__n `string`
  * user__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RackReservation](#rackreservation)

### dcim.rack_reservations.post



```js
netboxdemo.dcim.rack_reservations.post({
  "body": {
    "rack": 0,
    "units": [],
    "user": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackReservation](#writablerackreservation)

#### Output
* output [RackReservation](#rackreservation)

### dcim.rack_reservations.id.delete



```js
netboxdemo.dcim.rack_reservations.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack reservation.

#### Output
*Output schema unknown*

### dcim.rack_reservations.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_reservations.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack reservation.

#### Output
* output [RackReservation](#rackreservation)

### dcim.rack_reservations.id.patch



```js
netboxdemo.dcim.rack_reservations.id.patch({
  "body": {
    "rack": 0,
    "units": [],
    "user": 0,
    "description": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackReservation](#writablerackreservation)
  * id **required** `integer`: A unique integer value identifying this rack reservation.

#### Output
* output [RackReservation](#rackreservation)

### dcim.rack_reservations.id.put



```js
netboxdemo.dcim.rack_reservations.id.put({
  "body": {
    "rack": 0,
    "units": [],
    "user": 0,
    "description": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRackReservation](#writablerackreservation)
  * id **required** `integer`: A unique integer value identifying this rack reservation.

#### Output
* output [RackReservation](#rackreservation)

### dcim.rack_roles.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_roles.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * color `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * color__n `string`
  * color__ic `string`
  * color__nic `string`
  * color__iew `string`
  * color__niew `string`
  * color__isw `string`
  * color__nisw `string`
  * color__ie `string`
  * color__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RackRole](#rackrole)

### dcim.rack_roles.post



```js
netboxdemo.dcim.rack_roles.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RackRole](#rackrole)

#### Output
* output [RackRole](#rackrole)

### dcim.rack_roles.id.delete



```js
netboxdemo.dcim.rack_roles.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack role.

#### Output
*Output schema unknown*

### dcim.rack_roles.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.rack_roles.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack role.

#### Output
* output [RackRole](#rackrole)

### dcim.rack_roles.id.patch



```js
netboxdemo.dcim.rack_roles.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [RackRole](#rackrole)
  * id **required** `integer`: A unique integer value identifying this rack role.

#### Output
* output [RackRole](#rackrole)

### dcim.rack_roles.id.put



```js
netboxdemo.dcim.rack_roles.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [RackRole](#rackrole)
  * id **required** `integer`: A unique integer value identifying this rack role.

#### Output
* output [RackRole](#rackrole)

### dcim_racks_list
Call to super to allow for caching


```js
netboxdemo.dcim_racks_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * facility_id `string`
  * asset_tag `string`
  * type `string`
  * width `string`
  * u_height `string`
  * desc_units `string`
  * outer_width `string`
  * outer_depth `string`
  * outer_unit `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * group_id `string`
  * group `string`
  * status `string`
  * role_id `string`
  * role `string`
  * serial `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * facility_id__n `string`
  * facility_id__ic `string`
  * facility_id__nic `string`
  * facility_id__iew `string`
  * facility_id__niew `string`
  * facility_id__isw `string`
  * facility_id__nisw `string`
  * facility_id__ie `string`
  * facility_id__nie `string`
  * asset_tag__n `string`
  * asset_tag__ic `string`
  * asset_tag__nic `string`
  * asset_tag__iew `string`
  * asset_tag__niew `string`
  * asset_tag__isw `string`
  * asset_tag__nisw `string`
  * asset_tag__ie `string`
  * asset_tag__nie `string`
  * type__n `string`
  * width__n `string`
  * u_height__n `string`
  * u_height__lte `string`
  * u_height__lt `string`
  * u_height__gte `string`
  * u_height__gt `string`
  * outer_width__n `string`
  * outer_width__lte `string`
  * outer_width__lt `string`
  * outer_width__gte `string`
  * outer_width__gt `string`
  * outer_depth__n `string`
  * outer_depth__lte `string`
  * outer_depth__lt `string`
  * outer_depth__gte `string`
  * outer_depth__gt `string`
  * outer_unit__n `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * group_id__n `string`
  * group__n `string`
  * status__n `string`
  * role_id__n `string`
  * role__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Rack](#rack)

### dcim_racks_create



```js
netboxdemo.dcim_racks_create({
  "body": {
    "name": "",
    "site": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRack](#writablerack)

#### Output
* output [Rack](#rack)

### dcim_racks_delete



```js
netboxdemo.dcim_racks_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack.

#### Output
*Output schema unknown*

### dcim_racks_read
Call to super to allow for caching


```js
netboxdemo.dcim_racks_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rack.

#### Output
* output [Rack](#rack)

### dcim_racks_partial_update



```js
netboxdemo.dcim_racks_partial_update({
  "body": {
    "name": "",
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRack](#writablerack)
  * id **required** `integer`: A unique integer value identifying this rack.

#### Output
* output [Rack](#rack)

### dcim_racks_update



```js
netboxdemo.dcim_racks_update({
  "body": {
    "name": "",
    "site": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRack](#writablerack)
  * id **required** `integer`: A unique integer value identifying this rack.

#### Output
* output [Rack](#rack)

### dcim_racks_elevation
Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.


```js
netboxdemo.dcim_racks_elevation({
  "id": 0
}, context)
```

#### Input
* input `object`
  * q `string`
  * face `string` (values: front, rear)
  * render `string` (values: json, svg)
  * unit_width `integer`
  * unit_height `integer`
  * legend_width `integer`
  * exclude `integer`
  * expand_devices `boolean`
  * include_images `boolean`
  * id **required** `integer`: A unique integer value identifying this rack.

#### Output
* output `array`
  * items [RackUnit](#rackunit)

### dcim.rear_port_templates.get
Call to super to allow for caching


```js
netboxdemo.dcim.rear_port_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * positions `string`
  * q `string`
  * devicetype_id `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * positions__n `string`
  * positions__lte `string`
  * positions__lt `string`
  * positions__gte `string`
  * positions__gt `string`
  * devicetype_id__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RearPortTemplate](#rearporttemplate)

### dcim.rear_port_templates.post



```js
netboxdemo.dcim.rear_port_templates.post({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPortTemplate](#writablerearporttemplate)

#### Output
* output [RearPortTemplate](#rearporttemplate)

### dcim.rear_port_templates.id.delete



```js
netboxdemo.dcim.rear_port_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rear port template.

#### Output
*Output schema unknown*

### dcim.rear_port_templates.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.rear_port_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rear port template.

#### Output
* output [RearPortTemplate](#rearporttemplate)

### dcim.rear_port_templates.id.patch



```js
netboxdemo.dcim.rear_port_templates.id.patch({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPortTemplate](#writablerearporttemplate)
  * id **required** `integer`: A unique integer value identifying this rear port template.

#### Output
* output [RearPortTemplate](#rearporttemplate)

### dcim.rear_port_templates.id.put



```js
netboxdemo.dcim.rear_port_templates.id.put({
  "body": {
    "device_type": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPortTemplate](#writablerearporttemplate)
  * id **required** `integer`: A unique integer value identifying this rear port template.

#### Output
* output [RearPortTemplate](#rearporttemplate)

### dcim.rear_ports.get
Call to super to allow for caching


```js
netboxdemo.dcim.rear_ports.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * type `string`
  * positions `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * cabled `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * type__n `string`
  * positions__n `string`
  * positions__lte `string`
  * positions__lt `string`
  * positions__gte `string`
  * positions__gt `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RearPort](#rearport)

### dcim.rear_ports.post



```js
netboxdemo.dcim.rear_ports.post({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPort](#writablerearport)

#### Output
* output [RearPort](#rearport)

### dcim.rear_ports.id.delete



```js
netboxdemo.dcim.rear_ports.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rear port.

#### Output
*Output schema unknown*

### dcim.rear_ports.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.rear_ports.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rear port.

#### Output
* output [RearPort](#rearport)

### dcim.rear_ports.id.patch



```js
netboxdemo.dcim.rear_ports.id.patch({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPort](#writablerearport)
  * id **required** `integer`: A unique integer value identifying this rear port.

#### Output
* output [RearPort](#rearport)

### dcim.rear_ports.id.put



```js
netboxdemo.dcim.rear_ports.id.put({
  "body": {
    "device": 0,
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRearPort](#writablerearport)
  * id **required** `integer`: A unique integer value identifying this rear port.

#### Output
* output [RearPort](#rearport)

### dcim.rear_ports.id.trace.get
Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).


```js
netboxdemo.dcim.rear_ports.id.trace.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this rear port.

#### Output
* output [RearPort](#rearport)

### dcim_regions_list
Call to super to allow for caching


```js
netboxdemo.dcim_regions_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * parent_id `string`
  * parent `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * parent_id__n `string`
  * parent__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Region](#region)

### dcim_regions_create



```js
netboxdemo.dcim_regions_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRegion](#writableregion)

#### Output
* output [Region](#region)

### dcim_regions_delete



```js
netboxdemo.dcim_regions_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this region.

#### Output
*Output schema unknown*

### dcim_regions_read
Call to super to allow for caching


```js
netboxdemo.dcim_regions_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this region.

#### Output
* output [Region](#region)

### dcim_regions_partial_update



```js
netboxdemo.dcim_regions_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRegion](#writableregion)
  * id **required** `integer`: A unique integer value identifying this region.

#### Output
* output [Region](#region)

### dcim_regions_update



```js
netboxdemo.dcim_regions_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableRegion](#writableregion)
  * id **required** `integer`: A unique integer value identifying this region.

#### Output
* output [Region](#region)

### dcim_sites_list
Call to super to allow for caching


```js
netboxdemo.dcim_sites_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * facility `string`
  * asn `string`
  * latitude `string`
  * longitude `string`
  * contact_name `string`
  * contact_phone `string`
  * contact_email `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * status `string`
  * region_id `string`
  * region `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * facility__n `string`
  * facility__ic `string`
  * facility__nic `string`
  * facility__iew `string`
  * facility__niew `string`
  * facility__isw `string`
  * facility__nisw `string`
  * facility__ie `string`
  * facility__nie `string`
  * asn__n `string`
  * asn__lte `string`
  * asn__lt `string`
  * asn__gte `string`
  * asn__gt `string`
  * latitude__n `string`
  * latitude__lte `string`
  * latitude__lt `string`
  * latitude__gte `string`
  * latitude__gt `string`
  * longitude__n `string`
  * longitude__lte `string`
  * longitude__lt `string`
  * longitude__gte `string`
  * longitude__gt `string`
  * contact_name__n `string`
  * contact_name__ic `string`
  * contact_name__nic `string`
  * contact_name__iew `string`
  * contact_name__niew `string`
  * contact_name__isw `string`
  * contact_name__nisw `string`
  * contact_name__ie `string`
  * contact_name__nie `string`
  * contact_phone__n `string`
  * contact_phone__ic `string`
  * contact_phone__nic `string`
  * contact_phone__iew `string`
  * contact_phone__niew `string`
  * contact_phone__isw `string`
  * contact_phone__nisw `string`
  * contact_phone__ie `string`
  * contact_phone__nie `string`
  * contact_email__n `string`
  * contact_email__ic `string`
  * contact_email__nic `string`
  * contact_email__iew `string`
  * contact_email__niew `string`
  * contact_email__isw `string`
  * contact_email__nisw `string`
  * contact_email__ie `string`
  * contact_email__nie `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * status__n `string`
  * region_id__n `string`
  * region__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Site](#site)

### dcim_sites_create



```js
netboxdemo.dcim_sites_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSite](#writablesite)

#### Output
* output [Site](#site)

### dcim_sites_delete



```js
netboxdemo.dcim_sites_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this site.

#### Output
*Output schema unknown*

### dcim_sites_read
Call to super to allow for caching


```js
netboxdemo.dcim_sites_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this site.

#### Output
* output [Site](#site)

### dcim_sites_partial_update



```js
netboxdemo.dcim_sites_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSite](#writablesite)
  * id **required** `integer`: A unique integer value identifying this site.

#### Output
* output [Site](#site)

### dcim_sites_update



```js
netboxdemo.dcim_sites_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSite](#writablesite)
  * id **required** `integer`: A unique integer value identifying this site.

#### Output
* output [Site](#site)

### dcim_sites_graphs
A convenience method for rendering graphs for a particular site.


```js
netboxdemo.dcim_sites_graphs({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this site.

#### Output
* output [Site](#site)

### dcim.virtual_chassis.get
Call to super to allow for caching


```js
netboxdemo.dcim.virtual_chassis.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * domain `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * tenant_id `string`
  * tenant `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * domain__n `string`
  * domain__ic `string`
  * domain__nic `string`
  * domain__iew `string`
  * domain__niew `string`
  * domain__isw `string`
  * domain__nisw `string`
  * domain__ie `string`
  * domain__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VirtualChassis](#virtualchassis)

### dcim.virtual_chassis.post



```js
netboxdemo.dcim.virtual_chassis.post({
  "body": {
    "master": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualChassis](#writablevirtualchassis)

#### Output
* output [VirtualChassis](#virtualchassis)

### dcim.virtual_chassis.id.delete



```js
netboxdemo.dcim.virtual_chassis.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this virtual chassis.

#### Output
*Output schema unknown*

### dcim.virtual_chassis.id.get
Call to super to allow for caching


```js
netboxdemo.dcim.virtual_chassis.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this virtual chassis.

#### Output
* output [VirtualChassis](#virtualchassis)

### dcim.virtual_chassis.id.patch



```js
netboxdemo.dcim.virtual_chassis.id.patch({
  "body": {
    "master": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualChassis](#writablevirtualchassis)
  * id **required** `integer`: A unique integer value identifying this virtual chassis.

#### Output
* output [VirtualChassis](#virtualchassis)

### dcim.virtual_chassis.id.put



```js
netboxdemo.dcim.virtual_chassis.id.put({
  "body": {
    "master": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualChassis](#writablevirtualchassis)
  * id **required** `integer`: A unique integer value identifying this virtual chassis.

#### Output
* output [VirtualChassis](#virtualchassis)

### extras__custom_field_choices_list



```js
netboxdemo.extras__custom_field_choices_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### extras__custom_field_choices_read



```js
netboxdemo.extras__custom_field_choices_read({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### extras.config_contexts.get
Call to super to allow for caching


```js
netboxdemo.extras.config_contexts.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * is_active `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * role_id `string`
  * role `string`
  * platform_id `string`
  * platform `string`
  * cluster_group_id `string`
  * cluster_group `string`
  * cluster_id `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * role_id__n `string`
  * role__n `string`
  * platform_id__n `string`
  * platform__n `string`
  * cluster_group_id__n `string`
  * cluster_group__n `string`
  * cluster_id__n `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ConfigContext](#configcontext)

### extras.config_contexts.post



```js
netboxdemo.extras.config_contexts.post({
  "body": {
    "name": "",
    "data": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConfigContext](#writableconfigcontext)

#### Output
* output [ConfigContext](#configcontext)

### extras.config_contexts.id.delete



```js
netboxdemo.extras.config_contexts.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this config context.

#### Output
*Output schema unknown*

### extras.config_contexts.id.get
Call to super to allow for caching


```js
netboxdemo.extras.config_contexts.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this config context.

#### Output
* output [ConfigContext](#configcontext)

### extras.config_contexts.id.patch



```js
netboxdemo.extras.config_contexts.id.patch({
  "body": {
    "name": "",
    "data": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConfigContext](#writableconfigcontext)
  * id **required** `integer`: A unique integer value identifying this config context.

#### Output
* output [ConfigContext](#configcontext)

### extras.config_contexts.id.put



```js
netboxdemo.extras.config_contexts.id.put({
  "body": {
    "name": "",
    "data": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableConfigContext](#writableconfigcontext)
  * id **required** `integer`: A unique integer value identifying this config context.

#### Output
* output [ConfigContext](#configcontext)

### extras.export_templates.get
Call to super to allow for caching


```js
netboxdemo.extras.export_templates.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * content_type `string`
  * name `string`
  * template_language `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * content_type__n `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * template_language__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ExportTemplate](#exporttemplate)

### extras.export_templates.post



```js
netboxdemo.extras.export_templates.post({
  "body": {
    "content_type": "",
    "name": "",
    "template_code": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableExportTemplate](#writableexporttemplate)

#### Output
* output [ExportTemplate](#exporttemplate)

### extras.export_templates.id.delete



```js
netboxdemo.extras.export_templates.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this export template.

#### Output
*Output schema unknown*

### extras.export_templates.id.get
Call to super to allow for caching


```js
netboxdemo.extras.export_templates.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this export template.

#### Output
* output [ExportTemplate](#exporttemplate)

### extras.export_templates.id.patch



```js
netboxdemo.extras.export_templates.id.patch({
  "body": {
    "content_type": "",
    "name": "",
    "template_code": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableExportTemplate](#writableexporttemplate)
  * id **required** `integer`: A unique integer value identifying this export template.

#### Output
* output [ExportTemplate](#exporttemplate)

### extras.export_templates.id.put



```js
netboxdemo.extras.export_templates.id.put({
  "body": {
    "content_type": "",
    "name": "",
    "template_code": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableExportTemplate](#writableexporttemplate)
  * id **required** `integer`: A unique integer value identifying this export template.

#### Output
* output [ExportTemplate](#exporttemplate)

### extras_graphs_list
Call to super to allow for caching


```js
netboxdemo.extras_graphs_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * type `string`
  * name `string`
  * template_language `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * type__n `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * template_language__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Graph](#graph)

### extras_graphs_create



```js
netboxdemo.extras_graphs_create({
  "body": {
    "type": "",
    "name": "",
    "source": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Graph](#graph)

#### Output
* output [Graph](#graph)

### extras_graphs_delete



```js
netboxdemo.extras_graphs_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this graph.

#### Output
*Output schema unknown*

### extras_graphs_read
Call to super to allow for caching


```js
netboxdemo.extras_graphs_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this graph.

#### Output
* output [Graph](#graph)

### extras_graphs_partial_update



```js
netboxdemo.extras_graphs_partial_update({
  "body": {
    "type": "",
    "name": "",
    "source": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Graph](#graph)
  * id **required** `integer`: A unique integer value identifying this graph.

#### Output
* output [Graph](#graph)

### extras_graphs_update



```js
netboxdemo.extras_graphs_update({
  "body": {
    "type": "",
    "name": "",
    "source": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Graph](#graph)
  * id **required** `integer`: A unique integer value identifying this graph.

#### Output
* output [Graph](#graph)

### extras.image_attachments.get
Call to super to allow for caching


```js
netboxdemo.extras.image_attachments.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ImageAttachment](#imageattachment)

### extras.image_attachments.post



```js
netboxdemo.extras.image_attachments.post({
  "body": {
    "content_type": "",
    "object_id": 0,
    "image_height": 0,
    "image_width": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageAttachment](#imageattachment)

#### Output
* output [ImageAttachment](#imageattachment)

### extras.image_attachments.id.delete



```js
netboxdemo.extras.image_attachments.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this image attachment.

#### Output
*Output schema unknown*

### extras.image_attachments.id.get
Call to super to allow for caching


```js
netboxdemo.extras.image_attachments.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this image attachment.

#### Output
* output [ImageAttachment](#imageattachment)

### extras.image_attachments.id.patch



```js
netboxdemo.extras.image_attachments.id.patch({
  "body": {
    "content_type": "",
    "object_id": 0,
    "image_height": 0,
    "image_width": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ImageAttachment](#imageattachment)
  * id **required** `integer`: A unique integer value identifying this image attachment.

#### Output
* output [ImageAttachment](#imageattachment)

### extras.image_attachments.id.put



```js
netboxdemo.extras.image_attachments.id.put({
  "body": {
    "content_type": "",
    "object_id": 0,
    "image_height": 0,
    "image_width": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ImageAttachment](#imageattachment)
  * id **required** `integer`: A unique integer value identifying this image attachment.

#### Output
* output [ImageAttachment](#imageattachment)

### extras.object_changes.get
Retrieve a list of recent changes.


```js
netboxdemo.extras.object_changes.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * user `string`
  * user_name `string`
  * request_id `string`
  * action `string`
  * changed_object_type `string`
  * changed_object_id `string`
  * object_repr `string`
  * q `string`
  * time `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * user__n `string`
  * user_name__n `string`
  * user_name__ic `string`
  * user_name__nic `string`
  * user_name__iew `string`
  * user_name__niew `string`
  * user_name__isw `string`
  * user_name__nisw `string`
  * user_name__ie `string`
  * user_name__nie `string`
  * action__n `string`
  * changed_object_type__n `string`
  * changed_object_id__n `string`
  * changed_object_id__lte `string`
  * changed_object_id__lt `string`
  * changed_object_id__gte `string`
  * changed_object_id__gt `string`
  * object_repr__n `string`
  * object_repr__ic `string`
  * object_repr__nic `string`
  * object_repr__iew `string`
  * object_repr__niew `string`
  * object_repr__isw `string`
  * object_repr__nisw `string`
  * object_repr__ie `string`
  * object_repr__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ObjectChange](#objectchange)

### extras.object_changes.id.get
Retrieve a list of recent changes.


```js
netboxdemo.extras.object_changes.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this object change.

#### Output
* output [ObjectChange](#objectchange)

### extras_reports_list
Compile all reports and their related results (if any). Result data is deferred in the list view.


```js
netboxdemo.extras_reports_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### extras_reports_read
Retrieve a single Report identified as "<module>.<report>".


```js
netboxdemo.extras_reports_read({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### extras_reports_run
Run a Report and create a new ReportResult, overwriting any previous result for the Report.


```js
netboxdemo.extras_reports_run({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### extras_scripts_list



```js
netboxdemo.extras_scripts_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### extras_scripts_read



```js
netboxdemo.extras_scripts_read({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### extras_tags_list
Call to super to allow for caching


```js
netboxdemo.extras_tags_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * color `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * color__n `string`
  * color__ic `string`
  * color__nic `string`
  * color__iew `string`
  * color__niew `string`
  * color__isw `string`
  * color__nisw `string`
  * color__ie `string`
  * color__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Tag](#tag)

### extras_tags_create



```js
netboxdemo.extras_tags_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)

#### Output
* output [Tag](#tag)

### extras_tags_delete



```js
netboxdemo.extras_tags_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tag.

#### Output
*Output schema unknown*

### extras_tags_read
Call to super to allow for caching


```js
netboxdemo.extras_tags_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tag.

#### Output
* output [Tag](#tag)

### extras_tags_partial_update



```js
netboxdemo.extras_tags_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)
  * id **required** `integer`: A unique integer value identifying this tag.

#### Output
* output [Tag](#tag)

### extras_tags_update



```js
netboxdemo.extras_tags_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)
  * id **required** `integer`: A unique integer value identifying this tag.

#### Output
* output [Tag](#tag)

### ipam_aggregates_list
Call to super to allow for caching


```js
netboxdemo.ipam_aggregates_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * date_added `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * family `number`
  * prefix `string`
  * rir_id `string`
  * rir `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * date_added__n `string`
  * date_added__lte `string`
  * date_added__lt `string`
  * date_added__gte `string`
  * date_added__gt `string`
  * rir_id__n `string`
  * rir__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Aggregate](#aggregate)

### ipam_aggregates_create



```js
netboxdemo.ipam_aggregates_create({
  "body": {
    "prefix": "",
    "rir": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableAggregate](#writableaggregate)

#### Output
* output [Aggregate](#aggregate)

### ipam_aggregates_delete



```js
netboxdemo.ipam_aggregates_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this aggregate.

#### Output
*Output schema unknown*

### ipam_aggregates_read
Call to super to allow for caching


```js
netboxdemo.ipam_aggregates_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this aggregate.

#### Output
* output [Aggregate](#aggregate)

### ipam_aggregates_partial_update



```js
netboxdemo.ipam_aggregates_partial_update({
  "body": {
    "prefix": "",
    "rir": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableAggregate](#writableaggregate)
  * id **required** `integer`: A unique integer value identifying this aggregate.

#### Output
* output [Aggregate](#aggregate)

### ipam_aggregates_update



```js
netboxdemo.ipam_aggregates_update({
  "body": {
    "prefix": "",
    "rir": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableAggregate](#writableaggregate)
  * id **required** `integer`: A unique integer value identifying this aggregate.

#### Output
* output [Aggregate](#aggregate)

### ipam.ip_addresses.get
Call to super to allow for caching


```js
netboxdemo.ipam.ip_addresses.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * dns_name `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * family `number`
  * parent `string`
  * address `string`
  * mask_length `number`
  * vrf_id `string`
  * vrf `string`
  * device `string`
  * device_id `string`
  * virtual_machine_id `string`
  * virtual_machine `string`
  * interface `string`
  * interface_id `string`
  * assigned_to_interface `string`
  * status `string`
  * role `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * dns_name__n `string`
  * dns_name__ic `string`
  * dns_name__nic `string`
  * dns_name__iew `string`
  * dns_name__niew `string`
  * dns_name__isw `string`
  * dns_name__nisw `string`
  * dns_name__ie `string`
  * dns_name__nie `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * vrf_id__n `string`
  * vrf__n `string`
  * virtual_machine_id__n `string`
  * virtual_machine__n `string`
  * interface__n `string`
  * interface_id__n `string`
  * status__n `string`
  * role__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [IPAddress](#ipaddress)

### ipam.ip_addresses.post



```js
netboxdemo.ipam.ip_addresses.post({
  "body": {
    "address": "",
    "nat_outside": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableIPAddress](#writableipaddress)

#### Output
* output [IPAddress](#ipaddress)

### ipam.ip_addresses.id.delete



```js
netboxdemo.ipam.ip_addresses.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this IP address.

#### Output
*Output schema unknown*

### ipam.ip_addresses.id.get
Call to super to allow for caching


```js
netboxdemo.ipam.ip_addresses.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this IP address.

#### Output
* output [IPAddress](#ipaddress)

### ipam.ip_addresses.id.patch



```js
netboxdemo.ipam.ip_addresses.id.patch({
  "body": {
    "address": "",
    "nat_outside": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableIPAddress](#writableipaddress)
  * id **required** `integer`: A unique integer value identifying this IP address.

#### Output
* output [IPAddress](#ipaddress)

### ipam.ip_addresses.id.put



```js
netboxdemo.ipam.ip_addresses.id.put({
  "body": {
    "address": "",
    "nat_outside": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableIPAddress](#writableipaddress)
  * id **required** `integer`: A unique integer value identifying this IP address.

#### Output
* output [IPAddress](#ipaddress)

### ipam_prefixes_list
Call to super to allow for caching


```js
netboxdemo.ipam_prefixes_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * is_pool `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * family `number`
  * prefix `string`
  * within `string`
  * within_include `string`
  * contains `string`
  * mask_length `number`
  * vrf_id `string`
  * vrf `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * vlan_id `string`
  * vlan_vid `number`
  * role_id `string`
  * role `string`
  * status `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * vrf_id__n `string`
  * vrf__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * vlan_id__n `string`
  * role_id__n `string`
  * role__n `string`
  * status__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Prefix](#prefix)

### ipam_prefixes_create



```js
netboxdemo.ipam_prefixes_create({
  "body": {
    "prefix": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePrefix](#writableprefix)

#### Output
* output [Prefix](#prefix)

### ipam_prefixes_delete



```js
netboxdemo.ipam_prefixes_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
*Output schema unknown*

### ipam_prefixes_read
Call to super to allow for caching


```js
netboxdemo.ipam_prefixes_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output [Prefix](#prefix)

### ipam_prefixes_partial_update



```js
netboxdemo.ipam_prefixes_partial_update({
  "body": {
    "prefix": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePrefix](#writableprefix)
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output [Prefix](#prefix)

### ipam_prefixes_update



```js
netboxdemo.ipam_prefixes_update({
  "body": {
    "prefix": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePrefix](#writableprefix)
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output [Prefix](#prefix)

### ipam.prefixes.id.available_ips.get
A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.


```js
netboxdemo.ipam.prefixes.id.available_ips.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output `array`
  * items [AvailableIP](#availableip)

### ipam.prefixes.id.available_ips.post
A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.

The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.


```js
netboxdemo.ipam.prefixes.id.available_ips.post({
  "body": {},
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableAvailableIP](#writableavailableip)
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output `array`
  * items [AvailableIP](#availableip)

### ipam.prefixes.id.available_prefixes.get
The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.


```js
netboxdemo.ipam.prefixes.id.available_prefixes.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output `array`
  * items [AvailablePrefix](#availableprefix)

### ipam.prefixes.id.available_prefixes.post
The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
invoked in parallel, which results in a race condition where multiple insertions can occur.


```js
netboxdemo.ipam.prefixes.id.available_prefixes.post({
  "body": {
    "prefix": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritablePrefix](#writableprefix)
  * id **required** `integer`: A unique integer value identifying this prefix.

#### Output
* output `array`
  * items [AvailablePrefix](#availableprefix)

### ipam_rirs_list
Call to super to allow for caching


```js
netboxdemo.ipam_rirs_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * is_private `string`
  * description `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [RIR](#rir)

### ipam_rirs_create



```js
netboxdemo.ipam_rirs_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RIR](#rir)

#### Output
* output [RIR](#rir)

### ipam_rirs_delete



```js
netboxdemo.ipam_rirs_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this RIR.

#### Output
*Output schema unknown*

### ipam_rirs_read
Call to super to allow for caching


```js
netboxdemo.ipam_rirs_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this RIR.

#### Output
* output [RIR](#rir)

### ipam_rirs_partial_update



```js
netboxdemo.ipam_rirs_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [RIR](#rir)
  * id **required** `integer`: A unique integer value identifying this RIR.

#### Output
* output [RIR](#rir)

### ipam_rirs_update



```js
netboxdemo.ipam_rirs_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [RIR](#rir)
  * id **required** `integer`: A unique integer value identifying this RIR.

#### Output
* output [RIR](#rir)

### ipam_roles_list
Call to super to allow for caching


```js
netboxdemo.ipam_roles_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Role](#role)

### ipam_roles_create



```js
netboxdemo.ipam_roles_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Role](#role)

#### Output
* output [Role](#role)

### ipam_roles_delete



```js
netboxdemo.ipam_roles_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this role.

#### Output
*Output schema unknown*

### ipam_roles_read
Call to super to allow for caching


```js
netboxdemo.ipam_roles_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this role.

#### Output
* output [Role](#role)

### ipam_roles_partial_update



```js
netboxdemo.ipam_roles_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Role](#role)
  * id **required** `integer`: A unique integer value identifying this role.

#### Output
* output [Role](#role)

### ipam_roles_update



```js
netboxdemo.ipam_roles_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [Role](#role)
  * id **required** `integer`: A unique integer value identifying this role.

#### Output
* output [Role](#role)

### ipam_services_list
Call to super to allow for caching


```js
netboxdemo.ipam_services_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * protocol `string`
  * port `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * device_id `string`
  * device `string`
  * virtual_machine_id `string`
  * virtual_machine `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * protocol__n `string`
  * port__n `string`
  * port__lte `string`
  * port__lt `string`
  * port__gte `string`
  * port__gt `string`
  * device_id__n `string`
  * device__n `string`
  * virtual_machine_id__n `string`
  * virtual_machine__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Service](#service)

### ipam_services_create



```js
netboxdemo.ipam_services_create({
  "body": {
    "name": "",
    "port": 0,
    "protocol": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableService](#writableservice)

#### Output
* output [Service](#service)

### ipam_services_delete



```js
netboxdemo.ipam_services_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this service.

#### Output
*Output schema unknown*

### ipam_services_read
Call to super to allow for caching


```js
netboxdemo.ipam_services_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this service.

#### Output
* output [Service](#service)

### ipam_services_partial_update



```js
netboxdemo.ipam_services_partial_update({
  "body": {
    "name": "",
    "port": 0,
    "protocol": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableService](#writableservice)
  * id **required** `integer`: A unique integer value identifying this service.

#### Output
* output [Service](#service)

### ipam_services_update



```js
netboxdemo.ipam_services_update({
  "body": {
    "name": "",
    "port": 0,
    "protocol": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableService](#writableservice)
  * id **required** `integer`: A unique integer value identifying this service.

#### Output
* output [Service](#service)

### ipam.vlan_groups.get
Call to super to allow for caching


```js
netboxdemo.ipam.vlan_groups.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VLANGroup](#vlangroup)

### ipam.vlan_groups.post



```js
netboxdemo.ipam.vlan_groups.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLANGroup](#writablevlangroup)

#### Output
* output [VLANGroup](#vlangroup)

### ipam.vlan_groups.id.delete



```js
netboxdemo.ipam.vlan_groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VLAN group.

#### Output
*Output schema unknown*

### ipam.vlan_groups.id.get
Call to super to allow for caching


```js
netboxdemo.ipam.vlan_groups.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VLAN group.

#### Output
* output [VLANGroup](#vlangroup)

### ipam.vlan_groups.id.patch



```js
netboxdemo.ipam.vlan_groups.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLANGroup](#writablevlangroup)
  * id **required** `integer`: A unique integer value identifying this VLAN group.

#### Output
* output [VLANGroup](#vlangroup)

### ipam.vlan_groups.id.put



```js
netboxdemo.ipam.vlan_groups.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLANGroup](#writablevlangroup)
  * id **required** `integer`: A unique integer value identifying this VLAN group.

#### Output
* output [VLANGroup](#vlangroup)

### ipam_vlans_list
Call to super to allow for caching


```js
netboxdemo.ipam_vlans_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * vid `string`
  * name `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * group_id `string`
  * group `string`
  * role_id `string`
  * role `string`
  * status `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * vid__n `string`
  * vid__lte `string`
  * vid__lt `string`
  * vid__gte `string`
  * vid__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * group_id__n `string`
  * group__n `string`
  * role_id__n `string`
  * role__n `string`
  * status__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VLAN](#vlan)

### ipam_vlans_create



```js
netboxdemo.ipam_vlans_create({
  "body": {
    "vid": 0,
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLAN](#writablevlan)

#### Output
* output [VLAN](#vlan)

### ipam_vlans_delete



```js
netboxdemo.ipam_vlans_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VLAN.

#### Output
*Output schema unknown*

### ipam_vlans_read
Call to super to allow for caching


```js
netboxdemo.ipam_vlans_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VLAN.

#### Output
* output [VLAN](#vlan)

### ipam_vlans_partial_update



```js
netboxdemo.ipam_vlans_partial_update({
  "body": {
    "vid": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLAN](#writablevlan)
  * id **required** `integer`: A unique integer value identifying this VLAN.

#### Output
* output [VLAN](#vlan)

### ipam_vlans_update



```js
netboxdemo.ipam_vlans_update({
  "body": {
    "vid": 0,
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVLAN](#writablevlan)
  * id **required** `integer`: A unique integer value identifying this VLAN.

#### Output
* output [VLAN](#vlan)

### ipam_vrfs_list
Call to super to allow for caching


```js
netboxdemo.ipam_vrfs_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * rd `string`
  * enforce_unique `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * rd__n `string`
  * rd__ic `string`
  * rd__nic `string`
  * rd__iew `string`
  * rd__niew `string`
  * rd__isw `string`
  * rd__nisw `string`
  * rd__ie `string`
  * rd__nie `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VRF](#vrf)

### ipam_vrfs_create



```js
netboxdemo.ipam_vrfs_create({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVRF](#writablevrf)

#### Output
* output [VRF](#vrf)

### ipam_vrfs_delete



```js
netboxdemo.ipam_vrfs_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VRF.

#### Output
*Output schema unknown*

### ipam_vrfs_read
Call to super to allow for caching


```js
netboxdemo.ipam_vrfs_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this VRF.

#### Output
* output [VRF](#vrf)

### ipam_vrfs_partial_update



```js
netboxdemo.ipam_vrfs_partial_update({
  "body": {
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVRF](#writablevrf)
  * id **required** `integer`: A unique integer value identifying this VRF.

#### Output
* output [VRF](#vrf)

### ipam_vrfs_update



```js
netboxdemo.ipam_vrfs_update({
  "body": {
    "name": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVRF](#writablevrf)
  * id **required** `integer`: A unique integer value identifying this VRF.

#### Output
* output [VRF](#vrf)

### secrets.generate_rsa_key_pair.get
{
        "public_key": "<public key>",
        "private_key": "<private key>"
    }


```js
netboxdemo.secrets.generate_rsa_key_pair.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### secrets.get_session_key.post
Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
key is POSTed with the name `private_key`. An example:

    curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
    --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/

This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:

    {
        "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
    }

This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
key will be returned instead of a new one.


```js
netboxdemo.secrets.get_session_key.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### secrets.secret_roles.get
Call to super to allow for caching


```js
netboxdemo.secrets.secret_roles.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [SecretRole](#secretrole)

### secrets.secret_roles.post



```js
netboxdemo.secrets.secret_roles.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SecretRole](#secretrole)

#### Output
* output [SecretRole](#secretrole)

### secrets.secret_roles.id.delete



```js
netboxdemo.secrets.secret_roles.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this secret role.

#### Output
*Output schema unknown*

### secrets.secret_roles.id.get
Call to super to allow for caching


```js
netboxdemo.secrets.secret_roles.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this secret role.

#### Output
* output [SecretRole](#secretrole)

### secrets.secret_roles.id.patch



```js
netboxdemo.secrets.secret_roles.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [SecretRole](#secretrole)
  * id **required** `integer`: A unique integer value identifying this secret role.

#### Output
* output [SecretRole](#secretrole)

### secrets.secret_roles.id.put



```js
netboxdemo.secrets.secret_roles.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [SecretRole](#secretrole)
  * id **required** `integer`: A unique integer value identifying this secret role.

#### Output
* output [SecretRole](#secretrole)

### secrets_secrets_list



```js
netboxdemo.secrets_secrets_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * role_id `string`
  * role `string`
  * device_id `string`
  * device `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * role_id__n `string`
  * role__n `string`
  * device_id__n `string`
  * device__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Secret](#secret)

### secrets_secrets_create



```js
netboxdemo.secrets_secrets_create({
  "body": {
    "device": 0,
    "role": 0,
    "plaintext": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSecret](#writablesecret)

#### Output
* output [Secret](#secret)

### secrets_secrets_delete



```js
netboxdemo.secrets_secrets_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this secret.

#### Output
*Output schema unknown*

### secrets_secrets_read



```js
netboxdemo.secrets_secrets_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this secret.

#### Output
* output [Secret](#secret)

### secrets_secrets_partial_update



```js
netboxdemo.secrets_secrets_partial_update({
  "body": {
    "device": 0,
    "role": 0,
    "plaintext": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSecret](#writablesecret)
  * id **required** `integer`: A unique integer value identifying this secret.

#### Output
* output [Secret](#secret)

### secrets_secrets_update



```js
netboxdemo.secrets_secrets_update({
  "body": {
    "device": 0,
    "role": 0,
    "plaintext": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableSecret](#writablesecret)
  * id **required** `integer`: A unique integer value identifying this secret.

#### Output
* output [Secret](#secret)

### tenancy.tenant_groups.get
Call to super to allow for caching


```js
netboxdemo.tenancy.tenant_groups.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * parent_id `string`
  * parent `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * parent_id__n `string`
  * parent__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [TenantGroup](#tenantgroup)

### tenancy.tenant_groups.post



```js
netboxdemo.tenancy.tenant_groups.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenantGroup](#writabletenantgroup)

#### Output
* output [TenantGroup](#tenantgroup)

### tenancy.tenant_groups.id.delete



```js
netboxdemo.tenancy.tenant_groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tenant group.

#### Output
*Output schema unknown*

### tenancy.tenant_groups.id.get
Call to super to allow for caching


```js
netboxdemo.tenancy.tenant_groups.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tenant group.

#### Output
* output [TenantGroup](#tenantgroup)

### tenancy.tenant_groups.id.patch



```js
netboxdemo.tenancy.tenant_groups.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenantGroup](#writabletenantgroup)
  * id **required** `integer`: A unique integer value identifying this tenant group.

#### Output
* output [TenantGroup](#tenantgroup)

### tenancy.tenant_groups.id.put



```js
netboxdemo.tenancy.tenant_groups.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenantGroup](#writabletenantgroup)
  * id **required** `integer`: A unique integer value identifying this tenant group.

#### Output
* output [TenantGroup](#tenantgroup)

### tenancy_tenants_list
Call to super to allow for caching


```js
netboxdemo.tenancy_tenants_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * group_id `string`
  * group `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * group_id__n `string`
  * group__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Tenant](#tenant)

### tenancy_tenants_create



```js
netboxdemo.tenancy_tenants_create({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenant](#writabletenant)

#### Output
* output [Tenant](#tenant)

### tenancy_tenants_delete



```js
netboxdemo.tenancy_tenants_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tenant.

#### Output
*Output schema unknown*

### tenancy_tenants_read
Call to super to allow for caching


```js
netboxdemo.tenancy_tenants_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this tenant.

#### Output
* output [Tenant](#tenant)

### tenancy_tenants_partial_update



```js
netboxdemo.tenancy_tenants_partial_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenant](#writabletenant)
  * id **required** `integer`: A unique integer value identifying this tenant.

#### Output
* output [Tenant](#tenant)

### tenancy_tenants_update



```js
netboxdemo.tenancy_tenants_update({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableTenant](#writabletenant)
  * id **required** `integer`: A unique integer value identifying this tenant.

#### Output
* output [Tenant](#tenant)

### virtualization.cluster_groups.get
Call to super to allow for caching


```js
netboxdemo.virtualization.cluster_groups.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ClusterGroup](#clustergroup)

### virtualization.cluster_groups.post



```js
netboxdemo.virtualization.cluster_groups.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterGroup](#clustergroup)

#### Output
* output [ClusterGroup](#clustergroup)

### virtualization.cluster_groups.id.delete



```js
netboxdemo.virtualization.cluster_groups.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster group.

#### Output
*Output schema unknown*

### virtualization.cluster_groups.id.get
Call to super to allow for caching


```js
netboxdemo.virtualization.cluster_groups.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster group.

#### Output
* output [ClusterGroup](#clustergroup)

### virtualization.cluster_groups.id.patch



```js
netboxdemo.virtualization.cluster_groups.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterGroup](#clustergroup)
  * id **required** `integer`: A unique integer value identifying this cluster group.

#### Output
* output [ClusterGroup](#clustergroup)

### virtualization.cluster_groups.id.put



```js
netboxdemo.virtualization.cluster_groups.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterGroup](#clustergroup)
  * id **required** `integer`: A unique integer value identifying this cluster group.

#### Output
* output [ClusterGroup](#clustergroup)

### virtualization.cluster_types.get
Call to super to allow for caching


```js
netboxdemo.virtualization.cluster_types.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * slug `string`
  * description `string`
  * q `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * slug__n `string`
  * slug__ic `string`
  * slug__nic `string`
  * slug__iew `string`
  * slug__niew `string`
  * slug__isw `string`
  * slug__nisw `string`
  * slug__ie `string`
  * slug__nie `string`
  * description__n `string`
  * description__ic `string`
  * description__nic `string`
  * description__iew `string`
  * description__niew `string`
  * description__isw `string`
  * description__nisw `string`
  * description__ie `string`
  * description__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ClusterType](#clustertype)

### virtualization.cluster_types.post



```js
netboxdemo.virtualization.cluster_types.post({
  "body": {
    "name": "",
    "slug": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterType](#clustertype)

#### Output
* output [ClusterType](#clustertype)

### virtualization.cluster_types.id.delete



```js
netboxdemo.virtualization.cluster_types.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster type.

#### Output
*Output schema unknown*

### virtualization.cluster_types.id.get
Call to super to allow for caching


```js
netboxdemo.virtualization.cluster_types.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster type.

#### Output
* output [ClusterType](#clustertype)

### virtualization.cluster_types.id.patch



```js
netboxdemo.virtualization.cluster_types.id.patch({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterType](#clustertype)
  * id **required** `integer`: A unique integer value identifying this cluster type.

#### Output
* output [ClusterType](#clustertype)

### virtualization.cluster_types.id.put



```js
netboxdemo.virtualization.cluster_types.id.put({
  "body": {
    "name": "",
    "slug": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [ClusterType](#clustertype)
  * id **required** `integer`: A unique integer value identifying this cluster type.

#### Output
* output [ClusterType](#clustertype)

### virtualization_clusters_list
Call to super to allow for caching


```js
netboxdemo.virtualization_clusters_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * group_id `string`
  * group `string`
  * type_id `string`
  * type `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * group_id__n `string`
  * group__n `string`
  * type_id__n `string`
  * type__n `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Cluster](#cluster)

### virtualization_clusters_create



```js
netboxdemo.virtualization_clusters_create({
  "body": {
    "name": "",
    "type": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCluster](#writablecluster)

#### Output
* output [Cluster](#cluster)

### virtualization_clusters_delete



```js
netboxdemo.virtualization_clusters_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster.

#### Output
*Output schema unknown*

### virtualization_clusters_read
Call to super to allow for caching


```js
netboxdemo.virtualization_clusters_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this cluster.

#### Output
* output [Cluster](#cluster)

### virtualization_clusters_partial_update



```js
netboxdemo.virtualization_clusters_partial_update({
  "body": {
    "name": "",
    "type": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCluster](#writablecluster)
  * id **required** `integer`: A unique integer value identifying this cluster.

#### Output
* output [Cluster](#cluster)

### virtualization_clusters_update



```js
netboxdemo.virtualization_clusters_update({
  "body": {
    "name": "",
    "type": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableCluster](#writablecluster)
  * id **required** `integer`: A unique integer value identifying this cluster.

#### Output
* output [Cluster](#cluster)

### virtualization_interfaces_list
Call to super to allow for caching


```js
netboxdemo.virtualization_interfaces_list({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * enabled `string`
  * mtu `string`
  * q `string`
  * virtual_machine_id `string`
  * virtual_machine `string`
  * mac_address `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * mtu__n `string`
  * mtu__lte `string`
  * mtu__lt `string`
  * mtu__gte `string`
  * mtu__gt `string`
  * virtual_machine_id__n `string`
  * virtual_machine__n `string`
  * mac_address__n `string`
  * mac_address__ic `string`
  * mac_address__nic `string`
  * mac_address__iew `string`
  * mac_address__niew `string`
  * mac_address__isw `string`
  * mac_address__nisw `string`
  * mac_address__ie `string`
  * mac_address__nie `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VirtualMachineInterface](#virtualmachineinterface)

### virtualization_interfaces_create



```js
netboxdemo.virtualization_interfaces_create({
  "body": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineInterface](#writablevirtualmachineinterface)

#### Output
* output [VirtualMachineInterface](#virtualmachineinterface)

### virtualization_interfaces_delete



```js
netboxdemo.virtualization_interfaces_delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
*Output schema unknown*

### virtualization_interfaces_read
Call to super to allow for caching


```js
netboxdemo.virtualization_interfaces_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [VirtualMachineInterface](#virtualmachineinterface)

### virtualization_interfaces_partial_update



```js
netboxdemo.virtualization_interfaces_partial_update({
  "body": {
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineInterface](#writablevirtualmachineinterface)
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [VirtualMachineInterface](#virtualmachineinterface)

### virtualization_interfaces_update



```js
netboxdemo.virtualization_interfaces_update({
  "body": {
    "name": "",
    "type": ""
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineInterface](#writablevirtualmachineinterface)
  * id **required** `integer`: A unique integer value identifying this interface.

#### Output
* output [VirtualMachineInterface](#virtualmachineinterface)

### virtualization.virtual_machines.get
Call to super to allow for caching


```js
netboxdemo.virtualization.virtual_machines.get({}, context)
```

#### Input
* input `object`
  * id `string`
  * name `string`
  * cluster `string`
  * vcpus `string`
  * memory `string`
  * disk `string`
  * local_context_data `string`
  * tenant_group_id `string`
  * tenant_group `string`
  * tenant_id `string`
  * tenant `string`
  * created `string`
  * created__gte `string`
  * created__lte `string`
  * last_updated `string`
  * last_updated__gte `string`
  * last_updated__lte `string`
  * q `string`
  * status `string`
  * cluster_group_id `string`
  * cluster_group `string`
  * cluster_type_id `string`
  * cluster_type `string`
  * cluster_id `string`
  * region_id `string`
  * region `string`
  * site_id `string`
  * site `string`
  * role_id `string`
  * role `string`
  * platform_id `string`
  * platform `string`
  * mac_address `string`
  * tag `string`
  * id__n `string`
  * id__lte `string`
  * id__lt `string`
  * id__gte `string`
  * id__gt `string`
  * name__n `string`
  * name__ic `string`
  * name__nic `string`
  * name__iew `string`
  * name__niew `string`
  * name__isw `string`
  * name__nisw `string`
  * name__ie `string`
  * name__nie `string`
  * cluster__n `string`
  * vcpus__n `string`
  * vcpus__lte `string`
  * vcpus__lt `string`
  * vcpus__gte `string`
  * vcpus__gt `string`
  * memory__n `string`
  * memory__lte `string`
  * memory__lt `string`
  * memory__gte `string`
  * memory__gt `string`
  * disk__n `string`
  * disk__lte `string`
  * disk__lt `string`
  * disk__gte `string`
  * disk__gt `string`
  * tenant_group_id__n `string`
  * tenant_group__n `string`
  * tenant_id__n `string`
  * tenant__n `string`
  * status__n `string`
  * cluster_group_id__n `string`
  * cluster_group__n `string`
  * cluster_type_id__n `string`
  * cluster_type__n `string`
  * cluster_id__n `string`
  * region_id__n `string`
  * region__n `string`
  * site_id__n `string`
  * site__n `string`
  * role_id__n `string`
  * role__n `string`
  * platform_id__n `string`
  * platform__n `string`
  * mac_address__n `string`
  * mac_address__ic `string`
  * mac_address__nic `string`
  * mac_address__iew `string`
  * mac_address__niew `string`
  * mac_address__isw `string`
  * mac_address__nisw `string`
  * mac_address__ie `string`
  * mac_address__nie `string`
  * tag__n `string`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [VirtualMachineWithConfigContext](#virtualmachinewithconfigcontext)

### virtualization.virtual_machines.post



```js
netboxdemo.virtualization.virtual_machines.post({
  "body": {
    "name": "",
    "cluster": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineWithConfigContext](#writablevirtualmachinewithconfigcontext)

#### Output
* output [VirtualMachineWithConfigContext](#virtualmachinewithconfigcontext)

### virtualization.virtual_machines.id.delete



```js
netboxdemo.virtualization.virtual_machines.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this virtual machine.

#### Output
*Output schema unknown*

### virtualization.virtual_machines.id.get
Call to super to allow for caching


```js
netboxdemo.virtualization.virtual_machines.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this virtual machine.

#### Output
* output [VirtualMachineWithConfigContext](#virtualmachinewithconfigcontext)

### virtualization.virtual_machines.id.patch



```js
netboxdemo.virtualization.virtual_machines.id.patch({
  "body": {
    "name": "",
    "cluster": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineWithConfigContext](#writablevirtualmachinewithconfigcontext)
  * id **required** `integer`: A unique integer value identifying this virtual machine.

#### Output
* output [VirtualMachineWithConfigContext](#virtualmachinewithconfigcontext)

### virtualization.virtual_machines.id.put



```js
netboxdemo.virtualization.virtual_machines.id.put({
  "body": {
    "name": "",
    "cluster": 0
  },
  "id": 0
}, context)
```

#### Input
* input `object`
  * body **required** [WritableVirtualMachineWithConfigContext](#writablevirtualmachinewithconfigcontext)
  * id **required** `integer`: A unique integer value identifying this virtual machine.

#### Output
* output [VirtualMachineWithConfigContext](#virtualmachinewithconfigcontext)



## Definitions

### Aggregate
* Aggregate `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * date_added `string`
  * description `string`
  * family `object`
    * label **required** `string` (values: IPv4, IPv6)
    * value **required** `integer` (values: 4, 6)
  * id `integer`
  * last_updated `string`
  * prefix **required** `string`
  * rir **required** [NestedRIR](#nestedrir)

### AvailableIP
* AvailableIP `object`
  * address `string`
  * family `integer`
  * vrf [NestedVRF](#nestedvrf)

### AvailablePrefix
* AvailablePrefix `object`
  * family `integer`
  * prefix `string`
  * vrf [NestedVRF](#nestedvrf)

### Cable
* Cable `object`
  * color `string`
  * id `integer`
  * label `string`
  * length `integer`
  * length_unit `object`
    * label **required** `string` (values: Meters, Centimeters, Feet, Inches)
    * value **required** `string` (values: m, cm, ft, in)
  * status `object`
    * label **required** `string` (values: Connected, Planned, Decommissioning)
    * value **required** `string` (values: connected, planned, decommissioning)
  * termination_a `object`
  * termination_a_id **required** `integer`
  * termination_a_type **required** `string`
  * termination_b `object`
  * termination_b_id **required** `integer`
  * termination_b_type **required** `string`
  * type `string` (values: cat3, cat5, cat5e, cat6, cat6a, cat7, dac-active, dac-passive, mrj21-trunk, coaxial, mmf, mmf-om1, mmf-om2, mmf-om3, mmf-om4, smf, smf-os1, smf-os2, aoc, power)

### Circuit
* Circuit `object`
  * tags `array`
    * items `string`
  * cid **required** `string`
  * comments `string`
  * commit_rate `integer`
  * created `string`
  * custom_fields `object`
  * description `string`
  * id `integer`
  * install_date `string`
  * last_updated `string`
  * provider **required** [NestedProvider](#nestedprovider)
  * status `object`
    * label **required** `string` (values: Planned, Provisioning, Active, Offline, Deprovisioning, Decommissioned)
    * value **required** `string` (values: planned, provisioning, active, offline, deprovisioning, decommissioned)
  * tenant [NestedTenant](#nestedtenant)
  * termination_a [CircuitCircuitTermination](#circuitcircuittermination)
  * termination_z [CircuitCircuitTermination](#circuitcircuittermination)
  * type **required** [NestedCircuitType](#nestedcircuittype)

### CircuitCircuitTermination
* Termination a `object`
  * connected_endpoint **required** [NestedInterface](#nestedinterface)
  * id `integer`
  * port_speed **required** `integer`
  * site **required** [NestedSite](#nestedsite)
  * upstream_speed `integer`: Upstream speed, if different from port speed
  * url `string`
  * xconnect_id `string`

### CircuitTermination
* CircuitTermination `object`
  * cable [NestedCable](#nestedcable)
  * circuit **required** [NestedCircuit](#nestedcircuit)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * description `string`
  * id `integer`
  * port_speed **required** `integer`
  * pp_info `string`
  * site **required** [NestedSite](#nestedsite)
  * term_side **required** `string` (values: A, Z)
  * upstream_speed `integer`: Upstream speed, if different from port speed
  * xconnect_id `string`

### CircuitType
* CircuitType `object`
  * circuit_count `integer`
  * description `string`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`

### Cluster
* Cluster `object`
  * tags `array`
    * items `string`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * device_count `integer`
  * group [NestedClusterGroup](#nestedclustergroup)
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * site [NestedSite](#nestedsite)
  * tenant [NestedTenant](#nestedtenant)
  * type **required** [NestedClusterType](#nestedclustertype)
  * virtualmachine_count `integer`

### ClusterGroup
* ClusterGroup `object`
  * cluster_count `integer`
  * description `string`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`

### ClusterType
* ClusterType `object`
  * cluster_count `integer`
  * description `string`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`

### ConfigContext
* ConfigContext `object`
  * tags `array`
    * items `string`
  * cluster_groups `array`
    * items [NestedClusterGroup](#nestedclustergroup)
  * clusters `array`
    * items [NestedCluster](#nestedcluster)
  * data **required** `string`
  * description `string`
  * id `integer`
  * is_active `boolean`
  * name **required** `string`
  * platforms `array`
    * items [NestedPlatform](#nestedplatform)
  * regions `array`
    * items [NestedRegion](#nestedregion)
  * roles `array`
    * items [NestedDeviceRole](#nesteddevicerole)
  * sites `array`
    * items [NestedSite](#nestedsite)
  * tenant_groups `array`
    * items [NestedTenantGroup](#nestedtenantgroup)
  * tenants `array`
    * items [NestedTenant](#nestedtenant)
  * weight `integer`

### ConsolePort
* ConsolePort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: DE-9, DB-25, RJ-11, RJ-12, RJ-45, USB Type A, USB Type B, USB Type C, USB Mini A, USB Mini B, USB Micro A, USB Micro B, Other)
    * value **required** `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### ConsolePortTemplate
* ConsolePortTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: DE-9, DB-25, RJ-11, RJ-12, RJ-45, USB Type A, USB Type B, USB Type C, USB Mini A, USB Mini B, USB Micro A, USB Micro B, Other)
    * value **required** `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### ConsoleServerPort
* ConsoleServerPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: DE-9, DB-25, RJ-11, RJ-12, RJ-45, USB Type A, USB Type B, USB Type C, USB Mini A, USB Mini B, USB Micro A, USB Micro B, Other)
    * value **required** `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### ConsoleServerPortTemplate
* ConsoleServerPortTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: DE-9, DB-25, RJ-11, RJ-12, RJ-45, USB Type A, USB Type B, USB Type C, USB Mini A, USB Mini B, USB Micro A, USB Micro B, Other)
    * value **required** `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### Device
* Device `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this device
  * cluster [NestedCluster](#nestedcluster)
  * comments `string`
  * created `string`
  * custom_fields `object`
  * device_role **required** [NestedDeviceRole](#nesteddevicerole)
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * display_name `string`
  * face `object`
    * label **required** `string` (values: Front, Rear)
    * value **required** `string` (values: front, rear)
  * id `integer`
  * last_updated `string`
  * local_context_data `string`
  * name `string`
  * parent_device [NestedDevice](#nesteddevice)
  * platform [NestedPlatform](#nestedplatform)
  * position `integer`: The lowest-numbered unit occupied by the device
  * primary_ip [NestedIPAddress](#nestedipaddress)
  * primary_ip4 [NestedIPAddress](#nestedipaddress)
  * primary_ip6 [NestedIPAddress](#nestedipaddress)
  * rack [NestedRack](#nestedrack)
  * serial `string`
  * site **required** [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Offline, Active, Planned, Staged, Failed, Inventory, Decommissioning)
    * value **required** `string` (values: offline, active, planned, staged, failed, inventory, decommissioning)
  * tenant [NestedTenant](#nestedtenant)
  * vc_position `integer`
  * vc_priority `integer`
  * virtual_chassis [NestedVirtualChassis](#nestedvirtualchassis)

### DeviceBay
* DeviceBay `object`
  * tags `array`
    * items `string`
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * installed_device [NestedDevice](#nesteddevice)
  * name **required** `string`

### DeviceBayTemplate
* DeviceBayTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * name **required** `string`

### DeviceInterface
* DeviceInterface `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * count_ipaddresses `integer`
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * enabled `boolean`
  * id `integer`
  * lag [NestedInterface](#nestedinterface)
  * mac_address `string`
  * mgmt_only `boolean`: This interface is used only for out-of-band management
  * mode `object`
    * label **required** `string` (values: Access, Tagged, Tagged (All))
    * value **required** `string` (values: access, tagged, tagged-all)
  * mtu `integer`
  * name **required** `string`
  * tagged_vlans `array`
    * items [NestedVLAN](#nestedvlan)
  * type **required** `object`
    * label **required** `string` (values: Virtual, Link Aggregation Group (LAG), 100BASE-TX (10/100ME), 1000BASE-T (1GE), 2.5GBASE-T (2.5GE), 5GBASE-T (5GE), 10GBASE-T (10GE), 10GBASE-CX4 (10GE), GBIC (1GE), SFP (1GE), SFP+ (10GE), XFP (10GE), XENPAK (10GE), X2 (10GE), SFP28 (25GE), QSFP+ (40GE), QSFP28 (50GE), CFP (100GE), CFP2 (100GE), CFP2 (200GE), CFP4 (100GE), Cisco CPAK (100GE), QSFP28 (100GE), QSFP56 (200GE), QSFP-DD (400GE), OSFP (400GE), IEEE 802.11a, IEEE 802.11b/g, IEEE 802.11n, IEEE 802.11ac, IEEE 802.11ad, IEEE 802.11ax, GSM, CDMA, LTE, OC-3/STM-1, OC-12/STM-4, OC-48/STM-16, OC-192/STM-64, OC-768/STM-256, OC-1920/STM-640, OC-3840/STM-1234, SFP (1GFC), SFP (2GFC), SFP (4GFC), SFP+ (8GFC), SFP+ (16GFC), SFP28 (32GFC), QSFP28 (128GFC), SDR (2 Gbps), DDR (4 Gbps), QDR (8 Gbps), FDR10 (10 Gbps), FDR (13.5 Gbps), EDR (25 Gbps), HDR (50 Gbps), NDR (100 Gbps), XDR (250 Gbps), T1 (1.544 Mbps), E1 (2.048 Mbps), T3 (45 Mbps), E3 (34 Mbps), Cisco StackWise, Cisco StackWise Plus, Cisco FlexStack, Cisco FlexStack Plus, Juniper VCP, Extreme SummitStack, Extreme SummitStack-128, Extreme SummitStack-256, Extreme SummitStack-512, Other)
    * value **required** `string` (values: virtual, lag, 100base-tx, 1000base-t, 2.5gbase-t, 5gbase-t, 10gbase-t, 10gbase-cx4, 1000base-x-gbic, 1000base-x-sfp, 10gbase-x-sfpp, 10gbase-x-xfp, 10gbase-x-xenpak, 10gbase-x-x2, 25gbase-x-sfp28, 40gbase-x-qsfpp, 50gbase-x-sfp28, 100gbase-x-cfp, 100gbase-x-cfp2, 200gbase-x-cfp2, 100gbase-x-cfp4, 100gbase-x-cpak, 100gbase-x-qsfp28, 200gbase-x-qsfp56, 400gbase-x-qsfpdd, 400gbase-x-osfp, ieee802.11a, ieee802.11g, ieee802.11n, ieee802.11ac, ieee802.11ad, ieee802.11ax, gsm, cdma, lte, sonet-oc3, sonet-oc12, sonet-oc48, sonet-oc192, sonet-oc768, sonet-oc1920, sonet-oc3840, 1gfc-sfp, 2gfc-sfp, 4gfc-sfp, 8gfc-sfpp, 16gfc-sfpp, 32gfc-sfp28, 128gfc-sfp28, infiniband-sdr, infiniband-ddr, infiniband-qdr, infiniband-fdr10, infiniband-fdr, infiniband-edr, infiniband-hdr, infiniband-ndr, infiniband-xdr, t1, e1, t3, e3, cisco-stackwise, cisco-stackwise-plus, cisco-flexstack, cisco-flexstack-plus, juniper-vcp, extreme-summitstack, extreme-summitstack-128, extreme-summitstack-256, extreme-summitstack-512, other)
  * untagged_vlan [NestedVLAN](#nestedvlan)

### DeviceNAPALM
* DeviceNAPALM `object`
  * method **required** `object`

### DeviceRole
* DeviceRole `object`
  * color `string`
  * description `string`
  * device_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * virtualmachine_count `integer`
  * vm_role `boolean`: Virtual machines may be assigned to this role

### DeviceType
* DeviceType `object`
  * tags `array`
    * items `string`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * device_count `integer`
  * display_name `string`
  * front_image `string`
  * id `integer`
  * is_full_depth `boolean`: Device consumes both front and rear rack faces
  * last_updated `string`
  * manufacturer **required** [NestedManufacturer](#nestedmanufacturer)
  * model **required** `string`
  * part_number `string`: Discrete part number (optional)
  * rear_image `string`
  * slug **required** `string`
  * subdevice_role `object`
    * label **required** `string` (values: Parent, Child)
    * value **required** `string` (values: parent, child)
  * u_height `integer`

### DeviceWithConfigContext
* DeviceWithConfigContext `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this device
  * cluster [NestedCluster](#nestedcluster)
  * comments `string`
  * config_context `object`
  * created `string`
  * custom_fields `object`
  * device_role **required** [NestedDeviceRole](#nesteddevicerole)
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * display_name `string`
  * face `object`
    * label **required** `string` (values: Front, Rear)
    * value **required** `string` (values: front, rear)
  * id `integer`
  * last_updated `string`
  * local_context_data `string`
  * name `string`
  * parent_device [NestedDevice](#nesteddevice)
  * platform [NestedPlatform](#nestedplatform)
  * position `integer`: The lowest-numbered unit occupied by the device
  * primary_ip [NestedIPAddress](#nestedipaddress)
  * primary_ip4 [NestedIPAddress](#nestedipaddress)
  * primary_ip6 [NestedIPAddress](#nestedipaddress)
  * rack [NestedRack](#nestedrack)
  * serial `string`
  * site **required** [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Offline, Active, Planned, Staged, Failed, Inventory, Decommissioning)
    * value **required** `string` (values: offline, active, planned, staged, failed, inventory, decommissioning)
  * tenant [NestedTenant](#nestedtenant)
  * vc_position `integer`
  * vc_priority `integer`
  * virtual_chassis [NestedVirtualChassis](#nestedvirtualchassis)

### ExportTemplate
* ExportTemplate `object`
  * content_type **required** `string`
  * description `string`
  * file_extension `string`: Extension to append to the rendered filename
  * id `integer`
  * mime_type `string`: Defaults to <code>text/plain</code>
  * name **required** `string`
  * template_code **required** `string`: The list of objects being exported is passed as a context variable named <code>queryset</code>.
  * template_language `object`
    * label **required** `string` (values: Django, Jinja2)
    * value **required** `string` (values: django, jinja2)

### FrontPort
* FrontPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * rear_port **required** [FrontPortRearPort](#frontportrearport)
  * rear_port_position `integer`
  * type **required** `object`
    * label **required** `string` (values: 8P8C, 110 Punch, BNC, MRJ21, FC, LC, LC/APC, LSH, LSH/APC, MPO, MTRJ, SC, SC/APC, ST)
    * value **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### FrontPortRearPort
* Rear port `object`
  * id `integer`
  * name **required** `string`
  * url `string`

### FrontPortTemplate
* FrontPortTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * name **required** `string`
  * rear_port **required** [NestedRearPortTemplate](#nestedrearporttemplate)
  * rear_port_position `integer`
  * type **required** `object`
    * label **required** `string` (values: 8P8C, 110 Punch, BNC, MRJ21, FC, LC, LC/APC, LSH, LSH/APC, MPO, MTRJ, SC, SC/APC, ST)
    * value **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### Graph
* Graph `object`
  * id `integer`
  * link `string`
  * name **required** `string`
  * source **required** `string`
  * template_language `string` (values: django, jinja2)
  * type **required** `string`
  * weight `integer`

### IPAddress
* IPAddress `object`
  * tags `array`
    * items `string`
  * address **required** `string`: IPv4 or IPv6 address (with mask)
  * created `string`
  * custom_fields `object`
  * description `string`
  * dns_name `string`: Hostname or FQDN (not case-sensitive)
  * family `object`
    * label **required** `string` (values: IPv4, IPv6)
    * value **required** `integer` (values: 4, 6)
  * id `integer`
  * interface [IPAddressInterface](#ipaddressinterface)
  * last_updated `string`
  * nat_inside [NestedIPAddress](#nestedipaddress)
  * nat_outside [NestedIPAddress](#nestedipaddress)
  * role `object`
    * label **required** `string` (values: Loopback, Secondary, Anycast, VIP, VRRP, HSRP, GLBP, CARP)
    * value **required** `string` (values: loopback, secondary, anycast, vip, vrrp, hsrp, glbp, carp)
  * status `object`
    * label **required** `string` (values: Active, Reserved, Deprecated, DHCP)
    * value **required** `string` (values: active, reserved, deprecated, dhcp)
  * tenant [NestedTenant](#nestedtenant)
  * vrf [NestedVRF](#nestedvrf)

### IPAddressInterface
* Interface `object`
  * device [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * url `string`
  * virtual_machine [NestedVirtualMachine](#nestedvirtualmachine)

### ImageAttachment
* ImageAttachment `object`
  * content_type **required** `string`
  * created `string`
  * id `integer`
  * image `string`
  * image_height **required** `integer`
  * image_width **required** `integer`
  * name `string`
  * object_id **required** `integer`
  * parent `object`

### InterfaceConnection
* InterfaceConnection `object`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * interface_a [NestedInterface](#nestedinterface)
  * interface_b **required** [NestedInterface](#nestedinterface)

### InterfaceTemplate
* InterfaceTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * mgmt_only `boolean`
  * name **required** `string`
  * type **required** `object`
    * label **required** `string` (values: Virtual, Link Aggregation Group (LAG), 100BASE-TX (10/100ME), 1000BASE-T (1GE), 2.5GBASE-T (2.5GE), 5GBASE-T (5GE), 10GBASE-T (10GE), 10GBASE-CX4 (10GE), GBIC (1GE), SFP (1GE), SFP+ (10GE), XFP (10GE), XENPAK (10GE), X2 (10GE), SFP28 (25GE), QSFP+ (40GE), QSFP28 (50GE), CFP (100GE), CFP2 (100GE), CFP2 (200GE), CFP4 (100GE), Cisco CPAK (100GE), QSFP28 (100GE), QSFP56 (200GE), QSFP-DD (400GE), OSFP (400GE), IEEE 802.11a, IEEE 802.11b/g, IEEE 802.11n, IEEE 802.11ac, IEEE 802.11ad, IEEE 802.11ax, GSM, CDMA, LTE, OC-3/STM-1, OC-12/STM-4, OC-48/STM-16, OC-192/STM-64, OC-768/STM-256, OC-1920/STM-640, OC-3840/STM-1234, SFP (1GFC), SFP (2GFC), SFP (4GFC), SFP+ (8GFC), SFP+ (16GFC), SFP28 (32GFC), QSFP28 (128GFC), SDR (2 Gbps), DDR (4 Gbps), QDR (8 Gbps), FDR10 (10 Gbps), FDR (13.5 Gbps), EDR (25 Gbps), HDR (50 Gbps), NDR (100 Gbps), XDR (250 Gbps), T1 (1.544 Mbps), E1 (2.048 Mbps), T3 (45 Mbps), E3 (34 Mbps), Cisco StackWise, Cisco StackWise Plus, Cisco FlexStack, Cisco FlexStack Plus, Juniper VCP, Extreme SummitStack, Extreme SummitStack-128, Extreme SummitStack-256, Extreme SummitStack-512, Other)
    * value **required** `string` (values: virtual, lag, 100base-tx, 1000base-t, 2.5gbase-t, 5gbase-t, 10gbase-t, 10gbase-cx4, 1000base-x-gbic, 1000base-x-sfp, 10gbase-x-sfpp, 10gbase-x-xfp, 10gbase-x-xenpak, 10gbase-x-x2, 25gbase-x-sfp28, 40gbase-x-qsfpp, 50gbase-x-sfp28, 100gbase-x-cfp, 100gbase-x-cfp2, 200gbase-x-cfp2, 100gbase-x-cfp4, 100gbase-x-cpak, 100gbase-x-qsfp28, 200gbase-x-qsfp56, 400gbase-x-qsfpdd, 400gbase-x-osfp, ieee802.11a, ieee802.11g, ieee802.11n, ieee802.11ac, ieee802.11ad, ieee802.11ax, gsm, cdma, lte, sonet-oc3, sonet-oc12, sonet-oc48, sonet-oc192, sonet-oc768, sonet-oc1920, sonet-oc3840, 1gfc-sfp, 2gfc-sfp, 4gfc-sfp, 8gfc-sfpp, 16gfc-sfpp, 32gfc-sfp28, 128gfc-sfp28, infiniband-sdr, infiniband-ddr, infiniband-qdr, infiniband-fdr10, infiniband-fdr, infiniband-edr, infiniband-hdr, infiniband-ndr, infiniband-xdr, t1, e1, t3, e3, cisco-stackwise, cisco-stackwise-plus, cisco-flexstack, cisco-flexstack-plus, juniper-vcp, extreme-summitstack, extreme-summitstack-128, extreme-summitstack-256, extreme-summitstack-512, other)

### InventoryItem
* InventoryItem `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this item
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * discovered `boolean`: This item was automatically discovered
  * id `integer`
  * manufacturer [NestedManufacturer](#nestedmanufacturer)
  * name **required** `string`
  * parent `integer`
  * part_id `string`: Manufacturer-assigned part identifier
  * serial `string`

### Manufacturer
* Manufacturer `object`
  * description `string`
  * devicetype_count `integer`
  * id `integer`
  * inventoryitem_count `integer`
  * name **required** `string`
  * platform_count `integer`
  * slug **required** `string`

### NestedCable
* Cable `object`
  * id `integer`
  * label `string`
  * url `string`

### NestedCircuit
* Circuit `object`
  * cid **required** `string`
  * id `integer`
  * url `string`

### NestedCircuitType
* Type `object`
  * circuit_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedCluster
* Cluster `object`
  * id `integer`
  * name **required** `string`
  * url `string`
  * virtualmachine_count `integer`

### NestedClusterGroup
* NestedClusterGroup `object`
  * cluster_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedClusterType
* Type `object`
  * cluster_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedDevice
* Device `object`
  * display_name `string`
  * id `integer`
  * name `string`
  * url `string`

### NestedDeviceRole
* Device role `object`
  * device_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`
  * virtualmachine_count `integer`

### NestedDeviceType
* Device type `object`
  * device_count `integer`
  * display_name `string`
  * id `integer`
  * manufacturer [NestedManufacturer](#nestedmanufacturer)
  * model **required** `string`
  * slug **required** `string`
  * url `string`

### NestedIPAddress
* Primary ip `object`
  * address **required** `string`: IPv4 or IPv6 address (with mask)
  * family `string`
  * id `integer`
  * url `string`

### NestedInterface
* Connected endpoint `object`
  * cable `integer`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * device [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * url `string`

### NestedManufacturer
* Manufacturer `object`
  * devicetype_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedPlatform
* Platform `object`
  * device_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`
  * virtualmachine_count `integer`

### NestedPowerPanel
* Power panel `object`
  * id `integer`
  * name **required** `string`
  * powerfeed_count `integer`
  * url `string`

### NestedPowerPort
* Power port `object`
  * cable `integer`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * device [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * url `string`

### NestedPowerPortTemplate
* Power port `object`
  * id `integer`
  * name **required** `string`
  * url `string`

### NestedProvider
* Provider `object`
  * circuit_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedRIR
* Rir `object`
  * aggregate_count `integer`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedRack
* Rack `object`
  * device_count `integer`
  * display_name `string`
  * id `integer`
  * name **required** `string`
  * url `string`

### NestedRackGroup
* Rack group `object`
  * id `integer`
  * name **required** `string`
  * rack_count `integer`
  * slug **required** `string`
  * url `string`

### NestedRackRole
* Role `object`
  * id `integer`
  * name **required** `string`
  * rack_count `integer`
  * slug **required** `string`
  * url `string`

### NestedRearPortTemplate
* Rear port `object`
  * id `integer`
  * name **required** `string`
  * url `string`

### NestedRegion
* Parent `object`
  * id `integer`
  * name **required** `string`
  * site_count `integer`
  * slug **required** `string`
  * url `string`

### NestedRole
* Role `object`
  * id `integer`
  * name **required** `string`
  * prefix_count `integer`
  * slug **required** `string`
  * url `string`
  * vlan_count `integer`

### NestedSecretRole
* Role `object`
  * id `integer`
  * name **required** `string`
  * secret_count `integer`
  * slug **required** `string`
  * url `string`

### NestedSite
* Site `object`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedTenant
* Tenant `object`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`

### NestedTenantGroup
* NestedTenantGroup `object`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * tenant_count `integer`
  * url `string`

### NestedUser
* User `object`
  * id `integer`
  * username **required** `string`: Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.

### NestedVLAN
* Untagged vlan `object`
  * display_name `string`
  * id `integer`
  * name **required** `string`
  * url `string`
  * vid **required** `integer`

### NestedVLANGroup
* Group `object`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * url `string`
  * vlan_count `integer`

### NestedVRF
* Vrf `object`
  * id `integer`
  * name **required** `string`
  * prefix_count `integer`
  * rd `string`: Unique route distinguisher (as defined in RFC 4364)
  * url `string`

### NestedVirtualChassis
* Virtual chassis `object`
  * id `integer`
  * master **required** [NestedDevice](#nesteddevice)
  * member_count `integer`
  * url `string`

### NestedVirtualMachine
* Virtual machine `object`
  * id `integer`
  * name **required** `string`
  * url `string`

### ObjectChange
* ObjectChange `object`
  * action `object`
    * label **required** `string` (values: Created, Updated, Deleted)
    * value **required** `string` (values: create, update, delete)
  * changed_object `object`: 
  * changed_object_id **required** `integer`
  * changed_object_type `string`
  * id `integer`
  * object_data `string`
  * request_id `string`
  * time `string`
  * user [NestedUser](#nesteduser)
  * user_name `string`

### Platform
* Platform `object`
  * description `string`
  * device_count `integer`
  * id `integer`
  * manufacturer [NestedManufacturer](#nestedmanufacturer)
  * name **required** `string`
  * napalm_args `string`: Additional arguments to pass when initiating the NAPALM driver (JSON format)
  * napalm_driver `string`: The name of the NAPALM driver to use when interacting with devices
  * slug **required** `string`
  * virtualmachine_count `integer`

### PowerFeed
* PowerFeed `object`
  * tags `array`
    * items `string`
  * amperage `integer`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * id `integer`
  * last_updated `string`
  * max_utilization `integer`: Maximum permissible draw (percentage)
  * name **required** `string`
  * phase `object`
    * label **required** `string` (values: Single phase, Three-phase)
    * value **required** `string` (values: single-phase, three-phase)
  * power_panel **required** [NestedPowerPanel](#nestedpowerpanel)
  * rack [NestedRack](#nestedrack)
  * status `object`
    * label **required** `string` (values: Offline, Active, Planned, Failed)
    * value **required** `string` (values: offline, active, planned, failed)
  * supply `object`
    * label **required** `string` (values: AC, DC)
    * value **required** `string` (values: ac, dc)
  * type `object`
    * label **required** `string` (values: Primary, Redundant)
    * value **required** `string` (values: primary, redundant)
  * voltage `integer`

### PowerOutlet
* PowerOutlet `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * feed_leg `object`
    * label **required** `string` (values: A, B, C)
    * value **required** `string` (values: A, B, C)
  * id `integer`
  * name **required** `string`
  * power_port [NestedPowerPort](#nestedpowerport)
  * type `object`
    * label **required** `string` (values: C5, C7, C13, C15, C19, P+N+E 4H, P+N+E 6H, P+N+E 9H, 2P+E 4H, 2P+E 6H, 2P+E 9H, 3P+E 4H, 3P+E 6H, 3P+E 9H, 3P+N+E 4H, 3P+N+E 6H, 3P+N+E 9H, NEMA 1-15R, NEMA 5-15R, NEMA 5-20R, NEMA 5-30R, NEMA 5-50R, NEMA 6-15R, NEMA 6-20R, NEMA 6-30R, NEMA 6-50R, NEMA 10-30R, NEMA 10-50R, NEMA 14-20R, NEMA 14-30R, NEMA 14-50R, NEMA 14-60R, NEMA L1-15R, NEMA L5-15R, NEMA L5-20R, NEMA L5-30R, NEMA L5-50R, NEMA L6-15R, NEMA L6-20R, NEMA L6-30R, NEMA L6-50R, NEMA L10-30R, NEMA L14-20R, NEMA L14-30R, NEMA L14-50R, NEMA L14-60R, NEMA L21-20R, NEMA L21-30R, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ITA Type E (CEE7/5), ITA Type F (CEE7/3), ITA Type G (BS 1363), ITA Type H, ITA Type I, ITA Type J, ITA Type K, ITA Type L (CEI 23-50), ITA Type M (BS 546), ITA Type N, ITA Type O, HDOT Cx)
    * value **required** `string` (values: iec-60320-c5, iec-60320-c7, iec-60320-c13, iec-60320-c15, iec-60320-c19, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15r, nema-5-15r, nema-5-20r, nema-5-30r, nema-5-50r, nema-6-15r, nema-6-20r, nema-6-30r, nema-6-50r, nema-10-30r, nema-10-50r, nema-14-20r, nema-14-30r, nema-14-50r, nema-14-60r, nema-l1-15r, nema-l5-15r, nema-l5-20r, nema-l5-30r, nema-l5-50r, nema-l6-15r, nema-l6-20r, nema-l6-30r, nema-l6-50r, nema-l10-30r, nema-l14-20r, nema-l14-30r, nema-l14-50r, nema-l14-60r, nema-l21-20r, nema-l21-30r, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ita-e, ita-f, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o, hdot-cx)

### PowerOutletTemplate
* PowerOutletTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * feed_leg `object`
    * label **required** `string` (values: A, B, C)
    * value **required** `string` (values: A, B, C)
  * id `integer`
  * name **required** `string`
  * power_port [NestedPowerPortTemplate](#nestedpowerporttemplate)
  * type `object`
    * label **required** `string` (values: C5, C7, C13, C15, C19, P+N+E 4H, P+N+E 6H, P+N+E 9H, 2P+E 4H, 2P+E 6H, 2P+E 9H, 3P+E 4H, 3P+E 6H, 3P+E 9H, 3P+N+E 4H, 3P+N+E 6H, 3P+N+E 9H, NEMA 1-15R, NEMA 5-15R, NEMA 5-20R, NEMA 5-30R, NEMA 5-50R, NEMA 6-15R, NEMA 6-20R, NEMA 6-30R, NEMA 6-50R, NEMA 10-30R, NEMA 10-50R, NEMA 14-20R, NEMA 14-30R, NEMA 14-50R, NEMA 14-60R, NEMA L1-15R, NEMA L5-15R, NEMA L5-20R, NEMA L5-30R, NEMA L5-50R, NEMA L6-15R, NEMA L6-20R, NEMA L6-30R, NEMA L6-50R, NEMA L10-30R, NEMA L14-20R, NEMA L14-30R, NEMA L14-50R, NEMA L14-60R, NEMA L21-20R, NEMA L21-30R, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ITA Type E (CEE7/5), ITA Type F (CEE7/3), ITA Type G (BS 1363), ITA Type H, ITA Type I, ITA Type J, ITA Type K, ITA Type L (CEI 23-50), ITA Type M (BS 546), ITA Type N, ITA Type O, HDOT Cx)
    * value **required** `string` (values: iec-60320-c5, iec-60320-c7, iec-60320-c13, iec-60320-c15, iec-60320-c19, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15r, nema-5-15r, nema-5-20r, nema-5-30r, nema-5-50r, nema-6-15r, nema-6-20r, nema-6-30r, nema-6-50r, nema-10-30r, nema-10-50r, nema-14-20r, nema-14-30r, nema-14-50r, nema-14-60r, nema-l1-15r, nema-l5-15r, nema-l5-20r, nema-l5-30r, nema-l5-50r, nema-l6-15r, nema-l6-20r, nema-l6-30r, nema-l6-50r, nema-l10-30r, nema-l14-20r, nema-l14-30r, nema-l14-50r, nema-l14-60r, nema-l21-20r, nema-l21-30r, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ita-e, ita-f, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o, hdot-cx)

### PowerPanel
* PowerPanel `object`
  * id `integer`
  * name **required** `string`
  * powerfeed_count `integer`
  * rack_group [NestedRackGroup](#nestedrackgroup)
  * site **required** [NestedSite](#nestedsite)

### PowerPort
* PowerPort `object`
  * tags `array`
    * items `string`
  * allocated_draw `integer`: Allocated power draw (watts)
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `object`
    * label **required** `string` (values: Not Connected, Connected)
    * value **required** `boolean` (values: false, true)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * maximum_draw `integer`: Maximum power draw (watts)
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: C6, C8, C14, C16, C20, P+N+E 4H, P+N+E 6H, P+N+E 9H, 2P+E 4H, 2P+E 6H, 2P+E 9H, 3P+E 4H, 3P+E 6H, 3P+E 9H, 3P+N+E 4H, 3P+N+E 6H, 3P+N+E 9H, NEMA 1-15P, NEMA 5-15P, NEMA 5-20P, NEMA 5-30P, NEMA 5-50P, NEMA 6-15P, NEMA 6-20P, NEMA 6-30P, NEMA 6-50P, NEMA 10-30P, NEMA 10-50P, NEMA 14-20P, NEMA 14-30P, NEMA 14-50P, NEMA 14-60P, NEMA L1-15P, NEMA L5-15P, NEMA L5-20P, NEMA L5-30P, NEMA L5-50P, NEMA L6-15P, NEMA L6-20P, NEMA L6-30P, NEMA L6-50P, NEMA L10-30P, NEMA L14-20P, NEMA L14-30P, NEMA L14-50P, NEMA L14-60P, NEMA L21-20P, NEMA L21-30P, CS6361C, CS6365C, CS8165C, CS8265C, CS8365C, CS8465C, ITA Type E (CEE 7/5), ITA Type F (CEE 7/4), ITA Type E/F (CEE 7/7), ITA Type G (BS 1363), ITA Type H, ITA Type I, ITA Type J, ITA Type K, ITA Type L (CEI 23-50), ITA Type M (BS 546), ITA Type N, ITA Type O)
    * value **required** `string` (values: iec-60320-c6, iec-60320-c8, iec-60320-c14, iec-60320-c16, iec-60320-c20, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15p, nema-5-15p, nema-5-20p, nema-5-30p, nema-5-50p, nema-6-15p, nema-6-20p, nema-6-30p, nema-6-50p, nema-10-30p, nema-10-50p, nema-14-20p, nema-14-30p, nema-14-50p, nema-14-60p, nema-l1-15p, nema-l5-15p, nema-l5-20p, nema-l5-30p, nema-l5-50p, nema-l6-15p, nema-l6-20p, nema-l6-30p, nema-l6-50p, nema-l10-30p, nema-l14-20p, nema-l14-30p, nema-l14-50p, nema-l14-60p, nema-l21-20p, nema-l21-30p, cs6361c, cs6365c, cs8165c, cs8265c, cs8365c, cs8465c, ita-e, ita-f, ita-ef, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o)

### PowerPortTemplate
* PowerPortTemplate `object`
  * allocated_draw `integer`: Allocated power draw (watts)
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * maximum_draw `integer`: Maximum power draw (watts)
  * name **required** `string`
  * type `object`
    * label **required** `string` (values: C6, C8, C14, C16, C20, P+N+E 4H, P+N+E 6H, P+N+E 9H, 2P+E 4H, 2P+E 6H, 2P+E 9H, 3P+E 4H, 3P+E 6H, 3P+E 9H, 3P+N+E 4H, 3P+N+E 6H, 3P+N+E 9H, NEMA 1-15P, NEMA 5-15P, NEMA 5-20P, NEMA 5-30P, NEMA 5-50P, NEMA 6-15P, NEMA 6-20P, NEMA 6-30P, NEMA 6-50P, NEMA 10-30P, NEMA 10-50P, NEMA 14-20P, NEMA 14-30P, NEMA 14-50P, NEMA 14-60P, NEMA L1-15P, NEMA L5-15P, NEMA L5-20P, NEMA L5-30P, NEMA L5-50P, NEMA L6-15P, NEMA L6-20P, NEMA L6-30P, NEMA L6-50P, NEMA L10-30P, NEMA L14-20P, NEMA L14-30P, NEMA L14-50P, NEMA L14-60P, NEMA L21-20P, NEMA L21-30P, CS6361C, CS6365C, CS8165C, CS8265C, CS8365C, CS8465C, ITA Type E (CEE 7/5), ITA Type F (CEE 7/4), ITA Type E/F (CEE 7/7), ITA Type G (BS 1363), ITA Type H, ITA Type I, ITA Type J, ITA Type K, ITA Type L (CEI 23-50), ITA Type M (BS 546), ITA Type N, ITA Type O)
    * value **required** `string` (values: iec-60320-c6, iec-60320-c8, iec-60320-c14, iec-60320-c16, iec-60320-c20, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15p, nema-5-15p, nema-5-20p, nema-5-30p, nema-5-50p, nema-6-15p, nema-6-20p, nema-6-30p, nema-6-50p, nema-10-30p, nema-10-50p, nema-14-20p, nema-14-30p, nema-14-50p, nema-14-60p, nema-l1-15p, nema-l5-15p, nema-l5-20p, nema-l5-30p, nema-l5-50p, nema-l6-15p, nema-l6-20p, nema-l6-30p, nema-l6-50p, nema-l10-30p, nema-l14-20p, nema-l14-30p, nema-l14-50p, nema-l14-60p, nema-l21-20p, nema-l21-30p, cs6361c, cs6365c, cs8165c, cs8265c, cs8365c, cs8465c, ita-e, ita-f, ita-ef, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o)

### Prefix
* Prefix `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * family `object`
    * label **required** `string` (values: IPv4, IPv6)
    * value **required** `integer` (values: 4, 6)
  * id `integer`
  * is_pool `boolean`: All IP addresses within this prefix are considered usable
  * last_updated `string`
  * prefix **required** `string`: IPv4 or IPv6 network with mask
  * role [NestedRole](#nestedrole)
  * site [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Container, Active, Reserved, Deprecated)
    * value **required** `string` (values: container, active, reserved, deprecated)
  * tenant [NestedTenant](#nestedtenant)
  * vlan [NestedVLAN](#nestedvlan)
  * vrf [NestedVRF](#nestedvrf)

### Provider
* Provider `object`
  * tags `array`
    * items `string`
  * account `string`
  * admin_contact `string`
  * asn `integer`: 32-bit autonomous system number
  * circuit_count `integer`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * noc_contact `string`
  * portal_url `string`
  * slug **required** `string`

### RIR
* RIR `object`
  * aggregate_count `integer`
  * description `string`
  * id `integer`
  * is_private `boolean`: IP space managed by this RIR is considered private
  * name **required** `string`
  * slug **required** `string`

### Rack
* Rack `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this rack
  * comments `string`
  * created `string`
  * custom_fields `object`
  * desc_units `boolean`: Units are numbered top-to-bottom
  * device_count `integer`
  * display_name `string`
  * facility_id `string`: Locally-assigned identifier
  * group [NestedRackGroup](#nestedrackgroup)
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * outer_depth `integer`: Outer dimension of rack (depth)
  * outer_unit `object`
    * label **required** `string` (values: Millimeters, Inches)
    * value **required** `string` (values: mm, in)
  * outer_width `integer`: Outer dimension of rack (width)
  * powerfeed_count `integer`
  * role [NestedRackRole](#nestedrackrole)
  * serial `string`
  * site **required** [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Reserved, Available, Planned, Active, Deprecated)
    * value **required** `string` (values: reserved, available, planned, active, deprecated)
  * tenant [NestedTenant](#nestedtenant)
  * type `object`
    * label **required** `string` (values: 2-post frame, 4-post frame, 4-post cabinet, Wall-mounted frame, Wall-mounted cabinet)
    * value **required** `string` (values: 2-post-frame, 4-post-frame, 4-post-cabinet, wall-frame, wall-cabinet)
  * u_height `integer`: Height in rack units
  * width `object`
    * label **required** `string` (values: 10 inches, 19 inches, 21 inches, 23 inches)
    * value **required** `integer` (values: 10, 19, 21, 23)

### RackGroup
* RackGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent [NestedRackGroup](#nestedrackgroup)
  * rack_count `integer`
  * site **required** [NestedSite](#nestedsite)
  * slug **required** `string`

### RackReservation
* RackReservation `object`
  * created `string`
  * description **required** `string`
  * id `integer`
  * rack **required** [NestedRack](#nestedrack)
  * tenant [NestedTenant](#nestedtenant)
  * units **required** `array`
    * items `integer`
  * user **required** [NestedUser](#nesteduser)

### RackRole
* RackRole `object`
  * color `string`
  * description `string`
  * id `integer`
  * name **required** `string`
  * rack_count `integer`
  * slug **required** `string`

### RackUnit
* RackUnit `object`
  * device [NestedDevice](#nesteddevice)
  * face `object`
    * label **required** `string` (values: Front, Rear)
    * value **required** `string` (values: front, rear)
  * id `integer`
  * name `string`

### RearPort
* RearPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * description `string`
  * device **required** [NestedDevice](#nesteddevice)
  * id `integer`
  * name **required** `string`
  * positions `integer`
  * type **required** `object`
    * label **required** `string` (values: 8P8C, 110 Punch, BNC, MRJ21, FC, LC, LC/APC, LSH, LSH/APC, MPO, MTRJ, SC, SC/APC, ST)
    * value **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### RearPortTemplate
* RearPortTemplate `object`
  * device_type **required** [NestedDeviceType](#nesteddevicetype)
  * id `integer`
  * name **required** `string`
  * positions `integer`
  * type **required** `object`
    * label **required** `string` (values: 8P8C, 110 Punch, BNC, MRJ21, FC, LC, LC/APC, LSH, LSH/APC, MPO, MTRJ, SC, SC/APC, ST)
    * value **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### Region
* Region `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent [NestedRegion](#nestedregion)
  * site_count `integer`
  * slug **required** `string`

### Role
* Role `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * prefix_count `integer`
  * slug **required** `string`
  * vlan_count `integer`
  * weight `integer`

### Secret
* Secret `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * device **required** [NestedDevice](#nesteddevice)
  * hash `string`
  * id `integer`
  * last_updated `string`
  * name `string`
  * plaintext **required** `string`
  * role **required** [NestedSecretRole](#nestedsecretrole)

### SecretRole
* SecretRole `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * secret_count `integer`
  * slug **required** `string`

### Service
* Service `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device [NestedDevice](#nesteddevice)
  * id `integer`
  * ipaddresses `array`
    * items [NestedIPAddress](#nestedipaddress)
  * last_updated `string`
  * name **required** `string`
  * port **required** `integer`
  * protocol `object`
    * label **required** `string` (values: TCP, UDP)
    * value **required** `string` (values: tcp, udp)
  * virtual_machine [NestedVirtualMachine](#nestedvirtualmachine)

### Site
* Site `object`
  * tags `array`
    * items `string`
  * asn `integer`: 32-bit autonomous system number
  * circuit_count `integer`
  * comments `string`
  * contact_email `string`
  * contact_name `string`
  * contact_phone `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device_count `integer`
  * facility `string`: Local facility ID or description
  * id `integer`
  * last_updated `string`
  * latitude `string`: GPS coordinate (latitude)
  * longitude `string`: GPS coordinate (longitude)
  * name **required** `string`
  * physical_address `string`
  * prefix_count `integer`
  * rack_count `integer`
  * region [NestedRegion](#nestedregion)
  * shipping_address `string`
  * slug **required** `string`
  * status `object`
    * label **required** `string` (values: Active, Planned, Retired)
    * value **required** `string` (values: active, planned, retired)
  * tenant [NestedTenant](#nestedtenant)
  * time_zone `string`
  * virtualmachine_count `integer`
  * vlan_count `integer`

### Tag
* Tag `object`
  * color `string`
  * description `string`
  * id `integer`
  * name **required** `string`
  * slug **required** `string`
  * tagged_items `integer`

### Tenant
* Tenant `object`
  * tags `array`
    * items `string`
  * circuit_count `integer`
  * cluster_count `integer`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device_count `integer`
  * group [NestedTenantGroup](#nestedtenantgroup)
  * id `integer`
  * ipaddress_count `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * rack_count `integer`
  * site_count `integer`
  * slug **required** `string`
  * virtualmachine_count `integer`
  * vlan_count `integer`
  * vrf_count `integer`

### TenantGroup
* TenantGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent [NestedTenantGroup](#nestedtenantgroup)
  * slug **required** `string`
  * tenant_count `integer`

### VLAN
* VLAN `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * display_name `string`
  * group [NestedVLANGroup](#nestedvlangroup)
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * role [NestedRole](#nestedrole)
  * site [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Active, Reserved, Deprecated)
    * value **required** `string` (values: active, reserved, deprecated)
  * tenant [NestedTenant](#nestedtenant)
  * vid **required** `integer`

### VLANGroup
* VLANGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * site [NestedSite](#nestedsite)
  * slug **required** `string`
  * vlan_count `integer`

### VRF
* VRF `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * display_name `string`
  * enforce_unique `boolean`: Prevent duplicate prefixes/IP addresses within this VRF
  * id `integer`
  * ipaddress_count `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * rd `string`: Unique route distinguisher (as defined in RFC 4364)
  * tenant [NestedTenant](#nestedtenant)

### VirtualChassis
* VirtualChassis `object`
  * tags `array`
    * items `string`
  * domain `string`
  * id `integer`
  * master **required** [NestedDevice](#nesteddevice)
  * member_count `integer`

### VirtualMachineInterface
* VirtualMachineInterface `object`
  * tags `array`
    * items `string`
  * description `string`
  * enabled `boolean`
  * id `integer`
  * mac_address `string`
  * mode `object`
    * label **required** `string` (values: Access, Tagged, Tagged (All))
    * value **required** `string` (values: access, tagged, tagged-all)
  * mtu `integer`
  * name **required** `string`
  * tagged_vlans `array`
    * items [NestedVLAN](#nestedvlan)
  * type `object`
    * label **required** `string` (values: Virtual)
    * value **required** `string` (values: virtual)
  * untagged_vlan [NestedVLAN](#nestedvlan)
  * virtual_machine **required** [NestedVirtualMachine](#nestedvirtualmachine)

### VirtualMachineWithConfigContext
* VirtualMachineWithConfigContext `object`
  * tags `array`
    * items `string`
  * cluster **required** [NestedCluster](#nestedcluster)
  * comments `string`
  * config_context `object`
  * created `string`
  * custom_fields `object`
  * disk `integer`
  * id `integer`
  * last_updated `string`
  * local_context_data `string`
  * memory `integer`
  * name **required** `string`
  * platform [NestedPlatform](#nestedplatform)
  * primary_ip [NestedIPAddress](#nestedipaddress)
  * primary_ip4 [NestedIPAddress](#nestedipaddress)
  * primary_ip6 [NestedIPAddress](#nestedipaddress)
  * role [NestedDeviceRole](#nesteddevicerole)
  * site [NestedSite](#nestedsite)
  * status `object`
    * label **required** `string` (values: Offline, Active, Planned, Staged, Failed, Decommissioning)
    * value **required** `string` (values: offline, active, planned, staged, failed, decommissioning)
  * tenant [NestedTenant](#nestedtenant)
  * vcpus `integer`

### WritableAggregate
* WritableAggregate `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * date_added `string`
  * description `string`
  * family `string`
  * id `integer`
  * last_updated `string`
  * prefix **required** `string`
  * rir **required** `integer`

### WritableAvailableIP
* WritableAvailableIP `object`
  * address `string`
  * family `integer`

### WritableCable
* WritableCable `object`
  * color `string`
  * id `integer`
  * label `string`
  * length `integer`
  * length_unit `string` (values: m, cm, ft, in)
  * status `string` (values: connected, planned, decommissioning)
  * termination_a `object`
  * termination_a_id **required** `integer`
  * termination_a_type **required** `string`
  * termination_b `object`
  * termination_b_id **required** `integer`
  * termination_b_type **required** `string`
  * type `string` (values: cat3, cat5, cat5e, cat6, cat6a, cat7, dac-active, dac-passive, mrj21-trunk, coaxial, mmf, mmf-om1, mmf-om2, mmf-om3, mmf-om4, smf, smf-os1, smf-os2, aoc, power)

### WritableCircuit
* WritableCircuit `object`
  * tags `array`
    * items `string`
  * cid **required** `string`
  * comments `string`
  * commit_rate `integer`
  * created `string`
  * custom_fields `object`
  * description `string`
  * id `integer`
  * install_date `string`
  * last_updated `string`
  * provider **required** `integer`
  * status `string` (values: planned, provisioning, active, offline, deprovisioning, decommissioned)
  * tenant `integer`
  * termination_a `string`
  * termination_z `string`
  * type **required** `integer`

### WritableCircuitTermination
* WritableCircuitTermination `object`
  * cable [NestedCable](#nestedcable)
  * circuit **required** `integer`
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * description `string`
  * id `integer`
  * port_speed **required** `integer`
  * pp_info `string`
  * site **required** `integer`
  * term_side **required** `string` (values: A, Z)
  * upstream_speed `integer`: Upstream speed, if different from port speed
  * xconnect_id `string`

### WritableCluster
* WritableCluster `object`
  * tags `array`
    * items `string`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * device_count `integer`
  * group `integer`
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * site `integer`
  * tenant `integer`
  * type **required** `integer`
  * virtualmachine_count `integer`

### WritableConfigContext
* WritableConfigContext `object`
  * tags `array`
    * items `string`
  * cluster_groups `array`
    * items `integer`
  * clusters `array`
    * items `integer`
  * data **required** `string`
  * description `string`
  * id `integer`
  * is_active `boolean`
  * name **required** `string`
  * platforms `array`
    * items `integer`
  * regions `array`
    * items `integer`
  * roles `array`
    * items `integer`
  * sites `array`
    * items `integer`
  * tenant_groups `array`
    * items `integer`
  * tenants `array`
    * items `integer`
  * weight `integer`

### WritableConsolePort
* WritableConsolePort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * description `string`
  * device **required** `integer`
  * id `integer`
  * name **required** `string`
  * type `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other): Physical port type

### WritableConsolePortTemplate
* WritableConsolePortTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * name **required** `string`
  * type `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### WritableConsoleServerPort
* WritableConsoleServerPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * description `string`
  * device **required** `integer`
  * id `integer`
  * name **required** `string`
  * type `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other): Physical port type

### WritableConsoleServerPortTemplate
* WritableConsoleServerPortTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * name **required** `string`
  * type `string` (values: de-9, db-25, rj-11, rj-12, rj-45, usb-a, usb-b, usb-c, usb-mini-a, usb-mini-b, usb-micro-a, usb-micro-b, other)

### WritableDeviceBay
* WritableDeviceBay `object`
  * tags `array`
    * items `string`
  * description `string`
  * device **required** `integer`
  * id `integer`
  * installed_device `integer`
  * name **required** `string`

### WritableDeviceBayTemplate
* WritableDeviceBayTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * name **required** `string`

### WritableDeviceInterface
* WritableDeviceInterface `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * count_ipaddresses `integer`
  * description `string`
  * device **required** `integer`
  * enabled `boolean`
  * id `integer`
  * lag `integer`
  * mac_address `string`
  * mgmt_only `boolean`: This interface is used only for out-of-band management
  * mode `string` (values: access, tagged, tagged-all)
  * mtu `integer`
  * name **required** `string`
  * tagged_vlans `array`
    * items `integer`
  * type **required** `string` (values: virtual, lag, 100base-tx, 1000base-t, 2.5gbase-t, 5gbase-t, 10gbase-t, 10gbase-cx4, 1000base-x-gbic, 1000base-x-sfp, 10gbase-x-sfpp, 10gbase-x-xfp, 10gbase-x-xenpak, 10gbase-x-x2, 25gbase-x-sfp28, 40gbase-x-qsfpp, 50gbase-x-sfp28, 100gbase-x-cfp, 100gbase-x-cfp2, 200gbase-x-cfp2, 100gbase-x-cfp4, 100gbase-x-cpak, 100gbase-x-qsfp28, 200gbase-x-qsfp56, 400gbase-x-qsfpdd, 400gbase-x-osfp, ieee802.11a, ieee802.11g, ieee802.11n, ieee802.11ac, ieee802.11ad, ieee802.11ax, gsm, cdma, lte, sonet-oc3, sonet-oc12, sonet-oc48, sonet-oc192, sonet-oc768, sonet-oc1920, sonet-oc3840, 1gfc-sfp, 2gfc-sfp, 4gfc-sfp, 8gfc-sfpp, 16gfc-sfpp, 32gfc-sfp28, 128gfc-sfp28, infiniband-sdr, infiniband-ddr, infiniband-qdr, infiniband-fdr10, infiniband-fdr, infiniband-edr, infiniband-hdr, infiniband-ndr, infiniband-xdr, t1, e1, t3, e3, cisco-stackwise, cisco-stackwise-plus, cisco-flexstack, cisco-flexstack-plus, juniper-vcp, extreme-summitstack, extreme-summitstack-128, extreme-summitstack-256, extreme-summitstack-512, other)
  * untagged_vlan `integer`

### WritableDeviceType
* WritableDeviceType `object`
  * tags `array`
    * items `string`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * device_count `integer`
  * display_name `string`
  * front_image `string`
  * id `integer`
  * is_full_depth `boolean`: Device consumes both front and rear rack faces
  * last_updated `string`
  * manufacturer **required** `integer`
  * model **required** `string`
  * part_number `string`: Discrete part number (optional)
  * rear_image `string`
  * slug **required** `string`
  * subdevice_role `string` (values: parent, child): Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child.
  * u_height `integer`

### WritableDeviceWithConfigContext
* WritableDeviceWithConfigContext `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this device
  * cluster `integer`
  * comments `string`
  * config_context `object`
  * created `string`
  * custom_fields `object`
  * device_role **required** `integer`
  * device_type **required** `integer`
  * display_name `string`
  * face `string` (values: front, rear)
  * id `integer`
  * last_updated `string`
  * local_context_data `string`
  * name `string`
  * parent_device [NestedDevice](#nesteddevice)
  * platform `integer`
  * position `integer`: The lowest-numbered unit occupied by the device
  * primary_ip `string`
  * primary_ip4 `integer`
  * primary_ip6 `integer`
  * rack `integer`
  * serial `string`
  * site **required** `integer`
  * status `string` (values: offline, active, planned, staged, failed, inventory, decommissioning)
  * tenant `integer`
  * vc_position `integer`
  * vc_priority `integer`
  * virtual_chassis `integer`

### WritableExportTemplate
* WritableExportTemplate `object`
  * content_type **required** `string`
  * description `string`
  * file_extension `string`: Extension to append to the rendered filename
  * id `integer`
  * mime_type `string`: Defaults to <code>text/plain</code>
  * name **required** `string`
  * template_code **required** `string`: The list of objects being exported is passed as a context variable named <code>queryset</code>.
  * template_language `string` (values: django, jinja2)

### WritableFrontPort
* WritableFrontPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * description `string`
  * device **required** `integer`
  * id `integer`
  * name **required** `string`
  * rear_port **required** `integer`
  * rear_port_position `integer`
  * type **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### WritableFrontPortTemplate
* WritableFrontPortTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * name **required** `string`
  * rear_port **required** `integer`
  * rear_port_position `integer`
  * type **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### WritableIPAddress
* WritableIPAddress `object`
  * tags `array`
    * items `string`
  * address **required** `string`: IPv4 or IPv6 address (with mask)
  * created `string`
  * custom_fields `object`
  * description `string`
  * dns_name `string`: Hostname or FQDN (not case-sensitive)
  * family `string`
  * id `integer`
  * interface `integer`
  * last_updated `string`
  * nat_inside `integer`: The IP for which this address is the "outside" IP
  * nat_outside **required** `integer`
  * role `string` (values: loopback, secondary, anycast, vip, vrrp, hsrp, glbp, carp): The functional role of this IP
  * status `string` (values: active, reserved, deprecated, dhcp): The operational status of this IP
  * tenant `integer`
  * vrf `integer`

### WritableInterfaceTemplate
* WritableInterfaceTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * mgmt_only `boolean`
  * name **required** `string`
  * type **required** `string` (values: virtual, lag, 100base-tx, 1000base-t, 2.5gbase-t, 5gbase-t, 10gbase-t, 10gbase-cx4, 1000base-x-gbic, 1000base-x-sfp, 10gbase-x-sfpp, 10gbase-x-xfp, 10gbase-x-xenpak, 10gbase-x-x2, 25gbase-x-sfp28, 40gbase-x-qsfpp, 50gbase-x-sfp28, 100gbase-x-cfp, 100gbase-x-cfp2, 200gbase-x-cfp2, 100gbase-x-cfp4, 100gbase-x-cpak, 100gbase-x-qsfp28, 200gbase-x-qsfp56, 400gbase-x-qsfpdd, 400gbase-x-osfp, ieee802.11a, ieee802.11g, ieee802.11n, ieee802.11ac, ieee802.11ad, ieee802.11ax, gsm, cdma, lte, sonet-oc3, sonet-oc12, sonet-oc48, sonet-oc192, sonet-oc768, sonet-oc1920, sonet-oc3840, 1gfc-sfp, 2gfc-sfp, 4gfc-sfp, 8gfc-sfpp, 16gfc-sfpp, 32gfc-sfp28, 128gfc-sfp28, infiniband-sdr, infiniband-ddr, infiniband-qdr, infiniband-fdr10, infiniband-fdr, infiniband-edr, infiniband-hdr, infiniband-ndr, infiniband-xdr, t1, e1, t3, e3, cisco-stackwise, cisco-stackwise-plus, cisco-flexstack, cisco-flexstack-plus, juniper-vcp, extreme-summitstack, extreme-summitstack-128, extreme-summitstack-256, extreme-summitstack-512, other)

### WritableInventoryItem
* WritableInventoryItem `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this item
  * description `string`
  * device **required** `integer`
  * discovered `boolean`: This item was automatically discovered
  * id `integer`
  * manufacturer `integer`
  * name **required** `string`
  * parent `integer`
  * part_id `string`: Manufacturer-assigned part identifier
  * serial `string`

### WritablePlatform
* WritablePlatform `object`
  * description `string`
  * device_count `integer`
  * id `integer`
  * manufacturer `integer`: Optionally limit this platform to devices of a certain manufacturer
  * name **required** `string`
  * napalm_args `string`: Additional arguments to pass when initiating the NAPALM driver (JSON format)
  * napalm_driver `string`: The name of the NAPALM driver to use when interacting with devices
  * slug **required** `string`
  * virtualmachine_count `integer`

### WritablePowerFeed
* WritablePowerFeed `object`
  * tags `array`
    * items `string`
  * amperage `integer`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * id `integer`
  * last_updated `string`
  * max_utilization `integer`: Maximum permissible draw (percentage)
  * name **required** `string`
  * phase `string` (values: single-phase, three-phase)
  * power_panel **required** `integer`
  * rack `integer`
  * status `string` (values: offline, active, planned, failed)
  * supply `string` (values: ac, dc)
  * type `string` (values: primary, redundant)
  * voltage `integer`

### WritablePowerOutlet
* WritablePowerOutlet `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * description `string`
  * device **required** `integer`
  * feed_leg `string` (values: A, B, C): Phase (for three-phase feeds)
  * id `integer`
  * name **required** `string`
  * power_port `integer`
  * type `string` (values: iec-60320-c5, iec-60320-c7, iec-60320-c13, iec-60320-c15, iec-60320-c19, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15r, nema-5-15r, nema-5-20r, nema-5-30r, nema-5-50r, nema-6-15r, nema-6-20r, nema-6-30r, nema-6-50r, nema-10-30r, nema-10-50r, nema-14-20r, nema-14-30r, nema-14-50r, nema-14-60r, nema-l1-15r, nema-l5-15r, nema-l5-20r, nema-l5-30r, nema-l5-50r, nema-l6-15r, nema-l6-20r, nema-l6-30r, nema-l6-50r, nema-l10-30r, nema-l14-20r, nema-l14-30r, nema-l14-50r, nema-l14-60r, nema-l21-20r, nema-l21-30r, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ita-e, ita-f, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o, hdot-cx): Physical port type

### WritablePowerOutletTemplate
* WritablePowerOutletTemplate `object`
  * device_type **required** `integer`
  * feed_leg `string` (values: A, B, C): Phase (for three-phase feeds)
  * id `integer`
  * name **required** `string`
  * power_port `integer`
  * type `string` (values: iec-60320-c5, iec-60320-c7, iec-60320-c13, iec-60320-c15, iec-60320-c19, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15r, nema-5-15r, nema-5-20r, nema-5-30r, nema-5-50r, nema-6-15r, nema-6-20r, nema-6-30r, nema-6-50r, nema-10-30r, nema-10-50r, nema-14-20r, nema-14-30r, nema-14-50r, nema-14-60r, nema-l1-15r, nema-l5-15r, nema-l5-20r, nema-l5-30r, nema-l5-50r, nema-l6-15r, nema-l6-20r, nema-l6-30r, nema-l6-50r, nema-l10-30r, nema-l14-20r, nema-l14-30r, nema-l14-50r, nema-l14-60r, nema-l21-20r, nema-l21-30r, CS6360C, CS6364C, CS8164C, CS8264C, CS8364C, CS8464C, ita-e, ita-f, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o, hdot-cx)

### WritablePowerPanel
* WritablePowerPanel `object`
  * id `integer`
  * name **required** `string`
  * powerfeed_count `integer`
  * rack_group `integer`
  * site **required** `integer`

### WritablePowerPort
* WritablePowerPort `object`
  * tags `array`
    * items `string`
  * allocated_draw `integer`: Allocated power draw (watts)
  * cable [NestedCable](#nestedcable)
  * connected_endpoint `object`: 
  * connected_endpoint_type `string`
  * connection_status `boolean` (values: false, true)
  * description `string`
  * device **required** `integer`
  * id `integer`
  * maximum_draw `integer`: Maximum power draw (watts)
  * name **required** `string`
  * type `string` (values: iec-60320-c6, iec-60320-c8, iec-60320-c14, iec-60320-c16, iec-60320-c20, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15p, nema-5-15p, nema-5-20p, nema-5-30p, nema-5-50p, nema-6-15p, nema-6-20p, nema-6-30p, nema-6-50p, nema-10-30p, nema-10-50p, nema-14-20p, nema-14-30p, nema-14-50p, nema-14-60p, nema-l1-15p, nema-l5-15p, nema-l5-20p, nema-l5-30p, nema-l5-50p, nema-l6-15p, nema-l6-20p, nema-l6-30p, nema-l6-50p, nema-l10-30p, nema-l14-20p, nema-l14-30p, nema-l14-50p, nema-l14-60p, nema-l21-20p, nema-l21-30p, cs6361c, cs6365c, cs8165c, cs8265c, cs8365c, cs8465c, ita-e, ita-f, ita-ef, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o): Physical port type

### WritablePowerPortTemplate
* WritablePowerPortTemplate `object`
  * allocated_draw `integer`: Allocated power draw (watts)
  * device_type **required** `integer`
  * id `integer`
  * maximum_draw `integer`: Maximum power draw (watts)
  * name **required** `string`
  * type `string` (values: iec-60320-c6, iec-60320-c8, iec-60320-c14, iec-60320-c16, iec-60320-c20, iec-60309-p-n-e-4h, iec-60309-p-n-e-6h, iec-60309-p-n-e-9h, iec-60309-2p-e-4h, iec-60309-2p-e-6h, iec-60309-2p-e-9h, iec-60309-3p-e-4h, iec-60309-3p-e-6h, iec-60309-3p-e-9h, iec-60309-3p-n-e-4h, iec-60309-3p-n-e-6h, iec-60309-3p-n-e-9h, nema-1-15p, nema-5-15p, nema-5-20p, nema-5-30p, nema-5-50p, nema-6-15p, nema-6-20p, nema-6-30p, nema-6-50p, nema-10-30p, nema-10-50p, nema-14-20p, nema-14-30p, nema-14-50p, nema-14-60p, nema-l1-15p, nema-l5-15p, nema-l5-20p, nema-l5-30p, nema-l5-50p, nema-l6-15p, nema-l6-20p, nema-l6-30p, nema-l6-50p, nema-l10-30p, nema-l14-20p, nema-l14-30p, nema-l14-50p, nema-l14-60p, nema-l21-20p, nema-l21-30p, cs6361c, cs6365c, cs8165c, cs8265c, cs8365c, cs8465c, ita-e, ita-f, ita-ef, ita-g, ita-h, ita-i, ita-j, ita-k, ita-l, ita-m, ita-n, ita-o)

### WritablePrefix
* WritablePrefix `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * family `string`
  * id `integer`
  * is_pool `boolean`: All IP addresses within this prefix are considered usable
  * last_updated `string`
  * prefix **required** `string`: IPv4 or IPv6 network with mask
  * role `integer`: The primary function of this prefix
  * site `integer`
  * status `string` (values: container, active, reserved, deprecated): Operational status of this prefix
  * tenant `integer`
  * vlan `integer`
  * vrf `integer`

### WritableRack
* WritableRack `object`
  * tags `array`
    * items `string`
  * asset_tag `string`: A unique tag used to identify this rack
  * comments `string`
  * created `string`
  * custom_fields `object`
  * desc_units `boolean`: Units are numbered top-to-bottom
  * device_count `integer`
  * display_name `string`
  * facility_id `string`: Locally-assigned identifier
  * group `integer`: Assigned group
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * outer_depth `integer`: Outer dimension of rack (depth)
  * outer_unit `string` (values: mm, in)
  * outer_width `integer`: Outer dimension of rack (width)
  * powerfeed_count `integer`
  * role `integer`: Functional role
  * serial `string`
  * site **required** `integer`
  * status `string` (values: reserved, available, planned, active, deprecated)
  * tenant `integer`
  * type `string` (values: 2-post-frame, 4-post-frame, 4-post-cabinet, wall-frame, wall-cabinet)
  * u_height `integer`: Height in rack units
  * width `integer` (values: 10, 19, 21, 23): Rail-to-rail width

### WritableRackGroup
* WritableRackGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent `integer`
  * rack_count `integer`
  * site **required** `integer`
  * slug **required** `string`

### WritableRackReservation
* WritableRackReservation `object`
  * created `string`
  * description **required** `string`
  * id `integer`
  * rack **required** `integer`
  * tenant `integer`
  * units **required** `array`
    * items `integer`
  * user **required** `integer`

### WritableRearPort
* WritableRearPort `object`
  * tags `array`
    * items `string`
  * cable [NestedCable](#nestedcable)
  * description `string`
  * device **required** `integer`
  * id `integer`
  * name **required** `string`
  * positions `integer`
  * type **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### WritableRearPortTemplate
* WritableRearPortTemplate `object`
  * device_type **required** `integer`
  * id `integer`
  * name **required** `string`
  * positions `integer`
  * type **required** `string` (values: 8p8c, 110-punch, bnc, mrj21, fc, lc, lc-apc, lsh, lsh-apc, mpo, mtrj, sc, sc-apc, st)

### WritableRegion
* WritableRegion `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent `integer`
  * site_count `integer`
  * slug **required** `string`

### WritableSecret
* WritableSecret `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * device **required** `integer`
  * hash `string`
  * id `integer`
  * last_updated `string`
  * name `string`
  * plaintext **required** `string`
  * role **required** `integer`

### WritableService
* WritableService `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device `integer`
  * id `integer`
  * ipaddresses `array`
    * items `integer`
  * last_updated `string`
  * name **required** `string`
  * port **required** `integer`
  * protocol **required** `string` (values: tcp, udp)
  * virtual_machine `integer`

### WritableSite
* WritableSite `object`
  * tags `array`
    * items `string`
  * asn `integer`: 32-bit autonomous system number
  * circuit_count `integer`
  * comments `string`
  * contact_email `string`
  * contact_name `string`
  * contact_phone `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device_count `integer`
  * facility `string`: Local facility ID or description
  * id `integer`
  * last_updated `string`
  * latitude `string`: GPS coordinate (latitude)
  * longitude `string`: GPS coordinate (longitude)
  * name **required** `string`
  * physical_address `string`
  * prefix_count `integer`
  * rack_count `integer`
  * region `integer`
  * shipping_address `string`
  * slug **required** `string`
  * status `string` (values: active, planned, retired)
  * tenant `integer`
  * time_zone `string`
  * virtualmachine_count `integer`
  * vlan_count `integer`

### WritableTenant
* WritableTenant `object`
  * tags `array`
    * items `string`
  * circuit_count `integer`
  * cluster_count `integer`
  * comments `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * device_count `integer`
  * group `integer`
  * id `integer`
  * ipaddress_count `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * rack_count `integer`
  * site_count `integer`
  * slug **required** `string`
  * virtualmachine_count `integer`
  * vlan_count `integer`
  * vrf_count `integer`

### WritableTenantGroup
* WritableTenantGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * parent `integer`
  * slug **required** `string`
  * tenant_count `integer`

### WritableVLAN
* WritableVLAN `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * display_name `string`
  * group `integer`
  * id `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * role `integer`
  * site `integer`
  * status `string` (values: active, reserved, deprecated)
  * tenant `integer`
  * vid **required** `integer`

### WritableVLANGroup
* WritableVLANGroup `object`
  * description `string`
  * id `integer`
  * name **required** `string`
  * site `integer`
  * slug **required** `string`
  * vlan_count `integer`

### WritableVRF
* WritableVRF `object`
  * tags `array`
    * items `string`
  * created `string`
  * custom_fields `object`
  * description `string`
  * display_name `string`
  * enforce_unique `boolean`: Prevent duplicate prefixes/IP addresses within this VRF
  * id `integer`
  * ipaddress_count `integer`
  * last_updated `string`
  * name **required** `string`
  * prefix_count `integer`
  * rd `string`: Unique route distinguisher (as defined in RFC 4364)
  * tenant `integer`

### WritableVirtualChassis
* WritableVirtualChassis `object`
  * tags `array`
    * items `string`
  * domain `string`
  * id `integer`
  * master **required** `integer`
  * member_count `integer`

### WritableVirtualMachineInterface
* WritableVirtualMachineInterface `object`
  * tags `array`
    * items `string`
  * description `string`
  * enabled `boolean`
  * id `integer`
  * mac_address `string`
  * mode `string` (values: access, tagged, tagged-all)
  * mtu `integer`
  * name **required** `string`
  * tagged_vlans `array`
    * items `integer`
  * type **required** `string` (values: virtual, lag, 100base-tx, 1000base-t, 2.5gbase-t, 5gbase-t, 10gbase-t, 10gbase-cx4, 1000base-x-gbic, 1000base-x-sfp, 10gbase-x-sfpp, 10gbase-x-xfp, 10gbase-x-xenpak, 10gbase-x-x2, 25gbase-x-sfp28, 40gbase-x-qsfpp, 50gbase-x-sfp28, 100gbase-x-cfp, 100gbase-x-cfp2, 200gbase-x-cfp2, 100gbase-x-cfp4, 100gbase-x-cpak, 100gbase-x-qsfp28, 200gbase-x-qsfp56, 400gbase-x-qsfpdd, 400gbase-x-osfp, ieee802.11a, ieee802.11g, ieee802.11n, ieee802.11ac, ieee802.11ad, ieee802.11ax, gsm, cdma, lte, sonet-oc3, sonet-oc12, sonet-oc48, sonet-oc192, sonet-oc768, sonet-oc1920, sonet-oc3840, 1gfc-sfp, 2gfc-sfp, 4gfc-sfp, 8gfc-sfpp, 16gfc-sfpp, 32gfc-sfp28, 128gfc-sfp28, infiniband-sdr, infiniband-ddr, infiniband-qdr, infiniband-fdr10, infiniband-fdr, infiniband-edr, infiniband-hdr, infiniband-ndr, infiniband-xdr, t1, e1, t3, e3, cisco-stackwise, cisco-stackwise-plus, cisco-flexstack, cisco-flexstack-plus, juniper-vcp, extreme-summitstack, extreme-summitstack-128, extreme-summitstack-256, extreme-summitstack-512, other)
  * untagged_vlan `integer`
  * virtual_machine `integer`

### WritableVirtualMachineWithConfigContext
* WritableVirtualMachineWithConfigContext `object`
  * tags `array`
    * items `string`
  * cluster **required** `integer`
  * comments `string`
  * config_context `object`
  * created `string`
  * custom_fields `object`
  * disk `integer`
  * id `integer`
  * last_updated `string`
  * local_context_data `string`
  * memory `integer`
  * name **required** `string`
  * platform `integer`
  * primary_ip `string`
  * primary_ip4 `integer`
  * primary_ip6 `integer`
  * role `integer`
  * site `string`
  * status `string` (values: offline, active, planned, staged, failed, decommissioning)
  * tenant `integer`
  * vcpus `integer`


