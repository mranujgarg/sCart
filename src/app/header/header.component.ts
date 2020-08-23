import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataShare: DataShareService) { }

  ngOnInit(): void {
    this.handleSubscription();
  }
  handleSubscription() {
    this.dataShare.addToCartEvent.subscribe(res=> {
      this.dataShare.cartItemArr.push(res);
    })
  }

}
