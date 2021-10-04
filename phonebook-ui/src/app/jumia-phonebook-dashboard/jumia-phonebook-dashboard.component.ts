// import {Component, OnInit} from "@angular/core";
// import {SelectItem} from 'primeng/api';
// import {UserService} from '../services/user.service';
// import {TranslateService} from '@ngx-translate/core';
// import {PreferencesService} from "../services/preferences.service";
// import {PrivilegeService} from "../services/privilege.service";
 import {CustomerService} from '../services/customer.service';
// import {Router} from '@angular/router';
 import {Customer} from '../models/customer';
// import {Preferences} from "../models/preferences";
// import {LoggedInUser} from "../models/loggedInUser";
//import {Page} from "primeng/table"
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './jumia-phonebook-dashboard.component.html',
    styleUrls: ['./jumia-phonebook-dashboard.component.css']
})
export class JumiaPhonebookDashboardComponent implements OnInit {
    customers: Customer[] = [];
    first = 0;
    rows = 10;
    totalRecords = 50;
    // hasOrderReadPrivilege: boolean;
    // hasShipmentReadPrivilege: boolean;
    // hasICustomerViewPrivilege: boolean;
    // hasICustomerUnitViewPrivilege: boolean;
    // languages: string[] = ["en", "de"];
    // availableLanguages: SelectItem[] = [];
    // selectedLanguage: string;
    // preferences: Preferences;
    // currentUser: LoggedInUser;
    //
    // users: User[] = [];
    //
    constructor(private customerService: CustomerService) {

        // this.fillAvailableLanguages();
        // this.selectedLanguage = this.translate.currentLang ? this.translate.currentLang : "en";
        // this.authenticationService.currentUserObserver
        //     .subscribe((user) => {
        //         if (user) {
        //             this.currentUser = user;
        //             this.hasOrderReadPrivilege = this.privilegeService.hasOrderReadPrivilege();
        //             this.hasShipmentReadPrivilege = this.privilegeService.hasShipmentReadPrivilege();
        //             this.hasICustomerViewPrivilege = this.privilegeService.hasCustomerReadPrivilege();
        //             this.hasICustomerUnitViewPrivilege = this.privilegeService.hasCustomerUnitReadPrivilege();
        //         } else {
        //             this.currentUser = null;
        //         }
        //     });
        // preferencesService.currentUserPreferencesCombined.subscribe((preferences) => {
        //     if (preferences) {
        //         this.preferences = preferences;
        //     }
        // });
    }

    ngOnInit() {
        this.customerService.getAllCustomers().then(response => {
            this.customers = response.content;
            console.log(this.customers);
            }
        ).catch();
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === (this.customers.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }

    // changeLanguage(): Promise<any> {
    //     return this.translate.use(this.selectedLanguage)
    //         .toPromise()
    //         .then(() => true);
    // }
    //
    // fillAvailableLanguages() {
    //     for (let language of this.languages) {
    //         this.availableLanguages.push({label: language, value: language});
    //     }
    // }
    //
    // logout() {
    //     this.userService.logout()
    // }
    //
    // isLoggedIn() {
    //     return this.authenticationService.isLoggedIn();
    // }
}
