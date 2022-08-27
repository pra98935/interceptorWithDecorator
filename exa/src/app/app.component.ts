import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exa';
  constructor(private _api: ApiService){}

  callOne(){
    this._api.callUserOne().subscribe((data:any)=>{
      console.log('call one', data);
    })
  }

  callTwo(){
    this._api.callUserTwo().subscribe((data:any)=>{
      console.log('call Two', data);
    })
  }
}
