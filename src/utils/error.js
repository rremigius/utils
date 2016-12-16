var Utils = window.Utils || {};

(function(Utils) {

    /**
     * @param {object|string} specs             Error message or specs.
     * @constructor
     */
    Utils.Error = function(specs) {
        if(Utils.isString(specs)) {
            specs = {
                message: specs
            };
        }
        specs = specs || {};

        this.message        = specs.message;
        this.originalError  = specs.originalError;
        this.errorMap       = specs.errorMap;
        this.code           = specs.code;
        this.data           = specs.data;
        //this.origin         = Utils.Utils.getCaller(2);
        //this.stack          = Utils.Utils.getStackTrace(1, 10);
        this.public			= specs.public || true;
    };

    Utils.Error.prototype.logger = Utils.Log;

    Utils.Error.prototype.message = 'An error occurred.';
    Utils.Error.prototype.originalError = undefined;
    Utils.Error.prototype.errorMap = undefined;
    Utils.Error.prototype.code = undefined;
    Utils.Error.prototype.data = undefined;
    Utils.Error.prototype.origin = undefined;
    Utils.Error.prototype.stack = undefined;

    Utils.Error.prototype.toString = function() {
        return this.message;
    };
    Utils.Error.prototype.getMessage = function() {
        return this.message;
    };

})(Utils);