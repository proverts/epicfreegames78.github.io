window.PokiSDK = {
init: function() { return Promise.resolve(true); },
gameLoadingFinished: function() {},
gameplayStart: function() {},
gameplayStop: function() {},
commercialBreak: function() { return Promise.resolve(true); },
rewardedBreak: function() { return Promise.resolve(true); }
};
