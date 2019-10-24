webpackHotUpdate("pages-ListYourSpace-index",{

/***/ "./src/pages/ListYourSpace/ListYourSpaceForm.js":
/*!******************************************************!*\
  !*** ./src/pages/ListYourSpace/ListYourSpaceForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style */ \"./node_modules/antd/es/button/style/index.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/form/style */ \"./node_modules/antd/es/form/style/index.js\");\n/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/input/style */ \"./node_modules/antd/es/input/style/index.js\");\n/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/input */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/select/style */ \"./node_modules/antd/es/select/style/index.js\");\n/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/select */ \"./node_modules/antd/es/select/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar Option = antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Option;\n\nvar ListYourSpaceForm = function ListYourSpaceForm(props) {\n  var getFieldDecorator = props.form.getFieldDecorator;\n\n  var handleSubmit = function handleSubmit() {};\n\n  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"row justify-content-center mt-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-md-9\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Email address\"\n  }, getFieldDecorator(\"email\", {\n    rules: [{\n      type: \"email\",\n      message: \"The input is not valid E-mail!\"\n    }, {\n      required: true,\n      message: \"Please input your E-mail!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    placeholder: \"name@email.com\",\n    size: \"large\"\n  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Name of space\"\n  }, getFieldDecorator(\"name_of_space\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the name of space!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    placeholder: \"Enter name e.g. Beautiful Apartment\",\n    size: \"large\"\n  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-12\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Description of space\"\n  }, getFieldDecorator(\"description_of_space\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the description of space!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    placeholder: \"Enter description...\",\n    size: \"large\"\n  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Address\"\n  }, getFieldDecorator(\"address\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the address!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    placeholder: \"Start typing to search...\",\n    size: \"large\"\n  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Type of space\"\n  }, getFieldDecorator(\"type_of_space\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the type of space!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"large\",\n    placeholder: \"Select all that apply\",\n    style: {\n      width: \"100%\"\n    },\n    onChange: function onChange() {}\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"jack\"\n  }, \"Studio\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"lucy\"\n  }, \"Lucy\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"Yiminghe\"\n  }, \"yiminghe\"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Price (per day)\"\n  }, getFieldDecorator(\"price\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the price per day!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    placeholder: \"Enter price\",\n    size: \"large\"\n  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Facilities\"\n  }, getFieldDecorator(\"facilities\", {\n    rules: [{\n      type: \"text\" // message: \"The input is not valid E-mail!\"\n\n    }, {\n      required: true,\n      message: \"Please input the facilities!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"large\",\n    placeholder: \"Select all that apply\",\n    style: {\n      width: \"100%\"\n    },\n    onChange: function onChange() {}\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"jack\"\n  }, \"Studio\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"lucy\"\n  }, \"Lucy\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"Yiminghe\"\n  }, \"yiminghe\"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Apartment type\"\n  }, getFieldDecorator(\"apartment_type\", {\n    rules: [{\n      required: true,\n      message: \"Please select the apartment type!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"large\",\n    defaultValue: \"jack\",\n    placeholder: \"Select all that apply\",\n    style: {\n      width: \"100%\"\n    },\n    onChange: function onChange() {}\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"jack\"\n  }, \"Studio\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"lucy\"\n  }, \"Lucy\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"Yiminghe\"\n  }, \"yiminghe\"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"col-6\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"Number of guests\"\n  }, getFieldDecorator(\"number_of_guests\", {\n    rules: [{\n      required: true,\n      message: \"Please select the number of guests!\"\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    size: \"large\",\n    defaultValue: \"jack\",\n    placeholder: \"Select all that apply\",\n    style: {\n      width: \"100%\"\n    },\n    onChange: function onChange() {}\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"jack\"\n  }, \"1\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"lucy\"\n  }, \"Lucy\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {\n    value: \"Yiminghe\"\n  }, \"yiminghe\")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n    className: \"row justify-content-center mt-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    shape: \"round\",\n    htmlType: \"submit\",\n    size: \"large\",\n    type: \"primary\"\n  }, \"Add space\"))))));\n};\n\nListYourSpaceForm.propTypes = {};\n\nvar WrappedListYourSpaceForm = antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n  name: \"list_your_space_form\"\n})(ListYourSpaceForm);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WrappedListYourSpaceForm); // import React from 'react';\n// import PropTypes from 'prop-types';\n// const ListYourSpaceForm = () => {\n//   return (\n//     <div>\n//       <h4>jweieuiwe</h4>\n//     </div>\n//   );\n// };\n// ListYourSpaceForm.propTypes = {\n// };\n// export default ListYourSpaceForm;\n\n//# sourceURL=webpack:///./src/pages/ListYourSpace/ListYourSpaceForm.js?");

/***/ })

})