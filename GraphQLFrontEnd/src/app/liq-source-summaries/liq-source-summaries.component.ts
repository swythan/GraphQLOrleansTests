import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LiqSourceService } from '../liq-source.service';
import { LiquiditySourceSummary } from '../model/liquidity-source-data';

@Component({
  selector: 'app-liq-source-summaries',
  templateUrl: './liq-source-summaries.component.html',
  styleUrls: ['./liq-source-summaries.component.css']
})
export class LiqSourceSummariesComponent implements OnInit {

  public summaries$: Observable<LiquiditySourceSummary[]>;

  constructor(private liqSourceService: LiqSourceService) { }

  ngOnInit(): void {
    this.summaries$ = this.liqSourceService.getSummaries()
  }

}
