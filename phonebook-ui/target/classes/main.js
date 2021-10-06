(self["webpackChunkphonebook_ui"] = self["webpackChunkphonebook_ui"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jumia-phonebook-dashboard/jumia-phonebook-dashboard.component */ 931);




class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'phonebook-ui';
        this.message = '';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dashboard");
    } }, directives: [_jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.JumiaPhonebookDashboardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jumia-phonebook-dashboard/jumia-phonebook-dashboard.component */ 931);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/customer.service */ 2541);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/country.service */ 3787);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/paginator */ 6639);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _services_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService,
        _services_country_service__WEBPACK_IMPORTED_MODULE_3__.CountryService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.JumiaPhonebookDashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.PaginatorModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 931:
/*!**********************************************************************************!*\
  !*** ./src/app/jumia-phonebook-dashboard/jumia-phonebook-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JumiaPhonebookDashboardComponent": () => (/* binding */ JumiaPhonebookDashboardComponent)
/* harmony export */ });
/* harmony import */ var _models_customer_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/customer.filter */ 1667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/customer.service */ 2541);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/country.service */ 3787);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ 6639);









function JumiaPhonebookDashboardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("is-valid-badge status-" + option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r4.value);
} }
function JumiaPhonebookDashboardComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function JumiaPhonebookDashboardComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r5.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("is-valid-badge status-" + customer_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](customer_r5.valid);
} }
const _c0 = function () { return [10, 20, 50]; };
class JumiaPhonebookDashboardComponent {
    constructor(customerService, countryService) {
        this.customerService = customerService;
        this.countryService = countryService;
        this.customers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
        this.rowsPerPageOptions = [10, 20, 50];
        this.selectedPage = 0;
        this.countryNamesOptions = [];
        this.stateOptions = [];
        this.customerFilter = new _models_customer_filter__WEBPACK_IMPORTED_MODULE_0__.CustomerFilter();
    }
    ngOnInit() {
        this.filterCustomers();
        this.getCountryNames();
        this.fillStateOptions();
    }
    getPage(event) {
        this.selectedPage = event.page;
        this.pageSize = event.rows;
        this.filterCustomers();
    }
    getCountryNames() {
        this.countryService.getCountryNames().then(response => {
            this.fillCountryNamesOptions(response);
        });
    }
    fillCountryNamesOptions(countryNamesOptions) {
        this.countryNamesOptions = [];
        countryNamesOptions.forEach(countryNamesOptions => {
            this.countryNamesOptions.push({ label: countryNamesOptions, value: countryNamesOptions });
        });
    }
    fillStateOptions() {
        this.stateOptions = [];
        this.stateOptions.push({ label: "True", value: "true" });
        this.stateOptions.push({ label: "False", value: "false" });
    }
    filterCustomers() {
        let params = "";
        if (this.customerFilter.countryNameFilter) {
            params += "countryName=" + this.customerFilter.countryNameFilter + "&";
        }
        if (this.customerFilter.stateFilter) {
            params += "state=" + this.customerFilter.stateFilter + "&";
        }
        return this.customerService.filterCustomers(params, this.selectedPage, this.pageSize).then(response => {
            this.customers = response.content;
            this.totalRecords = response.totalElements;
        }).catch();
    }
}
JumiaPhonebookDashboardComponent.ɵfac = function JumiaPhonebookDashboardComponent_Factory(t) { return new (t || JumiaPhonebookDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService)); };
JumiaPhonebookDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JumiaPhonebookDashboardComponent, selectors: [["dashboard"]], decls: 22, vars: 14, consts: [[1, "main-filter-div"], [1, "filter-div"], [1, "p-float-label"], ["id", "selectCountryDropdown", "styleClass", "filter-dropdown", 3, "autoDisplayFirst", "showClear", "ngModel", "options", "onChange", "ngModelChange"], ["for", "selectCountryDropdown"], ["id", "selectValidtyDropdown", "styleClass", "filter-dropdown", 3, "autoDisplayFirst", "showClear", "ngModel", "options", "onChange", "ngModelChange"], ["pTemplate", "item"], ["for", "selectValidtyDropdown"], [1, "dashboard"], [1, "p-mb-3"], [3, "value", "rows"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [3, "rowsPerPageOptions", "rows", "totalRecords", "onPageChange"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "phone"], ["field", "phone"], ["pSortableColumn", "countryName"], ["field", "countryName"], ["pSortableColumn", "valid"], ["field", "valid"], [1, "data-row-striped"], [1, "data-cell-name"], [1, "data-cell-phone"], [1, "data-cell-country"], [1, "data-cell-valid"]], template: function JumiaPhonebookDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_onChange_5_listener() { return ctx.filterCustomers(); })("ngModelChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_ngModelChange_5_listener($event) { return ctx.customerFilter.countryNameFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Select a country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_onChange_10_listener() { return ctx.filterCustomers(); })("ngModelChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_ngModelChange_10_listener($event) { return ctx.customerFilter.stateFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, JumiaPhonebookDashboardComponent_ng_template_11_Template, 2, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Select Validity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, JumiaPhonebookDashboardComponent_ng_template_19_Template, 13, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, JumiaPhonebookDashboardComponent_ng_template_20_Template, 10, 6, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function JumiaPhonebookDashboardComponent_Template_p_paginator_onPageChange_21_listener($event) { return ctx.getPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoDisplayFirst", false)("showClear", true)("ngModel", ctx.customerFilter.countryNameFilter)("options", ctx.countryNamesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoDisplayFirst", false)("showClear", true)("ngModel", ctx.customerFilter.stateFilter)("options", ctx.stateOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.customers)("rows", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("totalRecords", ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0))("rows", 10);
    } }, directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.Paginator, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon], styles: [".is-valid-badge[_ngcontent-%COMP%] {\n    border-radius: 2px;\n    padding: .25em .5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 12px;\n    letter-spacing: .3px;\n}\n\n.is-valid-badge.status-true[_ngcontent-%COMP%] {\n    background-color: #c8e6c9;\n    color: #256029;\n}\n\n.is-valid-badge.status-false[_ngcontent-%COMP%] {\n    background-color: #ffcdd2;\n    color: #c63737;\n}\n\n.data-row-striped[_ngcontent-%COMP%]:nth-child(even) {\n    background: #f68b1e0f;\n}\n\n.data-cell-name[_ngcontent-%COMP%] { width: 40%; }\n\n.data-cell-phone[_ngcontent-%COMP%] { width: 25%; }\n\n.data-cell-country[_ngcontent-%COMP%] { width: 25%; }\n\n.data-cell-valid[_ngcontent-%COMP%] { width: 10%; }\n\n.dashboard[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1bWlhLXBob25lYm9vay1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxrQkFBa0IsVUFBVSxFQUFFOztBQUM5QixtQkFBbUIsVUFBVSxFQUFFOztBQUMvQixxQkFBcUIsVUFBVSxFQUFFOztBQUNqQyxtQkFBbUIsVUFBVSxFQUFFOztBQUUvQjtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckIiLCJmaWxlIjoianVtaWEtcGhvbmVib29rLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXZhbGlkLWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcbn1cblxuLmlzLXZhbGlkLWJhZGdlLnN0YXR1cy10cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xuICAgIGNvbG9yOiAjMjU2MDI5O1xufVxuXG4uaXMtdmFsaWQtYmFkZ2Uuc3RhdHVzLWZhbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xuICAgIGNvbG9yOiAjYzYzNzM3O1xufVxuXG4uZGF0YS1yb3ctc3RyaXBlZDpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNmNjhiMWUwZjtcbn1cblxuLmRhdGEtY2VsbC1uYW1lIHsgd2lkdGg6IDQwJTsgfVxuLmRhdGEtY2VsbC1waG9uZSB7IHdpZHRoOiAyNSU7IH1cbi5kYXRhLWNlbGwtY291bnRyeSB7IHdpZHRoOiAyNSU7IH1cbi5kYXRhLWNlbGwtdmFsaWQgeyB3aWR0aDogMTAlOyB9XG5cbi5kYXNoYm9hcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 587:
/*!**************************************!*\
  !*** ./src/app/jumia-urls-config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JumiaUrlsConfig": () => (/* binding */ JumiaUrlsConfig)
/* harmony export */ });
class JumiaUrlsConfig {
    static get ENVIROMENT() {
        return "http://localhost:8080/";
    }
    static get CUSTOMERS_URL() {
        return this.ENVIROMENT + "customers";
    }
    static get COUNTRIES_URL() {
        return this.ENVIROMENT + "countries";
    }
    static get CUSTOMERS_FILTER_URL() {
        return this.CUSTOMERS_URL + "/filter?";
    }
}


/***/ }),

/***/ 1667:
/*!*******************************************!*\
  !*** ./src/app/models/customer.filter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFilter": () => (/* binding */ CustomerFilter)
/* harmony export */ });
class CustomerFilter {
}


/***/ }),

/***/ 3787:
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var _jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jumia-urls-config */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class CountryService {
    constructor(http) {
        this.http = http;
    }
    getCountryNames() {
        return this.http.get(_jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__.JumiaUrlsConfig.COUNTRIES_URL).toPromise()
            .catch(err => {
            return Promise.reject(err.message || err);
        });
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac });


/***/ }),

/***/ 2541:
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jumia-urls-config */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getAllCustomers(selectedPage, pageSize) {
        return this.http.get(_jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__.JumiaUrlsConfig.CUSTOMERS_URL + "?" + (!pageSize ? '' : "&size=" + pageSize + "&page=" + selectedPage))
            .toPromise()
            .catch(err => {
            return Promise.reject(err.message || err);
        });
    }
    filterCustomers(params, selectedPage, pageSize) {
        return this.http.get(_jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__.JumiaUrlsConfig.CUSTOMERS_FILTER_URL + params + (!pageSize ? '' : "size=" + pageSize + "&page=" + selectedPage))
            .toPromise()
            .catch(err => {
            return Promise.reject(err.message || err);
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map