import {Component, OnInit} from '@angular/core';
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
  filterProduct: Product[] = [];
  filterObject = [];

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
        this.filterProduct = Object.assign([],res);
        this.finalList();
      }, err => {
        console.log(err);
      })
  }
  finalList(){
    if(this.filterObject.length > 0){
        this.filterProduct = Object.assign([], this.showProducts);
      this.filterData();
    } else {
      this.filterProduct = Object.assign([], this.productList);
      this.showProducts = Object.assign([], this.productList);
    }
  }
  filterData(){
    this.showProducts = [];
    let tempData = [];
    for(let filter of this.filterObject) {
        this.filterProduct = this.filterProduct.filter(val => {
            if(filter.key === 'color') {
                return val['colour'].title === filter.value;
            } else if(filter.key === 'final_price'){
                return parseInt(val.price[filter.key]) > parseInt(filter.value);
            } else {
                return parseInt(val[filter.key]) > parseInt(filter.value);
            }
        });
        this.filterProduct.forEach(val=> {
            if(!this.showProducts.find(val1=> val1.id === val.id)){
                this.showProducts.push(val);
            }
        });
    }
    console.log(this.filterProduct);
  }
    handleSubuscribers(){
      this.dataShare.searchEvent.subscribe(res=>{
        this.getProducts(res);
      })
      this.dataShare.filterEvent.subscribe((res: any)=>{
        this.filterObject = res;
        this.finalList();

      })
    }

}
