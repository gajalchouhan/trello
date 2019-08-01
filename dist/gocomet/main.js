(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");




var routes = [
    {
        path: '', component: _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gocomet';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/board.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/board.model.ts ***!
  \***************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(name, columns) {
        this.name = name;
        this.columns = columns;
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/models/column.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/column.model.ts ***!
  \****************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
//it Create new object of column
var Column = /** @class */ (function () {
    function Column(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    return Column;
}());



/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\n\n  <!-- Navbar of the project -->\n  <div class=\"navbar has-background-dark\">\n    <div class=\"navbar-brand\">\n      <div class=\"navbar-item\">\n        <h1 class=\"app-name has-gradient-text\">Trello</h1>\n      </div>\n    </div>\n  </div>\n  <!-- End of the Project -->\n\n  <!-- Start a Board -->\n  <div class=\"board\">\n    <div class=\"board-wrapper\" cdkDropListGroup>\n      <div class=\"board-columns\">\n        <!-- One Board user Details -->\n        <div class=\"board-column\" *ngFor=\"let column of board.columns\">\n          <!-- Board Title -->\n          <div class=\"column-title\">\n            <div> {{column.name}}</div>\n          </div>\n          <!-- Card Title -->\n          <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.tasks\" (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"task\" *ngFor=\"let item of column.tasks; let ind = index\" cdkDrag>\n              <div class=\"user-detail\">\n                <!-- Card Heading -->\n                <div class=\"head\">\n                  <div> {{item.head}} </div>\n                  <div (click)=\"removeUserDetail(column.tasks ,ind)\"><img src=\"./assets/cancel.png\" /></div>\n                </div>\n                \n                <!-- user Content -->\n                <div class=\"user-content\">\n                  <div class=\"user-pic\">\n                    <img src={{item.img}} alt=\"user-picture\" />\n                  </div>\n                  <h5>{{item.userName}}</h5>\n                  <p>{{item.text}}</p>\n                </div>\n\n                <div class=\"choose\">\n                  <div class=\"selected\">\n                    <img src=\"./assets/right.jpg\" />\n                    <img src=\"./assets/1.jpg\" />\n                    <img src=\"./assets/7.jpg\" />\n                    <img src=\"./assets/24.jpg\" />\n                  </div>\n                  <div class=\"rejected\">\n                    <img src=\"./assets/wrong.jpeg\" />\n                    <img src=\"./assets/24.jpg\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- end of the particular board Details -->\n    </div>\n  </div>\n  <!-- end Of the Board -->\n</div>"

/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow-x: hidden !important; }\n\n.app-name {\n  font-size: 28px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold; }\n\n.has-gradient-text {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.board {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0; }\n\n.board .board-bar {\n    background: rgba(128, 128, 128, 0.5);\n    padding: 8px 15px; }\n\n.board .board-bar .board-name {\n      font-size: 20px;\n      font-weight: bold;\n      color: white; }\n\n.board .board-wrapper {\n    display: flex;\n    flex-grow: 1;\n    overflow-x: auto; }\n\n.board .board-wrapper .board-columns {\n      display: flex;\n      flex-grow: 1; }\n\n.board .board-wrapper .board-columns .board-column {\n        display: flex;\n        flex-direction: column;\n        flex-grow: 1;\n        flex-basis: 0;\n        min-width: 300px;\n        margin: 50px;\n        border-radius: 4px;\n        background: rgba(255, 255, 255, 0.5); }\n\n.board .board-wrapper .board-columns .board-column:not(:first-child) {\n          margin-left: 0; }\n\n.board .board-wrapper .board-columns .board-column .column-title {\n          font-size: 15px;\n          font-weight: 800;\n          font-family: \"Lato\", sans-serif;\n          text-transform: uppercase;\n          margin-bottom: 15px; }\n\n.tasks-container {\n  flex-grow: 1;\n  overflow-y: auto; }\n\n.task {\n  display: flex;\n  background: white;\n  border-bottom: solid 1px #ddd;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  margin: 0px 10px 15px 10px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05); }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transform: rotate(20deg); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.column-title {\n  position: relative;\n  padding: 5px 8px;\n  margin-bottom: 10px;\n  zoom: 1; }\n\n.column-title div {\n    font-weight: bolder;\n    white-space: normal;\n    width: 100%; }\n\n.user-detail .head {\n  padding: 5px 10px;\n  border-bottom: 1px solid #dbdbdb;\n  white-space: normal;\n  display: flex;\n  justify-content: space-between; }\n\n.user-detail .head img {\n    width: 15px;\n    height: 15px;\n    cursor: pointer; }\n\n.user-detail .user-content {\n  margin: 0 8px; }\n\n.user-detail .user-content h5 {\n    font-size: 16px;\n    font-weight: bolder; }\n\n.user-detail .user-content .user-pic {\n    width: 70px;\n    float: left;\n    margin-bottom: 5px; }\n\n.user-detail .user-content .user-pic img {\n      width: 50px;\n      height: 50px;\n      display: block;\n      margin: 8px auto;\n      border-radius: 50%;\n      border: 1px solid #dbdbdb; }\n\n.user-detail .choose {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #dbdbdb;\n  padding: 2px 10px; }\n\n.user-detail .choose .selected img {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    margin: 1px; }\n\n.user-detail .choose .rejected img {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    margin: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhamFsL0FuZ3VsYXJfbmV3X2FwcGxpY2F0aW9uL2dvY29tZXQvc3JjL2FwcC9wYWdlcy9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxREFBcUQ7RUFDckQsNkJBQTZCO0VBQzdCLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBTGY7SUFRSSxvQ0FBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBVHJCO01BWU0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7O0FBZGxCO0lBbUJJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBckJwQjtNQXdCTSxhQUFhO01BQ2IsWUFBWSxFQUFBOztBQXpCbEI7UUE0QlEsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osYUFBYTtRQUViLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG9DQUFzQixFQUFBOztBQXBDOUI7VUFzQ1UsY0FBYyxFQUFBOztBQXRDeEI7VUEwQ1UsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQiwrQkFBK0I7VUFDL0IseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBOztBQU83QjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixrRkFBa0YsRUFBQTs7QUFHcEY7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUFxSDtFQUNySCx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxVQUFVLEVBQUE7O0FBV1o7RUFDRSxzREFBc0QsRUFBQTs7QUFHeEQ7RUFDRSxzREFBc0QsRUFBQTs7QUFHeEQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixPQUFPLEVBQUE7O0FBSlQ7SUFPSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTs7QUFLZjtFQUVJLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFObEM7SUFTTSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFYckI7RUFnQkksYUFBYSxFQUFBOztBQWhCakI7SUFtQk0sZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQXBCekI7SUF5Qk0sV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUEzQnhCO01BOEJRLFdBQVc7TUFDWCxZQUFZO01BQ1osY0FBYztNQUNkLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7O0FBbkNqQztFQTBDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixpQkFBaUIsRUFBQTs7QUE3Q3JCO0lBaURRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFwRG5CO0lBMERRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhhcy1ncmFkaWVudC10ZXh0IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzEzZjdmNCwgIzJhZjU5OCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuXG4gIC5ib2FyZC1iYXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoZ3JheSwgMC41KTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcblxuICAgIC5ib2FyZC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5ib2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgLmJvYXJkLWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgLmJvYXJkLWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1iYXNpczogMDsgLy8gdG8gZm9yY2UgdGhlIGNvbHVtbnMgdG8gYWxsIGJlIHRoZSBzYW1lIHNpemUsIHJlZ2FyZGxlc3Mgb2YgY29udGVudFxuXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAwLjUpO1xuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW4tdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhc2tzLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luOiAwcHggMTBweCAxNXB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gLmNkay1kcm9wLWxpc3RpbmctZHJhZ2dpbmd7XG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZykgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLmNkay1kcm9wLWxpc3RpbmctcmVjZWl2aW5ne1xuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50YXNrcy1jb250YWluZXIuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudGFzazpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNvbHVtbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgem9vbTogMTtcblxuICBkaXYge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyBVc2VyIERldGFpbHMgY3NzIGluIGNhcmRcbi51c2VyLWRldGFpbCB7XG4gIC5oZWFkIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCA4cHg7XG5cbiAgICBoNSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICAudXNlci1waWMge1xuICAgICAgLy8gcGFkZGluZzogMnB4O1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmb290ZXIgcGFydCBvZiBDYXJkXG4gIC5jaG9vc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuXG4gICAgLnNlbGVjdGVkIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlamVjdGVkIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.ts ***!
  \********************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_models_board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/board.model */ "./src/app/models/board.model.ts");
/* harmony import */ var src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/column.model */ "./src/app/models/column.model.ts");





var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
        // Json Data of Boards
        this.board = new src_app_models_board_model__WEBPACK_IMPORTED_MODULE_3__["Board"]('Test Board', [
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Fantastic Steel Ball', [
                {
                    "head": "Director Of Company",
                    "userName": 'Mary McClure',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos",
                    "img": "./assets/0.jpg"
                },
                {
                    "img": "./assets/1.jpg",
                    "head": "Software Engineer",
                    "userName": 'Albart Mann',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/2.jpg",
                    "head": "Direct Application Assistant",
                    "userName": 'John Schone',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/3.jpg",
                    "head": "Marketing Manger",
                    "userName": 'Levis',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                }
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Hande Granite Gloves', [
                {
                    "img": "./assets/22.jpg",
                    "head": "Director of Engineer",
                    "userName": 'Ramsy',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/24.jpg",
                    "head": "Accountant",
                    "userName": 'Herta Rempel',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Tasty Plastic Shirt', [
                {
                    "img": "./assets/9.jpg",
                    "head": "Sales Head",
                    "userName": 'John Snow',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/10.jpg",
                    "head": "Developer",
                    "userName": 'Hulda Rock',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/13.jpg",
                    "head": "Engineering Head",
                    "userName": 'Marjory Carroll',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/19.jpg",
                    "head": "Head of Department",
                    "userName": 'Daisha Schone',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/7.jpg",
                    "head": "Blogger",
                    "userName": 'Grace Hane',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/8.jpg",
                    "head": "Designer Head",
                    "userName": 'Danareys',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                }
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Small Plastic Pants', [
                {
                    "img": "./assets/22.jpg",
                    "head": "Designer Head",
                    "userName": 'Peter',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                }
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Practical Plastic Gloves', [
                {
                    "img": "./assets/28.jpg",
                    "head": "Front Engineer",
                    "userName": 'Alisha erox',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/32.jpg",
                    "head": "Head of Front end Department",
                    "userName": 'Laxy Bore',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                }
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Tasty Rubber Computer', [
                {
                    "img": "./assets/2.jpg",
                    "head": "Back end Developer",
                    "userName": 'Eilijah ros',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/45.jpg",
                    "head": "Freasher",
                    "userName": 'Elfrado eric',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/42.jpg",
                    "head": "Singer",
                    "userName": 'Arun Chupa',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/26.jpg",
                    "head": "Head of Back-end Developer",
                    "userName": 'Alia ericos',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/8.jpg",
                    "head": "Musician",
                    "userName": 'Little sis Nora',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
            ]),
            new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_4__["Column"]('Gorgeous Rubber Fish', [
                {
                    "img": "./assets/35.jpg",
                    "head": "Band of Rocks",
                    "userName": 'Justin',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/32.jpg",
                    "head": "Speaker",
                    "userName": 'Rihaana Roy',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/28.jpg",
                    "head": "Co-Founder",
                    "userName": 'Galgadot',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
                {
                    "img": "./assets/9.jpg",
                    "head": "Investor",
                    "userName": 'Gajal Vasita',
                    "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
                },
            ])
        ]);
    }
    MainViewComponent.prototype.ngOnInit = function () {
    };
    // This function is use to remove details
    MainViewComponent.prototype.removeUserDetail = function (data, index) {
        data.splice(index, 1);
        console.log(data);
    };
    // THis function use to drap and drop list
    MainViewComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/pages/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.scss */ "./src/app/pages/main-view/main-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gajal/Angular_new_application/gocomet/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map