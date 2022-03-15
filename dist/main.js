"use strict";

var _tax = _interopRequireDefault(require("./tax.js"));

var _client = _interopRequireDefault(require("./client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _tax["default"](1830000, 230000);
var impuesto2 = new _tax["default"](5546000, 500000);
var cliente1 = new _client["default"]("Juan", impuesto1);
var cliente2 = new _client["default"]("Pedro", impuesto2);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());