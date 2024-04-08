/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/navigationControls.png */ "./src/img/navigationControls.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  color: #ccc;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: rgb(21, 21, 21);\n  display: flex;\n  flex-direction: column;\n}\n\n\n\nheader {\n  height: 50px;\n  padding: 10px 30px;\n  border-bottom: 1px solid #333;\n  display: flex;\n  justify-content: space-between;\n  flex-shrink: initial;\n  align-items: center;\n}\n\nheader .group {\n  display: flex;\n  align-items: center;\n}\n\nheader .group>* {\n  margin-left: 10px;\n}\n\nheader .group>*:not(:last-child) {\n  margin-right: 10px;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\n\n#runner {\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#viewer,\n#devtools {\n  display: flex;\n  flex: 1;\n}\n\n#devtools iframe {\n  border: none;\n  overflow: hidden;\n  width: 100%;\n}\n\n/* https://github.com/ChromeDevTools/devtools-frontend/blob/ca17a55104e6baf8d4ab360b484111bfa93c9b7f/front_end/panels/screencast/screencastView.css#L35 */\n.flex-auto {\n  flex: auto;\n}\n\n.vbox {\n  display: flex;\n  flex-direction: column !important;\n  position: relative;\n}\n\n.widget {\n  position: relative;\n  flex: auto;\n  contain: style;\n}\n\n.screencast-navigation {\n  flex-direction: row;\n  display: flex;\n  flex: 24px 0 0;\n  position: relative;\n  padding-left: 1px;\n  background-origin: padding-box;\n  background-clip: padding-box;\n}\n\n.screencast-navigation button {\n  border-radius: 2px;\n  background-color: transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-clip: content-box;\n  background-origin: content-box;\n  background-repeat: no-repeat;\n  border: 1px solid transparent;\n  height: 23px;\n  padding: 2px;\n  width: 23px;\n}\n\n.screencast-navigation button:hover,\n.screencast-navigation button:focus {\n  border-color: rgb(17, 119, 187);\n}\n\n.screencast-navigation button:active {\n  border-color: rgb(200, 200, 200);\n}\n\n.screencast-navigation button.back {\n  background-position-x: -1px;\n}\n\n.screencast-navigation button.forward {\n  background-position-x: -18px;\n}\n\n.screencast-navigation button.reload {\n  background-position-x: -37px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;EACE,iOAAiO;AACnO;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;;EAIE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;AACxB;;;;AAIA;EACE,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;AACrB;;;AAGA;EACE,kBAAkB;EAClB,aAAa;EACb,OAAO;EACP,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA,yJAAyJ;AACzJ;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,yDAAmD;EACnD,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  color: #ccc;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: rgb(21, 21, 21);\n  display: flex;\n  flex-direction: column;\n}\n\n\n\nheader {\n  height: 50px;\n  padding: 10px 30px;\n  border-bottom: 1px solid #333;\n  display: flex;\n  justify-content: space-between;\n  flex-shrink: initial;\n  align-items: center;\n}\n\nheader .group {\n  display: flex;\n  align-items: center;\n}\n\nheader .group>* {\n  margin-left: 10px;\n}\n\nheader .group>*:not(:last-child) {\n  margin-right: 10px;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\n\n#runner {\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n#viewer,\n#devtools {\n  display: flex;\n  flex: 1;\n}\n\n#devtools iframe {\n  border: none;\n  overflow: hidden;\n  width: 100%;\n}\n\n/* https://github.com/ChromeDevTools/devtools-frontend/blob/ca17a55104e6baf8d4ab360b484111bfa93c9b7f/front_end/panels/screencast/screencastView.css#L35 */\n.flex-auto {\n  flex: auto;\n}\n\n.vbox {\n  display: flex;\n  flex-direction: column !important;\n  position: relative;\n}\n\n.widget {\n  position: relative;\n  flex: auto;\n  contain: style;\n}\n\n.screencast-navigation {\n  flex-direction: row;\n  display: flex;\n  flex: 24px 0 0;\n  position: relative;\n  padding-left: 1px;\n  background-origin: padding-box;\n  background-clip: padding-box;\n}\n\n.screencast-navigation button {\n  border-radius: 2px;\n  background-color: transparent;\n  background-image: url('img/navigationControls.png');\n  background-clip: content-box;\n  background-origin: content-box;\n  background-repeat: no-repeat;\n  border: 1px solid transparent;\n  height: 23px;\n  padding: 2px;\n  width: 23px;\n}\n\n.screencast-navigation button:hover,\n.screencast-navigation button:focus {\n  border-color: rgb(17, 119, 187);\n}\n\n.screencast-navigation button:active {\n  border-color: rgb(200, 200, 200);\n}\n\n.screencast-navigation button.back {\n  background-position-x: -1px;\n}\n\n.screencast-navigation button.forward {\n  background-position-x: -18px;\n}\n\n.screencast-navigation button.reload {\n  background-position-x: -37px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseURL": () => (/* binding */ getBaseURL),
/* harmony export */   "getConnectURL": () => (/* binding */ getConnectURL),
/* harmony export */   "getTargetId": () => (/* binding */ getTargetId),
/* harmony export */   "getWebSocketURL": () => (/* binding */ getWebSocketURL)
/* harmony export */ });
const getBaseURL = () => {
    const baseURL = window.location.href;
    return new URL(baseURL);
};
const getWebSocketURL = () => {
    const baseURL = getBaseURL();
    const wsProtocol = baseURL.protocol === 'https:' ? 'wss:' : 'ws:';
    const targetId = baseURL.searchParams.get('targetId');
    const wsUrl = new URL(`${wsProtocol}${baseURL.host}${baseURL.pathname}ws/${targetId}`);
    return wsUrl;
};
const getTargetId = () => {
    const baseURL = getBaseURL();
    const targetId = baseURL.searchParams.get('targetId');
    if (!targetId)
        throw new Error('Missing targetId in URL');
    return targetId;
};
const getConnectURL = () => {
    const wsURL = getWebSocketURL();
    console.log('wsURL', wsURL);
    return wsURL.href;
};


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runner */ "./src/runner.ts");

class App {
    $runnerMount = document.querySelector('#runner');
    runner;
    constructor() {
        this.run();
    }
    onRunnerComplete = (showMessage = true) => {
        this.runner = undefined;
        if (showMessage) {
            this.$runnerMount.innerHTML = `
      ${this.$runnerMount.innerHTML}
      <div class="fixed-message">
        <code>Session complete</code>
      </div>
      `;
        }
    };
    run = async () => {
        if (this.runner) {
            this.runner.close(false);
        }
        const $mount = this.$runnerMount;
        const onClose = this.onRunnerComplete;
        this.runner = new _runner__WEBPACK_IMPORTED_MODULE_0__["default"]({ $mount, onClose });
    };
}


/***/ }),

/***/ "./src/runner.ts":
/*!***********************!*\
  !*** ./src/runner.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Runner)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.ts");


const runnerHTML = `
<div id="viewer">
  <canvas id="screencast"></canvas>
</div>`;
const errorHTML = (error) => `<div class="fixed-message"><code style="color: red">${error.toString()}</code></div>`;
class Runner {
    wsClient;
    onClose;
    $mount;
    $canvas;
    $viewer;
    ctx;
    img = new Image();
    started = false;
    static getModifiersForEvent(event) {
        return ((event.altKey ? 1 : 0) |
            (event.ctrlKey ? 2 : 0) |
            (event.metaKey ? 4 : 0) |
            (event.shiftKey ? 8 : 0));
    }
    constructor({ $mount, onClose }) {
        this.$mount = $mount;
        this.onClose = onClose;
        this.setupWebSocket();
    }
    onVerticalResize = (evt) => {
        evt.preventDefault();
        this.$mount.style.pointerEvents = 'none';
        this.$viewer.style.flex = 'initial';
        let onMouseMove = (moveEvent) => {
            if (moveEvent.buttons === 0) {
                return;
            }
            this.$viewer.style.height = `${moveEvent.clientY - 71}px`;
            this.$canvas.height = moveEvent.clientY - 71;
        };
        let onMouseUp = () => {
            this.$mount.style.pointerEvents = 'initial';
            if (onMouseMove)
                document.removeEventListener('mousemove', onMouseMove);
            if (onMouseUp)
                document.removeEventListener('mouseup', onMouseUp);
            onMouseMove = null;
            onMouseUp = null;
            this.resizePage();
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    emitMouse = (evt) => {
        const buttons = { 0: 'none', 1: 'left', 2: 'middle', 3: 'right' };
        const event = evt.type === 'mousewheel' ? window.event || evt : evt;
        const types = {
            mousedown: 'mousePressed',
            mouseup: 'mouseReleased',
            mousewheel: 'mouseWheel',
            touchstart: 'mousePressed',
            touchend: 'mouseReleased',
            touchmove: 'mouseWheel',
            mousemove: 'mouseMoved',
        };
        if (!(event.type in types)) {
            return;
        }
        if (event.type !== 'mousewheel' &&
            buttons[event.which] === 'none' &&
            event.type !== 'mousemove') {
            return;
        }
        const type = types[event.type];
        const isScroll = type.indexOf('wheel') !== -1;
        const x = isScroll ? event.clientX : event.offsetX;
        const y = isScroll ? event.clientY : event.offsetY;
        const params = {
            type: types[event.type],
            x,
            y,
            modifiers: Runner.getModifiersForEvent(event),
            button: event.type === 'mousewheel' ? 'none' : buttons[event.which],
            clickCount: 1,
        };
        if (event.type === 'mousewheel') {
            params.deltaX = event.wheelDeltaX || 0;
            params.deltaY = event.wheelDeltaY || event.wheelDelta;
        }
        console.log('Mouse event', params);
        this.wsClient.send(JSON.stringify({
            command: 'Input.emulateTouchFromMouseEvent',
            params,
        }));
    };
    emitKeyEvent = (event) => {
        let type;
        if (event.keyCode === 8) {
            event.preventDefault();
        }
        switch (event.type) {
            case 'keydown':
                type = "keyDown";
                break;
            case 'keyup':
                type = "keyUp";
                break;
            case 'keypress':
                type = "char";
                break;
            default:
                return;
        }
        const text = type === 'char' ? String.fromCharCode(event.charCode) : undefined;
        const params = {
            type,
            text,
            unmodifiedText: text ? text.toLowerCase() : undefined,
            keyIdentifier: event.keyIdentifier,
            code: event.code,
            key: event.key,
            windowsVirtualKeyCode: event.keyCode,
            nativeVirtualKeyCode: event.keyCode,
            autoRepeat: false,
            isKeypad: false,
            isSystemKey: false,
        };
        this.wsClient.send(JSON.stringify({
            command: 'Input.dispatchKeyEvent',
            params,
        }));
    };
    doReload = () => {
        this.wsClient.send(JSON.stringify({
            command: 'Page.reload',
            params: {},
        }));
    };
    onScreencastFrame = (data) => {
        this.img.onload = () => {
            console.log('Runner onScreencastFrame onload, ctx:', this.ctx);
            this.ctx.drawImage(this.img, 0, 0, this.$canvas.width, this.$canvas.height);
        };
        this.img.src = `data:image/png;base64,${data.data}`;
        this.wsClient.send(JSON.stringify({
            command: 'Page.screencastFrameAck',
            params: {
                sessionId: data.sessionId,
            },
        }));
    };
    bindKeyEvents = () => {
        document.body.addEventListener('keydown', this.emitKeyEvent, true);
        document.body.addEventListener('keyup', this.emitKeyEvent, true);
        document.body.addEventListener('keypress', this.emitKeyEvent, true);
    };
    unbindKeyEvents = () => {
        document.body.removeEventListener('keydown', this.emitKeyEvent, true);
        document.body.removeEventListener('keyup', this.emitKeyEvent, true);
        document.body.removeEventListener('keypress', this.emitKeyEvent, true);
    };
    addListeners = () => {
        this.$canvas.addEventListener('mousedown', this.emitMouse, false);
        this.$canvas.addEventListener('mouseup', this.emitMouse, false);
        this.$canvas.addEventListener('mousewheel', this.emitMouse, false);
        this.$canvas.addEventListener('mousemove', this.emitMouse, false);
        this.$canvas.addEventListener('mouseenter', this.bindKeyEvents, false);
        this.$canvas.addEventListener('mouseleave', this.unbindKeyEvents, false);
        window.addEventListener('resize', this.resizePage);
        const reloadButton = document.getElementById('reload-button');
        if (reloadButton)
            reloadButton.addEventListener('click', this.doReload, false);
    };
    removeEventListeners = () => {
        if (!this.started)
            return;
        this.$canvas.removeEventListener('mousedown', this.emitMouse, false);
        this.$canvas.removeEventListener('mouseup', this.emitMouse, false);
        this.$canvas.removeEventListener('mousewheel', this.emitMouse, false);
        this.$canvas.removeEventListener('mousemove', this.emitMouse, false);
        this.$canvas.removeEventListener('mouseenter', this.bindKeyEvents, false);
        this.$canvas.removeEventListener('mouseleave', this.unbindKeyEvents, false);
        window.removeEventListener('resize', this.resizePage);
    };
    resizePage = (0,_util__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
        const { width, height } = this.$viewer.getBoundingClientRect();
        this.$canvas.width = width;
        this.$canvas.height = height;
        this.wsClient.send(JSON.stringify({
            command: 'Page.setViewport',
            params: {
                width: Math.floor(width),
                height: Math.floor(height),
                deviceScaleFactor: 1,
                mobile: true,
            },
        }));
    }, 500, { isImmediate: false });
    close = (0,_util__WEBPACK_IMPORTED_MODULE_0__.once)((...args) => {
        this.onClose(...args);
        this.wsClient.close();
        this.removeEventListeners();
        this.unbindKeyEvents();
    });
    showError = (err) => {
        this.$mount.innerHTML = `${errorHTML(err)}`;
    };
    onWebSocketSetupComplete = () => {
        this.started = true;
        this.$mount.innerHTML = runnerHTML;
        this.$viewer = document.querySelector('#viewer');
        this.$canvas = document.querySelector('#screencast');
        this.ctx = this.$canvas.getContext('2d');
        this.addListeners();
        this.resizePage();
        const params = {
            format: 'jpeg',
            quality: parseInt(new URLSearchParams(window.location.search).get("quality") || "") || 100,
            everyNthFrame: 1,
        };
        this.wsClient.send(JSON.stringify({
            command: 'Page.startScreencast',
            params,
        }));
    };
    setupWebSocket = () => {
        this.wsClient = new WebSocket((0,_api__WEBPACK_IMPORTED_MODULE_1__.getConnectURL)());
        this.wsClient.addEventListener('message', async (evt) => {
            const text = await evt.data.text();
            const { data } = JSON.parse(text);
            console.log('Websocket message received');
            this.onScreencastFrame(data);
        });
        this.wsClient.addEventListener('open', () => {
            console.log('Websocket opened');
            this.onWebSocketSetupComplete();
        });
        this.wsClient.addEventListener('error', (e) => {
            this.showError(`Error communicating with websocket server ${e}`);
        });
        this.wsClient.addEventListener('close', () => {
            this.showError(`Session complete! Browser has closed.`);
            this.close();
        });
    };
}


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "once": () => (/* binding */ once)
/* harmony export */ });
function debounce(func, waitMilliseconds = 50, options = {}) {
    let timeoutId;
    const isImmediate = options.isImmediate ?? false;
    const { maxWait } = options;
    let lastInvokeTime = Date.now();
    function nextInvokeTimeout() {
        if (maxWait !== undefined) {
            const timeSinceLastInvocation = Date.now() - lastInvokeTime;
            if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
                return maxWait - timeSinceLastInvocation;
            }
        }
        return waitMilliseconds;
    }
    const debouncedFunction = function (...args) {
        const invokeFunction = () => {
            timeoutId = undefined;
            lastInvokeTime = Date.now();
            if (!isImmediate) {
                func.apply(this, args);
            }
        };
        const shouldCallNow = isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());
        if (shouldCallNow) {
            func.apply(this, args);
        }
    };
    debouncedFunction.cancel = function cancel() {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
    };
    return debouncedFunction;
}
const once = (fn) => {
    let done = false;
    return function (...args) {
        return done ? undefined : ((done = true), fn.apply(this, args));
    };
};


/***/ }),

/***/ "./src/img/navigationControls.png":
/*!****************************************!*\
  !*** ./src/img/navigationControls.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcc2df6f8ef0c4fa8076.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");


new _app__WEBPACK_IMPORTED_MODULE_1__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0c7QUFHeEIsSUFBSSw0Q0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvLi9zcmMvYXBpLnRzIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC8uL3NyYy9ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wdXBwZXRlZXItZXh0cmEtcGx1Z2luLXBvcnRhbC1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHVwcGV0ZWVyLWV4dHJhLXBsdWdpbi1wb3J0YWwtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3B1cHBldGVlci1leHRyYS1wbHVnaW4tcG9ydGFsLWZyb250ZW5kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWcvbmF2aWdhdGlvbkNvbnRyb2xzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkFuZGFsZSBNb25vIFdUXFxcIiwgXFxcIkFuZGFsZSBNb25vXFxcIiwgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcXFwiLCBcXFwiRGVqYVZ1IFNhbnMgTW9ub1xcXCIsIFxcXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cXFwiLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIk5pbWJ1cyBNb25vIExcXFwiLCBNb25hY28sIFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiKDIxLCAyMSwgMjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXNocmluazogaW5pdGlhbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuZ3JvdXA+KiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaGVhZGVyIC5ncm91cD4qOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI3J1bm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN2aWV3ZXIsXFxuI2RldnRvb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV2dG9vbHMgaWZyYW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogaHR0cHM6Ly9naXRodWIuY29tL0Nocm9tZURldlRvb2xzL2RldnRvb2xzLWZyb250ZW5kL2Jsb2IvY2ExN2E1NTEwNGU2YmFmOGQ0YWIzNjBiNDg0MTExYmZhOTNjOWI3Zi9mcm9udF9lbmQvcGFuZWxzL3NjcmVlbmNhc3Qvc2NyZWVuY2FzdFZpZXcuY3NzI0wzNSAqL1xcbi5mbGV4LWF1dG8ge1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuLnZib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndpZGdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiBhdXRvO1xcbiAgY29udGFpbjogc3R5bGU7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAyNHB4IDAgMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuXFxuLnNjcmVlbmNhc3QtbmF2aWdhdGlvbiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiAyM3B4O1xcbn1cXG5cXG4uc2NyZWVuY2FzdC1uYXZpZ2F0aW9uIGJ1dHRvbjpob3ZlcixcXG4uc2NyZWVuY2FzdC1uYXZpZ2F0aW9uIGJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYigxNywgMTE5LCAxODcpO1xcbn1cXG5cXG4uc2NyZWVuY2FzdC1uYXZpZ2F0aW9uIGJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uLmJhY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMXB4O1xcbn1cXG5cXG4uc2NyZWVuY2FzdC1uYXZpZ2F0aW9uIGJ1dHRvbi5mb3J3YXJkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTE4cHg7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uLnJlbG9hZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0zN3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDtFQUNFLGlPQUFpTztBQUNuTzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7OztBQUlBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUEseUpBQXlKO0FBQ3pKO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHlEQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkFuZGFsZSBNb25vIFdUXFxcIiwgXFxcIkFuZGFsZSBNb25vXFxcIiwgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcXFwiLCBcXFwiRGVqYVZ1IFNhbnMgTW9ub1xcXCIsIFxcXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cXFwiLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIk5pbWJ1cyBNb25vIExcXFwiLCBNb25hY28sIFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiKDIxLCAyMSwgMjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXNocmluazogaW5pdGlhbDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuZ3JvdXA+KiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaGVhZGVyIC5ncm91cD4qOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuI3J1bm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN2aWV3ZXIsXFxuI2RldnRvb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jZGV2dG9vbHMgaWZyYW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogaHR0cHM6Ly9naXRodWIuY29tL0Nocm9tZURldlRvb2xzL2RldnRvb2xzLWZyb250ZW5kL2Jsb2IvY2ExN2E1NTEwNGU2YmFmOGQ0YWIzNjBiNDg0MTExYmZhOTNjOWI3Zi9mcm9udF9lbmQvcGFuZWxzL3NjcmVlbmNhc3Qvc2NyZWVuY2FzdFZpZXcuY3NzI0wzNSAqL1xcbi5mbGV4LWF1dG8ge1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuLnZib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndpZGdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiBhdXRvO1xcbiAgY29udGFpbjogc3R5bGU7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAyNHB4IDAgMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuXFxuLnNjcmVlbmNhc3QtbmF2aWdhdGlvbiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltZy9uYXZpZ2F0aW9uQ29udHJvbHMucG5nJyk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgd2lkdGg6IDIzcHg7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uOmhvdmVyLFxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3LCAxMTksIDE4Nyk7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG59XFxuXFxuLnNjcmVlbmNhc3QtbmF2aWdhdGlvbiBidXR0b24uYmFjayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xcHg7XFxufVxcblxcbi5zY3JlZW5jYXN0LW5hdmlnYXRpb24gYnV0dG9uLmZvcndhcmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMThweDtcXG59XFxuXFxuLnNjcmVlbmNhc3QtbmF2aWdhdGlvbiBidXR0b24ucmVsb2FkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTM3cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGdldEJhc2VVUkwgPSAoKTogVVJMID0+IHtcbiAgY29uc3QgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICByZXR1cm4gbmV3IFVSTChiYXNlVVJMKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRXZWJTb2NrZXRVUkwgPSAoKTogVVJMID0+IHtcbiAgY29uc3QgYmFzZVVSTCA9IGdldEJhc2VVUkwoKTtcbiAgY29uc3Qgd3NQcm90b2NvbCA9IGJhc2VVUkwucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzczonIDogJ3dzOic7XG4gIGNvbnN0IHRhcmdldElkID0gYmFzZVVSTC5zZWFyY2hQYXJhbXMuZ2V0KCd0YXJnZXRJZCcpO1xuICBjb25zdCB3c1VybCA9IG5ldyBVUkwoYCR7d3NQcm90b2NvbH0ke2Jhc2VVUkwuaG9zdH0ke2Jhc2VVUkwucGF0aG5hbWV9d3MvJHt0YXJnZXRJZH1gKTtcbiAgcmV0dXJuIHdzVXJsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhcmdldElkID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGJhc2VVUkwgPSBnZXRCYXNlVVJMKCk7XG4gIGNvbnN0IHRhcmdldElkID0gYmFzZVVSTC5zZWFyY2hQYXJhbXMuZ2V0KCd0YXJnZXRJZCcpO1xuICBpZiAoIXRhcmdldElkKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGFyZ2V0SWQgaW4gVVJMJyk7XG4gIHJldHVybiB0YXJnZXRJZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0VVJMID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHdzVVJMID0gZ2V0V2ViU29ja2V0VVJMKCk7XG4gIGNvbnNvbGUubG9nKCd3c1VSTCcsIHdzVVJMKTtcbiAgcmV0dXJuIHdzVVJMLmhyZWY7XG59O1xuIiwiaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIHByaXZhdGUgJHJ1bm5lck1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3J1bm5lcicpIGFzIEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgcnVubmVyOiBSdW5uZXIgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIG9uUnVubmVyQ29tcGxldGUgPSAoc2hvd01lc3NhZ2UgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5ydW5uZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc2hvd01lc3NhZ2UpIHtcbiAgICAgIHRoaXMuJHJ1bm5lck1vdW50LmlubmVySFRNTCA9IGBcbiAgICAgICR7dGhpcy4kcnVubmVyTW91bnQuaW5uZXJIVE1MfVxuICAgICAgPGRpdiBjbGFzcz1cImZpeGVkLW1lc3NhZ2VcIj5cbiAgICAgICAgPGNvZGU+U2Vzc2lvbiBjb21wbGV0ZTwvY29kZT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG4gIH07XG5cbiAgcnVuID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICh0aGlzLnJ1bm5lcikge1xuICAgICAgdGhpcy5ydW5uZXIuY2xvc2UoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCAkbW91bnQgPSB0aGlzLiRydW5uZXJNb3VudDtcbiAgICBjb25zdCBvbkNsb3NlID0gdGhpcy5vblJ1bm5lckNvbXBsZXRlO1xuXG4gICAgdGhpcy5ydW5uZXIgPSBuZXcgUnVubmVyKHsgJG1vdW50LCBvbkNsb3NlIH0pO1xuICB9O1xufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgUHJvdG9jb2wgZnJvbSAnZGV2dG9vbHMtcHJvdG9jb2wnO1xuaW1wb3J0IHsgZGVib3VuY2UsIG9uY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdFVSTCB9IGZyb20gJy4vYXBpJztcblxuZXhwb3J0IHR5cGUgQ29tbWFuZFJlc3BvbnNlID0ge1xuICBjb21tYW5kOiAnUGFnZS5zY3JlZW5jYXN0RnJhbWUnO1xuICBkYXRhOiBQcm90b2NvbC5QYWdlLlNjcmVlbmNhc3RGcmFtZUV2ZW50O1xufTtcblxuY29uc3QgcnVubmVySFRNTCA9IGBcbjxkaXYgaWQ9XCJ2aWV3ZXJcIj5cbiAgPGNhbnZhcyBpZD1cInNjcmVlbmNhc3RcIj48L2NhbnZhcz5cbjwvZGl2PmA7XG5cbmNvbnN0IGVycm9ySFRNTCA9IChlcnJvcjogc3RyaW5nKSA9PlxuICBgPGRpdiBjbGFzcz1cImZpeGVkLW1lc3NhZ2VcIj48Y29kZSBzdHlsZT1cImNvbG9yOiByZWRcIj4ke2Vycm9yLnRvU3RyaW5nKCl9PC9jb2RlPjwvZGl2PmA7XG5cbmludGVyZmFjZSBSdW5uZXJQYXJhbXMge1xuICBjb2RlOiBzdHJpbmc7XG4gICRtb3VudDogSFRNTEVsZW1lbnQ7XG4gIG9uQ2xvc2U6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVubmVyIHtcbiAgcHJpdmF0ZSB3c0NsaWVudCE6IFdlYlNvY2tldDtcblxuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2xvc2U6IFJ1bm5lclBhcmFtc1snb25DbG9zZSddO1xuXG4gIHByaXZhdGUgJG1vdW50OiBSdW5uZXJQYXJhbXNbJyRtb3VudCddO1xuXG4gIHByaXZhdGUgJGNhbnZhcyE6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gIHByaXZhdGUgJHZpZXdlciE6IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgY3R4ITogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHByaXZhdGUgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgcHJpdmF0ZSBzdGFydGVkID0gZmFsc2U7XG5cbiAgc3RhdGljIGdldE1vZGlmaWVyc0ZvckV2ZW50KGV2ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIChldmVudC5hbHRLZXkgPyAxIDogMCkgfFxuICAgICAgKGV2ZW50LmN0cmxLZXkgPyAyIDogMCkgfFxuICAgICAgKGV2ZW50Lm1ldGFLZXkgPyA0IDogMCkgfFxuICAgICAgKGV2ZW50LnNoaWZ0S2V5ID8gOCA6IDApXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgJG1vdW50LCBvbkNsb3NlIH06IHsgJG1vdW50OiBIVE1MRWxlbWVudDsgb25DbG9zZTogKCkgPT4gdm9pZCB9KSB7XG4gICAgdGhpcy4kbW91bnQgPSAkbW91bnQ7XG4gICAgdGhpcy5vbkNsb3NlID0gb25DbG9zZTtcblxuICAgIHRoaXMuc2V0dXBXZWJTb2NrZXQoKTtcbiAgfVxuXG4gIG9uVmVydGljYWxSZXNpemUgPSAoZXZ0OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLiRtb3VudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHRoaXMuJHZpZXdlci5zdHlsZS5mbGV4ID0gJ2luaXRpYWwnO1xuXG4gICAgbGV0IG9uTW91c2VNb3ZlOiAoKG1vdmVFdmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgfCBudWxsID0gKG1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKG1vdmVFdmVudC5idXR0b25zID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kdmlld2VyLnN0eWxlLmhlaWdodCA9IGAke21vdmVFdmVudC5jbGllbnRZIC0gNzF9cHhgO1xuICAgICAgdGhpcy4kY2FudmFzLmhlaWdodCA9IG1vdmVFdmVudC5jbGllbnRZIC0gNzE7XG4gICAgfTtcblxuICAgIGxldCBvbk1vdXNlVXA6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLiRtb3VudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnO1xuICAgICAgaWYgKG9uTW91c2VNb3ZlKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBpZiAob25Nb3VzZVVwKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIG9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIG9uTW91c2VVcCA9IG51bGw7XG4gICAgICB0aGlzLnJlc2l6ZVBhZ2UoKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICB9O1xuXG4gIGVtaXRNb3VzZSA9IChldnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnM6IGFueSA9IHsgMDogJ25vbmUnLCAxOiAnbGVmdCcsIDI6ICdtaWRkbGUnLCAzOiAncmlnaHQnIH07XG4gICAgY29uc3QgZXZlbnQ6IGFueSA9IGV2dC50eXBlID09PSAnbW91c2V3aGVlbCcgPyB3aW5kb3cuZXZlbnQgfHwgZXZ0IDogZXZ0O1xuICAgIGNvbnN0IHR5cGVzOiBhbnkgPSB7XG4gICAgICBtb3VzZWRvd246ICdtb3VzZVByZXNzZWQnLFxuICAgICAgbW91c2V1cDogJ21vdXNlUmVsZWFzZWQnLFxuICAgICAgbW91c2V3aGVlbDogJ21vdXNlV2hlZWwnLFxuICAgICAgdG91Y2hzdGFydDogJ21vdXNlUHJlc3NlZCcsXG4gICAgICB0b3VjaGVuZDogJ21vdXNlUmVsZWFzZWQnLFxuICAgICAgdG91Y2htb3ZlOiAnbW91c2VXaGVlbCcsXG4gICAgICBtb3VzZW1vdmU6ICdtb3VzZU1vdmVkJyxcbiAgICB9O1xuXG4gICAgaWYgKCEoZXZlbnQudHlwZSBpbiB0eXBlcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlICE9PSAnbW91c2V3aGVlbCcgJiZcbiAgICAgIGJ1dHRvbnNbZXZlbnQud2hpY2hdID09PSAnbm9uZScgJiZcbiAgICAgIGV2ZW50LnR5cGUgIT09ICdtb3VzZW1vdmUnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzW2V2ZW50LnR5cGVdIGFzIHN0cmluZztcbiAgICBjb25zdCBpc1Njcm9sbCA9IHR5cGUuaW5kZXhPZignd2hlZWwnKSAhPT0gLTE7XG4gICAgY29uc3QgeCA9IGlzU2Nyb2xsID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50Lm9mZnNldFg7XG4gICAgY29uc3QgeSA9IGlzU2Nyb2xsID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50Lm9mZnNldFk7XG5cbiAgICBjb25zdCBwYXJhbXM6IFByb3RvY29sLklucHV0LkVtdWxhdGVUb3VjaEZyb21Nb3VzZUV2ZW50UmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6IHR5cGVzW2V2ZW50LnR5cGVdLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBtb2RpZmllcnM6IFJ1bm5lci5nZXRNb2RpZmllcnNGb3JFdmVudChldmVudCksXG4gICAgICBidXR0b246IGV2ZW50LnR5cGUgPT09ICdtb3VzZXdoZWVsJyA/ICdub25lJyA6IGJ1dHRvbnNbZXZlbnQud2hpY2hdLFxuICAgICAgY2xpY2tDb3VudDogMSxcbiAgICB9O1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZXdoZWVsJykge1xuICAgICAgcGFyYW1zLmRlbHRhWCA9IGV2ZW50LndoZWVsRGVsdGFYIHx8IDA7XG4gICAgICBwYXJhbXMuZGVsdGFZID0gZXZlbnQud2hlZWxEZWx0YVkgfHwgZXZlbnQud2hlZWxEZWx0YTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ01vdXNlIGV2ZW50JywgcGFyYW1zKTtcbiAgICB0aGlzLndzQ2xpZW50LnNlbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbW1hbmQ6ICdJbnB1dC5lbXVsYXRlVG91Y2hGcm9tTW91c2VFdmVudCcsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBlbWl0S2V5RXZlbnQgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBsZXQgdHlwZTogUHJvdG9jb2wuSW5wdXQuRGlzcGF0Y2hLZXlFdmVudFJlcXVlc3RUeXBlO1xuXG4gICAgLy8gUHJldmVudCBiYWNrc3BhY2UgZnJvbSBnb2luZyBiYWNrIGluIGhpc3RvcnlcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2tleWRvd24nOlxuICAgICAgICB0eXBlID0gUHJvdG9jb2wuSW5wdXQuRGlzcGF0Y2hLZXlFdmVudFJlcXVlc3RUeXBlLktleURvd247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAna2V5dXAnOlxuICAgICAgICB0eXBlID0gUHJvdG9jb2wuSW5wdXQuRGlzcGF0Y2hLZXlFdmVudFJlcXVlc3RUeXBlLktleVVwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2tleXByZXNzJzpcbiAgICAgICAgdHlwZSA9IFByb3RvY29sLklucHV0LkRpc3BhdGNoS2V5RXZlbnRSZXF1ZXN0VHlwZS5DaGFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gdHlwZSA9PT0gJ2NoYXInID8gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcGFyYW1zOiBQcm90b2NvbC5JbnB1dC5EaXNwYXRjaEtleUV2ZW50UmVxdWVzdCA9IHtcbiAgICAgIHR5cGUsXG4gICAgICB0ZXh0LFxuICAgICAgdW5tb2RpZmllZFRleHQ6IHRleHQgPyB0ZXh0LnRvTG93ZXJDYXNlKCkgOiB1bmRlZmluZWQsXG4gICAgICBrZXlJZGVudGlmaWVyOiAoZXZlbnQgYXMgYW55KS5rZXlJZGVudGlmaWVyLFxuICAgICAgY29kZTogZXZlbnQuY29kZSxcbiAgICAgIGtleTogZXZlbnQua2V5LFxuICAgICAgd2luZG93c1ZpcnR1YWxLZXlDb2RlOiBldmVudC5rZXlDb2RlLFxuICAgICAgbmF0aXZlVmlydHVhbEtleUNvZGU6IGV2ZW50LmtleUNvZGUsXG4gICAgICBhdXRvUmVwZWF0OiBmYWxzZSxcbiAgICAgIGlzS2V5cGFkOiBmYWxzZSxcbiAgICAgIGlzU3lzdGVtS2V5OiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy53c0NsaWVudC5zZW5kKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb21tYW5kOiAnSW5wdXQuZGlzcGF0Y2hLZXlFdmVudCcsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBkb1JlbG9hZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLndzQ2xpZW50LnNlbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbW1hbmQ6ICdQYWdlLnJlbG9hZCcsXG4gICAgICAgIHBhcmFtczoge30sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25TY3JlZW5jYXN0RnJhbWUgPSAoZGF0YTogUHJvdG9jb2wuUGFnZS5TY3JlZW5jYXN0RnJhbWVFdmVudCk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdSdW5uZXIgb25TY3JlZW5jYXN0RnJhbWUuIGRhdGE6JywgZGF0YSk7XG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1J1bm5lciBvblNjcmVlbmNhc3RGcmFtZSBvbmxvYWQsIGN0eDonLCB0aGlzLmN0eCk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDAsIHRoaXMuJGNhbnZhcy53aWR0aCwgdGhpcy4kY2FudmFzLmhlaWdodCk7XG4gICAgfTtcbiAgICB0aGlzLmltZy5zcmMgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7ZGF0YS5kYXRhfWA7XG4gICAgdGhpcy53c0NsaWVudC5zZW5kKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb21tYW5kOiAnUGFnZS5zY3JlZW5jYXN0RnJhbWVBY2snLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzZXNzaW9uSWQ6IGRhdGEuc2Vzc2lvbklkLFxuICAgICAgICB9IGFzIFByb3RvY29sLlBhZ2UuU2NyZWVuY2FzdEZyYW1lQWNrUmVxdWVzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBiaW5kS2V5RXZlbnRzID0gKCk6IHZvaWQgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZW1pdEtleUV2ZW50LCB0cnVlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5lbWl0S2V5RXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmVtaXRLZXlFdmVudCwgdHJ1ZSk7XG4gIH07XG5cbiAgdW5iaW5kS2V5RXZlbnRzID0gKCk6IHZvaWQgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZW1pdEtleUV2ZW50LCB0cnVlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5lbWl0S2V5RXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmVtaXRLZXlFdmVudCwgdHJ1ZSk7XG4gIH07XG5cbiAgYWRkTGlzdGVuZXJzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuJGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmVtaXRNb3VzZSwgZmFsc2UpO1xuICAgIHRoaXMuJGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5lbWl0TW91c2UsIGZhbHNlKTtcbiAgICB0aGlzLiRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuZW1pdE1vdXNlLCBmYWxzZSk7XG4gICAgdGhpcy4kY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZW1pdE1vdXNlLCBmYWxzZSk7XG5cbiAgICB0aGlzLiRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYmluZEtleUV2ZW50cywgZmFsc2UpO1xuICAgIHRoaXMuJGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy51bmJpbmRLZXlFdmVudHMsIGZhbHNlKTtcblxuICAgIC8vIHRoaXMuJHZlcnRpY2FsUmVzaXplci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVmVydGljYWxSZXNpemUpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplUGFnZSk7XG5cbiAgICAvLyBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJyk7XG4gICAgLy8gaWYgKGJhY2tCdXR0b24pIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvQmFjaywgZmFsc2UpO1xuICAgIC8vIGNvbnN0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZC1idXR0b24nKTtcbiAgICAvLyBpZiAoZm9yd2FyZEJ1dHRvbikgZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29CYWNrLCBmYWxzZSk7XG4gICAgY29uc3QgcmVsb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZC1idXR0b24nKTtcbiAgICBpZiAocmVsb2FkQnV0dG9uKSByZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvUmVsb2FkLCBmYWxzZSk7XG4gIH07XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcbiAgICB0aGlzLiRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5lbWl0TW91c2UsIGZhbHNlKTtcbiAgICB0aGlzLiRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZW1pdE1vdXNlLCBmYWxzZSk7XG4gICAgdGhpcy4kY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLmVtaXRNb3VzZSwgZmFsc2UpO1xuICAgIHRoaXMuJGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmVtaXRNb3VzZSwgZmFsc2UpO1xuXG4gICAgdGhpcy4kY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmJpbmRLZXlFdmVudHMsIGZhbHNlKTtcbiAgICB0aGlzLiRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMudW5iaW5kS2V5RXZlbnRzLCBmYWxzZSk7XG5cbiAgICAvLyB0aGlzLiR2ZXJ0aWNhbFJlc2l6ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZlcnRpY2FsUmVzaXplKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZVBhZ2UpO1xuICB9O1xuXG4gIHJlc2l6ZVBhZ2UgPSBkZWJvdW5jZShcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuJHZpZXdlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdGhpcy4kY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLiRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB0aGlzLndzQ2xpZW50LnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjb21tYW5kOiAnUGFnZS5zZXRWaWV3cG9ydCcsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB3aWR0aDogTWF0aC5mbG9vcih3aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguZmxvb3IoaGVpZ2h0KSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAxLFxuICAgICAgICAgICAgbW9iaWxlOiB0cnVlLFxuICAgICAgICAgIH0gYXMgUHJvdG9jb2wuUGFnZS5TZXREZXZpY2VNZXRyaWNzT3ZlcnJpZGVSZXF1ZXN0LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LFxuICAgIDUwMCxcbiAgICB7IGlzSW1tZWRpYXRlOiB0cnVlIH1cbiAgKTtcblxuICBjbG9zZSA9IG9uY2UoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgdGhpcy5vbkNsb3NlKC4uLmFyZ3MpO1xuICAgIHRoaXMud3NDbGllbnQuY2xvc2UoKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy51bmJpbmRLZXlFdmVudHMoKTtcbiAgfSk7XG5cbiAgc2hvd0Vycm9yID0gKGVycjogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy4kbW91bnQuaW5uZXJIVE1MID0gYCR7ZXJyb3JIVE1MKGVycil9YDtcbiAgfTtcblxuICBvbldlYlNvY2tldFNldHVwQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRtb3VudC5pbm5lckhUTUwgPSBydW5uZXJIVE1MO1xuICAgIC8vIHRoaXMuJGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXZ0b29scy1tb3VudCcpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIHRoaXMuJHZpZXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLiRjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NyZWVuY2FzdCcpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIC8vIHRoaXMuJHZlcnRpY2FsUmVzaXplciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNpemUtdmVydGljYWwnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuJGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAvLyB0aGlzLiRpZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25JZnJhbWVMb2FkKTtcbiAgICAvLyB0aGlzLiRpZnJhbWUuc3JjID0gaWZyYW1lVVJMO1xuXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnJlc2l6ZVBhZ2UoKTtcblxuICAgIGNvbnN0IHBhcmFtczogUHJvdG9jb2wuUGFnZS5TdGFydFNjcmVlbmNhc3RSZXF1ZXN0ID0ge1xuICAgICAgZm9ybWF0OiAnanBlZycsXG4gICAgICBxdWFsaXR5OiAxMDAsXG4gICAgICBldmVyeU50aEZyYW1lOiAxLFxuICAgIH07XG4gICAgdGhpcy53c0NsaWVudC5zZW5kKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb21tYW5kOiAnUGFnZS5zdGFydFNjcmVlbmNhc3QnLFxuICAgICAgICBwYXJhbXMsXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgc2V0dXBXZWJTb2NrZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy53c0NsaWVudCA9IG5ldyBXZWJTb2NrZXQoZ2V0Q29ubmVjdFVSTCgpKTtcblxuICAgIHRoaXMud3NDbGllbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldnQpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBldnQuZGF0YS50ZXh0KCk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IEpTT04ucGFyc2UodGV4dCkgYXMgQ29tbWFuZFJlc3BvbnNlO1xuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBtZXNzYWdlIHJlY2VpdmVkJyk7XG4gICAgICB0aGlzLm9uU2NyZWVuY2FzdEZyYW1lKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53c0NsaWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBvcGVuZWQnKTtcbiAgICAgIHRoaXMub25XZWJTb2NrZXRTZXR1cENvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndzQ2xpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGUpID0+IHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKGBFcnJvciBjb21tdW5pY2F0aW5nIHdpdGggd2Vic29ja2V0IHNlcnZlciAke2V9YCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndzQ2xpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RXJyb3IoYFNlc3Npb24gY29tcGxldGUhIEJyb3dzZXIgaGFzIGNsb3NlZC5gKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImV4cG9ydCB0eXBlIFNpZGVFZmZlY3RGbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IHtcbiAgaXNJbW1lZGlhdGU/OiBib29sZWFuO1xuICBtYXhXYWl0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWJvdW5jZWRGdW5jdGlvbjxGIGV4dGVuZHMgU2lkZUVmZmVjdEZuPiB7XG4gICh0aGlzOiBUaGlzUGFyYW1ldGVyVHlwZTxGPiwgLi4uYXJnczogUGFyYW1ldGVyczxGPik6IHZvaWQ7XG4gIGNhbmNlbDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPEYgZXh0ZW5kcyBTaWRlRWZmZWN0Rm4+KFxuICBmdW5jOiBGLFxuICB3YWl0TWlsbGlzZWNvbmRzID0gNTAsXG4gIG9wdGlvbnM6IE9wdGlvbnMgPSB7fVxuKTogRGVib3VuY2VkRnVuY3Rpb248Rj4ge1xuICBsZXQgdGltZW91dElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNJbW1lZGlhdGUgPSBvcHRpb25zLmlzSW1tZWRpYXRlID8/IGZhbHNlO1xuICBjb25zdCB7IG1heFdhaXQgfSA9IG9wdGlvbnM7XG4gIGxldCBsYXN0SW52b2tlVGltZSA9IERhdGUubm93KCk7XG5cbiAgZnVuY3Rpb24gbmV4dEludm9rZVRpbWVvdXQoKSB7XG4gICAgaWYgKG1heFdhaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGltZVNpbmNlTGFzdEludm9jYXRpb24gPSBEYXRlLm5vdygpIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAgIGlmICh0aW1lU2luY2VMYXN0SW52b2NhdGlvbiArIHdhaXRNaWxsaXNlY29uZHMgPj0gbWF4V2FpdCkge1xuICAgICAgICByZXR1cm4gbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3YWl0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgY29uc3QgZGVib3VuY2VkRnVuY3Rpb24gPSBmdW5jdGlvbiAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj4pIHtcbiAgICBjb25zdCBpbnZva2VGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmICghaXNJbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvdWxkQ2FsbE5vdyA9IGlzSW1tZWRpYXRlICYmIHRpbWVvdXRJZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG5cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGludm9rZUZ1bmN0aW9uLCBuZXh0SW52b2tlVGltZW91dCgpKTtcblxuICAgIGlmIChzaG91bGRDYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICBkZWJvdW5jZWRGdW5jdGlvbi5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3Qgb25jZSA9IDxBIGV4dGVuZHMgYW55W10sIFIsIFQ+KFxuICBmbjogKHRoaXM6IFQsIC4uLmFyZzogQSkgPT4gUlxuKTogKCh0aGlzOiBULCAuLi5hcmc6IEEpID0+IFIgfCB1bmRlZmluZWQpID0+IHtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiBULCAuLi5hcmdzOiBBKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hc3NpZ25cbiAgICByZXR1cm4gZG9uZSA/IHVuZGVmaW5lZCA6ICgoZG9uZSA9IHRydWUpLCBmbi5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG5uZXcgQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=