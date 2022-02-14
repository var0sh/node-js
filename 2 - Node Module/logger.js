let url = 'http://logger.io/logger';
let name = 'Furkan Akçatepe'

function log(message) {
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}

// Tek tek eklemek için(iki farklı kullanımı var);
module.exports.log = log;
exports.log = log;


// Toplu eklemek için;
module.exports = {
    log : log,
    name : name
}