/* global ActiveXObject */

(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		var hasFlash = false;

		try {
			var objFlash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if (objFlash) {
				hasFlash = true;
			}
		} catch (e) {
			if (navigator.mimeTypes &&
				(typeof navigator.mimeTypes['application/x-shockwave-flash'] !== 'undefined') &&
					navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
				hasFlash = true;
			}
		}

		if (hasFlash) {
			document.querySelector('.status').textContent = 'Enabled';
			document.querySelector('.getflash img').style.display = 'none';
			document.querySelector('.getflash label').style.display = 'none';
			document.querySelector('.flashbox embed').style.display = 'block';
		}
	});
}());
