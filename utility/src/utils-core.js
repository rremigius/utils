(function() {
    var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    var _ = require('./lib/lodash.min')._;

    var Utils = {};

    Utils.Log = console;

    Utils._utilFiles = {};
    Utils.modules = {};

    Utils.runsOnNode = function() {
        return typeof module !== 'undefined' && typeof module.exports !== 'undefined';
    };

    Utils.extendUtils = function (extend, overwrite, ignore) {
        if (typeof(extend) !== 'object' && typeof(extend) !== 'function') {
            Utils.Log.error("Could not extend utils. Extension must be object or function.");
            return false;
        }
        if (!Array.isArray(overwrite)) {
            overwrite = [];
        }
        if (!Array.isArray(ignore)) {
            ignore = [];
        }

        for (var i in extend) {
            if (ignore.indexOf(i) >= 0) {
                continue;
            }
            if (i in Utils && overwrite.indexOf(i) < 0) {
                console.error("'" + i + "' already defined in Utils.");
                continue;
            }
            Utils[i] = extend[i];
        }
    };

    // Standard extension of lodash/underscore
    if (typeof(window._) === 'function') {
        Utils.extendUtils(window._, ['toString']);
    }

    Utils.setLogger = function (logger) {
        Utils.Log = logger;
    };

    /**
     * Exports the given value either to the browser window object or to the node.js module object.
     * @param name
     * @param value
     */
    Utils.export = function (name, value) {
        Utils.modules[name] = value;
    };


    // Export Utils
    if (isNode) {
        module.exports.Utils = Utils;
    }
    else {
        if (typeof define === 'function' && define.amd) {
            define([], function () {
                return Utils;
            });
        }
        else {
            window.Utils = Utils;
        }
    }
})();