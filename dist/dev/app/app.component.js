"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./shared/index');
var store_1 = require('@ngrx/store');
var AppComponent = (function () {
    function AppComponent(_store) {
        this._store = _store;
        console.log('Environment config', index_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent]
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQTBELGdCQUFnQixDQUFDLENBQUE7QUFDM0Usc0JBQW9CLGFBQWEsQ0FBQyxDQUFBO0FBYWxDO0lBQ0Usc0JBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxjQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBVkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztTQUNuRSxDQUFDOztvQkFBQTtJQU1GLG1CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxvQkFBWSxlQUl4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWcsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcbiAqIGFwcGxpY2F0aW9ucyByb3V0ZXMsIGNvbmZpZ3VyaW5nIHRoZSBwYXRocyBmb3IgdGhlIGxhenkgbG9hZGVkIGNvbXBvbmVudHMgKEhvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50KS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZTogU3RvcmU8YW55Pikge1xuICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICB9XG59XG4iXX0=
