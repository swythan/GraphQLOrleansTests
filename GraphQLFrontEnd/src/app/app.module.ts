import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiqSourceSummariesComponent } from './liq-source-summaries/liq-source-summaries.component';
import { LiqSourceInfosComponent } from './liq-source-infos/liq-source-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    LiqSourceSummariesComponent,
    LiqSourceInfosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
