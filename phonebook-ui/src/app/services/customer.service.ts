// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import "rxjs";
import {Loader} from './loader.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JumiaUrlsConfig} from '../jumia-urls-config';

import { Customer } from "../models/customer";


@Injectable()
export class CustomerService {

    // username: String;
    // password: String;
    //
    constructor(private http: HttpClient, private loader: Loader) {


    }

    public getAllCustomers(): Promise<any> {
        return this.http.get(JumiaUrlsConfig.CUSTOMERS_URL).toPromise()
            .catch(err => {
                return Promise.reject(err.message || err);
            });
    }

    //
    // public get(url, additionalHeaders?, responseType?, withoutSpinner?) {
    //     let headers = this.createHeader();
    //     if (additionalHeaders) {
    //         let keys = additionalHeaders.keys();
    //         for (let key of keys) {
    //             headers = headers.append(key, additionalHeaders.get(key));
    //         }
    //     }
    //     if (withoutSpinner) {
    //         return this.http.get(url, {headers: headers, responseType: responseType ? responseType : "json"}).toPromise()
    //             .catch(err => {
    //                 return Promise.reject(err.message || err);
    //             });
    //     } else {
    //         return this.getResult(this.http.get(url, {headers: headers, responseType: responseType ? responseType : "json"}));
    //     }
    // }
    //
    // public post(url, parameterJson, contentType = 'application/json', additionalHeaders?) {
    //     let headers = this.createHeader(contentType);
    //     if (additionalHeaders) {
    //         let keys = additionalHeaders.keys();
    //         for (let key of keys) {
    //             headers = headers.append(key, additionalHeaders.get(key));
    //         }
    //     }
    //
    //     return this.getResult(this.http.post(url, parameterJson, {headers: headers}));
    // }
    //
    // public postWithSpinnerStopped(url, parameterJson, contentType = 'application/json', additionalHeaders?) {
    //     let headers = this.createHeader(contentType);
    //     let allHeaders = null;
    //     if (additionalHeaders) {
    //         let keys = additionalHeaders.keys();
    //         for (let key of keys) {
    //             headers = headers.append(key, additionalHeaders.get(key));
    //         }
    //     }
    //     return (this.http.post(url, parameterJson, {headers: headers})).toPromise()
    //         .catch(err => {
    //             return Promise.reject(err.message || err);
    //         });
    // }
    //
    // public putWithSpinnerStopped(url, parameterJson, contentType = 'application/json', additionalHeaders?) {
    //     let headers = this.createHeader(contentType);
    //     let allHeaders = null;
    //     if (additionalHeaders) {
    //         let keys = additionalHeaders.keys();
    //         for (let key of keys) {
    //             headers = headers.append(key, additionalHeaders.get(key));
    //         }
    //     }
    //     return (this.http.put(url, parameterJson, {headers: headers})).toPromise()
    //         .catch(err => {
    //             return Promise.reject(err.message || err);
    //         });
    // }
    //
    // public put(url, parameterJson, contentType = 'application/json', additionalHeaders?) {
    //     let headers = this.createHeader(contentType);
    //     if (additionalHeaders) {
    //         let keys = additionalHeaders.keys();
    //         for (let key of keys) {
    //             headers = headers.append(key, additionalHeaders.get(key));
    //         }
    //     }
    //
    //     return this.getResult(this.http.put(url, parameterJson, {headers: headers}));
    // }
    //
    // public patch(url, jsonPatch, contentType = 'application/json') {
    //     let headers = this.createHeader(contentType);
    //     return this.getResult(this.http.patch(url, jsonPatch, {headers: headers}));
    // }
    //
    // public delete(url, contentType = 'application/json', body?) {
    //     let headers = this.createHeader(contentType);
    //     let json = body ? {headers: headers, body: body} : {headers: headers};
    //
    //     return this.getResult(this.http.delete(url, json));
    // }
    //
    // public convertToPostQuery(parameterJson) {
    //     var postQuery = [];
    //     for (var parameter in parameterJson) {
    //         if (encodeURIComponent(parameterJson[parameter]) != 'null') {
    //             postQuery.push(encodeURIComponent(parameter) + "=" + encodeURIComponent(parameterJson[parameter]));
    //         }
    //     }
    //     return postQuery.join("&");
    // }
    //
    // public handleError(error: any) {
    //     console.error("An error occurred", error);
    //     return Promise.reject(error);
    // }
    //
    // public getLoader() {
    //     return this.loader;
    // }
    //
    // private createHeader(contentType?) {
    //     let headers = new HttpHeaders().set('OMS-Authorization', 'Bearer ' + localStorage.getItem("token"));
    //     if (contentType) {
    //         headers = headers.append('Content-Type', contentType);
    //     }
    //     return headers;
    // }
    //
    // private getResult(result) {
    //     this.loader.animate();
    //     return result.toPromise()
    //         .then(res => {
    //             this.loader.stop();
    //             return res;
    //         })
    //         .catch(err => {
    //             this.loader.stop();
    //             return Promise.reject(err.error || err);
    //         });
    // }
}
