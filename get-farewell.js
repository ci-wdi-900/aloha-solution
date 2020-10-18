const db = require('./db.js');


const getFarewell = function(language) {
    const words = db[language.toLowerCase()];
    const result = words['farewell'];

    return result;
}


if (typeof getFarewell === 'undefined') {
    getFarewell = undefined;
}


module.exports = getFarewell;
