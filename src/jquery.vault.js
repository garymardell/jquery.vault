/**
*  Vault
*  Easily allow hidden commands on your website
*
*  Copyright 2012, Gary Mardell
*  Released under MIT License
*  http://www.opensource.org/licenses/mit-license.php
*
*  https://github.com/garymardell/jquery.vault
*/

jQuery(function($) {
	
	$.vault = (function() {
		var passphrase = '',
			boxes = {},
			initialized = false,
			active = false,
			combo = '';

		var initialize = function() {
			// Watch for keys
			$(document).keypress(onKeypress);
		}

		var onKeypress = function(e) {
			var code = e.keyCode || e.which;
			combo += String.fromCharCode(e.charCode);
			// Wait for the passphrase
			if(!active) {
				if (combo.indexOf(passphrase) >= 0) {
					active = true;
					combo = '';
				}
			} else {
				$.each(boxes, function(trigger, callback) {
					if(combo.indexOf(trigger) >= 0) {
						callback.call();
						combo = '';
					}
				});
			}
		}

		var v = {
			passphrase: function(key) {
				passphrase = key;

				if(!initialized) {
					initialize();
					initialized = true;
				}
			},

			register: function(trigger, callback) {
				if(trigger == '' || !$.isFunction(callback))
					return false;

				// Override if exists or insert
				boxes[trigger] = callback;
			}
		}		

		return v;
	})();

});

