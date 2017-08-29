# @datafire/solarvps

Client library for Solar VPS

## Installation and Usage
```bash
npm install --save datafire @datafire/solarvps
```

```js
let datafire = require('datafire');
let solarvps = require('@datafire/solarvps').create({
  apiKey: "",
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


### dns.domain.get
Shows all your records for a specific domain. You can try example.com below.


```js
solarvps.dns.domain.get({
  "domain": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name you want to get records for

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

#### Parameters
* domain (string) **required** - Domain you want to add records for
* name (string) **required** - Fully qualified DNS name
* type (string) **required** - Type of DNS record
* content (string) **required** - Content for DNS record
* ttl (string) **required** - Time To Live for DNS record
* prio (string) **required** - Priority of DNS record

### dns.domain.delete.post
Shows all your records for a specific domain. You can try example.com below.


```js
solarvps.dns.domain.delete.post({
  "domain": "",
  "id": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name you want to get records for
* id (string) **required** - Id of the DNS Record

### dns.domain.update.post
You can try example.com below.


```js
solarvps.dns.domain.update.post({
  "domain": "",
  "id": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain name to add record under
* id (string) **required** - Id of DNS record
* name (string) - Fully qualified name for the DNS record
* type (string) - Type for DNS record
* content (string) - Content for the DNS Record
* ttl (string) - Time To Live for DNS record
* prio (string) - Priority of the DNS record

### domains.get
Shows all your domains


```js
solarvps.domains.get(null, context)
```


### domains.add.post
Adds domain to SolarVPS Distributed DNS


```js
solarvps.domains.add.post({
  "domain": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain to add to SolarVPS Distributed DNS

### domains.delete.post
Deletes domain from SolarVPS Distributed DNS


```js
solarvps.domains.delete.post({
  "domain": ""
}, context)
```

#### Parameters
* domain (string) **required** - Domain to delete from SolarVPS Distributed DNS

### key.generate.get
API Key is regenerated if it already exists


```js
solarvps.key.generate.get({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - Email address used to login to SolarSystem
* password (string) **required** - Password used to login to SolarSystem

### key.get.get
Gets the API Key for user


```js
solarvps.key.get.get({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - Email address used to login to SolarSystem
* password (string) **required** - Password used to login to SolarSystem

### pods.get
Shows all your pods


```js
solarvps.pods.get(null, context)
```


### pods.podId.get
Shows details of a specific pod. Enter 1 below to see an example


```js
solarvps.pods.podId.get({
  "podId": 0
}, context)
```

#### Parameters
* podId (number) **required** - Id of the pod you want to perform actions on

### pods.podId.ping.get
Returns the ping response from your server.


```js
solarvps.pods.podId.ping.get({
  "podId": 0
}, context)
```

#### Parameters
* podId (number) **required** - Id of the pod you want to ping check

### pods.podId.action.get
Allowed actions are reboot, shutdown, boot


```js
solarvps.pods.podId.action.get({
  "podId": 0,
  "action": ""
}, context)
```

#### Parameters
* podId (number) **required** - Id of the pod you want to perform actions on
* action (string) **required** - Action to perform on selected pod

### solarray.get
Shows all your monitors


```js
solarvps.solarray.get(null, context)
```


### solarray.critical.get
Shows all your critical notifications


```js
solarvps.solarray.critical.get(null, context)
```


### tickets.get
Shows all your tickets


```js
solarvps.tickets.get(null, context)
```


### tickets.department.add.post
Available departments are support, billing, sales


```js
solarvps.tickets.department.add.post({
  "department": "",
  "subject": "",
  "contents": ""
}, context)
```

#### Parameters
* department (string) **required** - Department you want to open a ticket with
* subject (string) **required** - Subject of the ticket you are opening
* contents (string) **required** - Message reply being sent

### tickets.ticketId.get
Shows all information of a specific ticketId


```js
solarvps.tickets.ticketId.get({
  "ticketId": 0
}, context)
```

#### Parameters
* ticketId (number) **required** - TicketId you want to see

### tickets.ticketid.update.post
Post a reply to a ticket


```js
solarvps.tickets.ticketid.update.post({
  "ticketid": 0,
  "contents": ""
}, context)
```

#### Parameters
* ticketid (number) **required** - TicketId of the ticket you want to post an update to
* contents (string) **required** - Message reply being sent

