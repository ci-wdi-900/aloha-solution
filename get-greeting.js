const db = require('./db.js');


const getGreeting = function(language) {
    const words = db[language.toLowerCase()];
    const result = words['greeting'];

    return result;
}


if (typeof getGreeting === 'undefined') {
    getGreeting = undefined;
}


module.exports = getGreeting;
