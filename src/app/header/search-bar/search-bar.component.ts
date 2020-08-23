import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {DataShareService} from "../../services/data-share.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  subject = new Subject();
  constructor(public dataShare: DataShareService) { }

  ngOnInit(): void {
    this.searchEvent();
  }

  searchEvent() {
    this.subject.pipe(
        debounceTime(1000), distinctUntilChanged()
    ).subscribe((ev: any) => {
        this.dataShare.searchEvent.next(ev.target.value)
     })
  }

}
