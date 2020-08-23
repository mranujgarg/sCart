import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FiltersComponent } from './dashboard/filters/filters.component';
import { ProductListComponent } from './dashboard/product-list/product-list.component';
import { ProductTileComponent } from './dashboard/product-list/product-tile/product-tile.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CartServiceService} from "./services/cart-service.service";
import {FormsModule} from "@angular/forms";
import {DataShareService} from "./services/data-share.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FiltersComponent,
    ProductListComponent,
    ProductTileComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [CartServiceService, DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
