import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {map, take, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderApiService {

  constructor() { }

  // isLoading = new Subject<boolean>();
  // isLoading$ = this.isLoading.asObservable();
  private static loaderEnabled: boolean;

  get loaderEnabled() {
    return LoaderApiService.loaderEnabled;
  }

  public static showLoader(){
    console.log('show loader');
    LoaderApiService.loaderEnabled = true;
  }

  public static hideLoader(){
    console.log('hide loader');
    LoaderApiService.loaderEnabled = false;
  }

}

/*  --Decorator LoaderEnabled--
Use @LoaderEnabled() above any method that returns an observable.
This would inject few lines to show the loader before actually invoking
the caller function and also adds a map and catch section to hide the 
loader once the subscription is complete.
*/
export function LoaderEnabled(){

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    

    console.log('target', target);
    console.log('propertyKey', propertyKey);
    console.log('descriptor', descriptor);

    console.log('original', original);

    descriptor.value = function () {

      LoaderApiService.showLoader();
      console.log('**InjectedCode-begin--LOADERON', propertyKey);

    
      console.log('this', this);
      console.log('arguments', arguments);

      return original.apply(this, arguments)
        .pipe(
          map((res) => {
            console.log('**InjectedCode-map--LOADEROFF', propertyKey);
            console.log('res deco', res);
            LoaderApiService.hideLoader();
            return res;
          }),
          catchError((err) => {
            console.log('**InjectedCode-err--LOADEROFF', propertyKey);
            LoaderApiService.hideLoader();
            throw err;
          })
        );
    };
    return descriptor;

  };
}


export function TokenEnabled(){

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    
    // descriptor.value = function () {

    //   LoaderApiService.showLoader();
    //   console.log('**InjectedCode-begin--LOADERON', propertyKey);

    //   return original.apply(this, arguments)
    //     .pipe(
    //       map((res) => {
    //         console.log('**InjectedCode-map--LOADEROFF', propertyKey);
    //         console.log('res deco', res);
    //         LoaderApiService.hideLoader();
    //         return res;
    //       }),
    //       catchError((err) => {
    //         console.log('**InjectedCode-err--LOADEROFF', propertyKey);
    //         LoaderApiService.hideLoader();
    //         throw err;
    //       })
    //     );
    // };
    // return descriptor;

  };
}