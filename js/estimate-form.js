(function () {
		"use strict";
		window.addEventListener('DOMContentLoaded', function ()) {
			var validateButton = document.getElementById('validateButton');
			var overallButton = document.getElementById('overallButton');
			var form = document.getElementById('estimateForm');
			var validateDetails = document.getElementById('validateDetails');
			var validateResults = document.getElementById('validateResults');

			overallButton.addEventListener('click', function () {
				var formValidity = form.checkValidity();
				validateResults.innerHTML = 'Is the form valid?' + formValidity;
			});
	
		validateButton.addEventListener('click', function() {
			var output = '';
			var inputs = form.querySelectorAll('#fields > input');
			
			for ( var x = 0; x < inputs.length; x++) {
				var el = inputs[x];
				output += el.id + ' : ' + el.validity.valid;
				if (! el.validity.valid) {
					output += ' [ ';
					for (var reason in el.validity) {
						if (el.validity[reason]) {
							output += reason
						}
					}
					output += ' ] ';
				}
			}
		})
	
		}
 //property is valid
 }());