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
    selectedCountryNameOption: string;

    constructor(private customerService: CustomerService, private countryService: CountryService) {
        this.customerFilter = new CustomerFilter();
    }

    ngOnInit() {
        this.getAllCustomers();
        this.getCountryNames();
        this.fillStateOptions();
    }

    getPage(event) {
        this.selectedPage = event.page;
        this.pageSize = event.rows;
        this.getAllCustomers(this.selectedPage, this.pageSize);
    }

    getAllCustomers(pageNumber?, pageSize?) {
        return this.customerService.getAllCustomers(pageNumber, pageSize).then(response => {
                this.customers = response.content;
                this.totalRecords = response.totalElements;
            }
        ).catch();
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

    filter() {
        let params = "";
        if (this.customerFilter.countryNameFilter) {
            params += "countryCode=" + this.customerFilter.countryNameFilter + "&"
        }
        if (this.customerFilter.stateFilter) {
            params += "state=" + this.customerFilter.stateFilter + "&"
        }
        console.log(params);
        return this.customerService.filterCustomers(params, this.selectedPage, this.pageSize).then(response => {
                this.customers = response.content;
                this.totalRecords = response.totalElements;
            }
        ).catch();

    }
}
