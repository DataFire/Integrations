let expect = require('chai').expect;
let mongomock = require('mongo-mock');
mongomock.max_delay = 0;

let datafire = require('datafire');
let mongo = require('../integrations/manual/mongodb').actions;
let context = new datafire.Context({
  accounts: {
    mongodb: {
      url: 'mongodb://localhost:27017/myproject',
      mock: true,
    }
  }
});

describe('MongoDB Integration', () => {
  it('should insert', () => {
    let pets = [{
      name: 'Lucy',
      type: 'dog',
    }, {
      name: 'Blaney',
      type: 'dog',
    }, {
      name: 'Grumpy',
      type: 'cat',
    }]

    return mongo.insertMany({
      collection: 'Pet',
      documents: pets,
    }, context).then(data => {
      expect(data.ok).to.equal(1);
      expect(data.n).to.equal(pets.length);
    });
  })

  it('should find dogs', () => {
    return mongo.find({
      collection: 'Pet',
      query: {type: 'dog'},
    }, context).then(data => {
      expect(data.length).to.equal(2);
      expect(data[0].name).to.equal('Lucy');
      expect(data[1].name).to.equal('Blaney');
    })
  });

  it('should find Grumpy', () => {
    return mongo.findOne({
      collection: 'Pet',
      query: {name: 'Grumpy'},
    }, context).then(data => {
      expect(data.name).to.equal('Grumpy');
      expect(data.type).to.equal('cat');
    })
  })

  it('should update Lucy', () => {
    return mongo.update({
      collection: 'Pet',
      query: {name: 'Lucy'},
      update: {$set: {age: 2}},
    }, context).then(data => {
      expect(data.n).to.equal(1);
    }).then(_ => {
      return mongo.findOne({
        collection: 'Pet',
        query: {name: 'Lucy'},
      }, context)
    }).then(data => {
      expect(data.name).to.equal("Lucy");
      expect(data.age).to.equal(2);
    });
  })

  it('should remove Grumpy', () => {
    return mongo.remove({
      collection: 'Pet',
      query: {name: "Grumpy"},
    }, context).then(data => {
      expect(data.n).to.equal(1);
    }).then(_ => {
      return mongo.find({
        collection: 'Pet',
        query: {name: 'Grumpy'},
      }, context);
    }).then(data => {
      expect(data.length).to.equal(0);
    })
  })
})
