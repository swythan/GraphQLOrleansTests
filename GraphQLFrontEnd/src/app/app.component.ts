import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public infos?: LiquiditySourceInfo[];

  constructor(http: HttpClient) {
    http.get<LiquiditySourceInfo[]>('https://localhost:32772/liquiditySources/info/').subscribe(result => {
      this.infos = result;
    }, error => console.error(error));
  }

  title = 'GraphQLFrontEnd';
}

interface LiquiditySourceInfo {
  id: number;
  name: string;
  transactionCost: number;
}
