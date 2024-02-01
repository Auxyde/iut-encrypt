'use strict';


function sha1(str) {
    return require('crypto').createHash('sha1').update(str).digest('hex');
}

function compareSha1(password, hash){
    return sha1(password) === hash
}

module.exports = {
    sha1,
    compareSha1
}