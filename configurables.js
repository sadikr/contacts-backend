/**
 * @class Configurables
 * @description Contains various application specific constants
 */
class Configurables {
  /**
   * @constructor
   * @return {[type]} [description]
   */
  constructor() {
    /**
     * mongodb protocol
     * @type {String} protocol - the protocol
     */
    this.protocol = 'mongodb://';
    /**
     * host name
     * @type {String} hostName - the host name
     */
    this.hostName = 'localhost';
    /**
     * database name
     * @type {String} database - the database name
     */
    this.database = 'directory'
    /**
     * port number
     * @type {Number} port - mongodb port number
     */
    this.port = 27071;
    /**
     * mongodb specific options
     * @type {Object} options - the options
     */
    this.options = {};
    /**
     * server port number
     * @type {Number} - the restify server port number
     */
    this.serverPort = 9000;
    /**
     * [serverInfo description]
     * @type {Object}
     */
    this.serverInfo = {
      name : 'contacts-backend',
      version : '1.0.0',
      url : 'localhost' // hard coded for a while
    };
  }
}
/**
 * export singleton class
 */
export default new Configurables();