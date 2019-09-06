/*
specifies top level module:
bootstrap: [AppComponent]

imports required modules (also import files in which these modules are defined):
  imports: [
    BrowserModule,
    AppRoutingModule
  ]

declare imported components:
  declarations: [
    AppComponent
  ]

export the module:
export class AppModule { }

cf. root component. No code in root module
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
/*
Module decorator
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule  // import feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
