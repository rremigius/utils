var Utils = {};

Utils.Log = console;

Utils.extendUtils = function(extend, overwrite, ignore) {
    if(typeof(extend) !== 'object' && typeof(extend) !== 'function') {
        Utils.Log.error("Could not extend utils. Extension must be object or function.");
        return false;
    }
    if(!Array.isArray(overwrite)) {
        overwrite = [];
    }
    if(!Array.isArray(ignore)) {
        ignore = [];
    }

    for(var i in extend) {
        if(ignore.indexOf(i) >= 0) {
            continue;
        }
        if(i in Utils && overwrite.indexOf(i) < 0) {
            console.error("'" + i + "' already defined in Utils.");
            continue;
        }
        Utils[i] = extend[i];
    }
};

// Standard extension of lodash/underscore
if(typeof(_) === 'function') {
    Utils.extendUtils(_, ['toString']);
}

Utils.setLogger = function(logger) {
    Utils.Log = logger;
};

Utils.requireUtils = function(methods) {
    if(typeof(Utils.get) !== 'function') {
        Utils.Log.error("Could not load utils. Required method 'get' is not available.");
        return false;
    }

    if(!Array.isArray(methods)) {
        Utils.Log.error("Could not load utils. Required methods argument should be an array.");
        return false;
    }

    for(var i = 0; i < methods.length; i++) {
        if(typeof(Utils.get(Utils, methods[i])) !== 'function') {
            Utils.Log.error("Could not load utils: invalid method '" + methods[i] + "'.");
            return false;
        }
    }
    return true;
};