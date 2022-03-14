/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/vue.js":
/*!*****************************!*\
  !*** ./resources/js/vue.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\resources\\js\\vue.js: Missing semicolon. (17:6)\n\n\u001b[0m \u001b[90m 15 |\u001b[39m \u001b[90m//Vue.component('example-component', require('./components/ExampleComponent.vue').default);\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 |\u001b[39m \u001b[33mImport\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m\"./views/App.vue\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m \u001b[90m/**\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m \u001b[90m * Next, we will create a fresh Vue application instance and attach it to\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m \u001b[90m * the page. Then, you may begin adding components to this application\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:476:17)\n    at Parser.raiseWithData (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:469:17)\n    at Parser.raise (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:430:17)\n    at Parser.semicolon (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:3767:10)\n    at Parser.parseExpressionStatement (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14697:10)\n    at Parser.parseStatementContent (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14261:19)\n    at Parser.parseStatement (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14113:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14739:25)\n    at Parser.parseBlockBody (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14730:10)\n    at Parser.parseProgram (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14032:10)\n    at Parser.parseTopLevel (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:14019:25)\n    at Parser.parse (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:15940:10)\n    at parse (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\parser\\lib\\index.js:15992:38)\n    at parser (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\core\\lib\\parser\\index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\@babel\\core\\lib\\transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\gensync\\index.js:261:32)\n    at C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (C:\\Users\\User\\Desktop\\Boolean\\Laravel-Boolpress\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./resources/js/vue.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Boolean\Laravel-Boolpress\resources\js\vue.js */"./resources/js/vue.js");


/***/ })

/******/ });