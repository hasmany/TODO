(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var counter = 0;

var SimpleItem = function () {
  function SimpleItem() {
    _classCallCheck(this, SimpleItem);
  }

  _createClass(SimpleItem, null, [{
    key: "getCounter",
    value: function getCounter() {
      return counter;
    }
  }]);

  return SimpleItem;
}();

/* remove for specs:start */


exports.default = SimpleItem;
/* remove for specs:end */

},{}],2:[function(require,module,exports){
"use strict";

var _simpleItem = require("./simple-item");

var _simpleItem2 = _interopRequireDefault(_simpleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* remove for specs:start */


/* remove for specs:end */

var SimpleList = function SimpleList() {
  _classCallCheck(this, SimpleList);
};

},{"./simple-item":1}]},{},[2]);
