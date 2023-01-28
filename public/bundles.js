/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calc.ts":
/*!*********************!*\
  !*** ./src/Calc.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.calculater = void 0;\r\nconst calculater = () => {\r\n    let u = 20;\r\n    let o = 100;\r\n    console.log(\"the second result is : \" + (u + o));\r\n    console.log(\"Balolebwami\");\r\n    if (u <= o) {\r\n        return (console.log(\"the second result is :\" + (u + o)));\r\n    }\r\n    else {\r\n        console.log(\"Balolebwami\");\r\n    }\r\n};\r\nexports.calculater = calculater;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FsYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDUSxNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFM0IsSUFBSSxDQUFDLElBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3REO1NBQUk7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzlCO0FBQ0wsQ0FBQztBQVhhLGtCQUFVLGNBV3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWJwYWNrLy4vc3JjL0NhbGMudHM/ODI2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0ICBjb25zdCBjYWxjdWxhdGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHUgPSAyMDtcclxuICAgIGxldCBvID0gMTAwO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGUgc2Vjb25kIHJlc3VsdCBpcyA6IFwiKyh1K28pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQmFsb2xlYndhbWlcIik7XHJcbiAgICBcclxuICAgIGlmICh1PD0gbykge1xyXG4gICAgIHJldHVybiAoY29uc29sZS5sb2coXCJ0aGUgc2Vjb25kIHJlc3VsdCBpcyA6XCIgKyh1K28pKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhbG9sZWJ3YW1pXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Calc.ts\n");

/***/ }),

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formData = void 0;\r\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n        const form = document.querySelector('form');\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            const data = (0, exports.formData)(form);\r\n            console.log(data);\r\n        });\r\n    });\r\n    return values;\r\n};\r\nexports.formData = formData;\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const data = (0, exports.formData)(form);\r\n    console.log(data);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLElBQUksTUFBTSxHQUE2QixFQUFFLENBQUM7SUFFMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sSUFBSSxHQUFHLG9CQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBakJTLGdCQUFRLFlBaUJqQjtBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7QUFFL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixNQUFNLElBQUksR0FBRyxvQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlYnBhY2svLi9zcmMvZm9ybXMudHM/NTBiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybURhdGEgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICBsZXQgdmFsdWVzOiB7W3Byb3A6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcclxuICBcclxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSE7XHJcblxyXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBkYXRhID0gZm9ybURhdGEoZm9ybSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst forms = __importStar(__webpack_require__(/*! ../src/forms */ \"./src/forms.ts\"));\r\nconst Calc = __importStar(__webpack_require__(/*! ../src/Calc */ \"./src/Calc.ts\"));\r\nforms.formData;\r\nCalc.calculater();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUF5QztBQUN6QyxtRkFBbUM7QUFDbkMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2VicGFjay8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqICBhcyAgZm9ybXMgZnJvbSAgXCIuLi9zcmMvZm9ybXNcIjsgXHJcbmltcG9ydCAqIGFzIENhbGMgZnJvbSBcIi4uL3NyYy9DYWxjXCJcclxuZm9ybXMuZm9ybURhdGE7XHJcbkNhbGMuY2FsY3VsYXRlcigpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;