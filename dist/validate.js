"use strict";function _interopExportWildcard(e,r){var t=r({},e);return delete t["default"],t}function _defaults(e,r){for(var t=Object.getOwnPropertyNames(r),i=0;i<t.length;i++){var n=t[i],a=Object.getOwnPropertyDescriptor(r,n);a&&a.configurable&&void 0===e[n]&&Object.defineProperty(e,n,a)}return e}Object.defineProperty(exports,"__esModule",{value:!0});var _libIsnilJs=require("./lib/isnil.js"),_string=require("./string");_defaults(exports,_interopExportWildcard(_string,_defaults));var validate=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),i=1;r>i;i++)t[i-1]=arguments[i];return _libIsnilJs.isNil(e)?!1:t.reduce(function(r,t){return r&&t(e)},!0)};exports.validate=validate;