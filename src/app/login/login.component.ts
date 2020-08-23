import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../services/cart-service.service";
import {DataShareService} from "../services/data-share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMsg = '';
  constructor(
      private cartService: CartServiceService,
      private dataShare: DataShareService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }
  loginCall(){
    const request = {
      username: this.model.userName
    }
    this.cartService.loginUser(request).subscribe((res: any) => {
      if(res.length > 0) {
          this.errorMsg = '';
          this.dataShare.userData = res[0];
          this.router.navigate(['dashboard']);
      } else {
        this.errorMsg = 'Invalid Credentials';
      }
    }, err=> {
        this.errorMsg = 'Something worng with API Please connect help Desk';
    })

  }
}
