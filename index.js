/**
 * Entry point
 */

import restify from 'restify';
import logger  from 'winston';
import connect from './db/connection';
import config  from './configurables';
import routes  from './router';

class main {

  constructor() {
    this.server = restify.createServer(config.serverInfo);

    this.server.listen(config.serverPort, (err) => {
      if (err) {
        logger.error('There is some issues ==>', err);
      } else {
        logger.info('%s server is running at %s', this.server.name, this.server.url);  
      }
    });
  }

}

// instantiate the main class
const mainObject = new main();