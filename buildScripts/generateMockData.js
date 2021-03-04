
/* This script generate mock data for local development. This way you dont have 
to point to an actual API, but you can enjoy realistic,
 but randomized data, and rapid page load due to local, and static data*/

 /* eslint-disable*/
 import jsf from 'json-schema-faker';
 import {schema} from './mockDataSchema';
 import fs from 'fs';
 import chalk from 'chalk';

 const json = JSON.stringify(jsf(schema));
 fs.writeFile("./src/api/db.json",json,function(err){
     if(err){console.log(err)} else{
         console.log(chalk.red('mock data generated'))

     }
 });