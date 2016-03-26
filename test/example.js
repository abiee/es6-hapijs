var Code = require('code');
var Lab = require('lab');
var hello = require('../app/hello');
var mockServer = require('./mocks/server');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var before = lab.before;
var after = lab.after;
var it = lab.it;
var expect = Code.expect;

var server;

before((done) => {
  'use strict';
  mockServer(function(obj) {
    server = obj;
    server.register([{
      register: hello
    }], done);
  });
});

after((done) => {
  'use strict';
  server.stop(done);
});

describe('Example hello api', function() {
  'use strict';

  it('says hello world', function(done) {
    var options = {
      method: 'GET',
      url: '/hello/world'
    };

    server.inject(options, (resp) => {
      expect(resp.statusCode).to.equal(200);
      expect(resp.request.response.source).to.deep.equal({hello: 'world'});

      done();
    });
  });

  it('says hello coder', function(done) {
    var options = {
      method: 'GET',
      url: '/hello/coder'
    };

    server.inject(options, (resp) => {
      expect(resp.statusCode).to.equal(200);
      expect(resp.request.response.source).to.deep.equal({hello: 'coder'});

      done();
    });
  });
});
