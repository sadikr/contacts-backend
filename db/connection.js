/**
 * Database connection module
 */

import config   from './../configurables';
import mongoose from 'mongoose';
import logger   from 'winston';

class Connection {

  constructor() {
    mongoose.connect(config.protocol + config.hostName + '/' + config.database);
    this.db = mongoose.connection;

    this.db.on('open', () => {
      logger.log('we are connected!');
    });
  
    this.db.on('error', (err) => {
      logger.error('There is some issue with connection ==>', err);
    });
  }
  
}

export default new Connection();
