(function(){
    var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    var Utils = require('./utils-core').Utils;

    var loaded = [];
    loaded.push(require('./utils/string').String);
    loaded.push(require('./utils/validation').Validation);
    loaded.push(require('./utils/error').Error);

    for(var i=0; i<loaded.length; i++) {
        Utils.extendUtils(loaded[i]);
    }

    module.exports.Utils = Utils;
    window.Utils = Utils;
})();