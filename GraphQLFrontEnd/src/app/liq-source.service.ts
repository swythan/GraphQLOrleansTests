import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LiquiditySourceInfo, LiquiditySourceSummary } from './model/liquidity-source-data';

@Injectable({
  providedIn: 'root'
})
export class LiqSourceService {

  constructor(
    private http: HttpClient) { }

  public getInfos() {
    return this.http
      .get<LiquiditySourceInfo[]>('https://localhost:32772/liquiditySources/info/')
      .pipe(
        catchError(this.handleError<LiquiditySourceInfo[]>('getInfos', [])));
  }
  public getSummaries() {
    return this.http
      .get<LiquiditySourceSummary[]>('https://localhost:32772/liquiditySources/summary/')
      .pipe(
        catchError(this.handleError<LiquiditySourceSummary[]>('getSummaries', [])));
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
