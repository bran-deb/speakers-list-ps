"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this3 = undefined, _this1 = undefined, _this2 = undefined;\nvar Session = function(param) {\n    var _session = param.session, title = _session.title, name = _session.room.name;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n        className: \"session w-100\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this3,\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 14\n                },\n                __self: _this3,\n                children: [\n                    \"Room: \",\n                    name\n                ]\n            })\n        ]\n    }));\n};\n_c = Session;\nvar Sessions = function(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"sessionBox card h-250\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Session, {\n            session: sessions[0],\n            __source: {\n                fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = Sessions;\nvar IndexPage = function() {\n    var _this = _this2;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container speakers-list\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: _this2,\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card card-height p-4 mt-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    className: \"contain-fit\",\n                                    src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                    width: \"300\",\n                                    alt: \"\".concat(first, \" \").concat(last),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"speaker-info\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"d-flex justify-content-between mb-3\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                                        className: \"text-truncate w-200\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            first,\n                                            \" \",\n                                            last\n                                        ]\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: [\n                                    bio,\n                                    \" \",\n                                    company,\n                                    \" \",\n                                    twitterHandle,\n                                    \" \",\n                                    favorite\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Sessions, {\n                                sessions: sessions,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\DEB\\\\101\\\\REACT\\\\pluralsight\\\\DESIGNING-components\\\\designing-better-components\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            })\n                        ]\n                    })\n                }, id));\n            })\n        })\n    }));\n};\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7O0FBR3JDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsUUFBb0MsQ0FBQzt5QkFBMUNDLE9BQU8sRUFBSUMsS0FBSyxZQUFMQSxLQUFLLEVBQVVDLElBQUksWUFBWkMsSUFBSSxDQUFJRCxJQUFJO0lBQy9DLE1BQU0sdUVBQ0hFLENBQUk7UUFDSEMsU0FBUyxFQUFDLENBQWU7Ozs7Ozs7O1lBQ3hCSixLQUFLO2tGQUFFSyxDQUFNOzs7Ozs7OztvQkFBQyxDQUFNO29CQUFDSixJQUFJOzs7OztBQUVoQyxDQUFDO0tBTktILE9BQU87QUFTYixHQUFLLENBQUNRLFFBQVEsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFRO0lBQzFCLE1BQU0sc0VBQUdDLENBQUc7UUFBQ0osU0FBUyxFQUFDLENBQXVCOzs7Ozs7O3VGQUMzQ04sT0FBTztZQUNOQyxPQUFPLEVBQUVRLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFHekIsQ0FBQztNQU5LRCxRQUFRO0FBU2QsR0FBSyxDQUFDRyxTQUFTLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQzs7SUFFdkIsTUFBTSxzRUFFSEQsQ0FBRztRQUFDSixTQUFTLEVBQUMsQ0FBeUI7Ozs7Ozs7dUZBQ3JDSSxDQUFHO1lBQUNKLFNBQVMsRUFBQyxDQUFLOzs7Ozs7O3NCQUNqQlAsa0RBQVEsQ0FBQ2MsUUFBUSxDQUFSQSxPQUFPLEVBQUksQ0FBQztnQkFDcEIsR0FBSyxDQUNIQyxFQUFFLEdBUUFELE9BQU8sQ0FSVEMsRUFBRSxFQUNGQyxHQUFHLEdBT0RGLE9BQU8sQ0FQVEUsR0FBRyxFQUNIQyxLQUFLLEdBTUhILE9BQU8sQ0FOVEcsS0FBSyxFQUNMQyxJQUFJLEdBS0ZKLE9BQU8sQ0FMVEksSUFBSSxFQUNKQyxRQUFRLEdBSU5MLE9BQU8sQ0FKVEssUUFBUSxFQUNSQyxhQUFhLEdBR1hOLE9BQU8sQ0FIVE0sYUFBYSxFQUNiQyxPQUFPLEdBRUxQLE9BQU8sQ0FGVE8sT0FBTyxFQUNQWCxRQUFRLEdBQ05JLE9BQU8sQ0FEVEosUUFBUTtnQkFHVixNQUFNLHNFQUNIQyxDQUFHO29CQUNGSixTQUFTLEVBQUMsQ0FBMkQ7Ozs7Ozs7b0dBQ3BFSSxDQUFHO3dCQUFDSixTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7O2lHQUN2Q0ksQ0FBRztnQ0FBQ0osU0FBUyxFQUFDLENBQTZFOzs7Ozs7OytHQUN6RmUsQ0FBRztvQ0FDRmYsU0FBUyxFQUFDLENBQWE7b0NBQ3ZCZ0IsR0FBRyxFQUFHLENBQWdCLGtCQUFLLE1BQUksQ0FBUFIsRUFBRSxFQUFDLENBQUk7b0NBQy9CUyxLQUFLLEVBQUMsQ0FBSztvQ0FDWEMsR0FBRyxFQUFHLEdBQVdQLE1BQUksQ0FBYkQsS0FBSyxFQUFDLENBQUMsSUFBTyxPQUFMQyxJQUFJOzs7Ozs7Ozs7aUdBR3hCUCxDQUFHO2dDQUFDSixTQUFTLEVBQUMsQ0FBYzs7Ozs7OzsrR0FDMUJJLENBQUc7b0NBQUNKLFNBQVMsRUFBQyxDQUFxQzs7Ozs7OztvSEFDakRtQixDQUFFO3dDQUFDbkIsU0FBUyxFQUFDLENBQXFCOzs7Ozs7Ozs0Q0FDaENVLEtBQUs7NENBQUMsQ0FBQzs0Q0FBQ0MsSUFBSTs7Ozs7a0dBSWxCUyxDQUFDOzs7Ozs7OztvQ0FBRVgsR0FBRztvQ0FBQyxDQUFDO29DQUFDSyxPQUFPO29DQUFDLENBQUM7b0NBQUNELGFBQWE7b0NBQUMsQ0FBQztvQ0FBQ0QsUUFBUTs7O2lHQUMzQ1YsUUFBUTtnQ0FBQ0MsUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7O21CQW5CdEJLLEVBQUU7WUF1QmhCLENBQUM7OztBQUtULENBQUM7TUEvQ0tILFNBQVM7QUFpRGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIlxuXG5cbmNvbnN0IFNlc3Npb24gPSAoeyBzZXNzaW9uOiB7IHRpdGxlLCByb29tOiB7IG5hbWUgfSB9IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAge3RpdGxlfTxzdHJvbmc+Um9vbToge25hbWV9PC9zdHJvbmc+XG4gICAgPC9zcGFuPilcbn1cblxuXG5jb25zdCBTZXNzaW9ucyA9ICh7IHNlc3Npb25zIH0pID0+IHtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgIDxTZXNzaW9uXG4gICAgICBzZXNzaW9uPXtzZXNzaW9uc1swXX1cbiAgICAvPlxuICA8L2Rpdj4pXG59XG5cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7ZGF0YS5tYXAoc3BlYWtlciA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBiaW8sXG4gICAgICAgICAgICBmaXJzdCxcbiAgICAgICAgICAgIGxhc3QsXG4gICAgICAgICAgICBmYXZvcml0ZSxcbiAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGUsXG4gICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgc2Vzc2lvbnMsXG4gICAgICAgICAgfSA9IHNwZWFrZXJcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD57YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX08L3A+XG4gICAgICAgICAgICAgICAgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sIm5hbWVzIjpbImRhdGEiLCJTZXNzaW9uIiwic2Vzc2lvbiIsInRpdGxlIiwibmFtZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIkluZGV4UGFnZSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});