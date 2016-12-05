var datafire = require('datafire');

class KalturaOperation extends datafire.RESTIntegration.RESTOperation {
  call(args, cb) {
    args.format = 1;
    super.call(args, (err, resp) => {
      var err = resp.code && resp.message;
      if (err) return cb(new Error(resp.code + ': ' + resp.message));
      return cb(null, resp);
    });
  }
}

class KalturaIntegration extends datafire.RESTIntegration {
  static get spec() {
    return require('./openapi');
  }
  initialize(cb) {
    super.initialize(err => {
      if (err) return cb (err);
      if (!this.account) return cb();
      this.get('/service/session/action/start').call({
        secret: this.account.secret,
        partnerId: this.account.partnerId,
      }, (err, resp) => {
        if (err) return cb(err);
        this.account.ks = resp;
        cb();
      })
    })
  }

  makeOperation(name, opSpec) {
    return new KalturaOperation(opSpec, this);
  }
}

module.exports = KalturaIntegration;
