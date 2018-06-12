let expect = require('chai').expect;
let twitter = require('../integrations/generated/twitter');

describe("Twitter", function() {
  it("should have custom security", function() {
    expect(twitter.security).to.deep.equal({
	  twitter: {
		fields: {
		  consumer_key: '',
		  consumer_secret: '',
		  token: '',
		  token_secret: '',
		}
	  }
    })
  })
})
