var exec = require('cordova/exec');

function Musickit() {

}

Musickit.prototype.requestAuthorizationForAndroid = function (developerToken, authorizationMessage, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CordovaMusickit', 'authorize', [developerToken, authorizationMessage]);
};

Musickit.prototype.requestAuthorizationForIOS = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "requestAuthorization", []);
};

Musickit.prototype.requestUserToken = function(developerToken, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "requestUserToken", []);
};

Musickit.prototype.getStatus = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "getStatus", []);
};

module.exports = new Musickit();
