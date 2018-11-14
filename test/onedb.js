const expect = require('chai').expect;
const datafire = require('datafire');
const OneDBServer = require('onedb-server').Server;
const OneDBClient = require('onedb-client').Client;
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const onedb = require('../integrations/manual/onedb');

const PORT = 3333;
const HOST = 'http://localhost:' + PORT;

let mongod = null;
let server = null;
let onedbClient = null;

describe("OneDB", () => {
  beforeEach(async function() {
    mongod = new MongoMemoryServer();
    const mongoURI = await mongod.getConnectionString();
    server = new OneDBServer({
      mongodb: mongoURI,
      host: HOST,
      jwtSecret: 'thisisnotasecret',
      rateLimit: {
        createUser: {
          windowMs: 1000,
          max: 1500,
          delayMs: 3 * 1000,
          delayAfter: 10,
        },
      }
    });
    await server.listen(PORT);
    const client = new OneDBClient({hosts: {primary: {location: HOST}}});
    const user = await client.createUser(client.hosts.primary, 'user1@example.com', 'password');
    onedbClient = onedb.create({
      core_host: HOST,
      host: HOST,
      username: 'user1@example.com',
      password: 'password',
    });
    const ns = {
      versions: [{
        version: '0',
        types: {
          message: {
            schema: {
              type: 'object',
              properties: {
                message: {type: 'string'},
                tags: {type: 'array', items: {type: 'string'}},
              }
            }
          },
        }
      }]
    }
    await client.create('core', 'namespace', 'messages', ns);
  });

  afterEach(async () => {
    await mongod.stop();
    await server.close();
  })

  it('should support get', async function() {
    const schema = await onedbClient.get({
      namespace: 'core',
      type: 'schema',
      id: 'namespace',
    });
    expect(schema.type).to.equal('object');
  });

  it('should support create', async function () {
    let id = await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!'},
    });
    expect(id).to.equal('foo');
  })

  it('should support list', async function () {
    this.timeout(5000);
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!'},
    });
    const midpoint = new Date().toISOString();
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'bar',
      item: {message: 'bar!'},
    });
    let list = await onedbClient.list({
      namespace: 'messages',
      type: 'message',
    });
    expect(list.items.length).to.equal(2);

    list = await onedbClient.list({
      namespace: 'messages',
      type: 'message',
      query: {
        created_before: midpoint,
      }
    });
    expect(list.items.length).to.equal(1);
    expect(list.items[0].$.id).to.equal('foo');

    list = await onedbClient.list({
      namespace: 'messages',
      type: 'message',
      query: {
        created_since: midpoint,
      }
    });
    expect(list.items.length).to.equal(1);
    expect(list.items[0].$.id).to.equal('bar');

    list = await onedbClient.list({
      namespace: 'messages',
      type: 'message',
      query: {
        'data.message': 'foo!',
      }
    });
    expect(list.items.length).to.equal(1);
    expect(list.items[0].$.id).to.equal('foo');
  })

  it('should support update', async function () {
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!'},
    });
    await onedbClient.update({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'FOO!'},
    });
    let item = await onedbClient.get({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
    });
    expect(item.message).to.equal('FOO!');
  })

  it('should support append', async function () {
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!', tags: ['foo']},
    });
    await onedbClient.append({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {tags: ['bar']},
    });
    let item = await onedbClient.get({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
    });
    expect(item.tags).to.deep.equal(['foo', 'bar']);
  })

  it('should support delete', async function () {
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!', tags: ['foo']},
    });
    await onedbClient.delete({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
    })
    try {
      let item = await onedbClient.get({
        namespace: 'messages',
        type: 'message',
        id: 'foo',
      });
      throw new Error("shouldn't reach here");
    } catch (e) {
      expect(e.message).to.equal("Action onedb/get failed: Item messages/message/foo not found")
    }
  })

  it('should support updateACL', async function () {
    await onedbClient.create({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      item: {message: 'foo!', tags: ['foo']},
    });
    await onedbClient.updateACL({
      namespace: 'messages',
      type: 'message',
      id: 'foo',
      acl: {allow: {read: []}},
    });
    try {
      let item = await onedbClient.get({
        namespace: 'messages',
        type: 'message',
        id: 'foo',
      });
      throw new Error("shouldn't reach here");
    } catch (e) {
      expect(e.message).to.equal("Action onedb/get failed: Item messages/message/foo not found")
    }
  })
});
