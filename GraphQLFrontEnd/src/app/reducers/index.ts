import {
  ActionReducerMap,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LiquiditySourceInfo, LiquiditySourceSummary } from '../model/liquidity-source-data';
import { loadInfosSuccess, loadSummariesSuccess, summaryUpdateReceived } from '../state/liq-source.actions';

import { sortedIndexBy } from 'lodash'

export interface State {
  liqSource: LiqSourceState;
}

export interface LiqSourceState {
  infos: LiquiditySourceInfo[];
  summaries: LiquiditySourceSummary[];
}

export const initialLiqSourceState: LiqSourceState = {
  infos: [],
  summaries: []
}

export const reducers: ActionReducerMap<State> = {
  liqSource: createReducer(
    initialLiqSourceState,
    on(loadInfosSuccess, (state, { infos }) => ({ ...state, infos: infos })),
    on(loadSummariesSuccess, (state, { summaries }) => ({ ...state, summaries: summaries.sort((x, y) => x.liquiditySource.id - y.liquiditySource.id) })),
    on(summaryUpdateReceived, (state, { summary }) => {
      let newSummaries = [...state.summaries ];

      var index = sortedIndexBy(newSummaries, summary, x => x.liquiditySource.id);

      if (newSummaries.length <= index) {
        newSummaries.push(summary);
      } else {
        if (newSummaries[index].liquiditySource?.id === summary.liquiditySource?.id) {
          newSummaries[index] = summary;
        } else {
          newSummaries.splice(index, 0, summary);
        }
      }

      return ({ ...state, summaries: newSummaries })
    })
  )
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectLiqSource = (state: State) => state.liqSource;

export const selectInfos = createSelector(
  selectLiqSource,
  (state) => state.infos
);

export const selectSummaries = createSelector(
  selectLiqSource,
  (state) => state.summaries
);
