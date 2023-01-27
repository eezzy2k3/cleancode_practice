const User = require("./models/user");
const awilix = require('awilix');
const userFunction = require("./controller/user");
const entity = require("./service/dev");

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });
  
  function setup() {
    container.register({
      userfunction: awilix.asClass(userFunction),
  
      entity: awilix.asClass(entity),
  
      User: awilix.asValue(User),
    });
  }
  
  module.exports = {
    container,
    setup,
  };