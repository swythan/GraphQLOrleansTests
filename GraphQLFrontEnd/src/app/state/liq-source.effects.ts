import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, takeUntil } from 'rxjs/operators';
import { LiqSourceService } from '../liq-source.service';
import { loadInfos, loadInfosError, loadInfosSuccess, loadSummaries, loadSummariesError, loadSummariesSuccess, startSummaryUpdates, stopSummaryUpdates, summaryUpdateReceived } from './liq-source.actions';

@Injectable()
export class LiquiditySourceEffects {

  loadInfos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInfos),
      mergeMap(() => this.liqSourceService.getInfos()
        .pipe(
          map(infos => loadInfosSuccess({ infos })),
          catchError(() => of(loadInfosError()))
        )
      )
    )
  );

  loadSummaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSummaries),
      mergeMap(() => this.liqSourceService.getSummaries()
        .pipe(
          map(summaries => loadSummariesSuccess({ summaries })),
          catchError(() => of(loadSummariesError()))
        )
      )
    )
  );

  summaryUpdates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startSummaryUpdates),
      switchMap(() => this.liqSourceService.getSummaryUpdates().pipe(
        takeUntil(this.actions$.pipe(ofType(stopSummaryUpdates))),
        map(summary => summaryUpdateReceived({ summary }))
      ))
    ));

  constructor(
    private actions$: Actions,
    private liqSourceService: LiqSourceService
  ) { }
}
