let datafire = require('datafire');
let mongo = require('mongodb');

let mongodb = module.exports = new datafire.Integration({
  title: "MongoDB",
  description: "Interact with MongoDB",
});

const FIND_INPUTS =  [{
  title: 'collection',
  type: 'string',
}, {
  title: 'query',
  type: 'object',
}, {
  title: 'projection',
  type: 'object',
  default: {},
}];
const OUTPUT_SCHEMA = {type: 'object'};

let mongoHandler = (input, context, run) => {
  function getCollectionAndRun(db, closeOnFinish) {
    let collection = db.collection(input.collection);
    return new Promise((resolve, reject) => {
      run(collection, (err, data) => {
        if (closeOnFinish) db.close();
        if (err) return reject(err);

        let result = data;
        if (data.toJSON) result = data.toJSON();
        else if (data.toArray) result = data.toArray();
        else if (data.result) result = data.result;
        resolve(result);
      })
    });
  }

  if (context.accounts.mongodb.database) {
    return getCollectionAndRun(context.accounts.mongodb.database, false);
  }

  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(context.accounts.mongodb.url, (err, db) => {
      if (err) return reject(err);
      getCollectionAndRun(db, true).then(resolve, reject);
    })
  })
}

mongodb.addAction('findOne', new datafire.Action({
  title: 'findOne',
  description: "Find a single document in the database",
  inputs: FIND_INPUTS,
  outputSchema: OUTPUT_SCHEMA,
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.findOne(input.query, input.projection, cb)
    })
  }
}));

mongodb.addAction('find', new datafire.Action({
  title: 'find',
  description: "Find multiple documents in the database",
  inputs: FIND_INPUTS,
  outputSchema: {
    type: 'array',
    items: OUTPUT_SCHEMA,
  },
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.find(input.query, input.projection, cb);
    })
  },
}));

mongodb.addAction('insertOne', new datafire.Action({
  title: 'insertOne',
  description: "Insert a document into the database",
  inputs: [{
    title: 'collection',
    type: 'string',
  }, {
    title: 'document',
    type: 'object',
  }],
  outputSchema: OUTPUT_SCHEMA,
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.insertOne(input.document, cb);
    })
  },
}));

mongodb.addAction('insertMany', new datafire.Action({
  title: 'insertMany',
  description: "Insert multiple documents into the database",
  inputs: [{
    title: 'collection',
    type: 'string',
  }, {
    title: 'documents',
    type: 'array',
    items: {type: 'object'},
  }],
  outputSchema: OUTPUT_SCHEMA,
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.insertMany(input.documents, cb);
    })
  },
}));

mongodb.addAction('update', new datafire.Action({
  title: 'update',
  description: "Update all matching documents in the database",
  inputs: [{
    title: 'collection',
    type: 'string',
  }, {
    title: 'query',
    type: 'object',
  }, {
    title: 'update',
    type: 'object',
  }],
  outputSchema: OUTPUT_SCHEMA,
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.update(input.query, input.update, cb);
    })
  }
}));

mongodb.addAction('remove', new datafire.Action({
  title: 'remove',
  description: "Remove all matching documents in the database",
  inputs: [{
    title: 'collection',
    type: 'string',
  }, {
    title: 'query',
    type: 'object',
  }, {
    title: 'justOne',
    type: 'boolean',
    default: false,
  }],
  outputSchema: OUTPUT_SCHEMA,
  handler: (input, context) => {
    return mongoHandler(input, context, (collection, cb) => {
      collection.remove(input.query, {justOne: input.justOne}, cb);
    })
  }
}));
