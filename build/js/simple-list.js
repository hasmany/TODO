(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var counter = 0;

var SimpleItem = function () {
  function SimpleItem(options) {
    _classCallCheck(this, SimpleItem);

    if (!options) {
      throw new Error("must instantiate item with options");
    } else if (!options.desc) {
      throw new Error("must instantiate item with a 'desc' property");
    } else {
      counter++;
      this.id = counter;
      this.desc = options.desc;
      this.complete = options.complete ? options.complete : false;
      // Object.defineProperty(this, "id", {
      //   value: id, 
      //   writable: false
      // });
    }
  }

  _createClass(SimpleItem, [{
    key: "getDesc",
    value: function getDesc() {
      return this.desc;
    }
  }, {
    key: "setDesc",
    value: function setDesc(desc) {
      this.desc = desc;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.complete;
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      if (typeof status !== "boolean") {
        throw new Error("parameter must be of type 'boolean'");
      } else {
        this.complete = status;
      }
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);

  return SimpleItem;
}();

/* remove for specs:start */


exports.default = SimpleItem;
/* remove for specs:end */

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* remove for specs:start */


var _simpleItem = require('./simple-item');

var _simpleItem2 = _interopRequireDefault(_simpleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* remove for specs:end */

var SimpleList = function () {
  function SimpleList(options) {
    _classCallCheck(this, SimpleList);

    this.title = options && options.title ? options.title : '';
    this.items = options && options.items ? options.items : [];
    this.selector = options && options.selector ? options.selector : '[data-simple-list]';
    this.initList();
  }

  _createClass(SimpleList, [{
    key: 'initList',
    value: function initList() {
      var listContainer = document.querySelector(this.selector);
      this.createListElement(listContainer);
    }
  }, {
    key: 'createListElement',
    value: function createListElement(listContainer) {
      if (listContainer) {
        listContainer.classList.add('simple-list');
        var title = this.title ? this.generateTitle(this.title) : null;
        this.itemListElement = document.createElement('ul');
        this.addItems();
        if (title) {
          listContainer.appendChild(title);
        }
        listContainer.appendChild(this.itemListElement);
      } else {
        throw new Error('DOM element with ' + this.selector + ' selector not found');
      }
    }
  }, {
    key: 'generateTitle',
    value: function generateTitle(title) {
      var titleElement = document.createElement('p');
      titleElement.innerHTML = title;
      return titleElement;
    }
  }, {
    key: 'addItems',
    value: function addItems() {
      for (var i = this.items.length - 1; i >= 0; i--) {
        this.addItem(this.items.splice(i, 1)[0]);
      }
    }
  }, {
    key: 'appendItem',
    value: function appendItem(item) {
      var itemElement = this.generateItem(item);
      this.itemListElement.appendChild(itemElement);
    }
  }, {
    key: 'generateItem',
    value: function generateItem(item) {
      var itemElement = document.createElement('li');
      var itemRemoveBtn = this.generateRemoveBtn();
      var itemCheckBtn = this.generateCheckBtn();
      var itemDesc = this.generateDesc(item.desc);

      itemElement.classList.add('simple-item');
      itemElement.setAttribute('data-complete', item.complete);
      itemElement.setAttribute('data-desc', item.desc);

      itemElement.appendChild(itemCheckBtn);
      itemElement.appendChild(itemDesc);
      itemElement.appendChild(itemRemoveBtn);

      return itemElement;
    }
  }, {
    key: 'generateRemoveBtn',
    value: function generateRemoveBtn() {
      var itemRemoveBtn = document.createElement('span');
      itemRemoveBtn.classList.add('simple-item--close');
      itemRemoveBtn.innerHTML = '&times;';
      return itemRemoveBtn;
    }
  }, {
    key: 'generateCheckBtn',
    value: function generateCheckBtn() {
      var itemCheckBtn = document.createElement('span');
      itemCheckBtn.classList.add('simple-item--check');
      itemCheckBtn.innerHTML = '&#10004;';
      return itemCheckBtn;
    }
  }, {
    key: 'generateDesc',
    value: function generateDesc(text) {
      var itemDesc = document.createElement('span');
      itemDesc.innerHTML = text;
      return itemDesc;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      return this.items;
    }
  }, {
    key: 'addItem',
    value: function addItem(options) {
      if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options.desc) {
        var item = new _simpleItem2.default(options);
        this.items.push(item);
        this.appendItem(item);
        return true;
      } else {
        throw new Error('addItem argument must include an object with a desc property');
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(id) {
      for (var i = this.items.length - 1; i >= 0; i--) {
        if (this.items[i].id === id) {
          this.items.splice(i, 1);
          return true;
          break;
        }
      }
      return false;
    }
  }]);

  return SimpleList;
}();

},{"./simple-item":1}]},{},[2]);
