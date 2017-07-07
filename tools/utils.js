var config = require('config');
var cfenv = require('cfenv');
var appEnv;

module.exports = {
  getVcapServices: getVcapServices,
  getAppEnv: getAppEnv,
  getEnvVariable: getEnvVariable
}

//initialize the application configuration, to handle the bluemix and local config.
function init(){
  let vcap = {};
  vcap.services = config.VCAP_SERVICES;
  vcap.name = config.processname;
  vcap.port = process.env.PORT || (config.server && config.server.port);
  //vcap.protocol = config.server.protocol;
  //vcap.bind = config.server.host;
  vcap.env = process.env.NODE_ENV || config.env;

  //API doc says that if the environment is local then the vcap in options is used.
  appEnv = cfenv.getAppEnv(vcap);
  console.log("application environment is ");
  console.log(appEnv);

  if (!appEnv.env){
    appEnv.env = "development";
  }
}

//provide the application environment properties.
function getAppEnv(){
  //If not initialized then do that.
  if (!appEnv){
    init();
  }
  console.log("application environment variable");
  console.log(appEnv);
  return appEnv;
}
/**
 Returns VCAP_SERVICES from the environment variables if available or from the local config file
 **/
function getVcapServices(serviceName){

  let service;
  try{
    if (!appEnv){
      init();
    }

    if((typeof serviceName !== 'string') || (serviceName.trim().length <= 0)){
      console.log('getVcapServices serviceName is invalid');
      return null;
    }

    return appEnv.services[serviceName][0];
  }
  catch(error){
    console.log(`getVcapServices Could not get VCAP_SERVICES - ${error}`);
    return null;
  }

}

//get the user-defined environment variable.
function getEnvVariable(params){
  let service;
  try{

    return process.env[params] || config[params];
  }
  catch(error){
    console.log(`getEnvVariable Could not get environment variable ${params} error- ${error}`);
    return null;
  }
}
