var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

window.require = isNode ? require : function() {
	return window;
};

