var exec = require('cordova/exec');
var cordova = require('cordova');

function Musickit() {

}

Musickit.prototype.authorize = function (developerToken, authorizationMessage, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Musickit', 'authorize', [developerToken, authorizationMessage]);
};

module.exports = new Musickit();
