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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jumia-phonebook-dashboard/jumia-phonebook-dashboard.component */ 931);


class AppComponent {
    constructor() {
        this.title = 'phonebook-ui';
        this.message = '';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "jumia-phonebook-dashboard");
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jumia-phonebook-dashboard/jumia-phonebook-dashboard.component */ 931);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/customer.service */ 2541);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/country.service */ 3787);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/paginator */ 6639);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/messages */ 3758);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);




//Components


//Services


//Primeng UI Components







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _services_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService,
        _services_country_service__WEBPACK_IMPORTED_MODULE_3__.CountryService,
        primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_10__.PaginatorModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule,
            primeng_messages__WEBPACK_IMPORTED_MODULE_14__.MessagesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _jumia_phonebook_dashboard_jumia_phonebook_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.JumiaPhonebookDashboardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_10__.PaginatorModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_14__.MessagesModule] }); })();


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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/paginator */ 6639);










function JumiaPhonebookDashboardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r4.label);
} }
function JumiaPhonebookDashboardComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function JumiaPhonebookDashboardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 31);
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
} }
const _c0 = function () { return [10, 20, 50]; };
class JumiaPhonebookDashboardComponent {
    constructor(customerService, countryService, messageService) {
        this.customerService = customerService;
        this.countryService = countryService;
        this.messageService = messageService;
        this.customers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
        this.rowsPerPageOptions = [10, 20, 50];
        this.selectedPage = 0;
        this.countryNamesOptions = [];
        this.stateOptions = [];
        this.msgs = [];
        this.customerFilter = new _models_customer_filter__WEBPACK_IMPORTED_MODULE_0__.CustomerFilter();
    }
    ngOnInit() {
        this.filterCustomers();
        this.getCountryNames();
        this.fillStateOptions();
    }
    filterCustomers() {
        let params = "";
        if (this.customerFilter.countryNameFilter) {
            params += "countryName=" + this.customerFilter.countryNameFilter + "&";
        }
        if (this.customerFilter.stateFilter) {
            params += "state=" + this.customerFilter.stateFilter + "&";
        }
        this.clearNotfication();
        return this.customerService.filterCustomers(params, this.selectedPage, this.pageSize)
            .then(response => {
            this.customers = response.content;
            this.totalRecords = response.totalElements;
        }).catch(() => {
            this.showError("Retrieving customer data has failed!");
        });
    }
    getCountryNames() {
        this.countryService.getCountryNames().then(response => {
            this.fillCountryNamesOptions(response);
        });
    }
    fillStateOptions() {
        this.stateOptions = [];
        this.stateOptions.push({ label: "Valid", value: "true" });
        this.stateOptions.push({ label: "Invalid", value: "false" });
    }
    getPage(event) {
        this.selectedPage = event.page;
        this.pageSize = event.rows;
        this.filterCustomers();
    }
    fillCountryNamesOptions(countryNamesOptions) {
        this.countryNamesOptions = [];
        countryNamesOptions.forEach(countryNamesOptions => {
            this.countryNamesOptions.push({ label: countryNamesOptions, value: countryNamesOptions });
        });
    }
    clearNotfication() {
        this.msgs = [];
    }
    showError(text) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: text });
    }
}
JumiaPhonebookDashboardComponent.ɵfac = function JumiaPhonebookDashboardComponent_Factory(t) { return new (t || JumiaPhonebookDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
JumiaPhonebookDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JumiaPhonebookDashboardComponent, selectors: [["jumia-phonebook-dashboard"]], decls: 27, vars: 15, consts: [["position", "top-right"], [1, "app-header"], [1, "pi", "pi-book", "app-header-icon"], [1, "filters"], [1, "filter-div"], [1, "p-float-label"], ["id", "selectCountryDropdown", "styleClass", "filter-dropdown", 3, "autoDisplayFirst", "showClear", "ngModel", "options", "onChange", "ngModelChange"], ["for", "selectCountryDropdown"], ["id", "selectValidtyDropdown", "styleClass", "filter-dropdown", 3, "autoDisplayFirst", "showClear", "ngModel", "options", "onChange", "ngModelChange"], ["pTemplate", "item"], ["for", "selectValidtyDropdown"], [1, "dashboard"], [3, "value", "rows"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [1, "total-records"], [3, "rowsPerPageOptions", "rows", "totalRecords", "onPageChange"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "phone"], ["field", "phone"], ["pSortableColumn", "countryName"], ["field", "countryName"], ["pSortableColumn", "valid"], ["field", "valid"], [1, "data-row-striped"], [1, "data-cell-name"], [1, "data-cell-phone"], [1, "data-cell-country"], [1, "data-cell-valid"], [1, "pi", "pi-circle-on"]], template: function JumiaPhonebookDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Jumia Phonebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_onChange_8_listener() { return ctx.filterCustomers(); })("ngModelChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_ngModelChange_8_listener($event) { return ctx.customerFilter.countryNameFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Filter by Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_onChange_13_listener() { return ctx.filterCustomers(); })("ngModelChange", function JumiaPhonebookDashboardComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.customerFilter.stateFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, JumiaPhonebookDashboardComponent_ng_template_14_Template, 2, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Filter by Validity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, JumiaPhonebookDashboardComponent_ng_template_21_Template, 13, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, JumiaPhonebookDashboardComponent_ng_template_22_Template, 9, 5, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function JumiaPhonebookDashboardComponent_Template_p_paginator_onPageChange_26_listener($event) { return ctx.getPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoDisplayFirst", false)("showClear", true)("ngModel", ctx.customerFilter.countryNameFilter)("options", ctx.countryNamesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoDisplayFirst", false)("showClear", true)("ngModel", ctx.customerFilter.stateFilter)("options", ctx.stateOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.customers)("rows", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total number of records: ", ctx.totalRecords, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("totalRecords", ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0))("rows", 10);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_paginator__WEBPACK_IMPORTED_MODULE_9__.Paginator, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon], styles: [".is-valid-badge[_ngcontent-%COMP%] {\n    border-radius: 2px;\n    padding: .25em .5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: 1.3em;\n    letter-spacing: .3px;\n}\n\n.is-valid-badge.status-true[_ngcontent-%COMP%] {\n    color: #43A047;\n}\n\n.is-valid-badge.status-false[_ngcontent-%COMP%] {\n    color: #E53935;\n}\n\n.data-row-striped[_ngcontent-%COMP%]:nth-child(even) {\n    background: #f68b1e0f;\n}\n\n.data-cell-name[_ngcontent-%COMP%] {\n    width: 40%;\n}\n\n.data-cell-phone[_ngcontent-%COMP%] {\n    width: 25%;\n}\n\n.data-cell-country[_ngcontent-%COMP%] {\n    width: 25%;\n}\n\n.data-cell-valid[_ngcontent-%COMP%] {\n    width: 10%;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 80px;\n}\n\n.total-records[_ngcontent-%COMP%] {\n    text-align: -webkit-center;\n    color: #495057;\n    font-weight: normal;\n    margin-bottom: 0px;\n}\n\n.app-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 30px;\n    color: #495057;\n}\n\n.filters[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n}\n\n.app-header-icon[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    font-size: 1.3rem;\n}\n\np-table[_ngcontent-%COMP%]     th {\n    background: #f68b1e !important;\n    color: white !important;\n}\n\ndiv.app-header[_ngcontent-%COMP%]     .p-dropdown {\n    width: 300px !important;\n    margin: 2px;\n}\n\np-table[_ngcontent-%COMP%]     .p-sortable-column, p-table[_ngcontent-%COMP%]     .p-sortable-column-icon {\n    color: white !important;\n}\n\np-table[_ngcontent-%COMP%]     .p-highlight, p-table[_ngcontent-%COMP%]     .p-highlight   .p-sortable-column-icon{\n    color: white !important;\n}\n\np-table[_ngcontent-%COMP%]     .p-sortable-column:focus {\n    box-shadow: inset 0 0 0 0.15rem #f68b1e;\n    background-color: white;\n    outline: 0 none;\n}\n\ndiv.app-header[_ngcontent-%COMP%]     .p-dropdown:not(.p-disabled):hover {\n    border-color: #f68b1e !important;\n}\n\ndiv.app-header[_ngcontent-%COMP%]     .p-dropdown:not(.p-disabled).p-focus {\n    box-shadow: inset 0 0 0 0.15rem #f68b1e !important;\n    border-color: #f68b1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1bWlhLXBob25lYm9vay1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoianVtaWEtcGhvbmVib29rLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXZhbGlkLWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG59XG5cbi5pcy12YWxpZC1iYWRnZS5zdGF0dXMtdHJ1ZSB7XG4gICAgY29sb3I6ICM0M0EwNDc7XG59XG5cbi5pcy12YWxpZC1iYWRnZS5zdGF0dXMtZmFsc2Uge1xuICAgIGNvbG9yOiAjRTUzOTM1O1xufVxuXG4uZGF0YS1yb3ctc3RyaXBlZDpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNmNjhiMWUwZjtcbn1cblxuLmRhdGEtY2VsbC1uYW1lIHtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uZGF0YS1jZWxsLXBob25lIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uZGF0YS1jZWxsLWNvdW50cnkge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5kYXRhLWNlbGwtdmFsaWQge1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5kYXNoYm9hcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi50b3RhbC1yZWNvcmRzIHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmFwcC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uZmlsdGVycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwcC1oZWFkZXItaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbnAtdGFibGUgPj4+IHRoIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjY4YjFlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5hcHAtaGVhZGVyID4+PiAucC1kcm9wZG93biB7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbnAtdGFibGUgPj4+IC5wLXNvcnRhYmxlLWNvbHVtbixcbnAtdGFibGUgPj4+IC5wLXNvcnRhYmxlLWNvbHVtbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxucC10YWJsZSA+Pj4gLnAtaGlnaGxpZ2h0LFxucC10YWJsZSA+Pj4gLnAtaGlnaGxpZ2h0ID4+PiAucC1zb3J0YWJsZS1jb2x1bW4taWNvbntcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxucC10YWJsZSA+Pj4gLnAtc29ydGFibGUtY29sdW1uOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjE1cmVtICNmNjhiMWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogMCBub25lO1xufVxuXG5kaXYuYXBwLWhlYWRlciA+Pj4gLnAtZHJvcGRvd246bm90KC5wLWRpc2FibGVkKTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjY4YjFlICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5hcHAtaGVhZGVyID4+PiAucC1kcm9wZG93bjpub3QoLnAtZGlzYWJsZWQpLnAtZm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAuMTVyZW0gI2Y2OGIxZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2Y2OGIxZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
    static get COUNTRIES_URL() {
        return this.ENVIROMENT + "countries";
    }
    static get CUSTOMERS_FILTER_URL() {
        return this.ENVIROMENT + "customers/filter?";
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
        return this.http.get(_jumia_urls_config__WEBPACK_IMPORTED_MODULE_0__.JumiaUrlsConfig.COUNTRIES_URL)
            .toPromise()
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