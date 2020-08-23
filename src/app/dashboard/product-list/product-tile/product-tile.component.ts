import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {DataShareService} from "../../../services/data-share.service";

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() productListArray: Product[] = [];
  constructor(public dataShare: DataShareService) { }
  ngOnInit(): void {
  }
  addToCart(product){
    this.dataShare.addToCartEvent.next(product);
    console.log(product);
  }
}
