import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LiquiditySourceSummary } from '../model/liquidity-source-data';
import { selectSummaries } from '../reducers';
import { loadSummaries, startSummaryUpdates, stopSummaryUpdates } from '../state/liq-source.actions';

@Component({
  selector: 'app-liq-source-summaries',
  templateUrl: './liq-source-summaries.component.html',
  styleUrls: ['./liq-source-summaries.component.css']
})
export class LiqSourceSummariesComponent implements OnInit, OnDestroy {

  public summaries$: Observable<LiquiditySourceSummary[]>;

    constructor(private store: Store) {
      this.summaries$ = store.select(selectSummaries);
  }

  ngOnInit(): void {
    this.store.dispatch(startSummaryUpdates());
  }

  ngOnDestroy(): void {
    this.store.dispatch(stopSummaryUpdates());
  }

}
