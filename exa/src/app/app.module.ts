import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderViewComponent } from './loader-view/loader-view.component';
import { LoaderApiService } from './loader-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    //LoaderApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
