webpackHotUpdate("vendor",{

/***/ "../node_modules/@nativescript/angular/http-client/http-client.module.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var ns_file_system_1 = __webpack_require__("../node_modules/@nativescript/angular/file-system/ns-file-system.js");
var ns_http_backend_1 = __webpack_require__("../node_modules/@nativescript/angular/http-client/ns-http-backend.js");
var NativeScriptHttpClientModule = /** @class */ (function () {
    function NativeScriptHttpClientModule() {
    }
    NativeScriptHttpClientModule = __decorate([
        core_1.NgModule({
            providers: [
                ns_file_system_1.NSFileSystem,
                ns_http_backend_1.NsHttpBackEnd,
                { provide: http_1.HttpBackend, useExisting: ns_http_backend_1.NsHttpBackEnd },
            ],
            imports: [
                http_1.HttpClientModule,
            ],
            exports: [
                http_1.HttpClientModule,
            ]
        })
    ], NativeScriptHttpClientModule);
    return NativeScriptHttpClientModule;
}());
exports.NativeScriptHttpClientModule = NativeScriptHttpClientModule;
//# sourceMappingURL=http-client.module.js.map

/***/ }),

/***/ "../node_modules/@nativescript/angular/http-client/http-utils.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
var file_system_1 = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");
function isLocalRequest(url) {
    return url.indexOf("~") === 0 || url.indexOf("/") === 0;
}
exports.isLocalRequest = isLocalRequest;
function getAbsolutePath(url, nsFileSystem) {
    url = url.replace("~", "").replace("/", "");
    url = file_system_1.path.join(nsFileSystem.currentApp().path, url);
    return url;
}
exports.getAbsolutePath = getAbsolutePath;
function processLocalFileRequest(url, nsFileSystem, successResponse, errorResponse) {
    url = getAbsolutePath(url, nsFileSystem);
    // request from local app resources
    return new rxjs_1.Observable(function (observer) {
        if (nsFileSystem.fileExists(url)) {
            var localFile = nsFileSystem.fileFromPath(url);
            localFile.readText()
                .then(function (data) {
                try {
                    var json = JSON.parse(data);
                    observer.next(successResponse(url, json, 200));
                    observer.complete();
                }
                catch (error) {
                    // Even though the response status was 2xx, this is still an error.
                    // The parse error contains the text of the body that failed to parse.
                    var errorResult = { error: error, text: data };
                    observer.error(errorResponse(url, errorResult, 200));
                }
            }, function (err) {
                observer.error(errorResponse(url, err, 400));
            });
        }
        else {
            observer.error(errorResponse(url, "Not Found", 404));
        }
    });
}
exports.processLocalFileRequest = processLocalFileRequest;
//# sourceMappingURL=http-utils.js.map

/***/ }),

/***/ "../node_modules/@nativescript/angular/http-client/index.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../node_modules/@nativescript/angular/http-client/http-client.module.js"));
__export(__webpack_require__("../node_modules/@nativescript/angular/http-client/ns-http-backend.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@nativescript/angular/http-client/ns-http-backend.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
var ns_file_system_1 = __webpack_require__("../node_modules/@nativescript/angular/file-system/ns-file-system.js");
var http_utils_1 = __webpack_require__("../node_modules/@nativescript/angular/http-client/http-utils.js");
var NsHttpBackEnd = /** @class */ (function (_super) {
    __extends(NsHttpBackEnd, _super);
    function NsHttpBackEnd(xhrFactory, nsFileSystem) {
        var _this = _super.call(this, xhrFactory) || this;
        _this.nsFileSystem = nsFileSystem;
        return _this;
    }
    NsHttpBackEnd.prototype.handle = function (req) {
        var result;
        if (http_utils_1.isLocalRequest(req.url)) {
            result = this.handleLocalFileRequest(req.url);
        }
        else {
            result = _super.prototype.handle.call(this, req);
        }
        return result;
    };
    NsHttpBackEnd.prototype.handleLocalFileRequest = function (url) {
        return http_utils_1.processLocalFileRequest(url, this.nsFileSystem, createSuccessResponse, createErrorResponse);
    };
    NsHttpBackEnd = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.XhrFactory, ns_file_system_1.NSFileSystem])
    ], NsHttpBackEnd);
    return NsHttpBackEnd;
}(http_1.HttpXhrBackend));
exports.NsHttpBackEnd = NsHttpBackEnd;
function createSuccessResponse(url, body, status) {
    return new http_1.HttpResponse({
        url: url,
        body: body,
        status: status,
        statusText: "OK"
    });
}
function createErrorResponse(url, body, status) {
    return new http_1.HttpErrorResponse({
        url: url,
        error: body,
        status: status,
        statusText: "ERROR"
    });
}
//# sourceMappingURL=ns-http-backend.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvYW5ndWxhci9odHRwLWNsaWVudC9odHRwLWNsaWVudC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L2FuZ3VsYXIvaHR0cC1jbGllbnQvaHR0cC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvYW5ndWxhci9odHRwLWNsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvYW5ndWxhci9odHRwLWNsaWVudC9ucy1odHRwLWJhY2tlbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsNkNBQWU7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLCtDQUFzQjtBQUMzQyx1QkFBdUIsbUJBQU8sQ0FBQyxxRUFBK0I7QUFDOUQsd0JBQXdCLG1CQUFPLENBQUMsc0VBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEVBQTRFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4Qzs7Ozs7OztBQzFCQSw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMscUNBQU07QUFDM0Isb0JBQW9CLG1CQUFPLENBQUMsK0RBQTBDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0M7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLHlFQUFzQjtBQUN2QyxTQUFTLG1CQUFPLENBQUMsc0VBQW1CO0FBQ3BDLGlDOzs7Ozs7O0FDTkEsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDZDQUFlO0FBQ3BDLGFBQWEsbUJBQU8sQ0FBQywrQ0FBc0I7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMscUVBQStCO0FBQzlELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkMiLCJmaWxlIjoidmVuZG9yLmE0M2VkOThjYjYxNmJhMjVlMmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgaHR0cF8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpO1xudmFyIG5zX2ZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vZmlsZS1zeXN0ZW0vbnMtZmlsZS1zeXN0ZW1cIik7XG52YXIgbnNfaHR0cF9iYWNrZW5kXzEgPSByZXF1aXJlKFwiLi9ucy1odHRwLWJhY2tlbmRcIik7XG52YXIgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlKCkge1xuICAgIH1cbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBuc19maWxlX3N5c3RlbV8xLk5TRmlsZVN5c3RlbSxcbiAgICAgICAgICAgICAgICBuc19odHRwX2JhY2tlbmRfMS5Oc0h0dHBCYWNrRW5kLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogaHR0cF8xLkh0dHBCYWNrZW5kLCB1c2VFeGlzdGluZzogbnNfaHR0cF9iYWNrZW5kXzEuTnNIdHRwQmFja0VuZCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICBodHRwXzEuSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgaHR0cF8xLkh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgXSwgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSk7XG4gICAgcmV0dXJuIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5OYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlID0gTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50Lm1vZHVsZS5qcy5tYXAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcnhqc18xID0gcmVxdWlyZShcInJ4anNcIik7XG52YXIgZmlsZV9zeXN0ZW1fMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuZnVuY3Rpb24gaXNMb2NhbFJlcXVlc3QodXJsKSB7XG4gICAgcmV0dXJuIHVybC5pbmRleE9mKFwiflwiKSA9PT0gMCB8fCB1cmwuaW5kZXhPZihcIi9cIikgPT09IDA7XG59XG5leHBvcnRzLmlzTG9jYWxSZXF1ZXN0ID0gaXNMb2NhbFJlcXVlc3Q7XG5mdW5jdGlvbiBnZXRBYnNvbHV0ZVBhdGgodXJsLCBuc0ZpbGVTeXN0ZW0pIHtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShcIn5cIiwgXCJcIikucmVwbGFjZShcIi9cIiwgXCJcIik7XG4gICAgdXJsID0gZmlsZV9zeXN0ZW1fMS5wYXRoLmpvaW4obnNGaWxlU3lzdGVtLmN1cnJlbnRBcHAoKS5wYXRoLCB1cmwpO1xuICAgIHJldHVybiB1cmw7XG59XG5leHBvcnRzLmdldEFic29sdXRlUGF0aCA9IGdldEFic29sdXRlUGF0aDtcbmZ1bmN0aW9uIHByb2Nlc3NMb2NhbEZpbGVSZXF1ZXN0KHVybCwgbnNGaWxlU3lzdGVtLCBzdWNjZXNzUmVzcG9uc2UsIGVycm9yUmVzcG9uc2UpIHtcbiAgICB1cmwgPSBnZXRBYnNvbHV0ZVBhdGgodXJsLCBuc0ZpbGVTeXN0ZW0pO1xuICAgIC8vIHJlcXVlc3QgZnJvbSBsb2NhbCBhcHAgcmVzb3VyY2VzXG4gICAgcmV0dXJuIG5ldyByeGpzXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG5zRmlsZVN5c3RlbS5maWxlRXhpc3RzKHVybCkpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbEZpbGUgPSBuc0ZpbGVTeXN0ZW0uZmlsZUZyb21QYXRoKHVybCk7XG4gICAgICAgICAgICBsb2NhbEZpbGUucmVhZFRleHQoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHN1Y2Nlc3NSZXNwb25zZSh1cmwsIGpzb24sIDIwMCkpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbiB0aG91Z2ggdGhlIHJlc3BvbnNlIHN0YXR1cyB3YXMgMnh4LCB0aGlzIGlzIHN0aWxsIGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcGFyc2UgZXJyb3IgY29udGFpbnMgdGhlIHRleHQgb2YgdGhlIGJvZHkgdGhhdCBmYWlsZWQgdG8gcGFyc2UuXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHsgZXJyb3I6IGVycm9yLCB0ZXh0OiBkYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yUmVzcG9uc2UodXJsLCBlcnJvclJlc3VsdCwgMjAwKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yUmVzcG9uc2UodXJsLCBlcnIsIDQwMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvclJlc3BvbnNlKHVybCwgXCJOb3QgRm91bmRcIiwgNDA0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucHJvY2Vzc0xvY2FsRmlsZVJlcXVlc3QgPSBwcm9jZXNzTG9jYWxGaWxlUmVxdWVzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtdXRpbHMuanMubWFwIiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2h0dHAtY2xpZW50Lm1vZHVsZVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9ucy1odHRwLWJhY2tlbmRcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTtcbnZhciBuc19maWxlX3N5c3RlbV8xID0gcmVxdWlyZShcIi4uL2ZpbGUtc3lzdGVtL25zLWZpbGUtc3lzdGVtXCIpO1xudmFyIGh0dHBfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2h0dHAtdXRpbHNcIik7XG52YXIgTnNIdHRwQmFja0VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTnNIdHRwQmFja0VuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOc0h0dHBCYWNrRW5kKHhockZhY3RvcnksIG5zRmlsZVN5c3RlbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB4aHJGYWN0b3J5KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uc0ZpbGVTeXN0ZW0gPSBuc0ZpbGVTeXN0ZW07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTnNIdHRwQmFja0VuZC5wcm90b3R5cGUuaGFuZGxlID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAoaHR0cF91dGlsc18xLmlzTG9jYWxSZXF1ZXN0KHJlcS51cmwpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmhhbmRsZUxvY2FsRmlsZVJlcXVlc3QocmVxLnVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfc3VwZXIucHJvdG90eXBlLmhhbmRsZS5jYWxsKHRoaXMsIHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE5zSHR0cEJhY2tFbmQucHJvdG90eXBlLmhhbmRsZUxvY2FsRmlsZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBodHRwX3V0aWxzXzEucHJvY2Vzc0xvY2FsRmlsZVJlcXVlc3QodXJsLCB0aGlzLm5zRmlsZVN5c3RlbSwgY3JlYXRlU3VjY2Vzc1Jlc3BvbnNlLCBjcmVhdGVFcnJvclJlc3BvbnNlKTtcbiAgICB9O1xuICAgIE5zSHR0cEJhY2tFbmQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwXzEuWGhyRmFjdG9yeSwgbnNfZmlsZV9zeXN0ZW1fMS5OU0ZpbGVTeXN0ZW1dKVxuICAgIF0sIE5zSHR0cEJhY2tFbmQpO1xuICAgIHJldHVybiBOc0h0dHBCYWNrRW5kO1xufShodHRwXzEuSHR0cFhockJhY2tlbmQpKTtcbmV4cG9ydHMuTnNIdHRwQmFja0VuZCA9IE5zSHR0cEJhY2tFbmQ7XG5mdW5jdGlvbiBjcmVhdGVTdWNjZXNzUmVzcG9uc2UodXJsLCBib2R5LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gbmV3IGh0dHBfMS5IdHRwUmVzcG9uc2Uoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IFwiT0tcIlxuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JSZXNwb25zZSh1cmwsIGJvZHksIHN0YXR1cykge1xuICAgIHJldHVybiBuZXcgaHR0cF8xLkh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGVycm9yOiBib2R5LFxuICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogXCJFUlJPUlwiXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ucy1odHRwLWJhY2tlbmQuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==