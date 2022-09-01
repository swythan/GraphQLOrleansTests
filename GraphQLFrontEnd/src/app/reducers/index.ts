import {
  ActionReducerMap,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LiquiditySourceInfo, LiquiditySourceSummary } from '../model/liquidity-source-data';
import { loadInfosSuccess, loadSummariesSuccess } from '../state/liq-source.actions';

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
    on(loadSummariesSuccess, (state, { summaries }) => ({ ...state, summaries: summaries }))
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
