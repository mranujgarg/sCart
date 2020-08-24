import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'Guest';
  constructor(public dataShare: DataShareService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.userName = this.dataShare.userData ? this.dataShare.userData.fullName : this.userName;
  }
  handleSubscription() {
    this.dataShare.addToCartEvent.subscribe(res=> {
      this.dataShare.cartItemArr.push(res);
    })
  }

}
