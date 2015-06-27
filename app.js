var settings = require('./config/settings');
(function () {
  'use strict';
  var express = require('express');
  var app = express();

  // CONFIGURE THE APP & THE DATA MODELS
  require('./config/app.cfg')(app);
  require('./config/models.cfg')();
  require('./config/routes.cfg')(app);
  //require('./config/cache.cfg').populate();

  require('./config/sabre.cfg');

  // START THE SERVER
  console.log('STARTING THE SABRE HACK SERVER');
  console.log('-------------------------');
  console.log('Environment:' + settings.values.env);
  console.log('URL:' + settings.values.config[settings.values.env].server);
  console.log('Port:' + settings.values.config[settings.values.env].port);
  app.listen(settings.values.config[settings.values.env].port);
  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

})();
