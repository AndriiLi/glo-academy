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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/cart */ \"./src/module/cart.js\");\n/* harmony import */ var _module_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/second */ \"./src/module/second.js\");\n\n\n\n(0,_module_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://o-zone/./src/index.js?\n}");

/***/ }),

/***/ "./src/module/cart.js":
/*!****************************!*\
  !*** ./src/module/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\n    const cartBtn = document.getElementById('cart');\n    const cartModal = document.querySelector('.cart');\n    const cartCloseBtn = document.querySelector('.cart-close');\n\n    const openCart = () => {\n        cartModal.style.display = 'flex';\n    }\n\n    const closeCart = () => {\n        cartModal.style.display = '';\n    }\n\n    cartBtn.addEventListener('click', openCart);\n    cartCloseBtn.addEventListener('click', closeCart);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://o-zone/./src/module/cart.js?\n}");

/***/ }),

/***/ "./src/module/cartCrud/getData.js":
/*!****************************************!*\
  !*** ./src/module/cartCrud/getData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./src/module/env.js\");\n\n\nconst getData = async () => {\n    return fetch(_env__WEBPACK_IMPORTED_MODULE_0__.DB_URL).then((response) => response.json());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://o-zone/./src/module/cartCrud/getData.js?\n}");

/***/ }),

/***/ "./src/module/cartCrud/postData.js":
/*!*****************************************!*\
  !*** ./src/module/cartCrud/postData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./src/module/env.js\");\n\n\nconst postData = async (data) => {\n    return fetch(_env__WEBPACK_IMPORTED_MODULE_0__.DB_URL, {\n        method: 'POST',\n        body: JSON.stringify(data),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8'\n        }\n    })\n    .then((res) => res.json());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://o-zone/./src/module/cartCrud/postData.js?\n}");

/***/ }),

/***/ "./src/module/env.js":
/*!***************************!*\
  !*** ./src/module/env.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DB_URL: () => (/* binding */ DB_URL)\n/* harmony export */ });\nconst DB_URL='https://lago-glo-default-rtdb.firebaseio.com/goods.json';\n\n//# sourceURL=webpack://o-zone/./src/module/env.js?\n}");

/***/ }),

/***/ "./src/module/second.js":
/*!******************************!*\
  !*** ./src/module/second.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/postData */ \"./src/module/cartCrud/postData.js\");\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n\n\n\nconst second = () => {\n\n    const cartBtn = document.getElementById('cart');\n\n    cartBtn.addEventListener('click', () => {\n        (0,_cartCrud_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((resp) => {\n            // postData({\n            //     \"id\": 24,\n            //     \"title\": \"Очень старая приставка\",\n            //     \"price\": 33990,\n            //     \"sale\": false,\n            //     \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\n            //     \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\n            //     \"category\": \"Игровая приставка\"\n            // })\n        });\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\n\n//# sourceURL=webpack://o-zone/./src/module/second.js?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;