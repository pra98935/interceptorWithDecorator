import { Component, OnInit } from '@angular/core';
import {LoaderApiService} from '../loader-api.service';

@Component({
  selector: 'app-loader-view',
  templateUrl: './loader-view.component.html',
  styleUrls: ['./loader-view.component.scss']
})
export class LoaderViewComponent implements OnInit {

  constructor(private _ls: LoaderApiService) { }
  // isLoading$ = this._ls.isLoading$;

  get loaderEnabled() {
    console.log('this._ls.loaderEnabled', this._ls.loaderEnabled);
    return this._ls.loaderEnabled;
  }

  ngOnInit(): void {
    console.log('loader view componenet');
  }

}
