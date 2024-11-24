/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n.board-container {\n    display: grid;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    width: 100%;\n    height: auto;\n}\n\n.grid-cell {\n    background-color: lightgray;\n    border: 1px solid grey;\n    box-sizing: border-box;\n    height: 40px;\n    width: 40px;\n}\n\n#players, form {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    gap: 100px;\n}\n\n.players {\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n}\n\n.players div:first-child {\n    text-align: center;\n    font-size: 32px;\n}\n\n\n\n#player1 .ship {\n    background-color: navy;\n}\n\n.hit-spot, .missed-spot {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    font-size: 20px;\n}\n\n\n.hit-spot::before {\n    content: \"🔴\";\n}\n.missed-spot::before {\n    content: \"❌\";\n}\n\nbutton {\n  display: block;\n  margin: 0 auto;\n}\n\nform div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px; \n    padding: 10px; \n    border: 1px solid #ccc;\n    border-radius: 8px;\n    background-color: #f9f9f9;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\nform div input[type=\"text\"] {\n    font-size: 14px; \n    padding: 5px; \n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n\n.checkbox-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.checkbox-container label {\n  margin-right: 5px;\n}\n\n.ship-input {\n    width: 15px;\n}\n\n.ship-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.active {\n    border: 5px solid green;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DomEventHandler.js":
/*!********************************!*\
  !*** ./src/DomEventHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameloop: () => (/* binding */ gameloop),\n/* harmony export */   initGame: () => (/* binding */ initGame),\n/* harmony export */   playerTurn: () => (/* binding */ playerTurn)\n/* harmony export */ });\n/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ \"./src/renderBoard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n// Handles attack when a click happens, returns a promise when attack is concluded\nconst handleAttack = (e, enemyPlayer, enemyBoardElement) => {\n    return new Promise((resolve, reject) => {\n        if (e.target.classList.contains('grid-cell')) {\n            const [x, y] = e.target.dataset.coord.split(',').map(Number)\n            try {\n                const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)\n                ;(0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(enemyPlayer.gameboard, enemyBoardElement)\n                if (!attackResult) {\n                    resolve() // Resolve for a miss\n                }\n            } catch (error) {\n                console.error('Error: You cannot attack the same spot twice')\n                reject()\n            }\n        } else {\n            reject()\n        }\n    })\n}\n\n// Handles player's turn\nconst playerTurn = async (\n    currentPlayer,\n    enemyPlayer,\n    enemyBoardElement,\n    currentPlayerBoardElement\n) => {\n    if (currentPlayer.computer) {\n        switchActiveBoard(enemyBoardElement, currentPlayerBoardElement)\n        let continueTurn = currentPlayer.makeMove(enemyPlayer)\n        ;(0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(enemyPlayer.gameboard, enemyBoardElement)\n        if (!continueTurn)\n            await new Promise((resolve) => setTimeout(resolve, 1000))\n        while (continueTurn) {\n            await new Promise((resolve) => setTimeout(resolve, 1000))\n            continueTurn = currentPlayer.makeMove(enemyPlayer)\n            ;(0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(enemyPlayer.gameboard, enemyBoardElement)\n        }\n        switchActiveBoard(enemyBoardElement, currentPlayerBoardElement)\n        return\n    } else {\n        return new Promise((resolve) => {\n            const handleClick = async (e) => {\n                try {\n                    await handleAttack(e, enemyPlayer, enemyBoardElement)\n                    enemyBoardElement.removeEventListener('click', handleClick)\n                    resolve()\n                } catch {\n                    console.log('Invalid move, waiting for next human action')\n                }\n            }\n            enemyBoardElement.addEventListener('click', handleClick)\n        })\n    }\n}\n\nconst switchActiveBoard = (board1, board2) => {\n    board1.parentElement.classList.toggle('active')\n    board2.parentElement.classList.toggle('active')\n}\n\nconst gameloop = async (\n    player1,\n    player2,\n    player1Board,\n    player2Board\n) => {\n    player2Board.parentElement.classList.toggle('active')\n    while (\n        !player1.gameboard.areShipsSunk() &&\n        !player2.gameboard.areShipsSunk()\n    ) {\n        await playerTurn(player1, player2, player2Board, player1Board)\n        if (!player2.gameboard.areShipsSunk()) {\n            await playerTurn(player2, player1, player1Board, player2Board)\n        }\n    }\n}\n\nconst initGame = () => {\n    const initBtn = document.getElementById('init-btn')\n    const player1Board = document.getElementById('board1')\n    const player2Board = document.getElementById('board2')\n\n    async function handleInitGameClick() {\n        initBtn.disabled = true\n        initBtn.textContent = 'Start Game'\n\n        const players = computerToggleHandler()\n        ;(0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(players[0].gameboard, player1Board)\n        ;(0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(players[1].gameboard, player2Board)\n\n        await Promise.all(\n            players.map(async (player, i) => {\n                const board = document.getElementById(`board${i + 1}`)\n                if (!player.computer) {\n                    await addShipHandler(player, board)\n                } else {\n                    await generateComputerShips(player)\n                }\n            })\n        )\n        initBtn.disabled = false\n\n        // Re-attach the second click handler\n        initBtn.removeEventListener('click', handleInitGameClick)\n        initBtn.addEventListener('click', () => {\n            initBtn.remove()\n            const form = document.getElementById('player-form')\n            form.classList.add('hidden')\n            gameloop(players[0], players[1], player1Board, player2Board)\n        })\n    }\n\n    // Attach the handler\n    initBtn.addEventListener('click', handleInitGameClick)\n}\n\nconst handlePlayerCreation = (isHuman) => {\n    if (isHuman) {\n        return new _player__WEBPACK_IMPORTED_MODULE_1__.Player()\n    }\n    return new _player__WEBPACK_IMPORTED_MODULE_1__.Player(false)\n}\nconst computerToggleHandler = () => {\n    const players = []\n    const checkBoxes = document.querySelectorAll('.computer-toggle')\n    checkBoxes.forEach((checkBox) => {\n        if (!checkBox.checked) {\n            checkBox.parentElement.nextElementSibling.classList.remove('hidden')\n            players.push(handlePlayerCreation(true))\n        } else {\n            players.push(handlePlayerCreation(false))\n        }\n    })\n    return players\n}\n\nconst addShipHandler = (player, board) => {\n    return new Promise((resolve) => {\n        let shipSize = 1\n        const addShipBtns = document.querySelectorAll('.add-ship-btn')\n        addShipBtns.forEach((btn) => {\n            btn.addEventListener('click', (e) => {\n                const parent = e.target.parentElement\n                const xInput = parent.querySelector(\n                    'input[name=\"ship-x\"]'\n                ).value\n                const yInput = parent.querySelector(\n                    'input[name=\"ship-y\"]'\n                ).value\n                const orientation = parent.querySelector(\n                    'select[name=\"orientation\"]'\n                ).value\n                const shipData = {\n                    x: Number(xInput) - 1,\n                    y: Number(yInput) - 1,\n                    orientation: orientation,\n                }\n                const shipSizeLabel = parent.querySelector('label')\n                if (\n                    player.gameboard.placeShip(\n                        shipSize,\n                        shipData.x,\n                        shipData.y,\n                        shipData.orientation\n                    )\n                ) {\n                    (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(player.gameboard, board)\n                    shipSizeLabel.textContent = `Ship size: ${++shipSize}`\n                    if (shipSize > 5) {\n                        btn.disabled = true\n                        resolve()\n                    }\n                } else {\n                    alert('Invalid ship placement')\n                }\n            })\n        })\n    })\n}\n\nconst generateComputerShips = (player) => {\n    return new Promise((resolve) => {\n        const maxShips = 5\n        let shipSize = 1\n\n        while (shipSize <= maxShips) {\n            const x = Math.floor(Math.random() * 10)\n            const y = Math.floor(Math.random() * 10)\n            const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical'\n            let validPlacement = true\n\n            if (orientation === 'horizontal') {\n                if (x + shipSize > 10) {\n                    validPlacement = false\n                }\n            } else if (y + shipSize > 10) {\n                validPlacement = false\n            }\n\n            if (\n                validPlacement &&\n                player.gameboard.placeShip(shipSize, x, y, orientation)\n            ) {\n                shipSize++\n            }\n        }\n        resolve()\n    })\n}\n\n\n//# sourceURL=webpack://battleship/./src/DomEventHandler.js?");

/***/ }),

/***/ "./src/ganeboard.js":
/*!**************************!*\
  !*** ./src/ganeboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n    boardPositions = new Map()\n    ships = new Set()\n    constructor(size) {\n        this.size = size || 10\n    }\n    // Places ship object on occupied positions based on orientation\n    placeShip(shipSize, x, y, orientation = 'horizontal') {\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize)\n        this.ships.add(ship)\n        const positions = []\n        // Get coords based on orientation\n        for (let i = 0; i < shipSize; i++) {\n            const posX = orientation === 'horizontal' ? x + i : x\n            const posY = orientation === 'vertical' ? y + i : y\n            // Check if trying to place out of bounds\n            this.#checkBounds(posX, posY)\n            const key = `${posX}, ${posY}`\n            // If there's a ship on the path, return false\n            if (this.boardPositions.has(key)) {\n                return false\n            }\n            positions.push(key)\n        }\n        // Set the positions the ship occupies\n        positions.forEach((position) => {\n            this.#addCoordinatesData(position, ship)\n        })\n        return true\n    }\n    // Checks if hit, record position and return true or record miss and return false\n    receiveAttack(x, y) {\n        this.#checkBounds(x, y)\n        const key = `${x}, ${y}`\n        if (this.boardPositions.has(key)) {\n            const entry = this.boardPositions.get(key)\n            if (entry.event !== null) {\n                throw new Error('You have already attacked here.')\n            }\n            if (entry.ship !== null) {\n                entry.ship.hit()\n                if (entry.ship.isSunk()) {\n                    this.ships.delete(entry.ship)\n                }\n                entry.event = 'hit'\n                return true\n            }\n        }\n        this.#addCoordinatesData(key, null, 'miss')\n        return false\n    }\n    areShipsSunk() {\n        if (this.ships.size === 0) return true\n        return false\n    }\n    // Helper function to check boundary\n    #checkBounds(x, y) {\n        if (x >= this.size || y >= this.size)\n            throw new Error('Unable to place out of board bounds')\n    }\n    // Helper method to set coordinate data for ships/attacks\n    #addCoordinatesData(key, obj = null, event = null) {\n        this.boardPositions.set(key, { ship: obj, event: event })\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ganeboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBoard */ \"./src/renderBoard.js\");\n/* harmony import */ var _DomEventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomEventHandler */ \"./src/DomEventHandler.js\");\n\n\n\n\n\n\n// let player1 = new Player('Player 1')\n// let player2 = new Player('Player 2', false)\n// const player1Board = document.getElementById('board1')\n// const player2Board = document.getElementById('board2')\n// const player1Name = document.getElementById('player1-name')\n// const player2Name = document.getElementById('player2-name')\n// player1Name.textContent = player1.name\n// player2Name.textContent = player2.name\n\n// player1.gameboard.placeShip(5, 0, 0)\n// player1.gameboard.placeShip(4, 0, 2, 'vertical')\n// player2.gameboard.placeShip(5, 0, 0, 'vertical')\n// player2.gameboard.placeShip(4, 2, 0)\n// player1.gameboard.receiveAttack(0, 0)\n// player1.gameboard.receiveAttack(0, 1)\n// player2.gameboard.receiveAttack(0, 0)\n// player2.gameboard.receiveAttack(0, 7)\n// renderBoard(player1.gameboard, player1Board)\n// renderBoard(player2.gameboard, player2Board)\n\n\n(0,_DomEventHandler__WEBPACK_IMPORTED_MODULE_3__.initGame)()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ganeboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ganeboard */ \"./src/ganeboard.js\");\n\n\n// Creates human players by default unless specified otherwise\nclass Player {\n    constructor(human = true, size) {\n        this.computer = !human\n        this.gameboard = new _ganeboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(size)\n        this.attackedCoords = new Map()\n    }\n    makeMove(enemyPlayer) {\n        return this.#computerTurn(enemyPlayer)\n    }\n    #computerTurn(enemyPlayer) {\n        const [x, y] = this.#getRandomizedCoordinates()\n        const key = `${x}, ${y}`\n        if(!this.attackedCoords.has(key)){\n            const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)\n            this.attackedCoords.set(key, true)\n            return attackResult\n        }\n        return true\n    }\n    #getRandomizedCoordinates() {\n        return [\n            getRandomInt(this.gameboard.size),\n            getRandomInt(this.gameboard.size),\n        ]\n    }\n}\n\nconst getRandomInt = (max) => Math.floor(Math.random() * max)\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\nconst renderBoard = (board, boardElement) => {\n    const fragment = document.createDocumentFragment()\n    for (let row = 0; row < board.size; row++) {\n        for (let col = 0; col < board.size; col++) {\n            const div = document.createElement('div')\n            div.className = 'grid-cell'\n            div.dataset.coord = `${col}, ${row}`\n            if (board.boardPositions.has(div.dataset.coord)) {\n                const entry = board.boardPositions.get(div.dataset.coord)\n                if (entry.ship !== null) {\n                    div.classList.add('ship')\n                }\n                if (entry.event === 'hit') {\n                    div.classList.add('hit-spot')\n                }\n                if (entry.event === 'miss') {\n                    div.classList.add('missed-spot')\n                }\n            }\n            fragment.appendChild(div)\n        }\n    }\n    boardElement.innerHTML = ''\n    setGridSize(boardElement, board.size)\n    boardElement.appendChild(fragment)\n}\n\nconst setGridSize = (boardElement, size) => {\n    boardElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;\n    boardElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;\n}\n\n//# sourceURL=webpack://battleship/./src/renderBoard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.shipLength = length || 1\n        this.hits = 0\n        this.sunk = false\n    }\n    length() {\n        return this.shipLength\n    }\n    hit() {\n        this.hits++\n    }\n    isSunk() {\n        if (this.hits === this.shipLength) return true\n        return false\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;