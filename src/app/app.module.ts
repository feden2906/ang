import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";
import {AppComponent, UserComponent} from "./components";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
