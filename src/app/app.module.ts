import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MandiService } from './app.mandi.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule 
  ],
  providers: [MandiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
