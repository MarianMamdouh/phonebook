import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import { Component, OnInit } from '@angular/core';
import { CountryService } from "../services/country.service";
import { SelectItem } from "primeng/api";
import { CustomerFilter } from "../models/customer.filter";

@Component({
    selector: 'dashboard',
    templateUrl: './jumia-phonebook-dashboard.component.html',
    styleUrls: ['./jumia-phonebook-dashboard.component.css']
})
export class JumiaPhonebookDashboardComponent implements OnInit {
    customers: Customer[] = [];
    totalRecords: number = 0;
    pageSize: number = 10;
    rowsPerPageOptions: number[] = [10, 20, 50];
    selectedPage: number = 0;
    countryNamesOptions: SelectItem[] = [];
    stateOptions: SelectItem[] = [];
    customerFilter: CustomerFilter;

    constructor(private customerService: CustomerService, private countryService: CountryService) {
        this.customerFilter = new CustomerFilter();
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
            }
        )
    }

    fillCountryNamesOptions(countryNamesOptions) {
        this.countryNamesOptions = [];
        countryNamesOptions.forEach(countryNamesOptions => {
            this.countryNamesOptions.push({label: countryNamesOptions, value: countryNamesOptions});
        });
    }

    fillStateOptions() {
        this.stateOptions = [];
        this.stateOptions.push({label: "True", value: "true"});
        this.stateOptions.push({label: "False", value: "false"});
    }

    filterCustomers() {
        let params = "";
        if (this.customerFilter.countryNameFilter) {
            params += "countryName=" + this.customerFilter.countryNameFilter + "&"
        }
        if (this.customerFilter.stateFilter) {
            params += "state=" + this.customerFilter.stateFilter + "&"
        }
        return this.customerService.filterCustomers(params, this.selectedPage, this.pageSize).then(response => {
                this.customers = response.content;
                this.totalRecords = response.totalElements;
            }
        ).catch();
    }
}
