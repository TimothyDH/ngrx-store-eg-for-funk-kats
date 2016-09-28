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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var about_module_1 = require('./+about/about.module');
var home_module_1 = require('./+home/home.module');
var shared_module_1 = require('./shared/shared.module');
var store_1 = require('@ngrx/store');
var name_reducer_1 = require('./shared/store/name-reducer');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.routes), about_module_1.AboutModule, home_module_1.HomeModule, shared_module_1.SharedModule.forRoot(),
                store_1.StoreModule.provideStore({ names: name_reducer_1.names })
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUN0Qyw2QkFBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRCw0QkFBMkIscUJBQXFCLENBQUMsQ0FBQTtBQUNqRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCxzQkFBMEIsYUFBYSxDQUFDLENBQUE7QUFDeEMsNkJBQXNCLDZCQUE2QixDQUFDLENBQUE7QUFrQnBEO0lBQUE7SUFBeUIsQ0FBQztJQWYxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsaUJBQVUsRUFBRSxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDLEVBQUUsMEJBQVcsRUFBRSx3QkFBVSxFQUFFLDRCQUFZLENBQUMsT0FBTyxFQUFFO2dCQUNoSCxtQkFBVyxDQUFDLFlBQVksQ0FBRSxFQUFDLE9BQUEsb0JBQUssRUFBQyxDQUFDO2FBQ2pDO1lBQ0gsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7O2lCQUFBO0lBSXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IEFib3V0TW9kdWxlIH0gZnJvbSAnLi8rYWJvdXQvYWJvdXQubW9kdWxlJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuLytob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHtTdG9yZU1vZHVsZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbmFtZXMgfSBmcm9tICcuL3NoYXJlZC9zdG9yZS9uYW1lLXJlZHVjZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLCBBYm91dE1vZHVsZSwgSG9tZU1vZHVsZSwgU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoIHtuYW1lc30pXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gIH1dLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
