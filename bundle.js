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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Akkurat-Mono.ttf */ \"./src/Akkurat-Mono.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/loading-4.gif */ \"./src/images/loading-4.gif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n\n    --gapWidth: 20px;\n    --shadowDist: 15px;\n    --marqueeOrigin: 0%;\n    --marqueeDest: -100%;\n    --scrollProg: attr(data-scroll);\n    --navGap: 50px;\n    --zForward: 1000px;\n}\n\n\n\n@font-face {\n    font-family: 'AkkuratMono';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n\n}\n\n* {\n    box-sizing: border-box;\n\n}\n\nbody {\n    \n    margin: 0px;\n    padding: 0px;\n    background-color: white;\n    font-family: Helvetica, sans-serif;\n\n    /* height: 100%; */\n    /* overflow-x: hidden; */\n\n    cursor: pointer;\n}\n\n.bodyLock {\n    overflow: hidden;\n}\n\n.pageWrapper {\n    overflow: hidden;\n    position: relative;\n    display: none;\n}\n\n#loadScreen {\n    background-color: black;\n    background: #000 url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center;\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n    z-index: 100; \n}\n\nimg {\n    grid-column: 1 / 1;\n    grid-row: 1 / 1;\n\n    object-fit: contain;\n    height: 100%;\n    max-height: 90vh;\n\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n\n  }\n\n.width100 {\n    width: 100%;\n}\n\nvideo {\n    max-width: 100%;\n    max-height: 100%;\n\n    /* filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=20, OffY=20, Color='#444')\"; */\n\t/* filter: url(#drop-shadow); */\n\t/* -webkit-filter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65)); */\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n}\n\n.vidGallery {\n    max-height: 70vh;\n    z-index: 20;\n    /* width: 100%; */\n}\n\n.centerFrame {\n    /* width: 90vw; */\n    /* width: 95vw; */\n    /* max-height: 85vw; */\n    /* display: flex;\n    justify-content: center; */\n    /* flex-wrap: wrap; */\n    /* margin: 10px; */\n\n    /* object-fit: contain; */\n    width: 90vw;\n    flex-grow: 1;\n}\n\n.smallVid {\n    width:18vw;\n}\n\n.shadowed {\n\t/* filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=20, OffY=20, Color='#444')\"; */\n\t/* filter: url(#drop-shadow); */\n\t/* -webkit-filter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65)); */\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n}\n\nh1 {\n    /* font-style: italic; */\n\n    font-size: 40px;\n    margin: 0px;\n    padding: 0px;\n    font-weight: normal;\n}\n\n.popupSubtitle {\n    font-weight: lighter;\n}\n\n.nav {\n    padding: 5px;\n    border: 2px solid black;\n    border-radius: 15px;\n\n    z-index: 20;\n\n}\n\n#nav-IG {\n\n    position: fixed;\n    top: var(--gapWidth);\n    right: var(--gapWidth);\n\n    z-index: 25;\n\n}\n\n.nav a:visited {\n    color: black;\n    text-decoration: none;\n\n}\n\n.nav a:link {\n    color: black;\n    text-decoration: none;\n\n}\n\n#nav-about {\n\n    position: fixed;\n    top: var(--gapWidth);\n    left: var(--gapWidth);\n\n    z-index: 25;\n\n}\n\n.title {\n\n    justify-self: start;\n    align-self: start;\n\n    /* display: grid;\n    align-items: start;\n    grid-template-columns: 1fr 9fr;\n    grid-auto-rows: auto;\n    column-gap: 5px;\n    row-gap: 5px; */\n\n    width: 100%;\n    max-height: calc( 40vw - var(--gapWidth) / 2 );\n    padding: calc( var(--gapWidth) /2 );\n    /* background-color: black; */\n    color: white;\n\n    /* filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=20, OffY=20, Color='#444')\";\n\tfilter: url(#drop-shadow);\n\t-webkit-filter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65)); */\n\n}\n\n.titleSplit {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 10px;\n    margin-bottom: 20px;\n\n}\n\n.titleBg {\n    background-color: black;\n    padding: calc( var(--gapWidth) );\n\n\n}\n\n.bodyTextGlyph {\n    align-self: start;\n    display: grid;\n    place-content: center;\n    max-width: 100px;\n    height: auto;\n\n    padding: 5px;\n    transform-origin: center;\n}\n\n.noShadow {\n    filter: none;\n\n}\n\n.titleSplit .char {\n    animation: glyphSpin 8s linear infinite;\n}\n\n@keyframes glyphSpin {\n    0% {\n        transform: \n                    /* perspective(1000px)  */\n                    rotate(360deg);\n    }\n    100% {\n        transform: \n                    /* perspective(1000px)  */\n                    rotate(0deg);\n    }\n}\n\nh2 {\n    font-style: italic;\n    font-weight: normal;\n    letter-spacing: 5px;\n    margin: 0;\n\n}\n\nh3 {\n    font-size: 1.5em;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: 2px;\n    margin: 0;\n    padding: 0;\n}\n\np {\n    margin: 0;\n    padding: 0;\n    font-family: Helvetica, sans-serif;\n    /* max-width: 600px; */\n    /* line-height: 120%; */\n    font-size: 1.5em;\n\n}\n\n.underline {\n    text-decoration: underline 2px;\n    text-underline-offset: 2px;\n    text-decoration-line: underline;\n    -webkit-text-decoration-line: underline;\n    \n}\n\n.italic {\n    font-style:italic;\n}\n\na {\n    color:rgb(0, 0, 0);\n    text-decoration: underline 2px;\n    text-underline-offset: 2px;\n    text-decoration-line: underline;\n    -webkit-text-decoration-line: underline;\n}\n\na:visited {\n    color: rgb(141, 115, 253)\n}\n\n.containerLink {\n    color: white;\n    text-decoration: underline;\n}\n\n#gallery {\n\n\n    display: grid;\n    place-items: center;\n    grid-template-columns: 5fr 5fr;\n    /* grid-template-rows: auto minmax(100px, max-content); */\n    column-gap: var(--gapWidth);\n    row-gap: calc( var(--gapWidth) );\n\n    padding: var(--gapWidth);\n    width: 100%;\n\n\n}\n\n\n\n#frame {\n    justify-self: center;\n    align-self: center;\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    /* display: grid;\n    grid-template: 1fr / 1fr;\n    place-items: center; */\n\n    transform-style: preserve-3d;\n\n    width: 100%;\n    /* max-height: auto; */\n}\n\n#tjFrame {\n    justify-self: start;\n    align-self: start;\n\n\n    transform-style: preserve-3d;\n\n    width: 100%;\n\n}\n\n.popupFrame {\n\n    justify-self: center;\n    align-self: center;\n\n    display: flex;\n\n    transform-style: preserve-3d;\n\n}\n\n.negMar {\n    margin-left: -50%;\n}\n\n#frameLong {\n\n    grid-column-start: 1;\n    grid-column-end: span 2;\n    justify-self: center;\n    display: grid;\n    place-items: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n#frameSDF {\n    grid-column-start: 1;\n    grid-column-end: span 2;\n\n    display: grid;\n    grid-template: 1fr / 1fr;\n    place-items: center;\n\n    width: 100%;\n    height: 100vh;\n}\n\n\n\n\n\n#bgCanvas {\n    position: absolute;\n    top: 0px;\n    z-index: -10;\n    \n}\n\n#parallax-container {\n    display: grid;\n    /* perspective: 100px; */\n    /* height: 100vh; */\n    overflow-x: hidden;\n    overflow-y: auto;\n    transform: translate3d(0, 0, 0px);\n    transform-style: preserve-3d;\n\n}\n\n.parallax-bg {\n    transform: translateZ(0px);\n}\n\n.parallax-fg {\n    transform: translateZ(0px);\n}\n\n.model {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n#modelCanvas {\n    width: 100%;\n    height: 100%;\n    \n}\n\n#modelCanvas2 {\n    width: 100%;\n    height: 100%;\n    \n}\n\n.spin {\n    top: .5em;\n}\n\n.spin-on .parallax-container {\n    transform: translate3d( 0, 0, -5) rotateY(1deg);\n}\n\n.offSet {\n    transform: rotate(-2deg);\n}\n\n\n\n#popup {\n\n    --scrollProg: attr(data-scroll);\n\n    position: fixed;\n    top: calc( var(--gapWidth) + var(--navGap) );\n    /* margin: auto; */\n    left: var(--gapWidth);\n    right: var(--gapWidth);\n\n\n    height: 0px;\n\n    background-color: black;\n    color: white;\n\n    z-index: 15;\n    -webkit-transform:translate3d(0,0, 1000px);\n    /* transform: translate3d(0, 0, 1000px);\n    -webkit-transform: translate3d(0, 0, 1000px); */\n\n    transform-style: preserve-3d;\n\n    overflow-y: scroll;\n\n    transition: height 1.5s;\n\n    filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=20, OffY=20, Color='#444')\";\n\tfilter: url(#drop-shadow);\n\t-webkit-filter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n    \n}\n\n.pop {\n\n    height: calc( 98vh - var(--gapWidth) - var(--navGap) ) !important;\n    /* top: calc( var(--gapWidth) + var(--navGap) ); */\n    /* bottom: var(--gapWidth); */\n   \n}\n\n.zForward {\n    transform: translate3d(0, 0, var(--zForward) );\n    -webkit-transform: translate3d(0, 0, var(--zForward));   \n}\n\n#popupAbout {\n\n    --scrollProg: attr(data-scroll);\n\n    position: fixed;\n    top: calc( var(--gapWidth) + var(--navGap) );\n    /* margin: auto; */\n    left: var(--gapWidth);\n    right: var(--gapWidth);\n\n    height: 0px;\n\n    background-color: black;\n    color: white;\n\n    z-index: 15;\n    overflow-y: scroll;\n\n    transition: height 1.5s;\n\n    filter: \"progid:DXImageTransform.Microsoft.Dropshadow(OffX=20, OffY=20, Color='#444')\";\n\tfilter: url(#drop-shadow);\n\t-webkit-filter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n\tfilter: drop-shadow(var(--shadowDist) var(--shadowDist) 3px rgba(0,0,0,0.65));\n\n \n    display: none;\n\n}\n\n\n\n.popPadding {\n    width: 100%;\n    /* max-height: 100%; */\n    /* width: calc( 100% - var(--gapWidth) ); */\n    display: flex;\n    /* align-items: flex-start; */\n    flex-wrap: wrap; \n    /* align-items: stretch; */\n    /* gap: calc( var(--gapWidth) ); */\n    --sidePadding: calc( var(--gapWidth) / 2);\n    padding-top: var(--sidePadding);\n    padding-right: var(--sidePadding);\n    padding-bottom: calc( var(--gapWidth) * 2);\n    padding-left: var(--sidePadding);\n\n    /* overflow-y: scroll; */\n\n\n\n}\n\n#popMarquee {\n    display: flex;\n    justify-content: space-between;\n\n    position: absolute;\n    bottom: var(--gapWidth);\n    left: calc( var(--gapWidth) + 0.5% );\n    right: var(--gapWidth);\n\n    max-width: calc( 97.5% - var(--gapWidth) );\n\n    overflow-x: hidden;\n    z-index: 20;\n    /* margin: auto; */\n    visibility: hidden;\n\n    color: white;\n}\n\n#popMarquee2 {\n    display: flex;\n    justify-content: space-between;\n\n    position: absolute;\n    bottom: var(--gapWidth);\n    left: calc( var(--gapWidth) + 0.5% );\n    right: var(--gapWidth);\n\n    max-width: calc( 97.5% - var(--gapWidth) );\n\n    overflow-x: hidden;\n    z-index: 20;\n    /* margin: auto; */\n    visibility: hidden;\n\n    color: white;\n}\n\n#marqueeContainer {\n    max-height: var(--h2Height);\n    min-width: 200%;\n    display: flex;\n    justify-content: space-between;\n}\n\n#marqueeCar {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n\n    /* font-style: italic; */\n\n    animation: marquee 15s linear infinite;\n}\n\n@-moz-keyframes marquee {\n    0%   { -moz-transform: translateX( var(--marqueeOrigin) ); }\n    100% { -moz-transform: translateX( var(--marqueeDest) ); }\n   }\n   @-webkit-keyframes marquee {\n    0%   { -webkit-transform: translateX( var(--marqueeOrigin) ); }\n    100% { -webkit-transform: translateX( var(--marqueeDest) ); }\n   }\n   @keyframes marquee {\n    0%   { \n    -moz-transform: translateX( var(--marqueeOrigin) ); /* Firefox bug fix */\n    -webkit-transform: translateX( var(--marqueeOrigin) ); /* Firefox bug fix */\n    transform: translateX( var(--marqueeOrigin) ); \t\t\n    }\n    100% { \n    -moz-transform: translateX( var(--marqueeDest) ); /* Firefox bug fix */\n    -webkit-transform: translateX( var(--marqueeDest) ); /* Firefox bug fix */\n    transform: translateX( var(--marqueeDest) ); \n    }\n}\n\n#marqueeCar2 {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n\n    transform: translateX( 100% );\n}\n\n\n\n.popupHeader {\n    display: flex;\n    width: 100%;\n    /* justify-content: space-between; */\n    /* justify-items: start; */\n    /* align-items: start; */\n    /* grid-template-columns: 3fr 7fr;\n    grid-auto-rows: auto; */\n    /* column-gap: 15px; */\n    gap: 15px;\n    margin-bottom: 3rem;\n}\n\n.leftBit {\n    display: inline-block;\n    margin-right: 15px;\n    /* place-self: start; */\n    /* width: 100%; */\n    /* word-wrap: break-word; */\n}\n\n.rightBit {\n    display: inline-block;\n\n    /* width: 100%; */\n\n\n}\n.lighter {\n    font-weight: lighter;\n}\n\n.bold {\n    font-weight: bold;\n\n}\n\n.split {\n\n    margin-left: -53%;\n    \n    grid-column: 1 / 1;\n    grid-row: 1 / 1;\n\n    display: grid;\n    grid-template: 1fr / 1fr;\n    place-items: center;\n\n    font-family: 'AkkuratMono';\n    font-size: 0.5vw;\n    --deg: calc(360deg / var(--numchs));\n    --fTracking: calc( 100vw * ( 0.75 / var(--numchs) ) );\n    letter-spacing: var(--fTracking);\n    --scrollDeg: calc( 1deg * attr(data-scroll) );\n\n    will-change: transform;\n    transform-style: preserve-3d;\n    animation: animate 8s linear infinite;\n    /* transform: rotateY( var(--rotateAmount) ) rotateX( var(--rotateXAmt) ) !important; */\n\n    -moz-transition    : all 0.5s ease-out;\n    -o-transition      : all 0.5s ease-out;\n    -webkit-transition : all 0.5s ease-out;\n    transition         : all 0.5s ease-out;\n\n    visibility: visible;\n\n}\n\n@keyframes animate {\n    0% {\n        transform:  rotateY(360deg) rotateX(15deg);\n    }\n    100% {\n        transform:  rotateY(0deg) rotateX(15deg);\n    }\n}\n\n.split .char {\n\n    grid-column: 1 / 1;\n    grid-row: 1 / 1;\n\n    top: 0;\n    left: 0;\n    padding: 0.3vw 0vw 0.3vw 0.3vw;\n    background: white;\n    color: black;\n    font-size: 4em;\n    /* padding: 1px 1px 1px; */\n    border-top: 0.17vw solid black;\n    border-bottom: 0.17vw solid black;\n    transform-style: preserve-3d;\n    transform-origin: center;\n    --sFactor: calc( ( var(--fSize) ) + ( var(--fTracking) * 13 ) );\n    transform: rotateY( calc( var(--char-index) * var(--deg))) translateZ( var(--sFactor) );\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.visible {\n    visibility: visible;\n}\n\n.imgPad {\n    padding: 5vw;\n}\n\n\n\n.centerElement {\n    display: flex;\n    justify-content: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio2021/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio2021/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://portfolio2021/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio2021/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio2021/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Akkurat-Mono.ttf":
/*!******************************!*\
  !*** ./src/Akkurat-Mono.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b2efb3bfe51172fb39e.ttf\";\n\n//# sourceURL=webpack://portfolio2021/./src/Akkurat-Mono.ttf?");

/***/ }),

/***/ "./src/images/loading-4.gif":
/*!**********************************!*\
  !*** ./src/images/loading-4.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18e3767276731f0ab7ec.gif\";\n\n//# sourceURL=webpack://portfolio2021/./src/images/loading-4.gif?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_images_loading_4_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/loading-4.gif */ \"./src/images/loading-4.gif\");\n\n\n\n\nlet body = document.body;\n\nlet root = document.querySelector(':root');\n\nlet marqueeContainer = document.getElementById('marqueeContainer');\n\nlet aboutButton = document.getElementById('nav-about');\n\n// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === \"[object SafariRemoteNotification]\"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));\nif(navigator.userAgent.indexOf(\"Safari\") != -1 && navigator.userAgent.search(\"Chrome\") < 0) {\n    console.log('youre on safari');\n    let sheet = document.styleSheets[0];\n    let rules = sheet.cssRules || sheet.rules;\n\n    rules[5].style.filter = 'none';\n    rules[6].style.filter = 'none';\n    rules[7].style.filter = 'none';\n\n\n}\n\n// function scrollToTop () {\n//     // console.log('top click');\n\n//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });\n\n// };\n\n// aboutButton.addEventListener( 'click', throttle(scrollToTop) );\n\n// GRID\n\nfunction setGrid() {\n    // var gridHeight = $(document).height(); \n\n    let html = document.documentElement;\n\n    var height = Math.max( body.scrollHeight, body.offsetHeight, \n                       html.clientHeight, html.scrollHeight, html.offsetHeight );\n                       \n    // var gridHeight = document.body.scrollHeight; // * 7\n    \n    let gridHeight = height * 2;\n    let gridWidth = window.innerWidth; // * 3\n\n    const bgCanvas = document.getElementById('bgCanvas');\n    \n    bgCanvas.setAttribute(\"height\", gridHeight);\n    bgCanvas.setAttribute(\"width\", gridWidth);\n    \n    const ctx = bgCanvas.getContext('2d');\n    \n    ctx.strokeStyle = 'gray';\n    ctx.lineWidth = 1;\n    const lineSpace = 50;\n\n    var gridRows = gridHeight / lineSpace;\n\n    for (let i = 1; i < gridRows; i++) {\n        ctx.beginPath();\n        ctx.moveTo( 0, i * lineSpace );\n        ctx.lineTo( gridWidth, i * lineSpace );\n        ctx.stroke();\n    }\n\n    var gridCols = gridWidth / lineSpace;\n  \n    for (let i = 1; i < gridCols; i++) {\n        ctx.beginPath();\n        ctx.moveTo( i * lineSpace, 0 );\n        ctx.lineTo( i * lineSpace, gridHeight);\n        ctx.stroke();\n    }\n    \n}\n\n// setGrid();\n\nfunction gridDelay() {\n    setTimeout(setGrid, 100);\n};\n\n\n\n\nwindow.addEventListener('load', gridDelay);\n\nwindow.addEventListener('resize', setGrid);\n\n// POPUP\n\nlet popMarquee = document.getElementById('popMarquee');\nlet popMarquee2 = document.getElementById('popMarquee2');\n\nlet popupArray = document.querySelectorAll(\"#popup\");\n\nlet popupAbout = document.getElementById('popupAbout');\n\n\n\ndocument.querySelectorAll(\".vidGallery\").forEach(item => {\n    item.addEventListener(\"click\", function (e) {\n        e.stopPropagation();\n      }); \n\n});\n\nlet autoVideos = document.querySelectorAll(\".autoVideo\");\n\nlet popupVideos = document.querySelectorAll(\".vidGallery\");\n\nautoVideos[0].addEventListener('loadeddata', (e) => {\n \n       document.getElementById('loadScreen').style.display = \"none\";;       \n \n });\n \n\n\nfunction respondToVisibility(element, callback) {\n    var options = {\n      root: null,\n      threshold: 0.5,\n\n    };\n  \n    var observer = new IntersectionObserver((entries, observer) => {\n      entries.forEach(entry => {\n        callback(entry.intersectionRatio > 0);\n      });\n    }, options);\n  \n    observer.observe(element);\n  }\n\n\n\n// LAZY LOAD\n\nlet images = document.getElementsByTagName('img'); \nArray.from(images).forEach(item => {\n    item.setAttribute('data-src', item.src);\n    item.src = _src_images_loading_4_gif__WEBPACK_IMPORTED_MODULE_1__;\n\n    respondToVisibility(item, function (isVisible)\n        {\n            //alert('isVisible: ' + isVisible);\n            if(isVisible) {\n                item.src = item.dataset.src;\n            }\n            \n        });\n\n})\n\npopupVideos.forEach(video => {\n\n    respondToVisibility(video, function (isVisible)\n        {\n            //alert('isVisible: ' + isVisible);\n            if(isVisible) {\n                if ( video.readyState < 1 ) {\n                    video.load();\n\n                }    \n              \n            \n            }\n            \n        });\n\n})\n\nwindow.addEventListener(\"load\", (event) => {\n    autoVideos.forEach(item => {\n        respondToVisibility(item, function (isVisible)\n        {\n            //alert('isVisible: ' + isVisible);\n\n            var isPlaying = item.currentTime > 0 && !item.paused && !item.ended \n            && item.readyState > item.HAVE_CURRENT_DATA;\n\n            let videoPromise;\n    \n            if(isVisible) {\n                autoVideos.forEach(item => {\n                   \n                    \n                    if(!isPlaying) {\n                        videoPromise = item.play();\n                    }\n                });\n            }\n            if(!isVisible) {\n                autoVideos.forEach(item => {\n                    \n                    if(isPlaying) {\n\n                        \n                        if(videoPromise != undefined) {\n                            item.pause();\n\n                        }\n\n                    }\n                \n                });\n            }\n        });\n    \n    \n    });\n});\n\n\n\nlet popupFrame = document.querySelectorAll(\".popupFrame\").forEach(item => {\n    item.addEventListener('click', event => {\n        let popup = item.previousElementSibling;\n        const split = item.firstElementChild;\n\n        popMarquee.style.visibility = 'visible';\n        split.classList.toggle('hidden');\n        popup.classList.toggle('pop');\n        body.classList.toggle('bodyLock');\n        autoVideos.forEach(item => {\n            item.pause();\n        \n        });\n        \n        popup.onclick = function () {\n            popMarquee.style.visibility = 'hidden';\n            popup.classList.toggle('pop');\n            split.classList.toggle('hidden');\n            body.classList.toggle('bodyLock');\n            autoVideos.forEach(item => {\n                item.play();\n            \n            });\n        };        \n\n    })\n});\n\nlet popTrigger = document.querySelectorAll(\".popTrigger\").forEach(item => {\n    item.addEventListener('click', event => {\n        let popup = item.previousElementSibling;\n\n        let vis = false;\n        for (let i = 0; i < popupArray.length; i++){\n            if ( popupArray[i].classList.contains('pop') ) {\n                vis = true;\n            } \n        };\n\n        popup.classList.toggle('pop');\n        if (vis == false)body.classList.toggle('bodyLock');\n        if (vis == false)popMarquee.style.visibility = 'visible';\n\n        popup.onclick = function () {\n            popup.classList.toggle('pop');\n            if (vis == false)body.classList.toggle('bodyLock');\n            if (vis == false)popMarquee.style.visibility = 'hidden';\n\n        };         \n    });\n});\n\n\n\n// SCROLL SAVE\n\nlet rootStyle = getComputedStyle(root);\nlet gapWidth = rootStyle.getPropertyValue('--gapWidth');\nlet gapParse = parseInt(gapWidth);\n\nconst navGap = rootStyle.getPropertyValue('--navGap');\nconst navParse = parseInt(navGap);\n\n// let scrollArea = document.getElementById('parallax-container');\nlet scrollArea = document.body;\n\n\nfunction scrollPopAdjust() {\n\n    let scrollAmount = window.pageYOffset;\n\n    let scrollParse = parseInt(scrollAmount);\n\n    let totalTop = scrollParse + gapParse + navParse;\n    let totalBottom = gapParse - scrollParse;\n\n\n    for (let i = 0; i < popupArray.length; i++){\n        popupArray[i].style.top = totalTop + 'px';\n\n    }\n\n    // popupAbout.style.top = totalTop + 'px';\n\n    popMarquee.style.bottom = totalBottom + 'px';\n    \n};\n\nwindow.addEventListener( 'scroll', \n   debounce( () => scrollPopAdjust() ) \n);\n\n\nfunction debounce(func, timeout = 300){\n    let timer;\n    return (...args) => {\n      clearTimeout(timer);\n      timer = setTimeout(() => { func.apply(this, args); }, timeout);\n    };\n}\n\nfunction throttle (callback, limit) {\n    var waiting = false;                      // Initially, we're not waiting\n    return function () {                      // We return a throttled function\n        if (!waiting) {                       // If we're not waiting\n            callback.apply(this, arguments);  // Execute users function\n            waiting = true;                   // Prevent future invocations\n            setTimeout(function () {          // After a period of time\n                waiting = false;              // And allow future invocations\n            }, limit);\n        }\n    }\n}\n\n\n\n\n\n// SPLIT\n\nlet split = document.querySelectorAll(\".split\").forEach(item => {\n    // const split = document.querySelector('.split');\n    const text = item.innerHTML;\n    item.style.setProperty('--numchs', text.length);\n\n    const lengthF = 0.01765;\n    // let Ftracking = lengthF * window.innerWidth;\n    item.style.setProperty('--lengthF', lengthF);\n    \n    const splitStyle = window.getComputedStyle(item);\n    const splitFSize = splitStyle.getPropertyValue('font-size');\n    item.style.setProperty('--fSize', splitFSize);\n\n    // item.style.setProperty('--rotateAmount', 0);\n    \n    item.innerHTML = '';        \n    for ( let i = 0; i < text.length; i++ ) {\n      item.innerHTML = item.innerHTML + '<div class=\"char\" style=\"--char-index: ' + i + ';\">' + text.charAt(i) + '</div>';\n    }\n\n});\n\nlet titleSplit = document.querySelectorAll(\".titleSplit\").forEach(item => {\n    const text = item.innerHTML;\n    item.style.setProperty('--numchs', text.length);\n    \n    item.innerHTML = '';        \n    for ( let i = 0; i < text.length; i++ ) {\n      item.innerHTML = item.innerHTML + '<div class=\"char\" style=\"--char-index: ' + i + ';\">' + text.charAt(i) + '</div>';\n    }\n\n});\n\n\n\nwindow.onload = function () {\n\n    let intElemClientHeight = document.documentElement.clientHeight;\n    let heightString = intElemClientHeight + 'px';\n    document.documentElement.style.setProperty('--clientHeight', heightString);\n    document.getElementById('pageWrapper').style.display = 'block';\n    document.getElementById('popupAbout').style.display = 'block';\n\n    document.querySelectorAll(\".nav\").forEach(item => {\n       item.style.display = 'block';\n    \n    });\n    \n\n\n};\n\n\n\n//# sourceURL=webpack://portfolio2021/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio2021/./src/style.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;