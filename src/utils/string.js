var Utils = window.Utils || {};

(function(Utils) {

    Utils.requireUtils(['isString']);

    Utils.plural = function(string) {
        if(!Utils.isString(string)) {
            return "things";
        }

        // Covers some irregular plurals
        if(string.slice(-2) === 'us') {
            return string.slice(0, string.length-2) + 'i';
        }
        if(string.slice(-1) === 's') {
            return string + 'es';
        }

        return string + 's';
    };

    Utils.capitaliseFirst = function (s) {
        if (!Utils.isString(s)) {
            return null;
        }

        return s.charAt(0).toUpperCase() + s.slice(1);
    };
})(Utils);