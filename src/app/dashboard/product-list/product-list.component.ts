import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../services/cart-service.service";
import {Product} from "../../models/product.model";
import {DataShareService} from "../../services/data-share.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList : Product[] = [];
  showProducts: Product[] = [];
  filterObject;

  constructor(public cartService: CartServiceService,
              public dataShare: DataShareService) {
  }

  ngOnInit(): void {
    this.handleSubuscribers();
    this.getProducts();
  }
  getProducts(search = null){
    let requestParam = {};
    if(search) {
      requestParam['title'] = search;
    }
      this.cartService.getProducts(requestParam).subscribe((res: any) => {
        this.productList = res;
        this.finalList();
      }, err => {
        console.log(err);
      })
  }
  finalList(){
    this.filterObject =  [{key: 'color', value: '#00AF33'}];
    if(this.filterObject){
      this.filterData();
    } else {
      this.showProducts = Object.assign([], this.productList);
    }
  }
  filterData(){
    this.showProducts = [];
    let tempData = [];
    for(let filter of this.filterObject) {
        tempData = this.productList.filter(val => {
            if(filter.key === 'color') {
                return val['colour'].color === filter.value;
            } else {
                return val[filter.key] === filter.value;
            }
        });
        tempData.forEach(val=> {
            if(!this.showProducts.find(val1=> val1.id === val.id)){
                this.showProducts.push(val);
            }
        });
    }
    console.log(tempData);
  }
    handleSubuscribers(){
      this.dataShare.searchEvent.subscribe(res=>{
        this.getProducts(res);
      })
    }

}
