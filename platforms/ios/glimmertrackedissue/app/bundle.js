module.exports =
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxtQkFBb0IsU0FBUSxTQUFTO0lBQTFEOztRQUNFLFVBQUssR0FBRywyQkFBMkIsQ0FBQTtRQUUxQixVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBS3JCLENBQUM7SUFIQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFMVTtJQUFSLE9BQU87a0RBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50LCB7IHRyYWNrZWQgfSBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGl0bGUgPSBcIldlbGNvbWUgdG8gR2xpbW1lciBOYXRpdmVcIlxuXG4gIEB0cmFja2VkIGNvdW50ID0gMDtcblxuICBjbGlja2VkKCkge1xuICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50ICsgMTtcbiAgfVxufVxuIl19

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sbUJBQW9CLFNBQVEsU0FBUztJQUExRDs7UUFDSSxVQUFLLEdBQUcsMkJBQTJCLENBQUE7SUFDdkMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyVHJhY2tlZElzc3VlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICB0aXRsZSA9IFwiV2VsY29tZSB0byBHbGltbWVyIE5hdGl2ZVwiXG59XG4iXX0=

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

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);

;
    if (false) {}


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
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDaEMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRzFDLE1BQU0sWUFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUU7SUFDakMsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QywwQ0FBMEM7SUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN6QyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FDaEMsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxDQUFDLFlBQVksQ0FDdEIsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtJQUNsQyxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUQsSUFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0Usd0JBQXdCO0FBQ3hCLDJEQUEyRDtBQUUzRCxvQkFBb0IsQ0FBQyxHQUFHLEVBQUU7SUFDeEIsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFSCxtRUFBbUU7QUFFbkUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0UHJvcGVydHlEaWRDaGFuZ2UgfSBmcm9tICdAZ2xpbW1lci90cmFja2luZyc7XG5pbXBvcnQgQXBwbGljYXRpb24sIHsgUmVzb2x2ZXIsIFJlc29sdmVyRGVsZWdhdGUgfSBmcm9tICdnbGltbWVyLW5hdGl2ZSc7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcblxuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xubGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG5cblxuY29uc3QgYWRkVGVtcGxhdGVzID0gKGFwcEZvbGRlcikgPT4ge1xuICBsZXQgdGVtcGxhdGVzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKCd0ZW1wbGF0ZXMuanNvbicpO1xuICBsZXQgdGVtcGxhdGVzID0gdGVtcGxhdGVzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgLy8gY29uc29sZS5sb2coYFRlbXBsYXRlczogJHt0ZW1wbGF0ZXN9YCk7XG4gIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgIHJlc29sdmVyRGVsZWdhdGUucmVnaXN0ZXJDb21wb25lbnQoXG4gICAgICB0ZW1wbGF0ZS5uYW1lLFxuICAgICAgdGVtcGxhdGUuaGFuZGxlLFxuICAgICAgdGVtcGxhdGUuc291cmNlLFxuICAgICAgdGVtcGxhdGUuY2FwYWJpbGl0aWVzXG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRDb21wb25lbnRzID0gKGFwcEZvbGRlcikgPT4ge1xuICBsZXQgY29tcG9uZW50c0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZSgnY29tcG9uZW50cy5qc29uJyk7XG4gIGxldCBjb21wb25lbnRzID0gY29tcG9uZW50c0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgSlNPTi5wYXJzZShjb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgcmVzb2x2ZXIucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNsYXNzRmlsZS5kZWZhdWx0KTtcbiAgfSk7XG59O1xuXG5hZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbmFkZENvbXBvbmVudHMoYXBwRm9sZGVyKTtcblxuY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCdHbGltbWVyVHJhY2tlZElzc3VlJywgcmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpO1xuLy8gYXBwLnNldHVwKGFwcEZvbGRlcik7XG4vLyBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG5zZXRQcm9wZXJ0eURpZENoYW5nZSgoKSA9PiB7XG4gIGFwcC5zY2hlZHVsZVJlcmVuZGVyKCk7XG59KTtcblxuLy8gYXBwLnJlbmRlckNvbXBvbmVudCgnR2xpbW1lclRyYWNrZWRJc3N1ZScsIGFwcC5yb290RnJhbWUsIG51bGwpO1xuXG5hcHAuYm9vdCgpO1xuIl19
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);