import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LiqSourceService } from '../liq-source.service';
import { LiquiditySourceInfo } from '../model/liquidity-source-data';

@Component({
  selector: 'app-liq-source-infos',
  templateUrl: './liq-source-infos.component.html',
  styleUrls: ['./liq-source-infos.component.css']
})
export class LiqSourceInfosComponent implements OnInit {
  public infos$ : Observable<LiquiditySourceInfo[]>;

  constructor(private liqSourceService: LiqSourceService) { }

  ngOnInit(): void {
    this.infos$ = this.liqSourceService.getInfos()
  }
}
