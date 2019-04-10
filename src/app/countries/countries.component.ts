import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as Countries from './../store/reducers';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private store: Store<Countries.CountriesState>) {

   }

  ngOnInit() {
    this.store.select('countries').subscribe(data => console.log(data));
  }

}
