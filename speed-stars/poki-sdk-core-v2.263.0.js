window.PokiSDK = {
init: function() {
return Promise.resolve(true);
},
initWithPoki: function() {
return Promise.resolve(true);
},
gameLoadingStart: function() {},
gameLoadingFinished: function() {},
gameplayStart: function() {},
gameplayStop: function() {},
commercialBreak: function(fn) {
if (typeof fn === 'function') fn();
return Promise.resolve(true);
},
rewardedBreak: function(fn) {
if (typeof fn === 'function') fn(true);
return Promise.resolve(true);
},
displayAd: function(container, size, fn) {
if (typeof fn === 'function') fn();
return Promise.resolve(true);
},
destroyAd: function() {},
setDebug: function() {},
getParam: function() { return ""; },
getURLParam: function() { return ""; },
captureError: function() {},
measure: function() {},
isAdBlocked: function() { return false; }
};
