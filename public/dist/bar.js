"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bar = function () {
    function Bar() {
        _classCallCheck(this, Bar);

        this.init();
    }

    _createClass(Bar, [{
        key: "init",
        value: function init() {
            this.items = [];
            for (var i = 0; i < 10; i++) {
                this.items.push(i);
            }
        }
    }, {
        key: "print",
        value: function print() {
            this.items.map(function (item) {
                console.log(item);
            });
        }
    }]);

    return Bar;
}();

exports.default = Bar;