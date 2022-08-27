import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {LoaderEnabled} from './loader-api.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  callUserOne(){
    console.log('call api one');
    return this._http.get('https://reqres.in/api/users?page=1').pipe(
      map((res) => {
        return res;
      })
    )
  }

  @LoaderEnabled()
  callUserTwo(): Observable<any>{
    console.log('call api two');
    return this._http.get('https://reqres.in/api/users?page=2').pipe(
      map((res) => {
        return res;
      })
    )
  }
}
