"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 4571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteAppServerPath_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_iUUe1_gQFG5ykHHWgPDTe_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_222937a973a61ff915cba0e62f0df970c8_22_2C_22previewModeSigningKey_22_3A_2248577353ac21bca825b6d57c2e9407ad38ba4812c47eab1e1b0573a8eca8b0c3_22_2C_22previewModeEncryptionKey_22_3A_2255d03c9464cce2f4360ba0eb9fbb2c48c09da322b32530b668ec19bcb60c4399_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFWT0ZTSDNTTE1TSktJMkhNXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dG5iNEdyL3l5ajZzNm91eXZoQ2kwcXFuVDVTZnFRYzJlTFNwUEZMeiJ9XQ_3D_3D_i18n_reactRoot_true_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fhello&absolutePagePath=private-next-pages%2Fapi%2Fhello.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteAppServerPath=&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=iUUe1_gQFG5ykHHWgPDTe&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%222937a973a61ff915cba0e62f0df970c8%22%2C%22previewModeSigningKey%22%3A%2248577353ac21bca825b6d57c2e9407ad38ba4812c47eab1e1b0573a8eca8b0c3%22%2C%22previewModeEncryptionKey%22%3A%2255d03c9464cce2f4360ba0eb9fbb2c48c09da322b32530b668ec19bcb60c4399%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFWT0ZTSDNTTE1TSktJMkhNXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dG5iNEdyL3l5ajZzNm91eXZoQ2kwcXFuVDVTZnFRYzJlTFNwUEZMeiJ9XQ%3D%3D&i18n=&reactRoot=true!

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env","contents":"AWS_ACCESS_KEY_ID=AKIAVOFSH3SLMSJKI2HM\nAWS_SECRET_ACCESS_KEY=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"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(641),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"2937a973a61ff915cba0e62f0df970c8",previewModeSigningKey:"48577353ac21bca825b6d57c2e9407ad38ba4812c47eab1e1b0573a8eca8b0c3",previewModeEncryptionKey:"55d03c9464cce2f4360ba0eb9fbb2c48c09da322b32530b668ec19bcb60c4399"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteAppServerPath_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_iUUe1_gQFG5ykHHWgPDTe_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_222937a973a61ff915cba0e62f0df970c8_22_2C_22previewModeSigningKey_22_3A_2248577353ac21bca825b6d57c2e9407ad38ba4812c47eab1e1b0573a8eca8b0c3_22_2C_22previewModeEncryptionKey_22_3A_2255d03c9464cce2f4360ba0eb9fbb2c48c09da322b32530b668ec19bcb60c4399_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IkFXU19BQ0NFU1NfS0VZX0lEPUFLSUFWT0ZTSDNTTE1TSktJMkhNXG5BV1NfU0VDUkVUX0FDQ0VTU19LRVk9dG5iNEdyL3l5ajZzNm91eXZoQ2kwcXFuVDVTZnFRYzJlTFNwUEZMeiJ9XQ_3D_3D_i18n_reactRoot_true_ = (apiHandler);
      

/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json({
        name: "John Doe"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(4571)));
module.exports = __webpack_exports__;

})();