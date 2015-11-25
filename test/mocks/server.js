var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection();

module.exports = function(done) {
  'use strict';
  server.start(() => done(server));
}
