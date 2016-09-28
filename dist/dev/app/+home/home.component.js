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
var index_1 = require('../shared/index');
var store_1 = require('@ngrx/store');
var HomeComponent = (function () {
    function HomeComponent(nameListService, _store) {
        var _this = this;
        this.nameListService = nameListService;
        this._store = _store;
        this.newName = '';
        this.names = [];
        this.nameListService.getnamesNgrx();
        this._store.select('names')
            .subscribe(function (names) {
            _this.names = names;
        });
        this._store.subscribe(function (state) { return console.log(state); });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addName = function () {
        this._store.dispatch({ type: 'ADD_NAME', payload: this.newName });
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.NameListService, store_1.Store])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHNCQUE0QixhQUFhLENBQUMsQ0FBQTtBQWExQztJQVlFLHVCQUFtQixlQUFnQyxFQUFVLE1BQWtCO1FBWmpGLGlCQXVEQztRQTNDb0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQVYvRSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFVaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDMUIsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUtELGdDQUFRLEdBQVI7SUFHQSxDQUFDO0lBaUJELCtCQUFPLEdBQVA7UUFHRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBNURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7O3FCQUFBO0lBeURGLG9CQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSxxQkFBYSxnQkF1RHpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge1N0b3JlLCBBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIG5hbWVzOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UsIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgLy9DSEFOR0UgVERIXG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0bmFtZXNOZ3J4KCk7XG4gICAgdGhpcy5fc3RvcmUuc2VsZWN0KCduYW1lcycpXG4gICAgLnN1YnNjcmliZShuYW1lcz0+e1xuICAgICAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgICB9KTtcblxuICAgICAgLy9iaXQgb2YgZmx1ZmYgZm9yIG1vbml0b3JpbmdcbiAgICAgIHRoaXMuX3N0b3JlLnN1YnNjcmliZShzdGF0ZSA9PiBjb25zb2xlLmxvZyhzdGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICAvL0NIQU5HRSBUREhcbiAgICAvL3RoaXMuZ2V0TmFtZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIG5hbWVMaXN0U2VydmljZSBvYnNlcnZhYmxlXG4gICAqL1xuICAvKmdldE5hbWVzKCkge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmdldCgpXG4gICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgfSovXG5cbiAgLyoqXG4gICAqIFB1c2hlcyBhIG5ldyBuYW1lIG9udG8gdGhlIG5hbWVzIGFycmF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbmFtZUxpc3RTZXJ2aWNlLnBvc3RcbiAgICAvLyB0aGlzLm5hbWVzLnB1c2godGhpcy5uZXdOYW1lKTtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCg8QWN0aW9uPnt0eXBlOiAnQUREX05BTUUnLCBwYXlsb2FkOiB0aGlzLm5ld05hbWV9KTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19
