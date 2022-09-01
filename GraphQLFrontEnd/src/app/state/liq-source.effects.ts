import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LiqSourceService } from '../liq-source.service';
import { loadInfos, loadInfosError, loadInfosSuccess, loadSummaries, loadSummariesError, loadSummariesSuccess } from './liq-source.actions';

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

  constructor(
    private actions$: Actions,
    private liqSourceService: LiqSourceService
  ) { }
}
