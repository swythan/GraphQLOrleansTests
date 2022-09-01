import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LiqSourceInfosGQL, LiqSourceSummariesGQL, LiqSourceSummaryUpdatesGQL } from '../generated/graphql';
import { LiquiditySourceInfo, LiquiditySourceSummary } from './model/liquidity-source-data';

@Injectable({
  providedIn: 'root'
})
export class LiqSourceService {

  constructor(
    private infosGQL: LiqSourceInfosGQL,
    private summariesGQL: LiqSourceSummariesGQL,
    private summaryUpdateGQL: LiqSourceSummaryUpdatesGQL ) { }

  public getInfos() {
    return this.infosGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.liquiditySourceInfo.nodes)
      );
  }

  public getSummaries() {
    return this.summariesGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.liquiditySourceSummaries.nodes)
      );
  }

  public getSummaryUpdates() {
    return this.summaryUpdateGQL.subscribe()
      .pipe(
        map(result => result.data.summaryUpdated)
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      //// TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
