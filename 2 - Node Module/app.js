// "underscore": "^1.13.2" // major.minor.patch


// console.log(module);

let _ = require('underscore');

const logger = require('./logger')

logger.log('Hello World')
console.log(logger.name);

function Stooge(name) {
    this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge("Moe"));