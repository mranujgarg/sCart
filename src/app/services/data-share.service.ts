import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  userData: any;
  searchEvent = new Subject();
  addToCartEvent = new Subject();
  filterEvent = new Subject();
  cartItemArr = [];
  constructor() { }
}
