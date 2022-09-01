import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiqSourceSummariesComponent } from './liq-source-summaries/liq-source-summaries.component';
import { LiqSourceInfosComponent } from './liq-source-infos/liq-source-infos.component';
import { GraphQLModule } from './graphql.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LiquiditySourceEffects } from './state/liq-source.effects';

@NgModule({
  declarations: [
    AppComponent,
    LiqSourceSummariesComponent,
    LiqSourceInfosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, GraphQLModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }), EffectsModule.forRoot([LiquiditySourceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
