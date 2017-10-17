"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Velocity = function () {
	function Velocity(distance, time) {
		_classCallCheck(this, Velocity);

		this.distance = distance;
		this.time = time;
	}

	_createClass(Velocity, [{
		key: "getVelocity",
		value: function getVelocity() {
			return this.distance / this.time;
		}
	}]);

	return Velocity;
}();

var goku = new Velocity(500, 5);
console.log("La velocidad de goku es " + goku.getVelocity());