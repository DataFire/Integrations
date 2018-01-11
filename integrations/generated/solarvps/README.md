# @datafire/solarvps

Client library for Solar VPS

## Installation and Usage
```bash
npm install --save @datafire/solarvps
```
```js
let solarvps = require('@datafire/solarvps').create({
  apiKey: ""
});

solarvps.contacts.get({}).then(data => {
  console.log(data);
})
```

## Description

This is the Solar VPS Public API. You can find more at http://www.solarvps.com

## Actions

### contacts.get
Shows all contacts under the client account.


```js
solarvps.contacts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### dns.domain.get
Shows all your records for a specific domain. You can try example.com below.


```js
solarvps.dns.domain.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name you want to get records for

#### Output
*Output schema unknown*

### dns.domain.add.post
You can try example.com below. Types allowed are: A CNAME NS TXT MX SRV SPF


```js
solarvps.dns.domain.add.post({
  "domain": "",
  "name": "",
  "type": "",
  "content": "",
  "ttl": "",
  "prio": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain you want to add records for
  * name **required** `string`: Fully qualified DNS name
  * type **required** `string`: Type of DNS record
  * content **required** `string`: Content for DNS record
  * ttl **required** `string`: Time To Live for DNS record
  * prio **required** `string`: Priority of DNS record

#### Output
*Output schema unknown*

### dns.domain.delete.post
Shows all your records for a specific domain. You can try example.com below.


```js
solarvps.dns.domain.delete.post({
  "domain": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name you want to get records for
  * id **required** `string`: Id of the DNS Record

#### Output
*Output schema unknown*

### dns.domain.update.post
You can try example.com below.


```js
solarvps.dns.domain.update.post({
  "domain": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name to add record under
  * id **required** `string`: Id of DNS record
  * name `string`: Fully qualified name for the DNS record
  * type `string`: Type for DNS record
  * content `string`: Content for the DNS Record
  * ttl `string`: Time To Live for DNS record
  * prio `string`: Priority of the DNS record

#### Output
*Output schema unknown*

### domains.get
Shows all your domains


```js
solarvps.domains.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### domains.add.post
Adds domain to SolarVPS Distributed DNS


```js
solarvps.domains.add.post({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain to add to SolarVPS Distributed DNS

#### Output
*Output schema unknown*

### domains.delete.post
Deletes domain from SolarVPS Distributed DNS


```js
solarvps.domains.delete.post({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain to delete from SolarVPS Distributed DNS

#### Output
*Output schema unknown*

### key.generate.get
API Key is regenerated if it already exists


```js
solarvps.key.generate.get({
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Email address used to login to SolarSystem
  * password **required** `string`: Password used to login to SolarSystem

#### Output
*Output schema unknown*

### key.get.get
Gets the API Key for user


```js
solarvps.key.get.get({
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Email address used to login to SolarSystem
  * password **required** `string`: Password used to login to SolarSystem

#### Output
*Output schema unknown*

### pods.get
Shows all your pods


```js
solarvps.pods.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### pods.podId.get
Shows details of a specific pod. Enter 1 below to see an example


```js
solarvps.pods.podId.get({
  "podId": 0
}, context)
```

#### Input
* input `object`
  * podId **required** `number`: Id of the pod you want to perform actions on

#### Output
*Output schema unknown*

### pods.podId.ping.get
Returns the ping response from your server.


```js
solarvps.pods.podId.ping.get({
  "podId": 0
}, context)
```

#### Input
* input `object`
  * podId **required** `number`: Id of the pod you want to ping check

#### Output
*Output schema unknown*

### pods.podId.action.get
Allowed actions are reboot, shutdown, boot


```js
solarvps.pods.podId.action.get({
  "podId": 0,
  "action": ""
}, context)
```

#### Input
* input `object`
  * podId **required** `number`: Id of the pod you want to perform actions on
  * action **required** `string`: Action to perform on selected pod

#### Output
*Output schema unknown*

### solarray.get
Shows all your monitors


```js
solarvps.solarray.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### solarray.critical.get
Shows all your critical notifications


```js
solarvps.solarray.critical.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### tickets.get
Shows all your tickets


```js
solarvps.tickets.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### tickets.department.add.post
Available departments are support, billing, sales


```js
solarvps.tickets.department.add.post({
  "department": "",
  "subject": "",
  "contents": ""
}, context)
```

#### Input
* input `object`
  * department **required** `string`: Department you want to open a ticket with
  * subject **required** `string`: Subject of the ticket you are opening
  * contents **required** `string`: Message reply being sent

#### Output
*Output schema unknown*

### tickets.ticketId.get
Shows all information of a specific ticketId


```js
solarvps.tickets.ticketId.get({
  "ticketId": 0
}, context)
```

#### Input
* input `object`
  * ticketId **required** `number`: TicketId you want to see

#### Output
*Output schema unknown*

### tickets.ticketid.update.post
Post a reply to a ticket


```js
solarvps.tickets.ticketid.update.post({
  "ticketid": 0,
  "contents": ""
}, context)
```

#### Input
* input `object`
  * ticketid **required** `number`: TicketId of the ticket you want to post an update to
  * contents **required** `string`: Message reply being sent

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
