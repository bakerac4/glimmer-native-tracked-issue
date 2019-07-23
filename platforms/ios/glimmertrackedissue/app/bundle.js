require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GlimmerTrackedIssue/component.ts": "../src/ui/components/GlimmerTrackedIssue/component.ts",
	"./Page2/component.ts": "../src/ui/components/Page2/component.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$";

/***/ }),

/***/ "../src/ui/components/GlimmerTrackedIssue/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlimmerTrackedIssue; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class GlimmerTrackedIssue extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.title = "Welcome to Glimmer Native";
        this.count = 0;
    }
    clicked() {
        this.count = this.count + 1;
    }
}
__decorate([
    _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["tracked"]
], GlimmerTrackedIssue.prototype, "count", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxtQkFBb0IsU0FBUSxTQUFTO0lBQTFEOztRQUNFLFVBQUssR0FBRywyQkFBMkIsQ0FBQTtRQUUxQixVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBS3JCLENBQUM7SUFIQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFMVTtJQUFSLE9BQU87a0RBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50LCB7IHRyYWNrZWQgfSBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGl0bGUgPSBcIldlbGNvbWUgdG8gR2xpbW1lciBOYXRpdmVcIlxuXG4gIEB0cmFja2VkIGNvdW50ID0gMDtcblxuICBjbGlja2VkKCkge1xuICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50ICsgMTtcbiAgfVxufVxuIl19; 
if (false ) {} 

/***/ }),

/***/ "../src/ui/components/Page2/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlimmerTrackedIssue; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");

class GlimmerTrackedIssue extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.title = "Welcome to Glimmer Native";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sbUJBQW9CLFNBQVEsU0FBUztJQUExRDs7UUFDSSxVQUFLLEdBQUcsMkJBQTJCLENBQUE7SUFDdkMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICB0aXRsZSA9IFwiV2VsY29tZSB0byBHbGltbWVyIE5hdGl2ZVwiXG59XG4iXX0=; 
if (false ) {} 

/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.ts": "./app.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);

; 
if (false ) {} 

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
/* harmony import */ var glimmer_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/glimmer-native/dist/index.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_2__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        


const resolverDelegate = new glimmer_native__WEBPACK_IMPORTED_MODULE_1__["ResolverDelegate"]();
const resolver = new glimmer_native__WEBPACK_IMPORTED_MODULE_1__["Resolver"]();
let appFolder = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_2__["knownFolders"].currentApp();
const addTemplates = (appFolder) => {
    let templatesFile = appFolder.getFile('templates.json');
    let templates = templatesFile.readTextSync();
    // console.log(`Templates: ${templates}`);
    JSON.parse(templates).forEach((template) => {
        resolverDelegate.registerComponent(template.name, template.handle, template.source, template.capabilities);
    });
};
const addComponents = (appFolder) => {
    let componentsFile = appFolder.getFile('components.json');
    let components = componentsFile.readTextSync();
    console.log(`About to resolve require`);
    JSON.parse(components).forEach((component) => {
        console.log(`About to resolve require`);
        const classFile = __webpack_require__("../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$")(`./${component.name}/component.ts`);
        resolver.registerComponent(component.name, classFile.default);
    });
};
addTemplates(appFolder);
addComponents(appFolder);
const app = new glimmer_native__WEBPACK_IMPORTED_MODULE_1__["default"]('GlimmerTrackedIssue', resolverDelegate, resolver);
// app.setup(appFolder);
// const containerElement = document.getElementById('app');
Object(_glimmer_tracking__WEBPACK_IMPORTED_MODULE_0__["setPropertyDidChange"])(() => {
    app.scheduleRerender();
});
// app.renderComponent('GlimmerTrackedIssue', app.rootFrame, null);
app.boot();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDaEMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRzFDLE1BQU0sWUFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUU7SUFDakMsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QywwQ0FBMEM7SUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN6QyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FDaEMsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxDQUFDLFlBQVksQ0FDdEIsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtJQUNsQyxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUQsSUFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0Usd0JBQXdCO0FBQ3hCLDJEQUEyRDtBQUUzRCxvQkFBb0IsQ0FBQyxHQUFHLEVBQUU7SUFDeEIsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFSCxtRUFBbUU7QUFFbkUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0UHJvcGVydHlEaWRDaGFuZ2UgfSBmcm9tICdAZ2xpbW1lci90cmFja2luZyc7XG5pbXBvcnQgQXBwbGljYXRpb24sIHsgUmVzb2x2ZXIsIFJlc29sdmVyRGVsZWdhdGUgfSBmcm9tICdnbGltbWVyLW5hdGl2ZSc7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcblxuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xubGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG5cblxuY29uc3QgYWRkVGVtcGxhdGVzID0gKGFwcEZvbGRlcikgPT4ge1xuICBsZXQgdGVtcGxhdGVzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKCd0ZW1wbGF0ZXMuanNvbicpO1xuICBsZXQgdGVtcGxhdGVzID0gdGVtcGxhdGVzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgLy8gY29uc29sZS5sb2coYFRlbXBsYXRlczogJHt0ZW1wbGF0ZXN9YCk7XG4gIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgIHJlc29sdmVyRGVsZWdhdGUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgICB0ZW1wbGF0ZS5uYW1lLFxuICAgICAgdGVtcGxhdGUuaGFuZGxlLFxuICAgICAgdGVtcGxhdGUuc291cmNlLFxuICAgICAgdGVtcGxhdGUuY2FwYWJpbGl0aWVzXG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRDb21wb25lbnRzID0gKGFwcEZvbGRlcikgPT4ge1xuICBsZXQgY29tcG9uZW50c0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZSgnY29tcG9uZW50cy5qc29uJyk7XG4gIGxldCBjb21wb25lbnRzID0gY29tcG9uZW50c0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgSlNPTi5wYXJzZShjb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgcmVzb2x2ZXIucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNsYXNzRmlsZS5kZWZhdWx0KTtcbiAgfSk7XG59O1xuXG5hZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbmFkZENvbXBvbmVudHMoYXBwRm9sZGVyKTtcblxuY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCdHbGltbWVyVHJhY2tlZElzc3VlJywgcmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpO1xuLy8gYXBwLnNldHVwKGFwcEZvbGRlcik7XG4vLyBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG5zZXRQcm9wZXJ0eURpZENoYW5nZSgoKSA9PiB7XG4gIGFwcC5zY2hlZHVsZVJlcmVuZGVyKCk7XG59KTtcblxuLy8gYXBwLnJlbmRlckNvbXBvbmVudCgnR2xpbW1lclRyYWNrZWRJc3N1ZScsIGFwcC5yb290RnJhbWUsIG51bGwpO1xuXG5hcHAuYm9vdCgpO1xuIl19; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC9jb21wb25lbnRcXC50cyQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzL0dsaW1tZXJUcmFja2VkSXNzdWUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvY29tcG9uZW50cy9QYWdlMi9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGOzs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDd0Q7QUFDekMsa0NBQWtDLDBEQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBTztBQUNYO0FBQ0EsMkNBQTJDLG8yQjtBQUMzQyxJQUFJLEtBQWlMLEdBQUcsRTs7Ozs7Ozs7QUNyQnhMO0FBQUE7QUFBQTtBQUEyQztBQUM1QixrQ0FBa0MsMERBQVM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvaUI7QUFDM0MsSUFBSSxLQUFtSyxHQUFHLEU7Ozs7Ozs7QUNSMUs7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDeEJBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUzs7QUFFdkIsQztBQUNBLElBQUksS0FBcUYsR0FBRyxFOzs7Ozs7Ozs7Ozs7OztBQ0o1RixZQUFZLG1CQUFPLENBQUMsMEVBQXVEOzs7QUFHM0UsWUFBWSxLQUFVLEVBQUUsRUFzQmY7O0FBRVQsNEJBQTRCLDBIQUF3RztBQUNwSTtBQUNBLGdCQUFnQixLQUFVLEVBQUUsRUFJZjs7QUFFYixRQUFRLG1CQUFPLENBQUMseURBQXNDO0FBQ3RELFFBQWlFO0FBQ1E7QUFDYjtBQUM1RCw2QkFBNkIsK0RBQWdCO0FBQzdDLHFCQUFxQix1REFBUTtBQUM3QixnQkFBZ0IseUVBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1RkFBUSxHQUFzQixFQUFFLGVBQWUsY0FBYyxDQUFDO0FBQ3hGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBVztBQUMzQjtBQUNBO0FBQ0EsOEVBQW9CO0FBQ3BCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwyQ0FBMkMsNGpJO0FBQzNDLElBQUksS0FBb0YsR0FBRyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9HbGltbWVyVHJhY2tlZElzc3VlL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL0dsaW1tZXJUcmFja2VkSXNzdWUvY29tcG9uZW50LnRzXCIsXG5cdFwiLi9QYWdlMi9jb21wb25lbnQudHNcIjogXCIuLi9zcmMvdWkvY29tcG9uZW50cy9QYWdlMi9jb21wb25lbnQudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi9zcmMvdWkvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9jb21wb25lbnRcXFxcLnRzJFwiOyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBDb21wb25lbnQsIHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiV2VsY29tZSB0byBHbGltbWVyIE5hdGl2ZVwiO1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG4gICAgY2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMuY291bnQgKyAxO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHRyYWNrZWRcbl0sIEdsaW1tZXJUcmFja2VkSXNzdWUucHJvdG90eXBlLCBcImNvdW50XCIsIHZvaWQgMCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJMRTlCUVU4c1UwRkJVeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNiMEpCUVc5Q0xFTkJRVU03UVVGRmVFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1QwRkJUeXh0UWtGQmIwSXNVMEZCVVN4VFFVRlRPMGxCUVRGRU96dFJRVU5GTEZWQlFVc3NSMEZCUnl3eVFrRkJNa0lzUTBGQlFUdFJRVVV4UWl4VlFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJTM0pDTEVOQlFVTTdTVUZJUXl4UFFVRlBPMUZCUTB3c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNNVFpeERRVUZETzBOQlEwWTdRVUZNVlR0SlFVRlNMRTlCUVU4N2EwUkJRVmNpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUTI5dGNHOXVaVzUwTENCN0lIUnlZV05yWldRZ2ZTQm1jbTl0SUNkQVoyeHBiVzFsY2k5amIyMXdiMjVsYm5Rbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCSGJHbHRiV1Z5VkhKaFkydGxaRWx6YzNWbElHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MElIdGNiaUFnZEdsMGJHVWdQU0JjSWxkbGJHTnZiV1VnZEc4Z1IyeHBiVzFsY2lCT1lYUnBkbVZjSWx4dVhHNGdJRUIwY21GamEyVmtJR052ZFc1MElEMGdNRHRjYmx4dUlDQmpiR2xqYTJWa0tDa2dlMXh1SUNBZ0lIUm9hWE11WTI5MWJuUWdQU0IwYUdsekxtTnZkVzUwSUNzZ01UdGNiaUFnZlZ4dWZWeHVJbDE5OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIvVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L2dsaW1tZXItdHJhY2tlZC1pc3N1ZS9zcmMvdWkvY29tcG9uZW50cy9HbGltbWVyVHJhY2tlZElzc3VlL2NvbXBvbmVudC50c1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIvVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L2dsaW1tZXItdHJhY2tlZC1pc3N1ZS9zcmMvdWkvY29tcG9uZW50cy9HbGltbWVyVHJhY2tlZElzc3VlL2NvbXBvbmVudC50c1wiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiV2VsY29tZSB0byBHbGltbWVyIE5hdGl2ZVwiO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1UwRkJVeXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUlRORExFMUJRVTBzUTBGQlF5eFBRVUZQTEU5QlFVOHNiVUpCUVc5Q0xGTkJRVkVzVTBGQlV6dEpRVUV4UkRzN1VVRkRTU3hWUVVGTExFZEJRVWNzTWtKQlFUSkNMRU5CUVVFN1NVRkRka01zUTBGQlF6dERRVUZCSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVOdmJYQnZibVZ1ZENCbWNtOXRJQ2RBWjJ4cGJXMWxjaTlqYjIxd2IyNWxiblFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJIYkdsdGJXVnlWSEpoWTJ0bFpFbHpjM1ZsSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwSUh0Y2JpQWdJQ0IwYVhSc1pTQTlJRndpVjJWc1kyOXRaU0IwYnlCSGJHbHRiV1Z5SUU1aGRHbDJaVndpWEc1OVhHNGlYWDA9OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIvVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L2dsaW1tZXItdHJhY2tlZC1pc3N1ZS9zcmMvdWkvY29tcG9uZW50cy9QYWdlMi9jb21wb25lbnQudHNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9nbGltbWVyLXRyYWNrZWQtaXNzdWUvc3JjL3VpL2NvbXBvbmVudHMvUGFnZTIvY29tcG9uZW50LnRzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2htclN5bmNCYWNrdXAgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhtclVwZGF0ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGltcG9ydCB7IHNldFByb3BlcnR5RGlkQ2hhbmdlIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuaW1wb3J0IEFwcGxpY2F0aW9uLCB7IFJlc29sdmVyLCBSZXNvbHZlckRlbGVnYXRlIH0gZnJvbSAnZ2xpbW1lci1uYXRpdmUnO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbSc7XG5jb25zdCByZXNvbHZlckRlbGVnYXRlID0gbmV3IFJlc29sdmVyRGVsZWdhdGUoKTtcbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKCk7XG5sZXQgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbmNvbnN0IGFkZFRlbXBsYXRlcyA9IChhcHBGb2xkZXIpID0+IHtcbiAgICBsZXQgdGVtcGxhdGVzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKCd0ZW1wbGF0ZXMuanNvbicpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICByZXNvbHZlckRlbGVnYXRlLnJlZ2lzdGVyQ29tcG9uZW50KHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLmhhbmRsZSwgdGVtcGxhdGUuc291cmNlLCB0ZW1wbGF0ZS5jYXBhYmlsaXRpZXMpO1xuICAgIH0pO1xufTtcbmNvbnN0IGFkZENvbXBvbmVudHMgPSAoYXBwRm9sZGVyKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudHNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoJ2NvbXBvbmVudHMuanNvbicpO1xuICAgIGxldCBjb21wb25lbnRzID0gY29tcG9uZW50c0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgIEpTT04ucGFyc2UoY29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICAgICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgICAgIHJlc29sdmVyLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjbGFzc0ZpbGUuZGVmYXVsdCk7XG4gICAgfSk7XG59O1xuYWRkVGVtcGxhdGVzKGFwcEZvbGRlcik7XG5hZGRDb21wb25lbnRzKGFwcEZvbGRlcik7XG5jb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oJ0dsaW1tZXJUcmFja2VkSXNzdWUnLCByZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcik7XG4vLyBhcHAuc2V0dXAoYXBwRm9sZGVyKTtcbi8vIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5zZXRQcm9wZXJ0eURpZENoYW5nZSgoKSA9PiB7XG4gICAgYXBwLnNjaGVkdWxlUmVyZW5kZXIoKTtcbn0pO1xuLy8gYXBwLnJlbmRlckNvbXBvbmVudCgnR2xpbW1lclRyYWNrZWRJc3N1ZScsIGFwcC5yb290RnJhbWUsIG51bGwpO1xuYXBwLmJvb3QoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYQndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVlYQndMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hOUVVGTkxHMUNRVUZ0UWl4RFFVRkRPMEZCUTNwRUxFOUJRVThzVjBGQlZ5eEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNaMEpCUVdkQ0xFTkJRVU03UVVGRGVrVXNUMEZCVHl4RlFVRkZMRmxCUVZrc1JVRkJSU3hOUVVGTkxEaENRVUU0UWl4RFFVRkRPMEZCUlRWRUxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3huUWtGQlowSXNSVUZCUlN4RFFVRkRPMEZCUTJoRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN1FVRkRhRU1zU1VGQlNTeFRRVUZUTEVkQlFVY3NXVUZCV1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wRkJSekZETEUxQlFVMHNXVUZCV1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVU3U1VGRGFrTXNTVUZCU1N4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wbEJRM2hFTEVsQlFVa3NVMEZCVXl4SFFVRkhMR0ZCUVdFc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEpRVU0zUXl3d1EwRkJNRU03U1VGRE1VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSVHRSUVVONlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZEYUVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGRFlpeFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVTm1MRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRMllzVVVGQlVTeERRVUZETEZsQlFWa3NRMEZEZEVJc1EwRkJRenRKUVVOS0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlR0SlFVTnNReXhKUVVGSkxHTkJRV01zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdTVUZETVVRc1NVRkJTU3hWUVVGVkxFZEJRVWNzWTBGQll5eERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUXk5RExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dEpRVU40UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRk8xRkJRek5ETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xGTkJRVk1zUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTJwR0xGRkJRVkVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOb1JTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNc1EwRkJRenRCUVVWR0xGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTjRRaXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdRVUZGZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGREwwVXNkMEpCUVhkQ08wRkJRM2hDTERKRVFVRXlSRHRCUVVVelJDeHZRa0ZCYjBJc1EwRkJReXhIUVVGSExFVkJRVVU3U1VGRGVFSXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTTdRVUZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeHRSVUZCYlVVN1FVRkZia1VzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYzJWMFVISnZjR1Z5ZEhsRWFXUkRhR0Z1WjJVZ2ZTQm1jbTl0SUNkQVoyeHBiVzFsY2k5MGNtRmphMmx1WnljN1hHNXBiWEJ2Y25RZ1FYQndiR2xqWVhScGIyNHNJSHNnVW1WemIyeDJaWElzSUZKbGMyOXNkbVZ5UkdWc1pXZGhkR1VnZlNCbWNtOXRJQ2RuYkdsdGJXVnlMVzVoZEdsMlpTYzdYRzVwYlhCdmNuUWdleUJyYm05M2JrWnZiR1JsY25NZ2ZTQm1jbTl0SUNkMGJuTXRZMjl5WlMxdGIyUjFiR1Z6TDJacGJHVXRjM2x6ZEdWdEp6dGNibHh1WTI5dWMzUWdjbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTQTlJRzVsZHlCU1pYTnZiSFpsY2tSbGJHVm5ZWFJsS0NrN1hHNWpiMjV6ZENCeVpYTnZiSFpsY2lBOUlHNWxkeUJTWlhOdmJIWmxjaWdwTzF4dWJHVjBJR0Z3Y0VadmJHUmxjaUE5SUd0dWIzZHVSbTlzWkdWeWN5NWpkWEp5Wlc1MFFYQndLQ2s3WEc1Y2JseHVZMjl1YzNRZ1lXUmtWR1Z0Y0d4aGRHVnpJRDBnS0dGd2NFWnZiR1JsY2lrZ1BUNGdlMXh1SUNCc1pYUWdkR1Z0Y0d4aGRHVnpSbWxzWlNBOUlHRndjRVp2YkdSbGNpNW5aWFJHYVd4bEtDZDBaVzF3YkdGMFpYTXVhbk52YmljcE8xeHVJQ0JzWlhRZ2RHVnRjR3hoZEdWeklEMGdkR1Z0Y0d4aGRHVnpSbWxzWlM1eVpXRmtWR1Y0ZEZONWJtTW9LVHRjYmlBZ0x5OGdZMjl1YzI5c1pTNXNiMmNvWUZSbGJYQnNZWFJsY3pvZ0pIdDBaVzF3YkdGMFpYTjlZQ2s3WEc0Z0lFcFRUMDR1Y0dGeWMyVW9kR1Z0Y0d4aGRHVnpLUzVtYjNKRllXTm9LQ2gwWlcxd2JHRjBaU2tnUFQ0Z2UxeHVJQ0FnSUhKbGMyOXNkbVZ5UkdWc1pXZGhkR1V1Y21WbmFYTjBaWEpEYjIxd2IyNWxiblFvWEc0Z0lDQWdJQ0IwWlcxd2JHRjBaUzV1WVcxbExGeHVJQ0FnSUNBZ2RHVnRjR3hoZEdVdWFHRnVaR3hsTEZ4dUlDQWdJQ0FnZEdWdGNHeGhkR1V1YzI5MWNtTmxMRnh1SUNBZ0lDQWdkR1Z0Y0d4aGRHVXVZMkZ3WVdKcGJHbDBhV1Z6WEc0Z0lDQWdLVHRjYmlBZ2ZTazdYRzU5TzF4dVhHNWpiMjV6ZENCaFpHUkRiMjF3YjI1bGJuUnpJRDBnS0dGd2NFWnZiR1JsY2lrZ1BUNGdlMXh1SUNCc1pYUWdZMjl0Y0c5dVpXNTBjMFpwYkdVZ1BTQmhjSEJHYjJ4a1pYSXVaMlYwUm1sc1pTZ25ZMjl0Y0c5dVpXNTBjeTVxYzI5dUp5azdYRzRnSUd4bGRDQmpiMjF3YjI1bGJuUnpJRDBnWTI5dGNHOXVaVzUwYzBacGJHVXVjbVZoWkZSbGVIUlRlVzVqS0NrN1hHNGdJR052Ym5OdmJHVXViRzluS0dCQlltOTFkQ0IwYnlCeVpYTnZiSFpsSUhKbGNYVnBjbVZnS1R0Y2JpQWdTbE5QVGk1d1lYSnpaU2hqYjIxd2IyNWxiblJ6S1M1bWIzSkZZV05vS0NoamIyMXdiMjVsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWhnUVdKdmRYUWdkRzhnY21WemIyeDJaU0J5WlhGMWFYSmxZQ2s3WEc0Z0lDQWdZMjl1YzNRZ1kyeGhjM05HYVd4bElEMGdjbVZ4ZFdseVpTaGdMaTR2YzNKakwzVnBMMk52YlhCdmJtVnVkSE12Skh0amIyMXdiMjVsYm5RdWJtRnRaWDB2WTI5dGNHOXVaVzUwTG5SellDazdYRzRnSUNBZ2NtVnpiMngyWlhJdWNtVm5hWE4wWlhKRGIyMXdiMjVsYm5Rb1kyOXRjRzl1Wlc1MExtNWhiV1VzSUdOc1lYTnpSbWxzWlM1a1pXWmhkV3gwS1R0Y2JpQWdmU2s3WEc1OU8xeHVYRzVoWkdSVVpXMXdiR0YwWlhNb1lYQndSbTlzWkdWeUtUdGNibUZrWkVOdmJYQnZibVZ1ZEhNb1lYQndSbTlzWkdWeUtUdGNibHh1WTI5dWMzUWdZWEJ3SUQwZ2JtVjNJRUZ3Y0d4cFkyRjBhVzl1S0NkSGJHbHRiV1Z5VkhKaFkydGxaRWx6YzNWbEp5d2djbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTd2djbVZ6YjJ4MlpYSXBPMXh1THk4Z1lYQndMbk5sZEhWd0tHRndjRVp2YkdSbGNpazdYRzR2THlCamIyNXpkQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMkZ3Y0NjcE8xeHVYRzV6WlhSUWNtOXdaWEowZVVScFpFTm9ZVzVuWlNnb0tTQTlQaUI3WEc0Z0lHRndjQzV6WTJobFpIVnNaVkpsY21WdVpHVnlLQ2s3WEc1OUtUdGNibHh1THk4Z1lYQndMbkpsYm1SbGNrTnZiWEJ2Ym1WdWRDZ25SMnhwYlcxbGNsUnlZV05yWldSSmMzTjFaU2NzSUdGd2NDNXliMjkwUm5KaGJXVXNJRzUxYkd3cE8xeHVYRzVoY0hBdVltOXZkQ2dwTzF4dUlsMTk7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLnRzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLnRzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==