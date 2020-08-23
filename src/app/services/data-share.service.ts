import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  userData;
  searchEvent = new Subject();
  addToCartEvent = new Subject();
  cartItemArr = [];
  constructor() { }
}
