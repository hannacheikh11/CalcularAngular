import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { CalModule } from './cal/cal.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CalModule,


  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
