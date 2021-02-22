
//This file isn't transpiled so must use CommonJS andES5

//Registre babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha doesn't understand.
require.extensions['.css']=function(){};