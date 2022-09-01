import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LiquiditySourceInfo } from '../model/liquidity-source-data';
import { selectInfos } from '../reducers';
import { loadInfos } from '../state/liq-source.actions';

@Component({
  selector: 'app-liq-source-infos',
  templateUrl: './liq-source-infos.component.html',
  styleUrls: ['./liq-source-infos.component.css']
})
export class LiqSourceInfosComponent implements OnInit {
  public infos$ : Observable<LiquiditySourceInfo[]>;

  constructor(private store: Store) {
    this.infos$ = store.select(selectInfos);
  }

  ngOnInit(): void {
    this.store.dispatch(loadInfos());
  }
}
