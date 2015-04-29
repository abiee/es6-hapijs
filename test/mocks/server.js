import Hapi from 'hapi';

var server = new Hapi.Server();
server.connection();

export default function(done) {
  'use strict';
  server.start(() => done(server));
}
