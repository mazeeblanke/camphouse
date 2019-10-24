(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-ListYourSpace"],{

/***/ "./src/pages/ListYourSpace/ListYourSpaceForm.js":
/*!******************************************************!*\
  !*** ./src/pages/ListYourSpace/ListYourSpaceForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/form/style */ \"./node_modules/antd/es/form/style/index.js\");\n/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/form */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style */ \"./node_modules/antd/es/input/style/index.js\");\n/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/select/style */ \"./node_modules/antd/es/select/style/index.js\");\n/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/select */ \"./node_modules/antd/es/select/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _this = undefined;\n\n\n\nvar Option = antd_es_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Option;\n\nvar ListYourSpaceForm = function ListYourSpaceForm(props) {\n  var getFieldDecorator = props.form.getFieldDecorator;\n  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onSubmit: _this.handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n    label: \"E-mail\"\n  }, getFieldDecorator('email', {\n    rules: [{\n      type: 'email',\n      message: 'The input is not valid E-mail!'\n    }, {\n      required: true,\n      message: 'Please input your E-mail!'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n    label: \"E-mail\"\n  }, getFieldDecorator('email', {\n    rules: [{\n      type: 'email',\n      message: 'The input is not valid E-mail!'\n    }, {\n      required: true,\n      message: 'Please input your E-mail!'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))))));\n};\n\nListYourSpaceForm.propTypes = {};\n\nvar WrappedListYourSpaceForm = antd_es_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n  name: 'list_your_space_form'\n})(ListYourSpaceForm);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WrappedListYourSpaceForm);\n\n//# sourceURL=webpack:///./src/pages/ListYourSpace/ListYourSpaceForm.js?");

/***/ }),

/***/ "./src/pages/ListYourSpace/index.js":
/*!******************************************!*\
  !*** ./src/pages/ListYourSpace/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListYourSpaceForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListYourSpaceForm */ \"./src/pages/ListYourSpace/ListYourSpaceForm.js\");\n // import './index.module';\n\n\n\n\nvar ListYourSpace = function ListYourSpace() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row justify-content-md-center mt-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-7\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"List your space\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"font-weight-light\"\n  }, \"First, download the mobile app; then set up and verify your Camphouse account. Use your account email address to add your space (apartments for short stays, workspace or event centre) below.\")))));\n};\n\nListYourSpace.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListYourSpace);\n\n//# sourceURL=webpack:///./src/pages/ListYourSpace/index.js?");

/***/ })

}]);