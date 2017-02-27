(function() {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if(!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var DOM = {};

	DOM.getSelectedText = function() {
		var txt = '';
		if (window.getSelection)
		{
			txt = window.getSelection();
		}
		else if (document.getSelection)
		{
			txt = document.getSelection();
		}
		else if (document.selection)
		{
			txt = document.selection.createRange().text;
		}
		else return;
		document.aform.selectedtext.value =  txt;
	};

	module.exports.DOM = DOM;
})();
