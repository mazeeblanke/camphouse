webpackHotUpdate("main",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Navigation = function Navigation() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isOpen = _useState2[0],\n      setIsOpen = _useState2[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n    color: \"light\",\n    light: true,\n    expand: \"md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarBrand\"], {\n    href: \"/\"\n  }, \"Camphouse\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarToggler\"], {\n    onClick: toggle\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    className: \"ml-auto\",\n    navbar: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    href: \"/components/\"\n  }, \"Components\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    href: \"https://github.com/reactstrap/reactstrap\"\n  }, \"GitHub\")))))) // <nav class=\"navbar navbar-light bg-light\">\n  //   <a class=\"navbar-brand\">Camphouse</a>\n  //   <button\n  //     class=\"navbar-toggler\"\n  //     type=\"button\"\n  //     data-toggle=\"collapse\"\n  //     data-target=\"#navbarSupportedContent\"\n  //     aria-controls=\"navbarSupportedContent\"\n  //     aria-expanded=\"false\"\n  //     aria-label=\"Toggle navigation\"\n  //   >\n  //     <span class=\"navbar-toggler-icon\"></span>\n  //   </button>\n  //   <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  //     <ul class=\"nav justify-content-end\">\n  //       <li class=\"nav-item\">\n  //         <a class=\"nav-link active\" href=\"#\">\n  //           List your space\n  //         </a>\n  //       </li>\n  //       <li class=\"nav-item\">\n  //         <a class=\"nav-link\" href=\"#\">\n  //           Download App\n  //         </a>\n  //       </li>\n  //     </ul>\n  //   </div>\n  // </nav>\n  ;\n};\n\nNavigation.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\n//# sourceURL=webpack:///./src/components/Navbar.js?");

/***/ })

})