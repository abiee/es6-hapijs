import Hapi from 'hapi';
import good from 'good';
import api from './api';

var server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
  host: '0.0.0.0'
});

server.register([{
  register: good,
  options: {
    reporters: [{
      reporter: 'good-console',
      events: {log: '*', response: '*', error: '*'}
    }]
  }
}, {
  register: api
}], function(err) {
  'use strict';
  if (err) {
    console.error(err);
  } else {
    server.start(function() {
      console.log('Server started at: ' + server.info.uri); // jshint ignore:line
    });
  }
});
