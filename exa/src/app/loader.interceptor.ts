// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { finalize ,Observable, throwError } from 'rxjs';
// import { LoaderApiService } from './loader-api.service';
// import {LoaderEnabled} from './loader-api.service';
// import {map, take, catchError} from 'rxjs/operators';

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {

//   constructor(private _las:LoaderApiService) {}
  
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     console.log('--LoaderHttpInterceptor')
//     LoaderApiService.showLoader();

//     return next.handle(request).pipe(
//       map(res => {
//         console.log('interceptor res', res);
//         LoaderApiService.hideLoader();
//         return res;
//       }),
//       catchError(error => {
//         LoaderApiService.hideLoader();
//         return throwError(error);
//       })
//     )
//   }
// }
