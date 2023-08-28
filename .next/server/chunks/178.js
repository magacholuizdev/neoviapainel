exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_context_DepartmentContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7488);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8472);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4872);
/* harmony import */ var components_MicrosoftSignIn_authConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_azure_msal_react__WEBPACK_IMPORTED_MODULE_4__, _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__, components_MicrosoftSignIn_authConfig__WEBPACK_IMPORTED_MODULE_6__]);
([_azure_msal_react__WEBPACK_IMPORTED_MODULE_4__, _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__, components_MicrosoftSignIn_authConfig__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MyApp({ Component, pageProps }) {
    const msalInstance = new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__.PublicClientApplication(components_MicrosoftSignIn_authConfig__WEBPACK_IMPORTED_MODULE_6__/* .msalConfig */ .XM);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Neovia Engenharia - Portal"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_azure_msal_react__WEBPACK_IMPORTED_MODULE_4__.MsalProvider, {
                instance: msalInstance,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_context_DepartmentContext__WEBPACK_IMPORTED_MODULE_2__/* .DepartmentContextProvider */ .$, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BE: () => (/* binding */ graphConfig),
/* harmony export */   Qb: () => (/* binding */ loginRequest),
/* harmony export */   XM: () => (/* binding */ msalConfig)
/* harmony export */ });
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__]);
_azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ 
/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */ const msalConfig = {
    auth: {
        clientId: "f9557b30-32bb-494b-b8ec-4297c148656a",
        authority: "https://login.microsoftonline.com/e121ff35-e664-4910-b9e1-50689b8ea690",
        redirectUri: "http://localhost:3000/home"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii)=>{
                if (containsPii) {
                    return;
                }
                switch(level){
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                        console.error(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                        console.info(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};
/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */ const loginRequest = {
    scopes: [
        "User.Read"
    ]
};
/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */ const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ DepartmentContextProvider),
/* harmony export */   t: () => (/* binding */ useDepartmentContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DepartmentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const DepartmentContextProvider = ({ children })=>{
    const [selectedDepartment, setSelectedDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DepartmentContext.Provider, {
        value: {
            selectedDepartment,
            setSelectedDepartment
        },
        children: children
    });
};
const useDepartmentContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DepartmentContext);
    return context;
};



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;