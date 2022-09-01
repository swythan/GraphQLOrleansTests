export interface LiquiditySourceInfo {
  id: number;
  name: string;
  transactionCost?: number;
}

export interface LiquiditySourceSummary {
  liquiditySource: LiquiditySourceInfo;
  totalOrderCount: number;
  totalRejectCount: number;
}
