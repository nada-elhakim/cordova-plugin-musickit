var exec = require('cordova/exec');

function Musickit() {}

Musickit.prototype.init = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "init", []);
};

Musickit.prototype.requestAuthorizationForAndroid = function (developerToken, authorizationMessage, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "authorize", [developerToken, authorizationMessage]);
};

Musickit.prototype.requestAuthorizationForIOS = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "requestAuthorization", []);
};

Musickit.prototype.requestUserToken = function(developerToken, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "requestUserToken", [developerToken]);
};

Musickit.prototype.getStatus = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "getStatus", []);
};

Musickit.prototype.play = function (trackId, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "play", [trackId]);
};

Musickit.prototype.pause = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "pause", []);
};

Musickit.prototype.resume = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "resume", []);
};

Musickit.prototype.stop = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "stop", []);
};

Musickit.prototype.seek = function (seconds, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CordovaMusickit", "seek", [seconds]);
};

module.exports = new Musickit();
