webpackHotUpdate("pages-ListYourSpace-index",{

/***/ "./src/pages/ListYourSpace/ListYourSpaceForm.js":
/*!******************************************************!*\
  !*** ./src/pages/ListYourSpace/ListYourSpaceForm.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from 'react';\n// import PropTypes from 'prop-types';\n// import {\n//   Form,\n//   Input,\n//   Tooltip,\n//   Icon,\n//   Cascader,\n//   Select,\n//   Row,\n//   Col,\n//   Checkbox,\n//   Button,\n//   AutoComplete,\n// } from 'antd';\n// const { Option } = Select;\n// const ListYourSpaceForm = (props) => {\n//   const { getFieldDecorator } = props.form;\n//   return (\n//     <div>\n//       <Form onSubmit={this.handleSubmit}>\n//         <div className=\"col-6\">\n//           <Form.Item label=\"E-mail\">\n//             {getFieldDecorator('email', {\n//               rules: [\n//                 {\n//                   type: 'email',\n//                   message: 'The input is not valid E-mail!',\n//                 },\n//                 {\n//                   required: true,\n//                   message: 'Please input your E-mail!',\n//                 },\n//               ],\n//             })(<Input />)}\n//           </Form.Item>\n//         </div>\n//         <div className=\"col-6\">\n//           <Form.Item label=\"E-mail\">\n//             {getFieldDecorator('email', {\n//               rules: [\n//                 {\n//                   type: 'email',\n//                   message: 'The input is not valid E-mail!',\n//                 },\n//                 {\n//                   required: true,\n//                   message: 'Please input your E-mail!',\n//                 },\n//               ],\n//             })(<Input />)}\n//           </Form.Item>\n//         </div>\n//         {/* <Form.Item label=\"Password\" hasFeedback>\n//           {getFieldDecorator('password', {\n//             rules: [\n//               {\n//                 required: true,\n//                 message: 'Please input your password!',\n//               },\n//               {\n//                 validator: this.validateToNextPassword,\n//               },\n//             ],\n//           })(<Input.Password />)}\n//         </Form.Item>\n//         <Form.Item label=\"Confirm Password\" hasFeedback>\n//           {getFieldDecorator('confirm', {\n//             rules: [\n//               {\n//                 required: true,\n//                 message: 'Please confirm your password!',\n//               },\n//               {\n//                 validator: this.compareToFirstPassword,\n//               },\n//             ],\n//           })(<Input.Password onBlur={this.handleConfirmBlur} />)}\n//         </Form.Item>\n//         <Form.Item\n//           label={\n//             <span>\n//               Nickname&nbsp;\n//               <Tooltip title=\"What do you want others to call you?\">\n//                 <Icon type=\"question-circle-o\" />\n//               </Tooltip>\n//             </span>\n//           }\n//         >\n//           {getFieldDecorator('nickname', {\n//             rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],\n//           })(<Input />)}\n//         </Form.Item>\n//         <Form.Item label=\"Habitual Residence\">\n//           {getFieldDecorator('residence', {\n//             initialValue: ['zhejiang', 'hangzhou', 'xihu'],\n//             rules: [\n//               { type: 'array', required: true, message: 'Please select your habitual residence!' },\n//             ],\n//           })(<Cascader options={residences} />)}\n//         </Form.Item>\n//         <Form.Item label=\"Phone Number\">\n//           {getFieldDecorator('phone', {\n//             rules: [{ required: true, message: 'Please input your phone number!' }],\n//           })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}\n//         </Form.Item>\n//         <Form.Item label=\"Website\">\n//           {getFieldDecorator('website', {\n//             rules: [{ required: true, message: 'Please input website!' }],\n//           })(\n//             <AutoComplete\n//               dataSource={websiteOptions}\n//               onChange={this.handleWebsiteChange}\n//               placeholder=\"website\"\n//             >\n//               <Input />\n//             </AutoComplete>,\n//           )}\n//         </Form.Item>\n//         <Form.Item label=\"Captcha\" extra=\"We must make sure that your are a human.\">\n//           <Row gutter={8}>\n//             <Col span={12}>\n//               {getFieldDecorator('captcha', {\n//                 rules: [{ required: true, message: 'Please input the captcha you got!' }],\n//               })(<Input />)}\n//             </Col>\n//             <Col span={12}>\n//               <Button>Get captcha</Button>\n//             </Col>\n//           </Row>\n//         </Form.Item>\n//         <Form.Item {...tailFormItemLayout}>\n//           {getFieldDecorator('agreement', {\n//             valuePropName: 'checked',\n//           })(\n//             <Checkbox>\n//               I have read the <a href=\"\">agreement</a>\n//             </Checkbox>,\n//           )}\n//         </Form.Item>\n//         <Form.Item {...tailFormItemLayout}>\n//           <Button type=\"primary\" htmlType=\"submit\">\n//             Register\n//           </Button>\n//         </Form.Item> */}\n//       </Form>\n//     </div>\n//   );\n// };\n// ListYourSpaceForm.propTypes = {\n// };\n// const WrappedListYourSpaceForm = Form.create({ name: 'list_your_space_form' })(ListYourSpaceForm);\n// export default WrappedListYourSpaceForm;\n\n//# sourceURL=webpack:///./src/pages/ListYourSpace/ListYourSpaceForm.js?");

/***/ }),

/***/ "./src/pages/ListYourSpace/index.js":
/*!******************************************!*\
  !*** ./src/pages/ListYourSpace/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListYourSpaceForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListYourSpaceForm */ \"./src/pages/ListYourSpace/ListYourSpaceForm.js\");\n/* harmony import */ var _ListYourSpaceForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ListYourSpaceForm__WEBPACK_IMPORTED_MODULE_2__);\n // import './index.module';\n\n\n\n\nvar ListYourSpace = function ListYourSpace() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row justify-content-md-center mt-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-7\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"List your space\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"font-weight-light\"\n  }, \"First, download the mobile app; then set up and verify your Camphouse account. Use your account email address to add your space (apartments for short stays, workspace or event centre) below.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListYourSpaceForm__WEBPACK_IMPORTED_MODULE_2___default.a, null)));\n};\n\nListYourSpace.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListYourSpace);\n\n//# sourceURL=webpack:///./src/pages/ListYourSpace/index.js?");

/***/ })

})