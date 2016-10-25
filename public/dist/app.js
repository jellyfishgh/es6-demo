'use strict';

var _foo = require('./foo');

var _foo2 = _interopRequireDefault(_foo);

var _bar = require('./bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foo = new _foo2.default('Hello', 20);
console.log(foo.toString());

var bar = new _bar2.default();
bar.print();