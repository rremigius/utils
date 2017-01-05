(function(){
    var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    var Utils = require('./src/utils-core').Utils;

    var loaded = [];
    loaded.push(require('./src/utils/string').String);
    loaded.push(require('./src/utils/validation').Validation);
    loaded.push(require('./src/utils/error').Error);

    for(var i=0; i<loaded.length; i++) {
        Utils.extendUtils(loaded[i]);
    }

    module.exports.Utils = Utils;
    window.Utils = Utils;
})();