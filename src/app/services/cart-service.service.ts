import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
export const urlForAPI = 'https://xebiascart.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(public http: HttpClient) { }
    // getProducts(): Observable<HttpResponse<Object>> {
    //     const finalUrl = urlForAPI +'products';
    //     return this.http.get<HttpResponse<Object>>(finalUrl);
    // }

    loginUser(reqParam): Observable<HttpResponse<Object>> {
        const finalUrl = urlForAPI +'users';
        return this.http.get<HttpResponse<Object>>(finalUrl, {params: reqParam});
    }
    getProducts(reqParam): Observable<HttpResponse<Object>> {
        const finalUrl = urlForAPI +'products';
        return this.http.get<HttpResponse<Object>>(finalUrl, {params: reqParam});
    }
}
