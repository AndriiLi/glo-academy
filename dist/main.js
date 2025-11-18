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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/cart */ \"./src/module/cart.js\");\n/* harmony import */ var _module_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/catalog */ \"./src/module/catalog.js\");\n/* harmony import */ var _module_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/load */ \"./src/module/load.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/search */ \"./src/module/search.js\");\n/* harmony import */ var _module_searchOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/searchOptions */ \"./src/module/searchOptions.js\");\n\n\n\n\n\n\n(0,_module_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_searchOptions__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://o-zone/./src/index.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./src/module/env.js\");\n\n\nconst getData = () => {\n  return fetch(_env__WEBPACK_IMPORTED_MODULE_0__.DB_URL).then((response) => response.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://o-zone/./src/module/cartCrud/getData.js?\n}");

/***/ }),

/***/ "./src/module/catalog.js":
/*!*******************************!*\
  !*** ./src/module/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\n\n\n\nconst catalog = () => {\n    const btnCatalog = document.querySelector('.catalog-button > button');\n    const catalogModal = document.querySelector('.catalog');\n    const catalogModalItems = document.querySelectorAll('.catalog li');\n\n    let isOpen = false;\n\n    btnCatalog.addEventListener('click', ()=> {\n        isOpen = !isOpen;\n        catalogModal.style.display = isOpen ? 'block': '';\n    });\n\n    catalogModalItems.forEach(item => {\n        item.addEventListener('click', () => {\n            const text = item.textContent;\n            (0,_cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_1__.categoryFilter)(data, text));\n            });\n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://o-zone/./src/module/catalog.js?\n}");

/***/ }),

/***/ "./src/module/env.js":
/*!***************************!*\
  !*** ./src/module/env.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DB_URL: () => (/* binding */ DB_URL)\n/* harmony export */ });\nconst DB_URL='https://lago-glo-default-rtdb.firebaseio.com/goods.json';\n\n//# sourceURL=webpack://o-zone/./src/module/env.js?\n}");

/***/ }),

/***/ "./src/module/filters.js":
/*!*******************************!*\
  !*** ./src/module/filters.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   filterGoods: () => (/* binding */ filterGoods),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n    return goods.filter(item =>\n        item.title.toLowerCase().includes(value.toLowerCase())\n    );\n};\n\n\nconst categoryFilter =  (goods, categoryText) => {\n    return goods.filter(item => {\n        return item.category == categoryText;\n    });\n};\n\nfunction filterGoods(data, filters) {\n    const { minPrice, maxPrice, discountOnly } = filters;\n    const min = minPrice !== '' && !isNaN(minPrice) ? Number(minPrice) : null;\n    const max = maxPrice !== '' && !isNaN(maxPrice) ? Number(maxPrice) : null;\n\n    return data.filter(item => {\n        if (min !== null && max !== null && min > max) return false;\n        if (min !== null && item.price < min) return false;\n        if (max !== null && item.price > max) return false;\n\n        if (discountOnly && !item.sale) return false;\n\n        return true;\n    });\n}\n\n//# sourceURL=webpack://o-zone/./src/module/filters.js?\n}");

/***/ }),

/***/ "./src/module/load.js":
/*!****************************!*\
  !*** ./src/module/load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n\n\n\nconst load = () => {\n\n        (0,_cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((resp) => {\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resp)\n        });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://o-zone/./src/module/load.js?\n}");

/***/ }),

/***/ "./src/module/renderGoods.js":
/*!***********************************!*\
  !*** ./src/module/renderGoods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n\n\nconst renderGoods = (goods) => {\n\n    const goodsWrapper = document.querySelector('.goods');\n    goodsWrapper.innerHTML = '';\n\n    goods.forEach((goodItem) => {\n        goodsWrapper.insertAdjacentHTML('beforeend',`\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                <div class=\"card\">\n                    ${goodItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>': '' }\n                    <div class=\"card-img-wrapper\">\n                        <span class=\"card-img-top\" style=\"background-image: url(${goodItem.img})\"></span>\n                    </div>\n                    <div class=\"card-body justify-content-between\">\n                        <div class=\"card-price\">${goodItem.price}₽</div>\n                        <h5 class=\"card-title\">${goodItem.title}</h5>\n                        <button class=\"btn btn-primary\">В корзину</button>\n                    </div>\n                </div>\n            </div>\n        `);\n    });\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://o-zone/./src/module/renderGoods.js?\n}");

/***/ }),

/***/ "./src/module/search.js":
/*!******************************!*\
  !*** ./src/module/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n\n\n\n\nconst search = () => {\n    const searchInput = document.querySelector('.search-wrapper_input');\n\n    searchInput.addEventListener('input', (e) => {\n        const value = e.target.value;\n\n        (0,_cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\n        });\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://o-zone/./src/module/search.js?\n}");

/***/ }),

/***/ "./src/module/searchOptions.js":
/*!*************************************!*\
  !*** ./src/module/searchOptions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCrud/getData */ \"./src/module/cartCrud/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/module/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/module/filters.js\");\n\n\n\n\nconst searchOptions = () => {\n    const minPrice = document.getElementById('min');\n    const maxPrice = document.getElementById('max');\n    const discount = document.getElementById('discount-checkbox');\n    const discountCheckmark = document.querySelector('.filter-check_checkmark');\n\n    const applyFilters = () => {\n        (0,_cartCrud_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n            const filtered = (0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterGoods)(data, {\n                minPrice: minPrice.value,\n                maxPrice: maxPrice.value,\n                discountOnly: discount.checked\n            });\n\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filtered);\n        });\n    };\n\n    discount.addEventListener('change', (e) => {\n        discount.checked ?\n        discountCheckmark.classList.add('checked'):\n        discountCheckmark.classList.remove('checked');\n    });\n\n    minPrice.addEventListener('input', applyFilters);\n    maxPrice.addEventListener('input', applyFilters);\n    discount.addEventListener('change', applyFilters);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchOptions);\n\n//# sourceURL=webpack://o-zone/./src/module/searchOptions.js?\n}");

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