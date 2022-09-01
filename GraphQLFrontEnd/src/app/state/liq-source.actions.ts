import { createAction, props } from '@ngrx/store';
import { LiquiditySourceInfo, LiquiditySourceSummary } from '../model/liquidity-source-data';

export const loadInfos = createAction(
  '[Liquidity Sources] Load Infos'
);

export const loadInfosSuccess = createAction(
  '[Liquidity Sources] Load Infos Success',
  props<{ infos: LiquiditySourceInfo[] }>()
);

export const loadInfosError = createAction(
  '[Liquidity Sources] Load Infos Error'
);

export const loadSummaries = createAction(
  '[Liquidity Sources] Load Summaries'
);

export const loadSummariesSuccess = createAction(
  '[Liquidity Sources] Load Summaries Success',
  props<{ summaries: LiquiditySourceSummary[] }>()
);

export const loadSummariesError = createAction(
  '[Liquidity Sources] Load Summaries Error'
);

export const startSummaryUpdates = createAction(
  '[Liquidity Sources] Start Summary Updates'
);

export const stopSummaryUpdates = createAction(
  '[Liquidity Sources] Stop Summary Updates'
);

export const summaryUpdateReceived = createAction(
  '[Liquidity Sources] Summary Update Received',
  props<{ summary: LiquiditySourceSummary }>()
);
