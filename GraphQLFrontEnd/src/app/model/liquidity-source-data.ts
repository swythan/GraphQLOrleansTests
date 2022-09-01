export interface LiquiditySourceInfo {
  id: number;
  name: string;
  transactionCost: number;
}

export interface LiquiditySourceSummary {
  liquiditySourceId: number;
  //liquiditySource: LiquiditySourceInfo;
  totalOrderCount: number;
  totalRejectCount: number;
}
