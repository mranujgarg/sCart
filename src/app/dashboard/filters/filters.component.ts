import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartServiceService} from "../../services/cart-service.service";
import {DataShareService} from "../../services/data-share.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterArr = [];
  selectedFilters = [];
  selectedColor = [];
  selectedPrice;
  selectedDiscount;
  @Output() sendData = new EventEmitter;
  constructor(public cartService: CartServiceService,
              public dataShared: DataShareService) {

  }

  ngOnInit(): void {
    this.getFilters()
  }

  getFilters(){
    this.cartService.getFilters().subscribe((res:any) => {
      this.filterArr = res;
    }, err =>{
        console.log(err);
    })
  }
  clickonCheckBox(evt,filter){
    if(evt.target.checked){
        this.addValueInFilter({key: 'color', value: filter.title});
    } else {
        this.removeValueInFilter({key: 'color', value: filter.title});
    }
  }
    // this.filterObject =  [{key: 'color', value: '#00AF33'}];
    dropDownSelectedDiscount(evnt){
    if(evnt.value === 0){
        this.selectedDiscount = null;
    }else {
        this.selectedDiscount = evnt;
    }
        this.mergeFilterArray();
    }
    dropDownSelectedPrice(evnt){
      this.selectedPrice = evnt;
        this.mergeFilterArray();
    }
    addValueInFilter(val){
      if(this.selectedColor.length > 0){
        if(!this.selectedColor.find(res => res.value === val.value)){
            this.selectedColor.push(val)
        }
      } else {
        this.selectedColor.push(val)
      }
        this.mergeFilterArray();
    }
    removeValueInFilter(val){
        if(this.selectedColor.length !== 0){
            this.selectedColor = this.selectedColor.filter(res=> res.value !== val.value);
        }
        this.mergeFilterArray();
    }
    mergeFilterArray(){
        this.selectedFilters = [];
        if(this.selectedColor.length > 0){
        this.selectedFilters = Object.assign([],this.selectedColor);
    }
        if(this.selectedPrice){
            this.selectedFilters.push(this.selectedPrice);
        }
        if(this.selectedDiscount){
            this.selectedFilters.push(this.selectedDiscount);
        }
        this.dataShared.filterEvent.next(this.selectedFilters);
    }
}
