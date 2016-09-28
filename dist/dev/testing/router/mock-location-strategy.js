"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var async_1 = require('@angular/core/src/facade/async');
var MockLocationStrategy = (function (_super) {
    __extends(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        _super.call(this);
        this.internalBaseHref = '/';
        this.internalPath = '/';
        this.internalTitle = '';
        this.urlChanges = [];
        this._subject = new async_1.EventEmitter();
    }
    MockLocationStrategy.prototype.simulatePopState = function (url) {
        this.internalPath = url;
        this._subject.emit(new MockPopStateEvent(this.path()));
    };
    MockLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.internalPath;
    };
    MockLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
            return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
    };
    MockLocationStrategy.prototype.pushState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
    };
    MockLocationStrategy.prototype.replaceState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push('replace: ' + externalUrl);
    };
    MockLocationStrategy.prototype.onPopState = function (fn) { this._subject.subscribe({ next: fn }); };
    MockLocationStrategy.prototype.getBaseHref = function () { return this.internalBaseHref; };
    MockLocationStrategy.prototype.back = function () {
        if (this.urlChanges.length > 0) {
            this.urlChanges.pop();
            var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
            this.simulatePopState(nextUrl);
        }
    };
    MockLocationStrategy.prototype.forward = function () { throw 'not implemented'; };
    MockLocationStrategy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockLocationStrategy);
    return MockLocationStrategy;
}(common_1.LocationStrategy));
exports.MockLocationStrategy = MockLocationStrategy;
var MockPopStateEvent = (function () {
    function MockPopStateEvent(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    }
    return MockPopStateEvent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Rpbmcvcm91dGVyL21vY2stbG9jYXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHNCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBUzlEO0lBQTBDLHdDQUFnQjtJQU94RDtRQUFnQixpQkFBTyxDQUFDO1FBTnhCLHFCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMzQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGFBQVEsR0FBc0IsSUFBSSxvQkFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUUxQiwrQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxXQUE0QjtRQUE1QiwyQkFBNEIsR0FBNUIsbUJBQTRCO1FBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFBQyxDQUFDO0lBRXhFLGlEQUFrQixHQUFsQixVQUFtQixRQUFnQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxHQUFRLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFhO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBRXhCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEdBQVEsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFeEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLEVBQXdCLElBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkYsMENBQVcsR0FBWCxjQUF3QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV2RCxtQ0FBSSxHQUFKO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBTyxHQUFQLGNBQWtCLE1BQU0saUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBeEQ5QztRQUFDLGlCQUFVLEVBQUU7OzRCQUFBO0lBeURiLDJCQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RHlDLHlCQUFnQixHQXdEekQ7QUF4RFksNEJBQW9CLHVCQXdEaEMsQ0FBQTtBQUVEO0lBR0UsMkJBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmpDLFFBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFXLFVBQVUsQ0FBQztJQUNVLENBQUM7SUFDdkMsd0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiJ0ZXN0aW5nL3JvdXRlci9tb2NrLWxvY2F0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE1vY2sgbG9jYXRpb24gc3RyYXRlZ3kgKHVudGlsIHByb3ZpZGVkIGJ5IEBhbmd1bGFyKVxyXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL21vZHVsZXMvJTQwYW5ndWxhci9jb21tb24vdGVzdGluZy9tb2NrX2xvY2F0aW9uX3N0cmF0ZWd5LnRzXHJcbiAqL1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9mYWNhZGUvYXN5bmMnO1xyXG5cclxuLyoqXHJcbiAqIEEgbW9jayBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdGhhdCBhbGxvd3MgdGVzdHMgdG8gZmlyZSBzaW11bGF0ZWRcclxuICogbG9jYXRpb24gZXZlbnRzLlxyXG4gKlxyXG4gKiBAc3RhYmxlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2NrTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xyXG4gIGludGVybmFsQmFzZUhyZWY6IHN0cmluZyA9ICcvJztcclxuICBpbnRlcm5hbFBhdGg6IHN0cmluZyA9ICcvJztcclxuICBpbnRlcm5hbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICB1cmxDaGFuZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfc3ViamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgc2ltdWxhdGVQb3BTdGF0ZSh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSB1cmw7XHJcbiAgICB0aGlzLl9zdWJqZWN0LmVtaXQobmV3IE1vY2tQb3BTdGF0ZUV2ZW50KHRoaXMucGF0aCgpKSk7XHJcbiAgfVxyXG5cclxuICBwYXRoKGluY2x1ZGVIYXNoOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pbnRlcm5hbFBhdGg7IH1cclxuXHJcbiAgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGludGVybmFsLnN0YXJ0c1dpdGgoJy8nKSAmJiB0aGlzLmludGVybmFsQmFzZUhyZWYuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJhc2VIcmVmICsgaW50ZXJuYWwuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxCYXNlSHJlZiArIGludGVybmFsO1xyXG4gIH1cclxuXHJcbiAgcHVzaFN0YXRlKGN0eDogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxUaXRsZSA9IHRpdGxlO1xyXG5cclxuICAgIHZhciB1cmwgPSBwYXRoICsgKHF1ZXJ5Lmxlbmd0aCA+IDAgPyAoJz8nICsgcXVlcnkpIDogJycpO1xyXG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSB1cmw7XHJcblxyXG4gICAgdmFyIGV4dGVybmFsVXJsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcclxuICAgIHRoaXMudXJsQ2hhbmdlcy5wdXNoKGV4dGVybmFsVXJsKTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VTdGF0ZShjdHg6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsVGl0bGUgPSB0aXRsZTtcclxuXHJcbiAgICB2YXIgdXJsID0gcGF0aCArIChxdWVyeS5sZW5ndGggPiAwID8gKCc/JyArIHF1ZXJ5KSA6ICcnKTtcclxuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xyXG5cclxuICAgIHZhciBleHRlcm5hbFVybCA9IHRoaXMucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XHJcbiAgICB0aGlzLnVybENoYW5nZXMucHVzaCgncmVwbGFjZTogJyArIGV4dGVybmFsVXJsKTtcclxuICB9XHJcblxyXG4gIG9uUG9wU3RhdGUoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKHtuZXh0OiBmbn0pOyB9XHJcblxyXG4gIGdldEJhc2VIcmVmKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWY7IH1cclxuXHJcbiAgYmFjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVybENoYW5nZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnVybENoYW5nZXMucG9wKCk7XHJcbiAgICAgIHZhciBuZXh0VXJsID0gdGhpcy51cmxDaGFuZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLnVybENoYW5nZXNbdGhpcy51cmxDaGFuZ2VzLmxlbmd0aCAtIDFdIDogJyc7XHJcbiAgICAgIHRoaXMuc2ltdWxhdGVQb3BTdGF0ZShuZXh0VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcndhcmQoKTogdm9pZCB7IHRocm93ICdub3QgaW1wbGVtZW50ZWQnOyB9XHJcbn1cclxuXHJcbmNsYXNzIE1vY2tQb3BTdGF0ZUV2ZW50IHtcclxuICBwb3A6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHR5cGU6IHN0cmluZyA9ICdwb3BzdGF0ZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5ld1VybDogc3RyaW5nKSB7fVxyXG59XHJcbiJdfQ==
